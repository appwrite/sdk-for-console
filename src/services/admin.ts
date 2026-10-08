import { AppwriteException, Client, type Payload } from '../client';

import { PlatformResourceType } from '../enums/platform-resource-type';
import { ProjectResourceType } from '../enums/project-resource-type';
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
}
