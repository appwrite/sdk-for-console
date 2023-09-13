import { Service } from '../service';
import { AppwriteException, Client } from '../client';
import type { Models } from '../models';
import type { UploadProgress, Payload } from '../client';

export class Projects extends Service {

     constructor(client: Client) 
     {
        super(client);
     }

    /**
     * List Projects
     *
     *
     * @param {string[]} queries
     * @param {string} search
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async list(queries?: string[], search?: string): Promise<Models.ProjectList> {
        let path = '/projects';
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
     * Create Project
     *
     *
     * @param {string} projectId
     * @param {string} name
     * @param {string} teamId
     * @param {string} region
     * @param {string} description
     * @param {string} logo
     * @param {string} url
     * @param {string} legalName
     * @param {string} legalCountry
     * @param {string} legalState
     * @param {string} legalCity
     * @param {string} legalAddress
     * @param {string} legalTaxId
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async create(projectId: string, name: string, teamId: string, region?: string, description?: string, logo?: string, url?: string, legalName?: string, legalCountry?: string, legalState?: string, legalCity?: string, legalAddress?: string, legalTaxId?: string): Promise<Models.Project> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }

        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }

        if (typeof teamId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "teamId"');
        }

        let path = '/projects';
        let payload: Payload = {};

        if (typeof projectId !== 'undefined') {
            payload['projectId'] = projectId;
        }

        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }

        if (typeof teamId !== 'undefined') {
            payload['teamId'] = teamId;
        }

        if (typeof region !== 'undefined') {
            payload['region'] = region;
        }

        if (typeof description !== 'undefined') {
            payload['description'] = description;
        }

        if (typeof logo !== 'undefined') {
            payload['logo'] = logo;
        }

        if (typeof url !== 'undefined') {
            payload['url'] = url;
        }

        if (typeof legalName !== 'undefined') {
            payload['legalName'] = legalName;
        }

        if (typeof legalCountry !== 'undefined') {
            payload['legalCountry'] = legalCountry;
        }

        if (typeof legalState !== 'undefined') {
            payload['legalState'] = legalState;
        }

        if (typeof legalCity !== 'undefined') {
            payload['legalCity'] = legalCity;
        }

        if (typeof legalAddress !== 'undefined') {
            payload['legalAddress'] = legalAddress;
        }

        if (typeof legalTaxId !== 'undefined') {
            payload['legalTaxId'] = legalTaxId;
        }

        const uri = new URL(this.client.config.endpoint + path);
        return await this.client.call('post', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Get Project
     *
     *
     * @param {string} projectId
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async get(projectId: string): Promise<Models.Project> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }

        let path = '/projects/{projectId}'.replace('{projectId}', projectId);
        let payload: Payload = {};

        const uri = new URL(this.client.config.endpoint + path);
        return await this.client.call('get', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Update Project
     *
     *
     * @param {string} projectId
     * @param {string} name
     * @param {string} description
     * @param {string} logo
     * @param {string} url
     * @param {string} legalName
     * @param {string} legalCountry
     * @param {string} legalState
     * @param {string} legalCity
     * @param {string} legalAddress
     * @param {string} legalTaxId
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async update(projectId: string, name: string, description?: string, logo?: string, url?: string, legalName?: string, legalCountry?: string, legalState?: string, legalCity?: string, legalAddress?: string, legalTaxId?: string): Promise<Models.Project> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }

        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }

        let path = '/projects/{projectId}'.replace('{projectId}', projectId);
        let payload: Payload = {};

        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }

        if (typeof description !== 'undefined') {
            payload['description'] = description;
        }

        if (typeof logo !== 'undefined') {
            payload['logo'] = logo;
        }

        if (typeof url !== 'undefined') {
            payload['url'] = url;
        }

        if (typeof legalName !== 'undefined') {
            payload['legalName'] = legalName;
        }

        if (typeof legalCountry !== 'undefined') {
            payload['legalCountry'] = legalCountry;
        }

        if (typeof legalState !== 'undefined') {
            payload['legalState'] = legalState;
        }

        if (typeof legalCity !== 'undefined') {
            payload['legalCity'] = legalCity;
        }

        if (typeof legalAddress !== 'undefined') {
            payload['legalAddress'] = legalAddress;
        }

        if (typeof legalTaxId !== 'undefined') {
            payload['legalTaxId'] = legalTaxId;
        }

        const uri = new URL(this.client.config.endpoint + path);
        return await this.client.call('patch', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Delete Project
     *
     *
     * @param {string} projectId
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async delete(projectId: string): Promise<{}> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }

        let path = '/projects/{projectId}'.replace('{projectId}', projectId);
        let payload: Payload = {};

        const uri = new URL(this.client.config.endpoint + path);
        return await this.client.call('delete', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Update Project Authentication Duration
     *
     *
     * @param {string} projectId
     * @param {number} duration
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async updateAuthDuration(projectId: string, duration: number): Promise<Models.Project> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }

        if (typeof duration === 'undefined') {
            throw new AppwriteException('Missing required parameter: "duration"');
        }

        let path = '/projects/{projectId}/auth/duration'.replace('{projectId}', projectId);
        let payload: Payload = {};

        if (typeof duration !== 'undefined') {
            payload['duration'] = duration;
        }

        const uri = new URL(this.client.config.endpoint + path);
        return await this.client.call('patch', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Update Project JWT Expiration Duration
     *
     *
     * @param {string} projectId
     * @param {number} jwtExpiration
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async updateJwtExpiration(projectId: string, jwtExpiration: number): Promise<Models.Project> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }

        if (typeof jwtExpiration === 'undefined') {
            throw new AppwriteException('Missing required parameter: "jwtExpiration"');
        }

        const path = `/projects/${projectId}/auth/jwt-expiration`;
        const payload: Payload = {};

        if (typeof jwtExpiration !== 'undefined') {
            payload['jwtExpiration'] = jwtExpiration;
        }

        const uri = new URL(this.client.config.endpoint + path);
        return await this.client.call('patch', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Update Project users limit
     *
     *
     * @param {string} projectId
     * @param {number} limit
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async updateAuthLimit(projectId: string, limit: number): Promise<Models.Project> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }

        if (typeof limit === 'undefined') {
            throw new AppwriteException('Missing required parameter: "limit"');
        }

        let path = '/projects/{projectId}/auth/limit'.replace('{projectId}', projectId);
        let payload: Payload = {};

        if (typeof limit !== 'undefined') {
            payload['limit'] = limit;
        }

        const uri = new URL(this.client.config.endpoint + path);
        return await this.client.call('patch', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Update Project user sessions limit
     *
     *
     * @param {string} projectId
     * @param {number} limit
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async updateAuthSessionsLimit(projectId: string, limit: number): Promise<Models.Project> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }

        if (typeof limit === 'undefined') {
            throw new AppwriteException('Missing required parameter: "limit"');
        }

        let path = '/projects/{projectId}/auth/max-sessions'.replace('{projectId}', projectId);
        let payload: Payload = {};

        if (typeof limit !== 'undefined') {
            payload['limit'] = limit;
        }

        const uri = new URL(this.client.config.endpoint + path);
        return await this.client.call('patch', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Update authentication password dictionary status. Use this endpoint to enable or disable the dicitonary check for user password
     *
     *
     * @param {string} projectId
     * @param {boolean} enabled
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async updateAuthPasswordDictionary(projectId: string, enabled: boolean): Promise<Models.Project> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }

        if (typeof enabled === 'undefined') {
            throw new AppwriteException('Missing required parameter: "enabled"');
        }

        let path = '/projects/{projectId}/auth/password-dictionary'.replace('{projectId}', projectId);
        let payload: Payload = {};

        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }

        const uri = new URL(this.client.config.endpoint + path);
        return await this.client.call('patch', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Update authentication password history. Use this endpoint to set the number of password history to save and 0 to disable password history.
     *
     *
     * @param {string} projectId
     * @param {number} limit
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async updateAuthPasswordHistory(projectId: string, limit: number): Promise<Models.Project> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }

        if (typeof limit === 'undefined') {
            throw new AppwriteException('Missing required parameter: "limit"');
        }

        let path = '/projects/{projectId}/auth/password-history'.replace('{projectId}', projectId);
        let payload: Payload = {};

        if (typeof limit !== 'undefined') {
            payload['limit'] = limit;
        }

        const uri = new URL(this.client.config.endpoint + path);
        return await this.client.call('patch', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Enable or disable checking user passwords for similarity with their personal data.
     *
     *
     * @param {string} projectId
     * @param {boolean} enabled
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async updatePersonalDataCheck(projectId: string, enabled: boolean): Promise<Models.Project> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }

        if (typeof enabled === 'undefined') {
            throw new AppwriteException('Missing required parameter: "enabled"');
        }

        let path = '/projects/{projectId}/auth/personal-data'.replace('{projectId}', projectId);
        let payload: Payload = {};

        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }

        const uri = new URL(this.client.config.endpoint + path);
        return await this.client.call('patch', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Update Project auth method status. Use this endpoint to enable or disable a given auth method for this project.
     *
     *
     * @param {string} projectId
     * @param {string} method
     * @param {boolean} status
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async updateAuthStatus(projectId: string, method: string, status: boolean): Promise<Models.Project> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }

        if (typeof method === 'undefined') {
            throw new AppwriteException('Missing required parameter: "method"');
        }

        if (typeof status === 'undefined') {
            throw new AppwriteException('Missing required parameter: "status"');
        }

        let path = '/projects/{projectId}/auth/{method}'.replace('{projectId}', projectId).replace('{method}', method);
        let payload: Payload = {};

        if (typeof status !== 'undefined') {
            payload['status'] = status;
        }

        const uri = new URL(this.client.config.endpoint + path);
        return await this.client.call('patch', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * List Keys
     *
     *
     * @param {string} projectId
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async listKeys(projectId: string): Promise<Models.KeyList> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }

        let path = '/projects/{projectId}/keys'.replace('{projectId}', projectId);
        let payload: Payload = {};

        const uri = new URL(this.client.config.endpoint + path);
        return await this.client.call('get', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Create Key
     *
     *
     * @param {string} projectId
     * @param {string} name
     * @param {string[]} scopes
     * @param {string} expire
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async createKey(projectId: string, name: string, scopes: string[], expire?: string): Promise<Models.Key> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }

        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }

        if (typeof scopes === 'undefined') {
            throw new AppwriteException('Missing required parameter: "scopes"');
        }

        let path = '/projects/{projectId}/keys'.replace('{projectId}', projectId);
        let payload: Payload = {};

        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }

        if (typeof scopes !== 'undefined') {
            payload['scopes'] = scopes;
        }

        if (typeof expire !== 'undefined') {
            payload['expire'] = expire;
        }

        const uri = new URL(this.client.config.endpoint + path);
        return await this.client.call('post', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Get Key
     *
     *
     * @param {string} projectId
     * @param {string} keyId
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async getKey(projectId: string, keyId: string): Promise<Models.Key> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }

        if (typeof keyId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "keyId"');
        }

        let path = '/projects/{projectId}/keys/{keyId}'.replace('{projectId}', projectId).replace('{keyId}', keyId);
        let payload: Payload = {};

        const uri = new URL(this.client.config.endpoint + path);
        return await this.client.call('get', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Update Key
     *
     *
     * @param {string} projectId
     * @param {string} keyId
     * @param {string} name
     * @param {string[]} scopes
     * @param {string} expire
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async updateKey(projectId: string, keyId: string, name: string, scopes: string[], expire?: string): Promise<Models.Key> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }

        if (typeof keyId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "keyId"');
        }

        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }

        if (typeof scopes === 'undefined') {
            throw new AppwriteException('Missing required parameter: "scopes"');
        }

        let path = '/projects/{projectId}/keys/{keyId}'.replace('{projectId}', projectId).replace('{keyId}', keyId);
        let payload: Payload = {};

        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }

        if (typeof scopes !== 'undefined') {
            payload['scopes'] = scopes;
        }

        if (typeof expire !== 'undefined') {
            payload['expire'] = expire;
        }

        const uri = new URL(this.client.config.endpoint + path);
        return await this.client.call('put', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Delete Key
     *
     *
     * @param {string} projectId
     * @param {string} keyId
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async deleteKey(projectId: string, keyId: string): Promise<{}> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }

        if (typeof keyId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "keyId"');
        }

        let path = '/projects/{projectId}/keys/{keyId}'.replace('{projectId}', projectId).replace('{keyId}', keyId);
        let payload: Payload = {};

        const uri = new URL(this.client.config.endpoint + path);
        return await this.client.call('delete', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Update Project OAuth2
     *
     *
     * @param {string} projectId
     * @param {string} provider
     * @param {string} appId
     * @param {string} secret
     * @param {boolean} enabled
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async updateOAuth2(projectId: string, provider: string, appId?: string, secret?: string, enabled?: boolean): Promise<Models.Project> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }

        if (typeof provider === 'undefined') {
            throw new AppwriteException('Missing required parameter: "provider"');
        }

        let path = '/projects/{projectId}/oauth2'.replace('{projectId}', projectId);
        let payload: Payload = {};

        if (typeof provider !== 'undefined') {
            payload['provider'] = provider;
        }

        if (typeof appId !== 'undefined') {
            payload['appId'] = appId;
        }

        if (typeof secret !== 'undefined') {
            payload['secret'] = secret;
        }

        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }

        const uri = new URL(this.client.config.endpoint + path);
        return await this.client.call('patch', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * List Platforms
     *
     *
     * @param {string} projectId
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async listPlatforms(projectId: string): Promise<Models.PlatformList> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }

        let path = '/projects/{projectId}/platforms'.replace('{projectId}', projectId);
        let payload: Payload = {};

        const uri = new URL(this.client.config.endpoint + path);
        return await this.client.call('get', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Create Platform
     *
     *
     * @param {string} projectId
     * @param {string} type
     * @param {string} name
     * @param {string} key
     * @param {string} store
     * @param {string} hostname
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async createPlatform(projectId: string, type: string, name: string, key?: string, store?: string, hostname?: string): Promise<Models.Platform> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }

        if (typeof type === 'undefined') {
            throw new AppwriteException('Missing required parameter: "type"');
        }

        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }

        let path = '/projects/{projectId}/platforms'.replace('{projectId}', projectId);
        let payload: Payload = {};

        if (typeof type !== 'undefined') {
            payload['type'] = type;
        }

        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }

        if (typeof key !== 'undefined') {
            payload['key'] = key;
        }

        if (typeof store !== 'undefined') {
            payload['store'] = store;
        }

        if (typeof hostname !== 'undefined') {
            payload['hostname'] = hostname;
        }

        const uri = new URL(this.client.config.endpoint + path);
        return await this.client.call('post', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Get Platform
     *
     *
     * @param {string} projectId
     * @param {string} platformId
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async getPlatform(projectId: string, platformId: string): Promise<Models.Platform> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }

        if (typeof platformId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "platformId"');
        }

        let path = '/projects/{projectId}/platforms/{platformId}'.replace('{projectId}', projectId).replace('{platformId}', platformId);
        let payload: Payload = {};

        const uri = new URL(this.client.config.endpoint + path);
        return await this.client.call('get', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Update Platform
     *
     *
     * @param {string} projectId
     * @param {string} platformId
     * @param {string} name
     * @param {string} key
     * @param {string} store
     * @param {string} hostname
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async updatePlatform(projectId: string, platformId: string, name: string, key?: string, store?: string, hostname?: string): Promise<Models.Platform> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }

        if (typeof platformId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "platformId"');
        }

        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }

        let path = '/projects/{projectId}/platforms/{platformId}'.replace('{projectId}', projectId).replace('{platformId}', platformId);
        let payload: Payload = {};

        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }

        if (typeof key !== 'undefined') {
            payload['key'] = key;
        }

        if (typeof store !== 'undefined') {
            payload['store'] = store;
        }

        if (typeof hostname !== 'undefined') {
            payload['hostname'] = hostname;
        }

        const uri = new URL(this.client.config.endpoint + path);
        return await this.client.call('put', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Delete Platform
     *
     *
     * @param {string} projectId
     * @param {string} platformId
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async deletePlatform(projectId: string, platformId: string): Promise<{}> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }

        if (typeof platformId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "platformId"');
        }

        let path = '/projects/{projectId}/platforms/{platformId}'.replace('{projectId}', projectId).replace('{platformId}', platformId);
        let payload: Payload = {};

        const uri = new URL(this.client.config.endpoint + path);
        return await this.client.call('delete', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Update service status
     *
     *
     * @param {string} projectId
     * @param {string} service
     * @param {boolean} status
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async updateServiceStatus(projectId: string, service: string, status: boolean): Promise<Models.Project> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }

        if (typeof service === 'undefined') {
            throw new AppwriteException('Missing required parameter: "service"');
        }

        if (typeof status === 'undefined') {
            throw new AppwriteException('Missing required parameter: "status"');
        }

        let path = '/projects/{projectId}/service'.replace('{projectId}', projectId);
        let payload: Payload = {};

        if (typeof service !== 'undefined') {
            payload['service'] = service;
        }

        if (typeof status !== 'undefined') {
            payload['status'] = status;
        }

        const uri = new URL(this.client.config.endpoint + path);
        return await this.client.call('patch', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Update all service status
     *
     *
     * @param {string} projectId
     * @param {boolean} status
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async updateServiceStatusAll(projectId: string, status: boolean): Promise<Models.Project> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }

        if (typeof status === 'undefined') {
            throw new AppwriteException('Missing required parameter: "status"');
        }

        let path = '/projects/{projectId}/service/all'.replace('{projectId}', projectId);
        let payload: Payload = {};

        if (typeof status !== 'undefined') {
            payload['status'] = status;
        }

        const uri = new URL(this.client.config.endpoint + path);
        return await this.client.call('patch', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Update SMTP configuration
     *
     *
     * @param {string} projectId
     * @param {boolean} enabled
     * @param {string} senderName
     * @param {string} senderEmail
     * @param {string} replyTo
     * @param {string} host
     * @param {number} port
     * @param {string} username
     * @param {string} password
     * @param {string} secure
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async updateSmtpConfiguration(projectId: string, enabled: boolean, senderName?: string, senderEmail?: string, replyTo?: string, host?: string, port?: number, username?: string, password?: string, secure?: string): Promise<Models.Project> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }

        if (typeof enabled === 'undefined') {
            throw new AppwriteException('Missing required parameter: "enabled"');
        }

        let path = '/projects/{projectId}/smtp'.replace('{projectId}', projectId);
        let payload: Payload = {};

        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }

        if (typeof senderName !== 'undefined') {
            payload['senderName'] = senderName;
        }

        if (typeof senderEmail !== 'undefined') {
            payload['senderEmail'] = senderEmail;
        }

        if (typeof replyTo !== 'undefined') {
            payload['replyTo'] = replyTo;
        }

        if (typeof host !== 'undefined') {
            payload['host'] = host;
        }

        if (typeof port !== 'undefined') {
            payload['port'] = port;
        }

        if (typeof username !== 'undefined') {
            payload['username'] = username;
        }

        if (typeof password !== 'undefined') {
            payload['password'] = password;
        }

        if (typeof secure !== 'undefined') {
            payload['secure'] = secure;
        }

        const uri = new URL(this.client.config.endpoint + path);
        return await this.client.call('patch', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Update Project Team
     *
     *
     * @param {string} projectId
     * @param {string} teamId
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async updateTeam(projectId: string, teamId: string): Promise<Models.Project> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }

        if (typeof teamId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "teamId"');
        }

        let path = '/projects/{projectId}/team'.replace('{projectId}', projectId);
        let payload: Payload = {};

        if (typeof teamId !== 'undefined') {
            payload['teamId'] = teamId;
        }

        const uri = new URL(this.client.config.endpoint + path);
        return await this.client.call('patch', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Get custom email template
     *
     *
     * @param {string} projectId
     * @param {string} type
     * @param {string} locale
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async getEmailTemplate(projectId: string, type: string, locale: string): Promise<Models.EmailTemplate> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }

        if (typeof type === 'undefined') {
            throw new AppwriteException('Missing required parameter: "type"');
        }

        if (typeof locale === 'undefined') {
            throw new AppwriteException('Missing required parameter: "locale"');
        }

        let path = '/projects/{projectId}/templates/email/{type}/{locale}'.replace('{projectId}', projectId).replace('{type}', type).replace('{locale}', locale);
        let payload: Payload = {};

        const uri = new URL(this.client.config.endpoint + path);
        return await this.client.call('get', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Update custom email templates
     *
     *
     * @param {string} projectId
     * @param {string} type
     * @param {string} locale
     * @param {string} subject
     * @param {string} message
     * @param {string} senderName
     * @param {string} senderEmail
     * @param {string} replyTo
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async updateEmailTemplate(projectId: string, type: string, locale: string, subject: string, message: string, senderName?: string, senderEmail?: string, replyTo?: string): Promise<Models.Project> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }

        if (typeof type === 'undefined') {
            throw new AppwriteException('Missing required parameter: "type"');
        }

        if (typeof locale === 'undefined') {
            throw new AppwriteException('Missing required parameter: "locale"');
        }

        if (typeof subject === 'undefined') {
            throw new AppwriteException('Missing required parameter: "subject"');
        }

        if (typeof message === 'undefined') {
            throw new AppwriteException('Missing required parameter: "message"');
        }

        let path = '/projects/{projectId}/templates/email/{type}/{locale}'.replace('{projectId}', projectId).replace('{type}', type).replace('{locale}', locale);
        let payload: Payload = {};

        if (typeof subject !== 'undefined') {
            payload['subject'] = subject;
        }

        if (typeof message !== 'undefined') {
            payload['message'] = message;
        }

        if (typeof senderName !== 'undefined') {
            payload['senderName'] = senderName;
        }

        if (typeof senderEmail !== 'undefined') {
            payload['senderEmail'] = senderEmail;
        }

        if (typeof replyTo !== 'undefined') {
            payload['replyTo'] = replyTo;
        }

        const uri = new URL(this.client.config.endpoint + path);
        return await this.client.call('patch', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Reset custom email template
     *
     *
     * @param {string} projectId
     * @param {string} type
     * @param {string} locale
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async deleteEmailTemplate(projectId: string, type: string, locale: string): Promise<Models.EmailTemplate> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }

        if (typeof type === 'undefined') {
            throw new AppwriteException('Missing required parameter: "type"');
        }

        if (typeof locale === 'undefined') {
            throw new AppwriteException('Missing required parameter: "locale"');
        }

        let path = '/projects/{projectId}/templates/email/{type}/{locale}'.replace('{projectId}', projectId).replace('{type}', type).replace('{locale}', locale);
        let payload: Payload = {};

        const uri = new URL(this.client.config.endpoint + path);
        return await this.client.call('delete', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Get custom SMS template
     *
     *
     * @param {string} projectId
     * @param {string} type
     * @param {string} locale
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async getSmsTemplate(projectId: string, type: string, locale: string): Promise<Models.SmsTemplate> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }

        if (typeof type === 'undefined') {
            throw new AppwriteException('Missing required parameter: "type"');
        }

        if (typeof locale === 'undefined') {
            throw new AppwriteException('Missing required parameter: "locale"');
        }

        let path = '/projects/{projectId}/templates/sms/{type}/{locale}'.replace('{projectId}', projectId).replace('{type}', type).replace('{locale}', locale);
        let payload: Payload = {};

        const uri = new URL(this.client.config.endpoint + path);
        return await this.client.call('get', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Update custom SMS template
     *
     *
     * @param {string} projectId
     * @param {string} type
     * @param {string} locale
     * @param {string} message
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async updateSmsTemplate(projectId: string, type: string, locale: string, message: string): Promise<Models.SmsTemplate> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }

        if (typeof type === 'undefined') {
            throw new AppwriteException('Missing required parameter: "type"');
        }

        if (typeof locale === 'undefined') {
            throw new AppwriteException('Missing required parameter: "locale"');
        }

        if (typeof message === 'undefined') {
            throw new AppwriteException('Missing required parameter: "message"');
        }

        let path = '/projects/{projectId}/templates/sms/{type}/{locale}'.replace('{projectId}', projectId).replace('{type}', type).replace('{locale}', locale);
        let payload: Payload = {};

        if (typeof message !== 'undefined') {
            payload['message'] = message;
        }

        const uri = new URL(this.client.config.endpoint + path);
        return await this.client.call('patch', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Reset custom SMS template
     *
     *
     * @param {string} projectId
     * @param {string} type
     * @param {string} locale
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async deleteSmsTemplate(projectId: string, type: string, locale: string): Promise<Models.SmsTemplate> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }

        if (typeof type === 'undefined') {
            throw new AppwriteException('Missing required parameter: "type"');
        }

        if (typeof locale === 'undefined') {
            throw new AppwriteException('Missing required parameter: "locale"');
        }

        let path = '/projects/{projectId}/templates/sms/{type}/{locale}'.replace('{projectId}', projectId).replace('{type}', type).replace('{locale}', locale);
        let payload: Payload = {};

        const uri = new URL(this.client.config.endpoint + path);
        return await this.client.call('delete', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Get usage stats for a project
     *
     *
     * @param {string} projectId
     * @param {string} range
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async getUsage(projectId: string, range?: string): Promise<Models.UsageProject> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }

        let path = '/projects/{projectId}/usage'.replace('{projectId}', projectId);
        let payload: Payload = {};

        if (typeof range !== 'undefined') {
            payload['range'] = range;
        }

        const uri = new URL(this.client.config.endpoint + path);
        return await this.client.call('get', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * List Webhooks
     *
     *
     * @param {string} projectId
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async listWebhooks(projectId: string): Promise<Models.WebhookList> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }

        let path = '/projects/{projectId}/webhooks'.replace('{projectId}', projectId);
        let payload: Payload = {};

        const uri = new URL(this.client.config.endpoint + path);
        return await this.client.call('get', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Create Webhook
     *
     *
     * @param {string} projectId
     * @param {string} name
     * @param {string[]} events
     * @param {string} url
     * @param {boolean} security
     * @param {string} httpUser
     * @param {string} httpPass
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async createWebhook(projectId: string, name: string, events: string[], url: string, security: boolean, httpUser?: string, httpPass?: string): Promise<Models.Webhook> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }

        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }

        if (typeof events === 'undefined') {
            throw new AppwriteException('Missing required parameter: "events"');
        }

        if (typeof url === 'undefined') {
            throw new AppwriteException('Missing required parameter: "url"');
        }

        if (typeof security === 'undefined') {
            throw new AppwriteException('Missing required parameter: "security"');
        }

        let path = '/projects/{projectId}/webhooks'.replace('{projectId}', projectId);
        let payload: Payload = {};

        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }

        if (typeof events !== 'undefined') {
            payload['events'] = events;
        }

        if (typeof url !== 'undefined') {
            payload['url'] = url;
        }

        if (typeof security !== 'undefined') {
            payload['security'] = security;
        }

        if (typeof httpUser !== 'undefined') {
            payload['httpUser'] = httpUser;
        }

        if (typeof httpPass !== 'undefined') {
            payload['httpPass'] = httpPass;
        }

        const uri = new URL(this.client.config.endpoint + path);
        return await this.client.call('post', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Get Webhook
     *
     *
     * @param {string} projectId
     * @param {string} webhookId
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async getWebhook(projectId: string, webhookId: string): Promise<Models.Webhook> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }

        if (typeof webhookId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "webhookId"');
        }

        let path = '/projects/{projectId}/webhooks/{webhookId}'.replace('{projectId}', projectId).replace('{webhookId}', webhookId);
        let payload: Payload = {};

        const uri = new URL(this.client.config.endpoint + path);
        return await this.client.call('get', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Update Webhook
     *
     *
     * @param {string} projectId
     * @param {string} webhookId
     * @param {string} name
     * @param {string[]} events
     * @param {string} url
     * @param {boolean} security
     * @param {string} httpUser
     * @param {string} httpPass
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async updateWebhook(projectId: string, webhookId: string, name: string, events: string[], url: string, security: boolean, httpUser?: string, httpPass?: string): Promise<Models.Webhook> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }

        if (typeof webhookId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "webhookId"');
        }

        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }

        if (typeof events === 'undefined') {
            throw new AppwriteException('Missing required parameter: "events"');
        }

        if (typeof url === 'undefined') {
            throw new AppwriteException('Missing required parameter: "url"');
        }

        if (typeof security === 'undefined') {
            throw new AppwriteException('Missing required parameter: "security"');
        }

        let path = '/projects/{projectId}/webhooks/{webhookId}'.replace('{projectId}', projectId).replace('{webhookId}', webhookId);
        let payload: Payload = {};

        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }

        if (typeof events !== 'undefined') {
            payload['events'] = events;
        }

        if (typeof url !== 'undefined') {
            payload['url'] = url;
        }

        if (typeof security !== 'undefined') {
            payload['security'] = security;
        }

        if (typeof httpUser !== 'undefined') {
            payload['httpUser'] = httpUser;
        }

        if (typeof httpPass !== 'undefined') {
            payload['httpPass'] = httpPass;
        }

        const uri = new URL(this.client.config.endpoint + path);
        return await this.client.call('put', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Delete Webhook
     *
     *
     * @param {string} projectId
     * @param {string} webhookId
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async deleteWebhook(projectId: string, webhookId: string): Promise<{}> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }

        if (typeof webhookId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "webhookId"');
        }

        let path = '/projects/{projectId}/webhooks/{webhookId}'.replace('{projectId}', projectId).replace('{webhookId}', webhookId);
        let payload: Payload = {};

        const uri = new URL(this.client.config.endpoint + path);
        return await this.client.call('delete', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Update Webhook Signature Key
     *
     *
     * @param {string} projectId
     * @param {string} webhookId
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async updateWebhookSignature(projectId: string, webhookId: string): Promise<Models.Webhook> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }

        if (typeof webhookId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "webhookId"');
        }

        let path = '/projects/{projectId}/webhooks/{webhookId}/signature'.replace('{projectId}', projectId).replace('{webhookId}', webhookId);
        let payload: Payload = {};

        const uri = new URL(this.client.config.endpoint + path);
        return await this.client.call('patch', uri, {
            'content-type': 'application/json',
        }, payload);
    }
};
