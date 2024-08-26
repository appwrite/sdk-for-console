import { Service } from '../service';
import { AppwriteException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';
import { ProjectUsageRange } from '../enums/project-usage-range';

export class Project {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Get project usage stats
     *
     *
     * @param {string} startDate
     * @param {string} endDate
     * @param {ProjectUsageRange} period
     * @throws {AppwriteException}
     * @returns {Promise<Models.UsageProject>}
     */
    async getUsage(startDate: string, endDate: string, period?: ProjectUsageRange): Promise<Models.UsageProject> {
        if (typeof startDate === 'undefined') {
            throw new AppwriteException('Missing required parameter: "startDate"');
        }
        if (typeof endDate === 'undefined') {
            throw new AppwriteException('Missing required parameter: "endDate"');
        }
        const apiPath = '/project/usage';
        const payload: Payload = {};
        if (typeof startDate !== 'undefined') {
            payload['startDate'] = startDate;
        }
        if (typeof endDate !== 'undefined') {
            payload['endDate'] = endDate;
        }
        if (typeof period !== 'undefined') {
            payload['period'] = period;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * List Variables
     *
     * Get a list of all project variables. These variables will be accessible in all Appwrite Functions at runtime.
     *
     * @throws {AppwriteException}
     * @returns {Promise<Models.VariableList>}
     */
    async listVariables(): Promise<Models.VariableList> {
        const apiPath = '/project/variables';
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * Create Variable
     *
     * Create a new project variable. This variable will be accessible in all Appwrite Functions at runtime.
     *
     * @param {string} key
     * @param {string} value
     * @throws {AppwriteException}
     * @returns {Promise<Models.Variable>}
     */
    async createVariable(key: string, value: string): Promise<Models.Variable> {
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        if (typeof value === 'undefined') {
            throw new AppwriteException('Missing required parameter: "value"');
        }
        const apiPath = '/project/variables';
        const payload: Payload = {};
        if (typeof key !== 'undefined') {
            payload['key'] = key;
        }
        if (typeof value !== 'undefined') {
            payload['value'] = value;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'post',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * Get Variable
     *
     * Get a project variable by its unique ID.
     *
     * @param {string} variableId
     * @throws {AppwriteException}
     * @returns {Promise<Models.Variable>}
     */
    async getVariable(variableId: string): Promise<Models.Variable> {
        if (typeof variableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "variableId"');
        }
        const apiPath = '/project/variables/{variableId}'.replace('{variableId}', variableId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * Update Variable
     *
     * Update project variable by its unique ID. This variable will be accessible in all Appwrite Functions at runtime.
     *
     * @param {string} variableId
     * @param {string} key
     * @param {string} value
     * @throws {AppwriteException}
     * @returns {Promise<Models.Variable>}
     */
    async updateVariable(variableId: string, key: string, value?: string): Promise<Models.Variable> {
        if (typeof variableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "variableId"');
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        const apiPath = '/project/variables/{variableId}'.replace('{variableId}', variableId);
        const payload: Payload = {};
        if (typeof key !== 'undefined') {
            payload['key'] = key;
        }
        if (typeof value !== 'undefined') {
            payload['value'] = value;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'put',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * Delete Variable
     *
     * Delete a project variable by its unique ID. 
     *
     * @param {string} variableId
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    async deleteVariable(variableId: string): Promise<{}> {
        if (typeof variableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "variableId"');
        }
        const apiPath = '/project/variables/{variableId}'.replace('{variableId}', variableId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'delete',
            uri,
            apiHeaders,
            payload
        );
    }
}
