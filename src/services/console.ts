import { Service } from '../service';
import { AppwriteException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';
import { ConsoleResourceType } from '../enums/console-resource-type';

export class Console {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Check if a resource ID is available.
     *
     * @param {string} value
     * @param {ConsoleResourceType} type
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    getResource(value: string, type: ConsoleResourceType): Promise<{}> {
        if (typeof value === 'undefined') {
            throw new AppwriteException('Missing required parameter: "value"');
        }
        if (typeof type === 'undefined') {
            throw new AppwriteException('Missing required parameter: "type"');
        }
        const apiPath = '/console/resources';
        const payload: Payload = {};
        if (typeof value !== 'undefined') {
            payload['value'] = value;
        }
        if (typeof type !== 'undefined') {
            payload['type'] = type;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * Get all Environment Variables that are relevant for the console.
     *
     * @throws {AppwriteException}
     * @returns {Promise<Models.ConsoleVariables>}
     */
    variables(): Promise<Models.ConsoleVariables> {
        const apiPath = '/console/variables';
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }
}
