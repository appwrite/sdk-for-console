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
import { BlockResourceType } from '../enums/block-resource-type';
import { BlockMode } from '../enums/block-mode';
import { CreditStatus } from '../enums/credit-status';
import { PlanEffective } from '../enums/plan-effective';
export class Admin {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Delete everything cached from the platform database, in every region.
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
     * Delete the cache of one platform resource, or of every resource of a type, in every region.
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
     * Delete the cache of one platform resource, or of every resource of a type, in every region.
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
     * Delete everything cached for a project, in the project's region.
     *
     * @param {string} params.projectId - Project ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteProjectCache(params: { projectId: string }): Promise<{}>;
    /**
     * Delete everything cached for a project, in the project's region.
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
     * Delete the cache of one project resource, or of every resource of a type, in the project's region.
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
     * Delete the cache of one project resource, or of every resource of a type, in the project's region.
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
                        threats: [],
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

    /**
     * List the blocks placed on projects across the platform, expired ones included. Use queries to narrow the list to a project, a resource type or resource, a mode, or the threat whose detection placed the block.
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: projectId, resourceType, resourceId, mode, expiredAt, threatId
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AdminBlockList>}
     */
    listBlocks(params?: {
        queries?: string[];
        total?: boolean;
    }): Promise<Models.AdminBlockList>;
    /**
     * List the blocks placed on projects across the platform, expired ones included. Use queries to narrow the list to a project, a resource type or resource, a mode, or the threat whose detection placed the block.
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: projectId, resourceType, resourceId, mode, expiredAt, threatId
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AdminBlockList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listBlocks(
        queries?: string[],
        total?: boolean,
    ): Promise<Models.AdminBlockList>;
    listBlocks(
        paramsOrFirst?: { queries?: string[]; total?: boolean } | string[],
        ...rest: [boolean?]
    ): Promise<Models.AdminBlockList> {
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

        const apiPath = '/admin/blocks';
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
            root: 'adminBlockList',
            models: {
                adminBlockList: {
                    defaults: {
                        total: 0,
                        blocks: [],
                    },
                    properties: {
                        blocks: {
                            items: 'adminBlock',
                        },
                    },
                },
                adminBlock: {
                    defaults: {
                        $createdAt: '',
                        resourceType: '',
                        resourceId: '',
                        mode: 'full',
                        $id: '',
                        $updatedAt: '',
                        projectId: '',
                        reason: '',
                        threatId: '',
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Block a project's traffic to a resource type, to one resource of that type, or to the whole project with `projects`. A `full` block refuses every request to the resource; a `readOnly` block, for databases only, refuses writes and still serves reads. The block holds in every region until it is deleted or `expiredAt` passes. The reason is for operators; the project's owners see the block without it.
     *
     * @param {string} params.projectId - Project ID.
     * @param {BlockResourceType} params.resourceType - Type of the resource to block. `projects` blocks the whole project.
     * @param {string} params.resourceId - ID of the resource to block. Leave empty to block every resource of the type.
     * @param {BlockMode} params.mode - Block mode. `full` refuses reads and writes; `readOnly`, for databases only, refuses writes and serves reads.
     * @param {string} params.reason - Why the block was placed, for operators. The project's owners never see it.
     * @param {string} params.expiredAt - When the block lifts itself, in ISO 8601 format. Leave empty for a block that holds until it is deleted.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AdminBlock>}
     */
    createBlock(params: {
        projectId: string;
        resourceType: BlockResourceType;
        resourceId?: string;
        mode?: BlockMode;
        reason?: string;
        expiredAt?: string;
    }): Promise<Models.AdminBlock>;
    /**
     * Block a project's traffic to a resource type, to one resource of that type, or to the whole project with `projects`. A `full` block refuses every request to the resource; a `readOnly` block, for databases only, refuses writes and still serves reads. The block holds in every region until it is deleted or `expiredAt` passes. The reason is for operators; the project's owners see the block without it.
     *
     * @param {string} projectId - Project ID.
     * @param {BlockResourceType} resourceType - Type of the resource to block. `projects` blocks the whole project.
     * @param {string} resourceId - ID of the resource to block. Leave empty to block every resource of the type.
     * @param {BlockMode} mode - Block mode. `full` refuses reads and writes; `readOnly`, for databases only, refuses writes and serves reads.
     * @param {string} reason - Why the block was placed, for operators. The project's owners never see it.
     * @param {string} expiredAt - When the block lifts itself, in ISO 8601 format. Leave empty for a block that holds until it is deleted.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AdminBlock>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createBlock(
        projectId: string,
        resourceType: BlockResourceType,
        resourceId?: string,
        mode?: BlockMode,
        reason?: string,
        expiredAt?: string,
    ): Promise<Models.AdminBlock>;
    createBlock(
        paramsOrFirst:
            | {
                  projectId: string;
                  resourceType: BlockResourceType;
                  resourceId?: string;
                  mode?: BlockMode;
                  reason?: string;
                  expiredAt?: string;
              }
            | string,
        ...rest: [BlockResourceType?, string?, BlockMode?, string?, string?]
    ): Promise<Models.AdminBlock> {
        let params: {
            projectId: string;
            resourceType: BlockResourceType;
            resourceId?: string;
            mode?: BlockMode;
            reason?: string;
            expiredAt?: string;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                projectId: string;
                resourceType: BlockResourceType;
                resourceId?: string;
                mode?: BlockMode;
                reason?: string;
                expiredAt?: string;
            };
        } else {
            params = {
                projectId: paramsOrFirst as string,
                resourceType: rest[0] as BlockResourceType,
                resourceId: rest[1] as string,
                mode: rest[2] as BlockMode,
                reason: rest[3] as string,
                expiredAt: rest[4] as string,
            };
        }

        const projectId = params.projectId;
        const resourceType = params.resourceType;
        const resourceId = params.resourceId;
        const mode = params.mode;
        const reason = params.reason;
        const expiredAt = params.expiredAt;

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
        const apiPath = '/admin/blocks';
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
        if (typeof mode !== 'undefined') {
            apiPayload['mode'] = mode;
        }
        if (typeof reason !== 'undefined') {
            apiPayload['reason'] = reason;
        }
        if (typeof expiredAt !== 'undefined') {
            apiPayload['expiredAt'] = expiredAt;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        const request = this.client.call('post', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'adminBlock',
            models: {
                adminBlock: {
                    defaults: {
                        $createdAt: '',
                        resourceType: '',
                        resourceId: '',
                        mode: 'full',
                        $id: '',
                        $updatedAt: '',
                        projectId: '',
                        reason: '',
                        threatId: '',
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Get a block by its unique ID, with the reason it was placed for and the threat that placed it, if a detection did.
     *
     * @param {string} params.blockId - Block ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AdminBlock>}
     */
    getBlock(params: { blockId: string }): Promise<Models.AdminBlock>;
    /**
     * Get a block by its unique ID, with the reason it was placed for and the threat that placed it, if a detection did.
     *
     * @param {string} blockId - Block ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AdminBlock>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getBlock(blockId: string): Promise<Models.AdminBlock>;
    getBlock(
        paramsOrFirst: { blockId: string } | string,
    ): Promise<Models.AdminBlock> {
        let params: { blockId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as { blockId: string };
        } else {
            params = {
                blockId: paramsOrFirst as string,
            };
        }

        const blockId = params.blockId;

        if (typeof blockId === 'undefined' || blockId === '') {
            throw new AppwriteException(
                'Missing required parameter: "blockId"',
            );
        }
        const apiPath = '/admin/blocks/{blockId}'.replace(
            '{blockId}',
            encodeURIComponent(String(blockId)),
        );
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            accept: 'application/json',
        };

        const request = this.client.call('get', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'adminBlock',
            models: {
                adminBlock: {
                    defaults: {
                        $createdAt: '',
                        resourceType: '',
                        resourceId: '',
                        mode: 'full',
                        $id: '',
                        $updatedAt: '',
                        projectId: '',
                        reason: '',
                        threatId: '',
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Lift a block. The project's traffic to the resource resumes with its next request, in every region.
     *
     * @param {string} params.blockId - Block ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteBlock(params: { blockId: string }): Promise<{}>;
    /**
     * Lift a block. The project's traffic to the resource resumes with its next request, in every region.
     *
     * @param {string} blockId - Block ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteBlock(blockId: string): Promise<{}>;
    deleteBlock(paramsOrFirst: { blockId: string } | string): Promise<{}> {
        let params: { blockId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as { blockId: string };
        } else {
            params = {
                blockId: paramsOrFirst as string,
            };
        }

        const blockId = params.blockId;

        if (typeof blockId === 'undefined' || blockId === '') {
            throw new AppwriteException(
                'Missing required parameter: "blockId"',
            );
        }
        const apiPath = '/admin/blocks/{blockId}'.replace(
            '{blockId}',
            encodeURIComponent(String(blockId)),
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
     * List the credits granted across the platform, spent, expired and disabled ones included. Use queries to narrow the list to an organization, a coupon, a status or an expiry window.
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: teamId, couponId, credits, expiration, status
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AdminCreditList>}
     */
    listCredits(params?: {
        queries?: string[];
        total?: boolean;
    }): Promise<Models.AdminCreditList>;
    /**
     * List the credits granted across the platform, spent, expired and disabled ones included. Use queries to narrow the list to an organization, a coupon, a status or an expiry window.
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: teamId, couponId, credits, expiration, status
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AdminCreditList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listCredits(
        queries?: string[],
        total?: boolean,
    ): Promise<Models.AdminCreditList>;
    listCredits(
        paramsOrFirst?: { queries?: string[]; total?: boolean } | string[],
        ...rest: [boolean?]
    ): Promise<Models.AdminCreditList> {
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

        const apiPath = '/admin/credits';
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
            root: 'adminCreditList',
            models: {
                adminCreditList: {
                    defaults: {
                        total: 0,
                        credits: [],
                    },
                    properties: {
                        credits: {
                            items: 'credit',
                        },
                    },
                },
                credit: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        $permissions: [],
                        couponId: '',
                        userId: '',
                        teamId: '',
                        credits: 0,
                        total: 0,
                        expiration: '',
                        status: '',
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Grant an organization credits: a balance its invoices draw on before its card is charged, from the next invoice until the expiration passes. The organization's plan has to apply credits. The reason is kept in the audit log.
     *
     * @param {string} params.teamId - Organization ID.
     * @param {number} params.credits - Amount to grant, in USD.
     * @param {string} params.expiration - When the balance expires, in ISO 8601 format. Must be in the future.
     * @param {string} params.reason - Why the credits are granted, for the audit log.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Credit>}
     */
    createCredit(params: {
        teamId: string;
        credits: number;
        expiration: string;
        reason?: string;
    }): Promise<Models.Credit>;
    /**
     * Grant an organization credits: a balance its invoices draw on before its card is charged, from the next invoice until the expiration passes. The organization's plan has to apply credits. The reason is kept in the audit log.
     *
     * @param {string} teamId - Organization ID.
     * @param {number} credits - Amount to grant, in USD.
     * @param {string} expiration - When the balance expires, in ISO 8601 format. Must be in the future.
     * @param {string} reason - Why the credits are granted, for the audit log.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Credit>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createCredit(
        teamId: string,
        credits: number,
        expiration: string,
        reason?: string,
    ): Promise<Models.Credit>;
    createCredit(
        paramsOrFirst:
            | {
                  teamId: string;
                  credits: number;
                  expiration: string;
                  reason?: string;
              }
            | string,
        ...rest: [number?, string?, string?]
    ): Promise<Models.Credit> {
        let params: {
            teamId: string;
            credits: number;
            expiration: string;
            reason?: string;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                teamId: string;
                credits: number;
                expiration: string;
                reason?: string;
            };
        } else {
            params = {
                teamId: paramsOrFirst as string,
                credits: rest[0] as number,
                expiration: rest[1] as string,
                reason: rest[2] as string,
            };
        }

        const teamId = params.teamId;
        const credits = params.credits;
        const expiration = params.expiration;
        const reason = params.reason;

        if (typeof teamId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "teamId"');
        }
        if (typeof credits === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "credits"',
            );
        }
        if (typeof expiration === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "expiration"',
            );
        }
        const apiPath = '/admin/credits';
        const apiPayload: Payload = {};
        if (typeof teamId !== 'undefined') {
            apiPayload['teamId'] = teamId;
        }
        if (typeof credits !== 'undefined') {
            apiPayload['credits'] = credits;
        }
        if (typeof expiration !== 'undefined') {
            apiPayload['expiration'] = expiration;
        }
        if (typeof reason !== 'undefined') {
            apiPayload['reason'] = reason;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        const request = this.client.call('post', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'credit',
            models: {
                credit: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        $permissions: [],
                        couponId: '',
                        userId: '',
                        teamId: '',
                        credits: 0,
                        total: 0,
                        expiration: '',
                        status: '',
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Get a credit by its unique ID: what it was granted as, what is left of it, when it expires and whether it is active.
     *
     * @param {string} params.creditId - Credit ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Credit>}
     */
    getCredit(params: { creditId: string }): Promise<Models.Credit>;
    /**
     * Get a credit by its unique ID: what it was granted as, what is left of it, when it expires and whether it is active.
     *
     * @param {string} creditId - Credit ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Credit>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getCredit(creditId: string): Promise<Models.Credit>;
    getCredit(
        paramsOrFirst: { creditId: string } | string,
    ): Promise<Models.Credit> {
        let params: { creditId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as { creditId: string };
        } else {
            params = {
                creditId: paramsOrFirst as string,
            };
        }

        const creditId = params.creditId;

        if (typeof creditId === 'undefined' || creditId === '') {
            throw new AppwriteException(
                'Missing required parameter: "creditId"',
            );
        }
        const apiPath = '/admin/credits/{creditId}'.replace(
            '{creditId}',
            encodeURIComponent(String(creditId)),
        );
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            accept: 'application/json',
        };

        const request = this.client.call('get', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'credit',
            models: {
                credit: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        $permissions: [],
                        couponId: '',
                        userId: '',
                        teamId: '',
                        credits: 0,
                        total: 0,
                        expiration: '',
                        status: '',
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Disable a credit to take back what is left of it: a disabled credit is not spent on invoices and does not count towards the organization's available balance, while what it already paid for stays recorded. Enable it to hand the remainder back.
     *
     * @param {string} params.creditId - Credit ID.
     * @param {CreditStatus} params.status - Credit status. `disabled` takes the remainder back, `active` hands it back.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Credit>}
     */
    updateCreditStatus(params: {
        creditId: string;
        status: CreditStatus;
    }): Promise<Models.Credit>;
    /**
     * Disable a credit to take back what is left of it: a disabled credit is not spent on invoices and does not count towards the organization's available balance, while what it already paid for stays recorded. Enable it to hand the remainder back.
     *
     * @param {string} creditId - Credit ID.
     * @param {CreditStatus} status - Credit status. `disabled` takes the remainder back, `active` hands it back.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Credit>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateCreditStatus(
        creditId: string,
        status: CreditStatus,
    ): Promise<Models.Credit>;
    updateCreditStatus(
        paramsOrFirst: { creditId: string; status: CreditStatus } | string,
        ...rest: [CreditStatus?]
    ): Promise<Models.Credit> {
        let params: { creditId: string; status: CreditStatus };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                creditId: string;
                status: CreditStatus;
            };
        } else {
            params = {
                creditId: paramsOrFirst as string,
                status: rest[0] as CreditStatus,
            };
        }

        const creditId = params.creditId;
        const status = params.status;

        if (typeof creditId === 'undefined' || creditId === '') {
            throw new AppwriteException(
                'Missing required parameter: "creditId"',
            );
        }
        if (typeof status === 'undefined') {
            throw new AppwriteException('Missing required parameter: "status"');
        }
        const apiPath = '/admin/credits/{creditId}/status'.replace(
            '{creditId}',
            encodeURIComponent(String(creditId)),
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
            root: 'credit',
            models: {
                credit: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        $permissions: [],
                        couponId: '',
                        userId: '',
                        teamId: '',
                        credits: 0,
                        total: 0,
                        expiration: '',
                        status: '',
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * List invoices across the platform in every status, the open cycle's pending ones included. Use queries to narrow the list to an organization, a status, a type, an amount or a date range.
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: teamId, aggregationId, type, amount, currency, from, to, dueAt, attempts, status, grossAmount
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.InvoiceList>}
     */
    listInvoices(params?: {
        queries?: string[];
        total?: boolean;
    }): Promise<Models.InvoiceList>;
    /**
     * List invoices across the platform in every status, the open cycle's pending ones included. Use queries to narrow the list to an organization, a status, a type, an amount or a date range.
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: teamId, aggregationId, type, amount, currency, from, to, dueAt, attempts, status, grossAmount
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.InvoiceList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listInvoices(
        queries?: string[],
        total?: boolean,
    ): Promise<Models.InvoiceList>;
    listInvoices(
        paramsOrFirst?: { queries?: string[]; total?: boolean } | string[],
        ...rest: [boolean?]
    ): Promise<Models.InvoiceList> {
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

        const apiPath = '/admin/invoices';
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
            root: 'invoiceList',
            models: {
                invoiceList: {
                    defaults: {
                        total: 0,
                        invoices: [],
                    },
                    properties: {
                        invoices: {
                            items: 'invoice',
                        },
                    },
                },
                invoice: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        $permissions: [],
                        teamId: '',
                        aggregationId: '',
                        plan: 'tier-0',
                        usage: [],
                        amount: 0,
                        tax: 0,
                        taxAmount: 0,
                        vat: 0,
                        vatAmount: 0,
                        grossAmount: 0,
                        creditsUsed: 0,
                        currency: 'USD',
                        status: '',
                        type: 'subscription',
                        from: '',
                        to: '',
                    },
                    properties: {
                        usage: {
                            items: 'usageResources',
                        },
                    },
                },
                usageResources: {
                    defaults: {
                        name: '',
                        value: 0,
                        amount: 0,
                        rate: 0,
                        desc: '',
                        resourceId: '',
                        type: '',
                        specification: '',
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Get an invoice by its unique ID: its amounts, status, period and last payment error. Its payment attempts are on the payments list, filtered by invoiceId.
     *
     * @param {string} params.invoiceId - Invoice ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Invoice>}
     */
    getInvoice(params: { invoiceId: string }): Promise<Models.Invoice>;
    /**
     * Get an invoice by its unique ID: its amounts, status, period and last payment error. Its payment attempts are on the payments list, filtered by invoiceId.
     *
     * @param {string} invoiceId - Invoice ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Invoice>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getInvoice(invoiceId: string): Promise<Models.Invoice>;
    getInvoice(
        paramsOrFirst: { invoiceId: string } | string,
    ): Promise<Models.Invoice> {
        let params: { invoiceId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as { invoiceId: string };
        } else {
            params = {
                invoiceId: paramsOrFirst as string,
            };
        }

        const invoiceId = params.invoiceId;

        if (typeof invoiceId === 'undefined' || invoiceId === '') {
            throw new AppwriteException(
                'Missing required parameter: "invoiceId"',
            );
        }
        const apiPath = '/admin/invoices/{invoiceId}'.replace(
            '{invoiceId}',
            encodeURIComponent(String(invoiceId)),
        );
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            accept: 'application/json',
        };

        const request = this.client.call('get', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'invoice',
            models: {
                invoice: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        $permissions: [],
                        teamId: '',
                        aggregationId: '',
                        plan: 'tier-0',
                        usage: [],
                        amount: 0,
                        tax: 0,
                        taxAmount: 0,
                        vat: 0,
                        vatAmount: 0,
                        grossAmount: 0,
                        creditsUsed: 0,
                        currency: 'USD',
                        status: '',
                        type: 'subscription',
                        from: '',
                        to: '',
                    },
                    properties: {
                        usage: {
                            items: 'usageResources',
                        },
                    },
                },
                usageResources: {
                    defaults: {
                        name: '',
                        value: 0,
                        amount: 0,
                        rate: 0,
                        desc: '',
                        resourceId: '',
                        type: '',
                        specification: '',
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Get an invoice as the PDF its organization receives, to download.
     *
     * @param {string} params.invoiceId - Invoice ID.
     * @throws {AppwriteException}
     * @returns {string}
     */
    getInvoiceDownload(params: { invoiceId: string }): string;
    /**
     * Get an invoice as the PDF its organization receives, to download.
     *
     * @param {string} invoiceId - Invoice ID.
     * @throws {AppwriteException}
     * @returns {string}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getInvoiceDownload(invoiceId: string): string;
    getInvoiceDownload(paramsOrFirst: { invoiceId: string } | string): string {
        let params: { invoiceId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as { invoiceId: string };
        } else {
            params = {
                invoiceId: paramsOrFirst as string,
            };
        }

        const invoiceId = params.invoiceId;

        if (typeof invoiceId === 'undefined' || invoiceId === '') {
            throw new AppwriteException(
                'Missing required parameter: "invoiceId"',
            );
        }
        const apiPath = '/admin/invoices/{invoiceId}/download'.replace(
            '{invoiceId}',
            encodeURIComponent(String(invoiceId)),
        );
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        apiPayload['project'] = this.client.config.project;

        for (const [key, value] of Object.entries(Client.flatten(apiPayload))) {
            uri.searchParams.append(key, value);
        }

        return uri.toString();
    }

    /**
     * Refund the payment that settled an invoice, in full or in part. The refund is made at the payment provider and recorded on the payment: a full refund, in one go or as the last of several partial ones, also marks the invoice refunded. A refund the provider still reports as pending counts as made, as it does in the provider's own refunded total. Only a succeeded or partially refunded payment can be refunded, and only up to what is left of it. Nothing else changes: the organization keeps its plan and anything the invoice paid for. The reason goes to the audit log.
     *
     * @param {string} params.invoiceId - Invoice ID.
     * @param {number} params.amount - Amount to refund, in the invoice currency. Leave empty to refund everything that is left of the payment.
     * @param {string} params.reason - Why the payment is refunded, for the audit log.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Payment>}
     */
    createInvoiceRefund(params: {
        invoiceId: string;
        amount?: number;
        reason?: string;
    }): Promise<Models.Payment>;
    /**
     * Refund the payment that settled an invoice, in full or in part. The refund is made at the payment provider and recorded on the payment: a full refund, in one go or as the last of several partial ones, also marks the invoice refunded. A refund the provider still reports as pending counts as made, as it does in the provider's own refunded total. Only a succeeded or partially refunded payment can be refunded, and only up to what is left of it. Nothing else changes: the organization keeps its plan and anything the invoice paid for. The reason goes to the audit log.
     *
     * @param {string} invoiceId - Invoice ID.
     * @param {number} amount - Amount to refund, in the invoice currency. Leave empty to refund everything that is left of the payment.
     * @param {string} reason - Why the payment is refunded, for the audit log.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Payment>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createInvoiceRefund(
        invoiceId: string,
        amount?: number,
        reason?: string,
    ): Promise<Models.Payment>;
    createInvoiceRefund(
        paramsOrFirst:
            { invoiceId: string; amount?: number; reason?: string } | string,
        ...rest: [number?, string?]
    ): Promise<Models.Payment> {
        let params: { invoiceId: string; amount?: number; reason?: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                invoiceId: string;
                amount?: number;
                reason?: string;
            };
        } else {
            params = {
                invoiceId: paramsOrFirst as string,
                amount: rest[0] as number,
                reason: rest[1] as string,
            };
        }

        const invoiceId = params.invoiceId;
        const amount = params.amount;
        const reason = params.reason;

        if (typeof invoiceId === 'undefined' || invoiceId === '') {
            throw new AppwriteException(
                'Missing required parameter: "invoiceId"',
            );
        }
        const apiPath = '/admin/invoices/{invoiceId}/refunds'.replace(
            '{invoiceId}',
            encodeURIComponent(String(invoiceId)),
        );
        const apiPayload: Payload = {};
        if (typeof amount !== 'undefined') {
            apiPayload['amount'] = amount;
        }
        if (typeof reason !== 'undefined') {
            apiPayload['reason'] = reason;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        const request = this.client.call('post', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'payment',
            models: {
                payment: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        invoiceId: '',
                        teamId: '',
                        providerPaymentId: '',
                        paymentMethodId: '',
                        amount: 0,
                        currency: '',
                        status: '',
                        date: '',
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * List every organization on the platform, whether or not the caller is a member. Draft organizations, which the console hides, are included. Use queries or the search term to narrow the list.
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, total, billingPlan, paymentMethodId, backupPaymentMethodId, platform
     * @param {string} params.search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OrganizationList<Preferences>>}
     */
    listOrganizations<
        Preferences extends Models.Preferences = Models.DefaultPreferences,
    >(params?: {
        queries?: string[];
        search?: string;
        total?: boolean;
    }): Promise<Models.OrganizationList<Preferences>>;
    /**
     * List every organization on the platform, whether or not the caller is a member. Draft organizations, which the console hides, are included. Use queries or the search term to narrow the list.
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, total, billingPlan, paymentMethodId, backupPaymentMethodId, platform
     * @param {string} search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OrganizationList<Preferences>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listOrganizations<
        Preferences extends Models.Preferences = Models.DefaultPreferences,
    >(
        queries?: string[],
        search?: string,
        total?: boolean,
    ): Promise<Models.OrganizationList<Preferences>>;
    listOrganizations<
        Preferences extends Models.Preferences = Models.DefaultPreferences,
    >(
        paramsOrFirst?:
            { queries?: string[]; search?: string; total?: boolean } | string[],
        ...rest: [string?, boolean?]
    ): Promise<Models.OrganizationList<Preferences>> {
        let params: { queries?: string[]; search?: string; total?: boolean };

        if (
            (typeof paramsOrFirst === 'undefined' && rest.length === 0) ||
            (paramsOrFirst &&
                typeof paramsOrFirst === 'object' &&
                !Array.isArray(paramsOrFirst))
        ) {
            params = (paramsOrFirst || {}) as {
                queries?: string[];
                search?: string;
                total?: boolean;
            };
        } else {
            params = {
                queries: paramsOrFirst as string[],
                search: rest[0] as string,
                total: rest[1] as boolean,
            };
        }

        const queries = params.queries;
        const search = params.search;
        const total = params.total;

        const apiPath = '/admin/organizations';
        const apiPayload: Payload = {};
        if (typeof queries !== 'undefined') {
            apiPayload['queries'] = queries;
        }
        if (typeof search !== 'undefined') {
            apiPayload['search'] = search;
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
            root: 'organizationList',
            models: {
                organizationList: {
                    defaults: {
                        total: 0,
                        teams: [],
                    },
                    properties: {
                        teams: {
                            items: 'organization',
                        },
                    },
                },
                organization: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        name: '',
                        total: 0,
                        budgetAlerts: [75],
                        billingPlan: 'tier-0',
                        billingPlanId: 'tier-0',
                        billingEmail: '',
                        status: 'draft',
                        markedForDeletion: false,
                        platform: 'appwrite',
                        projects: [],
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Get an organization by its unique ID, with its billing plan, status, budget, billing cycle dates and the payment method and billing address it is set up with.
     *
     * @param {string} params.organizationId - Organization ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Organization<Preferences>>}
     */
    getOrganization<
        Preferences extends Models.Preferences = Models.DefaultPreferences,
    >(params: {
        organizationId: string;
    }): Promise<Models.Organization<Preferences>>;
    /**
     * Get an organization by its unique ID, with its billing plan, status, budget, billing cycle dates and the payment method and billing address it is set up with.
     *
     * @param {string} organizationId - Organization ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Organization<Preferences>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getOrganization<
        Preferences extends Models.Preferences = Models.DefaultPreferences,
    >(organizationId: string): Promise<Models.Organization<Preferences>>;
    getOrganization<
        Preferences extends Models.Preferences = Models.DefaultPreferences,
    >(
        paramsOrFirst: { organizationId: string } | string,
    ): Promise<Models.Organization<Preferences>> {
        let params: { organizationId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as { organizationId: string };
        } else {
            params = {
                organizationId: paramsOrFirst as string,
            };
        }

        const organizationId = params.organizationId;

        if (typeof organizationId === 'undefined' || organizationId === '') {
            throw new AppwriteException(
                'Missing required parameter: "organizationId"',
            );
        }
        const apiPath = '/admin/organizations/{organizationId}'.replace(
            '{organizationId}',
            encodeURIComponent(String(organizationId)),
        );
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            accept: 'application/json',
        };

        const request = this.client.call('get', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'organization',
            models: {
                organization: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        name: '',
                        total: 0,
                        budgetAlerts: [75],
                        billingPlan: 'tier-0',
                        billingPlanId: 'tier-0',
                        billingEmail: '',
                        status: 'draft',
                        markedForDeletion: false,
                        platform: 'appwrite',
                        projects: [],
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * List an organization's billing aggregations: one per billing cycle, with the usage and the amount it added up to.
     *
     * @param {string} params.organizationId - Organization ID.
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: teamId, aggregationId, from, to
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AggregationTeamList>}
     */
    listOrganizationAggregations(params: {
        organizationId: string;
        queries?: string[];
        total?: boolean;
    }): Promise<Models.AggregationTeamList>;
    /**
     * List an organization's billing aggregations: one per billing cycle, with the usage and the amount it added up to.
     *
     * @param {string} organizationId - Organization ID.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: teamId, aggregationId, from, to
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AggregationTeamList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listOrganizationAggregations(
        organizationId: string,
        queries?: string[],
        total?: boolean,
    ): Promise<Models.AggregationTeamList>;
    listOrganizationAggregations(
        paramsOrFirst:
            | { organizationId: string; queries?: string[]; total?: boolean }
            | string,
        ...rest: [string[]?, boolean?]
    ): Promise<Models.AggregationTeamList> {
        let params: {
            organizationId: string;
            queries?: string[];
            total?: boolean;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                organizationId: string;
                queries?: string[];
                total?: boolean;
            };
        } else {
            params = {
                organizationId: paramsOrFirst as string,
                queries: rest[0] as string[],
                total: rest[1] as boolean,
            };
        }

        const organizationId = params.organizationId;
        const queries = params.queries;
        const total = params.total;

        if (typeof organizationId === 'undefined' || organizationId === '') {
            throw new AppwriteException(
                'Missing required parameter: "organizationId"',
            );
        }
        const apiPath =
            '/admin/organizations/{organizationId}/aggregations'.replace(
                '{organizationId}',
                encodeURIComponent(String(organizationId)),
            );
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
            root: 'aggregationTeamList',
            models: {
                aggregationTeamList: {
                    defaults: {
                        total: 0,
                        aggregations: [],
                    },
                    properties: {
                        aggregations: {
                            items: 'aggregationTeam',
                        },
                    },
                },
                aggregationTeam: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        $permissions: [],
                        from: '',
                        to: '',
                        usageStorage: 0,
                        usageTotalStorage: 0,
                        usageFilesStorage: 0,
                        usageDeploymentsStorage: 0,
                        usageBuildsStorage: 0,
                        usageDatabasesStorage: 0,
                        usageFunctionsStorage: 0,
                        usageSitesStorage: 0,
                        usageUsers: 0,
                        usageExecutions: 0,
                        usageBandwidth: 0,
                        usageRealtime: 0,
                        usageRealtimeMessages: 0,
                        usageRealtimeBandwidth: 0,
                        additionalMembers: 0,
                        additionalMemberAmount: 0,
                        additionalStorageAmount: 0,
                        additionalUsersAmount: 0,
                        additionalExecutionsAmount: 0,
                        additionalBandwidthAmount: 0,
                        additionalRealtimeAmount: 0,
                        plan: '',
                        amount: 0,
                        breakdown: [],
                        resources: [],
                    },
                    properties: {
                        breakdown: {
                            items: 'aggregationBreakdown',
                        },
                        resources: {
                            items: 'usageResources',
                        },
                    },
                },
                aggregationBreakdown: {
                    defaults: {
                        $id: '',
                        name: '',
                        region: 'fra',
                        amount: 0,
                        resources: [],
                    },
                    properties: {
                        resources: {
                            items: 'usageResources',
                        },
                    },
                },
                usageResources: {
                    defaults: {
                        name: '',
                        value: 0,
                        amount: 0,
                        rate: 0,
                        desc: '',
                        resourceId: '',
                        type: '',
                        specification: '',
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Recalculate an organization's current billing cycle now instead of at its next scheduled run: its aggregation, its pending invoice and the usage limits it has crossed. The recalculation runs in the background, on the project aggregations already recorded; recalculate a project first for its latest usage.
     *
     * @param {string} params.organizationId - Organization ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    createOrganizationAggregation(params: {
        organizationId: string;
    }): Promise<{}>;
    /**
     * Recalculate an organization's current billing cycle now instead of at its next scheduled run: its aggregation, its pending invoice and the usage limits it has crossed. The recalculation runs in the background, on the project aggregations already recorded; recalculate a project first for its latest usage.
     *
     * @param {string} organizationId - Organization ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createOrganizationAggregation(organizationId: string): Promise<{}>;
    createOrganizationAggregation(
        paramsOrFirst: { organizationId: string } | string,
    ): Promise<{}> {
        let params: { organizationId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as { organizationId: string };
        } else {
            params = {
                organizationId: paramsOrFirst as string,
            };
        }

        const organizationId = params.organizationId;

        if (typeof organizationId === 'undefined' || organizationId === '') {
            throw new AppwriteException(
                'Missing required parameter: "organizationId"',
            );
        }
        const apiPath =
            '/admin/organizations/{organizationId}/aggregations'.replace(
                '{organizationId}',
                encodeURIComponent(String(organizationId)),
            );
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('post', uri, apiHeaders, apiPayload);
    }

    /**
     * List the domains registered to an organization, with their nameservers, registrar and renewal details.
     *
     * @param {string} params.organizationId - Organization ID.
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: teamId, domain, registrar, nameservers, expire, renewal, autoRenewal, renewalPrice
     * @param {string} params.search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DomainsList>}
     */
    listOrganizationDomains(params: {
        organizationId: string;
        queries?: string[];
        search?: string;
        total?: boolean;
    }): Promise<Models.DomainsList>;
    /**
     * List the domains registered to an organization, with their nameservers, registrar and renewal details.
     *
     * @param {string} organizationId - Organization ID.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: teamId, domain, registrar, nameservers, expire, renewal, autoRenewal, renewalPrice
     * @param {string} search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DomainsList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listOrganizationDomains(
        organizationId: string,
        queries?: string[],
        search?: string,
        total?: boolean,
    ): Promise<Models.DomainsList>;
    listOrganizationDomains(
        paramsOrFirst:
            | {
                  organizationId: string;
                  queries?: string[];
                  search?: string;
                  total?: boolean;
              }
            | string,
        ...rest: [string[]?, string?, boolean?]
    ): Promise<Models.DomainsList> {
        let params: {
            organizationId: string;
            queries?: string[];
            search?: string;
            total?: boolean;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                organizationId: string;
                queries?: string[];
                search?: string;
                total?: boolean;
            };
        } else {
            params = {
                organizationId: paramsOrFirst as string,
                queries: rest[0] as string[],
                search: rest[1] as string,
                total: rest[2] as boolean,
            };
        }

        const organizationId = params.organizationId;
        const queries = params.queries;
        const search = params.search;
        const total = params.total;

        if (typeof organizationId === 'undefined' || organizationId === '') {
            throw new AppwriteException(
                'Missing required parameter: "organizationId"',
            );
        }
        const apiPath = '/admin/organizations/{organizationId}/domains'.replace(
            '{organizationId}',
            encodeURIComponent(String(organizationId)),
        );
        const apiPayload: Payload = {};
        if (typeof queries !== 'undefined') {
            apiPayload['queries'] = queries;
        }
        if (typeof search !== 'undefined') {
            apiPayload['search'] = search;
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
            root: 'domainsList',
            models: {
                domainsList: {
                    defaults: {
                        total: 0,
                        domains: [],
                    },
                    properties: {
                        domains: {
                            items: 'domain',
                        },
                    },
                },
                domain: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        domain: '',
                        registrar: '',
                        nameservers: '',
                        expire: '',
                        renewal: '',
                        autoRenewal: false,
                        renewalPrice: 0,
                        teamId: '',
                        dnsRecords: [],
                    },
                    properties: {
                        dnsRecords: {
                            items: 'dnsRecord',
                        },
                    },
                },
                dnsRecord: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        type: '',
                        name: '',
                        value: '',
                        ttl: 3600,
                        priority: 0,
                        lock: false,
                        weight: 0,
                        port: 0,
                        comment: '',
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * List an organization's members and pending invites with each member's name, email, phone, roles and MFA status.
     *
     * @param {string} params.organizationId - Organization ID.
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: userId, teamId, invited, joined, confirm, roles
     * @param {string} params.search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.MembershipList>}
     */
    listOrganizationMemberships(params: {
        organizationId: string;
        queries?: string[];
        search?: string;
        total?: boolean;
    }): Promise<Models.MembershipList>;
    /**
     * List an organization's members and pending invites with each member's name, email, phone, roles and MFA status.
     *
     * @param {string} organizationId - Organization ID.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: userId, teamId, invited, joined, confirm, roles
     * @param {string} search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.MembershipList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listOrganizationMemberships(
        organizationId: string,
        queries?: string[],
        search?: string,
        total?: boolean,
    ): Promise<Models.MembershipList>;
    listOrganizationMemberships(
        paramsOrFirst:
            | {
                  organizationId: string;
                  queries?: string[];
                  search?: string;
                  total?: boolean;
              }
            | string,
        ...rest: [string[]?, string?, boolean?]
    ): Promise<Models.MembershipList> {
        let params: {
            organizationId: string;
            queries?: string[];
            search?: string;
            total?: boolean;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                organizationId: string;
                queries?: string[];
                search?: string;
                total?: boolean;
            };
        } else {
            params = {
                organizationId: paramsOrFirst as string,
                queries: rest[0] as string[],
                search: rest[1] as string,
                total: rest[2] as boolean,
            };
        }

        const organizationId = params.organizationId;
        const queries = params.queries;
        const search = params.search;
        const total = params.total;

        if (typeof organizationId === 'undefined' || organizationId === '') {
            throw new AppwriteException(
                'Missing required parameter: "organizationId"',
            );
        }
        const apiPath =
            '/admin/organizations/{organizationId}/memberships'.replace(
                '{organizationId}',
                encodeURIComponent(String(organizationId)),
            );
        const apiPayload: Payload = {};
        if (typeof queries !== 'undefined') {
            apiPayload['queries'] = queries;
        }
        if (typeof search !== 'undefined') {
            apiPayload['search'] = search;
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
            root: 'membershipList',
            models: {
                membershipList: {
                    defaults: {
                        total: 0,
                        memberships: [],
                    },
                    properties: {
                        memberships: {
                            items: 'membership',
                        },
                    },
                },
                membership: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        userId: '',
                        userName: '',
                        userEmail: '',
                        userPhone: '',
                        teamId: '',
                        teamName: '',
                        invited: '',
                        joined: '',
                        confirm: false,
                        mfa: false,
                        userAccessedAt: '',
                        roles: [],
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Move an organization to another plan without collecting a payment or checking the new plan's limits. Applied `now`, the plan takes effect at once and the current billing cycle is re-priced on it; on a free plan the cycle's pending invoice is cancelled. A downgrade can instead wait for the `next-cycle`: the organization keeps its plan until the cycle closes and is billed for the next one on the new plan. Trial plans and plans of another platform are refused.
     *
     * @param {string} params.organizationId - Organization ID.
     * @param {string} params.billingPlan - Plan ID.
     * @param {PlanEffective} params.effective - When the plan takes effect. `next-cycle` is only for a downgrade.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Organization<Preferences>>}
     */
    updateOrganizationPlan<
        Preferences extends Models.Preferences = Models.DefaultPreferences,
    >(params: {
        organizationId: string;
        billingPlan: string;
        effective?: PlanEffective;
    }): Promise<Models.Organization<Preferences>>;
    /**
     * Move an organization to another plan without collecting a payment or checking the new plan's limits. Applied `now`, the plan takes effect at once and the current billing cycle is re-priced on it; on a free plan the cycle's pending invoice is cancelled. A downgrade can instead wait for the `next-cycle`: the organization keeps its plan until the cycle closes and is billed for the next one on the new plan. Trial plans and plans of another platform are refused.
     *
     * @param {string} organizationId - Organization ID.
     * @param {string} billingPlan - Plan ID.
     * @param {PlanEffective} effective - When the plan takes effect. `next-cycle` is only for a downgrade.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Organization<Preferences>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateOrganizationPlan<
        Preferences extends Models.Preferences = Models.DefaultPreferences,
    >(
        organizationId: string,
        billingPlan: string,
        effective?: PlanEffective,
    ): Promise<Models.Organization<Preferences>>;
    updateOrganizationPlan<
        Preferences extends Models.Preferences = Models.DefaultPreferences,
    >(
        paramsOrFirst:
            | {
                  organizationId: string;
                  billingPlan: string;
                  effective?: PlanEffective;
              }
            | string,
        ...rest: [string?, PlanEffective?]
    ): Promise<Models.Organization<Preferences>> {
        let params: {
            organizationId: string;
            billingPlan: string;
            effective?: PlanEffective;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                organizationId: string;
                billingPlan: string;
                effective?: PlanEffective;
            };
        } else {
            params = {
                organizationId: paramsOrFirst as string,
                billingPlan: rest[0] as string,
                effective: rest[1] as PlanEffective,
            };
        }

        const organizationId = params.organizationId;
        const billingPlan = params.billingPlan;
        const effective = params.effective;

        if (typeof organizationId === 'undefined' || organizationId === '') {
            throw new AppwriteException(
                'Missing required parameter: "organizationId"',
            );
        }
        if (typeof billingPlan === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "billingPlan"',
            );
        }
        const apiPath = '/admin/organizations/{organizationId}/plan'.replace(
            '{organizationId}',
            encodeURIComponent(String(organizationId)),
        );
        const apiPayload: Payload = {};
        if (typeof billingPlan !== 'undefined') {
            apiPayload['billingPlan'] = billingPlan;
        }
        if (typeof effective !== 'undefined') {
            apiPayload['effective'] = effective;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        const request = this.client.call('patch', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'organization',
            models: {
                organization: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        name: '',
                        total: 0,
                        budgetAlerts: [75],
                        billingPlan: 'tier-0',
                        billingPlanId: 'tier-0',
                        billingEmail: '',
                        status: 'draft',
                        markedForDeletion: false,
                        platform: 'appwrite',
                        projects: [],
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * List an organization's projects in every status. Archived projects, which the console hides, are included; filter on status to narrow the list.
     *
     * @param {string} params.organizationId - Organization ID.
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, teamId, labels, search, accessedAt, status, parentId
     * @param {string} params.search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ProjectList>}
     */
    listOrganizationProjects(params: {
        organizationId: string;
        queries?: string[];
        search?: string;
        total?: boolean;
    }): Promise<Models.ProjectList>;
    /**
     * List an organization's projects in every status. Archived projects, which the console hides, are included; filter on status to narrow the list.
     *
     * @param {string} organizationId - Organization ID.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, teamId, labels, search, accessedAt, status, parentId
     * @param {string} search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ProjectList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listOrganizationProjects(
        organizationId: string,
        queries?: string[],
        search?: string,
        total?: boolean,
    ): Promise<Models.ProjectList>;
    listOrganizationProjects(
        paramsOrFirst:
            | {
                  organizationId: string;
                  queries?: string[];
                  search?: string;
                  total?: boolean;
              }
            | string,
        ...rest: [string[]?, string?, boolean?]
    ): Promise<Models.ProjectList> {
        let params: {
            organizationId: string;
            queries?: string[];
            search?: string;
            total?: boolean;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                organizationId: string;
                queries?: string[];
                search?: string;
                total?: boolean;
            };
        } else {
            params = {
                organizationId: paramsOrFirst as string,
                queries: rest[0] as string[],
                search: rest[1] as string,
                total: rest[2] as boolean,
            };
        }

        const organizationId = params.organizationId;
        const queries = params.queries;
        const search = params.search;
        const total = params.total;

        if (typeof organizationId === 'undefined' || organizationId === '') {
            throw new AppwriteException(
                'Missing required parameter: "organizationId"',
            );
        }
        const apiPath =
            '/admin/organizations/{organizationId}/projects'.replace(
                '{organizationId}',
                encodeURIComponent(String(organizationId)),
            );
        const apiPayload: Payload = {};
        if (typeof queries !== 'undefined') {
            apiPayload['queries'] = queries;
        }
        if (typeof search !== 'undefined') {
            apiPayload['search'] = search;
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
            root: 'projectList',
            models: {
                projectList: {
                    defaults: {
                        total: 0,
                        projects: [],
                    },
                    properties: {
                        projects: {
                            items: 'project',
                        },
                    },
                },
                project: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        name: '',
                        teamId: '',
                        region: 'fra',
                        smtpEnabled: false,
                        smtpSenderName: '',
                        smtpSenderEmail: '',
                        smtpReplyToName: '',
                        smtpReplyToEmail: '',
                        smtpHost: '',
                        smtpPort: 0,
                        smtpUsername: '',
                        smtpPassword: '',
                        smtpSecure: '',
                        pingCount: 0,
                        pingedAt: '',
                        labels: [],
                        status: 'active',
                        onboarding: {},
                        authMethods: [],
                        services: [],
                        protocols: [],
                        blocks: [],
                        consoleAccessedAt: '',
                        wafEnabled: false,
                    },
                    properties: {
                        authMethods: {
                            items: 'projectAuthMethod',
                        },
                        services: {
                            items: 'projectService',
                        },
                        protocols: {
                            items: 'projectProtocol',
                        },
                        blocks: {
                            items: 'block',
                        },
                    },
                },
                projectAuthMethod: {
                    defaults: {
                        enabled: true,
                    },
                },
                projectService: {
                    defaults: {
                        enabled: true,
                    },
                },
                projectProtocol: {
                    defaults: {
                        enabled: true,
                    },
                },
                block: {
                    defaults: {
                        $createdAt: '',
                        resourceType: '',
                        resourceId: '',
                        mode: 'full',
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * List payment attempts across the platform. Filter on invoiceId for one invoice's attempts and refunds, on teamId for an organization's, or on status to find the failed ones.
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: invoiceId, teamId, providerPaymentId, paymentMethodId, amount, currency, status, date
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.PaymentList>}
     */
    listPayments(params?: {
        queries?: string[];
        total?: boolean;
    }): Promise<Models.PaymentList>;
    /**
     * List payment attempts across the platform. Filter on invoiceId for one invoice's attempts and refunds, on teamId for an organization's, or on status to find the failed ones.
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: invoiceId, teamId, providerPaymentId, paymentMethodId, amount, currency, status, date
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.PaymentList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listPayments(
        queries?: string[],
        total?: boolean,
    ): Promise<Models.PaymentList>;
    listPayments(
        paramsOrFirst?: { queries?: string[]; total?: boolean } | string[],
        ...rest: [boolean?]
    ): Promise<Models.PaymentList> {
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

        const apiPath = '/admin/payments';
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
            root: 'paymentList',
            models: {
                paymentList: {
                    defaults: {
                        total: 0,
                        payments: [],
                    },
                    properties: {
                        payments: {
                            items: 'payment',
                        },
                    },
                },
                payment: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        invoiceId: '',
                        teamId: '',
                        providerPaymentId: '',
                        paymentMethodId: '',
                        amount: 0,
                        currency: '',
                        status: '',
                        date: '',
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Get a payment attempt by its unique ID, with its provider ID, status and last error.
     *
     * @param {string} params.paymentId - Payment ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Payment>}
     */
    getPayment(params: { paymentId: string }): Promise<Models.Payment>;
    /**
     * Get a payment attempt by its unique ID, with its provider ID, status and last error.
     *
     * @param {string} paymentId - Payment ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Payment>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getPayment(paymentId: string): Promise<Models.Payment>;
    getPayment(
        paramsOrFirst: { paymentId: string } | string,
    ): Promise<Models.Payment> {
        let params: { paymentId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as { paymentId: string };
        } else {
            params = {
                paymentId: paramsOrFirst as string,
            };
        }

        const paymentId = params.paymentId;

        if (typeof paymentId === 'undefined' || paymentId === '') {
            throw new AppwriteException(
                'Missing required parameter: "paymentId"',
            );
        }
        const apiPath = '/admin/payments/{paymentId}'.replace(
            '{paymentId}',
            encodeURIComponent(String(paymentId)),
        );
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            accept: 'application/json',
        };

        const request = this.client.call('get', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'payment',
            models: {
                payment: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        invoiceId: '',
                        teamId: '',
                        providerPaymentId: '',
                        paymentMethodId: '',
                        amount: 0,
                        currency: '',
                        status: '',
                        date: '',
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Recalculate a project's usage for its organization's current billing cycle now instead of at its next scheduled run. The recalculation runs in the background, in the project's region; the organization's invoice picks it up at its own next recalculation.
     *
     * @param {string} params.projectId - Project ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    createProjectAggregation(params: { projectId: string }): Promise<{}>;
    /**
     * Recalculate a project's usage for its organization's current billing cycle now instead of at its next scheduled run. The recalculation runs in the background, in the project's region; the organization's invoice picks it up at its own next recalculation.
     *
     * @param {string} projectId - Project ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createProjectAggregation(projectId: string): Promise<{}>;
    createProjectAggregation(
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

        if (typeof projectId === 'undefined' || projectId === '') {
            throw new AppwriteException(
                'Missing required parameter: "projectId"',
            );
        }
        const apiPath = '/admin/projects/{projectId}/aggregations'.replace(
            '{projectId}',
            encodeURIComponent(String(projectId)),
        );
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('post', uri, apiHeaders, apiPayload);
    }

    /**
     * Mark a console user as a platform admin, giving them access to the admin API, or unmark them to remove it.
     *
     * @param {string} params.userId - Console user ID.
     * @param {boolean} params.admin - Whether the user is a platform admin. When true, the user can call the admin API.
     * @throws {AppwriteException}
     * @returns {Promise<Models.User<Preferences>>}
     */
    updateUserAdmin<
        Preferences extends Models.Preferences = Models.DefaultPreferences,
    >(params: {
        userId: string;
        admin: boolean;
    }): Promise<Models.User<Preferences>>;
    /**
     * Mark a console user as a platform admin, giving them access to the admin API, or unmark them to remove it.
     *
     * @param {string} userId - Console user ID.
     * @param {boolean} admin - Whether the user is a platform admin. When true, the user can call the admin API.
     * @throws {AppwriteException}
     * @returns {Promise<Models.User<Preferences>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateUserAdmin<
        Preferences extends Models.Preferences = Models.DefaultPreferences,
    >(userId: string, admin: boolean): Promise<Models.User<Preferences>>;
    updateUserAdmin<
        Preferences extends Models.Preferences = Models.DefaultPreferences,
    >(
        paramsOrFirst: { userId: string; admin: boolean } | string,
        ...rest: [boolean?]
    ): Promise<Models.User<Preferences>> {
        let params: { userId: string; admin: boolean };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                userId: string;
                admin: boolean;
            };
        } else {
            params = {
                userId: paramsOrFirst as string,
                admin: rest[0] as boolean,
            };
        }

        const userId = params.userId;
        const admin = params.admin;

        if (typeof userId === 'undefined' || userId === '') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }
        if (typeof admin === 'undefined') {
            throw new AppwriteException('Missing required parameter: "admin"');
        }
        const apiPath = '/admin/users/{userId}/admin'.replace(
            '{userId}',
            encodeURIComponent(String(userId)),
        );
        const apiPayload: Payload = {};
        if (typeof admin !== 'undefined') {
            apiPayload['admin'] = admin;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        const request = this.client.call('patch', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'user',
            models: {
                user: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        name: '',
                        registration: '',
                        status: true,
                        labels: [],
                        passwordUpdate: '',
                        email: '',
                        phone: '',
                        emailVerification: false,
                        phoneVerification: false,
                        mfa: false,
                        targets: [],
                        accessedAt: '',
                    },
                    properties: {
                        targets: {
                            items: 'target',
                        },
                    },
                },
                target: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        name: '',
                        userId: '',
                        providerType: '',
                        identifier: '',
                        expired: false,
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Enable or disable a console user's impersonator capability. An impersonator can browse console users to pick a target and pass impersonation headers to act as that user, and can call the manager API. While impersonating, the request runs as the target for API behavior, account endpoints are read-only, and audit logs still attribute the action to the impersonator.
     *
     * @param {string} params.userId - Console user ID.
     * @param {boolean} params.impersonator - Whether the user can impersonate other console users. When true, the user can browse console users, act as one of them with impersonation headers, and call the manager API.
     * @throws {AppwriteException}
     * @returns {Promise<Models.User<Preferences>>}
     */
    updateUserImpersonator<
        Preferences extends Models.Preferences = Models.DefaultPreferences,
    >(params: {
        userId: string;
        impersonator: boolean;
    }): Promise<Models.User<Preferences>>;
    /**
     * Enable or disable a console user's impersonator capability. An impersonator can browse console users to pick a target and pass impersonation headers to act as that user, and can call the manager API. While impersonating, the request runs as the target for API behavior, account endpoints are read-only, and audit logs still attribute the action to the impersonator.
     *
     * @param {string} userId - Console user ID.
     * @param {boolean} impersonator - Whether the user can impersonate other console users. When true, the user can browse console users, act as one of them with impersonation headers, and call the manager API.
     * @throws {AppwriteException}
     * @returns {Promise<Models.User<Preferences>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateUserImpersonator<
        Preferences extends Models.Preferences = Models.DefaultPreferences,
    >(userId: string, impersonator: boolean): Promise<Models.User<Preferences>>;
    updateUserImpersonator<
        Preferences extends Models.Preferences = Models.DefaultPreferences,
    >(
        paramsOrFirst: { userId: string; impersonator: boolean } | string,
        ...rest: [boolean?]
    ): Promise<Models.User<Preferences>> {
        let params: { userId: string; impersonator: boolean };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                userId: string;
                impersonator: boolean;
            };
        } else {
            params = {
                userId: paramsOrFirst as string,
                impersonator: rest[0] as boolean,
            };
        }

        const userId = params.userId;
        const impersonator = params.impersonator;

        if (typeof userId === 'undefined' || userId === '') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }
        if (typeof impersonator === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "impersonator"',
            );
        }
        const apiPath = '/admin/users/{userId}/impersonator'.replace(
            '{userId}',
            encodeURIComponent(String(userId)),
        );
        const apiPayload: Payload = {};
        if (typeof impersonator !== 'undefined') {
            apiPayload['impersonator'] = impersonator;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        const request = this.client.call('patch', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'user',
            models: {
                user: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        name: '',
                        registration: '',
                        status: true,
                        labels: [],
                        passwordUpdate: '',
                        email: '',
                        phone: '',
                        emailVerification: false,
                        phoneVerification: false,
                        mfa: false,
                        targets: [],
                        accessedAt: '',
                    },
                    properties: {
                        targets: {
                            items: 'target',
                        },
                    },
                },
                target: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        name: '',
                        userId: '',
                        providerType: '',
                        identifier: '',
                        expired: false,
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }
}
