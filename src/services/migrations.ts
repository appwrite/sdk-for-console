import { Service } from '../service';
import { AppwriteException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

export class Migrations {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * List all migrations in the current project. This endpoint returns a list of all migrations including their status, progress, and any errors that occurred during the migration process.
     *
     * @param {string[]} queries
     * @param {string} search
     * @throws {AppwriteException}
     * @returns {Promise<Models.MigrationList>}
     */
    list(queries?: string[], search?: string): Promise<Models.MigrationList> {
        const apiPath = '/migrations';
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
     * Migrate data from another Appwrite project to your current project. This endpoint allows you to migrate resources like databases, collections, documents, users, and files from an existing Appwrite project. 
     *
     * @param {string[]} resources
     * @param {string} endpoint
     * @param {string} projectId
     * @param {string} apiKey
     * @throws {AppwriteException}
     * @returns {Promise<Models.Migration>}
     */
    createAppwriteMigration(resources: string[], endpoint: string, projectId: string, apiKey: string): Promise<Models.Migration> {
        if (typeof resources === 'undefined') {
            throw new AppwriteException('Missing required parameter: "resources"');
        }
        if (typeof endpoint === 'undefined') {
            throw new AppwriteException('Missing required parameter: "endpoint"');
        }
        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }
        if (typeof apiKey === 'undefined') {
            throw new AppwriteException('Missing required parameter: "apiKey"');
        }
        const apiPath = '/migrations/appwrite';
        const payload: Payload = {};
        if (typeof resources !== 'undefined') {
            payload['resources'] = resources;
        }
        if (typeof endpoint !== 'undefined') {
            payload['endpoint'] = endpoint;
        }
        if (typeof projectId !== 'undefined') {
            payload['projectId'] = projectId;
        }
        if (typeof apiKey !== 'undefined') {
            payload['apiKey'] = apiKey;
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
     * Generate a report of the data in an Appwrite project before migrating. This endpoint analyzes the source project and returns information about the resources that can be migrated.
     *
     * @param {string[]} resources
     * @param {string} endpoint
     * @param {string} projectID
     * @param {string} key
     * @throws {AppwriteException}
     * @returns {Promise<Models.MigrationReport>}
     */
    getAppwriteReport(resources: string[], endpoint: string, projectID: string, key: string): Promise<Models.MigrationReport> {
        if (typeof resources === 'undefined') {
            throw new AppwriteException('Missing required parameter: "resources"');
        }
        if (typeof endpoint === 'undefined') {
            throw new AppwriteException('Missing required parameter: "endpoint"');
        }
        if (typeof projectID === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectID"');
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        const apiPath = '/migrations/appwrite/report';
        const payload: Payload = {};
        if (typeof resources !== 'undefined') {
            payload['resources'] = resources;
        }
        if (typeof endpoint !== 'undefined') {
            payload['endpoint'] = endpoint;
        }
        if (typeof projectID !== 'undefined') {
            payload['projectID'] = projectID;
        }
        if (typeof key !== 'undefined') {
            payload['key'] = key;
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
     * Import documents from a CSV file into your Appwrite database. This endpoint allows you to import documents from a CSV file uploaded to Appwrite Storage bucket.
     *
     * @param {string} bucketId
     * @param {string} fileId
     * @param {string} resourceId
     * @throws {AppwriteException}
     * @returns {Promise<Models.Migration>}
     */
    createCsvMigration(bucketId: string, fileId: string, resourceId: string): Promise<Models.Migration> {
        if (typeof bucketId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "bucketId"');
        }
        if (typeof fileId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "fileId"');
        }
        if (typeof resourceId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "resourceId"');
        }
        const apiPath = '/migrations/csv';
        const payload: Payload = {};
        if (typeof bucketId !== 'undefined') {
            payload['bucketId'] = bucketId;
        }
        if (typeof fileId !== 'undefined') {
            payload['fileId'] = fileId;
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
     * Migrate data from a Firebase project to your Appwrite project. This endpoint allows you to migrate resources like authentication and other supported services from a Firebase project. 
     *
     * @param {string[]} resources
     * @param {string} serviceAccount
     * @throws {AppwriteException}
     * @returns {Promise<Models.Migration>}
     */
    createFirebaseMigration(resources: string[], serviceAccount: string): Promise<Models.Migration> {
        if (typeof resources === 'undefined') {
            throw new AppwriteException('Missing required parameter: "resources"');
        }
        if (typeof serviceAccount === 'undefined') {
            throw new AppwriteException('Missing required parameter: "serviceAccount"');
        }
        const apiPath = '/migrations/firebase';
        const payload: Payload = {};
        if (typeof resources !== 'undefined') {
            payload['resources'] = resources;
        }
        if (typeof serviceAccount !== 'undefined') {
            payload['serviceAccount'] = serviceAccount;
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
     * Generate a report of the data in a Firebase project before migrating. This endpoint analyzes the source project and returns information about the resources that can be migrated.
     *
     * @param {string[]} resources
     * @param {string} serviceAccount
     * @throws {AppwriteException}
     * @returns {Promise<Models.MigrationReport>}
     */
    getFirebaseReport(resources: string[], serviceAccount: string): Promise<Models.MigrationReport> {
        if (typeof resources === 'undefined') {
            throw new AppwriteException('Missing required parameter: "resources"');
        }
        if (typeof serviceAccount === 'undefined') {
            throw new AppwriteException('Missing required parameter: "serviceAccount"');
        }
        const apiPath = '/migrations/firebase/report';
        const payload: Payload = {};
        if (typeof resources !== 'undefined') {
            payload['resources'] = resources;
        }
        if (typeof serviceAccount !== 'undefined') {
            payload['serviceAccount'] = serviceAccount;
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
     * Migrate data from an NHost project to your Appwrite project. This endpoint allows you to migrate resources like authentication, databases, and other supported services from an NHost project. 
     *
     * @param {string[]} resources
     * @param {string} subdomain
     * @param {string} region
     * @param {string} adminSecret
     * @param {string} database
     * @param {string} username
     * @param {string} password
     * @param {number} port
     * @throws {AppwriteException}
     * @returns {Promise<Models.Migration>}
     */
    createNHostMigration(resources: string[], subdomain: string, region: string, adminSecret: string, database: string, username: string, password: string, port?: number): Promise<Models.Migration> {
        if (typeof resources === 'undefined') {
            throw new AppwriteException('Missing required parameter: "resources"');
        }
        if (typeof subdomain === 'undefined') {
            throw new AppwriteException('Missing required parameter: "subdomain"');
        }
        if (typeof region === 'undefined') {
            throw new AppwriteException('Missing required parameter: "region"');
        }
        if (typeof adminSecret === 'undefined') {
            throw new AppwriteException('Missing required parameter: "adminSecret"');
        }
        if (typeof database === 'undefined') {
            throw new AppwriteException('Missing required parameter: "database"');
        }
        if (typeof username === 'undefined') {
            throw new AppwriteException('Missing required parameter: "username"');
        }
        if (typeof password === 'undefined') {
            throw new AppwriteException('Missing required parameter: "password"');
        }
        const apiPath = '/migrations/nhost';
        const payload: Payload = {};
        if (typeof resources !== 'undefined') {
            payload['resources'] = resources;
        }
        if (typeof subdomain !== 'undefined') {
            payload['subdomain'] = subdomain;
        }
        if (typeof region !== 'undefined') {
            payload['region'] = region;
        }
        if (typeof adminSecret !== 'undefined') {
            payload['adminSecret'] = adminSecret;
        }
        if (typeof database !== 'undefined') {
            payload['database'] = database;
        }
        if (typeof username !== 'undefined') {
            payload['username'] = username;
        }
        if (typeof password !== 'undefined') {
            payload['password'] = password;
        }
        if (typeof port !== 'undefined') {
            payload['port'] = port;
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
     * Generate a detailed report of the data in an NHost project before migrating. This endpoint analyzes the source project and returns information about the resources that can be migrated. 
     *
     * @param {string[]} resources
     * @param {string} subdomain
     * @param {string} region
     * @param {string} adminSecret
     * @param {string} database
     * @param {string} username
     * @param {string} password
     * @param {number} port
     * @throws {AppwriteException}
     * @returns {Promise<Models.MigrationReport>}
     */
    getNHostReport(resources: string[], subdomain: string, region: string, adminSecret: string, database: string, username: string, password: string, port?: number): Promise<Models.MigrationReport> {
        if (typeof resources === 'undefined') {
            throw new AppwriteException('Missing required parameter: "resources"');
        }
        if (typeof subdomain === 'undefined') {
            throw new AppwriteException('Missing required parameter: "subdomain"');
        }
        if (typeof region === 'undefined') {
            throw new AppwriteException('Missing required parameter: "region"');
        }
        if (typeof adminSecret === 'undefined') {
            throw new AppwriteException('Missing required parameter: "adminSecret"');
        }
        if (typeof database === 'undefined') {
            throw new AppwriteException('Missing required parameter: "database"');
        }
        if (typeof username === 'undefined') {
            throw new AppwriteException('Missing required parameter: "username"');
        }
        if (typeof password === 'undefined') {
            throw new AppwriteException('Missing required parameter: "password"');
        }
        const apiPath = '/migrations/nhost/report';
        const payload: Payload = {};
        if (typeof resources !== 'undefined') {
            payload['resources'] = resources;
        }
        if (typeof subdomain !== 'undefined') {
            payload['subdomain'] = subdomain;
        }
        if (typeof region !== 'undefined') {
            payload['region'] = region;
        }
        if (typeof adminSecret !== 'undefined') {
            payload['adminSecret'] = adminSecret;
        }
        if (typeof database !== 'undefined') {
            payload['database'] = database;
        }
        if (typeof username !== 'undefined') {
            payload['username'] = username;
        }
        if (typeof password !== 'undefined') {
            payload['password'] = password;
        }
        if (typeof port !== 'undefined') {
            payload['port'] = port;
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
     * Migrate data from a Supabase project to your Appwrite project. This endpoint allows you to migrate resources like authentication, databases, and other supported services from a Supabase project. 
     *
     * @param {string[]} resources
     * @param {string} endpoint
     * @param {string} apiKey
     * @param {string} databaseHost
     * @param {string} username
     * @param {string} password
     * @param {number} port
     * @throws {AppwriteException}
     * @returns {Promise<Models.Migration>}
     */
    createSupabaseMigration(resources: string[], endpoint: string, apiKey: string, databaseHost: string, username: string, password: string, port?: number): Promise<Models.Migration> {
        if (typeof resources === 'undefined') {
            throw new AppwriteException('Missing required parameter: "resources"');
        }
        if (typeof endpoint === 'undefined') {
            throw new AppwriteException('Missing required parameter: "endpoint"');
        }
        if (typeof apiKey === 'undefined') {
            throw new AppwriteException('Missing required parameter: "apiKey"');
        }
        if (typeof databaseHost === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseHost"');
        }
        if (typeof username === 'undefined') {
            throw new AppwriteException('Missing required parameter: "username"');
        }
        if (typeof password === 'undefined') {
            throw new AppwriteException('Missing required parameter: "password"');
        }
        const apiPath = '/migrations/supabase';
        const payload: Payload = {};
        if (typeof resources !== 'undefined') {
            payload['resources'] = resources;
        }
        if (typeof endpoint !== 'undefined') {
            payload['endpoint'] = endpoint;
        }
        if (typeof apiKey !== 'undefined') {
            payload['apiKey'] = apiKey;
        }
        if (typeof databaseHost !== 'undefined') {
            payload['databaseHost'] = databaseHost;
        }
        if (typeof username !== 'undefined') {
            payload['username'] = username;
        }
        if (typeof password !== 'undefined') {
            payload['password'] = password;
        }
        if (typeof port !== 'undefined') {
            payload['port'] = port;
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
     * Generate a report of the data in a Supabase project before migrating. This endpoint analyzes the source project and returns information about the resources that can be migrated. 
     *
     * @param {string[]} resources
     * @param {string} endpoint
     * @param {string} apiKey
     * @param {string} databaseHost
     * @param {string} username
     * @param {string} password
     * @param {number} port
     * @throws {AppwriteException}
     * @returns {Promise<Models.MigrationReport>}
     */
    getSupabaseReport(resources: string[], endpoint: string, apiKey: string, databaseHost: string, username: string, password: string, port?: number): Promise<Models.MigrationReport> {
        if (typeof resources === 'undefined') {
            throw new AppwriteException('Missing required parameter: "resources"');
        }
        if (typeof endpoint === 'undefined') {
            throw new AppwriteException('Missing required parameter: "endpoint"');
        }
        if (typeof apiKey === 'undefined') {
            throw new AppwriteException('Missing required parameter: "apiKey"');
        }
        if (typeof databaseHost === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseHost"');
        }
        if (typeof username === 'undefined') {
            throw new AppwriteException('Missing required parameter: "username"');
        }
        if (typeof password === 'undefined') {
            throw new AppwriteException('Missing required parameter: "password"');
        }
        const apiPath = '/migrations/supabase/report';
        const payload: Payload = {};
        if (typeof resources !== 'undefined') {
            payload['resources'] = resources;
        }
        if (typeof endpoint !== 'undefined') {
            payload['endpoint'] = endpoint;
        }
        if (typeof apiKey !== 'undefined') {
            payload['apiKey'] = apiKey;
        }
        if (typeof databaseHost !== 'undefined') {
            payload['databaseHost'] = databaseHost;
        }
        if (typeof username !== 'undefined') {
            payload['username'] = username;
        }
        if (typeof password !== 'undefined') {
            payload['password'] = password;
        }
        if (typeof port !== 'undefined') {
            payload['port'] = port;
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
     * Get a migration by its unique ID. This endpoint returns detailed information about a specific migration including its current status, progress, and any errors that occurred during the migration process. 
     *
     * @param {string} migrationId
     * @throws {AppwriteException}
     * @returns {Promise<Models.Migration>}
     */
    get(migrationId: string): Promise<Models.Migration> {
        if (typeof migrationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "migrationId"');
        }
        const apiPath = '/migrations/{migrationId}'.replace('{migrationId}', migrationId);
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
     * Retry a failed migration. This endpoint allows you to retry a migration that has previously failed.
     *
     * @param {string} migrationId
     * @throws {AppwriteException}
     * @returns {Promise<Models.Migration>}
     */
    retry(migrationId: string): Promise<Models.Migration> {
        if (typeof migrationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "migrationId"');
        }
        const apiPath = '/migrations/{migrationId}'.replace('{migrationId}', migrationId);
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
     * Delete a migration by its unique ID. This endpoint allows you to remove a migration from your project&#039;s migration history. 
     *
     * @param {string} migrationId
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    delete(migrationId: string): Promise<{}> {
        if (typeof migrationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "migrationId"');
        }
        const apiPath = '/migrations/{migrationId}'.replace('{migrationId}', migrationId);
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
