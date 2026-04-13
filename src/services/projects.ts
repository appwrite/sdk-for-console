import { Service } from '../service';
import { AppwriteException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { Region } from '../enums/region';
import { AuthMethod } from '../enums/auth-method';
import { Scopes } from '../enums/scopes';
import { OAuthProvider } from '../enums/o-auth-provider';
import { ResourceType } from '../enums/resource-type';
import { SMTPSecure } from '../enums/smtp-secure';
import { Status } from '../enums/status';
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
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, teamId, labels, search
     * @param {string} params.search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ProjectList>}
     */
    list(params?: { queries?: string[], search?: string, total?: boolean }): Promise<Models.ProjectList>;
    /**
     * Get a list of all projects. You can use the query params to filter your results. 
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, teamId, labels, search
     * @param {string} search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ProjectList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    list(queries?: string[], search?: string, total?: boolean): Promise<Models.ProjectList>;
    list(
        paramsOrFirst?: { queries?: string[], search?: string, total?: boolean } | string[],
        ...rest: [(string)?, (boolean)?]    
    ): Promise<Models.ProjectList> {
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


        const apiPath = '/projects';
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
     * @param {string} params.projectId - Unique Id. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, and hyphen. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Project name. Max length: 128 chars.
     * @param {string} params.teamId - Team unique ID.
     * @param {Region} params.region - Project Region.
     * @param {string} params.description - Project description. Max length: 256 chars.
     * @param {string} params.logo - Project logo.
     * @param {string} params.url - Project URL.
     * @param {string} params.legalName - Project legal Name. Max length: 256 chars.
     * @param {string} params.legalCountry - Project legal Country. Max length: 256 chars.
     * @param {string} params.legalState - Project legal State. Max length: 256 chars.
     * @param {string} params.legalCity - Project legal City. Max length: 256 chars.
     * @param {string} params.legalAddress - Project legal Address. Max length: 256 chars.
     * @param {string} params.legalTaxId - Project legal Tax ID. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     */
    create(params: { projectId: string, name: string, teamId: string, region?: Region, description?: string, logo?: string, url?: string, legalName?: string, legalCountry?: string, legalState?: string, legalCity?: string, legalAddress?: string, legalTaxId?: string }): Promise<Models.Project>;
    /**
     * Create a new project. You can create a maximum of 100 projects per account. 
     *
     * @param {string} projectId - Unique Id. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, and hyphen. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Project name. Max length: 128 chars.
     * @param {string} teamId - Team unique ID.
     * @param {Region} region - Project Region.
     * @param {string} description - Project description. Max length: 256 chars.
     * @param {string} logo - Project logo.
     * @param {string} url - Project URL.
     * @param {string} legalName - Project legal Name. Max length: 256 chars.
     * @param {string} legalCountry - Project legal Country. Max length: 256 chars.
     * @param {string} legalState - Project legal State. Max length: 256 chars.
     * @param {string} legalCity - Project legal City. Max length: 256 chars.
     * @param {string} legalAddress - Project legal Address. Max length: 256 chars.
     * @param {string} legalTaxId - Project legal Tax ID. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    create(projectId: string, name: string, teamId: string, region?: Region, description?: string, logo?: string, url?: string, legalName?: string, legalCountry?: string, legalState?: string, legalCity?: string, legalAddress?: string, legalTaxId?: string): Promise<Models.Project>;
    create(
        paramsOrFirst: { projectId: string, name: string, teamId: string, region?: Region, description?: string, logo?: string, url?: string, legalName?: string, legalCountry?: string, legalState?: string, legalCity?: string, legalAddress?: string, legalTaxId?: string } | string,
        ...rest: [(string)?, (string)?, (Region)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<Models.Project> {
        let params: { projectId: string, name: string, teamId: string, region?: Region, description?: string, logo?: string, url?: string, legalName?: string, legalCountry?: string, legalState?: string, legalCity?: string, legalAddress?: string, legalTaxId?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { projectId: string, name: string, teamId: string, region?: Region, description?: string, logo?: string, url?: string, legalName?: string, legalCountry?: string, legalState?: string, legalCity?: string, legalAddress?: string, legalTaxId?: string };
        } else {
            params = {
                projectId: paramsOrFirst as string,
                name: rest[0] as string,
                teamId: rest[1] as string,
                region: rest[2] as Region,
                description: rest[3] as string,
                logo: rest[4] as string,
                url: rest[5] as string,
                legalName: rest[6] as string,
                legalCountry: rest[7] as string,
                legalState: rest[8] as string,
                legalCity: rest[9] as string,
                legalAddress: rest[10] as string,
                legalTaxId: rest[11] as string            
            };
        }
        
        const projectId = params.projectId;
        const name = params.name;
        const teamId = params.teamId;
        const region = params.region;
        const description = params.description;
        const logo = params.logo;
        const url = params.url;
        const legalName = params.legalName;
        const legalCountry = params.legalCountry;
        const legalState = params.legalState;
        const legalCity = params.legalCity;
        const legalAddress = params.legalAddress;
        const legalTaxId = params.legalTaxId;

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
     * Get a project by its unique ID. This endpoint allows you to retrieve the project's details, including its name, description, team, region, and other metadata. 
     *
     * @param {string} params.projectId - Project unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     */
    get(params: { projectId: string }): Promise<Models.Project>;
    /**
     * Get a project by its unique ID. This endpoint allows you to retrieve the project's details, including its name, description, team, region, and other metadata. 
     *
     * @param {string} projectId - Project unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    get(projectId: string): Promise<Models.Project>;
    get(
        paramsOrFirst: { projectId: string } | string    
    ): Promise<Models.Project> {
        let params: { projectId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { projectId: string };
        } else {
            params = {
                projectId: paramsOrFirst as string            
            };
        }
        
        const projectId = params.projectId;

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
     * @param {string} params.projectId - Project unique ID.
     * @param {string} params.name - Project name. Max length: 128 chars.
     * @param {string} params.description - Project description. Max length: 256 chars.
     * @param {string} params.logo - Project logo.
     * @param {string} params.url - Project URL.
     * @param {string} params.legalName - Project legal name. Max length: 256 chars.
     * @param {string} params.legalCountry - Project legal country. Max length: 256 chars.
     * @param {string} params.legalState - Project legal state. Max length: 256 chars.
     * @param {string} params.legalCity - Project legal city. Max length: 256 chars.
     * @param {string} params.legalAddress - Project legal address. Max length: 256 chars.
     * @param {string} params.legalTaxId - Project legal tax ID. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     */
    update(params: { projectId: string, name: string, description?: string, logo?: string, url?: string, legalName?: string, legalCountry?: string, legalState?: string, legalCity?: string, legalAddress?: string, legalTaxId?: string }): Promise<Models.Project>;
    /**
     * Update a project by its unique ID.
     *
     * @param {string} projectId - Project unique ID.
     * @param {string} name - Project name. Max length: 128 chars.
     * @param {string} description - Project description. Max length: 256 chars.
     * @param {string} logo - Project logo.
     * @param {string} url - Project URL.
     * @param {string} legalName - Project legal name. Max length: 256 chars.
     * @param {string} legalCountry - Project legal country. Max length: 256 chars.
     * @param {string} legalState - Project legal state. Max length: 256 chars.
     * @param {string} legalCity - Project legal city. Max length: 256 chars.
     * @param {string} legalAddress - Project legal address. Max length: 256 chars.
     * @param {string} legalTaxId - Project legal tax ID. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    update(projectId: string, name: string, description?: string, logo?: string, url?: string, legalName?: string, legalCountry?: string, legalState?: string, legalCity?: string, legalAddress?: string, legalTaxId?: string): Promise<Models.Project>;
    update(
        paramsOrFirst: { projectId: string, name: string, description?: string, logo?: string, url?: string, legalName?: string, legalCountry?: string, legalState?: string, legalCity?: string, legalAddress?: string, legalTaxId?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<Models.Project> {
        let params: { projectId: string, name: string, description?: string, logo?: string, url?: string, legalName?: string, legalCountry?: string, legalState?: string, legalCity?: string, legalAddress?: string, legalTaxId?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { projectId: string, name: string, description?: string, logo?: string, url?: string, legalName?: string, legalCountry?: string, legalState?: string, legalCity?: string, legalAddress?: string, legalTaxId?: string };
        } else {
            params = {
                projectId: paramsOrFirst as string,
                name: rest[0] as string,
                description: rest[1] as string,
                logo: rest[2] as string,
                url: rest[3] as string,
                legalName: rest[4] as string,
                legalCountry: rest[5] as string,
                legalState: rest[6] as string,
                legalCity: rest[7] as string,
                legalAddress: rest[8] as string,
                legalTaxId: rest[9] as string            
            };
        }
        
        const projectId = params.projectId;
        const name = params.name;
        const description = params.description;
        const logo = params.logo;
        const url = params.url;
        const legalName = params.legalName;
        const legalCountry = params.legalCountry;
        const legalState = params.legalState;
        const legalCity = params.legalCity;
        const legalAddress = params.legalAddress;
        const legalTaxId = params.legalTaxId;

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
     * @param {string} params.projectId - Project unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    delete(params: { projectId: string }): Promise<{}>;
    /**
     * Delete a project by its unique ID.
     *
     * @param {string} projectId - Project unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    delete(projectId: string): Promise<{}>;
    delete(
        paramsOrFirst: { projectId: string } | string    
    ): Promise<{}> {
        let params: { projectId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { projectId: string };
        } else {
            params = {
                projectId: paramsOrFirst as string            
            };
        }
        
        const projectId = params.projectId;

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
     * Update how long sessions created within a project should stay active for.
     *
     * @param {string} params.projectId - Project unique ID.
     * @param {number} params.duration - Project session length in seconds. Max length: 31536000 seconds.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     */
    updateAuthDuration(params: { projectId: string, duration: number }): Promise<Models.Project>;
    /**
     * Update how long sessions created within a project should stay active for.
     *
     * @param {string} projectId - Project unique ID.
     * @param {number} duration - Project session length in seconds. Max length: 31536000 seconds.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateAuthDuration(projectId: string, duration: number): Promise<Models.Project>;
    updateAuthDuration(
        paramsOrFirst: { projectId: string, duration: number } | string,
        ...rest: [(number)?]    
    ): Promise<Models.Project> {
        let params: { projectId: string, duration: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { projectId: string, duration: number };
        } else {
            params = {
                projectId: paramsOrFirst as string,
                duration: rest[0] as number            
            };
        }
        
        const projectId = params.projectId;
        const duration = params.duration;

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
     * @param {string} params.projectId - Project unique ID.
     * @param {number} params.limit - Set the max number of users allowed in this project. Use 0 for unlimited.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     */
    updateAuthLimit(params: { projectId: string, limit: number }): Promise<Models.Project>;
    /**
     * Update the maximum number of users allowed in this project. Set to 0 for unlimited users. 
     *
     * @param {string} projectId - Project unique ID.
     * @param {number} limit - Set the max number of users allowed in this project. Use 0 for unlimited.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateAuthLimit(projectId: string, limit: number): Promise<Models.Project>;
    updateAuthLimit(
        paramsOrFirst: { projectId: string, limit: number } | string,
        ...rest: [(number)?]    
    ): Promise<Models.Project> {
        let params: { projectId: string, limit: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { projectId: string, limit: number };
        } else {
            params = {
                projectId: paramsOrFirst as string,
                limit: rest[0] as number            
            };
        }
        
        const projectId = params.projectId;
        const limit = params.limit;

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
     * @param {string} params.projectId - Project unique ID.
     * @param {number} params.limit - Set the max number of users allowed in this project. Value allowed is between 1-100. Default is 10
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     */
    updateAuthSessionsLimit(params: { projectId: string, limit: number }): Promise<Models.Project>;
    /**
     * Update the maximum number of sessions allowed per user within the project, if the limit is hit the oldest session will be deleted to make room for new sessions.
     *
     * @param {string} projectId - Project unique ID.
     * @param {number} limit - Set the max number of users allowed in this project. Value allowed is between 1-100. Default is 10
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateAuthSessionsLimit(projectId: string, limit: number): Promise<Models.Project>;
    updateAuthSessionsLimit(
        paramsOrFirst: { projectId: string, limit: number } | string,
        ...rest: [(number)?]    
    ): Promise<Models.Project> {
        let params: { projectId: string, limit: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { projectId: string, limit: number };
        } else {
            params = {
                projectId: paramsOrFirst as string,
                limit: rest[0] as number            
            };
        }
        
        const projectId = params.projectId;
        const limit = params.limit;

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
     * @param {string} params.projectId - Project unique ID.
     * @param {boolean} params.userName - Set to true to show userName to members of a team.
     * @param {boolean} params.userEmail - Set to true to show email to members of a team.
     * @param {boolean} params.mfa - Set to true to show mfa to members of a team.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     */
    updateMembershipsPrivacy(params: { projectId: string, userName: boolean, userEmail: boolean, mfa: boolean }): Promise<Models.Project>;
    /**
     * Update project membership privacy settings. Use this endpoint to control what user information is visible to other team members, such as user name, email, and MFA status. 
     *
     * @param {string} projectId - Project unique ID.
     * @param {boolean} userName - Set to true to show userName to members of a team.
     * @param {boolean} userEmail - Set to true to show email to members of a team.
     * @param {boolean} mfa - Set to true to show mfa to members of a team.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateMembershipsPrivacy(projectId: string, userName: boolean, userEmail: boolean, mfa: boolean): Promise<Models.Project>;
    updateMembershipsPrivacy(
        paramsOrFirst: { projectId: string, userName: boolean, userEmail: boolean, mfa: boolean } | string,
        ...rest: [(boolean)?, (boolean)?, (boolean)?]    
    ): Promise<Models.Project> {
        let params: { projectId: string, userName: boolean, userEmail: boolean, mfa: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { projectId: string, userName: boolean, userEmail: boolean, mfa: boolean };
        } else {
            params = {
                projectId: paramsOrFirst as string,
                userName: rest[0] as boolean,
                userEmail: rest[1] as boolean,
                mfa: rest[2] as boolean            
            };
        }
        
        const projectId = params.projectId;
        const userName = params.userName;
        const userEmail = params.userEmail;
        const mfa = params.mfa;

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
     * @param {string} params.projectId - Project unique ID.
     * @param {object[]} params.numbers - An array of mock numbers and their corresponding verification codes (OTPs). Each number should be a valid E.164 formatted phone number. Maximum of 10 numbers are allowed.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     */
    updateMockNumbers(params: { projectId: string, numbers: object[] }): Promise<Models.Project>;
    /**
     * Update the list of mock phone numbers for testing. Use these numbers to bypass SMS verification in development. 
     *
     * @param {string} projectId - Project unique ID.
     * @param {object[]} numbers - An array of mock numbers and their corresponding verification codes (OTPs). Each number should be a valid E.164 formatted phone number. Maximum of 10 numbers are allowed.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateMockNumbers(projectId: string, numbers: object[]): Promise<Models.Project>;
    updateMockNumbers(
        paramsOrFirst: { projectId: string, numbers: object[] } | string,
        ...rest: [(object[])?]    
    ): Promise<Models.Project> {
        let params: { projectId: string, numbers: object[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { projectId: string, numbers: object[] };
        } else {
            params = {
                projectId: paramsOrFirst as string,
                numbers: rest[0] as object[]            
            };
        }
        
        const projectId = params.projectId;
        const numbers = params.numbers;

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
     * Enable or disable checking user passwords against common passwords dictionary. This helps ensure users don't use common and insecure passwords. 
     *
     * @param {string} params.projectId - Project unique ID.
     * @param {boolean} params.enabled - Set whether or not to enable checking user's password against most commonly used passwords. Default is false.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     */
    updateAuthPasswordDictionary(params: { projectId: string, enabled: boolean }): Promise<Models.Project>;
    /**
     * Enable or disable checking user passwords against common passwords dictionary. This helps ensure users don't use common and insecure passwords. 
     *
     * @param {string} projectId - Project unique ID.
     * @param {boolean} enabled - Set whether or not to enable checking user's password against most commonly used passwords. Default is false.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateAuthPasswordDictionary(projectId: string, enabled: boolean): Promise<Models.Project>;
    updateAuthPasswordDictionary(
        paramsOrFirst: { projectId: string, enabled: boolean } | string,
        ...rest: [(boolean)?]    
    ): Promise<Models.Project> {
        let params: { projectId: string, enabled: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { projectId: string, enabled: boolean };
        } else {
            params = {
                projectId: paramsOrFirst as string,
                enabled: rest[0] as boolean            
            };
        }
        
        const projectId = params.projectId;
        const enabled = params.enabled;

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
     * @param {string} params.projectId - Project unique ID.
     * @param {number} params.limit - Set the max number of passwords to store in user history. User can't choose a new password that is already stored in the password history list.  Max number of passwords allowed in history is20. Default value is 0
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     */
    updateAuthPasswordHistory(params: { projectId: string, limit: number }): Promise<Models.Project>;
    /**
     * Update the authentication password history requirement. Use this endpoint to require new passwords to be different than the last X amount of previously used ones.
     *
     * @param {string} projectId - Project unique ID.
     * @param {number} limit - Set the max number of passwords to store in user history. User can't choose a new password that is already stored in the password history list.  Max number of passwords allowed in history is20. Default value is 0
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateAuthPasswordHistory(projectId: string, limit: number): Promise<Models.Project>;
    updateAuthPasswordHistory(
        paramsOrFirst: { projectId: string, limit: number } | string,
        ...rest: [(number)?]    
    ): Promise<Models.Project> {
        let params: { projectId: string, limit: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { projectId: string, limit: number };
        } else {
            params = {
                projectId: paramsOrFirst as string,
                limit: rest[0] as number            
            };
        }
        
        const projectId = params.projectId;
        const limit = params.limit;

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
     * @param {string} params.projectId - Project unique ID.
     * @param {boolean} params.enabled - Set whether or not to check a password for similarity with personal data. Default is false.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     */
    updatePersonalDataCheck(params: { projectId: string, enabled: boolean }): Promise<Models.Project>;
    /**
     * Enable or disable checking user passwords against their personal data. This helps prevent users from using personal information in their passwords. 
     *
     * @param {string} projectId - Project unique ID.
     * @param {boolean} enabled - Set whether or not to check a password for similarity with personal data. Default is false.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updatePersonalDataCheck(projectId: string, enabled: boolean): Promise<Models.Project>;
    updatePersonalDataCheck(
        paramsOrFirst: { projectId: string, enabled: boolean } | string,
        ...rest: [(boolean)?]    
    ): Promise<Models.Project> {
        let params: { projectId: string, enabled: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { projectId: string, enabled: boolean };
        } else {
            params = {
                projectId: paramsOrFirst as string,
                enabled: rest[0] as boolean            
            };
        }
        
        const projectId = params.projectId;
        const enabled = params.enabled;

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
     * @param {string} params.projectId - Project unique ID.
     * @param {boolean} params.alerts - Set to true to enable session emails.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     */
    updateSessionAlerts(params: { projectId: string, alerts: boolean }): Promise<Models.Project>;
    /**
     * Enable or disable session email alerts. When enabled, users will receive email notifications when new sessions are created.
     *
     * @param {string} projectId - Project unique ID.
     * @param {boolean} alerts - Set to true to enable session emails.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateSessionAlerts(projectId: string, alerts: boolean): Promise<Models.Project>;
    updateSessionAlerts(
        paramsOrFirst: { projectId: string, alerts: boolean } | string,
        ...rest: [(boolean)?]    
    ): Promise<Models.Project> {
        let params: { projectId: string, alerts: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { projectId: string, alerts: boolean };
        } else {
            params = {
                projectId: paramsOrFirst as string,
                alerts: rest[0] as boolean            
            };
        }
        
        const projectId = params.projectId;
        const alerts = params.alerts;

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
     * Invalidate all existing sessions. An optional auth security setting for projects, and enabled by default for console project.
     *
     * @param {string} params.projectId - Project unique ID.
     * @param {boolean} params.enabled - Update authentication session invalidation status. Use this endpoint to enable or disable session invalidation on password change
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     */
    updateSessionInvalidation(params: { projectId: string, enabled: boolean }): Promise<Models.Project>;
    /**
     * Invalidate all existing sessions. An optional auth security setting for projects, and enabled by default for console project.
     *
     * @param {string} projectId - Project unique ID.
     * @param {boolean} enabled - Update authentication session invalidation status. Use this endpoint to enable or disable session invalidation on password change
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateSessionInvalidation(projectId: string, enabled: boolean): Promise<Models.Project>;
    updateSessionInvalidation(
        paramsOrFirst: { projectId: string, enabled: boolean } | string,
        ...rest: [(boolean)?]    
    ): Promise<Models.Project> {
        let params: { projectId: string, enabled: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { projectId: string, enabled: boolean };
        } else {
            params = {
                projectId: paramsOrFirst as string,
                enabled: rest[0] as boolean            
            };
        }
        
        const projectId = params.projectId;
        const enabled = params.enabled;

        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }
        if (typeof enabled === 'undefined') {
            throw new AppwriteException('Missing required parameter: "enabled"');
        }

        const apiPath = '/projects/{projectId}/auth/session-invalidation'.replace('{projectId}', projectId);
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
     * Update the status of a specific authentication method. Use this endpoint to enable or disable different authentication methods such as email, magic urls or sms in your project. 
     *
     * @param {string} params.projectId - Project unique ID.
     * @param {AuthMethod} params.method - Auth Method. Possible values: email-password,magic-url,email-otp,anonymous,invites,jwt,phone
     * @param {boolean} params.status - Set the status of this auth method.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     */
    updateAuthStatus(params: { projectId: string, method: AuthMethod, status: boolean }): Promise<Models.Project>;
    /**
     * Update the status of a specific authentication method. Use this endpoint to enable or disable different authentication methods such as email, magic urls or sms in your project. 
     *
     * @param {string} projectId - Project unique ID.
     * @param {AuthMethod} method - Auth Method. Possible values: email-password,magic-url,email-otp,anonymous,invites,jwt,phone
     * @param {boolean} status - Set the status of this auth method.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateAuthStatus(projectId: string, method: AuthMethod, status: boolean): Promise<Models.Project>;
    updateAuthStatus(
        paramsOrFirst: { projectId: string, method: AuthMethod, status: boolean } | string,
        ...rest: [(AuthMethod)?, (boolean)?]    
    ): Promise<Models.Project> {
        let params: { projectId: string, method: AuthMethod, status: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { projectId: string, method: AuthMethod, status: boolean };
        } else {
            params = {
                projectId: paramsOrFirst as string,
                method: rest[0] as AuthMethod,
                status: rest[1] as boolean            
            };
        }
        
        const projectId = params.projectId;
        const method = params.method;
        const status = params.status;

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
     * Record console access to a project. This endpoint updates the last accessed timestamp for the project to track console activity.
     * 
     *
     * @param {string} params.projectId - Project ID
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    updateConsoleAccess(params: { projectId: string }): Promise<{}>;
    /**
     * Record console access to a project. This endpoint updates the last accessed timestamp for the project to track console activity.
     * 
     *
     * @param {string} projectId - Project ID
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateConsoleAccess(projectId: string): Promise<{}>;
    updateConsoleAccess(
        paramsOrFirst: { projectId: string } | string    
    ): Promise<{}> {
        let params: { projectId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { projectId: string };
        } else {
            params = {
                projectId: paramsOrFirst as string            
            };
        }
        
        const projectId = params.projectId;

        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }

        const apiPath = '/projects/{projectId}/console-access'.replace('{projectId}', projectId);
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

    /**
     * List all the project\'s dev keys. Dev keys are project specific and allow you to bypass rate limits and get better error logging during development.'
     *
     * @param {string} params.projectId - Project unique ID.
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: accessedAt, expire
     * @throws {AppwriteException}
     * @returns {Promise<Models.DevKeyList>}
     */
    listDevKeys(params: { projectId: string, queries?: string[] }): Promise<Models.DevKeyList>;
    /**
     * List all the project\'s dev keys. Dev keys are project specific and allow you to bypass rate limits and get better error logging during development.'
     *
     * @param {string} projectId - Project unique ID.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: accessedAt, expire
     * @throws {AppwriteException}
     * @returns {Promise<Models.DevKeyList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listDevKeys(projectId: string, queries?: string[]): Promise<Models.DevKeyList>;
    listDevKeys(
        paramsOrFirst: { projectId: string, queries?: string[] } | string,
        ...rest: [(string[])?]    
    ): Promise<Models.DevKeyList> {
        let params: { projectId: string, queries?: string[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { projectId: string, queries?: string[] };
        } else {
            params = {
                projectId: paramsOrFirst as string,
                queries: rest[0] as string[]            
            };
        }
        
        const projectId = params.projectId;
        const queries = params.queries;

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
     * @param {string} params.projectId - Project unique ID.
     * @param {string} params.name - Key name. Max length: 128 chars.
     * @param {string} params.expire - Expiration time in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DevKey>}
     */
    createDevKey(params: { projectId: string, name: string, expire: string }): Promise<Models.DevKey>;
    /**
     * Create a new project dev key. Dev keys are project specific and allow you to bypass rate limits and get better error logging during development. Strictly meant for development purposes only.
     *
     * @param {string} projectId - Project unique ID.
     * @param {string} name - Key name. Max length: 128 chars.
     * @param {string} expire - Expiration time in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DevKey>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createDevKey(projectId: string, name: string, expire: string): Promise<Models.DevKey>;
    createDevKey(
        paramsOrFirst: { projectId: string, name: string, expire: string } | string,
        ...rest: [(string)?, (string)?]    
    ): Promise<Models.DevKey> {
        let params: { projectId: string, name: string, expire: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { projectId: string, name: string, expire: string };
        } else {
            params = {
                projectId: paramsOrFirst as string,
                name: rest[0] as string,
                expire: rest[1] as string            
            };
        }
        
        const projectId = params.projectId;
        const name = params.name;
        const expire = params.expire;

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
     * Get a project\'s dev key by its unique ID. Dev keys are project specific and allow you to bypass rate limits and get better error logging during development.
     *
     * @param {string} params.projectId - Project unique ID.
     * @param {string} params.keyId - Key unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DevKey>}
     */
    getDevKey(params: { projectId: string, keyId: string }): Promise<Models.DevKey>;
    /**
     * Get a project\'s dev key by its unique ID. Dev keys are project specific and allow you to bypass rate limits and get better error logging during development.
     *
     * @param {string} projectId - Project unique ID.
     * @param {string} keyId - Key unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DevKey>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getDevKey(projectId: string, keyId: string): Promise<Models.DevKey>;
    getDevKey(
        paramsOrFirst: { projectId: string, keyId: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.DevKey> {
        let params: { projectId: string, keyId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { projectId: string, keyId: string };
        } else {
            params = {
                projectId: paramsOrFirst as string,
                keyId: rest[0] as string            
            };
        }
        
        const projectId = params.projectId;
        const keyId = params.keyId;

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
     * Update a project\'s dev key by its unique ID. Use this endpoint to update a project\'s dev key name or expiration time.'
     *
     * @param {string} params.projectId - Project unique ID.
     * @param {string} params.keyId - Key unique ID.
     * @param {string} params.name - Key name. Max length: 128 chars.
     * @param {string} params.expire - Expiration time in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DevKey>}
     */
    updateDevKey(params: { projectId: string, keyId: string, name: string, expire: string }): Promise<Models.DevKey>;
    /**
     * Update a project\'s dev key by its unique ID. Use this endpoint to update a project\'s dev key name or expiration time.'
     *
     * @param {string} projectId - Project unique ID.
     * @param {string} keyId - Key unique ID.
     * @param {string} name - Key name. Max length: 128 chars.
     * @param {string} expire - Expiration time in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DevKey>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateDevKey(projectId: string, keyId: string, name: string, expire: string): Promise<Models.DevKey>;
    updateDevKey(
        paramsOrFirst: { projectId: string, keyId: string, name: string, expire: string } | string,
        ...rest: [(string)?, (string)?, (string)?]    
    ): Promise<Models.DevKey> {
        let params: { projectId: string, keyId: string, name: string, expire: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { projectId: string, keyId: string, name: string, expire: string };
        } else {
            params = {
                projectId: paramsOrFirst as string,
                keyId: rest[0] as string,
                name: rest[1] as string,
                expire: rest[2] as string            
            };
        }
        
        const projectId = params.projectId;
        const keyId = params.keyId;
        const name = params.name;
        const expire = params.expire;

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
     * Delete a project\'s dev key by its unique ID. Once deleted, the key will no longer allow bypassing of rate limits and better logging of errors.
     *
     * @param {string} params.projectId - Project unique ID.
     * @param {string} params.keyId - Key unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteDevKey(params: { projectId: string, keyId: string }): Promise<{}>;
    /**
     * Delete a project\'s dev key by its unique ID. Once deleted, the key will no longer allow bypassing of rate limits and better logging of errors.
     *
     * @param {string} projectId - Project unique ID.
     * @param {string} keyId - Key unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteDevKey(projectId: string, keyId: string): Promise<{}>;
    deleteDevKey(
        paramsOrFirst: { projectId: string, keyId: string } | string,
        ...rest: [(string)?]    
    ): Promise<{}> {
        let params: { projectId: string, keyId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { projectId: string, keyId: string };
        } else {
            params = {
                projectId: paramsOrFirst as string,
                keyId: rest[0] as string            
            };
        }
        
        const projectId = params.projectId;
        const keyId = params.keyId;

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
     * @param {string} params.projectId - Project unique ID.
     * @param {Scopes[]} params.scopes - List of scopes allowed for JWT key. Maximum of 100 scopes are allowed.
     * @param {number} params.duration - Time in seconds before JWT expires. Default duration is 900 seconds, and maximum is 3600 seconds.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Jwt>}
     */
    createJWT(params: { projectId: string, scopes: Scopes[], duration?: number }): Promise<Models.Jwt>;
    /**
     * Create a new JWT token. This token can be used to authenticate users with custom scopes and expiration time. 
     *
     * @param {string} projectId - Project unique ID.
     * @param {Scopes[]} scopes - List of scopes allowed for JWT key. Maximum of 100 scopes are allowed.
     * @param {number} duration - Time in seconds before JWT expires. Default duration is 900 seconds, and maximum is 3600 seconds.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Jwt>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createJWT(projectId: string, scopes: Scopes[], duration?: number): Promise<Models.Jwt>;
    createJWT(
        paramsOrFirst: { projectId: string, scopes: Scopes[], duration?: number } | string,
        ...rest: [(Scopes[])?, (number)?]    
    ): Promise<Models.Jwt> {
        let params: { projectId: string, scopes: Scopes[], duration?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { projectId: string, scopes: Scopes[], duration?: number };
        } else {
            params = {
                projectId: paramsOrFirst as string,
                scopes: rest[0] as Scopes[],
                duration: rest[1] as number            
            };
        }
        
        const projectId = params.projectId;
        const scopes = params.scopes;
        const duration = params.duration;

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
     * Update the OAuth2 provider configurations. Use this endpoint to set up or update the OAuth2 provider credentials or enable/disable providers. 
     *
     * @param {string} params.projectId - Project unique ID.
     * @param {OAuthProvider} params.provider - Provider Name
     * @param {string} params.appId - Provider app ID. Max length: 256 chars.
     * @param {string} params.secret - Provider secret key. Max length: 512 chars.
     * @param {boolean} params.enabled - Provider status. Set to 'false' to disable new session creation.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     */
    updateOAuth2(params: { projectId: string, provider: OAuthProvider, appId?: string, secret?: string, enabled?: boolean }): Promise<Models.Project>;
    /**
     * Update the OAuth2 provider configurations. Use this endpoint to set up or update the OAuth2 provider credentials or enable/disable providers. 
     *
     * @param {string} projectId - Project unique ID.
     * @param {OAuthProvider} provider - Provider Name
     * @param {string} appId - Provider app ID. Max length: 256 chars.
     * @param {string} secret - Provider secret key. Max length: 512 chars.
     * @param {boolean} enabled - Provider status. Set to 'false' to disable new session creation.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateOAuth2(projectId: string, provider: OAuthProvider, appId?: string, secret?: string, enabled?: boolean): Promise<Models.Project>;
    updateOAuth2(
        paramsOrFirst: { projectId: string, provider: OAuthProvider, appId?: string, secret?: string, enabled?: boolean } | string,
        ...rest: [(OAuthProvider)?, (string)?, (string)?, (boolean)?]    
    ): Promise<Models.Project> {
        let params: { projectId: string, provider: OAuthProvider, appId?: string, secret?: string, enabled?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { projectId: string, provider: OAuthProvider, appId?: string, secret?: string, enabled?: boolean };
        } else {
            params = {
                projectId: paramsOrFirst as string,
                provider: rest[0] as OAuthProvider,
                appId: rest[1] as string,
                secret: rest[2] as string,
                enabled: rest[3] as boolean            
            };
        }
        
        const projectId = params.projectId;
        const provider = params.provider;
        const appId = params.appId;
        const secret = params.secret;
        const enabled = params.enabled;

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
     * Get a list of all the project's schedules. You can use the query params to filter your results.
     *
     * @param {string} params.projectId - Project unique ID.
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: resourceType, resourceId, projectId, schedule, active, region
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ScheduleList>}
     */
    listSchedules(params: { projectId: string, queries?: string[], total?: boolean }): Promise<Models.ScheduleList>;
    /**
     * Get a list of all the project's schedules. You can use the query params to filter your results.
     *
     * @param {string} projectId - Project unique ID.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: resourceType, resourceId, projectId, schedule, active, region
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ScheduleList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listSchedules(projectId: string, queries?: string[], total?: boolean): Promise<Models.ScheduleList>;
    listSchedules(
        paramsOrFirst: { projectId: string, queries?: string[], total?: boolean } | string,
        ...rest: [(string[])?, (boolean)?]    
    ): Promise<Models.ScheduleList> {
        let params: { projectId: string, queries?: string[], total?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { projectId: string, queries?: string[], total?: boolean };
        } else {
            params = {
                projectId: paramsOrFirst as string,
                queries: rest[0] as string[],
                total: rest[1] as boolean            
            };
        }
        
        const projectId = params.projectId;
        const queries = params.queries;
        const total = params.total;

        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }

        const apiPath = '/projects/{projectId}/schedules'.replace('{projectId}', projectId);
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
     * Create a new schedule for a resource.
     *
     * @param {string} params.projectId - Project unique ID.
     * @param {ResourceType} params.resourceType - The resource type for the schedule. Possible values: function, execution, message, backup.
     * @param {string} params.resourceId - The resource ID to associate with this schedule.
     * @param {string} params.schedule - Schedule CRON expression.
     * @param {boolean} params.active - Whether the schedule is active.
     * @param {object} params.data - Schedule data as a JSON string. Used to store resource-specific context needed for execution.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Schedule>}
     */
    createSchedule(params: { projectId: string, resourceType: ResourceType, resourceId: string, schedule: string, active?: boolean, data?: object }): Promise<Models.Schedule>;
    /**
     * Create a new schedule for a resource.
     *
     * @param {string} projectId - Project unique ID.
     * @param {ResourceType} resourceType - The resource type for the schedule. Possible values: function, execution, message, backup.
     * @param {string} resourceId - The resource ID to associate with this schedule.
     * @param {string} schedule - Schedule CRON expression.
     * @param {boolean} active - Whether the schedule is active.
     * @param {object} data - Schedule data as a JSON string. Used to store resource-specific context needed for execution.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Schedule>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createSchedule(projectId: string, resourceType: ResourceType, resourceId: string, schedule: string, active?: boolean, data?: object): Promise<Models.Schedule>;
    createSchedule(
        paramsOrFirst: { projectId: string, resourceType: ResourceType, resourceId: string, schedule: string, active?: boolean, data?: object } | string,
        ...rest: [(ResourceType)?, (string)?, (string)?, (boolean)?, (object)?]    
    ): Promise<Models.Schedule> {
        let params: { projectId: string, resourceType: ResourceType, resourceId: string, schedule: string, active?: boolean, data?: object };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { projectId: string, resourceType: ResourceType, resourceId: string, schedule: string, active?: boolean, data?: object };
        } else {
            params = {
                projectId: paramsOrFirst as string,
                resourceType: rest[0] as ResourceType,
                resourceId: rest[1] as string,
                schedule: rest[2] as string,
                active: rest[3] as boolean,
                data: rest[4] as object            
            };
        }
        
        const projectId = params.projectId;
        const resourceType = params.resourceType;
        const resourceId = params.resourceId;
        const schedule = params.schedule;
        const active = params.active;
        const data = params.data;

        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }
        if (typeof resourceType === 'undefined') {
            throw new AppwriteException('Missing required parameter: "resourceType"');
        }
        if (typeof resourceId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "resourceId"');
        }
        if (typeof schedule === 'undefined') {
            throw new AppwriteException('Missing required parameter: "schedule"');
        }

        const apiPath = '/projects/{projectId}/schedules'.replace('{projectId}', projectId);
        const payload: Payload = {};
        if (typeof resourceType !== 'undefined') {
            payload['resourceType'] = resourceType;
        }
        if (typeof resourceId !== 'undefined') {
            payload['resourceId'] = resourceId;
        }
        if (typeof schedule !== 'undefined') {
            payload['schedule'] = schedule;
        }
        if (typeof active !== 'undefined') {
            payload['active'] = active;
        }
        if (typeof data !== 'undefined') {
            payload['data'] = data;
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
     * Get a schedule by its unique ID.
     *
     * @param {string} params.projectId - Project unique ID.
     * @param {string} params.scheduleId - Schedule ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Schedule>}
     */
    getSchedule(params: { projectId: string, scheduleId: string }): Promise<Models.Schedule>;
    /**
     * Get a schedule by its unique ID.
     *
     * @param {string} projectId - Project unique ID.
     * @param {string} scheduleId - Schedule ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Schedule>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getSchedule(projectId: string, scheduleId: string): Promise<Models.Schedule>;
    getSchedule(
        paramsOrFirst: { projectId: string, scheduleId: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.Schedule> {
        let params: { projectId: string, scheduleId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { projectId: string, scheduleId: string };
        } else {
            params = {
                projectId: paramsOrFirst as string,
                scheduleId: rest[0] as string            
            };
        }
        
        const projectId = params.projectId;
        const scheduleId = params.scheduleId;

        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }
        if (typeof scheduleId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "scheduleId"');
        }

        const apiPath = '/projects/{projectId}/schedules/{scheduleId}'.replace('{projectId}', projectId).replace('{scheduleId}', scheduleId);
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
     * Update the SMTP configuration for your project. Use this endpoint to configure your project's SMTP provider with your custom settings for sending transactional emails. 
     *
     * @param {string} params.projectId - Project unique ID.
     * @param {boolean} params.enabled - Enable custom SMTP service
     * @param {string} params.senderName - Name of the email sender
     * @param {string} params.senderEmail - Email of the sender
     * @param {string} params.replyTo - Reply to email
     * @param {string} params.host - SMTP server host name
     * @param {number} params.port - SMTP server port
     * @param {string} params.username - SMTP server username
     * @param {string} params.password - SMTP server password
     * @param {SMTPSecure} params.secure - Does SMTP server use secure connection
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `Projects.updateSMTP` instead.
     */
    updateSmtp(params: { projectId: string, enabled: boolean, senderName?: string, senderEmail?: string, replyTo?: string, host?: string, port?: number, username?: string, password?: string, secure?: SMTPSecure }): Promise<Models.Project>;
    /**
     * Update the SMTP configuration for your project. Use this endpoint to configure your project's SMTP provider with your custom settings for sending transactional emails. 
     *
     * @param {string} projectId - Project unique ID.
     * @param {boolean} enabled - Enable custom SMTP service
     * @param {string} senderName - Name of the email sender
     * @param {string} senderEmail - Email of the sender
     * @param {string} replyTo - Reply to email
     * @param {string} host - SMTP server host name
     * @param {number} port - SMTP server port
     * @param {string} username - SMTP server username
     * @param {string} password - SMTP server password
     * @param {SMTPSecure} secure - Does SMTP server use secure connection
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateSmtp(projectId: string, enabled: boolean, senderName?: string, senderEmail?: string, replyTo?: string, host?: string, port?: number, username?: string, password?: string, secure?: SMTPSecure): Promise<Models.Project>;
    updateSmtp(
        paramsOrFirst: { projectId: string, enabled: boolean, senderName?: string, senderEmail?: string, replyTo?: string, host?: string, port?: number, username?: string, password?: string, secure?: SMTPSecure } | string,
        ...rest: [(boolean)?, (string)?, (string)?, (string)?, (string)?, (number)?, (string)?, (string)?, (SMTPSecure)?]    
    ): Promise<Models.Project> {
        let params: { projectId: string, enabled: boolean, senderName?: string, senderEmail?: string, replyTo?: string, host?: string, port?: number, username?: string, password?: string, secure?: SMTPSecure };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { projectId: string, enabled: boolean, senderName?: string, senderEmail?: string, replyTo?: string, host?: string, port?: number, username?: string, password?: string, secure?: SMTPSecure };
        } else {
            params = {
                projectId: paramsOrFirst as string,
                enabled: rest[0] as boolean,
                senderName: rest[1] as string,
                senderEmail: rest[2] as string,
                replyTo: rest[3] as string,
                host: rest[4] as string,
                port: rest[5] as number,
                username: rest[6] as string,
                password: rest[7] as string,
                secure: rest[8] as SMTPSecure            
            };
        }
        
        const projectId = params.projectId;
        const enabled = params.enabled;
        const senderName = params.senderName;
        const senderEmail = params.senderEmail;
        const replyTo = params.replyTo;
        const host = params.host;
        const port = params.port;
        const username = params.username;
        const password = params.password;
        const secure = params.secure;

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
     * Update the SMTP configuration for your project. Use this endpoint to configure your project's SMTP provider with your custom settings for sending transactional emails. 
     *
     * @param {string} params.projectId - Project unique ID.
     * @param {boolean} params.enabled - Enable custom SMTP service
     * @param {string} params.senderName - Name of the email sender
     * @param {string} params.senderEmail - Email of the sender
     * @param {string} params.replyTo - Reply to email
     * @param {string} params.host - SMTP server host name
     * @param {number} params.port - SMTP server port
     * @param {string} params.username - SMTP server username
     * @param {string} params.password - SMTP server password
     * @param {SMTPSecure} params.secure - Does SMTP server use secure connection
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     */
    updateSMTP(params: { projectId: string, enabled: boolean, senderName?: string, senderEmail?: string, replyTo?: string, host?: string, port?: number, username?: string, password?: string, secure?: SMTPSecure }): Promise<Models.Project>;
    /**
     * Update the SMTP configuration for your project. Use this endpoint to configure your project's SMTP provider with your custom settings for sending transactional emails. 
     *
     * @param {string} projectId - Project unique ID.
     * @param {boolean} enabled - Enable custom SMTP service
     * @param {string} senderName - Name of the email sender
     * @param {string} senderEmail - Email of the sender
     * @param {string} replyTo - Reply to email
     * @param {string} host - SMTP server host name
     * @param {number} port - SMTP server port
     * @param {string} username - SMTP server username
     * @param {string} password - SMTP server password
     * @param {SMTPSecure} secure - Does SMTP server use secure connection
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateSMTP(projectId: string, enabled: boolean, senderName?: string, senderEmail?: string, replyTo?: string, host?: string, port?: number, username?: string, password?: string, secure?: SMTPSecure): Promise<Models.Project>;
    updateSMTP(
        paramsOrFirst: { projectId: string, enabled: boolean, senderName?: string, senderEmail?: string, replyTo?: string, host?: string, port?: number, username?: string, password?: string, secure?: SMTPSecure } | string,
        ...rest: [(boolean)?, (string)?, (string)?, (string)?, (string)?, (number)?, (string)?, (string)?, (SMTPSecure)?]    
    ): Promise<Models.Project> {
        let params: { projectId: string, enabled: boolean, senderName?: string, senderEmail?: string, replyTo?: string, host?: string, port?: number, username?: string, password?: string, secure?: SMTPSecure };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { projectId: string, enabled: boolean, senderName?: string, senderEmail?: string, replyTo?: string, host?: string, port?: number, username?: string, password?: string, secure?: SMTPSecure };
        } else {
            params = {
                projectId: paramsOrFirst as string,
                enabled: rest[0] as boolean,
                senderName: rest[1] as string,
                senderEmail: rest[2] as string,
                replyTo: rest[3] as string,
                host: rest[4] as string,
                port: rest[5] as number,
                username: rest[6] as string,
                password: rest[7] as string,
                secure: rest[8] as SMTPSecure            
            };
        }
        
        const projectId = params.projectId;
        const enabled = params.enabled;
        const senderName = params.senderName;
        const senderEmail = params.senderEmail;
        const replyTo = params.replyTo;
        const host = params.host;
        const port = params.port;
        const username = params.username;
        const password = params.password;
        const secure = params.secure;

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
     * @param {string} params.projectId - Project unique ID.
     * @param {string[]} params.emails - Array of emails to send test email to. Maximum of 10 emails are allowed.
     * @param {string} params.senderName - Name of the email sender
     * @param {string} params.senderEmail - Email of the sender
     * @param {string} params.host - SMTP server host name
     * @param {string} params.replyTo - Reply to email
     * @param {number} params.port - SMTP server port
     * @param {string} params.username - SMTP server username
     * @param {string} params.password - SMTP server password
     * @param {SMTPSecure} params.secure - Does SMTP server use secure connection
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `Projects.createSMTPTest` instead.
     */
    createSmtpTest(params: { projectId: string, emails: string[], senderName: string, senderEmail: string, host: string, replyTo?: string, port?: number, username?: string, password?: string, secure?: SMTPSecure }): Promise<{}>;
    /**
     * Send a test email to verify SMTP configuration. 
     *
     * @param {string} projectId - Project unique ID.
     * @param {string[]} emails - Array of emails to send test email to. Maximum of 10 emails are allowed.
     * @param {string} senderName - Name of the email sender
     * @param {string} senderEmail - Email of the sender
     * @param {string} host - SMTP server host name
     * @param {string} replyTo - Reply to email
     * @param {number} port - SMTP server port
     * @param {string} username - SMTP server username
     * @param {string} password - SMTP server password
     * @param {SMTPSecure} secure - Does SMTP server use secure connection
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createSmtpTest(projectId: string, emails: string[], senderName: string, senderEmail: string, host: string, replyTo?: string, port?: number, username?: string, password?: string, secure?: SMTPSecure): Promise<{}>;
    createSmtpTest(
        paramsOrFirst: { projectId: string, emails: string[], senderName: string, senderEmail: string, host: string, replyTo?: string, port?: number, username?: string, password?: string, secure?: SMTPSecure } | string,
        ...rest: [(string[])?, (string)?, (string)?, (string)?, (string)?, (number)?, (string)?, (string)?, (SMTPSecure)?]    
    ): Promise<{}> {
        let params: { projectId: string, emails: string[], senderName: string, senderEmail: string, host: string, replyTo?: string, port?: number, username?: string, password?: string, secure?: SMTPSecure };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { projectId: string, emails: string[], senderName: string, senderEmail: string, host: string, replyTo?: string, port?: number, username?: string, password?: string, secure?: SMTPSecure };
        } else {
            params = {
                projectId: paramsOrFirst as string,
                emails: rest[0] as string[],
                senderName: rest[1] as string,
                senderEmail: rest[2] as string,
                host: rest[3] as string,
                replyTo: rest[4] as string,
                port: rest[5] as number,
                username: rest[6] as string,
                password: rest[7] as string,
                secure: rest[8] as SMTPSecure            
            };
        }
        
        const projectId = params.projectId;
        const emails = params.emails;
        const senderName = params.senderName;
        const senderEmail = params.senderEmail;
        const host = params.host;
        const replyTo = params.replyTo;
        const port = params.port;
        const username = params.username;
        const password = params.password;
        const secure = params.secure;

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
     * Send a test email to verify SMTP configuration. 
     *
     * @param {string} params.projectId - Project unique ID.
     * @param {string[]} params.emails - Array of emails to send test email to. Maximum of 10 emails are allowed.
     * @param {string} params.senderName - Name of the email sender
     * @param {string} params.senderEmail - Email of the sender
     * @param {string} params.host - SMTP server host name
     * @param {string} params.replyTo - Reply to email
     * @param {number} params.port - SMTP server port
     * @param {string} params.username - SMTP server username
     * @param {string} params.password - SMTP server password
     * @param {SMTPSecure} params.secure - Does SMTP server use secure connection
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    createSMTPTest(params: { projectId: string, emails: string[], senderName: string, senderEmail: string, host: string, replyTo?: string, port?: number, username?: string, password?: string, secure?: SMTPSecure }): Promise<{}>;
    /**
     * Send a test email to verify SMTP configuration. 
     *
     * @param {string} projectId - Project unique ID.
     * @param {string[]} emails - Array of emails to send test email to. Maximum of 10 emails are allowed.
     * @param {string} senderName - Name of the email sender
     * @param {string} senderEmail - Email of the sender
     * @param {string} host - SMTP server host name
     * @param {string} replyTo - Reply to email
     * @param {number} port - SMTP server port
     * @param {string} username - SMTP server username
     * @param {string} password - SMTP server password
     * @param {SMTPSecure} secure - Does SMTP server use secure connection
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createSMTPTest(projectId: string, emails: string[], senderName: string, senderEmail: string, host: string, replyTo?: string, port?: number, username?: string, password?: string, secure?: SMTPSecure): Promise<{}>;
    createSMTPTest(
        paramsOrFirst: { projectId: string, emails: string[], senderName: string, senderEmail: string, host: string, replyTo?: string, port?: number, username?: string, password?: string, secure?: SMTPSecure } | string,
        ...rest: [(string[])?, (string)?, (string)?, (string)?, (string)?, (number)?, (string)?, (string)?, (SMTPSecure)?]    
    ): Promise<{}> {
        let params: { projectId: string, emails: string[], senderName: string, senderEmail: string, host: string, replyTo?: string, port?: number, username?: string, password?: string, secure?: SMTPSecure };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { projectId: string, emails: string[], senderName: string, senderEmail: string, host: string, replyTo?: string, port?: number, username?: string, password?: string, secure?: SMTPSecure };
        } else {
            params = {
                projectId: paramsOrFirst as string,
                emails: rest[0] as string[],
                senderName: rest[1] as string,
                senderEmail: rest[2] as string,
                host: rest[3] as string,
                replyTo: rest[4] as string,
                port: rest[5] as number,
                username: rest[6] as string,
                password: rest[7] as string,
                secure: rest[8] as SMTPSecure            
            };
        }
        
        const projectId = params.projectId;
        const emails = params.emails;
        const senderName = params.senderName;
        const senderEmail = params.senderEmail;
        const host = params.host;
        const replyTo = params.replyTo;
        const port = params.port;
        const username = params.username;
        const password = params.password;
        const secure = params.secure;

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
     * Update the status of a project. Can be used to archive/restore projects, and to restore paused projects. When restoring a paused project, the console fingerprint header must be provided and the project must not be blocked for any reason other than inactivity.
     * 
     *
     * @param {string} params.projectId - Project ID
     * @param {Status} params.status - New status for the project
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    updateStatus(params: { projectId: string, status: Status }): Promise<{}>;
    /**
     * Update the status of a project. Can be used to archive/restore projects, and to restore paused projects. When restoring a paused project, the console fingerprint header must be provided and the project must not be blocked for any reason other than inactivity.
     * 
     *
     * @param {string} projectId - Project ID
     * @param {Status} status - New status for the project
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateStatus(projectId: string, status: Status): Promise<{}>;
    updateStatus(
        paramsOrFirst: { projectId: string, status: Status } | string,
        ...rest: [(Status)?]    
    ): Promise<{}> {
        let params: { projectId: string, status: Status };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { projectId: string, status: Status };
        } else {
            params = {
                projectId: paramsOrFirst as string,
                status: rest[0] as Status            
            };
        }
        
        const projectId = params.projectId;
        const status = params.status;

        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }
        if (typeof status === 'undefined') {
            throw new AppwriteException('Missing required parameter: "status"');
        }

        const apiPath = '/projects/{projectId}/status'.replace('{projectId}', projectId);
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
     * Update the team ID of a project allowing for it to be transferred to another team.
     *
     * @param {string} params.projectId - Project unique ID.
     * @param {string} params.teamId - Team ID of the team to transfer project to.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     */
    updateTeam(params: { projectId: string, teamId: string }): Promise<Models.Project>;
    /**
     * Update the team ID of a project allowing for it to be transferred to another team.
     *
     * @param {string} projectId - Project unique ID.
     * @param {string} teamId - Team ID of the team to transfer project to.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateTeam(projectId: string, teamId: string): Promise<Models.Project>;
    updateTeam(
        paramsOrFirst: { projectId: string, teamId: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.Project> {
        let params: { projectId: string, teamId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { projectId: string, teamId: string };
        } else {
            params = {
                projectId: paramsOrFirst as string,
                teamId: rest[0] as string            
            };
        }
        
        const projectId = params.projectId;
        const teamId = params.teamId;

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
     * @param {string} params.projectId - Project unique ID.
     * @param {EmailTemplateType} params.type - Template type
     * @param {EmailTemplateLocale} params.locale - Template locale
     * @throws {AppwriteException}
     * @returns {Promise<Models.EmailTemplate>}
     */
    getEmailTemplate(params: { projectId: string, type: EmailTemplateType, locale: EmailTemplateLocale }): Promise<Models.EmailTemplate>;
    /**
     * Get a custom email template for the specified locale and type. This endpoint returns the template content, subject, and other configuration details. 
     *
     * @param {string} projectId - Project unique ID.
     * @param {EmailTemplateType} type - Template type
     * @param {EmailTemplateLocale} locale - Template locale
     * @throws {AppwriteException}
     * @returns {Promise<Models.EmailTemplate>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getEmailTemplate(projectId: string, type: EmailTemplateType, locale: EmailTemplateLocale): Promise<Models.EmailTemplate>;
    getEmailTemplate(
        paramsOrFirst: { projectId: string, type: EmailTemplateType, locale: EmailTemplateLocale } | string,
        ...rest: [(EmailTemplateType)?, (EmailTemplateLocale)?]    
    ): Promise<Models.EmailTemplate> {
        let params: { projectId: string, type: EmailTemplateType, locale: EmailTemplateLocale };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { projectId: string, type: EmailTemplateType, locale: EmailTemplateLocale };
        } else {
            params = {
                projectId: paramsOrFirst as string,
                type: rest[0] as EmailTemplateType,
                locale: rest[1] as EmailTemplateLocale            
            };
        }
        
        const projectId = params.projectId;
        const type = params.type;
        const locale = params.locale;

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
     * @param {string} params.projectId - Project unique ID.
     * @param {EmailTemplateType} params.type - Template type
     * @param {EmailTemplateLocale} params.locale - Template locale
     * @param {string} params.subject - Email Subject
     * @param {string} params.message - Template message
     * @param {string} params.senderName - Name of the email sender
     * @param {string} params.senderEmail - Email of the sender
     * @param {string} params.replyTo - Reply to email
     * @throws {AppwriteException}
     * @returns {Promise<Models.EmailTemplate>}
     */
    updateEmailTemplate(params: { projectId: string, type: EmailTemplateType, locale: EmailTemplateLocale, subject: string, message: string, senderName?: string, senderEmail?: string, replyTo?: string }): Promise<Models.EmailTemplate>;
    /**
     * Update a custom email template for the specified locale and type. Use this endpoint to modify the content of your email templates.
     *
     * @param {string} projectId - Project unique ID.
     * @param {EmailTemplateType} type - Template type
     * @param {EmailTemplateLocale} locale - Template locale
     * @param {string} subject - Email Subject
     * @param {string} message - Template message
     * @param {string} senderName - Name of the email sender
     * @param {string} senderEmail - Email of the sender
     * @param {string} replyTo - Reply to email
     * @throws {AppwriteException}
     * @returns {Promise<Models.EmailTemplate>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateEmailTemplate(projectId: string, type: EmailTemplateType, locale: EmailTemplateLocale, subject: string, message: string, senderName?: string, senderEmail?: string, replyTo?: string): Promise<Models.EmailTemplate>;
    updateEmailTemplate(
        paramsOrFirst: { projectId: string, type: EmailTemplateType, locale: EmailTemplateLocale, subject: string, message: string, senderName?: string, senderEmail?: string, replyTo?: string } | string,
        ...rest: [(EmailTemplateType)?, (EmailTemplateLocale)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<Models.EmailTemplate> {
        let params: { projectId: string, type: EmailTemplateType, locale: EmailTemplateLocale, subject: string, message: string, senderName?: string, senderEmail?: string, replyTo?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { projectId: string, type: EmailTemplateType, locale: EmailTemplateLocale, subject: string, message: string, senderName?: string, senderEmail?: string, replyTo?: string };
        } else {
            params = {
                projectId: paramsOrFirst as string,
                type: rest[0] as EmailTemplateType,
                locale: rest[1] as EmailTemplateLocale,
                subject: rest[2] as string,
                message: rest[3] as string,
                senderName: rest[4] as string,
                senderEmail: rest[5] as string,
                replyTo: rest[6] as string            
            };
        }
        
        const projectId = params.projectId;
        const type = params.type;
        const locale = params.locale;
        const subject = params.subject;
        const message = params.message;
        const senderName = params.senderName;
        const senderEmail = params.senderEmail;
        const replyTo = params.replyTo;

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
     * @param {string} params.projectId - Project unique ID.
     * @param {EmailTemplateType} params.type - Template type
     * @param {EmailTemplateLocale} params.locale - Template locale
     * @throws {AppwriteException}
     * @returns {Promise<Models.EmailTemplate>}
     */
    deleteEmailTemplate(params: { projectId: string, type: EmailTemplateType, locale: EmailTemplateLocale }): Promise<Models.EmailTemplate>;
    /**
     * Reset a custom email template to its default value. This endpoint removes any custom content and restores the template to its original state. 
     *
     * @param {string} projectId - Project unique ID.
     * @param {EmailTemplateType} type - Template type
     * @param {EmailTemplateLocale} locale - Template locale
     * @throws {AppwriteException}
     * @returns {Promise<Models.EmailTemplate>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteEmailTemplate(projectId: string, type: EmailTemplateType, locale: EmailTemplateLocale): Promise<Models.EmailTemplate>;
    deleteEmailTemplate(
        paramsOrFirst: { projectId: string, type: EmailTemplateType, locale: EmailTemplateLocale } | string,
        ...rest: [(EmailTemplateType)?, (EmailTemplateLocale)?]    
    ): Promise<Models.EmailTemplate> {
        let params: { projectId: string, type: EmailTemplateType, locale: EmailTemplateLocale };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { projectId: string, type: EmailTemplateType, locale: EmailTemplateLocale };
        } else {
            params = {
                projectId: paramsOrFirst as string,
                type: rest[0] as EmailTemplateType,
                locale: rest[1] as EmailTemplateLocale            
            };
        }
        
        const projectId = params.projectId;
        const type = params.type;
        const locale = params.locale;

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
     * Get a custom SMS template for the specified locale and type returning it's contents.
     *
     * @param {string} params.projectId - Project unique ID.
     * @param {SmsTemplateType} params.type - Template type
     * @param {SmsTemplateLocale} params.locale - Template locale
     * @throws {AppwriteException}
     * @returns {Promise<Models.SmsTemplate>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `Projects.getSMSTemplate` instead.
     */
    getSmsTemplate(params: { projectId: string, type: SmsTemplateType, locale: SmsTemplateLocale }): Promise<Models.SmsTemplate>;
    /**
     * Get a custom SMS template for the specified locale and type returning it's contents.
     *
     * @param {string} projectId - Project unique ID.
     * @param {SmsTemplateType} type - Template type
     * @param {SmsTemplateLocale} locale - Template locale
     * @throws {AppwriteException}
     * @returns {Promise<Models.SmsTemplate>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getSmsTemplate(projectId: string, type: SmsTemplateType, locale: SmsTemplateLocale): Promise<Models.SmsTemplate>;
    getSmsTemplate(
        paramsOrFirst: { projectId: string, type: SmsTemplateType, locale: SmsTemplateLocale } | string,
        ...rest: [(SmsTemplateType)?, (SmsTemplateLocale)?]    
    ): Promise<Models.SmsTemplate> {
        let params: { projectId: string, type: SmsTemplateType, locale: SmsTemplateLocale };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { projectId: string, type: SmsTemplateType, locale: SmsTemplateLocale };
        } else {
            params = {
                projectId: paramsOrFirst as string,
                type: rest[0] as SmsTemplateType,
                locale: rest[1] as SmsTemplateLocale            
            };
        }
        
        const projectId = params.projectId;
        const type = params.type;
        const locale = params.locale;

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
     * Get a custom SMS template for the specified locale and type returning it's contents.
     *
     * @param {string} params.projectId - Project unique ID.
     * @param {SmsTemplateType} params.type - Template type
     * @param {SmsTemplateLocale} params.locale - Template locale
     * @throws {AppwriteException}
     * @returns {Promise<Models.SmsTemplate>}
     */
    getSMSTemplate(params: { projectId: string, type: SmsTemplateType, locale: SmsTemplateLocale }): Promise<Models.SmsTemplate>;
    /**
     * Get a custom SMS template for the specified locale and type returning it's contents.
     *
     * @param {string} projectId - Project unique ID.
     * @param {SmsTemplateType} type - Template type
     * @param {SmsTemplateLocale} locale - Template locale
     * @throws {AppwriteException}
     * @returns {Promise<Models.SmsTemplate>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getSMSTemplate(projectId: string, type: SmsTemplateType, locale: SmsTemplateLocale): Promise<Models.SmsTemplate>;
    getSMSTemplate(
        paramsOrFirst: { projectId: string, type: SmsTemplateType, locale: SmsTemplateLocale } | string,
        ...rest: [(SmsTemplateType)?, (SmsTemplateLocale)?]    
    ): Promise<Models.SmsTemplate> {
        let params: { projectId: string, type: SmsTemplateType, locale: SmsTemplateLocale };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { projectId: string, type: SmsTemplateType, locale: SmsTemplateLocale };
        } else {
            params = {
                projectId: paramsOrFirst as string,
                type: rest[0] as SmsTemplateType,
                locale: rest[1] as SmsTemplateLocale            
            };
        }
        
        const projectId = params.projectId;
        const type = params.type;
        const locale = params.locale;

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
     * @param {string} params.projectId - Project unique ID.
     * @param {SmsTemplateType} params.type - Template type
     * @param {SmsTemplateLocale} params.locale - Template locale
     * @param {string} params.message - Template message
     * @throws {AppwriteException}
     * @returns {Promise<Models.SmsTemplate>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `Projects.updateSMSTemplate` instead.
     */
    updateSmsTemplate(params: { projectId: string, type: SmsTemplateType, locale: SmsTemplateLocale, message: string }): Promise<Models.SmsTemplate>;
    /**
     * Update a custom SMS template for the specified locale and type. Use this endpoint to modify the content of your SMS templates. 
     *
     * @param {string} projectId - Project unique ID.
     * @param {SmsTemplateType} type - Template type
     * @param {SmsTemplateLocale} locale - Template locale
     * @param {string} message - Template message
     * @throws {AppwriteException}
     * @returns {Promise<Models.SmsTemplate>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateSmsTemplate(projectId: string, type: SmsTemplateType, locale: SmsTemplateLocale, message: string): Promise<Models.SmsTemplate>;
    updateSmsTemplate(
        paramsOrFirst: { projectId: string, type: SmsTemplateType, locale: SmsTemplateLocale, message: string } | string,
        ...rest: [(SmsTemplateType)?, (SmsTemplateLocale)?, (string)?]    
    ): Promise<Models.SmsTemplate> {
        let params: { projectId: string, type: SmsTemplateType, locale: SmsTemplateLocale, message: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { projectId: string, type: SmsTemplateType, locale: SmsTemplateLocale, message: string };
        } else {
            params = {
                projectId: paramsOrFirst as string,
                type: rest[0] as SmsTemplateType,
                locale: rest[1] as SmsTemplateLocale,
                message: rest[2] as string            
            };
        }
        
        const projectId = params.projectId;
        const type = params.type;
        const locale = params.locale;
        const message = params.message;

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
     * Update a custom SMS template for the specified locale and type. Use this endpoint to modify the content of your SMS templates. 
     *
     * @param {string} params.projectId - Project unique ID.
     * @param {SmsTemplateType} params.type - Template type
     * @param {SmsTemplateLocale} params.locale - Template locale
     * @param {string} params.message - Template message
     * @throws {AppwriteException}
     * @returns {Promise<Models.SmsTemplate>}
     */
    updateSMSTemplate(params: { projectId: string, type: SmsTemplateType, locale: SmsTemplateLocale, message: string }): Promise<Models.SmsTemplate>;
    /**
     * Update a custom SMS template for the specified locale and type. Use this endpoint to modify the content of your SMS templates. 
     *
     * @param {string} projectId - Project unique ID.
     * @param {SmsTemplateType} type - Template type
     * @param {SmsTemplateLocale} locale - Template locale
     * @param {string} message - Template message
     * @throws {AppwriteException}
     * @returns {Promise<Models.SmsTemplate>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateSMSTemplate(projectId: string, type: SmsTemplateType, locale: SmsTemplateLocale, message: string): Promise<Models.SmsTemplate>;
    updateSMSTemplate(
        paramsOrFirst: { projectId: string, type: SmsTemplateType, locale: SmsTemplateLocale, message: string } | string,
        ...rest: [(SmsTemplateType)?, (SmsTemplateLocale)?, (string)?]    
    ): Promise<Models.SmsTemplate> {
        let params: { projectId: string, type: SmsTemplateType, locale: SmsTemplateLocale, message: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { projectId: string, type: SmsTemplateType, locale: SmsTemplateLocale, message: string };
        } else {
            params = {
                projectId: paramsOrFirst as string,
                type: rest[0] as SmsTemplateType,
                locale: rest[1] as SmsTemplateLocale,
                message: rest[2] as string            
            };
        }
        
        const projectId = params.projectId;
        const type = params.type;
        const locale = params.locale;
        const message = params.message;

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
     * @param {string} params.projectId - Project unique ID.
     * @param {SmsTemplateType} params.type - Template type
     * @param {SmsTemplateLocale} params.locale - Template locale
     * @throws {AppwriteException}
     * @returns {Promise<Models.SmsTemplate>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `Projects.deleteSMSTemplate` instead.
     */
    deleteSmsTemplate(params: { projectId: string, type: SmsTemplateType, locale: SmsTemplateLocale }): Promise<Models.SmsTemplate>;
    /**
     * Reset a custom SMS template to its default value. This endpoint removes any custom message and restores the template to its original state. 
     *
     * @param {string} projectId - Project unique ID.
     * @param {SmsTemplateType} type - Template type
     * @param {SmsTemplateLocale} locale - Template locale
     * @throws {AppwriteException}
     * @returns {Promise<Models.SmsTemplate>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteSmsTemplate(projectId: string, type: SmsTemplateType, locale: SmsTemplateLocale): Promise<Models.SmsTemplate>;
    deleteSmsTemplate(
        paramsOrFirst: { projectId: string, type: SmsTemplateType, locale: SmsTemplateLocale } | string,
        ...rest: [(SmsTemplateType)?, (SmsTemplateLocale)?]    
    ): Promise<Models.SmsTemplate> {
        let params: { projectId: string, type: SmsTemplateType, locale: SmsTemplateLocale };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { projectId: string, type: SmsTemplateType, locale: SmsTemplateLocale };
        } else {
            params = {
                projectId: paramsOrFirst as string,
                type: rest[0] as SmsTemplateType,
                locale: rest[1] as SmsTemplateLocale            
            };
        }
        
        const projectId = params.projectId;
        const type = params.type;
        const locale = params.locale;

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
     * Reset a custom SMS template to its default value. This endpoint removes any custom message and restores the template to its original state. 
     *
     * @param {string} params.projectId - Project unique ID.
     * @param {SmsTemplateType} params.type - Template type
     * @param {SmsTemplateLocale} params.locale - Template locale
     * @throws {AppwriteException}
     * @returns {Promise<Models.SmsTemplate>}
     */
    deleteSMSTemplate(params: { projectId: string, type: SmsTemplateType, locale: SmsTemplateLocale }): Promise<Models.SmsTemplate>;
    /**
     * Reset a custom SMS template to its default value. This endpoint removes any custom message and restores the template to its original state. 
     *
     * @param {string} projectId - Project unique ID.
     * @param {SmsTemplateType} type - Template type
     * @param {SmsTemplateLocale} locale - Template locale
     * @throws {AppwriteException}
     * @returns {Promise<Models.SmsTemplate>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteSMSTemplate(projectId: string, type: SmsTemplateType, locale: SmsTemplateLocale): Promise<Models.SmsTemplate>;
    deleteSMSTemplate(
        paramsOrFirst: { projectId: string, type: SmsTemplateType, locale: SmsTemplateLocale } | string,
        ...rest: [(SmsTemplateType)?, (SmsTemplateLocale)?]    
    ): Promise<Models.SmsTemplate> {
        let params: { projectId: string, type: SmsTemplateType, locale: SmsTemplateLocale };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { projectId: string, type: SmsTemplateType, locale: SmsTemplateLocale };
        } else {
            params = {
                projectId: paramsOrFirst as string,
                type: rest[0] as SmsTemplateType,
                locale: rest[1] as SmsTemplateLocale            
            };
        }
        
        const projectId = params.projectId;
        const type = params.type;
        const locale = params.locale;

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
}
