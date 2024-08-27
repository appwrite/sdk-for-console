import { Service } from '../service';
import { AppwriteException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';
import { ResourceType } from '../enums/resource-type';

export class Proxy {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * List Rules
     *
     * Get a list of all the proxy rules. You can use the query params to filter your results.
     *
     * @param {string[]} queries
     * @param {string} search
     * @throws {AppwriteException}
     * @returns {Promise<Models.ProxyRuleList>}
     */
    async listRules(queries?: string[], search?: string): Promise<Models.ProxyRuleList> {
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
     * Create Rule
     *
     * Create a new proxy rule.
     *
     * @param {string} domain
     * @param {ResourceType} resourceType
     * @param {string} resourceId
     * @throws {AppwriteException}
     * @returns {Promise<Models.ProxyRule>}
     */
    async createRule(domain: string, resourceType: ResourceType, resourceId?: string): Promise<Models.ProxyRule> {
        if (typeof domain === 'undefined') {
            throw new AppwriteException('Missing required parameter: "domain"');
        }
        if (typeof resourceType === 'undefined') {
            throw new AppwriteException('Missing required parameter: "resourceType"');
        }
        const apiPath = '/proxy/rules';
        const payload: Payload = {};
        if (typeof domain !== 'undefined') {
            payload['domain'] = domain;
        }
        if (typeof resourceType !== 'undefined') {
            payload['resourceType'] = resourceType;
        }
        if (typeof resourceId !== 'undefined') {
            payload['resourceId'] = resourceId;
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
     * Get Rule
     *
     * Get a proxy rule by its unique ID.
     *
     * @param {string} ruleId
     * @throws {AppwriteException}
     * @returns {Promise<Models.ProxyRule>}
     */
    async getRule(ruleId: string): Promise<Models.ProxyRule> {
        if (typeof ruleId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "ruleId"');
        }
        const apiPath = '/proxy/rules/{ruleId}'.replace('{ruleId}', ruleId);
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
     * Delete Rule
     *
     * Delete a proxy rule by its unique ID.
     *
     * @param {string} ruleId
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    async deleteRule(ruleId: string): Promise<{}> {
        if (typeof ruleId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "ruleId"');
        }
        const apiPath = '/proxy/rules/{ruleId}'.replace('{ruleId}', ruleId);
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
    /**
     * Update Rule Verification Status
     *
     *
     * @param {string} ruleId
     * @throws {AppwriteException}
     * @returns {Promise<Models.ProxyRule>}
     */
    async updateRuleVerification(ruleId: string): Promise<Models.ProxyRule> {
        if (typeof ruleId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "ruleId"');
        }
        const apiPath = '/proxy/rules/{ruleId}/verification'.replace('{ruleId}', ruleId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload
        );
    }
}
