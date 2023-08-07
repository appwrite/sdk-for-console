import { Service } from '../service';
import { AppwriteException, Client } from '../client';
import type { Models } from '../models';
import type { UploadProgress, Payload } from '../client';

export class Project extends Service {

     constructor(client: Client)
     {
        super(client);
     }

        /**
         * Get usage stats for a project
         *
         *
         * @param {string} range
         * @throws {AppwriteException}
         * @returns {Promise}
         */
        async getUsage(range?: string): Promise<Models.UsageProject> {
            let path = '/project/usage';
            let payload: Payload = {};

            if (typeof range !== 'undefined') {
                payload['range'] = range;
            }

            const uri = new URL(this.client.config.endpoint + path);
            return await this.client.call('get', uri, {
                'content-type': 'application/json',
            }, payload);
        }
};
