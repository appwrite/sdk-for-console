import { Service } from '../service';
import { AppwriteException, Client } from '../client';
import type { Models } from '../models';
import type { UploadProgress, Payload } from '../client';

export class Proxy extends Service {

     constructor(client: Client)
     {
        super(client);
     }

    /**
     * List Rules
     *
     * Get a list of all the proxy rules. You can use the query params to filter
     * your results.
     *
     * @param {string[]} queries
     * @param {string} search
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async listRules(queries?: string[], search?: string): Promise<Models.ProxyRuleList> {
        let path = '/proxy/rules';
        let payload: Payload = {};

        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }

        if (typeof search !== 'undefined') {
            payload['search'] = search;
        }

        const uri = new URL(this.client.config.endpoint + path);
        return await this.client.call('get', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Create Rule
     *
     * Create a new proxy rule.
     *
     * @param {string} domain
     * @param {string} resourceType
     * @param {string} resourceId
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async createRule(domain: string, resourceType: string, resourceId?: string): Promise<Models.ProxyRule> {
        if (typeof domain === 'undefined') {
            throw new AppwriteException('Missing required parameter: "domain"');
        }

        if (typeof resourceType === 'undefined') {
            throw new AppwriteException('Missing required parameter: "resourceType"');
        }

        let path = '/proxy/rules';
        let payload: Payload = {};

        if (typeof domain !== 'undefined') {
            payload['domain'] = domain;
        }

        if (typeof resourceType !== 'undefined') {
            payload['resourceType'] = resourceType;
        }

        if (typeof resourceId !== 'undefined') {
            payload['resourceId'] = resourceId;
        }

        const uri = new URL(this.client.config.endpoint + path);
        return await this.client.call('post', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Get Rule
     *
     * Get a proxy rule by its unique ID.
     *
     * @param {string} ruleId
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async getRule(ruleId: string): Promise<Models.ProxyRule> {
        if (typeof ruleId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "ruleId"');
        }

        let path = '/proxy/rules/{ruleId}'.replace('{ruleId}', ruleId);
        let payload: Payload = {};

        const uri = new URL(this.client.config.endpoint + path);
        return await this.client.call('get', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Delete Rule
     *
     * Delete a proxy rule by its unique ID.
     *
     * @param {string} ruleId
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async deleteRule(ruleId: string): Promise<{}> {
        if (typeof ruleId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "ruleId"');
        }

        let path = '/proxy/rules/{ruleId}'.replace('{ruleId}', ruleId);
        let payload: Payload = {};

        const uri = new URL(this.client.config.endpoint + path);
        return await this.client.call('delete', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Update Rule Verification Status
     *
     *
     * @param {string} ruleId
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async updateRuleVerification(ruleId: string): Promise<Models.ProxyRule> {
        if (typeof ruleId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "ruleId"');
        }

        let path = '/proxy/rules/{ruleId}/verification'.replace('{ruleId}', ruleId);
        let payload: Payload = {};

        const uri = new URL(this.client.config.endpoint + path);
        return await this.client.call('patch', uri, {
            'content-type': 'application/json',
        }, payload);
    }
};
