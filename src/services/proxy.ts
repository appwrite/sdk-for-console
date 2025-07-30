import { Service } from '../service';
import { AppwriteException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';
import { StatusCode } from '../enums/status-code';
import { ProxyResourceType } from '../enums/proxy-resource-type';

export class Proxy {
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
     * Get a list of all the proxy rules. You can use the query params to filter your results.
     *
     * @param {string[]} queries
     * @param {string} search
     * @throws {AppwriteException}
     * @returns {Promise<Models.ProxyRuleList>}
     */
    listRules(queries?: string[], search?: string): Promise<Models.ProxyRuleList> {
        const apiPath = '/proxy/rules';
        const payload: Payload = {};
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }
        if (typeof search !== 'undefined') {
            payload['search'] = search;
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
     * Create a new proxy rule for serving Appwrite&#039;s API on custom domain.
     *
     * @param {string} domain
     * @throws {AppwriteException}
     * @returns {Promise<Models.ProxyRule>}
     */
    createAPIRule(domain: string): Promise<Models.ProxyRule> {
        if (typeof domain === 'undefined') {
            throw new AppwriteException('Missing required parameter: "domain"');
        }
        const apiPath = '/proxy/rules/api';
        const payload: Payload = {};
        if (typeof domain !== 'undefined') {
            payload['domain'] = domain;
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
     * Create a new proxy rule for executing Appwrite Function on custom domain.
     *
     * @param {string} domain
     * @param {string} functionId
     * @param {string} branch
     * @throws {AppwriteException}
     * @returns {Promise<Models.ProxyRule>}
     */
    createFunctionRule(domain: string, functionId: string, branch?: string): Promise<Models.ProxyRule> {
        if (typeof domain === 'undefined') {
            throw new AppwriteException('Missing required parameter: "domain"');
        }
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }
        const apiPath = '/proxy/rules/function';
        const payload: Payload = {};
        if (typeof domain !== 'undefined') {
            payload['domain'] = domain;
        }
        if (typeof functionId !== 'undefined') {
            payload['functionId'] = functionId;
        }
        if (typeof branch !== 'undefined') {
            payload['branch'] = branch;
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
     * Create a new proxy rule for to redirect from custom domain to another domain.
     *
     * @param {string} domain
     * @param {string} url
     * @param {StatusCode} statusCode
     * @param {string} resourceId
     * @param {ProxyResourceType} resourceType
     * @throws {AppwriteException}
     * @returns {Promise<Models.ProxyRule>}
     */
    createRedirectRule(domain: string, url: string, statusCode: StatusCode, resourceId: string, resourceType: ProxyResourceType): Promise<Models.ProxyRule> {
        if (typeof domain === 'undefined') {
            throw new AppwriteException('Missing required parameter: "domain"');
        }
        if (typeof url === 'undefined') {
            throw new AppwriteException('Missing required parameter: "url"');
        }
        if (typeof statusCode === 'undefined') {
            throw new AppwriteException('Missing required parameter: "statusCode"');
        }
        if (typeof resourceId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "resourceId"');
        }
        if (typeof resourceType === 'undefined') {
            throw new AppwriteException('Missing required parameter: "resourceType"');
        }
        const apiPath = '/proxy/rules/redirect';
        const payload: Payload = {};
        if (typeof domain !== 'undefined') {
            payload['domain'] = domain;
        }
        if (typeof url !== 'undefined') {
            payload['url'] = url;
        }
        if (typeof statusCode !== 'undefined') {
            payload['statusCode'] = statusCode;
        }
        if (typeof resourceId !== 'undefined') {
            payload['resourceId'] = resourceId;
        }
        if (typeof resourceType !== 'undefined') {
            payload['resourceType'] = resourceType;
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
     * Create a new proxy rule for serving Appwrite Site on custom domain.
     *
     * @param {string} domain
     * @param {string} siteId
     * @param {string} branch
     * @throws {AppwriteException}
     * @returns {Promise<Models.ProxyRule>}
     */
    createSiteRule(domain: string, siteId: string, branch?: string): Promise<Models.ProxyRule> {
        if (typeof domain === 'undefined') {
            throw new AppwriteException('Missing required parameter: "domain"');
        }
        if (typeof siteId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "siteId"');
        }
        const apiPath = '/proxy/rules/site';
        const payload: Payload = {};
        if (typeof domain !== 'undefined') {
            payload['domain'] = domain;
        }
        if (typeof siteId !== 'undefined') {
            payload['siteId'] = siteId;
        }
        if (typeof branch !== 'undefined') {
            payload['branch'] = branch;
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
     * Get a proxy rule by its unique ID.
     *
     * @param {string} ruleId
     * @throws {AppwriteException}
     * @returns {Promise<Models.ProxyRule>}
     */
    getRule(ruleId: string): Promise<Models.ProxyRule> {
        if (typeof ruleId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "ruleId"');
        }
        const apiPath = '/proxy/rules/{ruleId}'.replace('{ruleId}', ruleId);
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
     * Delete a proxy rule by its unique ID.
     *
     * @param {string} ruleId
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteRule(ruleId: string): Promise<{}> {
        if (typeof ruleId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "ruleId"');
        }
        const apiPath = '/proxy/rules/{ruleId}'.replace('{ruleId}', ruleId);
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

    /**
     * Retry getting verification process of a proxy rule. This endpoint triggers domain verification by checking DNS records (CNAME) against the configured target domain. If verification is successful, a TLS certificate will be automatically provisioned for the domain.
     *
     * @param {string} ruleId
     * @throws {AppwriteException}
     * @returns {Promise<Models.ProxyRule>}
     */
    updateRuleVerification(ruleId: string): Promise<Models.ProxyRule> {
        if (typeof ruleId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "ruleId"');
        }
        const apiPath = '/proxy/rules/{ruleId}/verification'.replace('{ruleId}', ruleId);
        const payload: Payload = {};
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
}
