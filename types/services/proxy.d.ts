import { Client } from '../client';
import type { Models } from '../models';
import { StatusCode } from '../enums/status-code';
import { ProxyResourceType } from '../enums/proxy-resource-type';
export declare class Proxy {
    client: Client;
    constructor(client: Client);
    /**
     * Get a list of all the proxy rules. You can use the query params to filter your results.
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/databases#querying-documents). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: domain, type, trigger, deploymentResourceType, deploymentResourceId, deploymentId, deploymentVcsProviderBranch
     * @param {string} params.search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ProxyRuleList>}
     */
    listRules(params?: {
        queries?: string[];
        search?: string;
        total?: boolean;
    }): Promise<Models.ProxyRuleList>;
    /**
     * Get a list of all the proxy rules. You can use the query params to filter your results.
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/databases#querying-documents). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: domain, type, trigger, deploymentResourceType, deploymentResourceId, deploymentId, deploymentVcsProviderBranch
     * @param {string} search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ProxyRuleList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listRules(queries?: string[], search?: string, total?: boolean): Promise<Models.ProxyRuleList>;
    /**
     * Create a new proxy rule for serving Appwrite's API on custom domain.
     *
     * @param {string} params.domain - Domain name.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ProxyRule>}
     */
    createAPIRule(params: {
        domain: string;
    }): Promise<Models.ProxyRule>;
    /**
     * Create a new proxy rule for serving Appwrite's API on custom domain.
     *
     * @param {string} domain - Domain name.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ProxyRule>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createAPIRule(domain: string): Promise<Models.ProxyRule>;
    /**
     * Create a new proxy rule for executing Appwrite Function on custom domain.
     *
     * @param {string} params.domain - Domain name.
     * @param {string} params.functionId - ID of function to be executed.
     * @param {string} params.branch - Name of VCS branch to deploy changes automatically
     * @throws {AppwriteException}
     * @returns {Promise<Models.ProxyRule>}
     */
    createFunctionRule(params: {
        domain: string;
        functionId: string;
        branch?: string;
    }): Promise<Models.ProxyRule>;
    /**
     * Create a new proxy rule for executing Appwrite Function on custom domain.
     *
     * @param {string} domain - Domain name.
     * @param {string} functionId - ID of function to be executed.
     * @param {string} branch - Name of VCS branch to deploy changes automatically
     * @throws {AppwriteException}
     * @returns {Promise<Models.ProxyRule>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createFunctionRule(domain: string, functionId: string, branch?: string): Promise<Models.ProxyRule>;
    /**
     * Create a new proxy rule for to redirect from custom domain to another domain.
     *
     * @param {string} params.domain - Domain name.
     * @param {string} params.url - Target URL of redirection
     * @param {StatusCode} params.statusCode - Status code of redirection
     * @param {string} params.resourceId - ID of parent resource.
     * @param {ProxyResourceType} params.resourceType - Type of parent resource.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ProxyRule>}
     */
    createRedirectRule(params: {
        domain: string;
        url: string;
        statusCode: StatusCode;
        resourceId: string;
        resourceType: ProxyResourceType;
    }): Promise<Models.ProxyRule>;
    /**
     * Create a new proxy rule for to redirect from custom domain to another domain.
     *
     * @param {string} domain - Domain name.
     * @param {string} url - Target URL of redirection
     * @param {StatusCode} statusCode - Status code of redirection
     * @param {string} resourceId - ID of parent resource.
     * @param {ProxyResourceType} resourceType - Type of parent resource.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ProxyRule>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createRedirectRule(domain: string, url: string, statusCode: StatusCode, resourceId: string, resourceType: ProxyResourceType): Promise<Models.ProxyRule>;
    /**
     * Create a new proxy rule for serving Appwrite Site on custom domain.
     *
     * @param {string} params.domain - Domain name.
     * @param {string} params.siteId - ID of site to be executed.
     * @param {string} params.branch - Name of VCS branch to deploy changes automatically
     * @throws {AppwriteException}
     * @returns {Promise<Models.ProxyRule>}
     */
    createSiteRule(params: {
        domain: string;
        siteId: string;
        branch?: string;
    }): Promise<Models.ProxyRule>;
    /**
     * Create a new proxy rule for serving Appwrite Site on custom domain.
     *
     * @param {string} domain - Domain name.
     * @param {string} siteId - ID of site to be executed.
     * @param {string} branch - Name of VCS branch to deploy changes automatically
     * @throws {AppwriteException}
     * @returns {Promise<Models.ProxyRule>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createSiteRule(domain: string, siteId: string, branch?: string): Promise<Models.ProxyRule>;
    /**
     * Get a proxy rule by its unique ID.
     *
     * @param {string} params.ruleId - Rule ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ProxyRule>}
     */
    getRule(params: {
        ruleId: string;
    }): Promise<Models.ProxyRule>;
    /**
     * Get a proxy rule by its unique ID.
     *
     * @param {string} ruleId - Rule ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ProxyRule>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getRule(ruleId: string): Promise<Models.ProxyRule>;
    /**
     * Delete a proxy rule by its unique ID.
     *
     * @param {string} params.ruleId - Rule ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteRule(params: {
        ruleId: string;
    }): Promise<{}>;
    /**
     * Delete a proxy rule by its unique ID.
     *
     * @param {string} ruleId - Rule ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteRule(ruleId: string): Promise<{}>;
    /**
     * Retry getting verification process of a proxy rule. This endpoint triggers domain verification by checking DNS records (CNAME) against the configured target domain. If verification is successful, a TLS certificate will be automatically provisioned for the domain.
     *
     * @param {string} params.ruleId - Rule ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ProxyRule>}
     */
    updateRuleVerification(params: {
        ruleId: string;
    }): Promise<Models.ProxyRule>;
    /**
     * Retry getting verification process of a proxy rule. This endpoint triggers domain verification by checking DNS records (CNAME) against the configured target domain. If verification is successful, a TLS certificate will be automatically provisioned for the domain.
     *
     * @param {string} ruleId - Rule ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ProxyRule>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateRuleVerification(ruleId: string): Promise<Models.ProxyRule>;
}
