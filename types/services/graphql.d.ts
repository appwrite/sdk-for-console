import { Client } from '../client';
export declare class Graphql {
    client: Client;
    constructor(client: Client);
    /**
     * Execute a GraphQL mutation.
     *
     * @param {object} params.query - The query or queries to execute.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    query(params: {
        query: object;
    }): Promise<{}>;
    /**
     * Execute a GraphQL mutation.
     *
     * @param {object} query - The query or queries to execute.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    query(query: object): Promise<{}>;
    /**
     * Execute a GraphQL mutation.
     *
     * @param {object} params.query - The query or queries to execute.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    mutation(params: {
        query: object;
    }): Promise<{}>;
    /**
     * Execute a GraphQL mutation.
     *
     * @param {object} query - The query or queries to execute.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    mutation(query: object): Promise<{}>;
}
