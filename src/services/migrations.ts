import { Service } from '../service';
import { AppwriteException, Client } from '../client';
import type { Models } from '../models';
import type { UploadProgress, Payload } from '../client';

export class Migrations extends Service {

     constructor(client: Client)
     {
        super(client);
     }

    /**
     * List Migrations
     *
     *
     * @param {string} queries
     * @param {string} search
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async list(queries?: string, search?: string): Promise<Models.MigrationList> {
        const apiPath = '/migrations';
        const payload: Payload = {};

        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }

        if (typeof search !== 'undefined') {
            payload['search'] = search;
        }

        const uri = new URL(this.client.config.endpoint + apiPath);
        return await this.client.call('get', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Migrate Appwrite Data
     *
     *
     * @param {string[]} resources
     * @param {string} endpoint
     * @param {string} projectId
     * @param {string} apiKey
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async createAppwriteMigration(resources: string[], endpoint: string, projectId: string, apiKey: string): Promise<Models.Migration> {
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
        return await this.client.call('post', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Generate a report on Appwrite Data
     *
     *
     * @param {string[]} resources
     * @param {string} endpoint
     * @param {string} projectID
     * @param {string} key
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async getAppwriteReport(resources: string[], endpoint: string, projectID: string, key: string): Promise<Models.MigrationReport> {
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
        return await this.client.call('get', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Migrate Firebase Data (Service Account)
     *
     *
     * @param {string[]} resources
     * @param {string} serviceAccount
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async createFirebaseMigration(resources: string[], serviceAccount: string): Promise<Models.Migration> {
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
        return await this.client.call('post', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Revoke Appwrite&#039;s authorization to access Firebase Projects
     *
     *
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async deleteFirebaseAuth(): Promise<{}> {
        const apiPath = '/migrations/firebase/deauthorize';
        const payload: Payload = {};

        const uri = new URL(this.client.config.endpoint + apiPath);
        return await this.client.call('get', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Migrate Firebase Data (OAuth)
     *
     *
     * @param {string[]} resources
     * @param {string} projectId
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async createFirebaseOAuthMigration(resources: string[], projectId: string): Promise<Models.Migration> {
        if (typeof resources === 'undefined') {
            throw new AppwriteException('Missing required parameter: "resources"');
        }

        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }

        const apiPath = '/migrations/firebase/oauth';
        const payload: Payload = {};

        if (typeof resources !== 'undefined') {
            payload['resources'] = resources;
        }

        if (typeof projectId !== 'undefined') {
            payload['projectId'] = projectId;
        }

        const uri = new URL(this.client.config.endpoint + apiPath);
        return await this.client.call('post', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * List Firebase Projects
     *
     *
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async listFirebaseProjects(): Promise<Models.FirebaseProjectList> {
        const apiPath = '/migrations/firebase/projects';
        const payload: Payload = {};

        const uri = new URL(this.client.config.endpoint + apiPath);
        return await this.client.call('get', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Generate a report on Firebase Data
     *
     *
     * @param {string[]} resources
     * @param {string} serviceAccount
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async getFirebaseReport(resources: string[], serviceAccount: string): Promise<Models.MigrationReport> {
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
        return await this.client.call('get', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Generate a report on Firebase Data using OAuth
     *
     *
     * @param {string[]} resources
     * @param {string} projectId
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async getFirebaseReportOAuth(resources: string[], projectId: string): Promise<Models.MigrationReport> {
        if (typeof resources === 'undefined') {
            throw new AppwriteException('Missing required parameter: "resources"');
        }

        if (typeof projectId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "projectId"');
        }

        const apiPath = '/migrations/firebase/report/oauth';
        const payload: Payload = {};

        if (typeof resources !== 'undefined') {
            payload['resources'] = resources;
        }

        if (typeof projectId !== 'undefined') {
            payload['projectId'] = projectId;
        }

        const uri = new URL(this.client.config.endpoint + apiPath);
        return await this.client.call('get', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Migrate NHost Data
     *
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
     * @returns {Promise}
    */
    async createNHostMigration(resources: string[], subdomain: string, region: string, adminSecret: string, database: string, username: string, password: string, port?: number): Promise<Models.Migration> {
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
        return await this.client.call('post', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Generate a report on NHost Data
     *
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
     * @returns {Promise}
    */
    async getNHostReport(resources: string[], subdomain: string, region: string, adminSecret: string, database: string, username: string, password: string, port?: number): Promise<Models.MigrationReport> {
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
        return await this.client.call('get', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Migrate Supabase Data
     *
     *
     * @param {string[]} resources
     * @param {string} endpoint
     * @param {string} apiKey
     * @param {string} databaseHost
     * @param {string} username
     * @param {string} password
     * @param {number} port
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async createSupabaseMigration(resources: string[], endpoint: string, apiKey: string, databaseHost: string, username: string, password: string, port?: number): Promise<Models.Migration> {
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
        return await this.client.call('post', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Generate a report on Supabase Data
     *
     *
     * @param {string[]} resources
     * @param {string} endpoint
     * @param {string} apiKey
     * @param {string} databaseHost
     * @param {string} username
     * @param {string} password
     * @param {number} port
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async getSupabaseReport(resources: string[], endpoint: string, apiKey: string, databaseHost: string, username: string, password: string, port?: number): Promise<Models.MigrationReport> {
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
        return await this.client.call('get', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Get Migration
     *
     *
     * @param {string} migrationId
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async get(migrationId: string): Promise<Models.Migration> {
        if (typeof migrationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "migrationId"');
        }

        const apiPath = '/migrations/{migrationId}'.replace('{migrationId}', migrationId);
        const payload: Payload = {};

        const uri = new URL(this.client.config.endpoint + apiPath);
        return await this.client.call('get', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Retry Migration
     *
     *
     * @param {string} migrationId
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async retry(migrationId: string): Promise<Models.Migration> {
        if (typeof migrationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "migrationId"');
        }

        const apiPath = '/migrations/{migrationId}'.replace('{migrationId}', migrationId);
        const payload: Payload = {};

        const uri = new URL(this.client.config.endpoint + apiPath);
        return await this.client.call('patch', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Delete Migration
     *
     *
     * @param {string} migrationId
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async delete(migrationId: string): Promise<{}> {
        if (typeof migrationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "migrationId"');
        }

        const apiPath = '/migrations/{migrationId}'.replace('{migrationId}', migrationId);
        const payload: Payload = {};

        const uri = new URL(this.client.config.endpoint + apiPath);
        return await this.client.call('delete', uri, {
            'content-type': 'application/json',
        }, payload);
    }
};
