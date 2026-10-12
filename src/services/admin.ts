import {
    AppwriteException,
    Client,
    type Payload,
    applyDefaults,
} from '../client';
import type { Models } from '../models';

import { PlatformResourceType } from '../enums/platform-resource-type';
import { ProjectResourceType } from '../enums/project-resource-type';
import { ThreatResourceType } from '../enums/threat-resource-type';
import { ThreatStatus } from '../enums/threat-status';
export class Admin {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Delete everything cached from the platform database in the region serving the request.
     *
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deletePlatformCache(): Promise<{}> {
        const apiPath = '/admin/cache/platform';
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('delete', uri, apiHeaders, apiPayload);
    }

    /**
     * Delete the cache of one platform resource, or of every resource of a type, in the region serving the request.
     *
     * @param {PlatformResourceType} params.resourceType - Resource type.
     * @param {string} params.resourceId - Resource ID. Leave empty to delete the cache of every resource of this type.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deletePlatformResourceCache(params: {
        resourceType: PlatformResourceType;
        resourceId?: string;
    }): Promise<{}>;
    /**
     * Delete the cache of one platform resource, or of every resource of a type, in the region serving the request.
     *
     * @param {PlatformResourceType} resourceType - Resource type.
     * @param {string} resourceId - Resource ID. Leave empty to delete the cache of every resource of this type.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deletePlatformResourceCache(
        resourceType: PlatformResourceType,
        resourceId?: string,
    ): Promise<{}>;
    deletePlatformResourceCache(
        paramsOrFirst:
            | { resourceType: PlatformResourceType; resourceId?: string }
            | PlatformResourceType,
        ...rest: [string?]
    ): Promise<{}> {
        let params: { resourceType: PlatformResourceType; resourceId?: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst) &&
            ('resourceType' in paramsOrFirst || 'resourceId' in paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                resourceType: PlatformResourceType;
                resourceId?: string;
            };
        } else {
            params = {
                resourceType: paramsOrFirst as PlatformResourceType,
                resourceId: rest[0] as string,
            };
        }

        const resourceType = params.resourceType;
        const resourceId = params.resourceId;

        if (typeof resourceType === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "resourceType"',
            );
        }
        const apiPath = '/admin/cache/platform/resources';
        const apiPayload: Payload = {};
        if (typeof resourceType !== 'undefined') {
            apiPayload['resourceType'] = resourceType;
        }
        if (typeof resourceId !== 'undefined') {
            apiPayload['resourceId'] = resourceId;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('delete', uri, apiHeaders, apiPayload);
    }

    /**
     * Delete everything cached for a project. Send the request to the project's region.
     *
     * @param {string} params.projectId - Project ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteProjectCache(params: { projectId: string }): Promise<{}>;
    /**
     * Delete everything cached for a project. Send the request to the project's region.
     *
     * @param {string} projectId - Project ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteProjectCache(projectId: string): Promise<{}>;
    deleteProjectCache(
        paramsOrFirst: { projectId: string } | string,
    ): Promise<{}> {
        let params: { projectId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as { projectId: string };
        } else {
            params = {
                projectId: paramsOrFirst as string,
            };
        }

        const projectId = params.projectId;

        if (typeof projectId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "projectId"',
            );
        }
        const apiPath = '/admin/cache/project';
        const apiPayload: Payload = {};
        if (typeof projectId !== 'undefined') {
            apiPayload['projectId'] = projectId;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('delete', uri, apiHeaders, apiPayload);
    }

    /**
     * Delete the cache of one project resource, or of every resource of a type. Send the request to the project's region.
     *
     * @param {string} params.projectId - Project ID.
     * @param {ProjectResourceType} params.resourceType - Resource type.
     * @param {string} params.resourceId - Resource ID. Leave empty to delete the cache of every resource of this type.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteProjectResourceCache(params: {
        projectId: string;
        resourceType: ProjectResourceType;
        resourceId?: string;
    }): Promise<{}>;
    /**
     * Delete the cache of one project resource, or of every resource of a type. Send the request to the project's region.
     *
     * @param {string} projectId - Project ID.
     * @param {ProjectResourceType} resourceType - Resource type.
     * @param {string} resourceId - Resource ID. Leave empty to delete the cache of every resource of this type.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteProjectResourceCache(
        projectId: string,
        resourceType: ProjectResourceType,
        resourceId?: string,
    ): Promise<{}>;
    deleteProjectResourceCache(
        paramsOrFirst:
            | {
                  projectId: string;
                  resourceType: ProjectResourceType;
                  resourceId?: string;
              }
            | string,
        ...rest: [ProjectResourceType?, string?]
    ): Promise<{}> {
        let params: {
            projectId: string;
            resourceType: ProjectResourceType;
            resourceId?: string;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                projectId: string;
                resourceType: ProjectResourceType;
                resourceId?: string;
            };
        } else {
            params = {
                projectId: paramsOrFirst as string,
                resourceType: rest[0] as ProjectResourceType,
                resourceId: rest[1] as string,
            };
        }

        const projectId = params.projectId;
        const resourceType = params.resourceType;
        const resourceId = params.resourceId;

        if (typeof projectId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "projectId"',
            );
        }
        if (typeof resourceType === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "resourceType"',
            );
        }
        const apiPath = '/admin/cache/project/resources';
        const apiPayload: Payload = {};
        if (typeof projectId !== 'undefined') {
            apiPayload['projectId'] = projectId;
        }
        if (typeof resourceType !== 'undefined') {
            apiPayload['resourceType'] = resourceType;
        }
        if (typeof resourceId !== 'undefined') {
            apiPayload['resourceId'] = resourceId;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('delete', uri, apiHeaders, apiPayload);
    }

    /**
     * List threats recorded across the platform. Use queries to narrow the list to a project, a resource type, a threat type or a triage status.
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: projectId, teamId, region, resourceType, resourceId, type, status
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ThreatList>}
     */
    listThreats(params?: {
        queries?: string[];
        total?: boolean;
    }): Promise<Models.ThreatList>;
    /**
     * List threats recorded across the platform. Use queries to narrow the list to a project, a resource type, a threat type or a triage status.
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: projectId, teamId, region, resourceType, resourceId, type, status
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ThreatList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listThreats(
        queries?: string[],
        total?: boolean,
    ): Promise<Models.ThreatList>;
    listThreats(
        paramsOrFirst?: { queries?: string[]; total?: boolean } | string[],
        ...rest: [boolean?]
    ): Promise<Models.ThreatList> {
        let params: { queries?: string[]; total?: boolean };

        if (
            (typeof paramsOrFirst === 'undefined' && rest.length === 0) ||
            (paramsOrFirst &&
                typeof paramsOrFirst === 'object' &&
                !Array.isArray(paramsOrFirst))
        ) {
            params = (paramsOrFirst || {}) as {
                queries?: string[];
                total?: boolean;
            };
        } else {
            params = {
                queries: paramsOrFirst as string[],
                total: rest[0] as boolean,
            };
        }

        const queries = params.queries;
        const total = params.total;

        const apiPath = '/admin/threats';
        const apiPayload: Payload = {};
        if (typeof queries !== 'undefined') {
            apiPayload['queries'] = queries;
        }
        if (typeof total !== 'undefined') {
            apiPayload['total'] = total;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            accept: 'application/json',
        };

        const request = this.client.call('get', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'threatList',
            models: {
                threatList: {
                    defaults: {
                        total: 0,
                    },
                    properties: {
                        threats: {
                            items: 'threat',
                        },
                    },
                },
                threat: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        projectId: '',
                        teamId: '',
                        userId: '',
                        region: '',
                        resourceType: '',
                        resourceId: '',
                        resourceCreatedAt: '',
                        type: '',
                        status: 'open',
                        description: '',
                        createdBy: '',
                        hashSignature: '',
                        analysisVerdict: '',
                        analysisFiles: [],
                        scanDomain: '',
                        scanVerdict: '',
                        scanSeverity: '',
                        scanReportId: '',
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Record a threat an operator found on a project resource. The record is of type `manual`; the other types are written by the threats worker's detectors.
     *
     * @param {string} params.projectId - Project ID.
     * @param {ThreatResourceType} params.resourceType - Type of the flagged resource.
     * @param {string} params.resourceId - ID of the flagged resource.
     * @param {string} params.description - What was found, in the operator's words.
     * @param {ThreatStatus} params.status - Triage status to record the threat with. `open` by default; `resolved` or `dismissed` for a threat already dealt with.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Threat>}
     */
    createThreat(params: {
        projectId: string;
        resourceType: ThreatResourceType;
        resourceId: string;
        description?: string;
        status?: ThreatStatus;
    }): Promise<Models.Threat>;
    /**
     * Record a threat an operator found on a project resource. The record is of type `manual`; the other types are written by the threats worker's detectors.
     *
     * @param {string} projectId - Project ID.
     * @param {ThreatResourceType} resourceType - Type of the flagged resource.
     * @param {string} resourceId - ID of the flagged resource.
     * @param {string} description - What was found, in the operator's words.
     * @param {ThreatStatus} status - Triage status to record the threat with. `open` by default; `resolved` or `dismissed` for a threat already dealt with.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Threat>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createThreat(
        projectId: string,
        resourceType: ThreatResourceType,
        resourceId: string,
        description?: string,
        status?: ThreatStatus,
    ): Promise<Models.Threat>;
    createThreat(
        paramsOrFirst:
            | {
                  projectId: string;
                  resourceType: ThreatResourceType;
                  resourceId: string;
                  description?: string;
                  status?: ThreatStatus;
              }
            | string,
        ...rest: [ThreatResourceType?, string?, string?, ThreatStatus?]
    ): Promise<Models.Threat> {
        let params: {
            projectId: string;
            resourceType: ThreatResourceType;
            resourceId: string;
            description?: string;
            status?: ThreatStatus;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                projectId: string;
                resourceType: ThreatResourceType;
                resourceId: string;
                description?: string;
                status?: ThreatStatus;
            };
        } else {
            params = {
                projectId: paramsOrFirst as string,
                resourceType: rest[0] as ThreatResourceType,
                resourceId: rest[1] as string,
                description: rest[2] as string,
                status: rest[3] as ThreatStatus,
            };
        }

        const projectId = params.projectId;
        const resourceType = params.resourceType;
        const resourceId = params.resourceId;
        const description = params.description;
        const status = params.status;

        if (typeof projectId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "projectId"',
            );
        }
        if (typeof resourceType === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "resourceType"',
            );
        }
        if (typeof resourceId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "resourceId"',
            );
        }
        const apiPath = '/admin/threats';
        const apiPayload: Payload = {};
        if (typeof projectId !== 'undefined') {
            apiPayload['projectId'] = projectId;
        }
        if (typeof resourceType !== 'undefined') {
            apiPayload['resourceType'] = resourceType;
        }
        if (typeof resourceId !== 'undefined') {
            apiPayload['resourceId'] = resourceId;
        }
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        if (typeof status !== 'undefined') {
            apiPayload['status'] = status;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        const request = this.client.call('post', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'threat',
            models: {
                threat: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        projectId: '',
                        teamId: '',
                        userId: '',
                        region: '',
                        resourceType: '',
                        resourceId: '',
                        resourceCreatedAt: '',
                        type: '',
                        status: 'open',
                        description: '',
                        createdBy: '',
                        hashSignature: '',
                        analysisVerdict: '',
                        analysisFiles: [],
                        scanDomain: '',
                        scanVerdict: '',
                        scanSeverity: '',
                        scanReportId: '',
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Get a threat by its unique ID, including the detection details.
     *
     * @param {string} params.threatId - Threat ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Threat>}
     */
    getThreat(params: { threatId: string }): Promise<Models.Threat>;
    /**
     * Get a threat by its unique ID, including the detection details.
     *
     * @param {string} threatId - Threat ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Threat>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getThreat(threatId: string): Promise<Models.Threat>;
    getThreat(
        paramsOrFirst: { threatId: string } | string,
    ): Promise<Models.Threat> {
        let params: { threatId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as { threatId: string };
        } else {
            params = {
                threatId: paramsOrFirst as string,
            };
        }

        const threatId = params.threatId;

        if (typeof threatId === 'undefined' || threatId === '') {
            throw new AppwriteException(
                'Missing required parameter: "threatId"',
            );
        }
        const apiPath = '/admin/threats/{threatId}'.replace(
            '{threatId}',
            encodeURIComponent(String(threatId)),
        );
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            accept: 'application/json',
        };

        const request = this.client.call('get', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'threat',
            models: {
                threat: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        projectId: '',
                        teamId: '',
                        userId: '',
                        region: '',
                        resourceType: '',
                        resourceId: '',
                        resourceCreatedAt: '',
                        type: '',
                        status: 'open',
                        description: '',
                        createdBy: '',
                        hashSignature: '',
                        analysisVerdict: '',
                        analysisFiles: [],
                        scanDomain: '',
                        scanVerdict: '',
                        scanSeverity: '',
                        scanReportId: '',
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Delete a threat record.
     *
     * @param {string} params.threatId - Threat ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteThreat(params: { threatId: string }): Promise<{}>;
    /**
     * Delete a threat record.
     *
     * @param {string} threatId - Threat ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteThreat(threatId: string): Promise<{}>;
    deleteThreat(paramsOrFirst: { threatId: string } | string): Promise<{}> {
        let params: { threatId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as { threatId: string };
        } else {
            params = {
                threatId: paramsOrFirst as string,
            };
        }

        const threatId = params.threatId;

        if (typeof threatId === 'undefined' || threatId === '') {
            throw new AppwriteException(
                'Missing required parameter: "threatId"',
            );
        }
        const apiPath = '/admin/threats/{threatId}'.replace(
            '{threatId}',
            encodeURIComponent(String(threatId)),
        );
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('delete', uri, apiHeaders, apiPayload);
    }

    /**
     * Triage a threat: mark it resolved once the resource was dealt with, dismissed for a false positive, or open to revisit it.
     *
     * @param {string} params.threatId - Threat ID.
     * @param {ThreatStatus} params.status - Triage status. `resolved` once the resource was dealt with, `dismissed` for a false positive, `open` to reopen.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Threat>}
     */
    updateThreatStatus(params: {
        threatId: string;
        status: ThreatStatus;
    }): Promise<Models.Threat>;
    /**
     * Triage a threat: mark it resolved once the resource was dealt with, dismissed for a false positive, or open to revisit it.
     *
     * @param {string} threatId - Threat ID.
     * @param {ThreatStatus} status - Triage status. `resolved` once the resource was dealt with, `dismissed` for a false positive, `open` to reopen.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Threat>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateThreatStatus(
        threatId: string,
        status: ThreatStatus,
    ): Promise<Models.Threat>;
    updateThreatStatus(
        paramsOrFirst: { threatId: string; status: ThreatStatus } | string,
        ...rest: [ThreatStatus?]
    ): Promise<Models.Threat> {
        let params: { threatId: string; status: ThreatStatus };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                threatId: string;
                status: ThreatStatus;
            };
        } else {
            params = {
                threatId: paramsOrFirst as string,
                status: rest[0] as ThreatStatus,
            };
        }

        const threatId = params.threatId;
        const status = params.status;

        if (typeof threatId === 'undefined' || threatId === '') {
            throw new AppwriteException(
                'Missing required parameter: "threatId"',
            );
        }
        if (typeof status === 'undefined') {
            throw new AppwriteException('Missing required parameter: "status"');
        }
        const apiPath = '/admin/threats/{threatId}/status'.replace(
            '{threatId}',
            encodeURIComponent(String(threatId)),
        );
        const apiPayload: Payload = {};
        if (typeof status !== 'undefined') {
            apiPayload['status'] = status;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        const request = this.client.call('patch', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'threat',
            models: {
                threat: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        projectId: '',
                        teamId: '',
                        userId: '',
                        region: '',
                        resourceType: '',
                        resourceId: '',
                        resourceCreatedAt: '',
                        type: '',
                        status: 'open',
                        description: '',
                        createdBy: '',
                        hashSignature: '',
                        analysisVerdict: '',
                        analysisFiles: [],
                        scanDomain: '',
                        scanVerdict: '',
                        scanSeverity: '',
                        scanReportId: '',
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }
}
