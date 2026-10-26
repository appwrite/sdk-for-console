import { AppwriteException, Client, type Payload } from '../client';

export class Graphql {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Execute a GraphQL query.
     *
     * @param {string} params.query - The query to execute.
     * @param {string} params.operationName - The name of the operation to execute.
     * @param {string} params.variables - The JSON encoded variables to use in the query.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    get(params: {
        query: string;
        operationName?: string;
        variables?: string;
    }): Promise<{}>;
    /**
     * Execute a GraphQL query.
     *
     * @param {string} query - The query to execute.
     * @param {string} operationName - The name of the operation to execute.
     * @param {string} variables - The JSON encoded variables to use in the query.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    get(query: string, operationName?: string, variables?: string): Promise<{}>;
    get(
        paramsOrFirst:
            | { query: string; operationName?: string; variables?: string }
            | string,
        ...rest: [string?, string?]
    ): Promise<{}> {
        let params: {
            query: string;
            operationName?: string;
            variables?: string;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                query: string;
                operationName?: string;
                variables?: string;
            };
        } else {
            params = {
                query: paramsOrFirst as string,
                operationName: rest[0] as string,
                variables: rest[1] as string,
            };
        }

        const query = params.query;
        const operationName = params.operationName;
        const variables = params.variables;

        if (typeof query === 'undefined') {
            throw new AppwriteException('Missing required parameter: "query"');
        }
        const apiPath = '/graphql';
        const apiPayload: Payload = {};
        if (typeof query !== 'undefined') {
            apiPayload['query'] = query;
        }
        if (typeof operationName !== 'undefined') {
            apiPayload['operationName'] = operationName;
        }
        if (typeof variables !== 'undefined') {
            apiPayload['variables'] = variables;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'x-sdk-graphql': 'true',
            accept: 'application/json',
        };

        return this.client.call('get', uri, apiHeaders, apiPayload);
    }

    /**
     * Execute a GraphQL mutation.
     *
     * @param {object} params.query - The query or queries to execute.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    query(params: { query: object }): Promise<{}>;
    /**
     * Execute a GraphQL mutation.
     *
     * @param {object} query - The query or queries to execute.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    query(query: object): Promise<{}>;
    query(paramsOrFirst: { query: object } | object): Promise<{}> {
        let params: { query: object };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst) &&
            'query' in paramsOrFirst
        ) {
            params = (paramsOrFirst || {}) as { query: object };
        } else {
            params = {
                query: paramsOrFirst as object,
            };
        }

        const query = params.query;

        if (typeof query === 'undefined') {
            throw new AppwriteException('Missing required parameter: "query"');
        }
        const apiPath = '/graphql';
        const apiPayload: Payload = {};
        if (typeof query !== 'undefined') {
            apiPayload['query'] = query;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'x-sdk-graphql': 'true',
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('post', uri, apiHeaders, apiPayload);
    }

    /**
     * Execute a GraphQL mutation.
     *
     * @param {object} params.query - The query or queries to execute.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    mutation(params: { query: object }): Promise<{}>;
    /**
     * Execute a GraphQL mutation.
     *
     * @param {object} query - The query or queries to execute.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    mutation(query: object): Promise<{}>;
    mutation(paramsOrFirst: { query: object } | object): Promise<{}> {
        let params: { query: object };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst) &&
            'query' in paramsOrFirst
        ) {
            params = (paramsOrFirst || {}) as { query: object };
        } else {
            params = {
                query: paramsOrFirst as object,
            };
        }

        const query = params.query;

        if (typeof query === 'undefined') {
            throw new AppwriteException('Missing required parameter: "query"');
        }
        const apiPath = '/graphql/mutation';
        const apiPayload: Payload = {};
        if (typeof query !== 'undefined') {
            apiPayload['query'] = query;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'x-sdk-graphql': 'true',
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('post', uri, apiHeaders, apiPayload);
    }
}
