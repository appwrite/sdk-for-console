import { Service } from '../service';
import { AppwriteException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

export class Backups {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Create archive
     *
     *
     * @param {string[]} services
     * @param {string} resourceId
     * @throws {AppwriteException}
     * @returns {Promise<Models.BackupArchive>}
     */
    async createArchive(services: string[], resourceId?: string): Promise<Models.BackupArchive> {
        if (typeof services === 'undefined') {
            throw new AppwriteException('Missing required parameter: "services"');
        }
        const apiPath = '/backups/archive';
        const payload: Payload = {};
        if (typeof services !== 'undefined') {
            payload['services'] = services;
        }
        if (typeof resourceId !== 'undefined') {
            payload['resourceId'] = resourceId;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'post',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * Delete archive
     *
     *
     * @param {string} archiveId
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    async deleteArchive(archiveId: string): Promise<{}> {
        if (typeof archiveId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "archiveId"');
        }
        const apiPath = '/backups/archive/{archiveId}'.replace('{archiveId}', archiveId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'delete',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * List archives
     *
     *
     * @param {string[]} queries
     * @throws {AppwriteException}
     * @returns {Promise<Models.BackupArchiveList>}
     */
    async listArchives(queries?: string[]): Promise<Models.BackupArchiveList> {
        const apiPath = '/backups/archives';
        const payload: Payload = {};
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * Get backup archive
     *
     *
     * @param {string} archiveId
     * @throws {AppwriteException}
     * @returns {Promise<Models.BackupArchive>}
     */
    async getArchive(archiveId: string): Promise<Models.BackupArchive> {
        if (typeof archiveId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "archiveId"');
        }
        const apiPath = '/backups/archives/{archiveId}'.replace('{archiveId}', archiveId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * List backup policies
     *
     *
     * @param {string[]} queries
     * @throws {AppwriteException}
     * @returns {Promise<Models.BackupPolicyList>}
     */
    async listPolicies(queries?: string[]): Promise<Models.BackupPolicyList> {
        const apiPath = '/backups/policies';
        const payload: Payload = {};
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * Create backup policy
     *
     *
     * @param {string} policyId
     * @param {string[]} services
     * @param {number} retention
     * @param {string} schedule
     * @param {string} name
     * @param {string} resourceId
     * @param {boolean} enabled
     * @throws {AppwriteException}
     * @returns {Promise<Models.BackupPolicy>}
     */
    async createPolicy(policyId: string, services: string[], retention: number, schedule: string, name?: string, resourceId?: string, enabled?: boolean): Promise<Models.BackupPolicy> {
        if (typeof policyId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "policyId"');
        }
        if (typeof services === 'undefined') {
            throw new AppwriteException('Missing required parameter: "services"');
        }
        if (typeof retention === 'undefined') {
            throw new AppwriteException('Missing required parameter: "retention"');
        }
        if (typeof schedule === 'undefined') {
            throw new AppwriteException('Missing required parameter: "schedule"');
        }
        const apiPath = '/backups/policies';
        const payload: Payload = {};
        if (typeof policyId !== 'undefined') {
            payload['policyId'] = policyId;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof services !== 'undefined') {
            payload['services'] = services;
        }
        if (typeof resourceId !== 'undefined') {
            payload['resourceId'] = resourceId;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        if (typeof retention !== 'undefined') {
            payload['retention'] = retention;
        }
        if (typeof schedule !== 'undefined') {
            payload['schedule'] = schedule;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'post',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * Get backup policy
     *
     *
     * @param {string} policyId
     * @throws {AppwriteException}
     * @returns {Promise<Models.BackupPolicy>}
     */
    async getPolicy(policyId: string): Promise<Models.BackupPolicy> {
        if (typeof policyId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "policyId"');
        }
        const apiPath = '/backups/policies/{policyId}'.replace('{policyId}', policyId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * Update backup policy
     *
     *
     * @param {string} policyId
     * @param {string} name
     * @param {number} retention
     * @param {string} schedule
     * @param {boolean} enabled
     * @throws {AppwriteException}
     * @returns {Promise<Models.BackupPolicy>}
     */
    async updatePolicy(policyId: string, name?: string, retention?: number, schedule?: string, enabled?: boolean): Promise<Models.BackupPolicy> {
        if (typeof policyId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "policyId"');
        }
        const apiPath = '/backups/policies/{policyId}'.replace('{policyId}', policyId);
        const payload: Payload = {};
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof retention !== 'undefined') {
            payload['retention'] = retention;
        }
        if (typeof schedule !== 'undefined') {
            payload['schedule'] = schedule;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * Delete backup policy
     *
     *
     * @param {string} policyId
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    async deletePolicy(policyId: string): Promise<{}> {
        if (typeof policyId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "policyId"');
        }
        const apiPath = '/backups/policies/{policyId}'.replace('{policyId}', policyId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'delete',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * Create restoration
     *
     *
     * @param {string} archiveId
     * @param {string[]} services
     * @param {string} newResourceId
     * @param {string} newResourceName
     * @throws {AppwriteException}
     * @returns {Promise<Models.BackupRestoration>}
     */
    async createRestoration(archiveId: string, services: string[], newResourceId?: string, newResourceName?: string): Promise<Models.BackupRestoration> {
        if (typeof archiveId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "archiveId"');
        }
        if (typeof services === 'undefined') {
            throw new AppwriteException('Missing required parameter: "services"');
        }
        const apiPath = '/backups/restoration';
        const payload: Payload = {};
        if (typeof archiveId !== 'undefined') {
            payload['archiveId'] = archiveId;
        }
        if (typeof services !== 'undefined') {
            payload['services'] = services;
        }
        if (typeof newResourceId !== 'undefined') {
            payload['newResourceId'] = newResourceId;
        }
        if (typeof newResourceName !== 'undefined') {
            payload['newResourceName'] = newResourceName;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'post',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * List restorations
     *
     *
     * @param {string[]} queries
     * @throws {AppwriteException}
     * @returns {Promise<Models.BackupRestorationList>}
     */
    async listRestorations(queries?: string[]): Promise<Models.BackupRestorationList> {
        const apiPath = '/backups/restorations';
        const payload: Payload = {};
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * Get backup restoration
     *
     *
     * @param {string} restorationId
     * @throws {AppwriteException}
     * @returns {Promise<Models.BackupArchive>}
     */
    async getRestoration(restorationId: string): Promise<Models.BackupArchive> {
        if (typeof restorationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "restorationId"');
        }
        const apiPath = '/backups/restorations/{restorationId}'.replace('{restorationId}', restorationId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }
}
