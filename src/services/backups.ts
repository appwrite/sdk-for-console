import { Service } from '../service';
import { AppwriteException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

export class Backups {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * List all archives for a project.
     *
     * @param {string[]} queries
     * @throws {AppwriteException}
     * @returns {Promise<Models.BackupArchiveList>}
     */
    listArchives(queries?: string[]): Promise<Models.BackupArchiveList> {
        const apiPath = '/backups/archives';
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
     * Create a new archive asynchronously for a project.
     *
     * @param {string[]} services
     * @param {string} resourceId
     * @throws {AppwriteException}
     * @returns {Promise<Models.BackupArchive>}
     */
    createArchive(services: string[], resourceId?: string): Promise<Models.BackupArchive> {
        if (typeof services === 'undefined') {
            throw new AppwriteException('Missing required parameter: "services"');
        }
        const apiPath = '/backups/archives';
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

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Get a backup archive using it&#039;s ID.
     *
     * @param {string} archiveId
     * @throws {AppwriteException}
     * @returns {Promise<Models.BackupArchive>}
     */
    getArchive(archiveId: string): Promise<Models.BackupArchive> {
        if (typeof archiveId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "archiveId"');
        }
        const apiPath = '/backups/archives/{archiveId}'.replace('{archiveId}', archiveId);
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
     * Delete an existing archive for a project.
     *
     * @param {string} archiveId
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteArchive(archiveId: string): Promise<{}> {
        if (typeof archiveId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "archiveId"');
        }
        const apiPath = '/backups/archives/{archiveId}'.replace('{archiveId}', archiveId);
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
     * List all policies for a project.
     *
     * @param {string[]} queries
     * @throws {AppwriteException}
     * @returns {Promise<Models.BackupPolicyList>}
     */
    listPolicies(queries?: string[]): Promise<Models.BackupPolicyList> {
        const apiPath = '/backups/policies';
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
     * Create a new backup policy.
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
    createPolicy(policyId: string, services: string[], retention: number, schedule: string, name?: string, resourceId?: string, enabled?: boolean): Promise<Models.BackupPolicy> {
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

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Get a backup policy using it&#039;s ID.
     *
     * @param {string} policyId
     * @throws {AppwriteException}
     * @returns {Promise<Models.BackupPolicy>}
     */
    getPolicy(policyId: string): Promise<Models.BackupPolicy> {
        if (typeof policyId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "policyId"');
        }
        const apiPath = '/backups/policies/{policyId}'.replace('{policyId}', policyId);
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
     * Update an existing policy using it&#039;s ID.
     *
     * @param {string} policyId
     * @param {string} name
     * @param {number} retention
     * @param {string} schedule
     * @param {boolean} enabled
     * @throws {AppwriteException}
     * @returns {Promise<Models.BackupPolicy>}
     */
    updatePolicy(policyId: string, name?: string, retention?: number, schedule?: string, enabled?: boolean): Promise<Models.BackupPolicy> {
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

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Delete a policy using it&#039;s ID.
     *
     * @param {string} policyId
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deletePolicy(policyId: string): Promise<{}> {
        if (typeof policyId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "policyId"');
        }
        const apiPath = '/backups/policies/{policyId}'.replace('{policyId}', policyId);
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
     * Create and trigger a new restoration for a backup on a project.
     *
     * @param {string} archiveId
     * @param {string[]} services
     * @param {string} newResourceId
     * @param {string} newResourceName
     * @throws {AppwriteException}
     * @returns {Promise<Models.BackupRestoration>}
     */
    createRestoration(archiveId: string, services: string[], newResourceId?: string, newResourceName?: string): Promise<Models.BackupRestoration> {
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

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * List all backup restorations for a project.
     *
     * @param {string[]} queries
     * @throws {AppwriteException}
     * @returns {Promise<Models.BackupRestorationList>}
     */
    listRestorations(queries?: string[]): Promise<Models.BackupRestorationList> {
        const apiPath = '/backups/restorations';
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
     * Get the current status of a backup restoration.
     *
     * @param {string} restorationId
     * @throws {AppwriteException}
     * @returns {Promise<Models.BackupRestoration>}
     */
    getRestoration(restorationId: string): Promise<Models.BackupRestoration> {
        if (typeof restorationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "restorationId"');
        }
        const apiPath = '/backups/restorations/{restorationId}'.replace('{restorationId}', restorationId);
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
}
