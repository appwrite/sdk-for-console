import { Client } from '../client';
import type { Models } from '../models';
import { UsageRange } from '../enums/usage-range';
import { RelationshipType } from '../enums/relationship-type';
import { RelationMutate } from '../enums/relation-mutate';
import { IndexType } from '../enums/index-type';
import { OrderBy } from '../enums/order-by';
export declare class Databases {
    client: Client;
    constructor(client: Client);
    /**
     * Get a list of all databases from the current Appwrite project. You can use the search parameter to filter your results.
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name
     * @param {string} params.search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DatabaseList>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.list` instead.
     */
    list(params?: {
        queries?: string[];
        search?: string;
        total?: boolean;
    }): Promise<Models.DatabaseList>;
    /**
     * Get a list of all databases from the current Appwrite project. You can use the search parameter to filter your results.
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name
     * @param {string} search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DatabaseList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    list(queries?: string[], search?: string, total?: boolean): Promise<Models.DatabaseList>;
    /**
     * Create a new Database.
     *
     *
     * @param {string} params.databaseId - Unique Id. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Database name. Max length: 128 chars.
     * @param {boolean} params.enabled - Is the database enabled? When set to 'disabled', users cannot access the database but Server SDKs with an API key can still read and write to the database. No data is lost when this is toggled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Database>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.create` instead.
     */
    create(params: {
        databaseId: string;
        name: string;
        enabled?: boolean;
    }): Promise<Models.Database>;
    /**
     * Create a new Database.
     *
     *
     * @param {string} databaseId - Unique Id. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Database name. Max length: 128 chars.
     * @param {boolean} enabled - Is the database enabled? When set to 'disabled', users cannot access the database but Server SDKs with an API key can still read and write to the database. No data is lost when this is toggled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Database>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    create(databaseId: string, name: string, enabled?: boolean): Promise<Models.Database>;
    /**
     * List transactions across all databases.
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries).
     * @throws {AppwriteException}
     * @returns {Promise<Models.TransactionList>}
     */
    listTransactions(params?: {
        queries?: string[];
    }): Promise<Models.TransactionList>;
    /**
     * List transactions across all databases.
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries).
     * @throws {AppwriteException}
     * @returns {Promise<Models.TransactionList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listTransactions(queries?: string[]): Promise<Models.TransactionList>;
    /**
     * Create a new transaction.
     *
     * @param {number} params.ttl - Seconds before the transaction expires.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Transaction>}
     */
    createTransaction(params?: {
        ttl?: number;
    }): Promise<Models.Transaction>;
    /**
     * Create a new transaction.
     *
     * @param {number} ttl - Seconds before the transaction expires.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Transaction>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createTransaction(ttl?: number): Promise<Models.Transaction>;
    /**
     * Get a transaction by its unique ID.
     *
     * @param {string} params.transactionId - Transaction ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Transaction>}
     */
    getTransaction(params: {
        transactionId: string;
    }): Promise<Models.Transaction>;
    /**
     * Get a transaction by its unique ID.
     *
     * @param {string} transactionId - Transaction ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Transaction>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getTransaction(transactionId: string): Promise<Models.Transaction>;
    /**
     * Update a transaction, to either commit or roll back its operations.
     *
     * @param {string} params.transactionId - Transaction ID.
     * @param {boolean} params.commit - Commit transaction?
     * @param {boolean} params.rollback - Rollback transaction?
     * @throws {AppwriteException}
     * @returns {Promise<Models.Transaction>}
     */
    updateTransaction(params: {
        transactionId: string;
        commit?: boolean;
        rollback?: boolean;
    }): Promise<Models.Transaction>;
    /**
     * Update a transaction, to either commit or roll back its operations.
     *
     * @param {string} transactionId - Transaction ID.
     * @param {boolean} commit - Commit transaction?
     * @param {boolean} rollback - Rollback transaction?
     * @throws {AppwriteException}
     * @returns {Promise<Models.Transaction>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateTransaction(transactionId: string, commit?: boolean, rollback?: boolean): Promise<Models.Transaction>;
    /**
     * Delete a transaction by its unique ID.
     *
     * @param {string} params.transactionId - Transaction ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteTransaction(params: {
        transactionId: string;
    }): Promise<{}>;
    /**
     * Delete a transaction by its unique ID.
     *
     * @param {string} transactionId - Transaction ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteTransaction(transactionId: string): Promise<{}>;
    /**
     * Create multiple operations in a single transaction.
     *
     * @param {string} params.transactionId - Transaction ID.
     * @param {object[]} params.operations - Array of staged operations.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Transaction>}
     */
    createOperations(params: {
        transactionId: string;
        operations?: object[];
    }): Promise<Models.Transaction>;
    /**
     * Create multiple operations in a single transaction.
     *
     * @param {string} transactionId - Transaction ID.
     * @param {object[]} operations - Array of staged operations.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Transaction>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createOperations(transactionId: string, operations?: object[]): Promise<Models.Transaction>;
    /**
     * List usage metrics and statistics for all databases in the project. You can view the total number of databases, collections, documents, and storage usage. The response includes both current totals and historical data over time. Use the optional range parameter to specify the time window for historical data: 24h (last 24 hours), 30d (last 30 days), or 90d (last 90 days). If not specified, range defaults to 30 days.
     *
     * @param {UsageRange} params.range - Date range.
     * @throws {AppwriteException}
     * @returns {Promise<Models.UsageDatabases>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.listUsage` instead.
     */
    listUsage(params?: {
        range?: UsageRange;
    }): Promise<Models.UsageDatabases>;
    /**
     * List usage metrics and statistics for all databases in the project. You can view the total number of databases, collections, documents, and storage usage. The response includes both current totals and historical data over time. Use the optional range parameter to specify the time window for historical data: 24h (last 24 hours), 30d (last 30 days), or 90d (last 90 days). If not specified, range defaults to 30 days.
     *
     * @param {UsageRange} range - Date range.
     * @throws {AppwriteException}
     * @returns {Promise<Models.UsageDatabases>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listUsage(range?: UsageRange): Promise<Models.UsageDatabases>;
    /**
     * Get a database by its unique ID. This endpoint response returns a JSON object with the database metadata.
     *
     * @param {string} params.databaseId - Database ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Database>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.get` instead.
     */
    get(params: {
        databaseId: string;
    }): Promise<Models.Database>;
    /**
     * Get a database by its unique ID. This endpoint response returns a JSON object with the database metadata.
     *
     * @param {string} databaseId - Database ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Database>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    get(databaseId: string): Promise<Models.Database>;
    /**
     * Update a database by its unique ID.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.name - Database name. Max length: 128 chars.
     * @param {boolean} params.enabled - Is database enabled? When set to 'disabled', users cannot access the database but Server SDKs with an API key can still read and write to the database. No data is lost when this is toggled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Database>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.update` instead.
     */
    update(params: {
        databaseId: string;
        name?: string;
        enabled?: boolean;
    }): Promise<Models.Database>;
    /**
     * Update a database by its unique ID.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} name - Database name. Max length: 128 chars.
     * @param {boolean} enabled - Is database enabled? When set to 'disabled', users cannot access the database but Server SDKs with an API key can still read and write to the database. No data is lost when this is toggled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Database>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    update(databaseId: string, name?: string, enabled?: boolean): Promise<Models.Database>;
    /**
     * Delete a database by its unique ID. Only API keys with with databases.write scope can delete a database.
     *
     * @param {string} params.databaseId - Database ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.delete` instead.
     */
    delete(params: {
        databaseId: string;
    }): Promise<{}>;
    /**
     * Delete a database by its unique ID. Only API keys with with databases.write scope can delete a database.
     *
     * @param {string} databaseId - Database ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    delete(databaseId: string): Promise<{}>;
    /**
     * Get a list of all collections that belong to the provided databaseId. You can use the search parameter to filter your results.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, enabled, documentSecurity
     * @param {string} params.search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.CollectionList>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.listTables` instead.
     */
    listCollections(params: {
        databaseId: string;
        queries?: string[];
        search?: string;
        total?: boolean;
    }): Promise<Models.CollectionList>;
    /**
     * Get a list of all collections that belong to the provided databaseId. You can use the search parameter to filter your results.
     *
     * @param {string} databaseId - Database ID.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, enabled, documentSecurity
     * @param {string} search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.CollectionList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listCollections(databaseId: string, queries?: string[], search?: string, total?: boolean): Promise<Models.CollectionList>;
    /**
     * Create a new Collection. Before using this route, you should create a new database resource using either a [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection) API or directly from your database console.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Unique Id. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Collection name. Max length: 128 chars.
     * @param {string[]} params.permissions - An array of permissions strings. By default, no user is granted with any permissions. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {boolean} params.documentSecurity - Enables configuring permissions for individual documents. A user needs one of document or collection level permissions to access a document. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {boolean} params.enabled - Is collection enabled? When set to 'disabled', users cannot access the collection but Server SDKs with and API key can still read and write to the collection. No data is lost when this is toggled.
     * @param {object[]} params.attributes - Array of attribute definitions to create. Each attribute should contain: key (string), type (string: string, integer, float, boolean, datetime), size (integer, required for string type), required (boolean, optional), default (mixed, optional), array (boolean, optional), and type-specific options.
     * @param {object[]} params.indexes - Array of index definitions to create. Each index should contain: key (string), type (string: key, fulltext, unique, spatial), attributes (array of attribute keys), orders (array of ASC/DESC, optional), and lengths (array of integers, optional).
     * @throws {AppwriteException}
     * @returns {Promise<Models.Collection>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.createTable` instead.
     */
    createCollection(params: {
        databaseId: string;
        collectionId: string;
        name: string;
        permissions?: string[];
        documentSecurity?: boolean;
        enabled?: boolean;
        attributes?: object[];
        indexes?: object[];
    }): Promise<Models.Collection>;
    /**
     * Create a new Collection. Before using this route, you should create a new database resource using either a [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection) API or directly from your database console.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Unique Id. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Collection name. Max length: 128 chars.
     * @param {string[]} permissions - An array of permissions strings. By default, no user is granted with any permissions. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {boolean} documentSecurity - Enables configuring permissions for individual documents. A user needs one of document or collection level permissions to access a document. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {boolean} enabled - Is collection enabled? When set to 'disabled', users cannot access the collection but Server SDKs with and API key can still read and write to the collection. No data is lost when this is toggled.
     * @param {object[]} attributes - Array of attribute definitions to create. Each attribute should contain: key (string), type (string: string, integer, float, boolean, datetime), size (integer, required for string type), required (boolean, optional), default (mixed, optional), array (boolean, optional), and type-specific options.
     * @param {object[]} indexes - Array of index definitions to create. Each index should contain: key (string), type (string: key, fulltext, unique, spatial), attributes (array of attribute keys), orders (array of ASC/DESC, optional), and lengths (array of integers, optional).
     * @throws {AppwriteException}
     * @returns {Promise<Models.Collection>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createCollection(databaseId: string, collectionId: string, name: string, permissions?: string[], documentSecurity?: boolean, enabled?: boolean, attributes?: object[], indexes?: object[]): Promise<Models.Collection>;
    /**
     * Get a collection by its unique ID. This endpoint response returns a JSON object with the collection metadata.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Collection>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.getTable` instead.
     */
    getCollection(params: {
        databaseId: string;
        collectionId: string;
    }): Promise<Models.Collection>;
    /**
     * Get a collection by its unique ID. This endpoint response returns a JSON object with the collection metadata.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Collection>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getCollection(databaseId: string, collectionId: string): Promise<Models.Collection>;
    /**
     * Update a collection by its unique ID.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @param {string} params.name - Collection name. Max length: 128 chars.
     * @param {string[]} params.permissions - An array of permission strings. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {boolean} params.documentSecurity - Enables configuring permissions for individual documents. A user needs one of document or collection level permissions to access a document. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {boolean} params.enabled - Is collection enabled? When set to 'disabled', users cannot access the collection but Server SDKs with and API key can still read and write to the collection. No data is lost when this is toggled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Collection>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.updateTable` instead.
     */
    updateCollection(params: {
        databaseId: string;
        collectionId: string;
        name?: string;
        permissions?: string[];
        documentSecurity?: boolean;
        enabled?: boolean;
    }): Promise<Models.Collection>;
    /**
     * Update a collection by its unique ID.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} name - Collection name. Max length: 128 chars.
     * @param {string[]} permissions - An array of permission strings. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {boolean} documentSecurity - Enables configuring permissions for individual documents. A user needs one of document or collection level permissions to access a document. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {boolean} enabled - Is collection enabled? When set to 'disabled', users cannot access the collection but Server SDKs with and API key can still read and write to the collection. No data is lost when this is toggled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Collection>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateCollection(databaseId: string, collectionId: string, name?: string, permissions?: string[], documentSecurity?: boolean, enabled?: boolean): Promise<Models.Collection>;
    /**
     * Delete a collection by its unique ID. Only users with write permissions have access to delete this resource.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.deleteTable` instead.
     */
    deleteCollection(params: {
        databaseId: string;
        collectionId: string;
    }): Promise<{}>;
    /**
     * Delete a collection by its unique ID. Only users with write permissions have access to delete this resource.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteCollection(databaseId: string, collectionId: string): Promise<{}>;
    /**
     * List attributes in the collection.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: key, type, size, required, array, status, error
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeList>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.listColumns` instead.
     */
    listAttributes(params: {
        databaseId: string;
        collectionId: string;
        queries?: string[];
        total?: boolean;
    }): Promise<Models.AttributeList>;
    /**
     * List attributes in the collection.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: key, type, size, required, array, status, error
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listAttributes(databaseId: string, collectionId: string, queries?: string[], total?: boolean): Promise<Models.AttributeList>;
    /**
     * Create a boolean attribute.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} params.key - Attribute Key.
     * @param {boolean} params.required - Is attribute required?
     * @param {boolean} params.xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {boolean} params.array - Is attribute an array?
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeBoolean>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.createBooleanColumn` instead.
     */
    createBooleanAttribute(params: {
        databaseId: string;
        collectionId: string;
        key: string;
        required: boolean;
        xdefault?: boolean;
        array?: boolean;
    }): Promise<Models.AttributeBoolean>;
    /**
     * Create a boolean attribute.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {boolean} xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {boolean} array - Is attribute an array?
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeBoolean>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createBooleanAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: boolean, array?: boolean): Promise<Models.AttributeBoolean>;
    /**
     * Update a boolean attribute. Changing the `default` value will not update already existing documents.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#createCollection).
     * @param {string} params.key - Attribute Key.
     * @param {boolean} params.required - Is attribute required?
     * @param {boolean} params.xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {string} params.newKey - New attribute key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeBoolean>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.updateBooleanColumn` instead.
     */
    updateBooleanAttribute(params: {
        databaseId: string;
        collectionId: string;
        key: string;
        required: boolean;
        xdefault?: boolean;
        newKey?: string;
    }): Promise<Models.AttributeBoolean>;
    /**
     * Update a boolean attribute. Changing the `default` value will not update already existing documents.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#createCollection).
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {boolean} xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {string} newKey - New attribute key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeBoolean>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateBooleanAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: boolean, newKey?: string): Promise<Models.AttributeBoolean>;
    /**
     * Create a date time attribute according to the ISO 8601 standard.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#createCollection).
     * @param {string} params.key - Attribute Key.
     * @param {boolean} params.required - Is attribute required?
     * @param {string} params.xdefault - Default value for the attribute in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Cannot be set when attribute is required.
     * @param {boolean} params.array - Is attribute an array?
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeDatetime>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.createDatetimeColumn` instead.
     */
    createDatetimeAttribute(params: {
        databaseId: string;
        collectionId: string;
        key: string;
        required: boolean;
        xdefault?: string;
        array?: boolean;
    }): Promise<Models.AttributeDatetime>;
    /**
     * Create a date time attribute according to the ISO 8601 standard.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#createCollection).
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {string} xdefault - Default value for the attribute in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Cannot be set when attribute is required.
     * @param {boolean} array - Is attribute an array?
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeDatetime>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createDatetimeAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, array?: boolean): Promise<Models.AttributeDatetime>;
    /**
     * Update a date time attribute. Changing the `default` value will not update already existing documents.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @param {string} params.key - Attribute Key.
     * @param {boolean} params.required - Is attribute required?
     * @param {string} params.xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {string} params.newKey - New attribute key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeDatetime>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.updateDatetimeColumn` instead.
     */
    updateDatetimeAttribute(params: {
        databaseId: string;
        collectionId: string;
        key: string;
        required: boolean;
        xdefault?: string;
        newKey?: string;
    }): Promise<Models.AttributeDatetime>;
    /**
     * Update a date time attribute. Changing the `default` value will not update already existing documents.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {string} xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {string} newKey - New attribute key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeDatetime>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateDatetimeAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, newKey?: string): Promise<Models.AttributeDatetime>;
    /**
     * Create an email attribute.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @param {string} params.key - Attribute Key.
     * @param {boolean} params.required - Is attribute required?
     * @param {string} params.xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {boolean} params.array - Is attribute an array?
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeEmail>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.createEmailColumn` instead.
     */
    createEmailAttribute(params: {
        databaseId: string;
        collectionId: string;
        key: string;
        required: boolean;
        xdefault?: string;
        array?: boolean;
    }): Promise<Models.AttributeEmail>;
    /**
     * Create an email attribute.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {string} xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {boolean} array - Is attribute an array?
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeEmail>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createEmailAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, array?: boolean): Promise<Models.AttributeEmail>;
    /**
     * Update an email attribute. Changing the `default` value will not update already existing documents.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @param {string} params.key - Attribute Key.
     * @param {boolean} params.required - Is attribute required?
     * @param {string} params.xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {string} params.newKey - New Attribute Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeEmail>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.updateEmailColumn` instead.
     */
    updateEmailAttribute(params: {
        databaseId: string;
        collectionId: string;
        key: string;
        required: boolean;
        xdefault?: string;
        newKey?: string;
    }): Promise<Models.AttributeEmail>;
    /**
     * Update an email attribute. Changing the `default` value will not update already existing documents.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {string} xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {string} newKey - New Attribute Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeEmail>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateEmailAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, newKey?: string): Promise<Models.AttributeEmail>;
    /**
     * Create an enum attribute. The `elements` param acts as a white-list of accepted values for this attribute.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @param {string} params.key - Attribute Key.
     * @param {string[]} params.elements - Array of enum values.
     * @param {boolean} params.required - Is attribute required?
     * @param {string} params.xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {boolean} params.array - Is attribute an array?
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeEnum>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.createEnumColumn` instead.
     */
    createEnumAttribute(params: {
        databaseId: string;
        collectionId: string;
        key: string;
        elements: string[];
        required: boolean;
        xdefault?: string;
        array?: boolean;
    }): Promise<Models.AttributeEnum>;
    /**
     * Create an enum attribute. The `elements` param acts as a white-list of accepted values for this attribute.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} key - Attribute Key.
     * @param {string[]} elements - Array of enum values.
     * @param {boolean} required - Is attribute required?
     * @param {string} xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {boolean} array - Is attribute an array?
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeEnum>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createEnumAttribute(databaseId: string, collectionId: string, key: string, elements: string[], required: boolean, xdefault?: string, array?: boolean): Promise<Models.AttributeEnum>;
    /**
     * Update an enum attribute. Changing the `default` value will not update already existing documents.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @param {string} params.key - Attribute Key.
     * @param {string[]} params.elements - Updated list of enum values.
     * @param {boolean} params.required - Is attribute required?
     * @param {string} params.xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {string} params.newKey - New Attribute Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeEnum>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.updateEnumColumn` instead.
     */
    updateEnumAttribute(params: {
        databaseId: string;
        collectionId: string;
        key: string;
        elements: string[];
        required: boolean;
        xdefault?: string;
        newKey?: string;
    }): Promise<Models.AttributeEnum>;
    /**
     * Update an enum attribute. Changing the `default` value will not update already existing documents.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} key - Attribute Key.
     * @param {string[]} elements - Updated list of enum values.
     * @param {boolean} required - Is attribute required?
     * @param {string} xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {string} newKey - New Attribute Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeEnum>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateEnumAttribute(databaseId: string, collectionId: string, key: string, elements: string[], required: boolean, xdefault?: string, newKey?: string): Promise<Models.AttributeEnum>;
    /**
     * Create a float attribute. Optionally, minimum and maximum values can be provided.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @param {string} params.key - Attribute Key.
     * @param {boolean} params.required - Is attribute required?
     * @param {number} params.min - Minimum value.
     * @param {number} params.max - Maximum value.
     * @param {number} params.xdefault - Default value. Cannot be set when required.
     * @param {boolean} params.array - Is attribute an array?
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeFloat>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.createFloatColumn` instead.
     */
    createFloatAttribute(params: {
        databaseId: string;
        collectionId: string;
        key: string;
        required: boolean;
        min?: number;
        max?: number;
        xdefault?: number;
        array?: boolean;
    }): Promise<Models.AttributeFloat>;
    /**
     * Create a float attribute. Optionally, minimum and maximum values can be provided.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {number} min - Minimum value.
     * @param {number} max - Maximum value.
     * @param {number} xdefault - Default value. Cannot be set when required.
     * @param {boolean} array - Is attribute an array?
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeFloat>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createFloatAttribute(databaseId: string, collectionId: string, key: string, required: boolean, min?: number, max?: number, xdefault?: number, array?: boolean): Promise<Models.AttributeFloat>;
    /**
     * Update a float attribute. Changing the `default` value will not update already existing documents.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @param {string} params.key - Attribute Key.
     * @param {boolean} params.required - Is attribute required?
     * @param {number} params.xdefault - Default value. Cannot be set when required.
     * @param {number} params.min - Minimum value.
     * @param {number} params.max - Maximum value.
     * @param {string} params.newKey - New Attribute Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeFloat>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.updateFloatColumn` instead.
     */
    updateFloatAttribute(params: {
        databaseId: string;
        collectionId: string;
        key: string;
        required: boolean;
        xdefault?: number;
        min?: number;
        max?: number;
        newKey?: string;
    }): Promise<Models.AttributeFloat>;
    /**
     * Update a float attribute. Changing the `default` value will not update already existing documents.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {number} xdefault - Default value. Cannot be set when required.
     * @param {number} min - Minimum value.
     * @param {number} max - Maximum value.
     * @param {string} newKey - New Attribute Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeFloat>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateFloatAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: number, min?: number, max?: number, newKey?: string): Promise<Models.AttributeFloat>;
    /**
     * Create an integer attribute. Optionally, minimum and maximum values can be provided.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @param {string} params.key - Attribute Key.
     * @param {boolean} params.required - Is attribute required?
     * @param {number | bigint} params.min - Minimum value
     * @param {number | bigint} params.max - Maximum value
     * @param {number | bigint} params.xdefault - Default value. Cannot be set when attribute is required.
     * @param {boolean} params.array - Is attribute an array?
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeInteger>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.createIntegerColumn` instead.
     */
    createIntegerAttribute(params: {
        databaseId: string;
        collectionId: string;
        key: string;
        required: boolean;
        min?: number | bigint;
        max?: number | bigint;
        xdefault?: number | bigint;
        array?: boolean;
    }): Promise<Models.AttributeInteger>;
    /**
     * Create an integer attribute. Optionally, minimum and maximum values can be provided.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {number | bigint} min - Minimum value
     * @param {number | bigint} max - Maximum value
     * @param {number | bigint} xdefault - Default value. Cannot be set when attribute is required.
     * @param {boolean} array - Is attribute an array?
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeInteger>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createIntegerAttribute(databaseId: string, collectionId: string, key: string, required: boolean, min?: number | bigint, max?: number | bigint, xdefault?: number | bigint, array?: boolean): Promise<Models.AttributeInteger>;
    /**
     * Update an integer attribute. Changing the `default` value will not update already existing documents.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @param {string} params.key - Attribute Key.
     * @param {boolean} params.required - Is attribute required?
     * @param {number | bigint} params.xdefault - Default value. Cannot be set when attribute is required.
     * @param {number | bigint} params.min - Minimum value
     * @param {number | bigint} params.max - Maximum value
     * @param {string} params.newKey - New Attribute Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeInteger>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.updateIntegerColumn` instead.
     */
    updateIntegerAttribute(params: {
        databaseId: string;
        collectionId: string;
        key: string;
        required: boolean;
        xdefault?: number | bigint;
        min?: number | bigint;
        max?: number | bigint;
        newKey?: string;
    }): Promise<Models.AttributeInteger>;
    /**
     * Update an integer attribute. Changing the `default` value will not update already existing documents.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {number | bigint} xdefault - Default value. Cannot be set when attribute is required.
     * @param {number | bigint} min - Minimum value
     * @param {number | bigint} max - Maximum value
     * @param {string} newKey - New Attribute Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeInteger>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateIntegerAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: number | bigint, min?: number | bigint, max?: number | bigint, newKey?: string): Promise<Models.AttributeInteger>;
    /**
     * Create IP address attribute.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @param {string} params.key - Attribute Key.
     * @param {boolean} params.required - Is attribute required?
     * @param {string} params.xdefault - Default value. Cannot be set when attribute is required.
     * @param {boolean} params.array - Is attribute an array?
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeIp>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.createIpColumn` instead.
     */
    createIpAttribute(params: {
        databaseId: string;
        collectionId: string;
        key: string;
        required: boolean;
        xdefault?: string;
        array?: boolean;
    }): Promise<Models.AttributeIp>;
    /**
     * Create IP address attribute.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {string} xdefault - Default value. Cannot be set when attribute is required.
     * @param {boolean} array - Is attribute an array?
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeIp>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createIpAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, array?: boolean): Promise<Models.AttributeIp>;
    /**
     * Update an ip attribute. Changing the `default` value will not update already existing documents.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @param {string} params.key - Attribute Key.
     * @param {boolean} params.required - Is attribute required?
     * @param {string} params.xdefault - Default value. Cannot be set when attribute is required.
     * @param {string} params.newKey - New Attribute Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeIp>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.updateIpColumn` instead.
     */
    updateIpAttribute(params: {
        databaseId: string;
        collectionId: string;
        key: string;
        required: boolean;
        xdefault?: string;
        newKey?: string;
    }): Promise<Models.AttributeIp>;
    /**
     * Update an ip attribute. Changing the `default` value will not update already existing documents.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {string} xdefault - Default value. Cannot be set when attribute is required.
     * @param {string} newKey - New Attribute Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeIp>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateIpAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, newKey?: string): Promise<Models.AttributeIp>;
    /**
     * Create a geometric line attribute.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} params.key - Attribute Key.
     * @param {boolean} params.required - Is attribute required?
     * @param {any[]} params.xdefault - Default value for attribute when not provided, two-dimensional array of coordinate pairs, [[longitude, latitude], [longitude, latitude], …], listing the vertices of the line in order. Cannot be set when attribute is required.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeLine>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.createLineColumn` instead.
     */
    createLineAttribute(params: {
        databaseId: string;
        collectionId: string;
        key: string;
        required: boolean;
        xdefault?: any[];
    }): Promise<Models.AttributeLine>;
    /**
     * Create a geometric line attribute.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {any[]} xdefault - Default value for attribute when not provided, two-dimensional array of coordinate pairs, [[longitude, latitude], [longitude, latitude], …], listing the vertices of the line in order. Cannot be set when attribute is required.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeLine>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createLineAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: any[]): Promise<Models.AttributeLine>;
    /**
     * Update a line attribute. Changing the `default` value will not update already existing documents.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#createCollection).
     * @param {string} params.key - Attribute Key.
     * @param {boolean} params.required - Is attribute required?
     * @param {any[]} params.xdefault - Default value for attribute when not provided, two-dimensional array of coordinate pairs, [[longitude, latitude], [longitude, latitude], …], listing the vertices of the line in order. Cannot be set when attribute is required.
     * @param {string} params.newKey - New attribute key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeLine>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.updateLineColumn` instead.
     */
    updateLineAttribute(params: {
        databaseId: string;
        collectionId: string;
        key: string;
        required: boolean;
        xdefault?: any[];
        newKey?: string;
    }): Promise<Models.AttributeLine>;
    /**
     * Update a line attribute. Changing the `default` value will not update already existing documents.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#createCollection).
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {any[]} xdefault - Default value for attribute when not provided, two-dimensional array of coordinate pairs, [[longitude, latitude], [longitude, latitude], …], listing the vertices of the line in order. Cannot be set when attribute is required.
     * @param {string} newKey - New attribute key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeLine>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateLineAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: any[], newKey?: string): Promise<Models.AttributeLine>;
    /**
     * Create a longtext attribute.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} params.key - Attribute Key.
     * @param {boolean} params.required - Is attribute required?
     * @param {string} params.xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {boolean} params.array - Is attribute an array?
     * @param {boolean} params.encrypt - Toggle encryption for the attribute. Encryption enhances security by not storing any plain text values in the database. However, encrypted attributes cannot be queried.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeLongtext>}
     */
    createLongtextAttribute(params: {
        databaseId: string;
        collectionId: string;
        key: string;
        required: boolean;
        xdefault?: string;
        array?: boolean;
        encrypt?: boolean;
    }): Promise<Models.AttributeLongtext>;
    /**
     * Create a longtext attribute.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {string} xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {boolean} array - Is attribute an array?
     * @param {boolean} encrypt - Toggle encryption for the attribute. Encryption enhances security by not storing any plain text values in the database. However, encrypted attributes cannot be queried.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeLongtext>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createLongtextAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, array?: boolean, encrypt?: boolean): Promise<Models.AttributeLongtext>;
    /**
     * Update a longtext attribute. Changing the `default` value will not update already existing documents.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} params.key - Attribute Key.
     * @param {boolean} params.required - Is attribute required?
     * @param {string} params.xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {string} params.newKey - New Attribute Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeLongtext>}
     */
    updateLongtextAttribute(params: {
        databaseId: string;
        collectionId: string;
        key: string;
        required: boolean;
        xdefault?: string;
        newKey?: string;
    }): Promise<Models.AttributeLongtext>;
    /**
     * Update a longtext attribute. Changing the `default` value will not update already existing documents.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {string} xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {string} newKey - New Attribute Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeLongtext>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateLongtextAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, newKey?: string): Promise<Models.AttributeLongtext>;
    /**
     * Create a mediumtext attribute.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} params.key - Attribute Key.
     * @param {boolean} params.required - Is attribute required?
     * @param {string} params.xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {boolean} params.array - Is attribute an array?
     * @param {boolean} params.encrypt - Toggle encryption for the attribute. Encryption enhances security by not storing any plain text values in the database. However, encrypted attributes cannot be queried.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeMediumtext>}
     */
    createMediumtextAttribute(params: {
        databaseId: string;
        collectionId: string;
        key: string;
        required: boolean;
        xdefault?: string;
        array?: boolean;
        encrypt?: boolean;
    }): Promise<Models.AttributeMediumtext>;
    /**
     * Create a mediumtext attribute.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {string} xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {boolean} array - Is attribute an array?
     * @param {boolean} encrypt - Toggle encryption for the attribute. Encryption enhances security by not storing any plain text values in the database. However, encrypted attributes cannot be queried.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeMediumtext>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createMediumtextAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, array?: boolean, encrypt?: boolean): Promise<Models.AttributeMediumtext>;
    /**
     * Update a mediumtext attribute. Changing the `default` value will not update already existing documents.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} params.key - Attribute Key.
     * @param {boolean} params.required - Is attribute required?
     * @param {string} params.xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {string} params.newKey - New Attribute Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeMediumtext>}
     */
    updateMediumtextAttribute(params: {
        databaseId: string;
        collectionId: string;
        key: string;
        required: boolean;
        xdefault?: string;
        newKey?: string;
    }): Promise<Models.AttributeMediumtext>;
    /**
     * Update a mediumtext attribute. Changing the `default` value will not update already existing documents.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {string} xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {string} newKey - New Attribute Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeMediumtext>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateMediumtextAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, newKey?: string): Promise<Models.AttributeMediumtext>;
    /**
     * Create a geometric point attribute.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} params.key - Attribute Key.
     * @param {boolean} params.required - Is attribute required?
     * @param {any[]} params.xdefault - Default value for attribute when not provided, array of two numbers [longitude, latitude], representing a single coordinate. Cannot be set when attribute is required.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributePoint>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.createPointColumn` instead.
     */
    createPointAttribute(params: {
        databaseId: string;
        collectionId: string;
        key: string;
        required: boolean;
        xdefault?: any[];
    }): Promise<Models.AttributePoint>;
    /**
     * Create a geometric point attribute.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {any[]} xdefault - Default value for attribute when not provided, array of two numbers [longitude, latitude], representing a single coordinate. Cannot be set when attribute is required.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributePoint>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createPointAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: any[]): Promise<Models.AttributePoint>;
    /**
     * Update a point attribute. Changing the `default` value will not update already existing documents.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#createCollection).
     * @param {string} params.key - Attribute Key.
     * @param {boolean} params.required - Is attribute required?
     * @param {any[]} params.xdefault - Default value for attribute when not provided, array of two numbers [longitude, latitude], representing a single coordinate. Cannot be set when attribute is required.
     * @param {string} params.newKey - New attribute key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributePoint>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.updatePointColumn` instead.
     */
    updatePointAttribute(params: {
        databaseId: string;
        collectionId: string;
        key: string;
        required: boolean;
        xdefault?: any[];
        newKey?: string;
    }): Promise<Models.AttributePoint>;
    /**
     * Update a point attribute. Changing the `default` value will not update already existing documents.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#createCollection).
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {any[]} xdefault - Default value for attribute when not provided, array of two numbers [longitude, latitude], representing a single coordinate. Cannot be set when attribute is required.
     * @param {string} newKey - New attribute key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributePoint>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updatePointAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: any[], newKey?: string): Promise<Models.AttributePoint>;
    /**
     * Create a geometric polygon attribute.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} params.key - Attribute Key.
     * @param {boolean} params.required - Is attribute required?
     * @param {any[]} params.xdefault - Default value for attribute when not provided, three-dimensional array where the outer array holds one or more linear rings, [[[longitude, latitude], …], …], the first ring is the exterior boundary, any additional rings are interior holes, and each ring must start and end with the same coordinate pair. Cannot be set when attribute is required.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributePolygon>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.createPolygonColumn` instead.
     */
    createPolygonAttribute(params: {
        databaseId: string;
        collectionId: string;
        key: string;
        required: boolean;
        xdefault?: any[];
    }): Promise<Models.AttributePolygon>;
    /**
     * Create a geometric polygon attribute.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {any[]} xdefault - Default value for attribute when not provided, three-dimensional array where the outer array holds one or more linear rings, [[[longitude, latitude], …], …], the first ring is the exterior boundary, any additional rings are interior holes, and each ring must start and end with the same coordinate pair. Cannot be set when attribute is required.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributePolygon>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createPolygonAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: any[]): Promise<Models.AttributePolygon>;
    /**
     * Update a polygon attribute. Changing the `default` value will not update already existing documents.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#createCollection).
     * @param {string} params.key - Attribute Key.
     * @param {boolean} params.required - Is attribute required?
     * @param {any[]} params.xdefault - Default value for attribute when not provided, three-dimensional array where the outer array holds one or more linear rings, [[[longitude, latitude], …], …], the first ring is the exterior boundary, any additional rings are interior holes, and each ring must start and end with the same coordinate pair. Cannot be set when attribute is required.
     * @param {string} params.newKey - New attribute key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributePolygon>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.updatePolygonColumn` instead.
     */
    updatePolygonAttribute(params: {
        databaseId: string;
        collectionId: string;
        key: string;
        required: boolean;
        xdefault?: any[];
        newKey?: string;
    }): Promise<Models.AttributePolygon>;
    /**
     * Update a polygon attribute. Changing the `default` value will not update already existing documents.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#createCollection).
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {any[]} xdefault - Default value for attribute when not provided, three-dimensional array where the outer array holds one or more linear rings, [[[longitude, latitude], …], …], the first ring is the exterior boundary, any additional rings are interior holes, and each ring must start and end with the same coordinate pair. Cannot be set when attribute is required.
     * @param {string} newKey - New attribute key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributePolygon>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updatePolygonAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: any[], newKey?: string): Promise<Models.AttributePolygon>;
    /**
     * Create relationship attribute. [Learn more about relationship attributes](https://appwrite.io/docs/databases-relationships#relationship-attributes).
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @param {string} params.relatedCollectionId - Related Collection ID.
     * @param {RelationshipType} params.type - Relation type
     * @param {boolean} params.twoWay - Is Two Way?
     * @param {string} params.key - Attribute Key.
     * @param {string} params.twoWayKey - Two Way Attribute Key.
     * @param {RelationMutate} params.onDelete - Constraints option
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeRelationship>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.createRelationshipColumn` instead.
     */
    createRelationshipAttribute(params: {
        databaseId: string;
        collectionId: string;
        relatedCollectionId: string;
        type: RelationshipType;
        twoWay?: boolean;
        key?: string;
        twoWayKey?: string;
        onDelete?: RelationMutate;
    }): Promise<Models.AttributeRelationship>;
    /**
     * Create relationship attribute. [Learn more about relationship attributes](https://appwrite.io/docs/databases-relationships#relationship-attributes).
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} relatedCollectionId - Related Collection ID.
     * @param {RelationshipType} type - Relation type
     * @param {boolean} twoWay - Is Two Way?
     * @param {string} key - Attribute Key.
     * @param {string} twoWayKey - Two Way Attribute Key.
     * @param {RelationMutate} onDelete - Constraints option
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeRelationship>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createRelationshipAttribute(databaseId: string, collectionId: string, relatedCollectionId: string, type: RelationshipType, twoWay?: boolean, key?: string, twoWayKey?: string, onDelete?: RelationMutate): Promise<Models.AttributeRelationship>;
    /**
     * Create a string attribute.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} params.key - Attribute Key.
     * @param {number} params.size - Attribute size for text attributes, in number of characters.
     * @param {boolean} params.required - Is attribute required?
     * @param {string} params.xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {boolean} params.array - Is attribute an array?
     * @param {boolean} params.encrypt - Toggle encryption for the attribute. Encryption enhances security by not storing any plain text values in the database. However, encrypted attributes cannot be queried.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeString>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.createStringColumn` instead.
     */
    createStringAttribute(params: {
        databaseId: string;
        collectionId: string;
        key: string;
        size: number;
        required: boolean;
        xdefault?: string;
        array?: boolean;
        encrypt?: boolean;
    }): Promise<Models.AttributeString>;
    /**
     * Create a string attribute.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} key - Attribute Key.
     * @param {number} size - Attribute size for text attributes, in number of characters.
     * @param {boolean} required - Is attribute required?
     * @param {string} xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {boolean} array - Is attribute an array?
     * @param {boolean} encrypt - Toggle encryption for the attribute. Encryption enhances security by not storing any plain text values in the database. However, encrypted attributes cannot be queried.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeString>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createStringAttribute(databaseId: string, collectionId: string, key: string, size: number, required: boolean, xdefault?: string, array?: boolean, encrypt?: boolean): Promise<Models.AttributeString>;
    /**
     * Update a string attribute. Changing the `default` value will not update already existing documents.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} params.key - Attribute Key.
     * @param {boolean} params.required - Is attribute required?
     * @param {string} params.xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {number} params.size - Maximum size of the string attribute.
     * @param {string} params.newKey - New Attribute Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeString>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.updateStringColumn` instead.
     */
    updateStringAttribute(params: {
        databaseId: string;
        collectionId: string;
        key: string;
        required: boolean;
        xdefault?: string;
        size?: number;
        newKey?: string;
    }): Promise<Models.AttributeString>;
    /**
     * Update a string attribute. Changing the `default` value will not update already existing documents.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {string} xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {number} size - Maximum size of the string attribute.
     * @param {string} newKey - New Attribute Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeString>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateStringAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, size?: number, newKey?: string): Promise<Models.AttributeString>;
    /**
     * Create a text attribute.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} params.key - Attribute Key.
     * @param {boolean} params.required - Is attribute required?
     * @param {string} params.xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {boolean} params.array - Is attribute an array?
     * @param {boolean} params.encrypt - Toggle encryption for the attribute. Encryption enhances security by not storing any plain text values in the database. However, encrypted attributes cannot be queried.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeText>}
     */
    createTextAttribute(params: {
        databaseId: string;
        collectionId: string;
        key: string;
        required: boolean;
        xdefault?: string;
        array?: boolean;
        encrypt?: boolean;
    }): Promise<Models.AttributeText>;
    /**
     * Create a text attribute.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {string} xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {boolean} array - Is attribute an array?
     * @param {boolean} encrypt - Toggle encryption for the attribute. Encryption enhances security by not storing any plain text values in the database. However, encrypted attributes cannot be queried.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeText>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createTextAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, array?: boolean, encrypt?: boolean): Promise<Models.AttributeText>;
    /**
     * Update a text attribute. Changing the `default` value will not update already existing documents.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} params.key - Attribute Key.
     * @param {boolean} params.required - Is attribute required?
     * @param {string} params.xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {string} params.newKey - New Attribute Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeText>}
     */
    updateTextAttribute(params: {
        databaseId: string;
        collectionId: string;
        key: string;
        required: boolean;
        xdefault?: string;
        newKey?: string;
    }): Promise<Models.AttributeText>;
    /**
     * Update a text attribute. Changing the `default` value will not update already existing documents.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {string} xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {string} newKey - New Attribute Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeText>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateTextAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, newKey?: string): Promise<Models.AttributeText>;
    /**
     * Create a URL attribute.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @param {string} params.key - Attribute Key.
     * @param {boolean} params.required - Is attribute required?
     * @param {string} params.xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {boolean} params.array - Is attribute an array?
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeUrl>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.createUrlColumn` instead.
     */
    createUrlAttribute(params: {
        databaseId: string;
        collectionId: string;
        key: string;
        required: boolean;
        xdefault?: string;
        array?: boolean;
    }): Promise<Models.AttributeUrl>;
    /**
     * Create a URL attribute.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {string} xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {boolean} array - Is attribute an array?
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeUrl>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createUrlAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, array?: boolean): Promise<Models.AttributeUrl>;
    /**
     * Update an url attribute. Changing the `default` value will not update already existing documents.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @param {string} params.key - Attribute Key.
     * @param {boolean} params.required - Is attribute required?
     * @param {string} params.xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {string} params.newKey - New Attribute Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeUrl>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.updateUrlColumn` instead.
     */
    updateUrlAttribute(params: {
        databaseId: string;
        collectionId: string;
        key: string;
        required: boolean;
        xdefault?: string;
        newKey?: string;
    }): Promise<Models.AttributeUrl>;
    /**
     * Update an url attribute. Changing the `default` value will not update already existing documents.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {string} xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {string} newKey - New Attribute Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeUrl>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateUrlAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, newKey?: string): Promise<Models.AttributeUrl>;
    /**
     * Create a varchar attribute.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} params.key - Attribute Key.
     * @param {number} params.size - Attribute size for varchar attributes, in number of characters. Maximum size is 16381.
     * @param {boolean} params.required - Is attribute required?
     * @param {string} params.xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {boolean} params.array - Is attribute an array?
     * @param {boolean} params.encrypt - Toggle encryption for the attribute. Encryption enhances security by not storing any plain text values in the database. However, encrypted attributes cannot be queried.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeVarchar>}
     */
    createVarcharAttribute(params: {
        databaseId: string;
        collectionId: string;
        key: string;
        size: number;
        required: boolean;
        xdefault?: string;
        array?: boolean;
        encrypt?: boolean;
    }): Promise<Models.AttributeVarchar>;
    /**
     * Create a varchar attribute.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} key - Attribute Key.
     * @param {number} size - Attribute size for varchar attributes, in number of characters. Maximum size is 16381.
     * @param {boolean} required - Is attribute required?
     * @param {string} xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {boolean} array - Is attribute an array?
     * @param {boolean} encrypt - Toggle encryption for the attribute. Encryption enhances security by not storing any plain text values in the database. However, encrypted attributes cannot be queried.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeVarchar>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createVarcharAttribute(databaseId: string, collectionId: string, key: string, size: number, required: boolean, xdefault?: string, array?: boolean, encrypt?: boolean): Promise<Models.AttributeVarchar>;
    /**
     * Update a varchar attribute. Changing the `default` value will not update already existing documents.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} params.key - Attribute Key.
     * @param {boolean} params.required - Is attribute required?
     * @param {string} params.xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {number} params.size - Maximum size of the varchar attribute.
     * @param {string} params.newKey - New Attribute Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeVarchar>}
     */
    updateVarcharAttribute(params: {
        databaseId: string;
        collectionId: string;
        key: string;
        required: boolean;
        xdefault?: string;
        size?: number;
        newKey?: string;
    }): Promise<Models.AttributeVarchar>;
    /**
     * Update a varchar attribute. Changing the `default` value will not update already existing documents.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} key - Attribute Key.
     * @param {boolean} required - Is attribute required?
     * @param {string} xdefault - Default value for attribute when not provided. Cannot be set when attribute is required.
     * @param {number} size - Maximum size of the varchar attribute.
     * @param {string} newKey - New Attribute Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeVarchar>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateVarcharAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, size?: number, newKey?: string): Promise<Models.AttributeVarchar>;
    /**
     * Get attribute by ID.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @param {string} params.key - Attribute Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeBoolean | Models.AttributeInteger | Models.AttributeFloat | Models.AttributeEmail | Models.AttributeEnum | Models.AttributeUrl | Models.AttributeIp | Models.AttributeDatetime | Models.AttributeRelationship | Models.AttributeString>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.getColumn` instead.
     */
    getAttribute(params: {
        databaseId: string;
        collectionId: string;
        key: string;
    }): Promise<Models.AttributeBoolean | Models.AttributeInteger | Models.AttributeFloat | Models.AttributeEmail | Models.AttributeEnum | Models.AttributeUrl | Models.AttributeIp | Models.AttributeDatetime | Models.AttributeRelationship | Models.AttributeString>;
    /**
     * Get attribute by ID.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} key - Attribute Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeBoolean | Models.AttributeInteger | Models.AttributeFloat | Models.AttributeEmail | Models.AttributeEnum | Models.AttributeUrl | Models.AttributeIp | Models.AttributeDatetime | Models.AttributeRelationship | Models.AttributeString>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getAttribute(databaseId: string, collectionId: string, key: string): Promise<Models.AttributeBoolean | Models.AttributeInteger | Models.AttributeFloat | Models.AttributeEmail | Models.AttributeEnum | Models.AttributeUrl | Models.AttributeIp | Models.AttributeDatetime | Models.AttributeRelationship | Models.AttributeString>;
    /**
     * Deletes an attribute.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @param {string} params.key - Attribute Key.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.deleteColumn` instead.
     */
    deleteAttribute(params: {
        databaseId: string;
        collectionId: string;
        key: string;
    }): Promise<{}>;
    /**
     * Deletes an attribute.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} key - Attribute Key.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteAttribute(databaseId: string, collectionId: string, key: string): Promise<{}>;
    /**
     * Update relationship attribute. [Learn more about relationship attributes](https://appwrite.io/docs/databases-relationships#relationship-attributes).
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @param {string} params.key - Attribute Key.
     * @param {RelationMutate} params.onDelete - Constraints option
     * @param {string} params.newKey - New Attribute Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeRelationship>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.updateRelationshipColumn` instead.
     */
    updateRelationshipAttribute(params: {
        databaseId: string;
        collectionId: string;
        key: string;
        onDelete?: RelationMutate;
        newKey?: string;
    }): Promise<Models.AttributeRelationship>;
    /**
     * Update relationship attribute. [Learn more about relationship attributes](https://appwrite.io/docs/databases-relationships#relationship-attributes).
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} key - Attribute Key.
     * @param {RelationMutate} onDelete - Constraints option
     * @param {string} newKey - New Attribute Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AttributeRelationship>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateRelationshipAttribute(databaseId: string, collectionId: string, key: string, onDelete?: RelationMutate, newKey?: string): Promise<Models.AttributeRelationship>;
    /**
     * Get a list of all the user's documents in a given collection. You can use the query params to filter your results.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.
     * @param {string} params.transactionId - Transaction ID to read uncommitted changes within the transaction.
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DocumentList<Document>>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.listRows` instead.
     */
    listDocuments<Document extends Models.Document = Models.DefaultDocument>(params: {
        databaseId: string;
        collectionId: string;
        queries?: string[];
        transactionId?: string;
        total?: boolean;
    }): Promise<Models.DocumentList<Document>>;
    /**
     * Get a list of all the user's documents in a given collection. You can use the query params to filter your results.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.
     * @param {string} transactionId - Transaction ID to read uncommitted changes within the transaction.
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DocumentList<Document>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listDocuments<Document extends Models.Document = Models.DefaultDocument>(databaseId: string, collectionId: string, queries?: string[], transactionId?: string, total?: boolean): Promise<Models.DocumentList<Document>>;
    /**
     * Create a new Document. Before using this route, you should create a new collection resource using either a [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection) API or directly from your database console.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection). Make sure to define attributes before creating documents.
     * @param {string} params.documentId - Document ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Omit<Document, keyof Models.Document>} params.data - Document data as JSON object.
     * @param {string[]} params.permissions - An array of permissions strings. By default, only the current user is granted all permissions. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {string} params.transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Document>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.createRow` instead.
     */
    createDocument<Document extends Models.Document = Models.DefaultDocument>(params: {
        databaseId: string;
        collectionId: string;
        documentId: string;
        data: Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Omit<Document, keyof Models.Document>;
        permissions?: string[];
        transactionId?: string;
    }): Promise<Document>;
    /**
     * Create a new Document. Before using this route, you should create a new collection resource using either a [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection) API or directly from your database console.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection). Make sure to define attributes before creating documents.
     * @param {string} documentId - Document ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Omit<Document, keyof Models.Document>} data - Document data as JSON object.
     * @param {string[]} permissions - An array of permissions strings. By default, only the current user is granted all permissions. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {string} transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Document>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createDocument<Document extends Models.Document = Models.DefaultDocument>(databaseId: string, collectionId: string, documentId: string, data: Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Omit<Document, keyof Models.Document>, permissions?: string[], transactionId?: string): Promise<Document>;
    /**
     * Create new Documents. Before using this route, you should create a new collection resource using either a [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection) API or directly from your database console.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection). Make sure to define attributes before creating documents.
     * @param {object[]} params.documents - Array of documents data as JSON objects.
     * @param {string} params.transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DocumentList<Document>>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.createRows` instead.
     */
    createDocuments<Document extends Models.Document = Models.DefaultDocument>(params: {
        databaseId: string;
        collectionId: string;
        documents: object[];
        transactionId?: string;
    }): Promise<Models.DocumentList<Document>>;
    /**
     * Create new Documents. Before using this route, you should create a new collection resource using either a [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection) API or directly from your database console.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection). Make sure to define attributes before creating documents.
     * @param {object[]} documents - Array of documents data as JSON objects.
     * @param {string} transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DocumentList<Document>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createDocuments<Document extends Models.Document = Models.DefaultDocument>(databaseId: string, collectionId: string, documents: object[], transactionId?: string): Promise<Models.DocumentList<Document>>;
    /**
     * Create or update Documents. Before using this route, you should create a new collection resource using either a [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection) API or directly from your database console.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @param {object[]} params.documents - Array of document data as JSON objects. May contain partial documents.
     * @param {string} params.transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DocumentList<Document>>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.upsertRows` instead.
     */
    upsertDocuments<Document extends Models.Document = Models.DefaultDocument>(params: {
        databaseId: string;
        collectionId: string;
        documents: object[];
        transactionId?: string;
    }): Promise<Models.DocumentList<Document>>;
    /**
     * Create or update Documents. Before using this route, you should create a new collection resource using either a [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection) API or directly from your database console.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {object[]} documents - Array of document data as JSON objects. May contain partial documents.
     * @param {string} transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DocumentList<Document>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    upsertDocuments<Document extends Models.Document = Models.DefaultDocument>(databaseId: string, collectionId: string, documents: object[], transactionId?: string): Promise<Models.DocumentList<Document>>;
    /**
     * Update all documents that match your queries, if no queries are submitted then all documents are updated. You can pass only specific fields to be updated.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @param {object} params.data - Document data as JSON object. Include only attribute and value pairs to be updated.
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.
     * @param {string} params.transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DocumentList<Document>>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.updateRows` instead.
     */
    updateDocuments<Document extends Models.Document = Models.DefaultDocument>(params: {
        databaseId: string;
        collectionId: string;
        data?: object;
        queries?: string[];
        transactionId?: string;
    }): Promise<Models.DocumentList<Document>>;
    /**
     * Update all documents that match your queries, if no queries are submitted then all documents are updated. You can pass only specific fields to be updated.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {object} data - Document data as JSON object. Include only attribute and value pairs to be updated.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.
     * @param {string} transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DocumentList<Document>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateDocuments<Document extends Models.Document = Models.DefaultDocument>(databaseId: string, collectionId: string, data?: object, queries?: string[], transactionId?: string): Promise<Models.DocumentList<Document>>;
    /**
     * Bulk delete documents using queries, if no queries are passed then all documents are deleted.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.
     * @param {string} params.transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DocumentList<Document>>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.deleteRows` instead.
     */
    deleteDocuments<Document extends Models.Document = Models.DefaultDocument>(params: {
        databaseId: string;
        collectionId: string;
        queries?: string[];
        transactionId?: string;
    }): Promise<Models.DocumentList<Document>>;
    /**
     * Bulk delete documents using queries, if no queries are passed then all documents are deleted.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.
     * @param {string} transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DocumentList<Document>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteDocuments<Document extends Models.Document = Models.DefaultDocument>(databaseId: string, collectionId: string, queries?: string[], transactionId?: string): Promise<Models.DocumentList<Document>>;
    /**
     * Get a document by its unique ID. This endpoint response returns a JSON object with the document data.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} params.documentId - Document ID.
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.
     * @param {string} params.transactionId - Transaction ID to read uncommitted changes within the transaction.
     * @throws {AppwriteException}
     * @returns {Promise<Document>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.getRow` instead.
     */
    getDocument<Document extends Models.Document = Models.DefaultDocument>(params: {
        databaseId: string;
        collectionId: string;
        documentId: string;
        queries?: string[];
        transactionId?: string;
    }): Promise<Document>;
    /**
     * Get a document by its unique ID. This endpoint response returns a JSON object with the document data.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} documentId - Document ID.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.
     * @param {string} transactionId - Transaction ID to read uncommitted changes within the transaction.
     * @throws {AppwriteException}
     * @returns {Promise<Document>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getDocument<Document extends Models.Document = Models.DefaultDocument>(databaseId: string, collectionId: string, documentId: string, queries?: string[], transactionId?: string): Promise<Document>;
    /**
     * Create or update a Document. Before using this route, you should create a new collection resource using either a [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection) API or directly from your database console.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @param {string} params.documentId - Document ID.
     * @param {Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Partial<Omit<Document, keyof Models.Document>>} params.data - Document data as JSON object. Include all required attributes of the document to be created or updated.
     * @param {string[]} params.permissions - An array of permissions strings. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {string} params.transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Document>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.upsertRow` instead.
     */
    upsertDocument<Document extends Models.Document = Models.DefaultDocument>(params: {
        databaseId: string;
        collectionId: string;
        documentId: string;
        data?: Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Partial<Omit<Document, keyof Models.Document>>;
        permissions?: string[];
        transactionId?: string;
    }): Promise<Document>;
    /**
     * Create or update a Document. Before using this route, you should create a new collection resource using either a [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection) API or directly from your database console.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} documentId - Document ID.
     * @param {Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Partial<Omit<Document, keyof Models.Document>>} data - Document data as JSON object. Include all required attributes of the document to be created or updated.
     * @param {string[]} permissions - An array of permissions strings. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {string} transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Document>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    upsertDocument<Document extends Models.Document = Models.DefaultDocument>(databaseId: string, collectionId: string, documentId: string, data?: Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Partial<Omit<Document, keyof Models.Document>>, permissions?: string[], transactionId?: string): Promise<Document>;
    /**
     * Update a document by its unique ID. Using the patch method you can pass only specific fields that will get updated.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @param {string} params.documentId - Document ID.
     * @param {Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Partial<Omit<Document, keyof Models.Document>>} params.data - Document data as JSON object. Include only attribute and value pairs to be updated.
     * @param {string[]} params.permissions - An array of permissions strings. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {string} params.transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Document>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.updateRow` instead.
     */
    updateDocument<Document extends Models.Document = Models.DefaultDocument>(params: {
        databaseId: string;
        collectionId: string;
        documentId: string;
        data?: Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Partial<Omit<Document, keyof Models.Document>>;
        permissions?: string[];
        transactionId?: string;
    }): Promise<Document>;
    /**
     * Update a document by its unique ID. Using the patch method you can pass only specific fields that will get updated.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} documentId - Document ID.
     * @param {Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Partial<Omit<Document, keyof Models.Document>>} data - Document data as JSON object. Include only attribute and value pairs to be updated.
     * @param {string[]} permissions - An array of permissions strings. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {string} transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Document>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateDocument<Document extends Models.Document = Models.DefaultDocument>(databaseId: string, collectionId: string, documentId: string, data?: Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Partial<Omit<Document, keyof Models.Document>>, permissions?: string[], transactionId?: string): Promise<Document>;
    /**
     * Delete a document by its unique ID.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} params.documentId - Document ID.
     * @param {string} params.transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.deleteRow` instead.
     */
    deleteDocument(params: {
        databaseId: string;
        collectionId: string;
        documentId: string;
        transactionId?: string;
    }): Promise<{}>;
    /**
     * Delete a document by its unique ID.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} documentId - Document ID.
     * @param {string} transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteDocument(databaseId: string, collectionId: string, documentId: string, transactionId?: string): Promise<{}>;
    /**
     * Get the document activity logs list by its unique ID.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @param {string} params.documentId - Document ID.
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset
     * @throws {AppwriteException}
     * @returns {Promise<Models.LogList>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.listRowLogs` instead.
     */
    listDocumentLogs(params: {
        databaseId: string;
        collectionId: string;
        documentId: string;
        queries?: string[];
    }): Promise<Models.LogList>;
    /**
     * Get the document activity logs list by its unique ID.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} documentId - Document ID.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset
     * @throws {AppwriteException}
     * @returns {Promise<Models.LogList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listDocumentLogs(databaseId: string, collectionId: string, documentId: string, queries?: string[]): Promise<Models.LogList>;
    /**
     * Decrement a specific attribute of a document by a given value.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @param {string} params.documentId - Document ID.
     * @param {string} params.attribute - Attribute key.
     * @param {number} params.value - Value to increment the attribute by. The value must be a number.
     * @param {number} params.min - Minimum value for the attribute. If the current value is lesser than this value, an exception will be thrown.
     * @param {string} params.transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Document>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.decrementRowColumn` instead.
     */
    decrementDocumentAttribute<Document extends Models.Document = Models.DefaultDocument>(params: {
        databaseId: string;
        collectionId: string;
        documentId: string;
        attribute: string;
        value?: number;
        min?: number;
        transactionId?: string;
    }): Promise<Document>;
    /**
     * Decrement a specific attribute of a document by a given value.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} documentId - Document ID.
     * @param {string} attribute - Attribute key.
     * @param {number} value - Value to increment the attribute by. The value must be a number.
     * @param {number} min - Minimum value for the attribute. If the current value is lesser than this value, an exception will be thrown.
     * @param {string} transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Document>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    decrementDocumentAttribute<Document extends Models.Document = Models.DefaultDocument>(databaseId: string, collectionId: string, documentId: string, attribute: string, value?: number, min?: number, transactionId?: string): Promise<Document>;
    /**
     * Increment a specific attribute of a document by a given value.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @param {string} params.documentId - Document ID.
     * @param {string} params.attribute - Attribute key.
     * @param {number} params.value - Value to increment the attribute by. The value must be a number.
     * @param {number} params.max - Maximum value for the attribute. If the current value is greater than this value, an error will be thrown.
     * @param {string} params.transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Document>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.incrementRowColumn` instead.
     */
    incrementDocumentAttribute<Document extends Models.Document = Models.DefaultDocument>(params: {
        databaseId: string;
        collectionId: string;
        documentId: string;
        attribute: string;
        value?: number;
        max?: number;
        transactionId?: string;
    }): Promise<Document>;
    /**
     * Increment a specific attribute of a document by a given value.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string} documentId - Document ID.
     * @param {string} attribute - Attribute key.
     * @param {number} value - Value to increment the attribute by. The value must be a number.
     * @param {number} max - Maximum value for the attribute. If the current value is greater than this value, an error will be thrown.
     * @param {string} transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Document>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    incrementDocumentAttribute<Document extends Models.Document = Models.DefaultDocument>(databaseId: string, collectionId: string, documentId: string, attribute: string, value?: number, max?: number, transactionId?: string): Promise<Document>;
    /**
     * List indexes in the collection.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: key, type, status, attributes, error
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.IndexList>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.listIndexes` instead.
     */
    listIndexes(params: {
        databaseId: string;
        collectionId: string;
        queries?: string[];
        total?: boolean;
    }): Promise<Models.IndexList>;
    /**
     * List indexes in the collection.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: key, type, status, attributes, error
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.IndexList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listIndexes(databaseId: string, collectionId: string, queries?: string[], total?: boolean): Promise<Models.IndexList>;
    /**
     * Creates an index on the attributes listed. Your index should include all the attributes you will query in a single request.
     * Attributes can be `key`, `fulltext`, and `unique`.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} params.key - Index Key.
     * @param {IndexType} params.type - Index type.
     * @param {string[]} params.attributes - Array of attributes to index. Maximum of 100 attributes are allowed, each 32 characters long.
     * @param {OrderBy[]} params.orders - Array of index orders. Maximum of 100 orders are allowed.
     * @param {number[]} params.lengths - Length of index. Maximum of 100
     * @throws {AppwriteException}
     * @returns {Promise<Models.Index>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.createIndex` instead.
     */
    createIndex(params: {
        databaseId: string;
        collectionId: string;
        key: string;
        type: IndexType;
        attributes: string[];
        orders?: OrderBy[];
        lengths?: number[];
    }): Promise<Models.Index>;
    /**
     * Creates an index on the attributes listed. Your index should include all the attributes you will query in a single request.
     * Attributes can be `key`, `fulltext`, and `unique`.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} key - Index Key.
     * @param {IndexType} type - Index type.
     * @param {string[]} attributes - Array of attributes to index. Maximum of 100 attributes are allowed, each 32 characters long.
     * @param {OrderBy[]} orders - Array of index orders. Maximum of 100 orders are allowed.
     * @param {number[]} lengths - Length of index. Maximum of 100
     * @throws {AppwriteException}
     * @returns {Promise<Models.Index>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createIndex(databaseId: string, collectionId: string, key: string, type: IndexType, attributes: string[], orders?: OrderBy[], lengths?: number[]): Promise<Models.Index>;
    /**
     * Get an index by its unique ID.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} params.key - Index Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Index>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.getIndex` instead.
     */
    getIndex(params: {
        databaseId: string;
        collectionId: string;
        key: string;
    }): Promise<Models.Index>;
    /**
     * Get an index by its unique ID.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} key - Index Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Index>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getIndex(databaseId: string, collectionId: string, key: string): Promise<Models.Index>;
    /**
     * Delete an index.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} params.key - Index Key.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.deleteIndex` instead.
     */
    deleteIndex(params: {
        databaseId: string;
        collectionId: string;
        key: string;
    }): Promise<{}>;
    /**
     * Delete an index.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).
     * @param {string} key - Index Key.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteIndex(databaseId: string, collectionId: string, key: string): Promise<{}>;
    /**
     * Get the collection activity logs list by its unique ID.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset
     * @throws {AppwriteException}
     * @returns {Promise<Models.LogList>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.listTableLogs` instead.
     */
    listCollectionLogs(params: {
        databaseId: string;
        collectionId: string;
        queries?: string[];
    }): Promise<Models.LogList>;
    /**
     * Get the collection activity logs list by its unique ID.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset
     * @throws {AppwriteException}
     * @returns {Promise<Models.LogList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listCollectionLogs(databaseId: string, collectionId: string, queries?: string[]): Promise<Models.LogList>;
    /**
     * Get usage metrics and statistics for a collection. Returning the total number of documents. The response includes both current totals and historical data over time. Use the optional range parameter to specify the time window for historical data: 24h (last 24 hours), 30d (last 30 days), or 90d (last 90 days). If not specified, range defaults to 30 days.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.collectionId - Collection ID.
     * @param {UsageRange} params.range - Date range.
     * @throws {AppwriteException}
     * @returns {Promise<Models.UsageCollection>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.getTableUsage` instead.
     */
    getCollectionUsage(params: {
        databaseId: string;
        collectionId: string;
        range?: UsageRange;
    }): Promise<Models.UsageCollection>;
    /**
     * Get usage metrics and statistics for a collection. Returning the total number of documents. The response includes both current totals and historical data over time. Use the optional range parameter to specify the time window for historical data: 24h (last 24 hours), 30d (last 30 days), or 90d (last 90 days). If not specified, range defaults to 30 days.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} collectionId - Collection ID.
     * @param {UsageRange} range - Date range.
     * @throws {AppwriteException}
     * @returns {Promise<Models.UsageCollection>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getCollectionUsage(databaseId: string, collectionId: string, range?: UsageRange): Promise<Models.UsageCollection>;
    /**
     * Get the database activity logs list by its unique ID.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset
     * @throws {AppwriteException}
     * @returns {Promise<Models.LogList>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.listDatabaseLogs` instead.
     */
    listLogs(params: {
        databaseId: string;
        queries?: string[];
    }): Promise<Models.LogList>;
    /**
     * Get the database activity logs list by its unique ID.
     *
     * @param {string} databaseId - Database ID.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset
     * @throws {AppwriteException}
     * @returns {Promise<Models.LogList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listLogs(databaseId: string, queries?: string[]): Promise<Models.LogList>;
    /**
     * Get usage metrics and statistics for a database. You can view the total number of collections, documents, and storage usage. The response includes both current totals and historical data over time. Use the optional range parameter to specify the time window for historical data: 24h (last 24 hours), 30d (last 30 days), or 90d (last 90 days). If not specified, range defaults to 30 days.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {UsageRange} params.range - Date range.
     * @throws {AppwriteException}
     * @returns {Promise<Models.UsageDatabase>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.getUsage` instead.
     */
    getUsage(params: {
        databaseId: string;
        range?: UsageRange;
    }): Promise<Models.UsageDatabase>;
    /**
     * Get usage metrics and statistics for a database. You can view the total number of collections, documents, and storage usage. The response includes both current totals and historical data over time. Use the optional range parameter to specify the time window for historical data: 24h (last 24 hours), 30d (last 30 days), or 90d (last 90 days). If not specified, range defaults to 30 days.
     *
     * @param {string} databaseId - Database ID.
     * @param {UsageRange} range - Date range.
     * @throws {AppwriteException}
     * @returns {Promise<Models.UsageDatabase>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getUsage(databaseId: string, range?: UsageRange): Promise<Models.UsageDatabase>;
}
