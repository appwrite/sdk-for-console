import { Client } from '../client';
import type { Models } from '../models';
import { Platform } from '../enums/platform';
import { ConsoleResourceType } from '../enums/console-resource-type';
export declare class Console {
    client: Client;
    constructor(client: Client);
    /**
     * Receive the details of a campaign using its ID.
     *
     * @param {string} params.campaignId - ID of the campaign
     * @throws {AppwriteException}
     * @returns {Promise<Models.Campaign>}
     */
    getCampaign(params: {
        campaignId: string;
    }): Promise<Models.Campaign>;
    /**
     * Receive the details of a campaign using its ID.
     *
     * @param {string} campaignId - ID of the campaign
     * @throws {AppwriteException}
     * @returns {Promise<Models.Campaign>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getCampaign(campaignId: string): Promise<Models.Campaign>;
    /**
     * Get the details of a coupon using it's coupon ID.
     *
     * @param {string} params.couponId - ID of the coupon
     * @throws {AppwriteException}
     * @returns {Promise<Models.Coupon>}
     */
    getCoupon(params: {
        couponId: string;
    }): Promise<Models.Coupon>;
    /**
     * Get the details of a coupon using it's coupon ID.
     *
     * @param {string} couponId - ID of the coupon
     * @throws {AppwriteException}
     * @returns {Promise<Models.Coupon>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getCoupon(couponId: string): Promise<Models.Coupon>;
    /**
     * Return a list of all available plans.
     *
     * @param {Platform} params.platform - Platform type
     * @throws {AppwriteException}
     * @returns {Promise<Models.BillingPlanList>}
     */
    getPlans(params?: {
        platform?: Platform;
    }): Promise<Models.BillingPlanList>;
    /**
     * Return a list of all available plans.
     *
     * @param {Platform} platform - Platform type
     * @throws {AppwriteException}
     * @returns {Promise<Models.BillingPlanList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getPlans(platform?: Platform): Promise<Models.BillingPlanList>;
    /**
     * Get the details of a plan using its plan ID.
     *
     * @param {string} params.planId - Plan id
     * @throws {AppwriteException}
     * @returns {Promise<Models.BillingPlan>}
     */
    getPlan(params: {
        planId: string;
    }): Promise<Models.BillingPlan>;
    /**
     * Get the details of a plan using its plan ID.
     *
     * @param {string} planId - Plan id
     * @throws {AppwriteException}
     * @returns {Promise<Models.BillingPlan>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getPlan(planId: string): Promise<Models.BillingPlan>;
    /**
     * Receive the details of a program using its ID.
     *
     * @param {string} params.programId - ID of the program
     * @throws {AppwriteException}
     * @returns {Promise<Models.Program>}
     */
    getProgram(params: {
        programId: string;
    }): Promise<Models.Program>;
    /**
     * Receive the details of a program using its ID.
     *
     * @param {string} programId - ID of the program
     * @throws {AppwriteException}
     * @returns {Promise<Models.Program>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getProgram(programId: string): Promise<Models.Program>;
    /**
     * Create a new membership for an account to a program.
     *
     * @param {string} params.programId - ID of the program
     * @throws {AppwriteException}
     * @returns {Promise<Models.Organization<Preferences>>}
     */
    createProgramMembership<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: {
        programId: string;
    }): Promise<Models.Organization<Preferences>>;
    /**
     * Create a new membership for an account to a program.
     *
     * @param {string} programId - ID of the program
     * @throws {AppwriteException}
     * @returns {Promise<Models.Organization<Preferences>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createProgramMembership<Preferences extends Models.Preferences = Models.DefaultPreferences>(programId: string): Promise<Models.Organization<Preferences>>;
    /**
     * Get all available regions for the console.
     *
     * @throws {AppwriteException}
     * @returns {Promise<Models.ConsoleRegionList>}
     */
    listRegions(): Promise<Models.ConsoleRegionList>;
    /**
     * Check if a resource ID is available.
     *
     * @param {string} params.value - Resource value.
     * @param {ConsoleResourceType} params.type - Resource type.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    getResource(params: {
        value: string;
        type: ConsoleResourceType;
    }): Promise<{}>;
    /**
     * Check if a resource ID is available.
     *
     * @param {string} value - Resource value.
     * @param {ConsoleResourceType} type - Resource type.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getResource(value: string, type: ConsoleResourceType): Promise<{}>;
    /**
     * Create a new source.
     *
     * @param {string} params.ref - Ref param
     * @param {string} params.referrer - Referrer
     * @param {string} params.utmSource - Utm source
     * @param {string} params.utmCampaign - Utm campaign
     * @param {string} params.utmMedium - Utm medium
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    createSource(params?: {
        ref?: string;
        referrer?: string;
        utmSource?: string;
        utmCampaign?: string;
        utmMedium?: string;
    }): Promise<{}>;
    /**
     * Create a new source.
     *
     * @param {string} ref - Ref param
     * @param {string} referrer - Referrer
     * @param {string} utmSource - Utm source
     * @param {string} utmCampaign - Utm campaign
     * @param {string} utmMedium - Utm medium
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createSource(ref?: string, referrer?: string, utmSource?: string, utmCampaign?: string, utmMedium?: string): Promise<{}>;
    /**
     * Suggests column names and their size limits based on the provided table name. The API will also analyze other tables in the same database to provide context-aware suggestions, ensuring consistency across schema design. Users may optionally provide custom context to further refine the suggestions.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID.
     * @param {string} params.context - Optional user provided context to refine suggestions.
     * @param {number} params.min - Minimum number of suggestions to generate.
     * @param {number} params.max - Maximum number of suggestions to generate.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnList>}
     */
    suggestColumns(params: {
        databaseId: string;
        tableId: string;
        context?: string;
        min?: number;
        max?: number;
    }): Promise<Models.ColumnList>;
    /**
     * Suggests column names and their size limits based on the provided table name. The API will also analyze other tables in the same database to provide context-aware suggestions, ensuring consistency across schema design. Users may optionally provide custom context to further refine the suggestions.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID.
     * @param {string} context - Optional user provided context to refine suggestions.
     * @param {number} min - Minimum number of suggestions to generate.
     * @param {number} max - Maximum number of suggestions to generate.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    suggestColumns(databaseId: string, tableId: string, context?: string, min?: number, max?: number): Promise<Models.ColumnList>;
    /**
     * Suggests database indexes for table columns based on the provided table structure and existing columns. The API will also analyze the table's column types, names, and patterns to recommend optimal indexes that improve query performance for common database operations like filtering, sorting, and searching.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID.
     * @param {number} params.min - Minimum number of suggestions to generate.
     * @param {number} params.max - Maximum number of suggestions to generate.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnIndexList>}
     */
    suggestIndexes(params: {
        databaseId: string;
        tableId: string;
        min?: number;
        max?: number;
    }): Promise<Models.ColumnIndexList>;
    /**
     * Suggests database indexes for table columns based on the provided table structure and existing columns. The API will also analyze the table's column types, names, and patterns to recommend optimal indexes that improve query performance for common database operations like filtering, sorting, and searching.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID.
     * @param {number} min - Minimum number of suggestions to generate.
     * @param {number} max - Maximum number of suggestions to generate.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnIndexList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    suggestIndexes(databaseId: string, tableId: string, min?: number, max?: number): Promise<Models.ColumnIndexList>;
    /**
     * Get all Environment Variables that are relevant for the console.
     *
     * @throws {AppwriteException}
     * @returns {Promise<Models.ConsoleVariables>}
     */
    variables(): Promise<Models.ConsoleVariables>;
}
