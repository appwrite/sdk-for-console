import { Client } from '../client';
import type { Models } from '../models';
import { Resources } from '../enums/resources';
export declare class Migrations {
    client: Client;
    constructor(client: Client);
    /**
     * List all migrations in the current project. This endpoint returns a list of all migrations including their status, progress, and any errors that occurred during the migration process.
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/databases#querying-documents). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: status, stage, source, destination, resources, resourceId, resourceType, statusCounters, resourceData, errors
     * @param {string} params.search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.MigrationList>}
     */
    list(params?: {
        queries?: string[];
        search?: string;
        total?: boolean;
    }): Promise<Models.MigrationList>;
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
    /**
     * Migrate data from another Appwrite project to your current project. This endpoint allows you to migrate resources like databases, collections, documents, users, and files from an existing Appwrite project.
     *
     * @param {Resources[]} params.resources - List of resources to migrate
     * @param {string} params.endpoint - Source Appwrite endpoint
     * @param {string} params.projectId - Source Project ID
     * @param {string} params.apiKey - Source API Key
     * @throws {AppwriteException}
     * @returns {Promise<Models.Migration>}
     */
    createAppwriteMigration(params: {
        resources: Resources[];
        endpoint: string;
        projectId: string;
        apiKey: string;
    }): Promise<Models.Migration>;
    /**
     * Migrate data from another Appwrite project to your current project. This endpoint allows you to migrate resources like databases, collections, documents, users, and files from an existing Appwrite project.
     *
     * @param {Resources[]} resources - List of resources to migrate
     * @param {string} endpoint - Source Appwrite endpoint
     * @param {string} projectId - Source Project ID
     * @param {string} apiKey - Source API Key
     * @throws {AppwriteException}
     * @returns {Promise<Models.Migration>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createAppwriteMigration(resources: Resources[], endpoint: string, projectId: string, apiKey: string): Promise<Models.Migration>;
    /**
     * Generate a report of the data in an Appwrite project before migrating. This endpoint analyzes the source project and returns information about the resources that can be migrated.
     *
     * @param {Resources[]} params.resources - List of resources to migrate
     * @param {string} params.endpoint - Source's Appwrite Endpoint
     * @param {string} params.projectID - Source's Project ID
     * @param {string} params.key - Source's API Key
     * @throws {AppwriteException}
     * @returns {Promise<Models.MigrationReport>}
     */
    getAppwriteReport(params: {
        resources: Resources[];
        endpoint: string;
        projectID: string;
        key: string;
    }): Promise<Models.MigrationReport>;
    /**
     * Generate a report of the data in an Appwrite project before migrating. This endpoint analyzes the source project and returns information about the resources that can be migrated.
     *
     * @param {Resources[]} resources - List of resources to migrate
     * @param {string} endpoint - Source's Appwrite Endpoint
     * @param {string} projectID - Source's Project ID
     * @param {string} key - Source's API Key
     * @throws {AppwriteException}
     * @returns {Promise<Models.MigrationReport>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getAppwriteReport(resources: Resources[], endpoint: string, projectID: string, key: string): Promise<Models.MigrationReport>;
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
    createCSVExport(params: {
        resourceId: string;
        filename: string;
        columns?: string[];
        queries?: string[];
        delimiter?: string;
        enclosure?: string;
        escape?: string;
        header?: boolean;
        notify?: boolean;
    }): Promise<Models.Migration>;
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
    createCSVImport(params: {
        bucketId: string;
        fileId: string;
        resourceId: string;
        internalFile?: boolean;
    }): Promise<Models.Migration>;
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
    /**
     * Migrate data from a Firebase project to your Appwrite project. This endpoint allows you to migrate resources like authentication and other supported services from a Firebase project.
     *
     * @param {Resources[]} params.resources - List of resources to migrate
     * @param {string} params.serviceAccount - JSON of the Firebase service account credentials
     * @throws {AppwriteException}
     * @returns {Promise<Models.Migration>}
     */
    createFirebaseMigration(params: {
        resources: Resources[];
        serviceAccount: string;
    }): Promise<Models.Migration>;
    /**
     * Migrate data from a Firebase project to your Appwrite project. This endpoint allows you to migrate resources like authentication and other supported services from a Firebase project.
     *
     * @param {Resources[]} resources - List of resources to migrate
     * @param {string} serviceAccount - JSON of the Firebase service account credentials
     * @throws {AppwriteException}
     * @returns {Promise<Models.Migration>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createFirebaseMigration(resources: Resources[], serviceAccount: string): Promise<Models.Migration>;
    /**
     * Generate a report of the data in a Firebase project before migrating. This endpoint analyzes the source project and returns information about the resources that can be migrated.
     *
     * @param {Resources[]} params.resources - List of resources to migrate
     * @param {string} params.serviceAccount - JSON of the Firebase service account credentials
     * @throws {AppwriteException}
     * @returns {Promise<Models.MigrationReport>}
     */
    getFirebaseReport(params: {
        resources: Resources[];
        serviceAccount: string;
    }): Promise<Models.MigrationReport>;
    /**
     * Generate a report of the data in a Firebase project before migrating. This endpoint analyzes the source project and returns information about the resources that can be migrated.
     *
     * @param {Resources[]} resources - List of resources to migrate
     * @param {string} serviceAccount - JSON of the Firebase service account credentials
     * @throws {AppwriteException}
     * @returns {Promise<Models.MigrationReport>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getFirebaseReport(resources: Resources[], serviceAccount: string): Promise<Models.MigrationReport>;
    /**
     * Migrate data from an NHost project to your Appwrite project. This endpoint allows you to migrate resources like authentication, databases, and other supported services from an NHost project.
     *
     * @param {Resources[]} params.resources - List of resources to migrate
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
    createNHostMigration(params: {
        resources: Resources[];
        subdomain: string;
        region: string;
        adminSecret: string;
        database: string;
        username: string;
        password: string;
        port?: number;
    }): Promise<Models.Migration>;
    /**
     * Migrate data from an NHost project to your Appwrite project. This endpoint allows you to migrate resources like authentication, databases, and other supported services from an NHost project.
     *
     * @param {Resources[]} resources - List of resources to migrate
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
    createNHostMigration(resources: Resources[], subdomain: string, region: string, adminSecret: string, database: string, username: string, password: string, port?: number): Promise<Models.Migration>;
    /**
     * Generate a detailed report of the data in an NHost project before migrating. This endpoint analyzes the source project and returns information about the resources that can be migrated.
     *
     * @param {Resources[]} params.resources - List of resources to migrate.
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
    getNHostReport(params: {
        resources: Resources[];
        subdomain: string;
        region: string;
        adminSecret: string;
        database: string;
        username: string;
        password: string;
        port?: number;
    }): Promise<Models.MigrationReport>;
    /**
     * Generate a detailed report of the data in an NHost project before migrating. This endpoint analyzes the source project and returns information about the resources that can be migrated.
     *
     * @param {Resources[]} resources - List of resources to migrate.
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
    getNHostReport(resources: Resources[], subdomain: string, region: string, adminSecret: string, database: string, username: string, password: string, port?: number): Promise<Models.MigrationReport>;
    /**
     * Migrate data from a Supabase project to your Appwrite project. This endpoint allows you to migrate resources like authentication, databases, and other supported services from a Supabase project.
     *
     * @param {Resources[]} params.resources - List of resources to migrate
     * @param {string} params.endpoint - Source's Supabase Endpoint
     * @param {string} params.apiKey - Source's API Key
     * @param {string} params.databaseHost - Source's Database Host
     * @param {string} params.username - Source's Database Username
     * @param {string} params.password - Source's Database Password
     * @param {number} params.port - Source's Database Port
     * @throws {AppwriteException}
     * @returns {Promise<Models.Migration>}
     */
    createSupabaseMigration(params: {
        resources: Resources[];
        endpoint: string;
        apiKey: string;
        databaseHost: string;
        username: string;
        password: string;
        port?: number;
    }): Promise<Models.Migration>;
    /**
     * Migrate data from a Supabase project to your Appwrite project. This endpoint allows you to migrate resources like authentication, databases, and other supported services from a Supabase project.
     *
     * @param {Resources[]} resources - List of resources to migrate
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
    createSupabaseMigration(resources: Resources[], endpoint: string, apiKey: string, databaseHost: string, username: string, password: string, port?: number): Promise<Models.Migration>;
    /**
     * Generate a report of the data in a Supabase project before migrating. This endpoint analyzes the source project and returns information about the resources that can be migrated.
     *
     * @param {Resources[]} params.resources - List of resources to migrate
     * @param {string} params.endpoint - Source's Supabase Endpoint.
     * @param {string} params.apiKey - Source's API Key.
     * @param {string} params.databaseHost - Source's Database Host.
     * @param {string} params.username - Source's Database Username.
     * @param {string} params.password - Source's Database Password.
     * @param {number} params.port - Source's Database Port.
     * @throws {AppwriteException}
     * @returns {Promise<Models.MigrationReport>}
     */
    getSupabaseReport(params: {
        resources: Resources[];
        endpoint: string;
        apiKey: string;
        databaseHost: string;
        username: string;
        password: string;
        port?: number;
    }): Promise<Models.MigrationReport>;
    /**
     * Generate a report of the data in a Supabase project before migrating. This endpoint analyzes the source project and returns information about the resources that can be migrated.
     *
     * @param {Resources[]} resources - List of resources to migrate
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
    getSupabaseReport(resources: Resources[], endpoint: string, apiKey: string, databaseHost: string, username: string, password: string, port?: number): Promise<Models.MigrationReport>;
    /**
     * Get a migration by its unique ID. This endpoint returns detailed information about a specific migration including its current status, progress, and any errors that occurred during the migration process.
     *
     * @param {string} params.migrationId - Migration unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Migration>}
     */
    get(params: {
        migrationId: string;
    }): Promise<Models.Migration>;
    /**
     * Get a migration by its unique ID. This endpoint returns detailed information about a specific migration including its current status, progress, and any errors that occurred during the migration process.
     *
     * @param {string} migrationId - Migration unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Migration>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    get(migrationId: string): Promise<Models.Migration>;
    /**
     * Retry a failed migration. This endpoint allows you to retry a migration that has previously failed.
     *
     * @param {string} params.migrationId - Migration unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Migration>}
     */
    retry(params: {
        migrationId: string;
    }): Promise<Models.Migration>;
    /**
     * Retry a failed migration. This endpoint allows you to retry a migration that has previously failed.
     *
     * @param {string} migrationId - Migration unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Migration>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    retry(migrationId: string): Promise<Models.Migration>;
    /**
     * Delete a migration by its unique ID. This endpoint allows you to remove a migration from your project's migration history.
     *
     * @param {string} params.migrationId - Migration ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    delete(params: {
        migrationId: string;
    }): Promise<{}>;
    /**
     * Delete a migration by its unique ID. This endpoint allows you to remove a migration from your project's migration history.
     *
     * @param {string} migrationId - Migration ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    delete(migrationId: string): Promise<{}>;
}
