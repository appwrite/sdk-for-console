import { Service } from '../service';
import { AppwriteException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { Region } from '../enums/region';
import { AuthMethod } from '../enums/auth-method';
import { Scopes } from '../enums/scopes';
import { OAuthProvider } from '../enums/o-auth-provider';
import { ResourceType } from '../enums/resource-type';
import { Status } from '../enums/status';

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
}
