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
     * Get a list of all project variables. These variables will be accessible in all Appwrite Functions at runtime.
     *
     * @throws {AppwriteException}
     * @returns {Promise<Models.VariableList>}
     */
    listVariables(): Promise<Models.VariableList>;
    /**
     * Create a new project variable. This variable will be accessible in all Appwrite Functions at runtime.
     *
     * @param {string} params.key - Variable key. Max length: 255 chars.
     * @param {string} params.value - Variable value. Max length: 8192 chars.
     * @param {boolean} params.secret - Secret variables can be updated or deleted, but only projects can read them during build and runtime.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Variable>}
     */
    createVariable(params: {
        key: string;
        value: string;
        secret?: boolean;
    }): Promise<Models.Variable>;
    /**
     * Create a new project variable. This variable will be accessible in all Appwrite Functions at runtime.
     *
     * @param {string} key - Variable key. Max length: 255 chars.
     * @param {string} value - Variable value. Max length: 8192 chars.
     * @param {boolean} secret - Secret variables can be updated or deleted, but only projects can read them during build and runtime.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Variable>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createVariable(key: string, value: string, secret?: boolean): Promise<Models.Variable>;
    /**
     * Get a project variable by its unique ID.
     *
     * @param {string} params.variableId - Variable unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Variable>}
     */
    getVariable(params: {
        variableId: string;
    }): Promise<Models.Variable>;
    /**
     * Get a project variable by its unique ID.
     *
     * @param {string} variableId - Variable unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Variable>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getVariable(variableId: string): Promise<Models.Variable>;
    /**
     * Update project variable by its unique ID. This variable will be accessible in all Appwrite Functions at runtime.
     *
     * @param {string} params.variableId - Variable unique ID.
     * @param {string} params.key - Variable key. Max length: 255 chars.
     * @param {string} params.value - Variable value. Max length: 8192 chars.
     * @param {boolean} params.secret - Secret variables can be updated or deleted, but only projects can read them during build and runtime.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Variable>}
     */
    updateVariable(params: {
        variableId: string;
        key: string;
        value?: string;
        secret?: boolean;
    }): Promise<Models.Variable>;
    /**
     * Update project variable by its unique ID. This variable will be accessible in all Appwrite Functions at runtime.
     *
     * @param {string} variableId - Variable unique ID.
     * @param {string} key - Variable key. Max length: 255 chars.
     * @param {string} value - Variable value. Max length: 8192 chars.
     * @param {boolean} secret - Secret variables can be updated or deleted, but only projects can read them during build and runtime.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Variable>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateVariable(variableId: string, key: string, value?: string, secret?: boolean): Promise<Models.Variable>;
    /**
     * Delete a project variable by its unique ID.
     *
     * @param {string} params.variableId - Variable unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteVariable(params: {
        variableId: string;
    }): Promise<{}>;
    /**
     * Delete a project variable by its unique ID.
     *
     * @param {string} variableId - Variable unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteVariable(variableId: string): Promise<{}>;
}
