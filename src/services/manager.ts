import { Service } from '../service';
import { AppwriteException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { ResourceType } from '../enums/resource-type';

export class Manager {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Creates a new resource block.
     *
     * @param {string} params.projectId - Project ID
     * @param {ResourceType} params.resourceType - Resource type to block (e.g., projects, functions, databases, storage, etc.)
     * @param {string} params.resourceId - Optional resource ID (if omitted, all resources of this type will be blocked)
     * @param {string} params.reason - Optional reason why the resource is blocked
     * @param {string} params.expiredAt - Optional expiration date for the block
     * @throws {AppwriteException}
     * @returns {Promise<Models.Block>}
     */
    createBlock(params: { projectId: string, resourceType: ResourceType, resourceId?: string, reason?: string, expiredAt?: string }): Promise<Models.Block>;
    /**
     * Creates a new resource block.
     *
     * @param {string} projectId - Project ID
     * @param {ResourceType} resourceType - Resource type to block (e.g., projects, functions, databases, storage, etc.)
     * @param {string} resourceId - Optional resource ID (if omitted, all resources of this type will be blocked)
     * @param {string} reason - Optional reason why the resource is blocked
     * @param {string} expiredAt - Optional expiration date for the block
     * @throws {AppwriteException}
     * @returns {Promise<Models.Block>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createBlock(projectId: string, resourceType: ResourceType, resourceId?: string, reason?: string, expiredAt?: string): Promise<Models.Block>;
    createBlock(
        paramsOrFirst: { projectId: string, resourceType: ResourceType, resourceId?: string, reason?: string, expiredAt?: string } | string,
        ...rest: [(ResourceType)?, (string)?, (string)?, (string)?]    
    ): Promise<Models.Block> {
        let params: { projectId: string, resourceType: ResourceType, resourceId?: string, reason?: string, expiredAt?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { projectId: string, resourceType: ResourceType, resourceId?: string, reason?: string, expiredAt?: string };
        } else {
            params = {
                projectId: paramsOrFirst as string,
                resourceType: rest[0] as ResourceType,
                resourceId: rest[1] as string,
                reason: rest[2] as string,
                expiredAt: rest[3] as string            
            };
        }
        
        const projectId = params.projectId;
        const resourceType = params.resourceType;
        const resourceId = params.resourceId;
        const reason = params.reason;
        const expiredAt = params.expiredAt;

        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }
        if (typeof resourceType === 'undefined') {
            throw new AppwriteException('Missing required parameter: "resourceType"');
        }

        const apiPath = '/manager/blocks';
        const payload: Payload = {};
        if (typeof projectId !== 'undefined') {
            payload['projectId'] = projectId;
        }
        if (typeof resourceType !== 'undefined') {
            payload['resourceType'] = resourceType;
        }
        if (typeof resourceId !== 'undefined') {
            payload['resourceId'] = resourceId;
        }
        if (typeof reason !== 'undefined') {
            payload['reason'] = reason;
        }
        if (typeof expiredAt !== 'undefined') {
            payload['expiredAt'] = expiredAt;
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
     * Deletes resource blocks for a project.
     *
     * @param {string} params.projectId - Project ID
     * @param {ResourceType} params.resourceType - Resource type to unblock
     * @param {string} params.resourceId - Optional resource ID (if omitted, all blocks of this type will be removed)
     * @throws {AppwriteException}
     * @returns {Promise<Models.BlockDelete>}
     */
    deleteBlock(params: { projectId: string, resourceType: ResourceType, resourceId?: string }): Promise<Models.BlockDelete>;
    /**
     * Deletes resource blocks for a project.
     *
     * @param {string} projectId - Project ID
     * @param {ResourceType} resourceType - Resource type to unblock
     * @param {string} resourceId - Optional resource ID (if omitted, all blocks of this type will be removed)
     * @throws {AppwriteException}
     * @returns {Promise<Models.BlockDelete>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteBlock(projectId: string, resourceType: ResourceType, resourceId?: string): Promise<Models.BlockDelete>;
    deleteBlock(
        paramsOrFirst: { projectId: string, resourceType: ResourceType, resourceId?: string } | string,
        ...rest: [(ResourceType)?, (string)?]    
    ): Promise<Models.BlockDelete> {
        let params: { projectId: string, resourceType: ResourceType, resourceId?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { projectId: string, resourceType: ResourceType, resourceId?: string };
        } else {
            params = {
                projectId: paramsOrFirst as string,
                resourceType: rest[0] as ResourceType,
                resourceId: rest[1] as string            
            };
        }
        
        const projectId = params.projectId;
        const resourceType = params.resourceType;
        const resourceId = params.resourceId;

        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }
        if (typeof resourceType === 'undefined') {
            throw new AppwriteException('Missing required parameter: "resourceType"');
        }

        const apiPath = '/manager/blocks';
        const payload: Payload = {};
        if (typeof projectId !== 'undefined') {
            payload['projectId'] = projectId;
        }
        if (typeof resourceType !== 'undefined') {
            payload['resourceType'] = resourceType;
        }
        if (typeof resourceId !== 'undefined') {
            payload['resourceId'] = resourceId;
        }
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
     * Lists all resource blocks for a project.
     *
     * @param {string} params.projectId - Project ID
     * @throws {AppwriteException}
     * @returns {Promise<Models.BlockList>}
     */
    listBlocks(params: { projectId: string }): Promise<Models.BlockList>;
    /**
     * Lists all resource blocks for a project.
     *
     * @param {string} projectId - Project ID
     * @throws {AppwriteException}
     * @returns {Promise<Models.BlockList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listBlocks(projectId: string): Promise<Models.BlockList>;
    listBlocks(
        paramsOrFirst: { projectId: string } | string    
    ): Promise<Models.BlockList> {
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

        const apiPath = '/manager/blocks/{projectId}'.replace('{projectId}', projectId);
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
     * Updates a console user status using a user ID or email address.
     *
     * @param {boolean} params.status - User status. Set to `false` to block and `true` to unblock.
     * @param {string} params.userId - User ID.
     * @param {string} params.email - User email address.
     * @param {string} params.reason - Optional reason when blocking a user. Accepted for parity with the CLI task but not persisted.
     * @throws {AppwriteException}
     * @returns {Promise<Models.User<Preferences>>}
     */
    updateUserStatus<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: { status: boolean, userId?: string, email?: string, reason?: string }): Promise<Models.User<Preferences>>;
    /**
     * Updates a console user status using a user ID or email address.
     *
     * @param {boolean} status - User status. Set to `false` to block and `true` to unblock.
     * @param {string} userId - User ID.
     * @param {string} email - User email address.
     * @param {string} reason - Optional reason when blocking a user. Accepted for parity with the CLI task but not persisted.
     * @throws {AppwriteException}
     * @returns {Promise<Models.User<Preferences>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateUserStatus<Preferences extends Models.Preferences = Models.DefaultPreferences>(status: boolean, userId?: string, email?: string, reason?: string): Promise<Models.User<Preferences>>;
    updateUserStatus<Preferences extends Models.Preferences = Models.DefaultPreferences>(
        paramsOrFirst: { status: boolean, userId?: string, email?: string, reason?: string } | boolean,
        ...rest: [(string)?, (string)?, (string)?]    
    ): Promise<Models.User<Preferences>> {
        let params: { status: boolean, userId?: string, email?: string, reason?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { status: boolean, userId?: string, email?: string, reason?: string };
        } else {
            params = {
                status: paramsOrFirst as boolean,
                userId: rest[0] as string,
                email: rest[1] as string,
                reason: rest[2] as string            
            };
        }
        
        const status = params.status;
        const userId = params.userId;
        const email = params.email;
        const reason = params.reason;

        if (typeof status === 'undefined') {
            throw new AppwriteException('Missing required parameter: "status"');
        }

        const apiPath = '/manager/users/status';
        const payload: Payload = {};
        if (typeof userId !== 'undefined') {
            payload['userId'] = userId;
        }
        if (typeof email !== 'undefined') {
            payload['email'] = email;
        }
        if (typeof status !== 'undefined') {
            payload['status'] = status;
        }
        if (typeof reason !== 'undefined') {
            payload['reason'] = reason;
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
