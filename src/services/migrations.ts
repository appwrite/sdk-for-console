import { Service } from '../service';
import { AppwriteException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { AppwriteMigrationResource } from '../enums/appwrite-migration-resource';
import { FirebaseMigrationResource } from '../enums/firebase-migration-resource';
import { NHostMigrationResource } from '../enums/n-host-migration-resource';
import { SupabaseMigrationResource } from '../enums/supabase-migration-resource';

export class Migrations {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * List all migrations in the current project. This endpoint returns a list of all migrations including their status, progress, and any errors that occurred during the migration process.
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/databases#querying-documents). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: status, stage, source, destination, resources, resourceId, resourceType, statusCounters, resourceData, errors
     * @param {string} params.search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.MigrationList>}
     */
    list(params?: { queries?: string[], search?: string, total?: boolean }): Promise<Models.MigrationList>;
    /**
     * List all migrations in the current project. This endpoint returns a list of all migrations including their status, progress, and any errors that occurred during the migration process.
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/databases#querying-documents). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: status, stage, source, destination, resources, resourceId, resourceType, statusCounters, resourceData, errors
     * @param {string} search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.MigrationList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    list(queries?: string[], search?: string, total?: boolean): Promise<Models.MigrationList>;
    list(
        paramsOrFirst?: { queries?: string[], search?: string, total?: boolean } | string[],
        ...rest: [(string)?, (boolean)?]    
    ): Promise<Models.MigrationList> {
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


        const apiPath = '/migrations';
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
     * Migrate data from another Appwrite project to your current project. This endpoint allows you to migrate resources like databases, collections, documents, users, and files from an existing Appwrite project. 
     *
     * @param {AppwriteMigrationResource[]} params.resources - List of resources to migrate
     * @param {string} params.endpoint - Source Appwrite endpoint
     * @param {string} params.projectId - Source Project ID
     * @param {string} params.apiKey - Source API Key
     * @throws {AppwriteException}
     * @returns {Promise<Models.Migration>}
     */
    createAppwriteMigration(params: { resources: AppwriteMigrationResource[], endpoint: string, projectId: string, apiKey: string }): Promise<Models.Migration>;
    /**
     * Migrate data from another Appwrite project to your current project. This endpoint allows you to migrate resources like databases, collections, documents, users, and files from an existing Appwrite project. 
     *
     * @param {AppwriteMigrationResource[]} resources - List of resources to migrate
     * @param {string} endpoint - Source Appwrite endpoint
     * @param {string} projectId - Source Project ID
     * @param {string} apiKey - Source API Key
     * @throws {AppwriteException}
     * @returns {Promise<Models.Migration>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createAppwriteMigration(resources: AppwriteMigrationResource[], endpoint: string, projectId: string, apiKey: string): Promise<Models.Migration>;
    createAppwriteMigration(
        paramsOrFirst: { resources: AppwriteMigrationResource[], endpoint: string, projectId: string, apiKey: string } | AppwriteMigrationResource[],
        ...rest: [(string)?, (string)?, (string)?]    
    ): Promise<Models.Migration> {
        let params: { resources: AppwriteMigrationResource[], endpoint: string, projectId: string, apiKey: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('resources' in paramsOrFirst || 'endpoint' in paramsOrFirst || 'projectId' in paramsOrFirst || 'apiKey' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { resources: AppwriteMigrationResource[], endpoint: string, projectId: string, apiKey: string };
        } else {
            params = {
                resources: paramsOrFirst as AppwriteMigrationResource[],
                endpoint: rest[0] as string,
                projectId: rest[1] as string,
                apiKey: rest[2] as string            
            };
        }
        
        const resources = params.resources;
        const endpoint = params.endpoint;
        const projectId = params.projectId;
        const apiKey = params.apiKey;

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
     * @param {AppwriteMigrationResource[]} params.resources - List of resources to migrate
     * @param {string} params.endpoint - Source's Appwrite Endpoint
     * @param {string} params.projectID - Source's Project ID
     * @param {string} params.key - Source's API Key
     * @throws {AppwriteException}
     * @returns {Promise<Models.MigrationReport>}
     */
    getAppwriteReport(params: { resources: AppwriteMigrationResource[], endpoint: string, projectID: string, key: string }): Promise<Models.MigrationReport>;
    /**
     * Generate a report of the data in an Appwrite project before migrating. This endpoint analyzes the source project and returns information about the resources that can be migrated.
     *
     * @param {AppwriteMigrationResource[]} resources - List of resources to migrate
     * @param {string} endpoint - Source's Appwrite Endpoint
     * @param {string} projectID - Source's Project ID
     * @param {string} key - Source's API Key
     * @throws {AppwriteException}
     * @returns {Promise<Models.MigrationReport>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getAppwriteReport(resources: AppwriteMigrationResource[], endpoint: string, projectID: string, key: string): Promise<Models.MigrationReport>;
    getAppwriteReport(
        paramsOrFirst: { resources: AppwriteMigrationResource[], endpoint: string, projectID: string, key: string } | AppwriteMigrationResource[],
        ...rest: [(string)?, (string)?, (string)?]    
    ): Promise<Models.MigrationReport> {
        let params: { resources: AppwriteMigrationResource[], endpoint: string, projectID: string, key: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('resources' in paramsOrFirst || 'endpoint' in paramsOrFirst || 'projectID' in paramsOrFirst || 'key' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { resources: AppwriteMigrationResource[], endpoint: string, projectID: string, key: string };
        } else {
            params = {
                resources: paramsOrFirst as AppwriteMigrationResource[],
                endpoint: rest[0] as string,
                projectID: rest[1] as string,
                key: rest[2] as string            
            };
        }
        
        const resources = params.resources;
        const endpoint = params.endpoint;
        const projectID = params.projectID;
        const key = params.key;

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
     * Export documents to a CSV file from your Appwrite database. This endpoint allows you to export documents to a CSV file stored in a secure internal bucket. You'll receive an email with a download link when the export is complete.
     *
     * @param {string} params.resourceId - Composite ID in the format {databaseId:collectionId}, identifying a collection within a database to export.
     * @param {string} params.filename - The name of the file to be created for the export, excluding the .csv extension.
     * @param {string[]} params.columns - List of attributes to export. If empty, all attributes will be exported. You can use the `*` wildcard to export all attributes from the collection.
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK to filter documents to export. [Learn more about queries](https://appwrite.io/docs/databases#querying-documents). Maximum of 100 queries are allowed, each 4096 characters long.
     * @param {string} params.delimiter - The character that separates each column value. Default is comma.
     * @param {string} params.enclosure - The character that encloses each column value. Default is double quotes.
     * @param {string} params.escape - The escape character for the enclosure character. Default is double quotes.
     * @param {boolean} params.header - Whether to include the header row with column names. Default is true.
     * @param {boolean} params.notify - Set to true to receive an email when the export is complete. Default is true.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Migration>}
     */
    createCSVExport(params: { resourceId: string, filename: string, columns?: string[], queries?: string[], delimiter?: string, enclosure?: string, escape?: string, header?: boolean, notify?: boolean }): Promise<Models.Migration>;
    /**
     * Export documents to a CSV file from your Appwrite database. This endpoint allows you to export documents to a CSV file stored in a secure internal bucket. You'll receive an email with a download link when the export is complete.
     *
     * @param {string} resourceId - Composite ID in the format {databaseId:collectionId}, identifying a collection within a database to export.
     * @param {string} filename - The name of the file to be created for the export, excluding the .csv extension.
     * @param {string[]} columns - List of attributes to export. If empty, all attributes will be exported. You can use the `*` wildcard to export all attributes from the collection.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK to filter documents to export. [Learn more about queries](https://appwrite.io/docs/databases#querying-documents). Maximum of 100 queries are allowed, each 4096 characters long.
     * @param {string} delimiter - The character that separates each column value. Default is comma.
     * @param {string} enclosure - The character that encloses each column value. Default is double quotes.
     * @param {string} escape - The escape character for the enclosure character. Default is double quotes.
     * @param {boolean} header - Whether to include the header row with column names. Default is true.
     * @param {boolean} notify - Set to true to receive an email when the export is complete. Default is true.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Migration>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createCSVExport(resourceId: string, filename: string, columns?: string[], queries?: string[], delimiter?: string, enclosure?: string, escape?: string, header?: boolean, notify?: boolean): Promise<Models.Migration>;
    createCSVExport(
        paramsOrFirst: { resourceId: string, filename: string, columns?: string[], queries?: string[], delimiter?: string, enclosure?: string, escape?: string, header?: boolean, notify?: boolean } | string,
        ...rest: [(string)?, (string[])?, (string[])?, (string)?, (string)?, (string)?, (boolean)?, (boolean)?]    
    ): Promise<Models.Migration> {
        let params: { resourceId: string, filename: string, columns?: string[], queries?: string[], delimiter?: string, enclosure?: string, escape?: string, header?: boolean, notify?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { resourceId: string, filename: string, columns?: string[], queries?: string[], delimiter?: string, enclosure?: string, escape?: string, header?: boolean, notify?: boolean };
        } else {
            params = {
                resourceId: paramsOrFirst as string,
                filename: rest[0] as string,
                columns: rest[1] as string[],
                queries: rest[2] as string[],
                delimiter: rest[3] as string,
                enclosure: rest[4] as string,
                escape: rest[5] as string,
                header: rest[6] as boolean,
                notify: rest[7] as boolean            
            };
        }
        
        const resourceId = params.resourceId;
        const filename = params.filename;
        const columns = params.columns;
        const queries = params.queries;
        const delimiter = params.delimiter;
        const enclosure = params.enclosure;
        const escape = params.escape;
        const header = params.header;
        const notify = params.notify;

        if (typeof resourceId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "resourceId"');
        }
        if (typeof filename === 'undefined') {
            throw new AppwriteException('Missing required parameter: "filename"');
        }

        const apiPath = '/migrations/csv/exports';
        const payload: Payload = {};
        if (typeof resourceId !== 'undefined') {
            payload['resourceId'] = resourceId;
        }
        if (typeof filename !== 'undefined') {
            payload['filename'] = filename;
        }
        if (typeof columns !== 'undefined') {
            payload['columns'] = columns;
        }
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }
        if (typeof delimiter !== 'undefined') {
            payload['delimiter'] = delimiter;
        }
        if (typeof enclosure !== 'undefined') {
            payload['enclosure'] = enclosure;
        }
        if (typeof escape !== 'undefined') {
            payload['escape'] = escape;
        }
        if (typeof header !== 'undefined') {
            payload['header'] = header;
        }
        if (typeof notify !== 'undefined') {
            payload['notify'] = notify;
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
     * Import documents from a CSV file into your Appwrite database. This endpoint allows you to import documents from a CSV file uploaded to Appwrite Storage bucket.
     *
     * @param {string} params.bucketId - Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).
     * @param {string} params.fileId - File ID.
     * @param {string} params.resourceId - Composite ID in the format {databaseId:collectionId}, identifying a collection within a database.
     * @param {boolean} params.internalFile - Is the file stored in an internal bucket?
     * @throws {AppwriteException}
     * @returns {Promise<Models.Migration>}
     */
    createCSVImport(params: { bucketId: string, fileId: string, resourceId: string, internalFile?: boolean }): Promise<Models.Migration>;
    /**
     * Import documents from a CSV file into your Appwrite database. This endpoint allows you to import documents from a CSV file uploaded to Appwrite Storage bucket.
     *
     * @param {string} bucketId - Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).
     * @param {string} fileId - File ID.
     * @param {string} resourceId - Composite ID in the format {databaseId:collectionId}, identifying a collection within a database.
     * @param {boolean} internalFile - Is the file stored in an internal bucket?
     * @throws {AppwriteException}
     * @returns {Promise<Models.Migration>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createCSVImport(bucketId: string, fileId: string, resourceId: string, internalFile?: boolean): Promise<Models.Migration>;
    createCSVImport(
        paramsOrFirst: { bucketId: string, fileId: string, resourceId: string, internalFile?: boolean } | string,
        ...rest: [(string)?, (string)?, (boolean)?]    
    ): Promise<Models.Migration> {
        let params: { bucketId: string, fileId: string, resourceId: string, internalFile?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { bucketId: string, fileId: string, resourceId: string, internalFile?: boolean };
        } else {
            params = {
                bucketId: paramsOrFirst as string,
                fileId: rest[0] as string,
                resourceId: rest[1] as string,
                internalFile: rest[2] as boolean            
            };
        }
        
        const bucketId = params.bucketId;
        const fileId = params.fileId;
        const resourceId = params.resourceId;
        const internalFile = params.internalFile;

        if (typeof bucketId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "bucketId"');
        }
        if (typeof fileId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "fileId"');
        }
        if (typeof resourceId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "resourceId"');
        }

        const apiPath = '/migrations/csv/imports';
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
        if (typeof internalFile !== 'undefined') {
            payload['internalFile'] = internalFile;
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
     * @param {FirebaseMigrationResource[]} params.resources - List of resources to migrate
     * @param {string} params.serviceAccount - JSON of the Firebase service account credentials
     * @throws {AppwriteException}
     * @returns {Promise<Models.Migration>}
     */
    createFirebaseMigration(params: { resources: FirebaseMigrationResource[], serviceAccount: string }): Promise<Models.Migration>;
    /**
     * Migrate data from a Firebase project to your Appwrite project. This endpoint allows you to migrate resources like authentication and other supported services from a Firebase project. 
     *
     * @param {FirebaseMigrationResource[]} resources - List of resources to migrate
     * @param {string} serviceAccount - JSON of the Firebase service account credentials
     * @throws {AppwriteException}
     * @returns {Promise<Models.Migration>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createFirebaseMigration(resources: FirebaseMigrationResource[], serviceAccount: string): Promise<Models.Migration>;
    createFirebaseMigration(
        paramsOrFirst: { resources: FirebaseMigrationResource[], serviceAccount: string } | FirebaseMigrationResource[],
        ...rest: [(string)?]    
    ): Promise<Models.Migration> {
        let params: { resources: FirebaseMigrationResource[], serviceAccount: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('resources' in paramsOrFirst || 'serviceAccount' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { resources: FirebaseMigrationResource[], serviceAccount: string };
        } else {
            params = {
                resources: paramsOrFirst as FirebaseMigrationResource[],
                serviceAccount: rest[0] as string            
            };
        }
        
        const resources = params.resources;
        const serviceAccount = params.serviceAccount;

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
     * @param {FirebaseMigrationResource[]} params.resources - List of resources to migrate
     * @param {string} params.serviceAccount - JSON of the Firebase service account credentials
     * @throws {AppwriteException}
     * @returns {Promise<Models.MigrationReport>}
     */
    getFirebaseReport(params: { resources: FirebaseMigrationResource[], serviceAccount: string }): Promise<Models.MigrationReport>;
    /**
     * Generate a report of the data in a Firebase project before migrating. This endpoint analyzes the source project and returns information about the resources that can be migrated.
     *
     * @param {FirebaseMigrationResource[]} resources - List of resources to migrate
     * @param {string} serviceAccount - JSON of the Firebase service account credentials
     * @throws {AppwriteException}
     * @returns {Promise<Models.MigrationReport>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getFirebaseReport(resources: FirebaseMigrationResource[], serviceAccount: string): Promise<Models.MigrationReport>;
    getFirebaseReport(
        paramsOrFirst: { resources: FirebaseMigrationResource[], serviceAccount: string } | FirebaseMigrationResource[],
        ...rest: [(string)?]    
    ): Promise<Models.MigrationReport> {
        let params: { resources: FirebaseMigrationResource[], serviceAccount: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('resources' in paramsOrFirst || 'serviceAccount' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { resources: FirebaseMigrationResource[], serviceAccount: string };
        } else {
            params = {
                resources: paramsOrFirst as FirebaseMigrationResource[],
                serviceAccount: rest[0] as string            
            };
        }
        
        const resources = params.resources;
        const serviceAccount = params.serviceAccount;

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
     * @param {NHostMigrationResource[]} params.resources - List of resources to migrate
     * @param {string} params.subdomain - Source's Subdomain
     * @param {string} params.region - Source's Region
     * @param {string} params.adminSecret - Source's Admin Secret
     * @param {string} params.database - Source's Database Name
     * @param {string} params.username - Source's Database Username
     * @param {string} params.password - Source's Database Password
     * @param {number} params.port - Source's Database Port
     * @throws {AppwriteException}
     * @returns {Promise<Models.Migration>}
     */
    createNHostMigration(params: { resources: NHostMigrationResource[], subdomain: string, region: string, adminSecret: string, database: string, username: string, password: string, port?: number }): Promise<Models.Migration>;
    /**
     * Migrate data from an NHost project to your Appwrite project. This endpoint allows you to migrate resources like authentication, databases, and other supported services from an NHost project. 
     *
     * @param {NHostMigrationResource[]} resources - List of resources to migrate
     * @param {string} subdomain - Source's Subdomain
     * @param {string} region - Source's Region
     * @param {string} adminSecret - Source's Admin Secret
     * @param {string} database - Source's Database Name
     * @param {string} username - Source's Database Username
     * @param {string} password - Source's Database Password
     * @param {number} port - Source's Database Port
     * @throws {AppwriteException}
     * @returns {Promise<Models.Migration>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createNHostMigration(resources: NHostMigrationResource[], subdomain: string, region: string, adminSecret: string, database: string, username: string, password: string, port?: number): Promise<Models.Migration>;
    createNHostMigration(
        paramsOrFirst: { resources: NHostMigrationResource[], subdomain: string, region: string, adminSecret: string, database: string, username: string, password: string, port?: number } | NHostMigrationResource[],
        ...rest: [(string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (number)?]    
    ): Promise<Models.Migration> {
        let params: { resources: NHostMigrationResource[], subdomain: string, region: string, adminSecret: string, database: string, username: string, password: string, port?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('resources' in paramsOrFirst || 'subdomain' in paramsOrFirst || 'region' in paramsOrFirst || 'adminSecret' in paramsOrFirst || 'database' in paramsOrFirst || 'username' in paramsOrFirst || 'password' in paramsOrFirst || 'port' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { resources: NHostMigrationResource[], subdomain: string, region: string, adminSecret: string, database: string, username: string, password: string, port?: number };
        } else {
            params = {
                resources: paramsOrFirst as NHostMigrationResource[],
                subdomain: rest[0] as string,
                region: rest[1] as string,
                adminSecret: rest[2] as string,
                database: rest[3] as string,
                username: rest[4] as string,
                password: rest[5] as string,
                port: rest[6] as number            
            };
        }
        
        const resources = params.resources;
        const subdomain = params.subdomain;
        const region = params.region;
        const adminSecret = params.adminSecret;
        const database = params.database;
        const username = params.username;
        const password = params.password;
        const port = params.port;

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
     * @param {NHostMigrationResource[]} params.resources - List of resources to migrate.
     * @param {string} params.subdomain - Source's Subdomain.
     * @param {string} params.region - Source's Region.
     * @param {string} params.adminSecret - Source's Admin Secret.
     * @param {string} params.database - Source's Database Name.
     * @param {string} params.username - Source's Database Username.
     * @param {string} params.password - Source's Database Password.
     * @param {number} params.port - Source's Database Port.
     * @throws {AppwriteException}
     * @returns {Promise<Models.MigrationReport>}
     */
    getNHostReport(params: { resources: NHostMigrationResource[], subdomain: string, region: string, adminSecret: string, database: string, username: string, password: string, port?: number }): Promise<Models.MigrationReport>;
    /**
     * Generate a detailed report of the data in an NHost project before migrating. This endpoint analyzes the source project and returns information about the resources that can be migrated. 
     *
     * @param {NHostMigrationResource[]} resources - List of resources to migrate.
     * @param {string} subdomain - Source's Subdomain.
     * @param {string} region - Source's Region.
     * @param {string} adminSecret - Source's Admin Secret.
     * @param {string} database - Source's Database Name.
     * @param {string} username - Source's Database Username.
     * @param {string} password - Source's Database Password.
     * @param {number} port - Source's Database Port.
     * @throws {AppwriteException}
     * @returns {Promise<Models.MigrationReport>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getNHostReport(resources: NHostMigrationResource[], subdomain: string, region: string, adminSecret: string, database: string, username: string, password: string, port?: number): Promise<Models.MigrationReport>;
    getNHostReport(
        paramsOrFirst: { resources: NHostMigrationResource[], subdomain: string, region: string, adminSecret: string, database: string, username: string, password: string, port?: number } | NHostMigrationResource[],
        ...rest: [(string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (number)?]    
    ): Promise<Models.MigrationReport> {
        let params: { resources: NHostMigrationResource[], subdomain: string, region: string, adminSecret: string, database: string, username: string, password: string, port?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('resources' in paramsOrFirst || 'subdomain' in paramsOrFirst || 'region' in paramsOrFirst || 'adminSecret' in paramsOrFirst || 'database' in paramsOrFirst || 'username' in paramsOrFirst || 'password' in paramsOrFirst || 'port' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { resources: NHostMigrationResource[], subdomain: string, region: string, adminSecret: string, database: string, username: string, password: string, port?: number };
        } else {
            params = {
                resources: paramsOrFirst as NHostMigrationResource[],
                subdomain: rest[0] as string,
                region: rest[1] as string,
                adminSecret: rest[2] as string,
                database: rest[3] as string,
                username: rest[4] as string,
                password: rest[5] as string,
                port: rest[6] as number            
            };
        }
        
        const resources = params.resources;
        const subdomain = params.subdomain;
        const region = params.region;
        const adminSecret = params.adminSecret;
        const database = params.database;
        const username = params.username;
        const password = params.password;
        const port = params.port;

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
     * @param {SupabaseMigrationResource[]} params.resources - List of resources to migrate
     * @param {string} params.endpoint - Source's Supabase Endpoint
     * @param {string} params.apiKey - Source's API Key
     * @param {string} params.databaseHost - Source's Database Host
     * @param {string} params.username - Source's Database Username
     * @param {string} params.password - Source's Database Password
     * @param {number} params.port - Source's Database Port
     * @throws {AppwriteException}
     * @returns {Promise<Models.Migration>}
     */
    createSupabaseMigration(params: { resources: SupabaseMigrationResource[], endpoint: string, apiKey: string, databaseHost: string, username: string, password: string, port?: number }): Promise<Models.Migration>;
    /**
     * Migrate data from a Supabase project to your Appwrite project. This endpoint allows you to migrate resources like authentication, databases, and other supported services from a Supabase project. 
     *
     * @param {SupabaseMigrationResource[]} resources - List of resources to migrate
     * @param {string} endpoint - Source's Supabase Endpoint
     * @param {string} apiKey - Source's API Key
     * @param {string} databaseHost - Source's Database Host
     * @param {string} username - Source's Database Username
     * @param {string} password - Source's Database Password
     * @param {number} port - Source's Database Port
     * @throws {AppwriteException}
     * @returns {Promise<Models.Migration>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createSupabaseMigration(resources: SupabaseMigrationResource[], endpoint: string, apiKey: string, databaseHost: string, username: string, password: string, port?: number): Promise<Models.Migration>;
    createSupabaseMigration(
        paramsOrFirst: { resources: SupabaseMigrationResource[], endpoint: string, apiKey: string, databaseHost: string, username: string, password: string, port?: number } | SupabaseMigrationResource[],
        ...rest: [(string)?, (string)?, (string)?, (string)?, (string)?, (number)?]    
    ): Promise<Models.Migration> {
        let params: { resources: SupabaseMigrationResource[], endpoint: string, apiKey: string, databaseHost: string, username: string, password: string, port?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('resources' in paramsOrFirst || 'endpoint' in paramsOrFirst || 'apiKey' in paramsOrFirst || 'databaseHost' in paramsOrFirst || 'username' in paramsOrFirst || 'password' in paramsOrFirst || 'port' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { resources: SupabaseMigrationResource[], endpoint: string, apiKey: string, databaseHost: string, username: string, password: string, port?: number };
        } else {
            params = {
                resources: paramsOrFirst as SupabaseMigrationResource[],
                endpoint: rest[0] as string,
                apiKey: rest[1] as string,
                databaseHost: rest[2] as string,
                username: rest[3] as string,
                password: rest[4] as string,
                port: rest[5] as number            
            };
        }
        
        const resources = params.resources;
        const endpoint = params.endpoint;
        const apiKey = params.apiKey;
        const databaseHost = params.databaseHost;
        const username = params.username;
        const password = params.password;
        const port = params.port;

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
     * @param {SupabaseMigrationResource[]} params.resources - List of resources to migrate
     * @param {string} params.endpoint - Source's Supabase Endpoint.
     * @param {string} params.apiKey - Source's API Key.
     * @param {string} params.databaseHost - Source's Database Host.
     * @param {string} params.username - Source's Database Username.
     * @param {string} params.password - Source's Database Password.
     * @param {number} params.port - Source's Database Port.
     * @throws {AppwriteException}
     * @returns {Promise<Models.MigrationReport>}
     */
    getSupabaseReport(params: { resources: SupabaseMigrationResource[], endpoint: string, apiKey: string, databaseHost: string, username: string, password: string, port?: number }): Promise<Models.MigrationReport>;
    /**
     * Generate a report of the data in a Supabase project before migrating. This endpoint analyzes the source project and returns information about the resources that can be migrated. 
     *
     * @param {SupabaseMigrationResource[]} resources - List of resources to migrate
     * @param {string} endpoint - Source's Supabase Endpoint.
     * @param {string} apiKey - Source's API Key.
     * @param {string} databaseHost - Source's Database Host.
     * @param {string} username - Source's Database Username.
     * @param {string} password - Source's Database Password.
     * @param {number} port - Source's Database Port.
     * @throws {AppwriteException}
     * @returns {Promise<Models.MigrationReport>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getSupabaseReport(resources: SupabaseMigrationResource[], endpoint: string, apiKey: string, databaseHost: string, username: string, password: string, port?: number): Promise<Models.MigrationReport>;
    getSupabaseReport(
        paramsOrFirst: { resources: SupabaseMigrationResource[], endpoint: string, apiKey: string, databaseHost: string, username: string, password: string, port?: number } | SupabaseMigrationResource[],
        ...rest: [(string)?, (string)?, (string)?, (string)?, (string)?, (number)?]    
    ): Promise<Models.MigrationReport> {
        let params: { resources: SupabaseMigrationResource[], endpoint: string, apiKey: string, databaseHost: string, username: string, password: string, port?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('resources' in paramsOrFirst || 'endpoint' in paramsOrFirst || 'apiKey' in paramsOrFirst || 'databaseHost' in paramsOrFirst || 'username' in paramsOrFirst || 'password' in paramsOrFirst || 'port' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { resources: SupabaseMigrationResource[], endpoint: string, apiKey: string, databaseHost: string, username: string, password: string, port?: number };
        } else {
            params = {
                resources: paramsOrFirst as SupabaseMigrationResource[],
                endpoint: rest[0] as string,
                apiKey: rest[1] as string,
                databaseHost: rest[2] as string,
                username: rest[3] as string,
                password: rest[4] as string,
                port: rest[5] as number            
            };
        }
        
        const resources = params.resources;
        const endpoint = params.endpoint;
        const apiKey = params.apiKey;
        const databaseHost = params.databaseHost;
        const username = params.username;
        const password = params.password;
        const port = params.port;

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
     * @param {string} params.migrationId - Migration unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Migration>}
     */
    get(params: { migrationId: string }): Promise<Models.Migration>;
    /**
     * Get a migration by its unique ID. This endpoint returns detailed information about a specific migration including its current status, progress, and any errors that occurred during the migration process. 
     *
     * @param {string} migrationId - Migration unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Migration>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    get(migrationId: string): Promise<Models.Migration>;
    get(
        paramsOrFirst: { migrationId: string } | string    
    ): Promise<Models.Migration> {
        let params: { migrationId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { migrationId: string };
        } else {
            params = {
                migrationId: paramsOrFirst as string            
            };
        }
        
        const migrationId = params.migrationId;

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
     * @param {string} params.migrationId - Migration unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Migration>}
     */
    retry(params: { migrationId: string }): Promise<Models.Migration>;
    /**
     * Retry a failed migration. This endpoint allows you to retry a migration that has previously failed.
     *
     * @param {string} migrationId - Migration unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Migration>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    retry(migrationId: string): Promise<Models.Migration>;
    retry(
        paramsOrFirst: { migrationId: string } | string    
    ): Promise<Models.Migration> {
        let params: { migrationId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { migrationId: string };
        } else {
            params = {
                migrationId: paramsOrFirst as string            
            };
        }
        
        const migrationId = params.migrationId;

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
     * Delete a migration by its unique ID. This endpoint allows you to remove a migration from your project's migration history. 
     *
     * @param {string} params.migrationId - Migration ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    delete(params: { migrationId: string }): Promise<{}>;
    /**
     * Delete a migration by its unique ID. This endpoint allows you to remove a migration from your project's migration history. 
     *
     * @param {string} migrationId - Migration ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    delete(migrationId: string): Promise<{}>;
    delete(
        paramsOrFirst: { migrationId: string } | string    
    ): Promise<{}> {
        let params: { migrationId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { migrationId: string };
        } else {
            params = {
                migrationId: paramsOrFirst as string            
            };
        }
        
        const migrationId = params.migrationId;

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
