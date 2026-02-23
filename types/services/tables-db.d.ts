import { Client } from '../client';
import type { Models } from '../models';
import { UsageRange } from '../enums/usage-range';
import { RelationshipType } from '../enums/relationship-type';
import { RelationMutate } from '../enums/relation-mutate';
import { IndexType } from '../enums/index-type';
import { OrderBy } from '../enums/order-by';
export declare class TablesDB {
    client: Client;
    constructor(client: Client);
    /**
     * Get a list of all databases from the current Appwrite project. You can use the search parameter to filter your results.
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following columns: name
     * @param {string} params.search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DatabaseList>}
     */
    list(params?: {
        queries?: string[];
        search?: string;
        total?: boolean;
    }): Promise<Models.DatabaseList>;
    /**
     * Get a list of all databases from the current Appwrite project. You can use the search parameter to filter your results.
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following columns: name
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
     * List usage metrics and statistics for all databases in the project. You can view the total number of databases, tables, rows, and storage usage. The response includes both current totals and historical data over time. Use the optional range parameter to specify the time window for historical data: 24h (last 24 hours), 30d (last 30 days), or 90d (last 90 days). If not specified, range defaults to 30 days.
     *
     * @param {UsageRange} params.range - Date range.
     * @throws {AppwriteException}
     * @returns {Promise<Models.UsageDatabases>}
     */
    listUsage(params?: {
        range?: UsageRange;
    }): Promise<Models.UsageDatabases>;
    /**
     * List usage metrics and statistics for all databases in the project. You can view the total number of databases, tables, rows, and storage usage. The response includes both current totals and historical data over time. Use the optional range parameter to specify the time window for historical data: 24h (last 24 hours), 30d (last 30 days), or 90d (last 90 days). If not specified, range defaults to 30 days.
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
     * Get a list of all tables that belong to the provided databaseId. You can use the search parameter to filter your results.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following columns: name, enabled, rowSecurity
     * @param {string} params.search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.TableList>}
     */
    listTables(params: {
        databaseId: string;
        queries?: string[];
        search?: string;
        total?: boolean;
    }): Promise<Models.TableList>;
    /**
     * Get a list of all tables that belong to the provided databaseId. You can use the search parameter to filter your results.
     *
     * @param {string} databaseId - Database ID.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following columns: name, enabled, rowSecurity
     * @param {string} search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.TableList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listTables(databaseId: string, queries?: string[], search?: string, total?: boolean): Promise<Models.TableList>;
    /**
     * Create a new Table. Before using this route, you should create a new database resource using either a [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable) API or directly from your database console.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Unique Id. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Table name. Max length: 128 chars.
     * @param {string[]} params.permissions - An array of permissions strings. By default, no user is granted with any permissions. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {boolean} params.rowSecurity - Enables configuring permissions for individual rows. A user needs one of row or table level permissions to access a row. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {boolean} params.enabled - Is table enabled? When set to 'disabled', users cannot access the table but Server SDKs with and API key can still read and write to the table. No data is lost when this is toggled.
     * @param {object[]} params.columns - Array of column definitions to create. Each column should contain: key (string), type (string: string, integer, float, boolean, datetime, relationship), size (integer, required for string type), required (boolean, optional), default (mixed, optional), array (boolean, optional), and type-specific options.
     * @param {object[]} params.indexes - Array of index definitions to create. Each index should contain: key (string), type (string: key, fulltext, unique, spatial), attributes (array of column keys), orders (array of ASC/DESC, optional), and lengths (array of integers, optional).
     * @throws {AppwriteException}
     * @returns {Promise<Models.Table>}
     */
    createTable(params: {
        databaseId: string;
        tableId: string;
        name: string;
        permissions?: string[];
        rowSecurity?: boolean;
        enabled?: boolean;
        columns?: object[];
        indexes?: object[];
    }): Promise<Models.Table>;
    /**
     * Create a new Table. Before using this route, you should create a new database resource using either a [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable) API or directly from your database console.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Unique Id. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Table name. Max length: 128 chars.
     * @param {string[]} permissions - An array of permissions strings. By default, no user is granted with any permissions. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {boolean} rowSecurity - Enables configuring permissions for individual rows. A user needs one of row or table level permissions to access a row. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {boolean} enabled - Is table enabled? When set to 'disabled', users cannot access the table but Server SDKs with and API key can still read and write to the table. No data is lost when this is toggled.
     * @param {object[]} columns - Array of column definitions to create. Each column should contain: key (string), type (string: string, integer, float, boolean, datetime, relationship), size (integer, required for string type), required (boolean, optional), default (mixed, optional), array (boolean, optional), and type-specific options.
     * @param {object[]} indexes - Array of index definitions to create. Each index should contain: key (string), type (string: key, fulltext, unique, spatial), attributes (array of column keys), orders (array of ASC/DESC, optional), and lengths (array of integers, optional).
     * @throws {AppwriteException}
     * @returns {Promise<Models.Table>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createTable(databaseId: string, tableId: string, name: string, permissions?: string[], rowSecurity?: boolean, enabled?: boolean, columns?: object[], indexes?: object[]): Promise<Models.Table>;
    /**
     * Get a table by its unique ID. This endpoint response returns a JSON object with the table metadata.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Table>}
     */
    getTable(params: {
        databaseId: string;
        tableId: string;
    }): Promise<Models.Table>;
    /**
     * Get a table by its unique ID. This endpoint response returns a JSON object with the table metadata.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Table>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getTable(databaseId: string, tableId: string): Promise<Models.Table>;
    /**
     * Update a table by its unique ID.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID.
     * @param {string} params.name - Table name. Max length: 128 chars.
     * @param {string[]} params.permissions - An array of permission strings. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {boolean} params.rowSecurity - Enables configuring permissions for individual rows. A user needs one of row or table-level permissions to access a row. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {boolean} params.enabled - Is table enabled? When set to 'disabled', users cannot access the table but Server SDKs with and API key can still read and write to the table. No data is lost when this is toggled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Table>}
     */
    updateTable(params: {
        databaseId: string;
        tableId: string;
        name?: string;
        permissions?: string[];
        rowSecurity?: boolean;
        enabled?: boolean;
    }): Promise<Models.Table>;
    /**
     * Update a table by its unique ID.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID.
     * @param {string} name - Table name. Max length: 128 chars.
     * @param {string[]} permissions - An array of permission strings. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {boolean} rowSecurity - Enables configuring permissions for individual rows. A user needs one of row or table-level permissions to access a row. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {boolean} enabled - Is table enabled? When set to 'disabled', users cannot access the table but Server SDKs with and API key can still read and write to the table. No data is lost when this is toggled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Table>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateTable(databaseId: string, tableId: string, name?: string, permissions?: string[], rowSecurity?: boolean, enabled?: boolean): Promise<Models.Table>;
    /**
     * Delete a table by its unique ID. Only users with write permissions have access to delete this resource.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteTable(params: {
        databaseId: string;
        tableId: string;
    }): Promise<{}>;
    /**
     * Delete a table by its unique ID. Only users with write permissions have access to delete this resource.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteTable(databaseId: string, tableId: string): Promise<{}>;
    /**
     * List columns in the table.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID.
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following columns: key, type, size, required, array, status, error
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnList>}
     */
    listColumns(params: {
        databaseId: string;
        tableId: string;
        queries?: string[];
        total?: boolean;
    }): Promise<Models.ColumnList>;
    /**
     * List columns in the table.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following columns: key, type, size, required, array, status, error
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listColumns(databaseId: string, tableId: string, queries?: string[], total?: boolean): Promise<Models.ColumnList>;
    /**
     * Create a boolean column.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} params.key - Column Key.
     * @param {boolean} params.required - Is column required?
     * @param {boolean} params.xdefault - Default value for column when not provided. Cannot be set when column is required.
     * @param {boolean} params.array - Is column an array?
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnBoolean>}
     */
    createBooleanColumn(params: {
        databaseId: string;
        tableId: string;
        key: string;
        required: boolean;
        xdefault?: boolean;
        array?: boolean;
    }): Promise<Models.ColumnBoolean>;
    /**
     * Create a boolean column.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} key - Column Key.
     * @param {boolean} required - Is column required?
     * @param {boolean} xdefault - Default value for column when not provided. Cannot be set when column is required.
     * @param {boolean} array - Is column an array?
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnBoolean>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createBooleanColumn(databaseId: string, tableId: string, key: string, required: boolean, xdefault?: boolean, array?: boolean): Promise<Models.ColumnBoolean>;
    /**
     * Update a boolean column. Changing the `default` value will not update already existing rows.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} params.key - Column Key.
     * @param {boolean} params.required - Is column required?
     * @param {boolean} params.xdefault - Default value for column when not provided. Cannot be set when column is required.
     * @param {string} params.newKey - New Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnBoolean>}
     */
    updateBooleanColumn(params: {
        databaseId: string;
        tableId: string;
        key: string;
        required: boolean;
        xdefault?: boolean;
        newKey?: string;
    }): Promise<Models.ColumnBoolean>;
    /**
     * Update a boolean column. Changing the `default` value will not update already existing rows.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} key - Column Key.
     * @param {boolean} required - Is column required?
     * @param {boolean} xdefault - Default value for column when not provided. Cannot be set when column is required.
     * @param {string} newKey - New Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnBoolean>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateBooleanColumn(databaseId: string, tableId: string, key: string, required: boolean, xdefault?: boolean, newKey?: string): Promise<Models.ColumnBoolean>;
    /**
     * Create a date time column according to the ISO 8601 standard.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID.
     * @param {string} params.key - Column Key.
     * @param {boolean} params.required - Is column required?
     * @param {string} params.xdefault - Default value for the column in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Cannot be set when column is required.
     * @param {boolean} params.array - Is column an array?
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnDatetime>}
     */
    createDatetimeColumn(params: {
        databaseId: string;
        tableId: string;
        key: string;
        required: boolean;
        xdefault?: string;
        array?: boolean;
    }): Promise<Models.ColumnDatetime>;
    /**
     * Create a date time column according to the ISO 8601 standard.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID.
     * @param {string} key - Column Key.
     * @param {boolean} required - Is column required?
     * @param {string} xdefault - Default value for the column in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Cannot be set when column is required.
     * @param {boolean} array - Is column an array?
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnDatetime>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createDatetimeColumn(databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, array?: boolean): Promise<Models.ColumnDatetime>;
    /**
     * Update a date time column. Changing the `default` value will not update already existing rows.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID.
     * @param {string} params.key - Column Key.
     * @param {boolean} params.required - Is column required?
     * @param {string} params.xdefault - Default value for column when not provided. Cannot be set when column is required.
     * @param {string} params.newKey - New Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnDatetime>}
     */
    updateDatetimeColumn(params: {
        databaseId: string;
        tableId: string;
        key: string;
        required: boolean;
        xdefault?: string;
        newKey?: string;
    }): Promise<Models.ColumnDatetime>;
    /**
     * Update a date time column. Changing the `default` value will not update already existing rows.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID.
     * @param {string} key - Column Key.
     * @param {boolean} required - Is column required?
     * @param {string} xdefault - Default value for column when not provided. Cannot be set when column is required.
     * @param {string} newKey - New Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnDatetime>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateDatetimeColumn(databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, newKey?: string): Promise<Models.ColumnDatetime>;
    /**
     * Create an email column.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID.
     * @param {string} params.key - Column Key.
     * @param {boolean} params.required - Is column required?
     * @param {string} params.xdefault - Default value for column when not provided. Cannot be set when column is required.
     * @param {boolean} params.array - Is column an array?
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnEmail>}
     */
    createEmailColumn(params: {
        databaseId: string;
        tableId: string;
        key: string;
        required: boolean;
        xdefault?: string;
        array?: boolean;
    }): Promise<Models.ColumnEmail>;
    /**
     * Create an email column.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID.
     * @param {string} key - Column Key.
     * @param {boolean} required - Is column required?
     * @param {string} xdefault - Default value for column when not provided. Cannot be set when column is required.
     * @param {boolean} array - Is column an array?
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnEmail>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createEmailColumn(databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, array?: boolean): Promise<Models.ColumnEmail>;
    /**
     * Update an email column. Changing the `default` value will not update already existing rows.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID.
     * @param {string} params.key - Column Key.
     * @param {boolean} params.required - Is column required?
     * @param {string} params.xdefault - Default value for column when not provided. Cannot be set when column is required.
     * @param {string} params.newKey - New Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnEmail>}
     */
    updateEmailColumn(params: {
        databaseId: string;
        tableId: string;
        key: string;
        required: boolean;
        xdefault?: string;
        newKey?: string;
    }): Promise<Models.ColumnEmail>;
    /**
     * Update an email column. Changing the `default` value will not update already existing rows.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID.
     * @param {string} key - Column Key.
     * @param {boolean} required - Is column required?
     * @param {string} xdefault - Default value for column when not provided. Cannot be set when column is required.
     * @param {string} newKey - New Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnEmail>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateEmailColumn(databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, newKey?: string): Promise<Models.ColumnEmail>;
    /**
     * Create an enumeration column. The `elements` param acts as a white-list of accepted values for this column.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID.
     * @param {string} params.key - Column Key.
     * @param {string[]} params.elements - Array of enum values.
     * @param {boolean} params.required - Is column required?
     * @param {string} params.xdefault - Default value for column when not provided. Cannot be set when column is required.
     * @param {boolean} params.array - Is column an array?
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnEnum>}
     */
    createEnumColumn(params: {
        databaseId: string;
        tableId: string;
        key: string;
        elements: string[];
        required: boolean;
        xdefault?: string;
        array?: boolean;
    }): Promise<Models.ColumnEnum>;
    /**
     * Create an enumeration column. The `elements` param acts as a white-list of accepted values for this column.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID.
     * @param {string} key - Column Key.
     * @param {string[]} elements - Array of enum values.
     * @param {boolean} required - Is column required?
     * @param {string} xdefault - Default value for column when not provided. Cannot be set when column is required.
     * @param {boolean} array - Is column an array?
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnEnum>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createEnumColumn(databaseId: string, tableId: string, key: string, elements: string[], required: boolean, xdefault?: string, array?: boolean): Promise<Models.ColumnEnum>;
    /**
     * Update an enum column. Changing the `default` value will not update already existing rows.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID.
     * @param {string} params.key - Column Key.
     * @param {string[]} params.elements - Updated list of enum values.
     * @param {boolean} params.required - Is column required?
     * @param {string} params.xdefault - Default value for column when not provided. Cannot be set when column is required.
     * @param {string} params.newKey - New Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnEnum>}
     */
    updateEnumColumn(params: {
        databaseId: string;
        tableId: string;
        key: string;
        elements: string[];
        required: boolean;
        xdefault?: string;
        newKey?: string;
    }): Promise<Models.ColumnEnum>;
    /**
     * Update an enum column. Changing the `default` value will not update already existing rows.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID.
     * @param {string} key - Column Key.
     * @param {string[]} elements - Updated list of enum values.
     * @param {boolean} required - Is column required?
     * @param {string} xdefault - Default value for column when not provided. Cannot be set when column is required.
     * @param {string} newKey - New Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnEnum>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateEnumColumn(databaseId: string, tableId: string, key: string, elements: string[], required: boolean, xdefault?: string, newKey?: string): Promise<Models.ColumnEnum>;
    /**
     * Create a float column. Optionally, minimum and maximum values can be provided.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID.
     * @param {string} params.key - Column Key.
     * @param {boolean} params.required - Is column required?
     * @param {number} params.min - Minimum value
     * @param {number} params.max - Maximum value
     * @param {number} params.xdefault - Default value. Cannot be set when required.
     * @param {boolean} params.array - Is column an array?
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnFloat>}
     */
    createFloatColumn(params: {
        databaseId: string;
        tableId: string;
        key: string;
        required: boolean;
        min?: number;
        max?: number;
        xdefault?: number;
        array?: boolean;
    }): Promise<Models.ColumnFloat>;
    /**
     * Create a float column. Optionally, minimum and maximum values can be provided.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID.
     * @param {string} key - Column Key.
     * @param {boolean} required - Is column required?
     * @param {number} min - Minimum value
     * @param {number} max - Maximum value
     * @param {number} xdefault - Default value. Cannot be set when required.
     * @param {boolean} array - Is column an array?
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnFloat>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createFloatColumn(databaseId: string, tableId: string, key: string, required: boolean, min?: number, max?: number, xdefault?: number, array?: boolean): Promise<Models.ColumnFloat>;
    /**
     * Update a float column. Changing the `default` value will not update already existing rows.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID.
     * @param {string} params.key - Column Key.
     * @param {boolean} params.required - Is column required?
     * @param {number} params.xdefault - Default value. Cannot be set when required.
     * @param {number} params.min - Minimum value
     * @param {number} params.max - Maximum value
     * @param {string} params.newKey - New Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnFloat>}
     */
    updateFloatColumn(params: {
        databaseId: string;
        tableId: string;
        key: string;
        required: boolean;
        xdefault?: number;
        min?: number;
        max?: number;
        newKey?: string;
    }): Promise<Models.ColumnFloat>;
    /**
     * Update a float column. Changing the `default` value will not update already existing rows.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID.
     * @param {string} key - Column Key.
     * @param {boolean} required - Is column required?
     * @param {number} xdefault - Default value. Cannot be set when required.
     * @param {number} min - Minimum value
     * @param {number} max - Maximum value
     * @param {string} newKey - New Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnFloat>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateFloatColumn(databaseId: string, tableId: string, key: string, required: boolean, xdefault?: number, min?: number, max?: number, newKey?: string): Promise<Models.ColumnFloat>;
    /**
     * Create an integer column. Optionally, minimum and maximum values can be provided.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID.
     * @param {string} params.key - Column Key.
     * @param {boolean} params.required - Is column required?
     * @param {number | bigint} params.min - Minimum value
     * @param {number | bigint} params.max - Maximum value
     * @param {number | bigint} params.xdefault - Default value. Cannot be set when column is required.
     * @param {boolean} params.array - Is column an array?
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnInteger>}
     */
    createIntegerColumn(params: {
        databaseId: string;
        tableId: string;
        key: string;
        required: boolean;
        min?: number | bigint;
        max?: number | bigint;
        xdefault?: number | bigint;
        array?: boolean;
    }): Promise<Models.ColumnInteger>;
    /**
     * Create an integer column. Optionally, minimum and maximum values can be provided.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID.
     * @param {string} key - Column Key.
     * @param {boolean} required - Is column required?
     * @param {number | bigint} min - Minimum value
     * @param {number | bigint} max - Maximum value
     * @param {number | bigint} xdefault - Default value. Cannot be set when column is required.
     * @param {boolean} array - Is column an array?
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnInteger>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createIntegerColumn(databaseId: string, tableId: string, key: string, required: boolean, min?: number | bigint, max?: number | bigint, xdefault?: number | bigint, array?: boolean): Promise<Models.ColumnInteger>;
    /**
     * Update an integer column. Changing the `default` value will not update already existing rows.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID.
     * @param {string} params.key - Column Key.
     * @param {boolean} params.required - Is column required?
     * @param {number | bigint} params.xdefault - Default value. Cannot be set when column is required.
     * @param {number | bigint} params.min - Minimum value
     * @param {number | bigint} params.max - Maximum value
     * @param {string} params.newKey - New Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnInteger>}
     */
    updateIntegerColumn(params: {
        databaseId: string;
        tableId: string;
        key: string;
        required: boolean;
        xdefault?: number | bigint;
        min?: number | bigint;
        max?: number | bigint;
        newKey?: string;
    }): Promise<Models.ColumnInteger>;
    /**
     * Update an integer column. Changing the `default` value will not update already existing rows.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID.
     * @param {string} key - Column Key.
     * @param {boolean} required - Is column required?
     * @param {number | bigint} xdefault - Default value. Cannot be set when column is required.
     * @param {number | bigint} min - Minimum value
     * @param {number | bigint} max - Maximum value
     * @param {string} newKey - New Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnInteger>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateIntegerColumn(databaseId: string, tableId: string, key: string, required: boolean, xdefault?: number | bigint, min?: number | bigint, max?: number | bigint, newKey?: string): Promise<Models.ColumnInteger>;
    /**
     * Create IP address column.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID.
     * @param {string} params.key - Column Key.
     * @param {boolean} params.required - Is column required?
     * @param {string} params.xdefault - Default value. Cannot be set when column is required.
     * @param {boolean} params.array - Is column an array?
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnIp>}
     */
    createIpColumn(params: {
        databaseId: string;
        tableId: string;
        key: string;
        required: boolean;
        xdefault?: string;
        array?: boolean;
    }): Promise<Models.ColumnIp>;
    /**
     * Create IP address column.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID.
     * @param {string} key - Column Key.
     * @param {boolean} required - Is column required?
     * @param {string} xdefault - Default value. Cannot be set when column is required.
     * @param {boolean} array - Is column an array?
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnIp>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createIpColumn(databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, array?: boolean): Promise<Models.ColumnIp>;
    /**
     * Update an ip column. Changing the `default` value will not update already existing rows.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID.
     * @param {string} params.key - Column Key.
     * @param {boolean} params.required - Is column required?
     * @param {string} params.xdefault - Default value. Cannot be set when column is required.
     * @param {string} params.newKey - New Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnIp>}
     */
    updateIpColumn(params: {
        databaseId: string;
        tableId: string;
        key: string;
        required: boolean;
        xdefault?: string;
        newKey?: string;
    }): Promise<Models.ColumnIp>;
    /**
     * Update an ip column. Changing the `default` value will not update already existing rows.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID.
     * @param {string} key - Column Key.
     * @param {boolean} required - Is column required?
     * @param {string} xdefault - Default value. Cannot be set when column is required.
     * @param {string} newKey - New Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnIp>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateIpColumn(databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, newKey?: string): Promise<Models.ColumnIp>;
    /**
     * Create a geometric line column.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID. You can create a new table using the TablesDB service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} params.key - Column Key.
     * @param {boolean} params.required - Is column required?
     * @param {any[]} params.xdefault - Default value for column when not provided, two-dimensional array of coordinate pairs, [[longitude, latitude], [longitude, latitude], …], listing the vertices of the line in order. Cannot be set when column is required.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnLine>}
     */
    createLineColumn(params: {
        databaseId: string;
        tableId: string;
        key: string;
        required: boolean;
        xdefault?: any[];
    }): Promise<Models.ColumnLine>;
    /**
     * Create a geometric line column.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID. You can create a new table using the TablesDB service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} key - Column Key.
     * @param {boolean} required - Is column required?
     * @param {any[]} xdefault - Default value for column when not provided, two-dimensional array of coordinate pairs, [[longitude, latitude], [longitude, latitude], …], listing the vertices of the line in order. Cannot be set when column is required.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnLine>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createLineColumn(databaseId: string, tableId: string, key: string, required: boolean, xdefault?: any[]): Promise<Models.ColumnLine>;
    /**
     * Update a line column. Changing the `default` value will not update already existing rows.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID. You can create a new table using the TablesDB service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} params.key - Column Key.
     * @param {boolean} params.required - Is column required?
     * @param {any[]} params.xdefault - Default value for column when not provided, two-dimensional array of coordinate pairs, [[longitude, latitude], [longitude, latitude], …], listing the vertices of the line in order. Cannot be set when column is required.
     * @param {string} params.newKey - New Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnLine>}
     */
    updateLineColumn(params: {
        databaseId: string;
        tableId: string;
        key: string;
        required: boolean;
        xdefault?: any[];
        newKey?: string;
    }): Promise<Models.ColumnLine>;
    /**
     * Update a line column. Changing the `default` value will not update already existing rows.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID. You can create a new table using the TablesDB service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} key - Column Key.
     * @param {boolean} required - Is column required?
     * @param {any[]} xdefault - Default value for column when not provided, two-dimensional array of coordinate pairs, [[longitude, latitude], [longitude, latitude], …], listing the vertices of the line in order. Cannot be set when column is required.
     * @param {string} newKey - New Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnLine>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateLineColumn(databaseId: string, tableId: string, key: string, required: boolean, xdefault?: any[], newKey?: string): Promise<Models.ColumnLine>;
    /**
     * Create a longtext column.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} params.key - Column Key.
     * @param {boolean} params.required - Is column required?
     * @param {string} params.xdefault - Default value for column when not provided. Cannot be set when column is required.
     * @param {boolean} params.array - Is column an array?
     * @param {boolean} params.encrypt - Toggle encryption for the column. Encryption enhances security by not storing any plain text values in the database. However, encrypted columns cannot be queried.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnLongtext>}
     */
    createLongtextColumn(params: {
        databaseId: string;
        tableId: string;
        key: string;
        required: boolean;
        xdefault?: string;
        array?: boolean;
        encrypt?: boolean;
    }): Promise<Models.ColumnLongtext>;
    /**
     * Create a longtext column.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} key - Column Key.
     * @param {boolean} required - Is column required?
     * @param {string} xdefault - Default value for column when not provided. Cannot be set when column is required.
     * @param {boolean} array - Is column an array?
     * @param {boolean} encrypt - Toggle encryption for the column. Encryption enhances security by not storing any plain text values in the database. However, encrypted columns cannot be queried.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnLongtext>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createLongtextColumn(databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, array?: boolean, encrypt?: boolean): Promise<Models.ColumnLongtext>;
    /**
     * Update a longtext column. Changing the `default` value will not update already existing rows.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} params.key - Column Key.
     * @param {boolean} params.required - Is column required?
     * @param {string} params.xdefault - Default value for column when not provided. Cannot be set when column is required.
     * @param {string} params.newKey - New Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnLongtext>}
     */
    updateLongtextColumn(params: {
        databaseId: string;
        tableId: string;
        key: string;
        required: boolean;
        xdefault?: string;
        newKey?: string;
    }): Promise<Models.ColumnLongtext>;
    /**
     * Update a longtext column. Changing the `default` value will not update already existing rows.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} key - Column Key.
     * @param {boolean} required - Is column required?
     * @param {string} xdefault - Default value for column when not provided. Cannot be set when column is required.
     * @param {string} newKey - New Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnLongtext>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateLongtextColumn(databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, newKey?: string): Promise<Models.ColumnLongtext>;
    /**
     * Create a mediumtext column.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} params.key - Column Key.
     * @param {boolean} params.required - Is column required?
     * @param {string} params.xdefault - Default value for column when not provided. Cannot be set when column is required.
     * @param {boolean} params.array - Is column an array?
     * @param {boolean} params.encrypt - Toggle encryption for the column. Encryption enhances security by not storing any plain text values in the database. However, encrypted columns cannot be queried.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnMediumtext>}
     */
    createMediumtextColumn(params: {
        databaseId: string;
        tableId: string;
        key: string;
        required: boolean;
        xdefault?: string;
        array?: boolean;
        encrypt?: boolean;
    }): Promise<Models.ColumnMediumtext>;
    /**
     * Create a mediumtext column.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} key - Column Key.
     * @param {boolean} required - Is column required?
     * @param {string} xdefault - Default value for column when not provided. Cannot be set when column is required.
     * @param {boolean} array - Is column an array?
     * @param {boolean} encrypt - Toggle encryption for the column. Encryption enhances security by not storing any plain text values in the database. However, encrypted columns cannot be queried.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnMediumtext>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createMediumtextColumn(databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, array?: boolean, encrypt?: boolean): Promise<Models.ColumnMediumtext>;
    /**
     * Update a mediumtext column. Changing the `default` value will not update already existing rows.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} params.key - Column Key.
     * @param {boolean} params.required - Is column required?
     * @param {string} params.xdefault - Default value for column when not provided. Cannot be set when column is required.
     * @param {string} params.newKey - New Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnMediumtext>}
     */
    updateMediumtextColumn(params: {
        databaseId: string;
        tableId: string;
        key: string;
        required: boolean;
        xdefault?: string;
        newKey?: string;
    }): Promise<Models.ColumnMediumtext>;
    /**
     * Update a mediumtext column. Changing the `default` value will not update already existing rows.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} key - Column Key.
     * @param {boolean} required - Is column required?
     * @param {string} xdefault - Default value for column when not provided. Cannot be set when column is required.
     * @param {string} newKey - New Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnMediumtext>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateMediumtextColumn(databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, newKey?: string): Promise<Models.ColumnMediumtext>;
    /**
     * Create a geometric point column.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID. You can create a new table using the TablesDB service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} params.key - Column Key.
     * @param {boolean} params.required - Is column required?
     * @param {any[]} params.xdefault - Default value for column when not provided, array of two numbers [longitude, latitude], representing a single coordinate. Cannot be set when column is required.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnPoint>}
     */
    createPointColumn(params: {
        databaseId: string;
        tableId: string;
        key: string;
        required: boolean;
        xdefault?: any[];
    }): Promise<Models.ColumnPoint>;
    /**
     * Create a geometric point column.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID. You can create a new table using the TablesDB service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} key - Column Key.
     * @param {boolean} required - Is column required?
     * @param {any[]} xdefault - Default value for column when not provided, array of two numbers [longitude, latitude], representing a single coordinate. Cannot be set when column is required.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnPoint>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createPointColumn(databaseId: string, tableId: string, key: string, required: boolean, xdefault?: any[]): Promise<Models.ColumnPoint>;
    /**
     * Update a point column. Changing the `default` value will not update already existing rows.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID. You can create a new table using the TablesDB service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} params.key - Column Key.
     * @param {boolean} params.required - Is column required?
     * @param {any[]} params.xdefault - Default value for column when not provided, array of two numbers [longitude, latitude], representing a single coordinate. Cannot be set when column is required.
     * @param {string} params.newKey - New Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnPoint>}
     */
    updatePointColumn(params: {
        databaseId: string;
        tableId: string;
        key: string;
        required: boolean;
        xdefault?: any[];
        newKey?: string;
    }): Promise<Models.ColumnPoint>;
    /**
     * Update a point column. Changing the `default` value will not update already existing rows.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID. You can create a new table using the TablesDB service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} key - Column Key.
     * @param {boolean} required - Is column required?
     * @param {any[]} xdefault - Default value for column when not provided, array of two numbers [longitude, latitude], representing a single coordinate. Cannot be set when column is required.
     * @param {string} newKey - New Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnPoint>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updatePointColumn(databaseId: string, tableId: string, key: string, required: boolean, xdefault?: any[], newKey?: string): Promise<Models.ColumnPoint>;
    /**
     * Create a geometric polygon column.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID. You can create a new table using the TablesDB service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} params.key - Column Key.
     * @param {boolean} params.required - Is column required?
     * @param {any[]} params.xdefault - Default value for column when not provided, three-dimensional array where the outer array holds one or more linear rings, [[[longitude, latitude], …], …], the first ring is the exterior boundary, any additional rings are interior holes, and each ring must start and end with the same coordinate pair. Cannot be set when column is required.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnPolygon>}
     */
    createPolygonColumn(params: {
        databaseId: string;
        tableId: string;
        key: string;
        required: boolean;
        xdefault?: any[];
    }): Promise<Models.ColumnPolygon>;
    /**
     * Create a geometric polygon column.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID. You can create a new table using the TablesDB service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} key - Column Key.
     * @param {boolean} required - Is column required?
     * @param {any[]} xdefault - Default value for column when not provided, three-dimensional array where the outer array holds one or more linear rings, [[[longitude, latitude], …], …], the first ring is the exterior boundary, any additional rings are interior holes, and each ring must start and end with the same coordinate pair. Cannot be set when column is required.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnPolygon>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createPolygonColumn(databaseId: string, tableId: string, key: string, required: boolean, xdefault?: any[]): Promise<Models.ColumnPolygon>;
    /**
     * Update a polygon column. Changing the `default` value will not update already existing rows.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID. You can create a new table using the TablesDB service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} params.key - Column Key.
     * @param {boolean} params.required - Is column required?
     * @param {any[]} params.xdefault - Default value for column when not provided, three-dimensional array where the outer array holds one or more linear rings, [[[longitude, latitude], …], …], the first ring is the exterior boundary, any additional rings are interior holes, and each ring must start and end with the same coordinate pair. Cannot be set when column is required.
     * @param {string} params.newKey - New Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnPolygon>}
     */
    updatePolygonColumn(params: {
        databaseId: string;
        tableId: string;
        key: string;
        required: boolean;
        xdefault?: any[];
        newKey?: string;
    }): Promise<Models.ColumnPolygon>;
    /**
     * Update a polygon column. Changing the `default` value will not update already existing rows.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID. You can create a new table using the TablesDB service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} key - Column Key.
     * @param {boolean} required - Is column required?
     * @param {any[]} xdefault - Default value for column when not provided, three-dimensional array where the outer array holds one or more linear rings, [[[longitude, latitude], …], …], the first ring is the exterior boundary, any additional rings are interior holes, and each ring must start and end with the same coordinate pair. Cannot be set when column is required.
     * @param {string} newKey - New Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnPolygon>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updatePolygonColumn(databaseId: string, tableId: string, key: string, required: boolean, xdefault?: any[], newKey?: string): Promise<Models.ColumnPolygon>;
    /**
     * Create relationship column. [Learn more about relationship columns](https://appwrite.io/docs/databases-relationships#relationship-columns).
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID.
     * @param {string} params.relatedTableId - Related Table ID.
     * @param {RelationshipType} params.type - Relation type
     * @param {boolean} params.twoWay - Is Two Way?
     * @param {string} params.key - Column Key.
     * @param {string} params.twoWayKey - Two Way Column Key.
     * @param {RelationMutate} params.onDelete - Constraints option
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnRelationship>}
     */
    createRelationshipColumn(params: {
        databaseId: string;
        tableId: string;
        relatedTableId: string;
        type: RelationshipType;
        twoWay?: boolean;
        key?: string;
        twoWayKey?: string;
        onDelete?: RelationMutate;
    }): Promise<Models.ColumnRelationship>;
    /**
     * Create relationship column. [Learn more about relationship columns](https://appwrite.io/docs/databases-relationships#relationship-columns).
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID.
     * @param {string} relatedTableId - Related Table ID.
     * @param {RelationshipType} type - Relation type
     * @param {boolean} twoWay - Is Two Way?
     * @param {string} key - Column Key.
     * @param {string} twoWayKey - Two Way Column Key.
     * @param {RelationMutate} onDelete - Constraints option
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnRelationship>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createRelationshipColumn(databaseId: string, tableId: string, relatedTableId: string, type: RelationshipType, twoWay?: boolean, key?: string, twoWayKey?: string, onDelete?: RelationMutate): Promise<Models.ColumnRelationship>;
    /**
     * Create a string column.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} params.key - Column Key.
     * @param {number} params.size - Column size for text columns, in number of characters.
     * @param {boolean} params.required - Is column required?
     * @param {string} params.xdefault - Default value for column when not provided. Cannot be set when column is required.
     * @param {boolean} params.array - Is column an array?
     * @param {boolean} params.encrypt - Toggle encryption for the column. Encryption enhances security by not storing any plain text values in the database. However, encrypted columns cannot be queried.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnString>}
     * @deprecated This API has been deprecated since 1.9.0. Please use `TablesDB.createTextColumn` instead.
     */
    createStringColumn(params: {
        databaseId: string;
        tableId: string;
        key: string;
        size: number;
        required: boolean;
        xdefault?: string;
        array?: boolean;
        encrypt?: boolean;
    }): Promise<Models.ColumnString>;
    /**
     * Create a string column.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} key - Column Key.
     * @param {number} size - Column size for text columns, in number of characters.
     * @param {boolean} required - Is column required?
     * @param {string} xdefault - Default value for column when not provided. Cannot be set when column is required.
     * @param {boolean} array - Is column an array?
     * @param {boolean} encrypt - Toggle encryption for the column. Encryption enhances security by not storing any plain text values in the database. However, encrypted columns cannot be queried.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnString>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createStringColumn(databaseId: string, tableId: string, key: string, size: number, required: boolean, xdefault?: string, array?: boolean, encrypt?: boolean): Promise<Models.ColumnString>;
    /**
     * Update a string column. Changing the `default` value will not update already existing rows.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} params.key - Column Key.
     * @param {boolean} params.required - Is column required?
     * @param {string} params.xdefault - Default value for column when not provided. Cannot be set when column is required.
     * @param {number} params.size - Maximum size of the string column.
     * @param {string} params.newKey - New Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnString>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.updateTextColumn` instead.
     */
    updateStringColumn(params: {
        databaseId: string;
        tableId: string;
        key: string;
        required: boolean;
        xdefault?: string;
        size?: number;
        newKey?: string;
    }): Promise<Models.ColumnString>;
    /**
     * Update a string column. Changing the `default` value will not update already existing rows.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} key - Column Key.
     * @param {boolean} required - Is column required?
     * @param {string} xdefault - Default value for column when not provided. Cannot be set when column is required.
     * @param {number} size - Maximum size of the string column.
     * @param {string} newKey - New Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnString>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateStringColumn(databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, size?: number, newKey?: string): Promise<Models.ColumnString>;
    /**
     * Create a text column.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} params.key - Column Key.
     * @param {boolean} params.required - Is column required?
     * @param {string} params.xdefault - Default value for column when not provided. Cannot be set when column is required.
     * @param {boolean} params.array - Is column an array?
     * @param {boolean} params.encrypt - Toggle encryption for the column. Encryption enhances security by not storing any plain text values in the database. However, encrypted columns cannot be queried.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnText>}
     */
    createTextColumn(params: {
        databaseId: string;
        tableId: string;
        key: string;
        required: boolean;
        xdefault?: string;
        array?: boolean;
        encrypt?: boolean;
    }): Promise<Models.ColumnText>;
    /**
     * Create a text column.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} key - Column Key.
     * @param {boolean} required - Is column required?
     * @param {string} xdefault - Default value for column when not provided. Cannot be set when column is required.
     * @param {boolean} array - Is column an array?
     * @param {boolean} encrypt - Toggle encryption for the column. Encryption enhances security by not storing any plain text values in the database. However, encrypted columns cannot be queried.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnText>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createTextColumn(databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, array?: boolean, encrypt?: boolean): Promise<Models.ColumnText>;
    /**
     * Update a text column. Changing the `default` value will not update already existing rows.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} params.key - Column Key.
     * @param {boolean} params.required - Is column required?
     * @param {string} params.xdefault - Default value for column when not provided. Cannot be set when column is required.
     * @param {string} params.newKey - New Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnText>}
     */
    updateTextColumn(params: {
        databaseId: string;
        tableId: string;
        key: string;
        required: boolean;
        xdefault?: string;
        newKey?: string;
    }): Promise<Models.ColumnText>;
    /**
     * Update a text column. Changing the `default` value will not update already existing rows.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} key - Column Key.
     * @param {boolean} required - Is column required?
     * @param {string} xdefault - Default value for column when not provided. Cannot be set when column is required.
     * @param {string} newKey - New Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnText>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateTextColumn(databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, newKey?: string): Promise<Models.ColumnText>;
    /**
     * Create a URL column.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID.
     * @param {string} params.key - Column Key.
     * @param {boolean} params.required - Is column required?
     * @param {string} params.xdefault - Default value for column when not provided. Cannot be set when column is required.
     * @param {boolean} params.array - Is column an array?
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnUrl>}
     */
    createUrlColumn(params: {
        databaseId: string;
        tableId: string;
        key: string;
        required: boolean;
        xdefault?: string;
        array?: boolean;
    }): Promise<Models.ColumnUrl>;
    /**
     * Create a URL column.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID.
     * @param {string} key - Column Key.
     * @param {boolean} required - Is column required?
     * @param {string} xdefault - Default value for column when not provided. Cannot be set when column is required.
     * @param {boolean} array - Is column an array?
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnUrl>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createUrlColumn(databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, array?: boolean): Promise<Models.ColumnUrl>;
    /**
     * Update an url column. Changing the `default` value will not update already existing rows.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID.
     * @param {string} params.key - Column Key.
     * @param {boolean} params.required - Is column required?
     * @param {string} params.xdefault - Default value for column when not provided. Cannot be set when column is required.
     * @param {string} params.newKey - New Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnUrl>}
     */
    updateUrlColumn(params: {
        databaseId: string;
        tableId: string;
        key: string;
        required: boolean;
        xdefault?: string;
        newKey?: string;
    }): Promise<Models.ColumnUrl>;
    /**
     * Update an url column. Changing the `default` value will not update already existing rows.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID.
     * @param {string} key - Column Key.
     * @param {boolean} required - Is column required?
     * @param {string} xdefault - Default value for column when not provided. Cannot be set when column is required.
     * @param {string} newKey - New Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnUrl>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateUrlColumn(databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, newKey?: string): Promise<Models.ColumnUrl>;
    /**
     * Create a varchar column.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} params.key - Column Key.
     * @param {number} params.size - Column size for varchar columns, in number of characters. Maximum size is 16381.
     * @param {boolean} params.required - Is column required?
     * @param {string} params.xdefault - Default value for column when not provided. Cannot be set when column is required.
     * @param {boolean} params.array - Is column an array?
     * @param {boolean} params.encrypt - Toggle encryption for the column. Encryption enhances security by not storing any plain text values in the database. However, encrypted columns cannot be queried.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnVarchar>}
     */
    createVarcharColumn(params: {
        databaseId: string;
        tableId: string;
        key: string;
        size: number;
        required: boolean;
        xdefault?: string;
        array?: boolean;
        encrypt?: boolean;
    }): Promise<Models.ColumnVarchar>;
    /**
     * Create a varchar column.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} key - Column Key.
     * @param {number} size - Column size for varchar columns, in number of characters. Maximum size is 16381.
     * @param {boolean} required - Is column required?
     * @param {string} xdefault - Default value for column when not provided. Cannot be set when column is required.
     * @param {boolean} array - Is column an array?
     * @param {boolean} encrypt - Toggle encryption for the column. Encryption enhances security by not storing any plain text values in the database. However, encrypted columns cannot be queried.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnVarchar>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createVarcharColumn(databaseId: string, tableId: string, key: string, size: number, required: boolean, xdefault?: string, array?: boolean, encrypt?: boolean): Promise<Models.ColumnVarchar>;
    /**
     * Update a varchar column. Changing the `default` value will not update already existing rows.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} params.key - Column Key.
     * @param {boolean} params.required - Is column required?
     * @param {string} params.xdefault - Default value for column when not provided. Cannot be set when column is required.
     * @param {number} params.size - Maximum size of the varchar column.
     * @param {string} params.newKey - New Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnVarchar>}
     */
    updateVarcharColumn(params: {
        databaseId: string;
        tableId: string;
        key: string;
        required: boolean;
        xdefault?: string;
        size?: number;
        newKey?: string;
    }): Promise<Models.ColumnVarchar>;
    /**
     * Update a varchar column. Changing the `default` value will not update already existing rows.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} key - Column Key.
     * @param {boolean} required - Is column required?
     * @param {string} xdefault - Default value for column when not provided. Cannot be set when column is required.
     * @param {number} size - Maximum size of the varchar column.
     * @param {string} newKey - New Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnVarchar>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateVarcharColumn(databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, size?: number, newKey?: string): Promise<Models.ColumnVarchar>;
    /**
     * Get column by ID.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID.
     * @param {string} params.key - Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnBoolean | Models.ColumnInteger | Models.ColumnFloat | Models.ColumnEmail | Models.ColumnEnum | Models.ColumnUrl | Models.ColumnIp | Models.ColumnDatetime | Models.ColumnRelationship | Models.ColumnString>}
     */
    getColumn(params: {
        databaseId: string;
        tableId: string;
        key: string;
    }): Promise<Models.ColumnBoolean | Models.ColumnInteger | Models.ColumnFloat | Models.ColumnEmail | Models.ColumnEnum | Models.ColumnUrl | Models.ColumnIp | Models.ColumnDatetime | Models.ColumnRelationship | Models.ColumnString>;
    /**
     * Get column by ID.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID.
     * @param {string} key - Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnBoolean | Models.ColumnInteger | Models.ColumnFloat | Models.ColumnEmail | Models.ColumnEnum | Models.ColumnUrl | Models.ColumnIp | Models.ColumnDatetime | Models.ColumnRelationship | Models.ColumnString>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getColumn(databaseId: string, tableId: string, key: string): Promise<Models.ColumnBoolean | Models.ColumnInteger | Models.ColumnFloat | Models.ColumnEmail | Models.ColumnEnum | Models.ColumnUrl | Models.ColumnIp | Models.ColumnDatetime | Models.ColumnRelationship | Models.ColumnString>;
    /**
     * Deletes a column.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID.
     * @param {string} params.key - Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteColumn(params: {
        databaseId: string;
        tableId: string;
        key: string;
    }): Promise<{}>;
    /**
     * Deletes a column.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID.
     * @param {string} key - Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteColumn(databaseId: string, tableId: string, key: string): Promise<{}>;
    /**
     * Update relationship column. [Learn more about relationship columns](https://appwrite.io/docs/databases-relationships#relationship-columns).
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID.
     * @param {string} params.key - Column Key.
     * @param {RelationMutate} params.onDelete - Constraints option
     * @param {string} params.newKey - New Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnRelationship>}
     */
    updateRelationshipColumn(params: {
        databaseId: string;
        tableId: string;
        key: string;
        onDelete?: RelationMutate;
        newKey?: string;
    }): Promise<Models.ColumnRelationship>;
    /**
     * Update relationship column. [Learn more about relationship columns](https://appwrite.io/docs/databases-relationships#relationship-columns).
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID.
     * @param {string} key - Column Key.
     * @param {RelationMutate} onDelete - Constraints option
     * @param {string} newKey - New Column Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnRelationship>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateRelationshipColumn(databaseId: string, tableId: string, key: string, onDelete?: RelationMutate, newKey?: string): Promise<Models.ColumnRelationship>;
    /**
     * List indexes on the table.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following columns: key, type, status, attributes, error
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnIndexList>}
     */
    listIndexes(params: {
        databaseId: string;
        tableId: string;
        queries?: string[];
        total?: boolean;
    }): Promise<Models.ColumnIndexList>;
    /**
     * List indexes on the table.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following columns: key, type, status, attributes, error
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnIndexList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listIndexes(databaseId: string, tableId: string, queries?: string[], total?: boolean): Promise<Models.ColumnIndexList>;
    /**
     * Creates an index on the columns listed. Your index should include all the columns you will query in a single request.
     * Type can be `key`, `fulltext`, or `unique`.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} params.key - Index Key.
     * @param {IndexType} params.type - Index type.
     * @param {string[]} params.columns - Array of columns to index. Maximum of 100 columns are allowed, each 32 characters long.
     * @param {OrderBy[]} params.orders - Array of index orders. Maximum of 100 orders are allowed.
     * @param {number[]} params.lengths - Length of index. Maximum of 100
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnIndex>}
     */
    createIndex(params: {
        databaseId: string;
        tableId: string;
        key: string;
        type: IndexType;
        columns: string[];
        orders?: OrderBy[];
        lengths?: number[];
    }): Promise<Models.ColumnIndex>;
    /**
     * Creates an index on the columns listed. Your index should include all the columns you will query in a single request.
     * Type can be `key`, `fulltext`, or `unique`.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} key - Index Key.
     * @param {IndexType} type - Index type.
     * @param {string[]} columns - Array of columns to index. Maximum of 100 columns are allowed, each 32 characters long.
     * @param {OrderBy[]} orders - Array of index orders. Maximum of 100 orders are allowed.
     * @param {number[]} lengths - Length of index. Maximum of 100
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnIndex>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createIndex(databaseId: string, tableId: string, key: string, type: IndexType, columns: string[], orders?: OrderBy[], lengths?: number[]): Promise<Models.ColumnIndex>;
    /**
     * Get index by ID.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} params.key - Index Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnIndex>}
     */
    getIndex(params: {
        databaseId: string;
        tableId: string;
        key: string;
    }): Promise<Models.ColumnIndex>;
    /**
     * Get index by ID.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} key - Index Key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnIndex>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getIndex(databaseId: string, tableId: string, key: string): Promise<Models.ColumnIndex>;
    /**
     * Delete an index.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID. You can create a new table using the TablesDB service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} params.key - Index Key.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteIndex(params: {
        databaseId: string;
        tableId: string;
        key: string;
    }): Promise<{}>;
    /**
     * Delete an index.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID. You can create a new table using the TablesDB service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} key - Index Key.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteIndex(databaseId: string, tableId: string, key: string): Promise<{}>;
    /**
     * Get the table activity logs list by its unique ID.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID.
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset
     * @throws {AppwriteException}
     * @returns {Promise<Models.LogList>}
     */
    listTableLogs(params: {
        databaseId: string;
        tableId: string;
        queries?: string[];
    }): Promise<Models.LogList>;
    /**
     * Get the table activity logs list by its unique ID.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset
     * @throws {AppwriteException}
     * @returns {Promise<Models.LogList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listTableLogs(databaseId: string, tableId: string, queries?: string[]): Promise<Models.LogList>;
    /**
     * Get a list of all the user's rows in a given table. You can use the query params to filter your results.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID. You can create a new table using the TablesDB service [server integration](https://appwrite.io/docs/products/databases/tables#create-table).
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.
     * @param {string} params.transactionId - Transaction ID to read uncommitted changes within the transaction.
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.RowList<Row>>}
     */
    listRows<Row extends Models.Row = Models.DefaultRow>(params: {
        databaseId: string;
        tableId: string;
        queries?: string[];
        transactionId?: string;
        total?: boolean;
    }): Promise<Models.RowList<Row>>;
    /**
     * Get a list of all the user's rows in a given table. You can use the query params to filter your results.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID. You can create a new table using the TablesDB service [server integration](https://appwrite.io/docs/products/databases/tables#create-table).
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.
     * @param {string} transactionId - Transaction ID to read uncommitted changes within the transaction.
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.RowList<Row>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listRows<Row extends Models.Row = Models.DefaultRow>(databaseId: string, tableId: string, queries?: string[], transactionId?: string, total?: boolean): Promise<Models.RowList<Row>>;
    /**
     * Create a new Row. Before using this route, you should create a new table resource using either a [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable) API or directly from your database console.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable). Make sure to define columns before creating rows.
     * @param {string} params.rowId - Row ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {Row extends Models.DefaultRow ? Partial<Models.Row> & Record<string, any> : Partial<Models.Row> & Omit<Row, keyof Models.Row>} params.data - Row data as JSON object.
     * @param {string[]} params.permissions - An array of permissions strings. By default, only the current user is granted all permissions. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {string} params.transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Row>}
     */
    createRow<Row extends Models.Row = Models.DefaultRow>(params: {
        databaseId: string;
        tableId: string;
        rowId: string;
        data: Row extends Models.DefaultRow ? Partial<Models.Row> & Record<string, any> : Partial<Models.Row> & Omit<Row, keyof Models.Row>;
        permissions?: string[];
        transactionId?: string;
    }): Promise<Row>;
    /**
     * Create a new Row. Before using this route, you should create a new table resource using either a [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable) API or directly from your database console.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable). Make sure to define columns before creating rows.
     * @param {string} rowId - Row ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {Row extends Models.DefaultRow ? Partial<Models.Row> & Record<string, any> : Partial<Models.Row> & Omit<Row, keyof Models.Row>} data - Row data as JSON object.
     * @param {string[]} permissions - An array of permissions strings. By default, only the current user is granted all permissions. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {string} transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Row>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createRow<Row extends Models.Row = Models.DefaultRow>(databaseId: string, tableId: string, rowId: string, data: Row extends Models.DefaultRow ? Partial<Models.Row> & Record<string, any> : Partial<Models.Row> & Omit<Row, keyof Models.Row>, permissions?: string[], transactionId?: string): Promise<Row>;
    /**
     * Create new Rows. Before using this route, you should create a new table resource using either a [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable) API or directly from your database console.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable). Make sure to define columns before creating rows.
     * @param {object[]} params.rows - Array of rows data as JSON objects.
     * @param {string} params.transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Models.RowList<Row>>}
     */
    createRows<Row extends Models.Row = Models.DefaultRow>(params: {
        databaseId: string;
        tableId: string;
        rows: object[];
        transactionId?: string;
    }): Promise<Models.RowList<Row>>;
    /**
     * Create new Rows. Before using this route, you should create a new table resource using either a [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable) API or directly from your database console.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable). Make sure to define columns before creating rows.
     * @param {object[]} rows - Array of rows data as JSON objects.
     * @param {string} transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Models.RowList<Row>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createRows<Row extends Models.Row = Models.DefaultRow>(databaseId: string, tableId: string, rows: object[], transactionId?: string): Promise<Models.RowList<Row>>;
    /**
     * Create or update Rows. Before using this route, you should create a new table resource using either a [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable) API or directly from your database console.
     *
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID.
     * @param {object[]} params.rows - Array of row data as JSON objects. May contain partial rows.
     * @param {string} params.transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Models.RowList<Row>>}
     */
    upsertRows<Row extends Models.Row = Models.DefaultRow>(params: {
        databaseId: string;
        tableId: string;
        rows: object[];
        transactionId?: string;
    }): Promise<Models.RowList<Row>>;
    /**
     * Create or update Rows. Before using this route, you should create a new table resource using either a [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable) API or directly from your database console.
     *
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID.
     * @param {object[]} rows - Array of row data as JSON objects. May contain partial rows.
     * @param {string} transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Models.RowList<Row>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    upsertRows<Row extends Models.Row = Models.DefaultRow>(databaseId: string, tableId: string, rows: object[], transactionId?: string): Promise<Models.RowList<Row>>;
    /**
     * Update all rows that match your queries, if no queries are submitted then all rows are updated. You can pass only specific fields to be updated.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID.
     * @param {object} params.data - Row data as JSON object. Include only column and value pairs to be updated.
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.
     * @param {string} params.transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Models.RowList<Row>>}
     */
    updateRows<Row extends Models.Row = Models.DefaultRow>(params: {
        databaseId: string;
        tableId: string;
        data?: object;
        queries?: string[];
        transactionId?: string;
    }): Promise<Models.RowList<Row>>;
    /**
     * Update all rows that match your queries, if no queries are submitted then all rows are updated. You can pass only specific fields to be updated.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID.
     * @param {object} data - Row data as JSON object. Include only column and value pairs to be updated.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.
     * @param {string} transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Models.RowList<Row>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateRows<Row extends Models.Row = Models.DefaultRow>(databaseId: string, tableId: string, data?: object, queries?: string[], transactionId?: string): Promise<Models.RowList<Row>>;
    /**
     * Bulk delete rows using queries, if no queries are passed then all rows are deleted.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.
     * @param {string} params.transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Models.RowList<Row>>}
     */
    deleteRows<Row extends Models.Row = Models.DefaultRow>(params: {
        databaseId: string;
        tableId: string;
        queries?: string[];
        transactionId?: string;
    }): Promise<Models.RowList<Row>>;
    /**
     * Bulk delete rows using queries, if no queries are passed then all rows are deleted.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.
     * @param {string} transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Models.RowList<Row>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteRows<Row extends Models.Row = Models.DefaultRow>(databaseId: string, tableId: string, queries?: string[], transactionId?: string): Promise<Models.RowList<Row>>;
    /**
     * Get a row by its unique ID. This endpoint response returns a JSON object with the row data.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} params.rowId - Row ID.
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.
     * @param {string} params.transactionId - Transaction ID to read uncommitted changes within the transaction.
     * @throws {AppwriteException}
     * @returns {Promise<Row>}
     */
    getRow<Row extends Models.Row = Models.DefaultRow>(params: {
        databaseId: string;
        tableId: string;
        rowId: string;
        queries?: string[];
        transactionId?: string;
    }): Promise<Row>;
    /**
     * Get a row by its unique ID. This endpoint response returns a JSON object with the row data.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} rowId - Row ID.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.
     * @param {string} transactionId - Transaction ID to read uncommitted changes within the transaction.
     * @throws {AppwriteException}
     * @returns {Promise<Row>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getRow<Row extends Models.Row = Models.DefaultRow>(databaseId: string, tableId: string, rowId: string, queries?: string[], transactionId?: string): Promise<Row>;
    /**
     * Create or update a Row. Before using this route, you should create a new table resource using either a [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable) API or directly from your database console.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID.
     * @param {string} params.rowId - Row ID.
     * @param {Row extends Models.DefaultRow ? Partial<Models.Row> & Record<string, any> : Partial<Models.Row> & Partial<Omit<Row, keyof Models.Row>>} params.data - Row data as JSON object. Include all required columns of the row to be created or updated.
     * @param {string[]} params.permissions - An array of permissions strings. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {string} params.transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Row>}
     */
    upsertRow<Row extends Models.Row = Models.DefaultRow>(params: {
        databaseId: string;
        tableId: string;
        rowId: string;
        data?: Row extends Models.DefaultRow ? Partial<Models.Row> & Record<string, any> : Partial<Models.Row> & Partial<Omit<Row, keyof Models.Row>>;
        permissions?: string[];
        transactionId?: string;
    }): Promise<Row>;
    /**
     * Create or update a Row. Before using this route, you should create a new table resource using either a [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable) API or directly from your database console.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID.
     * @param {string} rowId - Row ID.
     * @param {Row extends Models.DefaultRow ? Partial<Models.Row> & Record<string, any> : Partial<Models.Row> & Partial<Omit<Row, keyof Models.Row>>} data - Row data as JSON object. Include all required columns of the row to be created or updated.
     * @param {string[]} permissions - An array of permissions strings. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {string} transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Row>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    upsertRow<Row extends Models.Row = Models.DefaultRow>(databaseId: string, tableId: string, rowId: string, data?: Row extends Models.DefaultRow ? Partial<Models.Row> & Record<string, any> : Partial<Models.Row> & Partial<Omit<Row, keyof Models.Row>>, permissions?: string[], transactionId?: string): Promise<Row>;
    /**
     * Update a row by its unique ID. Using the patch method you can pass only specific fields that will get updated.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID.
     * @param {string} params.rowId - Row ID.
     * @param {Row extends Models.DefaultRow ? Partial<Models.Row> & Record<string, any> : Partial<Models.Row> & Partial<Omit<Row, keyof Models.Row>>} params.data - Row data as JSON object. Include only columns and value pairs to be updated.
     * @param {string[]} params.permissions - An array of permissions strings. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {string} params.transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Row>}
     */
    updateRow<Row extends Models.Row = Models.DefaultRow>(params: {
        databaseId: string;
        tableId: string;
        rowId: string;
        data?: Row extends Models.DefaultRow ? Partial<Models.Row> & Record<string, any> : Partial<Models.Row> & Partial<Omit<Row, keyof Models.Row>>;
        permissions?: string[];
        transactionId?: string;
    }): Promise<Row>;
    /**
     * Update a row by its unique ID. Using the patch method you can pass only specific fields that will get updated.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID.
     * @param {string} rowId - Row ID.
     * @param {Row extends Models.DefaultRow ? Partial<Models.Row> & Record<string, any> : Partial<Models.Row> & Partial<Omit<Row, keyof Models.Row>>} data - Row data as JSON object. Include only columns and value pairs to be updated.
     * @param {string[]} permissions - An array of permissions strings. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {string} transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Row>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateRow<Row extends Models.Row = Models.DefaultRow>(databaseId: string, tableId: string, rowId: string, data?: Row extends Models.DefaultRow ? Partial<Models.Row> & Record<string, any> : Partial<Models.Row> & Partial<Omit<Row, keyof Models.Row>>, permissions?: string[], transactionId?: string): Promise<Row>;
    /**
     * Delete a row by its unique ID.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} params.rowId - Row ID.
     * @param {string} params.transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteRow(params: {
        databaseId: string;
        tableId: string;
        rowId: string;
        transactionId?: string;
    }): Promise<{}>;
    /**
     * Delete a row by its unique ID.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable).
     * @param {string} rowId - Row ID.
     * @param {string} transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteRow(databaseId: string, tableId: string, rowId: string, transactionId?: string): Promise<{}>;
    /**
     * Get the row activity logs list by its unique ID.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID.
     * @param {string} params.rowId - Row ID.
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset
     * @throws {AppwriteException}
     * @returns {Promise<Models.LogList>}
     */
    listRowLogs(params: {
        databaseId: string;
        tableId: string;
        rowId: string;
        queries?: string[];
    }): Promise<Models.LogList>;
    /**
     * Get the row activity logs list by its unique ID.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID.
     * @param {string} rowId - Row ID.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset
     * @throws {AppwriteException}
     * @returns {Promise<Models.LogList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listRowLogs(databaseId: string, tableId: string, rowId: string, queries?: string[]): Promise<Models.LogList>;
    /**
     * Decrement a specific column of a row by a given value.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID.
     * @param {string} params.rowId - Row ID.
     * @param {string} params.column - Column key.
     * @param {number} params.value - Value to increment the column by. The value must be a number.
     * @param {number} params.min - Minimum value for the column. If the current value is lesser than this value, an exception will be thrown.
     * @param {string} params.transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Row>}
     */
    decrementRowColumn<Row extends Models.Row = Models.DefaultRow>(params: {
        databaseId: string;
        tableId: string;
        rowId: string;
        column: string;
        value?: number;
        min?: number;
        transactionId?: string;
    }): Promise<Row>;
    /**
     * Decrement a specific column of a row by a given value.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID.
     * @param {string} rowId - Row ID.
     * @param {string} column - Column key.
     * @param {number} value - Value to increment the column by. The value must be a number.
     * @param {number} min - Minimum value for the column. If the current value is lesser than this value, an exception will be thrown.
     * @param {string} transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Row>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    decrementRowColumn<Row extends Models.Row = Models.DefaultRow>(databaseId: string, tableId: string, rowId: string, column: string, value?: number, min?: number, transactionId?: string): Promise<Row>;
    /**
     * Increment a specific column of a row by a given value.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID.
     * @param {string} params.rowId - Row ID.
     * @param {string} params.column - Column key.
     * @param {number} params.value - Value to increment the column by. The value must be a number.
     * @param {number} params.max - Maximum value for the column. If the current value is greater than this value, an error will be thrown.
     * @param {string} params.transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Row>}
     */
    incrementRowColumn<Row extends Models.Row = Models.DefaultRow>(params: {
        databaseId: string;
        tableId: string;
        rowId: string;
        column: string;
        value?: number;
        max?: number;
        transactionId?: string;
    }): Promise<Row>;
    /**
     * Increment a specific column of a row by a given value.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID.
     * @param {string} rowId - Row ID.
     * @param {string} column - Column key.
     * @param {number} value - Value to increment the column by. The value must be a number.
     * @param {number} max - Maximum value for the column. If the current value is greater than this value, an error will be thrown.
     * @param {string} transactionId - Transaction ID for staging the operation.
     * @throws {AppwriteException}
     * @returns {Promise<Row>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    incrementRowColumn<Row extends Models.Row = Models.DefaultRow>(databaseId: string, tableId: string, rowId: string, column: string, value?: number, max?: number, transactionId?: string): Promise<Row>;
    /**
     * Get usage metrics and statistics for a table. Returning the total number of rows. The response includes both current totals and historical data over time. Use the optional range parameter to specify the time window for historical data: 24h (last 24 hours), 30d (last 30 days), or 90d (last 90 days). If not specified, range defaults to 30 days.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID.
     * @param {UsageRange} params.range - Date range.
     * @throws {AppwriteException}
     * @returns {Promise<Models.UsageTable>}
     */
    getTableUsage(params: {
        databaseId: string;
        tableId: string;
        range?: UsageRange;
    }): Promise<Models.UsageTable>;
    /**
     * Get usage metrics and statistics for a table. Returning the total number of rows. The response includes both current totals and historical data over time. Use the optional range parameter to specify the time window for historical data: 24h (last 24 hours), 30d (last 30 days), or 90d (last 90 days). If not specified, range defaults to 30 days.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID.
     * @param {UsageRange} range - Date range.
     * @throws {AppwriteException}
     * @returns {Promise<Models.UsageTable>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getTableUsage(databaseId: string, tableId: string, range?: UsageRange): Promise<Models.UsageTable>;
    /**
     * Get usage metrics and statistics for a database. You can view the total number of tables, rows, and storage usage. The response includes both current totals and historical data over time. Use the optional range parameter to specify the time window for historical data: 24h (last 24 hours), 30d (last 30 days), or 90d (last 90 days). If not specified, range defaults to 30 days.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {UsageRange} params.range - Date range.
     * @throws {AppwriteException}
     * @returns {Promise<Models.UsageDatabase>}
     */
    getUsage(params: {
        databaseId: string;
        range?: UsageRange;
    }): Promise<Models.UsageDatabase>;
    /**
     * Get usage metrics and statistics for a database. You can view the total number of tables, rows, and storage usage. The response includes both current totals and historical data over time. Use the optional range parameter to specify the time window for historical data: 24h (last 24 hours), 30d (last 30 days), or 90d (last 90 days). If not specified, range defaults to 30 days.
     *
     * @param {string} databaseId - Database ID.
     * @param {UsageRange} range - Date range.
     * @throws {AppwriteException}
     * @returns {Promise<Models.UsageDatabase>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getUsage(databaseId: string, range?: UsageRange): Promise<Models.UsageDatabase>;
}
