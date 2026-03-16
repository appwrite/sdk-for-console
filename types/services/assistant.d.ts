import { Client } from '../client';
export declare class Assistant {
    client: Client;
    constructor(client: Client);
    /**
     * Send a prompt to the AI assistant and receive a response. This endpoint allows you to interact with Appwrite's AI assistant by sending questions or prompts and receiving helpful responses in real-time through a server-sent events stream.
     *
     * @param {string} params.prompt - Prompt. A string containing questions asked to the AI assistant.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    chat(params: {
        prompt: string;
    }): Promise<{}>;
    /**
     * Send a prompt to the AI assistant and receive a response. This endpoint allows you to interact with Appwrite's AI assistant by sending questions or prompts and receiving helpful responses in real-time through a server-sent events stream.
     *
     * @param {string} prompt - Prompt. A string containing questions asked to the AI assistant.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    chat(prompt: string): Promise<{}>;
}
