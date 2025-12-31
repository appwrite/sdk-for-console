import { Service } from '../service';
import { AppwriteException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';


export class Assistant {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Send a prompt to the AI assistant and receive a response. This endpoint allows you to interact with Appwrite's AI assistant by sending questions or prompts and receiving helpful responses in real-time through a server-sent events stream. 
     *
     * @param {string} params.prompt - Prompt. A string containing questions asked to the AI assistant.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    chat(params: { prompt: string  }): Promise<{}>;
    /**
     * Send a prompt to the AI assistant and receive a response. This endpoint allows you to interact with Appwrite's AI assistant by sending questions or prompts and receiving helpful responses in real-time through a server-sent events stream. 
     *
     * @param {string} prompt - Prompt. A string containing questions asked to the AI assistant.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    chat(prompt: string): Promise<{}>;
    chat(
        paramsOrFirst: { prompt: string } | string    
    ): Promise<{}> {
        let params: { prompt: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { prompt: string };
        } else {
            params = {
                prompt: paramsOrFirst as string            
            };
        }
        
        const prompt = params.prompt;

        if (typeof prompt === 'undefined') {
            throw new AppwriteException('Missing required parameter: "prompt"');
        }

        const apiPath = '/console/assistant';
        const payload: Payload = {};
        if (typeof prompt !== 'undefined') {
            payload['prompt'] = prompt;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            payload
        );
    }
}
