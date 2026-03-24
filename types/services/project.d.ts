import { Client } from '../client';
import type { Models } from '../models';
import { ProjectUsageRange } from '../enums/project-usage-range';
export declare class Project {
    client: Client;
    constructor(client: Client);
    /**
     * Get comprehensive usage statistics for your project. View metrics including network requests, bandwidth, storage, function executions, database usage, and user activity. Specify a time range with startDate and endDate, and optionally set the data granularity with period (1h or 1d). The response includes both total counts and detailed breakdowns by resource, along with historical data over the specified period.
     *
     * @param {string} params.startDate - Starting date for the usage
     * @param {string} params.endDate - End date for the usage
     * @param {ProjectUsageRange} params.period - Period used
     * @throws {AppwriteException}
     * @returns {Promise<Models.UsageProject>}
     */
    getUsage(params: {
        startDate: string;
        endDate: string;
        period?: ProjectUsageRange;
    }): Promise<Models.UsageProject>;
    /**
     * Get comprehensive usage statistics for your project. View metrics including network requests, bandwidth, storage, function executions, database usage, and user activity. Specify a time range with startDate and endDate, and optionally set the data granularity with period (1h or 1d). The response includes both total counts and detailed breakdowns by resource, along with historical data over the specified period.
     *
     * @param {string} startDate - Starting date for the usage
     * @param {string} endDate - End date for the usage
     * @param {ProjectUsageRange} period - Period used
     * @throws {AppwriteException}
     * @returns {Promise<Models.UsageProject>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getUsage(startDate: string, endDate: string, period?: ProjectUsageRange): Promise<Models.UsageProject>;
    /**
     * Get a list of all project environment variables.
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: key, resourceType, resourceId, secret
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.VariableList>}
     */
    listVariables(params?: {
        queries?: string[];
        total?: boolean;
    }): Promise<Models.VariableList>;
    /**
     * Get a list of all project environment variables.
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: key, resourceType, resourceId, secret
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.VariableList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listVariables(queries?: string[], total?: boolean): Promise<Models.VariableList>;
    /**
     * Create a new project environment variable. These variables can be accessed by all functions and sites in the project.
     *
     * @param {string} params.variableId - Variable ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.key - Variable key. Max length: 255 chars.
     * @param {string} params.value - Variable value. Max length: 8192 chars.
     * @param {boolean} params.secret - Secret variables can be updated or deleted, but only projects can read them during build and runtime.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Variable>}
     */
    createVariable(params: {
        variableId: string;
        key: string;
        value: string;
        secret?: boolean;
    }): Promise<Models.Variable>;
    /**
     * Create a new project environment variable. These variables can be accessed by all functions and sites in the project.
     *
     * @param {string} variableId - Variable ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} key - Variable key. Max length: 255 chars.
     * @param {string} value - Variable value. Max length: 8192 chars.
     * @param {boolean} secret - Secret variables can be updated or deleted, but only projects can read them during build and runtime.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Variable>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createVariable(variableId: string, key: string, value: string, secret?: boolean): Promise<Models.Variable>;
    /**
     * Get a variable by its unique ID.
     *
     * @param {string} params.variableId - Variable ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Variable>}
     */
    getVariable(params: {
        variableId: string;
    }): Promise<Models.Variable>;
    /**
     * Get a variable by its unique ID.
     *
     * @param {string} variableId - Variable ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Variable>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getVariable(variableId: string): Promise<Models.Variable>;
    /**
     * Update variable by its unique ID.
     *
     * @param {string} params.variableId - Variable ID.
     * @param {string} params.key - Variable key. Max length: 255 chars.
     * @param {string} params.value - Variable value. Max length: 8192 chars.
     * @param {boolean} params.secret - Secret variables can be updated or deleted, but only projects can read them during build and runtime.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Variable>}
     */
    updateVariable(params: {
        variableId: string;
        key?: string;
        value?: string;
        secret?: boolean;
    }): Promise<Models.Variable>;
    /**
     * Update variable by its unique ID.
     *
     * @param {string} variableId - Variable ID.
     * @param {string} key - Variable key. Max length: 255 chars.
     * @param {string} value - Variable value. Max length: 8192 chars.
     * @param {boolean} secret - Secret variables can be updated or deleted, but only projects can read them during build and runtime.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Variable>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateVariable(variableId: string, key?: string, value?: string, secret?: boolean): Promise<Models.Variable>;
    /**
     * Delete a variable by its unique ID.
     *
     * @param {string} params.variableId - Variable ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteVariable(params: {
        variableId: string;
    }): Promise<{}>;
    /**
     * Delete a variable by its unique ID.
     *
     * @param {string} variableId - Variable ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteVariable(variableId: string): Promise<{}>;
}
