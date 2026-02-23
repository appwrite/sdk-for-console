import { Client } from '../client';
import type { Models } from '../models';
export declare class Tokens {
    client: Client;
    constructor(client: Client);
    /**
     * List all the tokens created for a specific file or bucket. You can use the query params to filter your results.
     *
     * @param {string} params.bucketId - Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).
     * @param {string} params.fileId - File unique ID.
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: expire
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ResourceTokenList>}
     */
    list(params: {
        bucketId: string;
        fileId: string;
        queries?: string[];
        total?: boolean;
    }): Promise<Models.ResourceTokenList>;
    /**
     * List all the tokens created for a specific file or bucket. You can use the query params to filter your results.
     *
     * @param {string} bucketId - Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).
     * @param {string} fileId - File unique ID.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: expire
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ResourceTokenList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    list(bucketId: string, fileId: string, queries?: string[], total?: boolean): Promise<Models.ResourceTokenList>;
    /**
     * Create a new token. A token is linked to a file. Token can be passed as a request URL search parameter.
     *
     * @param {string} params.bucketId - Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).
     * @param {string} params.fileId - File unique ID.
     * @param {string} params.expire - Token expiry date
     * @throws {AppwriteException}
     * @returns {Promise<Models.ResourceToken>}
     */
    createFileToken(params: {
        bucketId: string;
        fileId: string;
        expire?: string;
    }): Promise<Models.ResourceToken>;
    /**
     * Create a new token. A token is linked to a file. Token can be passed as a request URL search parameter.
     *
     * @param {string} bucketId - Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).
     * @param {string} fileId - File unique ID.
     * @param {string} expire - Token expiry date
     * @throws {AppwriteException}
     * @returns {Promise<Models.ResourceToken>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createFileToken(bucketId: string, fileId: string, expire?: string): Promise<Models.ResourceToken>;
    /**
     * Get a token by its unique ID.
     *
     * @param {string} params.tokenId - Token ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ResourceToken>}
     */
    get(params: {
        tokenId: string;
    }): Promise<Models.ResourceToken>;
    /**
     * Get a token by its unique ID.
     *
     * @param {string} tokenId - Token ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ResourceToken>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    get(tokenId: string): Promise<Models.ResourceToken>;
    /**
     * Update a token by its unique ID. Use this endpoint to update a token's expiry date.
     *
     * @param {string} params.tokenId - Token unique ID.
     * @param {string} params.expire - File token expiry date
     * @throws {AppwriteException}
     * @returns {Promise<Models.ResourceToken>}
     */
    update(params: {
        tokenId: string;
        expire?: string;
    }): Promise<Models.ResourceToken>;
    /**
     * Update a token by its unique ID. Use this endpoint to update a token's expiry date.
     *
     * @param {string} tokenId - Token unique ID.
     * @param {string} expire - File token expiry date
     * @throws {AppwriteException}
     * @returns {Promise<Models.ResourceToken>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    update(tokenId: string, expire?: string): Promise<Models.ResourceToken>;
    /**
     * Delete a token by its unique ID.
     *
     * @param {string} params.tokenId - Token ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    delete(params: {
        tokenId: string;
    }): Promise<{}>;
    /**
     * Delete a token by its unique ID.
     *
     * @param {string} tokenId - Token ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    delete(tokenId: string): Promise<{}>;
}
