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
     * Create a new Document. Before using this route, you should create a new collection resource using either a [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection) API or directly from your database console.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} documentId
     * @param {Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Omit<Document, keyof Models.Document>} data
     * @param {string[]} permissions
     * @throws {AppwriteException}
     * @returns {Promise<Document>}
     */
    createDocument<Document extends Models.Document = Models.DefaultDocument>(databaseId: string, collectionId: string, documentId: string, data: Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Omit<Document, keyof Models.Document>, permissions?: string[]): Promise<Document> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }
        if (typeof documentId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "documentId"');
        }
        if (typeof data === 'undefined') {
            throw new AppwriteException('Missing required parameter: "data"');
        }
        const apiPath = '/databases/{databaseId}/collections/{collectionId}/documents'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
        const payload: Payload = {};
        if (typeof documentId !== 'undefined') {
            payload['documentId'] = documentId;
        }
        if (typeof data !== 'undefined') {
            payload['data'] = data;
        }
        if (typeof permissions !== 'undefined') {
            payload['permissions'] = permissions;
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
     * **WARNING: Experimental Feature** - This endpoint is experimental and not yet officially supported. It may be subject to breaking changes or removal in future versions.
     * 
     * Create new Documents. Before using this route, you should create a new collection resource using either a [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection) API or directly from your database console.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {object[]} documents
     * @throws {AppwriteException}
     * @returns {Promise<Models.DocumentList<Document>>}
     */
    createDocuments<Document extends Models.Document = Models.DefaultDocument>(databaseId: string, collectionId: string, documents: object[]): Promise<Models.DocumentList<Document>> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }
        if (typeof documents === 'undefined') {
            throw new AppwriteException('Missing required parameter: "documents"');
        }
        const apiPath = '/databases/{databaseId}/collections/{collectionId}/documents'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
        const payload: Payload = {};
        if (typeof documents !== 'undefined') {
            payload['documents'] = documents;
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
     * Get comprehensive usage statistics for your project. View metrics including network requests, bandwidth, storage, function executions, database usage, and user activity. Specify a time range with startDate and endDate, and optionally set the data granularity with period (1h or 1d). The response includes both total counts and detailed breakdowns by resource, along with historical data over the specified period.
     *
     * @param {string} startDate
     * @param {string} endDate
     * @param {ProjectUsageRange} period
     * @throws {AppwriteException}
     * @returns {Promise<Models.UsageProject>}
     */
    getUsage(startDate: string, endDate: string, period?: ProjectUsageRange): Promise<Models.UsageProject> {
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
     * @param {string} key
     * @param {string} value
     * @param {boolean} secret
     * @throws {AppwriteException}
     * @returns {Promise<Models.Variable>}
     */
    createVariable(key: string, value: string, secret?: boolean): Promise<Models.Variable> {
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
     * @param {string} variableId
     * @throws {AppwriteException}
     * @returns {Promise<Models.Variable>}
     */
    getVariable(variableId: string): Promise<Models.Variable> {
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
     * @param {string} variableId
     * @param {string} key
     * @param {string} value
     * @param {boolean} secret
     * @throws {AppwriteException}
     * @returns {Promise<Models.Variable>}
     */
    updateVariable(variableId: string, key: string, value?: string, secret?: boolean): Promise<Models.Variable> {
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
     * @param {string} variableId
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteVariable(variableId: string): Promise<{}> {
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
