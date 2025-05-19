import { Service } from '../service';
import { AppwriteException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';
import { Region } from '../enums/region';
import { Api } from '../enums/api';
import { AuthMethod } from '../enums/auth-method';
import { OAuthProvider } from '../enums/o-auth-provider';
import { PlatformType } from '../enums/platform-type';
import { ApiService } from '../enums/api-service';
import { SMTPSecure } from '../enums/s-m-t-p-secure';
import { EmailTemplateType } from '../enums/email-template-type';
import { EmailTemplateLocale } from '../enums/email-template-locale';
import { SmsTemplateType } from '../enums/sms-template-type';
import { SmsTemplateLocale } from '../enums/sms-template-locale';

export class Projects {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Get a list of all projects. You can use the query params to filter your results. 
     *
     * @param {string[]} queries
     * @param {string} search
     * @throws {AppwriteException}
     * @returns {Promise<Models.ProjectList>}
     */
    list(queries?: string[], search?: string): Promise<Models.ProjectList> {
        const apiPath = '/projects';
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
     * Create a new project. You can create a maximum of 100 projects per account. 
     *
     * @param {string} projectId
     * @param {string} name
     * @param {string} teamId
     * @param {Region} region
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
     * @returns {Promise<Models.Project>}
     */
    create(projectId: string, name: string, teamId: string, region?: Region, description?: string, logo?: string, url?: string, legalName?: string, legalCountry?: string, legalState?: string, legalCity?: string, legalAddress?: string, legalTaxId?: string): Promise<Models.Project> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof teamId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "teamId"');
        }
        const apiPath = '/projects';
        const payload: Payload = {};
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
     * Get a project by its unique ID. This endpoint allows you to retrieve the project&#039;s details, including its name, description, team, region, and other metadata. 
     *
     * @param {string} projectId
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     */
    get(projectId: string): Promise<Models.Project> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }
        const apiPath = '/projects/{projectId}'.replace('{projectId}', projectId);
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
     * Update a project by its unique ID.
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
     * @returns {Promise<Models.Project>}
     */
    update(projectId: string, name: string, description?: string, logo?: string, url?: string, legalName?: string, legalCountry?: string, legalState?: string, legalCity?: string, legalAddress?: string, legalTaxId?: string): Promise<Models.Project> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        const apiPath = '/projects/{projectId}'.replace('{projectId}', projectId);
        const payload: Payload = {};
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
     * Delete a project by its unique ID.
     *
     * @param {string} projectId
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    delete(projectId: string): Promise<{}> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }
        const apiPath = '/projects/{projectId}'.replace('{projectId}', projectId);
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
     * Update the status of a specific API type. Use this endpoint to enable or disable API types such as REST, GraphQL and Realtime.
     *
     * @param {string} projectId
     * @param {Api} api
     * @param {boolean} status
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     */
    updateApiStatus(projectId: string, api: Api, status: boolean): Promise<Models.Project> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }
        if (typeof api === 'undefined') {
            throw new AppwriteException('Missing required parameter: "api"');
        }
        if (typeof status === 'undefined') {
            throw new AppwriteException('Missing required parameter: "status"');
        }
        const apiPath = '/projects/{projectId}/api'.replace('{projectId}', projectId);
        const payload: Payload = {};
        if (typeof api !== 'undefined') {
            payload['api'] = api;
        }
        if (typeof status !== 'undefined') {
            payload['status'] = status;
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
     * Update the status of all API types. Use this endpoint to enable or disable API types such as REST, GraphQL and Realtime all at once.
     *
     * @param {string} projectId
     * @param {boolean} status
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     */
    updateApiStatusAll(projectId: string, status: boolean): Promise<Models.Project> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }
        if (typeof status === 'undefined') {
            throw new AppwriteException('Missing required parameter: "status"');
        }
        const apiPath = '/projects/{projectId}/api/all'.replace('{projectId}', projectId);
        const payload: Payload = {};
        if (typeof status !== 'undefined') {
            payload['status'] = status;
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
     * Update how long sessions created within a project should stay active for.
     *
     * @param {string} projectId
     * @param {number} duration
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     */
    updateAuthDuration(projectId: string, duration: number): Promise<Models.Project> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }
        if (typeof duration === 'undefined') {
            throw new AppwriteException('Missing required parameter: "duration"');
        }
        const apiPath = '/projects/{projectId}/auth/duration'.replace('{projectId}', projectId);
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
     * Update the maximum number of users allowed in this project. Set to 0 for unlimited users. 
     *
     * @param {string} projectId
     * @param {number} limit
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     */
    updateAuthLimit(projectId: string, limit: number): Promise<Models.Project> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }
        if (typeof limit === 'undefined') {
            throw new AppwriteException('Missing required parameter: "limit"');
        }
        const apiPath = '/projects/{projectId}/auth/limit'.replace('{projectId}', projectId);
        const payload: Payload = {};
        if (typeof limit !== 'undefined') {
            payload['limit'] = limit;
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
     * Update the maximum number of sessions allowed per user within the project, if the limit is hit the oldest session will be deleted to make room for new sessions.
     *
     * @param {string} projectId
     * @param {number} limit
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     */
    updateAuthSessionsLimit(projectId: string, limit: number): Promise<Models.Project> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }
        if (typeof limit === 'undefined') {
            throw new AppwriteException('Missing required parameter: "limit"');
        }
        const apiPath = '/projects/{projectId}/auth/max-sessions'.replace('{projectId}', projectId);
        const payload: Payload = {};
        if (typeof limit !== 'undefined') {
            payload['limit'] = limit;
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
     * Update project membership privacy settings. Use this endpoint to control what user information is visible to other team members, such as user name, email, and MFA status. 
     *
     * @param {string} projectId
     * @param {boolean} userName
     * @param {boolean} userEmail
     * @param {boolean} mfa
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     */
    updateMembershipsPrivacy(projectId: string, userName: boolean, userEmail: boolean, mfa: boolean): Promise<Models.Project> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }
        if (typeof userName === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userName"');
        }
        if (typeof userEmail === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userEmail"');
        }
        if (typeof mfa === 'undefined') {
            throw new AppwriteException('Missing required parameter: "mfa"');
        }
        const apiPath = '/projects/{projectId}/auth/memberships-privacy'.replace('{projectId}', projectId);
        const payload: Payload = {};
        if (typeof userName !== 'undefined') {
            payload['userName'] = userName;
        }
        if (typeof userEmail !== 'undefined') {
            payload['userEmail'] = userEmail;
        }
        if (typeof mfa !== 'undefined') {
            payload['mfa'] = mfa;
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
     * Update the list of mock phone numbers for testing. Use these numbers to bypass SMS verification in development. 
     *
     * @param {string} projectId
     * @param {object[]} numbers
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     */
    updateMockNumbers(projectId: string, numbers: object[]): Promise<Models.Project> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }
        if (typeof numbers === 'undefined') {
            throw new AppwriteException('Missing required parameter: "numbers"');
        }
        const apiPath = '/projects/{projectId}/auth/mock-numbers'.replace('{projectId}', projectId);
        const payload: Payload = {};
        if (typeof numbers !== 'undefined') {
            payload['numbers'] = numbers;
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
     * Enable or disable checking user passwords against common passwords dictionary. This helps ensure users don&#039;t use common and insecure passwords. 
     *
     * @param {string} projectId
     * @param {boolean} enabled
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     */
    updateAuthPasswordDictionary(projectId: string, enabled: boolean): Promise<Models.Project> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }
        if (typeof enabled === 'undefined') {
            throw new AppwriteException('Missing required parameter: "enabled"');
        }
        const apiPath = '/projects/{projectId}/auth/password-dictionary'.replace('{projectId}', projectId);
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
     * Update the authentication password history requirement. Use this endpoint to require new passwords to be different than the last X amount of previously used ones.
     *
     * @param {string} projectId
     * @param {number} limit
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     */
    updateAuthPasswordHistory(projectId: string, limit: number): Promise<Models.Project> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }
        if (typeof limit === 'undefined') {
            throw new AppwriteException('Missing required parameter: "limit"');
        }
        const apiPath = '/projects/{projectId}/auth/password-history'.replace('{projectId}', projectId);
        const payload: Payload = {};
        if (typeof limit !== 'undefined') {
            payload['limit'] = limit;
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
     * Enable or disable checking user passwords against their personal data. This helps prevent users from using personal information in their passwords. 
     *
     * @param {string} projectId
     * @param {boolean} enabled
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     */
    updatePersonalDataCheck(projectId: string, enabled: boolean): Promise<Models.Project> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }
        if (typeof enabled === 'undefined') {
            throw new AppwriteException('Missing required parameter: "enabled"');
        }
        const apiPath = '/projects/{projectId}/auth/personal-data'.replace('{projectId}', projectId);
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
     * Enable or disable session email alerts. When enabled, users will receive email notifications when new sessions are created.
     *
     * @param {string} projectId
     * @param {boolean} alerts
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     */
    updateSessionAlerts(projectId: string, alerts: boolean): Promise<Models.Project> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }
        if (typeof alerts === 'undefined') {
            throw new AppwriteException('Missing required parameter: "alerts"');
        }
        const apiPath = '/projects/{projectId}/auth/session-alerts'.replace('{projectId}', projectId);
        const payload: Payload = {};
        if (typeof alerts !== 'undefined') {
            payload['alerts'] = alerts;
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
     * Update the status of a specific authentication method. Use this endpoint to enable or disable different authentication methods such as email, magic urls or sms in your project. 
     *
     * @param {string} projectId
     * @param {AuthMethod} method
     * @param {boolean} status
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     */
    updateAuthStatus(projectId: string, method: AuthMethod, status: boolean): Promise<Models.Project> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }
        if (typeof method === 'undefined') {
            throw new AppwriteException('Missing required parameter: "method"');
        }
        if (typeof status === 'undefined') {
            throw new AppwriteException('Missing required parameter: "status"');
        }
        const apiPath = '/projects/{projectId}/auth/{method}'.replace('{projectId}', projectId).replace('{method}', method);
        const payload: Payload = {};
        if (typeof status !== 'undefined') {
            payload['status'] = status;
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
     * List all the project\&#039;s dev keys. Dev keys are project specific and allow you to bypass rate limits and get better error logging during development.&#039;
     *
     * @param {string} projectId
     * @param {string[]} queries
     * @throws {AppwriteException}
     * @returns {Promise<Models.DevKeyList>}
     */
    listDevKeys(projectId: string, queries?: string[]): Promise<Models.DevKeyList> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }
        const apiPath = '/projects/{projectId}/dev-keys'.replace('{projectId}', projectId);
        const payload: Payload = {};
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
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
     * Create a new project dev key. Dev keys are project specific and allow you to bypass rate limits and get better error logging during development. Strictly meant for development purposes only.
     *
     * @param {string} projectId
     * @param {string} name
     * @param {string} expire
     * @throws {AppwriteException}
     * @returns {Promise<Models.DevKey>}
     */
    createDevKey(projectId: string, name: string, expire: string): Promise<Models.DevKey> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof expire === 'undefined') {
            throw new AppwriteException('Missing required parameter: "expire"');
        }
        const apiPath = '/projects/{projectId}/dev-keys'.replace('{projectId}', projectId);
        const payload: Payload = {};
        if (typeof name !== 'undefined') {
            payload['name'] = name;
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
     * Get a project\&#039;s dev key by its unique ID. Dev keys are project specific and allow you to bypass rate limits and get better error logging during development.
     *
     * @param {string} projectId
     * @param {string} keyId
     * @throws {AppwriteException}
     * @returns {Promise<Models.DevKey>}
     */
    getDevKey(projectId: string, keyId: string): Promise<Models.DevKey> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }
        if (typeof keyId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "keyId"');
        }
        const apiPath = '/projects/{projectId}/dev-keys/{keyId}'.replace('{projectId}', projectId).replace('{keyId}', keyId);
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
     * Update a project\&#039;s dev key by its unique ID. Use this endpoint to update a project\&#039;s dev key name or expiration time.&#039;
     *
     * @param {string} projectId
     * @param {string} keyId
     * @param {string} name
     * @param {string} expire
     * @throws {AppwriteException}
     * @returns {Promise<Models.DevKey>}
     */
    updateDevKey(projectId: string, keyId: string, name: string, expire: string): Promise<Models.DevKey> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }
        if (typeof keyId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "keyId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof expire === 'undefined') {
            throw new AppwriteException('Missing required parameter: "expire"');
        }
        const apiPath = '/projects/{projectId}/dev-keys/{keyId}'.replace('{projectId}', projectId).replace('{keyId}', keyId);
        const payload: Payload = {};
        if (typeof name !== 'undefined') {
            payload['name'] = name;
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
     * Delete a project\&#039;s dev key by its unique ID. Once deleted, the key will no longer allow bypassing of rate limits and better logging of errors.
     *
     * @param {string} projectId
     * @param {string} keyId
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteDevKey(projectId: string, keyId: string): Promise<{}> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }
        if (typeof keyId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "keyId"');
        }
        const apiPath = '/projects/{projectId}/dev-keys/{keyId}'.replace('{projectId}', projectId).replace('{keyId}', keyId);
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
     * Create a new JWT token. This token can be used to authenticate users with custom scopes and expiration time. 
     *
     * @param {string} projectId
     * @param {string[]} scopes
     * @param {number} duration
     * @throws {AppwriteException}
     * @returns {Promise<Models.Jwt>}
     */
    createJWT(projectId: string, scopes: string[], duration?: number): Promise<Models.Jwt> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }
        if (typeof scopes === 'undefined') {
            throw new AppwriteException('Missing required parameter: "scopes"');
        }
        const apiPath = '/projects/{projectId}/jwts'.replace('{projectId}', projectId);
        const payload: Payload = {};
        if (typeof scopes !== 'undefined') {
            payload['scopes'] = scopes;
        }
        if (typeof duration !== 'undefined') {
            payload['duration'] = duration;
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
     * Get a list of all API keys from the current project. 
     *
     * @param {string} projectId
     * @throws {AppwriteException}
     * @returns {Promise<Models.KeyList>}
     */
    listKeys(projectId: string): Promise<Models.KeyList> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }
        const apiPath = '/projects/{projectId}/keys'.replace('{projectId}', projectId);
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
     * Create a new API key. It&#039;s recommended to have multiple API keys with strict scopes for separate functions within your project.
     *
     * @param {string} projectId
     * @param {string} name
     * @param {string[]} scopes
     * @param {string} expire
     * @throws {AppwriteException}
     * @returns {Promise<Models.Key>}
     */
    createKey(projectId: string, name: string, scopes: string[], expire?: string): Promise<Models.Key> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof scopes === 'undefined') {
            throw new AppwriteException('Missing required parameter: "scopes"');
        }
        const apiPath = '/projects/{projectId}/keys'.replace('{projectId}', projectId);
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
            'post',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * Get a key by its unique ID. This endpoint returns details about a specific API key in your project including it&#039;s scopes.
     *
     * @param {string} projectId
     * @param {string} keyId
     * @throws {AppwriteException}
     * @returns {Promise<Models.Key>}
     */
    getKey(projectId: string, keyId: string): Promise<Models.Key> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }
        if (typeof keyId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "keyId"');
        }
        const apiPath = '/projects/{projectId}/keys/{keyId}'.replace('{projectId}', projectId).replace('{keyId}', keyId);
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
     * @param {string} projectId
     * @param {string} keyId
     * @param {string} name
     * @param {string[]} scopes
     * @param {string} expire
     * @throws {AppwriteException}
     * @returns {Promise<Models.Key>}
     */
    updateKey(projectId: string, keyId: string, name: string, scopes: string[], expire?: string): Promise<Models.Key> {
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
        const apiPath = '/projects/{projectId}/keys/{keyId}'.replace('{projectId}', projectId).replace('{keyId}', keyId);
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
     * @param {string} projectId
     * @param {string} keyId
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteKey(projectId: string, keyId: string): Promise<{}> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }
        if (typeof keyId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "keyId"');
        }
        const apiPath = '/projects/{projectId}/keys/{keyId}'.replace('{projectId}', projectId).replace('{keyId}', keyId);
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
     * Update the OAuth2 provider configurations. Use this endpoint to set up or update the OAuth2 provider credentials or enable/disable providers. 
     *
     * @param {string} projectId
     * @param {OAuthProvider} provider
     * @param {string} appId
     * @param {string} secret
     * @param {boolean} enabled
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     */
    updateOAuth2(projectId: string, provider: OAuthProvider, appId?: string, secret?: string, enabled?: boolean): Promise<Models.Project> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }
        if (typeof provider === 'undefined') {
            throw new AppwriteException('Missing required parameter: "provider"');
        }
        const apiPath = '/projects/{projectId}/oauth2'.replace('{projectId}', projectId);
        const payload: Payload = {};
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
     * Get a list of all platforms in the project. This endpoint returns an array of all platforms and their configurations. 
     *
     * @param {string} projectId
     * @throws {AppwriteException}
     * @returns {Promise<Models.PlatformList>}
     */
    listPlatforms(projectId: string): Promise<Models.PlatformList> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }
        const apiPath = '/projects/{projectId}/platforms'.replace('{projectId}', projectId);
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
     * Create a new platform for your project. Use this endpoint to register a new platform where your users will run your application which will interact with the Appwrite API.
     *
     * @param {string} projectId
     * @param {PlatformType} type
     * @param {string} name
     * @param {string} key
     * @param {string} store
     * @param {string} hostname
     * @throws {AppwriteException}
     * @returns {Promise<Models.Platform>}
     */
    createPlatform(projectId: string, type: PlatformType, name: string, key?: string, store?: string, hostname?: string): Promise<Models.Platform> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }
        if (typeof type === 'undefined') {
            throw new AppwriteException('Missing required parameter: "type"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        const apiPath = '/projects/{projectId}/platforms'.replace('{projectId}', projectId);
        const payload: Payload = {};
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
     * Get a platform by its unique ID. This endpoint returns the platform&#039;s details, including its name, type, and key configurations. 
     *
     * @param {string} projectId
     * @param {string} platformId
     * @throws {AppwriteException}
     * @returns {Promise<Models.Platform>}
     */
    getPlatform(projectId: string, platformId: string): Promise<Models.Platform> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }
        if (typeof platformId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "platformId"');
        }
        const apiPath = '/projects/{projectId}/platforms/{platformId}'.replace('{projectId}', projectId).replace('{platformId}', platformId);
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
     * Update a platform by its unique ID. Use this endpoint to update the platform&#039;s name, key, platform store ID, or hostname. 
     *
     * @param {string} projectId
     * @param {string} platformId
     * @param {string} name
     * @param {string} key
     * @param {string} store
     * @param {string} hostname
     * @throws {AppwriteException}
     * @returns {Promise<Models.Platform>}
     */
    updatePlatform(projectId: string, platformId: string, name: string, key?: string, store?: string, hostname?: string): Promise<Models.Platform> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }
        if (typeof platformId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "platformId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        const apiPath = '/projects/{projectId}/platforms/{platformId}'.replace('{projectId}', projectId).replace('{platformId}', platformId);
        const payload: Payload = {};
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
     * Delete a platform by its unique ID. This endpoint removes the platform and all its configurations from the project. 
     *
     * @param {string} projectId
     * @param {string} platformId
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deletePlatform(projectId: string, platformId: string): Promise<{}> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }
        if (typeof platformId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "platformId"');
        }
        const apiPath = '/projects/{projectId}/platforms/{platformId}'.replace('{projectId}', projectId).replace('{platformId}', platformId);
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
     * Update the status of a specific service. Use this endpoint to enable or disable a service in your project. 
     *
     * @param {string} projectId
     * @param {ApiService} service
     * @param {boolean} status
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     */
    updateServiceStatus(projectId: string, service: ApiService, status: boolean): Promise<Models.Project> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }
        if (typeof service === 'undefined') {
            throw new AppwriteException('Missing required parameter: "service"');
        }
        if (typeof status === 'undefined') {
            throw new AppwriteException('Missing required parameter: "status"');
        }
        const apiPath = '/projects/{projectId}/service'.replace('{projectId}', projectId);
        const payload: Payload = {};
        if (typeof service !== 'undefined') {
            payload['service'] = service;
        }
        if (typeof status !== 'undefined') {
            payload['status'] = status;
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
     * Update the status of all services. Use this endpoint to enable or disable all optional services at once. 
     *
     * @param {string} projectId
     * @param {boolean} status
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     */
    updateServiceStatusAll(projectId: string, status: boolean): Promise<Models.Project> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }
        if (typeof status === 'undefined') {
            throw new AppwriteException('Missing required parameter: "status"');
        }
        const apiPath = '/projects/{projectId}/service/all'.replace('{projectId}', projectId);
        const payload: Payload = {};
        if (typeof status !== 'undefined') {
            payload['status'] = status;
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
     * Update the SMTP configuration for your project. Use this endpoint to configure your project&#039;s SMTP provider with your custom settings for sending transactional emails. 
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
     * @param {SMTPSecure} secure
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     */
    updateSmtp(projectId: string, enabled: boolean, senderName?: string, senderEmail?: string, replyTo?: string, host?: string, port?: number, username?: string, password?: string, secure?: SMTPSecure): Promise<Models.Project> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }
        if (typeof enabled === 'undefined') {
            throw new AppwriteException('Missing required parameter: "enabled"');
        }
        const apiPath = '/projects/{projectId}/smtp'.replace('{projectId}', projectId);
        const payload: Payload = {};
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
     * @param {string} projectId
     * @param {string[]} emails
     * @param {string} senderName
     * @param {string} senderEmail
     * @param {string} host
     * @param {string} replyTo
     * @param {number} port
     * @param {string} username
     * @param {string} password
     * @param {SMTPSecure} secure
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    createSmtpTest(projectId: string, emails: string[], senderName: string, senderEmail: string, host: string, replyTo?: string, port?: number, username?: string, password?: string, secure?: SMTPSecure): Promise<{}> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }
        if (typeof emails === 'undefined') {
            throw new AppwriteException('Missing required parameter: "emails"');
        }
        if (typeof senderName === 'undefined') {
            throw new AppwriteException('Missing required parameter: "senderName"');
        }
        if (typeof senderEmail === 'undefined') {
            throw new AppwriteException('Missing required parameter: "senderEmail"');
        }
        if (typeof host === 'undefined') {
            throw new AppwriteException('Missing required parameter: "host"');
        }
        const apiPath = '/projects/{projectId}/smtp/tests'.replace('{projectId}', projectId);
        const payload: Payload = {};
        if (typeof emails !== 'undefined') {
            payload['emails'] = emails;
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
     * Update the team ID of a project allowing for it to be transferred to another team.
     *
     * @param {string} projectId
     * @param {string} teamId
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     */
    updateTeam(projectId: string, teamId: string): Promise<Models.Project> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }
        if (typeof teamId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "teamId"');
        }
        const apiPath = '/projects/{projectId}/team'.replace('{projectId}', projectId);
        const payload: Payload = {};
        if (typeof teamId !== 'undefined') {
            payload['teamId'] = teamId;
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
     * @param {string} projectId
     * @param {EmailTemplateType} type
     * @param {EmailTemplateLocale} locale
     * @throws {AppwriteException}
     * @returns {Promise<Models.EmailTemplate>}
     */
    getEmailTemplate(projectId: string, type: EmailTemplateType, locale: EmailTemplateLocale): Promise<Models.EmailTemplate> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }
        if (typeof type === 'undefined') {
            throw new AppwriteException('Missing required parameter: "type"');
        }
        if (typeof locale === 'undefined') {
            throw new AppwriteException('Missing required parameter: "locale"');
        }
        const apiPath = '/projects/{projectId}/templates/email/{type}/{locale}'.replace('{projectId}', projectId).replace('{type}', type).replace('{locale}', locale);
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
     * Update a custom email template for the specified locale and type. Use this endpoint to modify the content of your email templates.
     *
     * @param {string} projectId
     * @param {EmailTemplateType} type
     * @param {EmailTemplateLocale} locale
     * @param {string} subject
     * @param {string} message
     * @param {string} senderName
     * @param {string} senderEmail
     * @param {string} replyTo
     * @throws {AppwriteException}
     * @returns {Promise<Models.EmailTemplate>}
     */
    updateEmailTemplate(projectId: string, type: EmailTemplateType, locale: EmailTemplateLocale, subject: string, message: string, senderName?: string, senderEmail?: string, replyTo?: string): Promise<Models.EmailTemplate> {
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
        const apiPath = '/projects/{projectId}/templates/email/{type}/{locale}'.replace('{projectId}', projectId).replace('{type}', type).replace('{locale}', locale);
        const payload: Payload = {};
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
     * Reset a custom email template to its default value. This endpoint removes any custom content and restores the template to its original state. 
     *
     * @param {string} projectId
     * @param {EmailTemplateType} type
     * @param {EmailTemplateLocale} locale
     * @throws {AppwriteException}
     * @returns {Promise<Models.EmailTemplate>}
     */
    deleteEmailTemplate(projectId: string, type: EmailTemplateType, locale: EmailTemplateLocale): Promise<Models.EmailTemplate> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }
        if (typeof type === 'undefined') {
            throw new AppwriteException('Missing required parameter: "type"');
        }
        if (typeof locale === 'undefined') {
            throw new AppwriteException('Missing required parameter: "locale"');
        }
        const apiPath = '/projects/{projectId}/templates/email/{type}/{locale}'.replace('{projectId}', projectId).replace('{type}', type).replace('{locale}', locale);
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
     * Get a custom SMS template for the specified locale and type returning it&#039;s contents.
     *
     * @param {string} projectId
     * @param {SmsTemplateType} type
     * @param {SmsTemplateLocale} locale
     * @throws {AppwriteException}
     * @returns {Promise<Models.SmsTemplate>}
     */
    getSmsTemplate(projectId: string, type: SmsTemplateType, locale: SmsTemplateLocale): Promise<Models.SmsTemplate> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }
        if (typeof type === 'undefined') {
            throw new AppwriteException('Missing required parameter: "type"');
        }
        if (typeof locale === 'undefined') {
            throw new AppwriteException('Missing required parameter: "locale"');
        }
        const apiPath = '/projects/{projectId}/templates/sms/{type}/{locale}'.replace('{projectId}', projectId).replace('{type}', type).replace('{locale}', locale);
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
     * Update a custom SMS template for the specified locale and type. Use this endpoint to modify the content of your SMS templates. 
     *
     * @param {string} projectId
     * @param {SmsTemplateType} type
     * @param {SmsTemplateLocale} locale
     * @param {string} message
     * @throws {AppwriteException}
     * @returns {Promise<Models.SmsTemplate>}
     */
    updateSmsTemplate(projectId: string, type: SmsTemplateType, locale: SmsTemplateLocale, message: string): Promise<Models.SmsTemplate> {
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
        const apiPath = '/projects/{projectId}/templates/sms/{type}/{locale}'.replace('{projectId}', projectId).replace('{type}', type).replace('{locale}', locale);
        const payload: Payload = {};
        if (typeof message !== 'undefined') {
            payload['message'] = message;
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
     * Reset a custom SMS template to its default value. This endpoint removes any custom message and restores the template to its original state. 
     *
     * @param {string} projectId
     * @param {SmsTemplateType} type
     * @param {SmsTemplateLocale} locale
     * @throws {AppwriteException}
     * @returns {Promise<Models.SmsTemplate>}
     */
    deleteSmsTemplate(projectId: string, type: SmsTemplateType, locale: SmsTemplateLocale): Promise<Models.SmsTemplate> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }
        if (typeof type === 'undefined') {
            throw new AppwriteException('Missing required parameter: "type"');
        }
        if (typeof locale === 'undefined') {
            throw new AppwriteException('Missing required parameter: "locale"');
        }
        const apiPath = '/projects/{projectId}/templates/sms/{type}/{locale}'.replace('{projectId}', projectId).replace('{type}', type).replace('{locale}', locale);
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
     * Get a list of all webhooks belonging to the project. You can use the query params to filter your results. 
     *
     * @param {string} projectId
     * @throws {AppwriteException}
     * @returns {Promise<Models.WebhookList>}
     */
    listWebhooks(projectId: string): Promise<Models.WebhookList> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }
        const apiPath = '/projects/{projectId}/webhooks'.replace('{projectId}', projectId);
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
     * Create a new webhook. Use this endpoint to configure a URL that will receive events from Appwrite when specific events occur. 
     *
     * @param {string} projectId
     * @param {string} name
     * @param {string[]} events
     * @param {string} url
     * @param {boolean} security
     * @param {boolean} enabled
     * @param {string} httpUser
     * @param {string} httpPass
     * @throws {AppwriteException}
     * @returns {Promise<Models.Webhook>}
     */
    createWebhook(projectId: string, name: string, events: string[], url: string, security: boolean, enabled?: boolean, httpUser?: string, httpPass?: string): Promise<Models.Webhook> {
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
        const apiPath = '/projects/{projectId}/webhooks'.replace('{projectId}', projectId);
        const payload: Payload = {};
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
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
     * Get a webhook by its unique ID. This endpoint returns details about a specific webhook configured for a project. 
     *
     * @param {string} projectId
     * @param {string} webhookId
     * @throws {AppwriteException}
     * @returns {Promise<Models.Webhook>}
     */
    getWebhook(projectId: string, webhookId: string): Promise<Models.Webhook> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }
        if (typeof webhookId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "webhookId"');
        }
        const apiPath = '/projects/{projectId}/webhooks/{webhookId}'.replace('{projectId}', projectId).replace('{webhookId}', webhookId);
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
     * Update a webhook by its unique ID. Use this endpoint to update the URL, events, or status of an existing webhook. 
     *
     * @param {string} projectId
     * @param {string} webhookId
     * @param {string} name
     * @param {string[]} events
     * @param {string} url
     * @param {boolean} security
     * @param {boolean} enabled
     * @param {string} httpUser
     * @param {string} httpPass
     * @throws {AppwriteException}
     * @returns {Promise<Models.Webhook>}
     */
    updateWebhook(projectId: string, webhookId: string, name: string, events: string[], url: string, security: boolean, enabled?: boolean, httpUser?: string, httpPass?: string): Promise<Models.Webhook> {
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
        const apiPath = '/projects/{projectId}/webhooks/{webhookId}'.replace('{projectId}', projectId).replace('{webhookId}', webhookId);
        const payload: Payload = {};
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
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
     * Delete a webhook by its unique ID. Once deleted, the webhook will no longer receive project events. 
     *
     * @param {string} projectId
     * @param {string} webhookId
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteWebhook(projectId: string, webhookId: string): Promise<{}> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }
        if (typeof webhookId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "webhookId"');
        }
        const apiPath = '/projects/{projectId}/webhooks/{webhookId}'.replace('{projectId}', projectId).replace('{webhookId}', webhookId);
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
     * Update the webhook signature key. This endpoint can be used to regenerate the signature key used to sign and validate payload deliveries for a specific webhook. 
     *
     * @param {string} projectId
     * @param {string} webhookId
     * @throws {AppwriteException}
     * @returns {Promise<Models.Webhook>}
     */
    updateWebhookSignature(projectId: string, webhookId: string): Promise<Models.Webhook> {
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }
        if (typeof webhookId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "webhookId"');
        }
        const apiPath = '/projects/{projectId}/webhooks/{webhookId}/signature'.replace('{projectId}', projectId).replace('{webhookId}', webhookId);
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
