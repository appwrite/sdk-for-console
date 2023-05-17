import { Service } from '../service';
import { AppwriteException, Client } from '../client';
import type { Models } from '../models';
import type { UploadProgress, Payload } from '../client';

export class Console extends Service {

     constructor(client: Client)
     {
        super(client);
     }

        /**
         * Get Variables
         *
         * Get all Environment Variables that are relevant for the console.
         *
         * @throws {AppwriteException}
         * @returns {Promise}
         */
        async variables(): Promise<Models.ConsoleVariables> {
            let path = '/console/variables';
            let payload: Payload = {};

            const uri = new URL(this.client.config.endpoint + path);
            return await this.client.call('get', uri, {
                'content-type': 'application/json',
            }, payload);
        }
};
