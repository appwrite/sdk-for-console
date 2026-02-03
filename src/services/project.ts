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
     * Get comprehensive usage statistics for your project. View metrics including network requests, bandwidth, storage, function executions, database usage, and user activity. Specify a time range with startDate and endDate, and optionally set the data granularity with period (1h or 1d). The response includes both total counts and detailed breakdowns by resource, along with historical data over the specified period.
     *
     * @param {string} params.startDate - Starting date for the usage
     * @param {string} params.endDate - End date for the usage
     * @param {ProjectUsageRange} params.period - Period used
     * @throws {AppwriteException}
     * @returns {Promise<Models.UsageProject>}
     */
    getUsage(params: { startDate: string, endDate: string, period?: ProjectUsageRange }): Promise<Models.UsageProject>;
    /**
     * Get comprehensive usage statistics for your project. View metrics including network requests, bandwidth, storage, function executions, database usage, and user activity. Specify a time range with startDate and endDate, and optionally set the data granularity with period (1h or 1d). The response includes both total counts and detailed breakdowns by resource, along with historical data over the specified period.
     *
     * @param {string} startDate - Starting date for the usage
     * @param {string} endDate - End date for the usage
     * @param {ProjectUsageRange} period - Period used
     * @throws {AppwriteException}
     * @returns {Promise<Models.UsageProject>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getUsage(startDate: string, endDate: string, period?: ProjectUsageRange): Promise<Models.UsageProject>;
    getUsage(
        paramsOrFirst: { startDate: string, endDate: string, period?: ProjectUsageRange } | string,
        ...rest: [(string)?, (ProjectUsageRange)?]    
    ): Promise<Models.UsageProject> {
        let params: { startDate: string, endDate: string, period?: ProjectUsageRange };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { startDate: string, endDate: string, period?: ProjectUsageRange };
        } else {
            params = {
                startDate: paramsOrFirst as string,
                endDate: rest[0] as string,
                period: rest[1] as ProjectUsageRange            
            };
        }
        
        const startDate = params.startDate;
        const endDate = params.endDate;
        const period = params.period;

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
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Get a list of all project variables. These variables will be accessible in all Appwrite Functions at runtime.
     *
     * @throws {AppwriteException}
     * @returns {Promise<Models.VariableList>}
     */
    listVariables(): Promise<Models.VariableList> {

        const apiPath = '/project/variables';
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

    /**
     * Create a new project variable. This variable will be accessible in all Appwrite Functions at runtime.
     *
     * @param {string} params.key - Variable key. Max length: 255 chars.
     * @param {string} params.value - Variable value. Max length: 8192 chars.
     * @param {boolean} params.secret - Secret variables can be updated or deleted, but only projects can read them during build and runtime.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Variable>}
     */
    createVariable(params: { key: string, value: string, secret?: boolean }): Promise<Models.Variable>;
    /**
     * Create a new project variable. This variable will be accessible in all Appwrite Functions at runtime.
     *
     * @param {string} key - Variable key. Max length: 255 chars.
     * @param {string} value - Variable value. Max length: 8192 chars.
     * @param {boolean} secret - Secret variables can be updated or deleted, but only projects can read them during build and runtime.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Variable>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createVariable(key: string, value: string, secret?: boolean): Promise<Models.Variable>;
    createVariable(
        paramsOrFirst: { key: string, value: string, secret?: boolean } | string,
        ...rest: [(string)?, (boolean)?]    
    ): Promise<Models.Variable> {
        let params: { key: string, value: string, secret?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { key: string, value: string, secret?: boolean };
        } else {
            params = {
                key: paramsOrFirst as string,
                value: rest[0] as string,
                secret: rest[1] as boolean            
            };
        }
        
        const key = params.key;
        const value = params.value;
        const secret = params.secret;

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
        if (typeof secret !== 'undefined') {
            payload['secret'] = secret;
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

    /**
     * Get a project variable by its unique ID.
     *
     * @param {string} params.variableId - Variable unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Variable>}
     */
    getVariable(params: { variableId: string }): Promise<Models.Variable>;
    /**
     * Get a project variable by its unique ID.
     *
     * @param {string} variableId - Variable unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Variable>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getVariable(variableId: string): Promise<Models.Variable>;
    getVariable(
        paramsOrFirst: { variableId: string } | string    
    ): Promise<Models.Variable> {
        let params: { variableId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { variableId: string };
        } else {
            params = {
                variableId: paramsOrFirst as string            
            };
        }
        
        const variableId = params.variableId;

        if (typeof variableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "variableId"');
        }

        const apiPath = '/project/variables/{variableId}'.replace('{variableId}', variableId);
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

    /**
     * Update project variable by its unique ID. This variable will be accessible in all Appwrite Functions at runtime.
     *
     * @param {string} params.variableId - Variable unique ID.
     * @param {string} params.key - Variable key. Max length: 255 chars.
     * @param {string} params.value - Variable value. Max length: 8192 chars.
     * @param {boolean} params.secret - Secret variables can be updated or deleted, but only projects can read them during build and runtime.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Variable>}
     */
    updateVariable(params: { variableId: string, key: string, value?: string, secret?: boolean }): Promise<Models.Variable>;
    /**
     * Update project variable by its unique ID. This variable will be accessible in all Appwrite Functions at runtime.
     *
     * @param {string} variableId - Variable unique ID.
     * @param {string} key - Variable key. Max length: 255 chars.
     * @param {string} value - Variable value. Max length: 8192 chars.
     * @param {boolean} secret - Secret variables can be updated or deleted, but only projects can read them during build and runtime.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Variable>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateVariable(variableId: string, key: string, value?: string, secret?: boolean): Promise<Models.Variable>;
    updateVariable(
        paramsOrFirst: { variableId: string, key: string, value?: string, secret?: boolean } | string,
        ...rest: [(string)?, (string)?, (boolean)?]    
    ): Promise<Models.Variable> {
        let params: { variableId: string, key: string, value?: string, secret?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { variableId: string, key: string, value?: string, secret?: boolean };
        } else {
            params = {
                variableId: paramsOrFirst as string,
                key: rest[0] as string,
                value: rest[1] as string,
                secret: rest[2] as boolean            
            };
        }
        
        const variableId = params.variableId;
        const key = params.key;
        const value = params.value;
        const secret = params.secret;

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
        if (typeof secret !== 'undefined') {
            payload['secret'] = secret;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'put',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Delete a project variable by its unique ID. 
     *
     * @param {string} params.variableId - Variable unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteVariable(params: { variableId: string }): Promise<{}>;
    /**
     * Delete a project variable by its unique ID. 
     *
     * @param {string} variableId - Variable unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteVariable(variableId: string): Promise<{}>;
    deleteVariable(
        paramsOrFirst: { variableId: string } | string    
    ): Promise<{}> {
        let params: { variableId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { variableId: string };
        } else {
            params = {
                variableId: paramsOrFirst as string            
            };
        }
        
        const variableId = params.variableId;

        if (typeof variableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "variableId"');
        }

        const apiPath = '/project/variables/{variableId}'.replace('{variableId}', variableId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'delete',
            uri,
            apiHeaders,
            payload
        );
    }
}
