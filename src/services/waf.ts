import { Service } from '../service';
import { AppwriteException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';


export class Waf {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * List WAF rules for the current project.
     * 
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.
     * @param {string} params.search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.WafRuleList>}
     */
    listRules(params?: { queries?: string[], search?: string, total?: boolean }): Promise<Models.WafRuleList>;
    /**
     * List WAF rules for the current project.
     * 
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.
     * @param {string} search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.WafRuleList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listRules(queries?: string[], search?: string, total?: boolean): Promise<Models.WafRuleList>;
    listRules(
        paramsOrFirst?: { queries?: string[], search?: string, total?: boolean } | string[],
        ...rest: [(string)?, (boolean)?]    
    ): Promise<Models.WafRuleList> {
        let params: { queries?: string[], search?: string, total?: boolean };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { queries?: string[], search?: string, total?: boolean };
        } else {
            params = {
                queries: paramsOrFirst as string[],
                search: rest[0] as string,
                total: rest[1] as boolean            
            };
        }
        
        const queries = params.queries;
        const search = params.search;
        const total = params.total;


        const apiPath = '/waf/rules';
        const payload: Payload = {};
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }
        if (typeof search !== 'undefined') {
            payload['search'] = search;
        }
        if (typeof total !== 'undefined') {
            payload['total'] = total;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'accept': 'application/json',
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Create a bypass WAF rule.
     * 
     *
     * @param {string} params.ruleId - Rule ID. Choose a custom ID or pass `ID.unique()` to generate a unique one.
     * @param {string} params.resourceType - Resource type the rule applies to.
     * @param {string} params.name - Rule name.
     * @param {string} params.resourceId - Resource identifier. Leave empty for the API resource type.
     * @param {string} params.description - Optional description for the rule.
     * @param {number} params.priority - Evaluation priority. Lower numbers run earlier.
     * @param {boolean} params.enabled - Set to false to create the rule in a disabled state.
     * @param {string} params.conditions - Array of condition strings generated using the WAF Condition builder. Maximum of 100 conditions are allowed, each 4096 characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Models.WafRuleBypass>}
     */
    createBypassRule(params: { ruleId: string, resourceType: string, name: string, resourceId?: string, description?: string, priority?: number, enabled?: boolean, conditions?: string }): Promise<Models.WafRuleBypass>;
    /**
     * Create a bypass WAF rule.
     * 
     *
     * @param {string} ruleId - Rule ID. Choose a custom ID or pass `ID.unique()` to generate a unique one.
     * @param {string} resourceType - Resource type the rule applies to.
     * @param {string} name - Rule name.
     * @param {string} resourceId - Resource identifier. Leave empty for the API resource type.
     * @param {string} description - Optional description for the rule.
     * @param {number} priority - Evaluation priority. Lower numbers run earlier.
     * @param {boolean} enabled - Set to false to create the rule in a disabled state.
     * @param {string} conditions - Array of condition strings generated using the WAF Condition builder. Maximum of 100 conditions are allowed, each 4096 characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Models.WafRuleBypass>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createBypassRule(ruleId: string, resourceType: string, name: string, resourceId?: string, description?: string, priority?: number, enabled?: boolean, conditions?: string): Promise<Models.WafRuleBypass>;
    createBypassRule(
        paramsOrFirst: { ruleId: string, resourceType: string, name: string, resourceId?: string, description?: string, priority?: number, enabled?: boolean, conditions?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (number)?, (boolean)?, (string)?]    
    ): Promise<Models.WafRuleBypass> {
        let params: { ruleId: string, resourceType: string, name: string, resourceId?: string, description?: string, priority?: number, enabled?: boolean, conditions?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { ruleId: string, resourceType: string, name: string, resourceId?: string, description?: string, priority?: number, enabled?: boolean, conditions?: string };
        } else {
            params = {
                ruleId: paramsOrFirst as string,
                resourceType: rest[0] as string,
                name: rest[1] as string,
                resourceId: rest[2] as string,
                description: rest[3] as string,
                priority: rest[4] as number,
                enabled: rest[5] as boolean,
                conditions: rest[6] as string            
            };
        }
        
        const ruleId = params.ruleId;
        const resourceType = params.resourceType;
        const name = params.name;
        const resourceId = params.resourceId;
        const description = params.description;
        const priority = params.priority;
        const enabled = params.enabled;
        const conditions = params.conditions;

        if (typeof ruleId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "ruleId"');
        }
        if (typeof resourceType === 'undefined') {
            throw new AppwriteException('Missing required parameter: "resourceType"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }

        const apiPath = '/waf/rules/bypass';
        const payload: Payload = {};
        if (typeof ruleId !== 'undefined') {
            payload['ruleId'] = ruleId;
        }
        if (typeof resourceType !== 'undefined') {
            payload['resourceType'] = resourceType;
        }
        if (typeof resourceId !== 'undefined') {
            payload['resourceId'] = resourceId;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof description !== 'undefined') {
            payload['description'] = description;
        }
        if (typeof priority !== 'undefined') {
            payload['priority'] = priority;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        if (typeof conditions !== 'undefined') {
            payload['conditions'] = conditions;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
        }

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Update a bypass WAF rule.
     * 
     *
     * @param {string} params.ruleId - Rule ID.
     * @param {string} params.resourceType - Resource type the rule applies to.
     * @param {string} params.resourceId - Resource identifier. Required for functions and sites.
     * @param {string} params.name - Rule name.
     * @param {string} params.description - Optional description for the rule.
     * @param {number} params.priority - Evaluation priority. Lower numbers run earlier.
     * @param {boolean} params.enabled - Set to false to disable the rule.
     * @param {string} params.conditions - Array of condition strings generated using the WAF Condition builder. Maximum of 100 conditions are allowed, each 4096 characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Models.WafRuleBypass>}
     */
    updateBypassRule(params: { ruleId: string, resourceType?: string, resourceId?: string, name?: string, description?: string, priority?: number, enabled?: boolean, conditions?: string }): Promise<Models.WafRuleBypass>;
    /**
     * Update a bypass WAF rule.
     * 
     *
     * @param {string} ruleId - Rule ID.
     * @param {string} resourceType - Resource type the rule applies to.
     * @param {string} resourceId - Resource identifier. Required for functions and sites.
     * @param {string} name - Rule name.
     * @param {string} description - Optional description for the rule.
     * @param {number} priority - Evaluation priority. Lower numbers run earlier.
     * @param {boolean} enabled - Set to false to disable the rule.
     * @param {string} conditions - Array of condition strings generated using the WAF Condition builder. Maximum of 100 conditions are allowed, each 4096 characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Models.WafRuleBypass>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateBypassRule(ruleId: string, resourceType?: string, resourceId?: string, name?: string, description?: string, priority?: number, enabled?: boolean, conditions?: string): Promise<Models.WafRuleBypass>;
    updateBypassRule(
        paramsOrFirst: { ruleId: string, resourceType?: string, resourceId?: string, name?: string, description?: string, priority?: number, enabled?: boolean, conditions?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (number)?, (boolean)?, (string)?]    
    ): Promise<Models.WafRuleBypass> {
        let params: { ruleId: string, resourceType?: string, resourceId?: string, name?: string, description?: string, priority?: number, enabled?: boolean, conditions?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { ruleId: string, resourceType?: string, resourceId?: string, name?: string, description?: string, priority?: number, enabled?: boolean, conditions?: string };
        } else {
            params = {
                ruleId: paramsOrFirst as string,
                resourceType: rest[0] as string,
                resourceId: rest[1] as string,
                name: rest[2] as string,
                description: rest[3] as string,
                priority: rest[4] as number,
                enabled: rest[5] as boolean,
                conditions: rest[6] as string            
            };
        }
        
        const ruleId = params.ruleId;
        const resourceType = params.resourceType;
        const resourceId = params.resourceId;
        const name = params.name;
        const description = params.description;
        const priority = params.priority;
        const enabled = params.enabled;
        const conditions = params.conditions;

        if (typeof ruleId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "ruleId"');
        }

        const apiPath = '/waf/rules/bypass/{ruleId}'.replace('{ruleId}', encodeURIComponent(String(ruleId)));
        const payload: Payload = {};
        if (typeof resourceType !== 'undefined') {
            payload['resourceType'] = resourceType;
        }
        if (typeof resourceId !== 'undefined') {
            payload['resourceId'] = resourceId;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof description !== 'undefined') {
            payload['description'] = description;
        }
        if (typeof priority !== 'undefined') {
            payload['priority'] = priority;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        if (typeof conditions !== 'undefined') {
            payload['conditions'] = conditions;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Create a challenge WAF rule.
     * 
     *
     * @param {string} params.ruleId - Rule ID. Choose a custom ID or pass `ID.unique()` to generate a unique one.
     * @param {string} params.resourceType - Resource type the rule applies to.
     * @param {string} params.name - Rule name.
     * @param {string} params.resourceId - Resource identifier. Required for functions and sites.
     * @param {string} params.description - Optional description for the rule.
     * @param {string} params.challengeType - Challenge type enforced by the rule. Only `custom` (proof-of-work) is available today.
     * @param {number} params.difficulty - Proof-of-work difficulty (leading zero bits) for custom challenges.
     * @param {number} params.ttl - Clearance lifetime in seconds granted after solving the challenge.
     * @param {number} params.priority - Evaluation priority. Lower numbers run earlier.
     * @param {boolean} params.enabled - Set to false to create the rule in a disabled state.
     * @param {string} params.conditions - Array of condition strings generated using the WAF Condition builder. Maximum of 100 conditions are allowed, each 4096 characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Models.WafRuleChallenge>}
     */
    createChallengeRule(params: { ruleId: string, resourceType: string, name: string, resourceId?: string, description?: string, challengeType?: string, difficulty?: number, ttl?: number, priority?: number, enabled?: boolean, conditions?: string }): Promise<Models.WafRuleChallenge>;
    /**
     * Create a challenge WAF rule.
     * 
     *
     * @param {string} ruleId - Rule ID. Choose a custom ID or pass `ID.unique()` to generate a unique one.
     * @param {string} resourceType - Resource type the rule applies to.
     * @param {string} name - Rule name.
     * @param {string} resourceId - Resource identifier. Required for functions and sites.
     * @param {string} description - Optional description for the rule.
     * @param {string} challengeType - Challenge type enforced by the rule. Only `custom` (proof-of-work) is available today.
     * @param {number} difficulty - Proof-of-work difficulty (leading zero bits) for custom challenges.
     * @param {number} ttl - Clearance lifetime in seconds granted after solving the challenge.
     * @param {number} priority - Evaluation priority. Lower numbers run earlier.
     * @param {boolean} enabled - Set to false to create the rule in a disabled state.
     * @param {string} conditions - Array of condition strings generated using the WAF Condition builder. Maximum of 100 conditions are allowed, each 4096 characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Models.WafRuleChallenge>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createChallengeRule(ruleId: string, resourceType: string, name: string, resourceId?: string, description?: string, challengeType?: string, difficulty?: number, ttl?: number, priority?: number, enabled?: boolean, conditions?: string): Promise<Models.WafRuleChallenge>;
    createChallengeRule(
        paramsOrFirst: { ruleId: string, resourceType: string, name: string, resourceId?: string, description?: string, challengeType?: string, difficulty?: number, ttl?: number, priority?: number, enabled?: boolean, conditions?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (string)?, (number)?, (number)?, (number)?, (boolean)?, (string)?]    
    ): Promise<Models.WafRuleChallenge> {
        let params: { ruleId: string, resourceType: string, name: string, resourceId?: string, description?: string, challengeType?: string, difficulty?: number, ttl?: number, priority?: number, enabled?: boolean, conditions?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { ruleId: string, resourceType: string, name: string, resourceId?: string, description?: string, challengeType?: string, difficulty?: number, ttl?: number, priority?: number, enabled?: boolean, conditions?: string };
        } else {
            params = {
                ruleId: paramsOrFirst as string,
                resourceType: rest[0] as string,
                name: rest[1] as string,
                resourceId: rest[2] as string,
                description: rest[3] as string,
                challengeType: rest[4] as string,
                difficulty: rest[5] as number,
                ttl: rest[6] as number,
                priority: rest[7] as number,
                enabled: rest[8] as boolean,
                conditions: rest[9] as string            
            };
        }
        
        const ruleId = params.ruleId;
        const resourceType = params.resourceType;
        const name = params.name;
        const resourceId = params.resourceId;
        const description = params.description;
        const challengeType = params.challengeType;
        const difficulty = params.difficulty;
        const ttl = params.ttl;
        const priority = params.priority;
        const enabled = params.enabled;
        const conditions = params.conditions;

        if (typeof ruleId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "ruleId"');
        }
        if (typeof resourceType === 'undefined') {
            throw new AppwriteException('Missing required parameter: "resourceType"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }

        const apiPath = '/waf/rules/challenge';
        const payload: Payload = {};
        if (typeof ruleId !== 'undefined') {
            payload['ruleId'] = ruleId;
        }
        if (typeof resourceType !== 'undefined') {
            payload['resourceType'] = resourceType;
        }
        if (typeof resourceId !== 'undefined') {
            payload['resourceId'] = resourceId;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof description !== 'undefined') {
            payload['description'] = description;
        }
        if (typeof challengeType !== 'undefined') {
            payload['challengeType'] = challengeType;
        }
        if (typeof difficulty !== 'undefined') {
            payload['difficulty'] = difficulty;
        }
        if (typeof ttl !== 'undefined') {
            payload['ttl'] = ttl;
        }
        if (typeof priority !== 'undefined') {
            payload['priority'] = priority;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        if (typeof conditions !== 'undefined') {
            payload['conditions'] = conditions;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
        }

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Update a challenge WAF rule.
     * 
     *
     * @param {string} params.ruleId - Rule ID.
     * @param {string} params.resourceType - Resource type the rule applies to.
     * @param {string} params.resourceId - Resource identifier. Required for functions and sites.
     * @param {string} params.name - Rule name.
     * @param {string} params.description - Optional description for the rule.
     * @param {string} params.challengeType - Challenge type enforced by the rule.
     * @param {number} params.difficulty - Proof-of-work difficulty (leading zero bits) for custom challenges.
     * @param {number} params.ttl - Clearance lifetime in seconds granted after solving the challenge.
     * @param {number} params.priority - Evaluation priority. Lower numbers run earlier.
     * @param {boolean} params.enabled - Set to false to disable the rule.
     * @param {string} params.conditions - Array of condition strings generated using the WAF Condition builder. Maximum of 100 conditions are allowed, each 4096 characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Models.WafRuleChallenge>}
     */
    updateChallengeRule(params: { ruleId: string, resourceType?: string, resourceId?: string, name?: string, description?: string, challengeType?: string, difficulty?: number, ttl?: number, priority?: number, enabled?: boolean, conditions?: string }): Promise<Models.WafRuleChallenge>;
    /**
     * Update a challenge WAF rule.
     * 
     *
     * @param {string} ruleId - Rule ID.
     * @param {string} resourceType - Resource type the rule applies to.
     * @param {string} resourceId - Resource identifier. Required for functions and sites.
     * @param {string} name - Rule name.
     * @param {string} description - Optional description for the rule.
     * @param {string} challengeType - Challenge type enforced by the rule.
     * @param {number} difficulty - Proof-of-work difficulty (leading zero bits) for custom challenges.
     * @param {number} ttl - Clearance lifetime in seconds granted after solving the challenge.
     * @param {number} priority - Evaluation priority. Lower numbers run earlier.
     * @param {boolean} enabled - Set to false to disable the rule.
     * @param {string} conditions - Array of condition strings generated using the WAF Condition builder. Maximum of 100 conditions are allowed, each 4096 characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Models.WafRuleChallenge>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateChallengeRule(ruleId: string, resourceType?: string, resourceId?: string, name?: string, description?: string, challengeType?: string, difficulty?: number, ttl?: number, priority?: number, enabled?: boolean, conditions?: string): Promise<Models.WafRuleChallenge>;
    updateChallengeRule(
        paramsOrFirst: { ruleId: string, resourceType?: string, resourceId?: string, name?: string, description?: string, challengeType?: string, difficulty?: number, ttl?: number, priority?: number, enabled?: boolean, conditions?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (string)?, (number)?, (number)?, (number)?, (boolean)?, (string)?]    
    ): Promise<Models.WafRuleChallenge> {
        let params: { ruleId: string, resourceType?: string, resourceId?: string, name?: string, description?: string, challengeType?: string, difficulty?: number, ttl?: number, priority?: number, enabled?: boolean, conditions?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { ruleId: string, resourceType?: string, resourceId?: string, name?: string, description?: string, challengeType?: string, difficulty?: number, ttl?: number, priority?: number, enabled?: boolean, conditions?: string };
        } else {
            params = {
                ruleId: paramsOrFirst as string,
                resourceType: rest[0] as string,
                resourceId: rest[1] as string,
                name: rest[2] as string,
                description: rest[3] as string,
                challengeType: rest[4] as string,
                difficulty: rest[5] as number,
                ttl: rest[6] as number,
                priority: rest[7] as number,
                enabled: rest[8] as boolean,
                conditions: rest[9] as string            
            };
        }
        
        const ruleId = params.ruleId;
        const resourceType = params.resourceType;
        const resourceId = params.resourceId;
        const name = params.name;
        const description = params.description;
        const challengeType = params.challengeType;
        const difficulty = params.difficulty;
        const ttl = params.ttl;
        const priority = params.priority;
        const enabled = params.enabled;
        const conditions = params.conditions;

        if (typeof ruleId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "ruleId"');
        }

        const apiPath = '/waf/rules/challenge/{ruleId}'.replace('{ruleId}', encodeURIComponent(String(ruleId)));
        const payload: Payload = {};
        if (typeof resourceType !== 'undefined') {
            payload['resourceType'] = resourceType;
        }
        if (typeof resourceId !== 'undefined') {
            payload['resourceId'] = resourceId;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof description !== 'undefined') {
            payload['description'] = description;
        }
        if (typeof challengeType !== 'undefined') {
            payload['challengeType'] = challengeType;
        }
        if (typeof difficulty !== 'undefined') {
            payload['difficulty'] = difficulty;
        }
        if (typeof ttl !== 'undefined') {
            payload['ttl'] = ttl;
        }
        if (typeof priority !== 'undefined') {
            payload['priority'] = priority;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        if (typeof conditions !== 'undefined') {
            payload['conditions'] = conditions;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Create a deny WAF rule.
     * 
     *
     * @param {string} params.ruleId - Rule ID. Choose a custom ID or pass `ID.unique()` to generate a unique one.
     * @param {string} params.resourceType - Resource type the rule applies to.
     * @param {string} params.name - Rule name.
     * @param {string} params.resourceId - Resource identifier. Required for functions and sites.
     * @param {string} params.description - Optional description for the rule.
     * @param {number} params.priority - Evaluation priority. Lower numbers run earlier.
     * @param {boolean} params.enabled - Set to false to create the rule in a disabled state.
     * @param {string} params.conditions - Array of condition strings generated using the WAF Condition builder. Maximum of 100 conditions are allowed, each 4096 characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Models.WafRuleDeny>}
     */
    createDenyRule(params: { ruleId: string, resourceType: string, name: string, resourceId?: string, description?: string, priority?: number, enabled?: boolean, conditions?: string }): Promise<Models.WafRuleDeny>;
    /**
     * Create a deny WAF rule.
     * 
     *
     * @param {string} ruleId - Rule ID. Choose a custom ID or pass `ID.unique()` to generate a unique one.
     * @param {string} resourceType - Resource type the rule applies to.
     * @param {string} name - Rule name.
     * @param {string} resourceId - Resource identifier. Required for functions and sites.
     * @param {string} description - Optional description for the rule.
     * @param {number} priority - Evaluation priority. Lower numbers run earlier.
     * @param {boolean} enabled - Set to false to create the rule in a disabled state.
     * @param {string} conditions - Array of condition strings generated using the WAF Condition builder. Maximum of 100 conditions are allowed, each 4096 characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Models.WafRuleDeny>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createDenyRule(ruleId: string, resourceType: string, name: string, resourceId?: string, description?: string, priority?: number, enabled?: boolean, conditions?: string): Promise<Models.WafRuleDeny>;
    createDenyRule(
        paramsOrFirst: { ruleId: string, resourceType: string, name: string, resourceId?: string, description?: string, priority?: number, enabled?: boolean, conditions?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (number)?, (boolean)?, (string)?]    
    ): Promise<Models.WafRuleDeny> {
        let params: { ruleId: string, resourceType: string, name: string, resourceId?: string, description?: string, priority?: number, enabled?: boolean, conditions?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { ruleId: string, resourceType: string, name: string, resourceId?: string, description?: string, priority?: number, enabled?: boolean, conditions?: string };
        } else {
            params = {
                ruleId: paramsOrFirst as string,
                resourceType: rest[0] as string,
                name: rest[1] as string,
                resourceId: rest[2] as string,
                description: rest[3] as string,
                priority: rest[4] as number,
                enabled: rest[5] as boolean,
                conditions: rest[6] as string            
            };
        }
        
        const ruleId = params.ruleId;
        const resourceType = params.resourceType;
        const name = params.name;
        const resourceId = params.resourceId;
        const description = params.description;
        const priority = params.priority;
        const enabled = params.enabled;
        const conditions = params.conditions;

        if (typeof ruleId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "ruleId"');
        }
        if (typeof resourceType === 'undefined') {
            throw new AppwriteException('Missing required parameter: "resourceType"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }

        const apiPath = '/waf/rules/deny';
        const payload: Payload = {};
        if (typeof ruleId !== 'undefined') {
            payload['ruleId'] = ruleId;
        }
        if (typeof resourceType !== 'undefined') {
            payload['resourceType'] = resourceType;
        }
        if (typeof resourceId !== 'undefined') {
            payload['resourceId'] = resourceId;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof description !== 'undefined') {
            payload['description'] = description;
        }
        if (typeof priority !== 'undefined') {
            payload['priority'] = priority;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        if (typeof conditions !== 'undefined') {
            payload['conditions'] = conditions;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
        }

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Update a deny WAF rule.
     * 
     *
     * @param {string} params.ruleId - Rule ID.
     * @param {string} params.resourceType - Resource type the rule applies to.
     * @param {string} params.resourceId - Resource identifier. Required for functions and sites.
     * @param {string} params.name - Rule name.
     * @param {string} params.description - Optional description for the rule.
     * @param {number} params.priority - Evaluation priority. Lower numbers run earlier.
     * @param {boolean} params.enabled - Set to false to disable the rule.
     * @param {string} params.conditions - Array of condition strings generated using the WAF Condition builder. Maximum of 100 conditions are allowed, each 4096 characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Models.WafRuleDeny>}
     */
    updateDenyRule(params: { ruleId: string, resourceType?: string, resourceId?: string, name?: string, description?: string, priority?: number, enabled?: boolean, conditions?: string }): Promise<Models.WafRuleDeny>;
    /**
     * Update a deny WAF rule.
     * 
     *
     * @param {string} ruleId - Rule ID.
     * @param {string} resourceType - Resource type the rule applies to.
     * @param {string} resourceId - Resource identifier. Required for functions and sites.
     * @param {string} name - Rule name.
     * @param {string} description - Optional description for the rule.
     * @param {number} priority - Evaluation priority. Lower numbers run earlier.
     * @param {boolean} enabled - Set to false to disable the rule.
     * @param {string} conditions - Array of condition strings generated using the WAF Condition builder. Maximum of 100 conditions are allowed, each 4096 characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Models.WafRuleDeny>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateDenyRule(ruleId: string, resourceType?: string, resourceId?: string, name?: string, description?: string, priority?: number, enabled?: boolean, conditions?: string): Promise<Models.WafRuleDeny>;
    updateDenyRule(
        paramsOrFirst: { ruleId: string, resourceType?: string, resourceId?: string, name?: string, description?: string, priority?: number, enabled?: boolean, conditions?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (number)?, (boolean)?, (string)?]    
    ): Promise<Models.WafRuleDeny> {
        let params: { ruleId: string, resourceType?: string, resourceId?: string, name?: string, description?: string, priority?: number, enabled?: boolean, conditions?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { ruleId: string, resourceType?: string, resourceId?: string, name?: string, description?: string, priority?: number, enabled?: boolean, conditions?: string };
        } else {
            params = {
                ruleId: paramsOrFirst as string,
                resourceType: rest[0] as string,
                resourceId: rest[1] as string,
                name: rest[2] as string,
                description: rest[3] as string,
                priority: rest[4] as number,
                enabled: rest[5] as boolean,
                conditions: rest[6] as string            
            };
        }
        
        const ruleId = params.ruleId;
        const resourceType = params.resourceType;
        const resourceId = params.resourceId;
        const name = params.name;
        const description = params.description;
        const priority = params.priority;
        const enabled = params.enabled;
        const conditions = params.conditions;

        if (typeof ruleId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "ruleId"');
        }

        const apiPath = '/waf/rules/deny/{ruleId}'.replace('{ruleId}', encodeURIComponent(String(ruleId)));
        const payload: Payload = {};
        if (typeof resourceType !== 'undefined') {
            payload['resourceType'] = resourceType;
        }
        if (typeof resourceId !== 'undefined') {
            payload['resourceId'] = resourceId;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof description !== 'undefined') {
            payload['description'] = description;
        }
        if (typeof priority !== 'undefined') {
            payload['priority'] = priority;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        if (typeof conditions !== 'undefined') {
            payload['conditions'] = conditions;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Create a rate limit WAF rule.
     * 
     *
     * @param {string} params.ruleId - Rule ID. Choose a custom ID or pass `ID.unique()` to generate a unique one.
     * @param {string} params.resourceType - Resource type the rule applies to.
     * @param {string} params.name - Rule name.
     * @param {number} params.limit - Maximum number of matching requests allowed in the configured interval.
     * @param {number} params.interval - Interval in seconds used for rate limiting.
     * @param {string} params.resourceId - Resource identifier. Required for functions and sites.
     * @param {string} params.description - Optional description for the rule.
     * @param {number} params.priority - Evaluation priority. Lower numbers run earlier.
     * @param {boolean} params.enabled - Set to false to create the rule in a disabled state.
     * @param {string} params.conditions - Array of condition strings generated using the WAF Condition builder. Maximum of 100 conditions are allowed, each 4096 characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Models.WafRuleRateLimit>}
     */
    createRateLimitRule(params: { ruleId: string, resourceType: string, name: string, limit: number, interval: number, resourceId?: string, description?: string, priority?: number, enabled?: boolean, conditions?: string }): Promise<Models.WafRuleRateLimit>;
    /**
     * Create a rate limit WAF rule.
     * 
     *
     * @param {string} ruleId - Rule ID. Choose a custom ID or pass `ID.unique()` to generate a unique one.
     * @param {string} resourceType - Resource type the rule applies to.
     * @param {string} name - Rule name.
     * @param {number} limit - Maximum number of matching requests allowed in the configured interval.
     * @param {number} interval - Interval in seconds used for rate limiting.
     * @param {string} resourceId - Resource identifier. Required for functions and sites.
     * @param {string} description - Optional description for the rule.
     * @param {number} priority - Evaluation priority. Lower numbers run earlier.
     * @param {boolean} enabled - Set to false to create the rule in a disabled state.
     * @param {string} conditions - Array of condition strings generated using the WAF Condition builder. Maximum of 100 conditions are allowed, each 4096 characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Models.WafRuleRateLimit>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createRateLimitRule(ruleId: string, resourceType: string, name: string, limit: number, interval: number, resourceId?: string, description?: string, priority?: number, enabled?: boolean, conditions?: string): Promise<Models.WafRuleRateLimit>;
    createRateLimitRule(
        paramsOrFirst: { ruleId: string, resourceType: string, name: string, limit: number, interval: number, resourceId?: string, description?: string, priority?: number, enabled?: boolean, conditions?: string } | string,
        ...rest: [(string)?, (string)?, (number)?, (number)?, (string)?, (string)?, (number)?, (boolean)?, (string)?]    
    ): Promise<Models.WafRuleRateLimit> {
        let params: { ruleId: string, resourceType: string, name: string, limit: number, interval: number, resourceId?: string, description?: string, priority?: number, enabled?: boolean, conditions?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { ruleId: string, resourceType: string, name: string, limit: number, interval: number, resourceId?: string, description?: string, priority?: number, enabled?: boolean, conditions?: string };
        } else {
            params = {
                ruleId: paramsOrFirst as string,
                resourceType: rest[0] as string,
                name: rest[1] as string,
                limit: rest[2] as number,
                interval: rest[3] as number,
                resourceId: rest[4] as string,
                description: rest[5] as string,
                priority: rest[6] as number,
                enabled: rest[7] as boolean,
                conditions: rest[8] as string            
            };
        }
        
        const ruleId = params.ruleId;
        const resourceType = params.resourceType;
        const name = params.name;
        const limit = params.limit;
        const interval = params.interval;
        const resourceId = params.resourceId;
        const description = params.description;
        const priority = params.priority;
        const enabled = params.enabled;
        const conditions = params.conditions;

        if (typeof ruleId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "ruleId"');
        }
        if (typeof resourceType === 'undefined') {
            throw new AppwriteException('Missing required parameter: "resourceType"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof limit === 'undefined') {
            throw new AppwriteException('Missing required parameter: "limit"');
        }
        if (typeof interval === 'undefined') {
            throw new AppwriteException('Missing required parameter: "interval"');
        }

        const apiPath = '/waf/rules/rate-limit';
        const payload: Payload = {};
        if (typeof ruleId !== 'undefined') {
            payload['ruleId'] = ruleId;
        }
        if (typeof resourceType !== 'undefined') {
            payload['resourceType'] = resourceType;
        }
        if (typeof resourceId !== 'undefined') {
            payload['resourceId'] = resourceId;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof description !== 'undefined') {
            payload['description'] = description;
        }
        if (typeof limit !== 'undefined') {
            payload['limit'] = limit;
        }
        if (typeof interval !== 'undefined') {
            payload['interval'] = interval;
        }
        if (typeof priority !== 'undefined') {
            payload['priority'] = priority;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        if (typeof conditions !== 'undefined') {
            payload['conditions'] = conditions;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
        }

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Update a rate limit WAF rule.
     * 
     *
     * @param {string} params.ruleId - Rule ID.
     * @param {string} params.resourceType - Resource type the rule applies to.
     * @param {string} params.resourceId - Resource identifier. Required for functions and sites.
     * @param {string} params.name - Rule name.
     * @param {string} params.description - Optional description for the rule.
     * @param {number} params.limit - Maximum number of matching requests allowed in the configured interval.
     * @param {number} params.interval - Interval in seconds used for rate limiting.
     * @param {number} params.priority - Evaluation priority. Lower numbers run earlier.
     * @param {boolean} params.enabled - Set to false to disable the rule.
     * @param {string} params.conditions - Array of condition strings generated using the WAF Condition builder. Maximum of 100 conditions are allowed, each 4096 characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Models.WafRuleRateLimit>}
     */
    updateRateLimitRule(params: { ruleId: string, resourceType?: string, resourceId?: string, name?: string, description?: string, limit?: number, interval?: number, priority?: number, enabled?: boolean, conditions?: string }): Promise<Models.WafRuleRateLimit>;
    /**
     * Update a rate limit WAF rule.
     * 
     *
     * @param {string} ruleId - Rule ID.
     * @param {string} resourceType - Resource type the rule applies to.
     * @param {string} resourceId - Resource identifier. Required for functions and sites.
     * @param {string} name - Rule name.
     * @param {string} description - Optional description for the rule.
     * @param {number} limit - Maximum number of matching requests allowed in the configured interval.
     * @param {number} interval - Interval in seconds used for rate limiting.
     * @param {number} priority - Evaluation priority. Lower numbers run earlier.
     * @param {boolean} enabled - Set to false to disable the rule.
     * @param {string} conditions - Array of condition strings generated using the WAF Condition builder. Maximum of 100 conditions are allowed, each 4096 characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Models.WafRuleRateLimit>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateRateLimitRule(ruleId: string, resourceType?: string, resourceId?: string, name?: string, description?: string, limit?: number, interval?: number, priority?: number, enabled?: boolean, conditions?: string): Promise<Models.WafRuleRateLimit>;
    updateRateLimitRule(
        paramsOrFirst: { ruleId: string, resourceType?: string, resourceId?: string, name?: string, description?: string, limit?: number, interval?: number, priority?: number, enabled?: boolean, conditions?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (number)?, (number)?, (number)?, (boolean)?, (string)?]    
    ): Promise<Models.WafRuleRateLimit> {
        let params: { ruleId: string, resourceType?: string, resourceId?: string, name?: string, description?: string, limit?: number, interval?: number, priority?: number, enabled?: boolean, conditions?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { ruleId: string, resourceType?: string, resourceId?: string, name?: string, description?: string, limit?: number, interval?: number, priority?: number, enabled?: boolean, conditions?: string };
        } else {
            params = {
                ruleId: paramsOrFirst as string,
                resourceType: rest[0] as string,
                resourceId: rest[1] as string,
                name: rest[2] as string,
                description: rest[3] as string,
                limit: rest[4] as number,
                interval: rest[5] as number,
                priority: rest[6] as number,
                enabled: rest[7] as boolean,
                conditions: rest[8] as string            
            };
        }
        
        const ruleId = params.ruleId;
        const resourceType = params.resourceType;
        const resourceId = params.resourceId;
        const name = params.name;
        const description = params.description;
        const limit = params.limit;
        const interval = params.interval;
        const priority = params.priority;
        const enabled = params.enabled;
        const conditions = params.conditions;

        if (typeof ruleId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "ruleId"');
        }

        const apiPath = '/waf/rules/rate-limit/{ruleId}'.replace('{ruleId}', encodeURIComponent(String(ruleId)));
        const payload: Payload = {};
        if (typeof resourceType !== 'undefined') {
            payload['resourceType'] = resourceType;
        }
        if (typeof resourceId !== 'undefined') {
            payload['resourceId'] = resourceId;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof description !== 'undefined') {
            payload['description'] = description;
        }
        if (typeof limit !== 'undefined') {
            payload['limit'] = limit;
        }
        if (typeof interval !== 'undefined') {
            payload['interval'] = interval;
        }
        if (typeof priority !== 'undefined') {
            payload['priority'] = priority;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        if (typeof conditions !== 'undefined') {
            payload['conditions'] = conditions;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Create a redirect WAF rule.
     * 
     *
     * @param {string} params.ruleId - Rule ID. Choose a custom ID or pass `ID.unique()` to generate a unique one.
     * @param {string} params.resourceType - Resource type the rule applies to.
     * @param {string} params.name - Rule name.
     * @param {string} params.location - Location used for redirect responses.
     * @param {number} params.statusCode - Integer status code used for redirect responses.
     * @param {string} params.resourceId - Resource identifier. Required for functions and sites.
     * @param {string} params.description - Optional description for the rule.
     * @param {number} params.priority - Evaluation priority. Lower numbers run earlier.
     * @param {boolean} params.enabled - Set to false to create the rule in a disabled state.
     * @param {string} params.conditions - Array of condition strings generated using the WAF Condition builder. Maximum of 100 conditions are allowed, each 4096 characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Models.WafRuleRedirect>}
     */
    createRedirectRule(params: { ruleId: string, resourceType: string, name: string, location: string, statusCode: number, resourceId?: string, description?: string, priority?: number, enabled?: boolean, conditions?: string }): Promise<Models.WafRuleRedirect>;
    /**
     * Create a redirect WAF rule.
     * 
     *
     * @param {string} ruleId - Rule ID. Choose a custom ID or pass `ID.unique()` to generate a unique one.
     * @param {string} resourceType - Resource type the rule applies to.
     * @param {string} name - Rule name.
     * @param {string} location - Location used for redirect responses.
     * @param {number} statusCode - Integer status code used for redirect responses.
     * @param {string} resourceId - Resource identifier. Required for functions and sites.
     * @param {string} description - Optional description for the rule.
     * @param {number} priority - Evaluation priority. Lower numbers run earlier.
     * @param {boolean} enabled - Set to false to create the rule in a disabled state.
     * @param {string} conditions - Array of condition strings generated using the WAF Condition builder. Maximum of 100 conditions are allowed, each 4096 characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Models.WafRuleRedirect>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createRedirectRule(ruleId: string, resourceType: string, name: string, location: string, statusCode: number, resourceId?: string, description?: string, priority?: number, enabled?: boolean, conditions?: string): Promise<Models.WafRuleRedirect>;
    createRedirectRule(
        paramsOrFirst: { ruleId: string, resourceType: string, name: string, location: string, statusCode: number, resourceId?: string, description?: string, priority?: number, enabled?: boolean, conditions?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (number)?, (string)?, (string)?, (number)?, (boolean)?, (string)?]    
    ): Promise<Models.WafRuleRedirect> {
        let params: { ruleId: string, resourceType: string, name: string, location: string, statusCode: number, resourceId?: string, description?: string, priority?: number, enabled?: boolean, conditions?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { ruleId: string, resourceType: string, name: string, location: string, statusCode: number, resourceId?: string, description?: string, priority?: number, enabled?: boolean, conditions?: string };
        } else {
            params = {
                ruleId: paramsOrFirst as string,
                resourceType: rest[0] as string,
                name: rest[1] as string,
                location: rest[2] as string,
                statusCode: rest[3] as number,
                resourceId: rest[4] as string,
                description: rest[5] as string,
                priority: rest[6] as number,
                enabled: rest[7] as boolean,
                conditions: rest[8] as string            
            };
        }
        
        const ruleId = params.ruleId;
        const resourceType = params.resourceType;
        const name = params.name;
        const location = params.location;
        const statusCode = params.statusCode;
        const resourceId = params.resourceId;
        const description = params.description;
        const priority = params.priority;
        const enabled = params.enabled;
        const conditions = params.conditions;

        if (typeof ruleId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "ruleId"');
        }
        if (typeof resourceType === 'undefined') {
            throw new AppwriteException('Missing required parameter: "resourceType"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof location === 'undefined') {
            throw new AppwriteException('Missing required parameter: "location"');
        }
        if (typeof statusCode === 'undefined') {
            throw new AppwriteException('Missing required parameter: "statusCode"');
        }

        const apiPath = '/waf/rules/redirect';
        const payload: Payload = {};
        if (typeof ruleId !== 'undefined') {
            payload['ruleId'] = ruleId;
        }
        if (typeof resourceType !== 'undefined') {
            payload['resourceType'] = resourceType;
        }
        if (typeof resourceId !== 'undefined') {
            payload['resourceId'] = resourceId;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof description !== 'undefined') {
            payload['description'] = description;
        }
        if (typeof location !== 'undefined') {
            payload['location'] = location;
        }
        if (typeof statusCode !== 'undefined') {
            payload['statusCode'] = statusCode;
        }
        if (typeof priority !== 'undefined') {
            payload['priority'] = priority;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        if (typeof conditions !== 'undefined') {
            payload['conditions'] = conditions;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
        }

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Update a redirect WAF rule.
     * 
     *
     * @param {string} params.ruleId - Rule ID.
     * @param {string} params.resourceType - Resource type the rule applies to.
     * @param {string} params.resourceId - Resource identifier. Required for functions and sites.
     * @param {string} params.name - Rule name.
     * @param {string} params.description - Optional description for the rule.
     * @param {string} params.location - Location used for redirect responses.
     * @param {number} params.statusCode - Integer status code used for redirect responses.
     * @param {number} params.priority - Evaluation priority. Lower numbers run earlier.
     * @param {boolean} params.enabled - Set to false to disable the rule.
     * @param {string} params.conditions - Array of condition strings generated using the WAF Condition builder. Maximum of 100 conditions are allowed, each 4096 characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Models.WafRuleRedirect>}
     */
    updateRedirectRule(params: { ruleId: string, resourceType?: string, resourceId?: string, name?: string, description?: string, location?: string, statusCode?: number, priority?: number, enabled?: boolean, conditions?: string }): Promise<Models.WafRuleRedirect>;
    /**
     * Update a redirect WAF rule.
     * 
     *
     * @param {string} ruleId - Rule ID.
     * @param {string} resourceType - Resource type the rule applies to.
     * @param {string} resourceId - Resource identifier. Required for functions and sites.
     * @param {string} name - Rule name.
     * @param {string} description - Optional description for the rule.
     * @param {string} location - Location used for redirect responses.
     * @param {number} statusCode - Integer status code used for redirect responses.
     * @param {number} priority - Evaluation priority. Lower numbers run earlier.
     * @param {boolean} enabled - Set to false to disable the rule.
     * @param {string} conditions - Array of condition strings generated using the WAF Condition builder. Maximum of 100 conditions are allowed, each 4096 characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Models.WafRuleRedirect>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateRedirectRule(ruleId: string, resourceType?: string, resourceId?: string, name?: string, description?: string, location?: string, statusCode?: number, priority?: number, enabled?: boolean, conditions?: string): Promise<Models.WafRuleRedirect>;
    updateRedirectRule(
        paramsOrFirst: { ruleId: string, resourceType?: string, resourceId?: string, name?: string, description?: string, location?: string, statusCode?: number, priority?: number, enabled?: boolean, conditions?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (string)?, (number)?, (number)?, (boolean)?, (string)?]    
    ): Promise<Models.WafRuleRedirect> {
        let params: { ruleId: string, resourceType?: string, resourceId?: string, name?: string, description?: string, location?: string, statusCode?: number, priority?: number, enabled?: boolean, conditions?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { ruleId: string, resourceType?: string, resourceId?: string, name?: string, description?: string, location?: string, statusCode?: number, priority?: number, enabled?: boolean, conditions?: string };
        } else {
            params = {
                ruleId: paramsOrFirst as string,
                resourceType: rest[0] as string,
                resourceId: rest[1] as string,
                name: rest[2] as string,
                description: rest[3] as string,
                location: rest[4] as string,
                statusCode: rest[5] as number,
                priority: rest[6] as number,
                enabled: rest[7] as boolean,
                conditions: rest[8] as string            
            };
        }
        
        const ruleId = params.ruleId;
        const resourceType = params.resourceType;
        const resourceId = params.resourceId;
        const name = params.name;
        const description = params.description;
        const location = params.location;
        const statusCode = params.statusCode;
        const priority = params.priority;
        const enabled = params.enabled;
        const conditions = params.conditions;

        if (typeof ruleId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "ruleId"');
        }

        const apiPath = '/waf/rules/redirect/{ruleId}'.replace('{ruleId}', encodeURIComponent(String(ruleId)));
        const payload: Payload = {};
        if (typeof resourceType !== 'undefined') {
            payload['resourceType'] = resourceType;
        }
        if (typeof resourceId !== 'undefined') {
            payload['resourceId'] = resourceId;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof description !== 'undefined') {
            payload['description'] = description;
        }
        if (typeof location !== 'undefined') {
            payload['location'] = location;
        }
        if (typeof statusCode !== 'undefined') {
            payload['statusCode'] = statusCode;
        }
        if (typeof priority !== 'undefined') {
            payload['priority'] = priority;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        if (typeof conditions !== 'undefined') {
            payload['conditions'] = conditions;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Get a WAF rule by its ID.
     * 
     *
     * @param {string} params.ruleId - Rule ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.WafRule>}
     */
    getRule(params: { ruleId: string }): Promise<Models.WafRule>;
    /**
     * Get a WAF rule by its ID.
     * 
     *
     * @param {string} ruleId - Rule ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.WafRule>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getRule(ruleId: string): Promise<Models.WafRule>;
    getRule(
        paramsOrFirst: { ruleId: string } | string    
    ): Promise<Models.WafRule> {
        let params: { ruleId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { ruleId: string };
        } else {
            params = {
                ruleId: paramsOrFirst as string            
            };
        }
        
        const ruleId = params.ruleId;

        if (typeof ruleId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "ruleId"');
        }

        const apiPath = '/waf/rules/{ruleId}'.replace('{ruleId}', encodeURIComponent(String(ruleId)));
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'accept': 'application/json',
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Delete a WAF rule.
     * 
     *
     * @param {string} params.ruleId - Rule ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteRule(params: { ruleId: string }): Promise<{}>;
    /**
     * Delete a WAF rule.
     * 
     *
     * @param {string} ruleId - Rule ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteRule(ruleId: string): Promise<{}>;
    deleteRule(
        paramsOrFirst: { ruleId: string } | string    
    ): Promise<{}> {
        let params: { ruleId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { ruleId: string };
        } else {
            params = {
                ruleId: paramsOrFirst as string            
            };
        }
        
        const ruleId = params.ruleId;

        if (typeof ruleId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "ruleId"');
        }

        const apiPath = '/waf/rules/{ruleId}'.replace('{ruleId}', encodeURIComponent(String(ruleId)));
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
        }

        return this.client.call(
            'delete',
            uri,
            apiHeaders,
            payload
        );
    }
}
