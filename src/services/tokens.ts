import { Service } from '../service';
import { AppwriteException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

export class Tokens {
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
     * List all the tokens created for a specific file or bucket. You can use the query params to filter your results.
     *
     * @param {string} bucketId
     * @param {string} fileId
     * @param {string[]} queries
     * @throws {AppwriteException}
     * @returns {Promise<Models.ResourceTokenList>}
     */
    list(bucketId: string, fileId: string, queries?: string[]): Promise<Models.ResourceTokenList> {
        if (typeof bucketId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "bucketId"');
        }
        if (typeof fileId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "fileId"');
        }
        const apiPath = '/tokens/buckets/{bucketId}/files/{fileId}'.replace('{bucketId}', bucketId).replace('{fileId}', fileId);
        const payload: Payload = {};
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
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
     * Create a new token. A token is linked to a file. Token can be passed as a request URL search parameter.
     *
     * @param {string} bucketId
     * @param {string} fileId
     * @param {string} expire
     * @throws {AppwriteException}
     * @returns {Promise<Models.ResourceToken>}
     */
    createFileToken(bucketId: string, fileId: string, expire?: string): Promise<Models.ResourceToken> {
        if (typeof bucketId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "bucketId"');
        }
        if (typeof fileId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "fileId"');
        }
        const apiPath = '/tokens/buckets/{bucketId}/files/{fileId}'.replace('{bucketId}', bucketId).replace('{fileId}', fileId);
        const payload: Payload = {};
        if (typeof expire !== 'undefined') {
            payload['expire'] = expire;
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
     * Get a token by its unique ID.
     *
     * @param {string} tokenId
     * @throws {AppwriteException}
     * @returns {Promise<Models.ResourceToken>}
     */
    get(tokenId: string): Promise<Models.ResourceToken> {
        if (typeof tokenId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tokenId"');
        }
        const apiPath = '/tokens/{tokenId}'.replace('{tokenId}', tokenId);
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
     * Update a token by its unique ID. Use this endpoint to update a token&#039;s expiry date.
     *
     * @param {string} tokenId
     * @param {string} expire
     * @throws {AppwriteException}
     * @returns {Promise<Models.ResourceToken>}
     */
    update(tokenId: string, expire?: string): Promise<Models.ResourceToken> {
        if (typeof tokenId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tokenId"');
        }
        const apiPath = '/tokens/{tokenId}'.replace('{tokenId}', tokenId);
        const payload: Payload = {};
        if (typeof expire !== 'undefined') {
            payload['expire'] = expire;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Delete a token by its unique ID.
     *
     * @param {string} tokenId
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    delete(tokenId: string): Promise<{}> {
        if (typeof tokenId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tokenId"');
        }
        const apiPath = '/tokens/{tokenId}'.replace('{tokenId}', tokenId);
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
