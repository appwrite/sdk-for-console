import { Client } from '../client';
import type { Models } from '../models';
import { BackupServices } from '../enums/backup-services';
export declare class Backups {
    client: Client;
    constructor(client: Client);
    /**
     * List all archives for a project.
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Models.BackupArchiveList>}
     */
    listArchives(params?: {
        queries?: string[];
    }): Promise<Models.BackupArchiveList>;
    /**
     * List all archives for a project.
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Models.BackupArchiveList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listArchives(queries?: string[]): Promise<Models.BackupArchiveList>;
    /**
     * Create a new archive asynchronously for a project.
     *
     * @param {BackupServices[]} params.services - Array of services to backup
     * @param {string} params.resourceId - Resource ID. When set, only this single resource will be backed up.
     * @throws {AppwriteException}
     * @returns {Promise<Models.BackupArchive>}
     */
    createArchive(params: {
        services: BackupServices[];
        resourceId?: string;
    }): Promise<Models.BackupArchive>;
    /**
     * Create a new archive asynchronously for a project.
     *
     * @param {BackupServices[]} services - Array of services to backup
     * @param {string} resourceId - Resource ID. When set, only this single resource will be backed up.
     * @throws {AppwriteException}
     * @returns {Promise<Models.BackupArchive>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createArchive(services: BackupServices[], resourceId?: string): Promise<Models.BackupArchive>;
    /**
     * Get a backup archive using it's ID.
     *
     * @param {string} params.archiveId - Archive ID. Choose a custom ID`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.BackupArchive>}
     */
    getArchive(params: {
        archiveId: string;
    }): Promise<Models.BackupArchive>;
    /**
     * Get a backup archive using it's ID.
     *
     * @param {string} archiveId - Archive ID. Choose a custom ID`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.BackupArchive>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getArchive(archiveId: string): Promise<Models.BackupArchive>;
    /**
     * Delete an existing archive for a project.
     *
     * @param {string} params.archiveId - Policy ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteArchive(params: {
        archiveId: string;
    }): Promise<{}>;
    /**
     * Delete an existing archive for a project.
     *
     * @param {string} archiveId - Policy ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteArchive(archiveId: string): Promise<{}>;
    /**
     * List all policies for a project.
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Models.BackupPolicyList>}
     */
    listPolicies(params?: {
        queries?: string[];
    }): Promise<Models.BackupPolicyList>;
    /**
     * List all policies for a project.
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Models.BackupPolicyList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listPolicies(queries?: string[]): Promise<Models.BackupPolicyList>;
    /**
     * Create a new backup policy.
     *
     * @param {string} params.policyId - Policy ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {BackupServices[]} params.services - Array of services to backup
     * @param {number} params.retention - Days to keep backups before deletion
     * @param {string} params.schedule - Schedule CRON syntax.
     * @param {string} params.name - Policy name. Max length: 128 chars.
     * @param {string} params.resourceId - Resource ID. When set, only this single resource will be backed up.
     * @param {boolean} params.enabled - Is policy enabled? When set to 'disabled', no backups will be taken
     * @throws {AppwriteException}
     * @returns {Promise<Models.BackupPolicy>}
     */
    createPolicy(params: {
        policyId: string;
        services: BackupServices[];
        retention: number;
        schedule: string;
        name?: string;
        resourceId?: string;
        enabled?: boolean;
    }): Promise<Models.BackupPolicy>;
    /**
     * Create a new backup policy.
     *
     * @param {string} policyId - Policy ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {BackupServices[]} services - Array of services to backup
     * @param {number} retention - Days to keep backups before deletion
     * @param {string} schedule - Schedule CRON syntax.
     * @param {string} name - Policy name. Max length: 128 chars.
     * @param {string} resourceId - Resource ID. When set, only this single resource will be backed up.
     * @param {boolean} enabled - Is policy enabled? When set to 'disabled', no backups will be taken
     * @throws {AppwriteException}
     * @returns {Promise<Models.BackupPolicy>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createPolicy(policyId: string, services: BackupServices[], retention: number, schedule: string, name?: string, resourceId?: string, enabled?: boolean): Promise<Models.BackupPolicy>;
    /**
     * Get a backup policy using it's ID.
     *
     * @param {string} params.policyId - Policy ID. Choose a custom ID`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.BackupPolicy>}
     */
    getPolicy(params: {
        policyId: string;
    }): Promise<Models.BackupPolicy>;
    /**
     * Get a backup policy using it's ID.
     *
     * @param {string} policyId - Policy ID. Choose a custom ID`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.BackupPolicy>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getPolicy(policyId: string): Promise<Models.BackupPolicy>;
    /**
     * Update an existing policy using it's ID.
     *
     * @param {string} params.policyId - Policy ID. Choose a custom ID`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Policy name. Max length: 128 chars.
     * @param {number} params.retention - Days to keep backups before deletion
     * @param {string} params.schedule - Cron expression
     * @param {boolean} params.enabled - Is Backup enabled? When set to 'disabled', No backup will be taken
     * @throws {AppwriteException}
     * @returns {Promise<Models.BackupPolicy>}
     */
    updatePolicy(params: {
        policyId: string;
        name?: string;
        retention?: number;
        schedule?: string;
        enabled?: boolean;
    }): Promise<Models.BackupPolicy>;
    /**
     * Update an existing policy using it's ID.
     *
     * @param {string} policyId - Policy ID. Choose a custom ID`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Policy name. Max length: 128 chars.
     * @param {number} retention - Days to keep backups before deletion
     * @param {string} schedule - Cron expression
     * @param {boolean} enabled - Is Backup enabled? When set to 'disabled', No backup will be taken
     * @throws {AppwriteException}
     * @returns {Promise<Models.BackupPolicy>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updatePolicy(policyId: string, name?: string, retention?: number, schedule?: string, enabled?: boolean): Promise<Models.BackupPolicy>;
    /**
     * Delete a policy using it's ID.
     *
     * @param {string} params.policyId - Policy ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deletePolicy(params: {
        policyId: string;
    }): Promise<{}>;
    /**
     * Delete a policy using it's ID.
     *
     * @param {string} policyId - Policy ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deletePolicy(policyId: string): Promise<{}>;
    /**
     * Create and trigger a new restoration for a backup on a project.
     *
     * @param {string} params.archiveId - Backup archive ID to restore
     * @param {BackupServices[]} params.services - Array of services to restore
     * @param {string} params.newResourceId - Unique Id. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.newResourceName - Database name. Max length: 128 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.BackupRestoration>}
     */
    createRestoration(params: {
        archiveId: string;
        services: BackupServices[];
        newResourceId?: string;
        newResourceName?: string;
    }): Promise<Models.BackupRestoration>;
    /**
     * Create and trigger a new restoration for a backup on a project.
     *
     * @param {string} archiveId - Backup archive ID to restore
     * @param {BackupServices[]} services - Array of services to restore
     * @param {string} newResourceId - Unique Id. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} newResourceName - Database name. Max length: 128 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.BackupRestoration>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createRestoration(archiveId: string, services: BackupServices[], newResourceId?: string, newResourceName?: string): Promise<Models.BackupRestoration>;
    /**
     * List all backup restorations for a project.
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Models.BackupRestorationList>}
     */
    listRestorations(params?: {
        queries?: string[];
    }): Promise<Models.BackupRestorationList>;
    /**
     * List all backup restorations for a project.
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Models.BackupRestorationList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listRestorations(queries?: string[]): Promise<Models.BackupRestorationList>;
    /**
     * Get the current status of a backup restoration.
     *
     * @param {string} params.restorationId - Restoration ID. Choose a custom ID`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.BackupRestoration>}
     */
    getRestoration(params: {
        restorationId: string;
    }): Promise<Models.BackupRestoration>;
    /**
     * Get the current status of a backup restoration.
     *
     * @param {string} restorationId - Restoration ID. Choose a custom ID`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.BackupRestoration>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getRestoration(restorationId: string): Promise<Models.BackupRestoration>;
}
