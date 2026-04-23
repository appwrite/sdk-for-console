import { Service } from '../service';
import { AppwriteException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { Scopes } from '../enums/scopes';
import { ProtocolId } from '../enums/protocol-id';
import { ServiceId } from '../enums/service-id';
import { Secure } from '../enums/secure';
import { EmailTemplateType } from '../enums/email-template-type';
import { EmailTemplateLocale } from '../enums/email-template-locale';
import { ProjectUsageRange } from '../enums/project-usage-range';

export class Project {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Configure if canonical emails (alias subaddresses and emails with suffixes) are allowed during new users sign-ups in this project.
     *
     * @param {boolean} params.enabled - Set whether or not to require canonical email addresses during signup and email updates.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     */
    updateCanonicalEmails(params: { enabled: boolean }): Promise<Models.Project>;
    /**
     * Configure if canonical emails (alias subaddresses and emails with suffixes) are allowed during new users sign-ups in this project.
     *
     * @param {boolean} enabled - Set whether or not to require canonical email addresses during signup and email updates.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateCanonicalEmails(enabled: boolean): Promise<Models.Project>;
    updateCanonicalEmails(
        paramsOrFirst: { enabled: boolean } | boolean    
    ): Promise<Models.Project> {
        let params: { enabled: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { enabled: boolean };
        } else {
            params = {
                enabled: paramsOrFirst as boolean            
            };
        }
        
        const enabled = params.enabled;

        if (typeof enabled === 'undefined') {
            throw new AppwriteException('Missing required parameter: "enabled"');
        }

        const apiPath = '/project/auth/canonical-emails';
        const payload: Payload = {};
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
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
     * Configure if disposable emails (emails of known temporary domains) are allowed during new users sign-ups in this project.
     *
     * @param {boolean} params.enabled - Set whether or not to block disposable email addresses during signup and email updates.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     */
    updateDisposableEmails(params: { enabled: boolean }): Promise<Models.Project>;
    /**
     * Configure if disposable emails (emails of known temporary domains) are allowed during new users sign-ups in this project.
     *
     * @param {boolean} enabled - Set whether or not to block disposable email addresses during signup and email updates.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateDisposableEmails(enabled: boolean): Promise<Models.Project>;
    updateDisposableEmails(
        paramsOrFirst: { enabled: boolean } | boolean    
    ): Promise<Models.Project> {
        let params: { enabled: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { enabled: boolean };
        } else {
            params = {
                enabled: paramsOrFirst as boolean            
            };
        }
        
        const enabled = params.enabled;

        if (typeof enabled === 'undefined') {
            throw new AppwriteException('Missing required parameter: "enabled"');
        }

        const apiPath = '/project/auth/disposable-emails';
        const payload: Payload = {};
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
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
     * Configure if free emails (non-commercial and not a custom domain) are allowed during new users sign-ups in this project.
     *
     * @param {boolean} params.enabled - Set whether or not to block free email addresses during signup and email updates.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     */
    updateFreeEmails(params: { enabled: boolean }): Promise<Models.Project>;
    /**
     * Configure if free emails (non-commercial and not a custom domain) are allowed during new users sign-ups in this project.
     *
     * @param {boolean} enabled - Set whether or not to block free email addresses during signup and email updates.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateFreeEmails(enabled: boolean): Promise<Models.Project>;
    updateFreeEmails(
        paramsOrFirst: { enabled: boolean } | boolean    
    ): Promise<Models.Project> {
        let params: { enabled: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { enabled: boolean };
        } else {
            params = {
                enabled: paramsOrFirst as boolean            
            };
        }
        
        const enabled = params.enabled;

        if (typeof enabled === 'undefined') {
            throw new AppwriteException('Missing required parameter: "enabled"');
        }

        const apiPath = '/project/auth/free-emails';
        const payload: Payload = {};
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
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
     * Get a list of all API keys from the current project.
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: expire, accessedAt, name, scopes
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.KeyList>}
     */
    listKeys(params?: { queries?: string[], total?: boolean }): Promise<Models.KeyList>;
    /**
     * Get a list of all API keys from the current project.
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: expire, accessedAt, name, scopes
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.KeyList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listKeys(queries?: string[], total?: boolean): Promise<Models.KeyList>;
    listKeys(
        paramsOrFirst?: { queries?: string[], total?: boolean } | string[],
        ...rest: [(boolean)?]    
    ): Promise<Models.KeyList> {
        let params: { queries?: string[], total?: boolean };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { queries?: string[], total?: boolean };
        } else {
            params = {
                queries: paramsOrFirst as string[],
                total: rest[0] as boolean            
            };
        }
        
        const queries = params.queries;
        const total = params.total;


        const apiPath = '/project/keys';
        const payload: Payload = {};
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }
        if (typeof total !== 'undefined') {
            payload['total'] = total;
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
     * Create a new API key. It's recommended to have multiple API keys with strict scopes for separate functions within your project.
     *
     * @param {string} params.keyId - Key ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Key name. Max length: 128 chars.
     * @param {Scopes[]} params.scopes - Key scopes list. Maximum of 100 scopes are allowed.
     * @param {string} params.expire - Expiration time in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Use null for unlimited expiration.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Key>}
     */
    createKey(params: { keyId: string, name: string, scopes: Scopes[], expire?: string }): Promise<Models.Key>;
    /**
     * Create a new API key. It's recommended to have multiple API keys with strict scopes for separate functions within your project.
     *
     * @param {string} keyId - Key ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Key name. Max length: 128 chars.
     * @param {Scopes[]} scopes - Key scopes list. Maximum of 100 scopes are allowed.
     * @param {string} expire - Expiration time in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Use null for unlimited expiration.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Key>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createKey(keyId: string, name: string, scopes: Scopes[], expire?: string): Promise<Models.Key>;
    createKey(
        paramsOrFirst: { keyId: string, name: string, scopes: Scopes[], expire?: string } | string,
        ...rest: [(string)?, (Scopes[])?, (string)?]    
    ): Promise<Models.Key> {
        let params: { keyId: string, name: string, scopes: Scopes[], expire?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { keyId: string, name: string, scopes: Scopes[], expire?: string };
        } else {
            params = {
                keyId: paramsOrFirst as string,
                name: rest[0] as string,
                scopes: rest[1] as Scopes[],
                expire: rest[2] as string            
            };
        }
        
        const keyId = params.keyId;
        const name = params.name;
        const scopes = params.scopes;
        const expire = params.expire;

        if (typeof keyId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "keyId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof scopes === 'undefined') {
            throw new AppwriteException('Missing required parameter: "scopes"');
        }

        const apiPath = '/project/keys';
        const payload: Payload = {};
        if (typeof keyId !== 'undefined') {
            payload['keyId'] = keyId;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof scopes !== 'undefined') {
            payload['scopes'] = scopes;
        }
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
     * Get a key by its unique ID. 
     *
     * @param {string} params.keyId - Key ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Key>}
     */
    getKey(params: { keyId: string }): Promise<Models.Key>;
    /**
     * Get a key by its unique ID. 
     *
     * @param {string} keyId - Key ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Key>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getKey(keyId: string): Promise<Models.Key>;
    getKey(
        paramsOrFirst: { keyId: string } | string    
    ): Promise<Models.Key> {
        let params: { keyId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { keyId: string };
        } else {
            params = {
                keyId: paramsOrFirst as string            
            };
        }
        
        const keyId = params.keyId;

        if (typeof keyId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "keyId"');
        }

        const apiPath = '/project/keys/{keyId}'.replace('{keyId}', keyId);
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
     * Update a key by its unique ID. Use this endpoint to update the name, scopes, or expiration time of an API key.
     *
     * @param {string} params.keyId - Key ID.
     * @param {string} params.name - Key name. Max length: 128 chars.
     * @param {Scopes[]} params.scopes - Key scopes list. Maximum of 100 scopes are allowed.
     * @param {string} params.expire - Expiration time in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Use null for unlimited expiration.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Key>}
     */
    updateKey(params: { keyId: string, name: string, scopes: Scopes[], expire?: string }): Promise<Models.Key>;
    /**
     * Update a key by its unique ID. Use this endpoint to update the name, scopes, or expiration time of an API key.
     *
     * @param {string} keyId - Key ID.
     * @param {string} name - Key name. Max length: 128 chars.
     * @param {Scopes[]} scopes - Key scopes list. Maximum of 100 scopes are allowed.
     * @param {string} expire - Expiration time in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Use null for unlimited expiration.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Key>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateKey(keyId: string, name: string, scopes: Scopes[], expire?: string): Promise<Models.Key>;
    updateKey(
        paramsOrFirst: { keyId: string, name: string, scopes: Scopes[], expire?: string } | string,
        ...rest: [(string)?, (Scopes[])?, (string)?]    
    ): Promise<Models.Key> {
        let params: { keyId: string, name: string, scopes: Scopes[], expire?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { keyId: string, name: string, scopes: Scopes[], expire?: string };
        } else {
            params = {
                keyId: paramsOrFirst as string,
                name: rest[0] as string,
                scopes: rest[1] as Scopes[],
                expire: rest[2] as string            
            };
        }
        
        const keyId = params.keyId;
        const name = params.name;
        const scopes = params.scopes;
        const expire = params.expire;

        if (typeof keyId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "keyId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof scopes === 'undefined') {
            throw new AppwriteException('Missing required parameter: "scopes"');
        }

        const apiPath = '/project/keys/{keyId}'.replace('{keyId}', keyId);
        const payload: Payload = {};
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof scopes !== 'undefined') {
            payload['scopes'] = scopes;
        }
        if (typeof expire !== 'undefined') {
            payload['expire'] = expire;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'put',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Delete a key by its unique ID. Once deleted, the key can no longer be used to authenticate API calls.
     *
     * @param {string} params.keyId - Key ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteKey(params: { keyId: string }): Promise<{}>;
    /**
     * Delete a key by its unique ID. Once deleted, the key can no longer be used to authenticate API calls.
     *
     * @param {string} keyId - Key ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteKey(keyId: string): Promise<{}>;
    deleteKey(
        paramsOrFirst: { keyId: string } | string    
    ): Promise<{}> {
        let params: { keyId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { keyId: string };
        } else {
            params = {
                keyId: paramsOrFirst as string            
            };
        }
        
        const keyId = params.keyId;

        if (typeof keyId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "keyId"');
        }

        const apiPath = '/project/keys/{keyId}'.replace('{keyId}', keyId);
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
     * Update the project labels. Labels can be used to easily filter projects in an organization.
     *
     * @param {string[]} params.labels - Array of project labels. Replaces the previous labels. Maximum of 1000 labels are allowed, each up to 36 alphanumeric characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     */
    updateLabels(params: { labels: string[] }): Promise<Models.Project>;
    /**
     * Update the project labels. Labels can be used to easily filter projects in an organization.
     *
     * @param {string[]} labels - Array of project labels. Replaces the previous labels. Maximum of 1000 labels are allowed, each up to 36 alphanumeric characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateLabels(labels: string[]): Promise<Models.Project>;
    updateLabels(
        paramsOrFirst: { labels: string[] } | string[]    
    ): Promise<Models.Project> {
        let params: { labels: string[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { labels: string[] };
        } else {
            params = {
                labels: paramsOrFirst as string[]            
            };
        }
        
        const labels = params.labels;

        if (typeof labels === 'undefined') {
            throw new AppwriteException('Missing required parameter: "labels"');
        }

        const apiPath = '/project/labels';
        const payload: Payload = {};
        if (typeof labels !== 'undefined') {
            payload['labels'] = labels;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'put',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Get a list of all platforms in the project. This endpoint returns an array of all platforms and their configurations.
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: type, name, hostname, bundleIdentifier, applicationId, packageIdentifierName, packageName
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.PlatformList>}
     */
    listPlatforms(params?: { queries?: string[], total?: boolean }): Promise<Models.PlatformList>;
    /**
     * Get a list of all platforms in the project. This endpoint returns an array of all platforms and their configurations.
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: type, name, hostname, bundleIdentifier, applicationId, packageIdentifierName, packageName
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.PlatformList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listPlatforms(queries?: string[], total?: boolean): Promise<Models.PlatformList>;
    listPlatforms(
        paramsOrFirst?: { queries?: string[], total?: boolean } | string[],
        ...rest: [(boolean)?]    
    ): Promise<Models.PlatformList> {
        let params: { queries?: string[], total?: boolean };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { queries?: string[], total?: boolean };
        } else {
            params = {
                queries: paramsOrFirst as string[],
                total: rest[0] as boolean            
            };
        }
        
        const queries = params.queries;
        const total = params.total;


        const apiPath = '/project/platforms';
        const payload: Payload = {};
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }
        if (typeof total !== 'undefined') {
            payload['total'] = total;
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
     * Create a new Android platform for your project. Use this endpoint to register a new Android platform where your users will run your application which will interact with the Appwrite API.
     *
     * @param {string} params.platformId - Platform ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Platform name. Max length: 128 chars.
     * @param {string} params.applicationId - Android application ID. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.PlatformAndroid>}
     */
    createAndroidPlatform(params: { platformId: string, name: string, applicationId: string }): Promise<Models.PlatformAndroid>;
    /**
     * Create a new Android platform for your project. Use this endpoint to register a new Android platform where your users will run your application which will interact with the Appwrite API.
     *
     * @param {string} platformId - Platform ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Platform name. Max length: 128 chars.
     * @param {string} applicationId - Android application ID. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.PlatformAndroid>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createAndroidPlatform(platformId: string, name: string, applicationId: string): Promise<Models.PlatformAndroid>;
    createAndroidPlatform(
        paramsOrFirst: { platformId: string, name: string, applicationId: string } | string,
        ...rest: [(string)?, (string)?]    
    ): Promise<Models.PlatformAndroid> {
        let params: { platformId: string, name: string, applicationId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { platformId: string, name: string, applicationId: string };
        } else {
            params = {
                platformId: paramsOrFirst as string,
                name: rest[0] as string,
                applicationId: rest[1] as string            
            };
        }
        
        const platformId = params.platformId;
        const name = params.name;
        const applicationId = params.applicationId;

        if (typeof platformId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "platformId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof applicationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "applicationId"');
        }

        const apiPath = '/project/platforms/android';
        const payload: Payload = {};
        if (typeof platformId !== 'undefined') {
            payload['platformId'] = platformId;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof applicationId !== 'undefined') {
            payload['applicationId'] = applicationId;
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
     * Update an Android platform by its unique ID. Use this endpoint to update the platform's name or application ID.
     *
     * @param {string} params.platformId - Platform ID.
     * @param {string} params.name - Platform name. Max length: 128 chars.
     * @param {string} params.applicationId - Android application ID. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.PlatformAndroid>}
     */
    updateAndroidPlatform(params: { platformId: string, name: string, applicationId: string }): Promise<Models.PlatformAndroid>;
    /**
     * Update an Android platform by its unique ID. Use this endpoint to update the platform's name or application ID.
     *
     * @param {string} platformId - Platform ID.
     * @param {string} name - Platform name. Max length: 128 chars.
     * @param {string} applicationId - Android application ID. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.PlatformAndroid>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateAndroidPlatform(platformId: string, name: string, applicationId: string): Promise<Models.PlatformAndroid>;
    updateAndroidPlatform(
        paramsOrFirst: { platformId: string, name: string, applicationId: string } | string,
        ...rest: [(string)?, (string)?]    
    ): Promise<Models.PlatformAndroid> {
        let params: { platformId: string, name: string, applicationId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { platformId: string, name: string, applicationId: string };
        } else {
            params = {
                platformId: paramsOrFirst as string,
                name: rest[0] as string,
                applicationId: rest[1] as string            
            };
        }
        
        const platformId = params.platformId;
        const name = params.name;
        const applicationId = params.applicationId;

        if (typeof platformId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "platformId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof applicationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "applicationId"');
        }

        const apiPath = '/project/platforms/android/{platformId}'.replace('{platformId}', platformId);
        const payload: Payload = {};
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof applicationId !== 'undefined') {
            payload['applicationId'] = applicationId;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'put',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Create a new Apple platform for your project. Use this endpoint to register a new Apple platform where your users will run your application which will interact with the Appwrite API.
     *
     * @param {string} params.platformId - Platform ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Platform name. Max length: 128 chars.
     * @param {string} params.bundleIdentifier - Apple bundle identifier. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.PlatformApple>}
     */
    createApplePlatform(params: { platformId: string, name: string, bundleIdentifier: string }): Promise<Models.PlatformApple>;
    /**
     * Create a new Apple platform for your project. Use this endpoint to register a new Apple platform where your users will run your application which will interact with the Appwrite API.
     *
     * @param {string} platformId - Platform ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Platform name. Max length: 128 chars.
     * @param {string} bundleIdentifier - Apple bundle identifier. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.PlatformApple>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createApplePlatform(platformId: string, name: string, bundleIdentifier: string): Promise<Models.PlatformApple>;
    createApplePlatform(
        paramsOrFirst: { platformId: string, name: string, bundleIdentifier: string } | string,
        ...rest: [(string)?, (string)?]    
    ): Promise<Models.PlatformApple> {
        let params: { platformId: string, name: string, bundleIdentifier: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { platformId: string, name: string, bundleIdentifier: string };
        } else {
            params = {
                platformId: paramsOrFirst as string,
                name: rest[0] as string,
                bundleIdentifier: rest[1] as string            
            };
        }
        
        const platformId = params.platformId;
        const name = params.name;
        const bundleIdentifier = params.bundleIdentifier;

        if (typeof platformId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "platformId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof bundleIdentifier === 'undefined') {
            throw new AppwriteException('Missing required parameter: "bundleIdentifier"');
        }

        const apiPath = '/project/platforms/apple';
        const payload: Payload = {};
        if (typeof platformId !== 'undefined') {
            payload['platformId'] = platformId;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof bundleIdentifier !== 'undefined') {
            payload['bundleIdentifier'] = bundleIdentifier;
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
     * Update an Apple platform by its unique ID. Use this endpoint to update the platform's name or bundle identifier.
     *
     * @param {string} params.platformId - Platform ID.
     * @param {string} params.name - Platform name. Max length: 128 chars.
     * @param {string} params.bundleIdentifier - Apple bundle identifier. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.PlatformApple>}
     */
    updateApplePlatform(params: { platformId: string, name: string, bundleIdentifier: string }): Promise<Models.PlatformApple>;
    /**
     * Update an Apple platform by its unique ID. Use this endpoint to update the platform's name or bundle identifier.
     *
     * @param {string} platformId - Platform ID.
     * @param {string} name - Platform name. Max length: 128 chars.
     * @param {string} bundleIdentifier - Apple bundle identifier. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.PlatformApple>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateApplePlatform(platformId: string, name: string, bundleIdentifier: string): Promise<Models.PlatformApple>;
    updateApplePlatform(
        paramsOrFirst: { platformId: string, name: string, bundleIdentifier: string } | string,
        ...rest: [(string)?, (string)?]    
    ): Promise<Models.PlatformApple> {
        let params: { platformId: string, name: string, bundleIdentifier: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { platformId: string, name: string, bundleIdentifier: string };
        } else {
            params = {
                platformId: paramsOrFirst as string,
                name: rest[0] as string,
                bundleIdentifier: rest[1] as string            
            };
        }
        
        const platformId = params.platformId;
        const name = params.name;
        const bundleIdentifier = params.bundleIdentifier;

        if (typeof platformId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "platformId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof bundleIdentifier === 'undefined') {
            throw new AppwriteException('Missing required parameter: "bundleIdentifier"');
        }

        const apiPath = '/project/platforms/apple/{platformId}'.replace('{platformId}', platformId);
        const payload: Payload = {};
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof bundleIdentifier !== 'undefined') {
            payload['bundleIdentifier'] = bundleIdentifier;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'put',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Create a new Linux platform for your project. Use this endpoint to register a new Linux platform where your users will run your application which will interact with the Appwrite API.
     *
     * @param {string} params.platformId - Platform ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Platform name. Max length: 128 chars.
     * @param {string} params.packageName - Linux package name. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.PlatformLinux>}
     */
    createLinuxPlatform(params: { platformId: string, name: string, packageName: string }): Promise<Models.PlatformLinux>;
    /**
     * Create a new Linux platform for your project. Use this endpoint to register a new Linux platform where your users will run your application which will interact with the Appwrite API.
     *
     * @param {string} platformId - Platform ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Platform name. Max length: 128 chars.
     * @param {string} packageName - Linux package name. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.PlatformLinux>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createLinuxPlatform(platformId: string, name: string, packageName: string): Promise<Models.PlatformLinux>;
    createLinuxPlatform(
        paramsOrFirst: { platformId: string, name: string, packageName: string } | string,
        ...rest: [(string)?, (string)?]    
    ): Promise<Models.PlatformLinux> {
        let params: { platformId: string, name: string, packageName: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { platformId: string, name: string, packageName: string };
        } else {
            params = {
                platformId: paramsOrFirst as string,
                name: rest[0] as string,
                packageName: rest[1] as string            
            };
        }
        
        const platformId = params.platformId;
        const name = params.name;
        const packageName = params.packageName;

        if (typeof platformId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "platformId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof packageName === 'undefined') {
            throw new AppwriteException('Missing required parameter: "packageName"');
        }

        const apiPath = '/project/platforms/linux';
        const payload: Payload = {};
        if (typeof platformId !== 'undefined') {
            payload['platformId'] = platformId;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof packageName !== 'undefined') {
            payload['packageName'] = packageName;
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
     * Update a Linux platform by its unique ID. Use this endpoint to update the platform's name or package name.
     *
     * @param {string} params.platformId - Platform ID.
     * @param {string} params.name - Platform name. Max length: 128 chars.
     * @param {string} params.packageName - Linux package name. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.PlatformLinux>}
     */
    updateLinuxPlatform(params: { platformId: string, name: string, packageName: string }): Promise<Models.PlatformLinux>;
    /**
     * Update a Linux platform by its unique ID. Use this endpoint to update the platform's name or package name.
     *
     * @param {string} platformId - Platform ID.
     * @param {string} name - Platform name. Max length: 128 chars.
     * @param {string} packageName - Linux package name. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.PlatformLinux>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateLinuxPlatform(platformId: string, name: string, packageName: string): Promise<Models.PlatformLinux>;
    updateLinuxPlatform(
        paramsOrFirst: { platformId: string, name: string, packageName: string } | string,
        ...rest: [(string)?, (string)?]    
    ): Promise<Models.PlatformLinux> {
        let params: { platformId: string, name: string, packageName: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { platformId: string, name: string, packageName: string };
        } else {
            params = {
                platformId: paramsOrFirst as string,
                name: rest[0] as string,
                packageName: rest[1] as string            
            };
        }
        
        const platformId = params.platformId;
        const name = params.name;
        const packageName = params.packageName;

        if (typeof platformId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "platformId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof packageName === 'undefined') {
            throw new AppwriteException('Missing required parameter: "packageName"');
        }

        const apiPath = '/project/platforms/linux/{platformId}'.replace('{platformId}', platformId);
        const payload: Payload = {};
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof packageName !== 'undefined') {
            payload['packageName'] = packageName;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'put',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Create a new web platform for your project. Use this endpoint to register a new platform where your users will run your application which will interact with the Appwrite API.
     *
     * @param {string} params.platformId - Platform ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Platform name. Max length: 128 chars.
     * @param {string} params.hostname - Platform web hostname. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.PlatformWeb>}
     */
    createWebPlatform(params: { platformId: string, name: string, hostname: string }): Promise<Models.PlatformWeb>;
    /**
     * Create a new web platform for your project. Use this endpoint to register a new platform where your users will run your application which will interact with the Appwrite API.
     *
     * @param {string} platformId - Platform ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Platform name. Max length: 128 chars.
     * @param {string} hostname - Platform web hostname. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.PlatformWeb>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createWebPlatform(platformId: string, name: string, hostname: string): Promise<Models.PlatformWeb>;
    createWebPlatform(
        paramsOrFirst: { platformId: string, name: string, hostname: string } | string,
        ...rest: [(string)?, (string)?]    
    ): Promise<Models.PlatformWeb> {
        let params: { platformId: string, name: string, hostname: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { platformId: string, name: string, hostname: string };
        } else {
            params = {
                platformId: paramsOrFirst as string,
                name: rest[0] as string,
                hostname: rest[1] as string            
            };
        }
        
        const platformId = params.platformId;
        const name = params.name;
        const hostname = params.hostname;

        if (typeof platformId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "platformId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof hostname === 'undefined') {
            throw new AppwriteException('Missing required parameter: "hostname"');
        }

        const apiPath = '/project/platforms/web';
        const payload: Payload = {};
        if (typeof platformId !== 'undefined') {
            payload['platformId'] = platformId;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof hostname !== 'undefined') {
            payload['hostname'] = hostname;
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
     * Update a web platform by its unique ID. Use this endpoint to update the platform's name or hostname.
     *
     * @param {string} params.platformId - Platform ID.
     * @param {string} params.name - Platform name. Max length: 128 chars.
     * @param {string} params.hostname - Platform web hostname. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.PlatformWeb>}
     */
    updateWebPlatform(params: { platformId: string, name: string, hostname: string }): Promise<Models.PlatformWeb>;
    /**
     * Update a web platform by its unique ID. Use this endpoint to update the platform's name or hostname.
     *
     * @param {string} platformId - Platform ID.
     * @param {string} name - Platform name. Max length: 128 chars.
     * @param {string} hostname - Platform web hostname. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.PlatformWeb>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateWebPlatform(platformId: string, name: string, hostname: string): Promise<Models.PlatformWeb>;
    updateWebPlatform(
        paramsOrFirst: { platformId: string, name: string, hostname: string } | string,
        ...rest: [(string)?, (string)?]    
    ): Promise<Models.PlatformWeb> {
        let params: { platformId: string, name: string, hostname: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { platformId: string, name: string, hostname: string };
        } else {
            params = {
                platformId: paramsOrFirst as string,
                name: rest[0] as string,
                hostname: rest[1] as string            
            };
        }
        
        const platformId = params.platformId;
        const name = params.name;
        const hostname = params.hostname;

        if (typeof platformId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "platformId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof hostname === 'undefined') {
            throw new AppwriteException('Missing required parameter: "hostname"');
        }

        const apiPath = '/project/platforms/web/{platformId}'.replace('{platformId}', platformId);
        const payload: Payload = {};
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof hostname !== 'undefined') {
            payload['hostname'] = hostname;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'put',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Create a new Windows platform for your project. Use this endpoint to register a new Windows platform where your users will run your application which will interact with the Appwrite API.
     *
     * @param {string} params.platformId - Platform ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Platform name. Max length: 128 chars.
     * @param {string} params.packageIdentifierName - Windows package identifier name. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.PlatformWindows>}
     */
    createWindowsPlatform(params: { platformId: string, name: string, packageIdentifierName: string }): Promise<Models.PlatformWindows>;
    /**
     * Create a new Windows platform for your project. Use this endpoint to register a new Windows platform where your users will run your application which will interact with the Appwrite API.
     *
     * @param {string} platformId - Platform ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Platform name. Max length: 128 chars.
     * @param {string} packageIdentifierName - Windows package identifier name. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.PlatformWindows>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createWindowsPlatform(platformId: string, name: string, packageIdentifierName: string): Promise<Models.PlatformWindows>;
    createWindowsPlatform(
        paramsOrFirst: { platformId: string, name: string, packageIdentifierName: string } | string,
        ...rest: [(string)?, (string)?]    
    ): Promise<Models.PlatformWindows> {
        let params: { platformId: string, name: string, packageIdentifierName: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { platformId: string, name: string, packageIdentifierName: string };
        } else {
            params = {
                platformId: paramsOrFirst as string,
                name: rest[0] as string,
                packageIdentifierName: rest[1] as string            
            };
        }
        
        const platformId = params.platformId;
        const name = params.name;
        const packageIdentifierName = params.packageIdentifierName;

        if (typeof platformId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "platformId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof packageIdentifierName === 'undefined') {
            throw new AppwriteException('Missing required parameter: "packageIdentifierName"');
        }

        const apiPath = '/project/platforms/windows';
        const payload: Payload = {};
        if (typeof platformId !== 'undefined') {
            payload['platformId'] = platformId;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof packageIdentifierName !== 'undefined') {
            payload['packageIdentifierName'] = packageIdentifierName;
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
     * Update a Windows platform by its unique ID. Use this endpoint to update the platform's name or package identifier name.
     *
     * @param {string} params.platformId - Platform ID.
     * @param {string} params.name - Platform name. Max length: 128 chars.
     * @param {string} params.packageIdentifierName - Windows package identifier name. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.PlatformWindows>}
     */
    updateWindowsPlatform(params: { platformId: string, name: string, packageIdentifierName: string }): Promise<Models.PlatformWindows>;
    /**
     * Update a Windows platform by its unique ID. Use this endpoint to update the platform's name or package identifier name.
     *
     * @param {string} platformId - Platform ID.
     * @param {string} name - Platform name. Max length: 128 chars.
     * @param {string} packageIdentifierName - Windows package identifier name. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.PlatformWindows>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateWindowsPlatform(platformId: string, name: string, packageIdentifierName: string): Promise<Models.PlatformWindows>;
    updateWindowsPlatform(
        paramsOrFirst: { platformId: string, name: string, packageIdentifierName: string } | string,
        ...rest: [(string)?, (string)?]    
    ): Promise<Models.PlatformWindows> {
        let params: { platformId: string, name: string, packageIdentifierName: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { platformId: string, name: string, packageIdentifierName: string };
        } else {
            params = {
                platformId: paramsOrFirst as string,
                name: rest[0] as string,
                packageIdentifierName: rest[1] as string            
            };
        }
        
        const platformId = params.platformId;
        const name = params.name;
        const packageIdentifierName = params.packageIdentifierName;

        if (typeof platformId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "platformId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof packageIdentifierName === 'undefined') {
            throw new AppwriteException('Missing required parameter: "packageIdentifierName"');
        }

        const apiPath = '/project/platforms/windows/{platformId}'.replace('{platformId}', platformId);
        const payload: Payload = {};
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof packageIdentifierName !== 'undefined') {
            payload['packageIdentifierName'] = packageIdentifierName;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'put',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Get a platform by its unique ID. This endpoint returns the platform's details, including its name, type, and key configurations.
     *
     * @param {string} params.platformId - Platform ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.PlatformWeb | Models.PlatformApple | Models.PlatformAndroid | Models.PlatformWindows | Models.PlatformLinux>}
     */
    getPlatform(params: { platformId: string }): Promise<Models.PlatformWeb | Models.PlatformApple | Models.PlatformAndroid | Models.PlatformWindows | Models.PlatformLinux>;
    /**
     * Get a platform by its unique ID. This endpoint returns the platform's details, including its name, type, and key configurations.
     *
     * @param {string} platformId - Platform ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.PlatformWeb | Models.PlatformApple | Models.PlatformAndroid | Models.PlatformWindows | Models.PlatformLinux>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getPlatform(platformId: string): Promise<Models.PlatformWeb | Models.PlatformApple | Models.PlatformAndroid | Models.PlatformWindows | Models.PlatformLinux>;
    getPlatform(
        paramsOrFirst: { platformId: string } | string    
    ): Promise<Models.PlatformWeb | Models.PlatformApple | Models.PlatformAndroid | Models.PlatformWindows | Models.PlatformLinux> {
        let params: { platformId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { platformId: string };
        } else {
            params = {
                platformId: paramsOrFirst as string            
            };
        }
        
        const platformId = params.platformId;

        if (typeof platformId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "platformId"');
        }

        const apiPath = '/project/platforms/{platformId}'.replace('{platformId}', platformId);
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
     * Delete a platform by its unique ID. This endpoint removes the platform and all its configurations from the project.
     *
     * @param {string} params.platformId - Platform ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deletePlatform(params: { platformId: string }): Promise<{}>;
    /**
     * Delete a platform by its unique ID. This endpoint removes the platform and all its configurations from the project.
     *
     * @param {string} platformId - Platform ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deletePlatform(platformId: string): Promise<{}>;
    deletePlatform(
        paramsOrFirst: { platformId: string } | string    
    ): Promise<{}> {
        let params: { platformId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { platformId: string };
        } else {
            params = {
                platformId: paramsOrFirst as string            
            };
        }
        
        const platformId = params.platformId;

        if (typeof platformId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "platformId"');
        }

        const apiPath = '/project/platforms/{platformId}'.replace('{platformId}', platformId);
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
     * Updating this policy allows you to control if team members can see other members information. When enabled, all team members can see ID, name, email, phone number, and MFA status of other members..
     *
     * @param {boolean} params.userId - Set to true if you want make user ID visible to all team members, or false to hide it.
     * @param {boolean} params.userEmail - Set to true if you want make user email visible to all team members, or false to hide it.
     * @param {boolean} params.userPhone - Set to true if you want make user phone number visible to all team members, or false to hide it.
     * @param {boolean} params.userName - Set to true if you want make user name visible to all team members, or false to hide it.
     * @param {boolean} params.userMFA - Set to true if you want make user MFA status visible to all team members, or false to hide it.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     */
    updateMembershipPrivacyPolicy(params?: { userId?: boolean, userEmail?: boolean, userPhone?: boolean, userName?: boolean, userMFA?: boolean }): Promise<Models.Project>;
    /**
     * Updating this policy allows you to control if team members can see other members information. When enabled, all team members can see ID, name, email, phone number, and MFA status of other members..
     *
     * @param {boolean} userId - Set to true if you want make user ID visible to all team members, or false to hide it.
     * @param {boolean} userEmail - Set to true if you want make user email visible to all team members, or false to hide it.
     * @param {boolean} userPhone - Set to true if you want make user phone number visible to all team members, or false to hide it.
     * @param {boolean} userName - Set to true if you want make user name visible to all team members, or false to hide it.
     * @param {boolean} userMFA - Set to true if you want make user MFA status visible to all team members, or false to hide it.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateMembershipPrivacyPolicy(userId?: boolean, userEmail?: boolean, userPhone?: boolean, userName?: boolean, userMFA?: boolean): Promise<Models.Project>;
    updateMembershipPrivacyPolicy(
        paramsOrFirst?: { userId?: boolean, userEmail?: boolean, userPhone?: boolean, userName?: boolean, userMFA?: boolean } | boolean,
        ...rest: [(boolean)?, (boolean)?, (boolean)?, (boolean)?]    
    ): Promise<Models.Project> {
        let params: { userId?: boolean, userEmail?: boolean, userPhone?: boolean, userName?: boolean, userMFA?: boolean };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { userId?: boolean, userEmail?: boolean, userPhone?: boolean, userName?: boolean, userMFA?: boolean };
        } else {
            params = {
                userId: paramsOrFirst as boolean,
                userEmail: rest[0] as boolean,
                userPhone: rest[1] as boolean,
                userName: rest[2] as boolean,
                userMFA: rest[3] as boolean            
            };
        }
        
        const userId = params.userId;
        const userEmail = params.userEmail;
        const userPhone = params.userPhone;
        const userName = params.userName;
        const userMFA = params.userMFA;


        const apiPath = '/project/policies/membership-privacy';
        const payload: Payload = {};
        if (typeof userId !== 'undefined') {
            payload['userId'] = userId;
        }
        if (typeof userEmail !== 'undefined') {
            payload['userEmail'] = userEmail;
        }
        if (typeof userPhone !== 'undefined') {
            payload['userPhone'] = userPhone;
        }
        if (typeof userName !== 'undefined') {
            payload['userName'] = userName;
        }
        if (typeof userMFA !== 'undefined') {
            payload['userMFA'] = userMFA;
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
     * Updating this policy allows you to control if new passwords are checked against most common passwords dictionary. When enabled, and user changes their password, password must not be contained in the dictionary.
     *
     * @param {boolean} params.enabled - Toggle password dictionary policy. Set to true if you want password change to block passwords in the dictionary, or false to allow them. When changing this policy, existing passwords remain valid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     */
    updatePasswordDictionaryPolicy(params: { enabled: boolean }): Promise<Models.Project>;
    /**
     * Updating this policy allows you to control if new passwords are checked against most common passwords dictionary. When enabled, and user changes their password, password must not be contained in the dictionary.
     *
     * @param {boolean} enabled - Toggle password dictionary policy. Set to true if you want password change to block passwords in the dictionary, or false to allow them. When changing this policy, existing passwords remain valid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updatePasswordDictionaryPolicy(enabled: boolean): Promise<Models.Project>;
    updatePasswordDictionaryPolicy(
        paramsOrFirst: { enabled: boolean } | boolean    
    ): Promise<Models.Project> {
        let params: { enabled: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { enabled: boolean };
        } else {
            params = {
                enabled: paramsOrFirst as boolean            
            };
        }
        
        const enabled = params.enabled;

        if (typeof enabled === 'undefined') {
            throw new AppwriteException('Missing required parameter: "enabled"');
        }

        const apiPath = '/project/policies/password-dictionary';
        const payload: Payload = {};
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
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
     * Updates one of password strength policies. Based on total length configured, previous password hashes are stored, and users cannot choose a new password that is already stored in the passwird history list, when updating an user password, or setting new one through password recovery.
     * 
     * Keep in mind, while password history policy is disabled, the history is not being stored. Enabling the policy will not have any history on existing users, and it will only start to collect and enforce the policy on password changes since the policy is enabled.
     *
     * @param {number} params.total - Set the password history length per user. Value can be between 1 and 5000, or null to disable the limit.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     */
    updatePasswordHistoryPolicy(params: { total?: number }): Promise<Models.Project>;
    /**
     * Updates one of password strength policies. Based on total length configured, previous password hashes are stored, and users cannot choose a new password that is already stored in the passwird history list, when updating an user password, or setting new one through password recovery.
     * 
     * Keep in mind, while password history policy is disabled, the history is not being stored. Enabling the policy will not have any history on existing users, and it will only start to collect and enforce the policy on password changes since the policy is enabled.
     *
     * @param {number} total - Set the password history length per user. Value can be between 1 and 5000, or null to disable the limit.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updatePasswordHistoryPolicy(total?: number): Promise<Models.Project>;
    updatePasswordHistoryPolicy(
        paramsOrFirst?: { total?: number } | number    
    ): Promise<Models.Project> {
        let params: { total?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { total?: number };
        } else {
            params = {
                total: paramsOrFirst as number            
            };
        }
        
        const total = params.total;

        if (typeof total === 'undefined') {
            throw new AppwriteException('Missing required parameter: "total"');
        }

        const apiPath = '/project/policies/password-history';
        const payload: Payload = {};
        if (typeof total !== 'undefined') {
            payload['total'] = total;
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
     * Updating this policy allows you to control if password strength is checked against personal data. When enabled, and user sets or changes their password, the password must not contain user ID, name, email or phone number.
     *
     * @param {boolean} params.enabled - Toggle password personal data policy. Set to true if you want to block passwords including user's personal data, or false to allow it. When changing this policy, existing passwords remain valid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     */
    updatePasswordPersonalDataPolicy(params: { enabled: boolean }): Promise<Models.Project>;
    /**
     * Updating this policy allows you to control if password strength is checked against personal data. When enabled, and user sets or changes their password, the password must not contain user ID, name, email or phone number.
     *
     * @param {boolean} enabled - Toggle password personal data policy. Set to true if you want to block passwords including user's personal data, or false to allow it. When changing this policy, existing passwords remain valid.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updatePasswordPersonalDataPolicy(enabled: boolean): Promise<Models.Project>;
    updatePasswordPersonalDataPolicy(
        paramsOrFirst: { enabled: boolean } | boolean    
    ): Promise<Models.Project> {
        let params: { enabled: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { enabled: boolean };
        } else {
            params = {
                enabled: paramsOrFirst as boolean            
            };
        }
        
        const enabled = params.enabled;

        if (typeof enabled === 'undefined') {
            throw new AppwriteException('Missing required parameter: "enabled"');
        }

        const apiPath = '/project/policies/password-personal-data';
        const payload: Payload = {};
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
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
     * Updating this policy allows you to control if email alert is sent upon session creation. When enabled, and user signs into their account, they will be sent an email notification. There is an exception, the first session after a new sign up does not trigger an alert, even if the policy is enabled.
     *
     * @param {boolean} params.enabled - Toggle session alert policy. Set to true if you want users to receive email notifications when a sessions are created for their users, or false to not send email alerts.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     */
    updateSessionAlertPolicy(params: { enabled: boolean }): Promise<Models.Project>;
    /**
     * Updating this policy allows you to control if email alert is sent upon session creation. When enabled, and user signs into their account, they will be sent an email notification. There is an exception, the first session after a new sign up does not trigger an alert, even if the policy is enabled.
     *
     * @param {boolean} enabled - Toggle session alert policy. Set to true if you want users to receive email notifications when a sessions are created for their users, or false to not send email alerts.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateSessionAlertPolicy(enabled: boolean): Promise<Models.Project>;
    updateSessionAlertPolicy(
        paramsOrFirst: { enabled: boolean } | boolean    
    ): Promise<Models.Project> {
        let params: { enabled: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { enabled: boolean };
        } else {
            params = {
                enabled: paramsOrFirst as boolean            
            };
        }
        
        const enabled = params.enabled;

        if (typeof enabled === 'undefined') {
            throw new AppwriteException('Missing required parameter: "enabled"');
        }

        const apiPath = '/project/policies/session-alert';
        const payload: Payload = {};
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
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
     * Update maximum duration how long sessions created within a project should stay active for.
     *
     * @param {number} params.duration - Maximum session length in seconds. Minium allowed value is 5 second, and maximum is 1 year, which is 31536000 seconds.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     */
    updateSessionDurationPolicy(params: { duration: number }): Promise<Models.Project>;
    /**
     * Update maximum duration how long sessions created within a project should stay active for.
     *
     * @param {number} duration - Maximum session length in seconds. Minium allowed value is 5 second, and maximum is 1 year, which is 31536000 seconds.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateSessionDurationPolicy(duration: number): Promise<Models.Project>;
    updateSessionDurationPolicy(
        paramsOrFirst: { duration: number } | number    
    ): Promise<Models.Project> {
        let params: { duration: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { duration: number };
        } else {
            params = {
                duration: paramsOrFirst as number            
            };
        }
        
        const duration = params.duration;

        if (typeof duration === 'undefined') {
            throw new AppwriteException('Missing required parameter: "duration"');
        }

        const apiPath = '/project/policies/session-duration';
        const payload: Payload = {};
        if (typeof duration !== 'undefined') {
            payload['duration'] = duration;
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
     * Updating this policy allows you to control if existing sessions should be invalidated when a password of a user is changed. When enabled, and user changes their password, they will be logged out of all their devices.
     *
     * @param {boolean} params.enabled - Toggle session invalidation policy. Set to true if you want password change to invalidate all sessions of an user, or false to keep sessions active.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     */
    updateSessionInvalidationPolicy(params: { enabled: boolean }): Promise<Models.Project>;
    /**
     * Updating this policy allows you to control if existing sessions should be invalidated when a password of a user is changed. When enabled, and user changes their password, they will be logged out of all their devices.
     *
     * @param {boolean} enabled - Toggle session invalidation policy. Set to true if you want password change to invalidate all sessions of an user, or false to keep sessions active.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateSessionInvalidationPolicy(enabled: boolean): Promise<Models.Project>;
    updateSessionInvalidationPolicy(
        paramsOrFirst: { enabled: boolean } | boolean    
    ): Promise<Models.Project> {
        let params: { enabled: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { enabled: boolean };
        } else {
            params = {
                enabled: paramsOrFirst as boolean            
            };
        }
        
        const enabled = params.enabled;

        if (typeof enabled === 'undefined') {
            throw new AppwriteException('Missing required parameter: "enabled"');
        }

        const apiPath = '/project/policies/session-invalidation';
        const payload: Payload = {};
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
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
     * Update the maximum number of sessions allowed per user. When the limit is hit, the oldest session will be deleted to make room for new one.
     *
     * @param {number} params.total - Set the maximum number of sessions allowed per user. Value can be between 1 and 5000, or null to disable the limit.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     */
    updateSessionLimitPolicy(params: { total?: number }): Promise<Models.Project>;
    /**
     * Update the maximum number of sessions allowed per user. When the limit is hit, the oldest session will be deleted to make room for new one.
     *
     * @param {number} total - Set the maximum number of sessions allowed per user. Value can be between 1 and 5000, or null to disable the limit.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateSessionLimitPolicy(total?: number): Promise<Models.Project>;
    updateSessionLimitPolicy(
        paramsOrFirst?: { total?: number } | number    
    ): Promise<Models.Project> {
        let params: { total?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { total?: number };
        } else {
            params = {
                total: paramsOrFirst as number            
            };
        }
        
        const total = params.total;

        if (typeof total === 'undefined') {
            throw new AppwriteException('Missing required parameter: "total"');
        }

        const apiPath = '/project/policies/session-limit';
        const payload: Payload = {};
        if (typeof total !== 'undefined') {
            payload['total'] = total;
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
     * Update the maximum number of users in the project. When the limit is hit or amount of existing users already exceeded the limit, all users remain active, but new user sign up will be prohibited.
     *
     * @param {number} params.total - Set the maximum number of users allowed in the project. Value can be between 1 and 5000, or null to disable the limit.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     */
    updateUserLimitPolicy(params: { total?: number }): Promise<Models.Project>;
    /**
     * Update the maximum number of users in the project. When the limit is hit or amount of existing users already exceeded the limit, all users remain active, but new user sign up will be prohibited.
     *
     * @param {number} total - Set the maximum number of users allowed in the project. Value can be between 1 and 5000, or null to disable the limit.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateUserLimitPolicy(total?: number): Promise<Models.Project>;
    updateUserLimitPolicy(
        paramsOrFirst?: { total?: number } | number    
    ): Promise<Models.Project> {
        let params: { total?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { total?: number };
        } else {
            params = {
                total: paramsOrFirst as number            
            };
        }
        
        const total = params.total;

        if (typeof total === 'undefined') {
            throw new AppwriteException('Missing required parameter: "total"');
        }

        const apiPath = '/project/policies/user-limit';
        const payload: Payload = {};
        if (typeof total !== 'undefined') {
            payload['total'] = total;
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
     * Update properties of a specific protocol. Use this endpoint to enable or disable a protocol in your project. 
     *
     * @param {ProtocolId} params.protocolId - Protocol name. Can be one of: rest, graphql, websocket
     * @param {boolean} params.enabled - Protocol status.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     */
    updateProtocol(params: { protocolId: ProtocolId, enabled: boolean }): Promise<Models.Project>;
    /**
     * Update properties of a specific protocol. Use this endpoint to enable or disable a protocol in your project. 
     *
     * @param {ProtocolId} protocolId - Protocol name. Can be one of: rest, graphql, websocket
     * @param {boolean} enabled - Protocol status.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateProtocol(protocolId: ProtocolId, enabled: boolean): Promise<Models.Project>;
    updateProtocol(
        paramsOrFirst: { protocolId: ProtocolId, enabled: boolean } | ProtocolId,
        ...rest: [(boolean)?]    
    ): Promise<Models.Project> {
        let params: { protocolId: ProtocolId, enabled: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('protocolId' in paramsOrFirst || 'enabled' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { protocolId: ProtocolId, enabled: boolean };
        } else {
            params = {
                protocolId: paramsOrFirst as ProtocolId,
                enabled: rest[0] as boolean            
            };
        }
        
        const protocolId = params.protocolId;
        const enabled = params.enabled;

        if (typeof protocolId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "protocolId"');
        }
        if (typeof enabled === 'undefined') {
            throw new AppwriteException('Missing required parameter: "enabled"');
        }

        const apiPath = '/project/protocols/{protocolId}'.replace('{protocolId}', protocolId);
        const payload: Payload = {};
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
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
     * Update properties of a specific service. Use this endpoint to enable or disable a service in your project. 
     *
     * @param {ServiceId} params.serviceId - Service name. Can be one of: account, avatars, databases, tablesdb, locale, health, project, storage, teams, users, vcs, sites, functions, proxy, graphql, migrations, messaging
     * @param {boolean} params.enabled - Service status.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     */
    updateService(params: { serviceId: ServiceId, enabled: boolean }): Promise<Models.Project>;
    /**
     * Update properties of a specific service. Use this endpoint to enable or disable a service in your project. 
     *
     * @param {ServiceId} serviceId - Service name. Can be one of: account, avatars, databases, tablesdb, locale, health, project, storage, teams, users, vcs, sites, functions, proxy, graphql, migrations, messaging
     * @param {boolean} enabled - Service status.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateService(serviceId: ServiceId, enabled: boolean): Promise<Models.Project>;
    updateService(
        paramsOrFirst: { serviceId: ServiceId, enabled: boolean } | ServiceId,
        ...rest: [(boolean)?]    
    ): Promise<Models.Project> {
        let params: { serviceId: ServiceId, enabled: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('serviceId' in paramsOrFirst || 'enabled' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { serviceId: ServiceId, enabled: boolean };
        } else {
            params = {
                serviceId: paramsOrFirst as ServiceId,
                enabled: rest[0] as boolean            
            };
        }
        
        const serviceId = params.serviceId;
        const enabled = params.enabled;

        if (typeof serviceId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "serviceId"');
        }
        if (typeof enabled === 'undefined') {
            throw new AppwriteException('Missing required parameter: "enabled"');
        }

        const apiPath = '/project/services/{serviceId}'.replace('{serviceId}', serviceId);
        const payload: Payload = {};
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
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
     * Update the SMTP configuration for your project. Use this endpoint to configure your project's SMTP provider with your custom settings for sending transactional emails.
     *
     * @param {string} params.host - SMTP server hostname (domain)
     * @param {number} params.port - SMTP server port
     * @param {string} params.username - SMTP server username. Leave empty for no authorization.
     * @param {string} params.password - SMTP server password. Leave empty for no authorization. This property is stored securely and cannot be read in future (write-only).
     * @param {string} params.senderEmail - Email address shown in inbox as the sender of the email.
     * @param {string} params.senderName - Name shown in inbox as the sender of the email.
     * @param {string} params.replyToEmail - Email used when user replies to the email.
     * @param {string} params.replyToName - Name used when user replies to the email.
     * @param {Secure} params.secure - Configures if communication with SMTP server is encrypted. Allowed values are: tls, ssl. Leave empty for no encryption.
     * @param {boolean} params.enabled - Enable or disable custom SMTP. Custom SMTP is useful for branding purposes, but also allows use of custom email templates.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     */
    updateSMTP(params?: { host?: string, port?: number, username?: string, password?: string, senderEmail?: string, senderName?: string, replyToEmail?: string, replyToName?: string, secure?: Secure, enabled?: boolean }): Promise<Models.Project>;
    /**
     * Update the SMTP configuration for your project. Use this endpoint to configure your project's SMTP provider with your custom settings for sending transactional emails.
     *
     * @param {string} host - SMTP server hostname (domain)
     * @param {number} port - SMTP server port
     * @param {string} username - SMTP server username. Leave empty for no authorization.
     * @param {string} password - SMTP server password. Leave empty for no authorization. This property is stored securely and cannot be read in future (write-only).
     * @param {string} senderEmail - Email address shown in inbox as the sender of the email.
     * @param {string} senderName - Name shown in inbox as the sender of the email.
     * @param {string} replyToEmail - Email used when user replies to the email.
     * @param {string} replyToName - Name used when user replies to the email.
     * @param {Secure} secure - Configures if communication with SMTP server is encrypted. Allowed values are: tls, ssl. Leave empty for no encryption.
     * @param {boolean} enabled - Enable or disable custom SMTP. Custom SMTP is useful for branding purposes, but also allows use of custom email templates.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateSMTP(host?: string, port?: number, username?: string, password?: string, senderEmail?: string, senderName?: string, replyToEmail?: string, replyToName?: string, secure?: Secure, enabled?: boolean): Promise<Models.Project>;
    updateSMTP(
        paramsOrFirst?: { host?: string, port?: number, username?: string, password?: string, senderEmail?: string, senderName?: string, replyToEmail?: string, replyToName?: string, secure?: Secure, enabled?: boolean } | string,
        ...rest: [(number)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (Secure)?, (boolean)?]    
    ): Promise<Models.Project> {
        let params: { host?: string, port?: number, username?: string, password?: string, senderEmail?: string, senderName?: string, replyToEmail?: string, replyToName?: string, secure?: Secure, enabled?: boolean };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { host?: string, port?: number, username?: string, password?: string, senderEmail?: string, senderName?: string, replyToEmail?: string, replyToName?: string, secure?: Secure, enabled?: boolean };
        } else {
            params = {
                host: paramsOrFirst as string,
                port: rest[0] as number,
                username: rest[1] as string,
                password: rest[2] as string,
                senderEmail: rest[3] as string,
                senderName: rest[4] as string,
                replyToEmail: rest[5] as string,
                replyToName: rest[6] as string,
                secure: rest[7] as Secure,
                enabled: rest[8] as boolean            
            };
        }
        
        const host = params.host;
        const port = params.port;
        const username = params.username;
        const password = params.password;
        const senderEmail = params.senderEmail;
        const senderName = params.senderName;
        const replyToEmail = params.replyToEmail;
        const replyToName = params.replyToName;
        const secure = params.secure;
        const enabled = params.enabled;


        const apiPath = '/project/smtp';
        const payload: Payload = {};
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
        if (typeof senderEmail !== 'undefined') {
            payload['senderEmail'] = senderEmail;
        }
        if (typeof senderName !== 'undefined') {
            payload['senderName'] = senderName;
        }
        if (typeof replyToEmail !== 'undefined') {
            payload['replyToEmail'] = replyToEmail;
        }
        if (typeof replyToName !== 'undefined') {
            payload['replyToName'] = replyToName;
        }
        if (typeof secure !== 'undefined') {
            payload['secure'] = secure;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
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
     * Send a test email to verify SMTP configuration. 
     *
     * @param {string[]} params.emails - Array of emails to send test email to. Maximum of 10 emails are allowed.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    createSMTPTest(params: { emails: string[] }): Promise<{}>;
    /**
     * Send a test email to verify SMTP configuration. 
     *
     * @param {string[]} emails - Array of emails to send test email to. Maximum of 10 emails are allowed.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createSMTPTest(emails: string[]): Promise<{}>;
    createSMTPTest(
        paramsOrFirst: { emails: string[] } | string[]    
    ): Promise<{}> {
        let params: { emails: string[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { emails: string[] };
        } else {
            params = {
                emails: paramsOrFirst as string[]            
            };
        }
        
        const emails = params.emails;

        if (typeof emails === 'undefined') {
            throw new AppwriteException('Missing required parameter: "emails"');
        }

        const apiPath = '/project/smtp/tests';
        const payload: Payload = {};
        if (typeof emails !== 'undefined') {
            payload['emails'] = emails;
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
     * Update a custom email template for the specified locale and type. Use this endpoint to modify the content of your email templates.
     *
     * @param {EmailTemplateType} params.templateId - Custom email template type. Can be one of: verification, magicSession, recovery, invitation, mfaChallenge, sessionAlert, otpSession
     * @param {EmailTemplateLocale} params.locale - Custom email template locale. If left empty, the fallback locale (en) will be used.
     * @param {string} params.subject - Subject of the email template. Can be up to 255 characters.
     * @param {string} params.message - Plain or HTML body of the email template message. Can be up to 10MB of content.
     * @param {string} params.senderName - Name of the email sender.
     * @param {string} params.senderEmail - Email of the sender.
     * @param {string} params.replyToEmail - Reply to email.
     * @param {string} params.replyToName - Reply to name.
     * @throws {AppwriteException}
     * @returns {Promise<Models.EmailTemplate>}
     */
    updateEmailTemplate(params: { templateId: EmailTemplateType, locale?: EmailTemplateLocale, subject?: string, message?: string, senderName?: string, senderEmail?: string, replyToEmail?: string, replyToName?: string }): Promise<Models.EmailTemplate>;
    /**
     * Update a custom email template for the specified locale and type. Use this endpoint to modify the content of your email templates.
     *
     * @param {EmailTemplateType} templateId - Custom email template type. Can be one of: verification, magicSession, recovery, invitation, mfaChallenge, sessionAlert, otpSession
     * @param {EmailTemplateLocale} locale - Custom email template locale. If left empty, the fallback locale (en) will be used.
     * @param {string} subject - Subject of the email template. Can be up to 255 characters.
     * @param {string} message - Plain or HTML body of the email template message. Can be up to 10MB of content.
     * @param {string} senderName - Name of the email sender.
     * @param {string} senderEmail - Email of the sender.
     * @param {string} replyToEmail - Reply to email.
     * @param {string} replyToName - Reply to name.
     * @throws {AppwriteException}
     * @returns {Promise<Models.EmailTemplate>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateEmailTemplate(templateId: EmailTemplateType, locale?: EmailTemplateLocale, subject?: string, message?: string, senderName?: string, senderEmail?: string, replyToEmail?: string, replyToName?: string): Promise<Models.EmailTemplate>;
    updateEmailTemplate(
        paramsOrFirst: { templateId: EmailTemplateType, locale?: EmailTemplateLocale, subject?: string, message?: string, senderName?: string, senderEmail?: string, replyToEmail?: string, replyToName?: string } | EmailTemplateType,
        ...rest: [(EmailTemplateLocale)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<Models.EmailTemplate> {
        let params: { templateId: EmailTemplateType, locale?: EmailTemplateLocale, subject?: string, message?: string, senderName?: string, senderEmail?: string, replyToEmail?: string, replyToName?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('templateId' in paramsOrFirst || 'locale' in paramsOrFirst || 'subject' in paramsOrFirst || 'message' in paramsOrFirst || 'senderName' in paramsOrFirst || 'senderEmail' in paramsOrFirst || 'replyToEmail' in paramsOrFirst || 'replyToName' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { templateId: EmailTemplateType, locale?: EmailTemplateLocale, subject?: string, message?: string, senderName?: string, senderEmail?: string, replyToEmail?: string, replyToName?: string };
        } else {
            params = {
                templateId: paramsOrFirst as EmailTemplateType,
                locale: rest[0] as EmailTemplateLocale,
                subject: rest[1] as string,
                message: rest[2] as string,
                senderName: rest[3] as string,
                senderEmail: rest[4] as string,
                replyToEmail: rest[5] as string,
                replyToName: rest[6] as string            
            };
        }
        
        const templateId = params.templateId;
        const locale = params.locale;
        const subject = params.subject;
        const message = params.message;
        const senderName = params.senderName;
        const senderEmail = params.senderEmail;
        const replyToEmail = params.replyToEmail;
        const replyToName = params.replyToName;

        if (typeof templateId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "templateId"');
        }

        const apiPath = '/project/templates/email';
        const payload: Payload = {};
        if (typeof templateId !== 'undefined') {
            payload['templateId'] = templateId;
        }
        if (typeof locale !== 'undefined') {
            payload['locale'] = locale;
        }
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
        if (typeof replyToEmail !== 'undefined') {
            payload['replyToEmail'] = replyToEmail;
        }
        if (typeof replyToName !== 'undefined') {
            payload['replyToName'] = replyToName;
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
     * Get a custom email template for the specified locale and type. This endpoint returns the template content, subject, and other configuration details.
     *
     * @param {EmailTemplateType} params.templateId - Custom email template type. Can be one of: verification, magicSession, recovery, invitation, mfaChallenge, sessionAlert, otpSession
     * @param {EmailTemplateLocale} params.locale - Custom email template locale. If left empty, the fallback locale (en) will be used.
     * @throws {AppwriteException}
     * @returns {Promise<Models.EmailTemplate>}
     */
    getEmailTemplate(params: { templateId: EmailTemplateType, locale?: EmailTemplateLocale }): Promise<Models.EmailTemplate>;
    /**
     * Get a custom email template for the specified locale and type. This endpoint returns the template content, subject, and other configuration details.
     *
     * @param {EmailTemplateType} templateId - Custom email template type. Can be one of: verification, magicSession, recovery, invitation, mfaChallenge, sessionAlert, otpSession
     * @param {EmailTemplateLocale} locale - Custom email template locale. If left empty, the fallback locale (en) will be used.
     * @throws {AppwriteException}
     * @returns {Promise<Models.EmailTemplate>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getEmailTemplate(templateId: EmailTemplateType, locale?: EmailTemplateLocale): Promise<Models.EmailTemplate>;
    getEmailTemplate(
        paramsOrFirst: { templateId: EmailTemplateType, locale?: EmailTemplateLocale } | EmailTemplateType,
        ...rest: [(EmailTemplateLocale)?]    
    ): Promise<Models.EmailTemplate> {
        let params: { templateId: EmailTemplateType, locale?: EmailTemplateLocale };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('templateId' in paramsOrFirst || 'locale' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { templateId: EmailTemplateType, locale?: EmailTemplateLocale };
        } else {
            params = {
                templateId: paramsOrFirst as EmailTemplateType,
                locale: rest[0] as EmailTemplateLocale            
            };
        }
        
        const templateId = params.templateId;
        const locale = params.locale;

        if (typeof templateId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "templateId"');
        }

        const apiPath = '/project/templates/email/{templateId}'.replace('{templateId}', templateId);
        const payload: Payload = {};
        if (typeof locale !== 'undefined') {
            payload['locale'] = locale;
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
     * Get comprehensive usage statistics for your project. View metrics including network requests, bandwidth, storage, function executions, database usage, and user activity. Specify a time range with startDate and endDate, and optionally set the data granularity with period (1h or 1d). The response includes both total counts and detailed breakdowns by resource, along with historical data over the specified period.
     *
     * @param {string} params.startDate - Starting date for the usage
     * @param {string} params.endDate - End date for the usage
     * @param {ProjectUsageRange} params.period - Period used
     * @throws {AppwriteException}
     * @returns {Promise<Models.UsageProject>}
     */
    getUsage(params: { startDate: string, endDate: string, period?: ProjectUsageRange }): Promise<Models.UsageProject>;
    /**
     * Get comprehensive usage statistics for your project. View metrics including network requests, bandwidth, storage, function executions, database usage, and user activity. Specify a time range with startDate and endDate, and optionally set the data granularity with period (1h or 1d). The response includes both total counts and detailed breakdowns by resource, along with historical data over the specified period.
     *
     * @param {string} startDate - Starting date for the usage
     * @param {string} endDate - End date for the usage
     * @param {ProjectUsageRange} period - Period used
     * @throws {AppwriteException}
     * @returns {Promise<Models.UsageProject>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getUsage(startDate: string, endDate: string, period?: ProjectUsageRange): Promise<Models.UsageProject>;
    getUsage(
        paramsOrFirst: { startDate: string, endDate: string, period?: ProjectUsageRange } | string,
        ...rest: [(string)?, (ProjectUsageRange)?]    
    ): Promise<Models.UsageProject> {
        let params: { startDate: string, endDate: string, period?: ProjectUsageRange };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { startDate: string, endDate: string, period?: ProjectUsageRange };
        } else {
            params = {
                startDate: paramsOrFirst as string,
                endDate: rest[0] as string,
                period: rest[1] as ProjectUsageRange            
            };
        }
        
        const startDate = params.startDate;
        const endDate = params.endDate;
        const period = params.period;

        if (typeof startDate === 'undefined') {
            throw new AppwriteException('Missing required parameter: "startDate"');
        }
        if (typeof endDate === 'undefined') {
            throw new AppwriteException('Missing required parameter: "endDate"');
        }

        const apiPath = '/project/usage';
        const payload: Payload = {};
        if (typeof startDate !== 'undefined') {
            payload['startDate'] = startDate;
        }
        if (typeof endDate !== 'undefined') {
            payload['endDate'] = endDate;
        }
        if (typeof period !== 'undefined') {
            payload['period'] = period;
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
     * Get a list of all project environment variables.
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: key, resourceType, resourceId, secret
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.VariableList>}
     */
    listVariables(params?: { queries?: string[], total?: boolean }): Promise<Models.VariableList>;
    /**
     * Get a list of all project environment variables.
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: key, resourceType, resourceId, secret
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.VariableList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listVariables(queries?: string[], total?: boolean): Promise<Models.VariableList>;
    listVariables(
        paramsOrFirst?: { queries?: string[], total?: boolean } | string[],
        ...rest: [(boolean)?]    
    ): Promise<Models.VariableList> {
        let params: { queries?: string[], total?: boolean };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { queries?: string[], total?: boolean };
        } else {
            params = {
                queries: paramsOrFirst as string[],
                total: rest[0] as boolean            
            };
        }
        
        const queries = params.queries;
        const total = params.total;


        const apiPath = '/project/variables';
        const payload: Payload = {};
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }
        if (typeof total !== 'undefined') {
            payload['total'] = total;
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
     * Create a new project environment variable. These variables can be accessed by all functions and sites in the project.
     *
     * @param {string} params.variableId - Variable ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.key - Variable key. Max length: 255 chars.
     * @param {string} params.value - Variable value. Max length: 8192 chars.
     * @param {boolean} params.secret - Secret variables can be updated or deleted, but only projects can read them during build and runtime.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Variable>}
     */
    createVariable(params: { variableId: string, key: string, value: string, secret?: boolean }): Promise<Models.Variable>;
    /**
     * Create a new project environment variable. These variables can be accessed by all functions and sites in the project.
     *
     * @param {string} variableId - Variable ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} key - Variable key. Max length: 255 chars.
     * @param {string} value - Variable value. Max length: 8192 chars.
     * @param {boolean} secret - Secret variables can be updated or deleted, but only projects can read them during build and runtime.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Variable>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createVariable(variableId: string, key: string, value: string, secret?: boolean): Promise<Models.Variable>;
    createVariable(
        paramsOrFirst: { variableId: string, key: string, value: string, secret?: boolean } | string,
        ...rest: [(string)?, (string)?, (boolean)?]    
    ): Promise<Models.Variable> {
        let params: { variableId: string, key: string, value: string, secret?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { variableId: string, key: string, value: string, secret?: boolean };
        } else {
            params = {
                variableId: paramsOrFirst as string,
                key: rest[0] as string,
                value: rest[1] as string,
                secret: rest[2] as boolean            
            };
        }
        
        const variableId = params.variableId;
        const key = params.key;
        const value = params.value;
        const secret = params.secret;

        if (typeof variableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "variableId"');
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        if (typeof value === 'undefined') {
            throw new AppwriteException('Missing required parameter: "value"');
        }

        const apiPath = '/project/variables';
        const payload: Payload = {};
        if (typeof variableId !== 'undefined') {
            payload['variableId'] = variableId;
        }
        if (typeof key !== 'undefined') {
            payload['key'] = key;
        }
        if (typeof value !== 'undefined') {
            payload['value'] = value;
        }
        if (typeof secret !== 'undefined') {
            payload['secret'] = secret;
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
     * Get a variable by its unique ID. 
     *
     * @param {string} params.variableId - Variable ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Variable>}
     */
    getVariable(params: { variableId: string }): Promise<Models.Variable>;
    /**
     * Get a variable by its unique ID. 
     *
     * @param {string} variableId - Variable ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Variable>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getVariable(variableId: string): Promise<Models.Variable>;
    getVariable(
        paramsOrFirst: { variableId: string } | string    
    ): Promise<Models.Variable> {
        let params: { variableId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { variableId: string };
        } else {
            params = {
                variableId: paramsOrFirst as string            
            };
        }
        
        const variableId = params.variableId;

        if (typeof variableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "variableId"');
        }

        const apiPath = '/project/variables/{variableId}'.replace('{variableId}', variableId);
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
     * Update variable by its unique ID.
     *
     * @param {string} params.variableId - Variable ID.
     * @param {string} params.key - Variable key. Max length: 255 chars.
     * @param {string} params.value - Variable value. Max length: 8192 chars.
     * @param {boolean} params.secret - Secret variables can be updated or deleted, but only projects can read them during build and runtime.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Variable>}
     */
    updateVariable(params: { variableId: string, key?: string, value?: string, secret?: boolean }): Promise<Models.Variable>;
    /**
     * Update variable by its unique ID.
     *
     * @param {string} variableId - Variable ID.
     * @param {string} key - Variable key. Max length: 255 chars.
     * @param {string} value - Variable value. Max length: 8192 chars.
     * @param {boolean} secret - Secret variables can be updated or deleted, but only projects can read them during build and runtime.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Variable>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateVariable(variableId: string, key?: string, value?: string, secret?: boolean): Promise<Models.Variable>;
    updateVariable(
        paramsOrFirst: { variableId: string, key?: string, value?: string, secret?: boolean } | string,
        ...rest: [(string)?, (string)?, (boolean)?]    
    ): Promise<Models.Variable> {
        let params: { variableId: string, key?: string, value?: string, secret?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { variableId: string, key?: string, value?: string, secret?: boolean };
        } else {
            params = {
                variableId: paramsOrFirst as string,
                key: rest[0] as string,
                value: rest[1] as string,
                secret: rest[2] as boolean            
            };
        }
        
        const variableId = params.variableId;
        const key = params.key;
        const value = params.value;
        const secret = params.secret;

        if (typeof variableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "variableId"');
        }

        const apiPath = '/project/variables/{variableId}'.replace('{variableId}', variableId);
        const payload: Payload = {};
        if (typeof key !== 'undefined') {
            payload['key'] = key;
        }
        if (typeof value !== 'undefined') {
            payload['value'] = value;
        }
        if (typeof secret !== 'undefined') {
            payload['secret'] = secret;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'put',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Delete a variable by its unique ID. 
     *
     * @param {string} params.variableId - Variable ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteVariable(params: { variableId: string }): Promise<{}>;
    /**
     * Delete a variable by its unique ID. 
     *
     * @param {string} variableId - Variable ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteVariable(variableId: string): Promise<{}>;
    deleteVariable(
        paramsOrFirst: { variableId: string } | string    
    ): Promise<{}> {
        let params: { variableId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { variableId: string };
        } else {
            params = {
                variableId: paramsOrFirst as string            
            };
        }
        
        const variableId = params.variableId;

        if (typeof variableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "variableId"');
        }

        const apiPath = '/project/variables/{variableId}'.replace('{variableId}', variableId);
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
