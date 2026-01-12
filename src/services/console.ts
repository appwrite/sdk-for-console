import { Service } from '../service';
import { AppwriteException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { Platform } from '../enums/platform';
import { ConsoleResourceType } from '../enums/console-resource-type';

export class Console {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Receive the details of a campaign using its ID.
     *
     * @param {string} params.campaignId - ID of the campaign
     * @throws {AppwriteException}
     * @returns {Promise<Models.Campaign>}
     */
    getCampaign(params: { campaignId: string  }): Promise<Models.Campaign>;
    /**
     * Receive the details of a campaign using its ID.
     *
     * @param {string} campaignId - ID of the campaign
     * @throws {AppwriteException}
     * @returns {Promise<Models.Campaign>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getCampaign(campaignId: string): Promise<Models.Campaign>;
    getCampaign(
        paramsOrFirst: { campaignId: string } | string    
    ): Promise<Models.Campaign> {
        let params: { campaignId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { campaignId: string };
        } else {
            params = {
                campaignId: paramsOrFirst as string            
            };
        }
        
        const campaignId = params.campaignId;

        if (typeof campaignId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "campaignId"');
        }

        const apiPath = '/console/campaigns/{campaignId}'.replace('{campaignId}', campaignId);
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
     * Get the details of a coupon using it's coupon ID.
     *
     * @param {string} params.couponId - ID of the coupon
     * @throws {AppwriteException}
     * @returns {Promise<Models.Coupon>}
     */
    getCoupon(params: { couponId: string  }): Promise<Models.Coupon>;
    /**
     * Get the details of a coupon using it's coupon ID.
     *
     * @param {string} couponId - ID of the coupon
     * @throws {AppwriteException}
     * @returns {Promise<Models.Coupon>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getCoupon(couponId: string): Promise<Models.Coupon>;
    getCoupon(
        paramsOrFirst: { couponId: string } | string    
    ): Promise<Models.Coupon> {
        let params: { couponId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { couponId: string };
        } else {
            params = {
                couponId: paramsOrFirst as string            
            };
        }
        
        const couponId = params.couponId;

        if (typeof couponId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "couponId"');
        }

        const apiPath = '/console/coupons/{couponId}'.replace('{couponId}', couponId);
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
     * Return a list of all available plans.
     *
     * @param {Platform} params.platform - Platform type
     * @throws {AppwriteException}
     * @returns {Promise<Models.BillingPlanList>}
     */
    getPlans(params?: { platform?: Platform  }): Promise<Models.BillingPlanList>;
    /**
     * Return a list of all available plans.
     *
     * @param {Platform} platform - Platform type
     * @throws {AppwriteException}
     * @returns {Promise<Models.BillingPlanList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getPlans(platform?: Platform): Promise<Models.BillingPlanList>;
    getPlans(
        paramsOrFirst?: { platform?: Platform } | Platform    
    ): Promise<Models.BillingPlanList> {
        let params: { platform?: Platform };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && 'platform' in paramsOrFirst)) {
            params = (paramsOrFirst || {}) as { platform?: Platform };
        } else {
            params = {
                platform: paramsOrFirst as Platform            
            };
        }
        
        const platform = params.platform;


        const apiPath = '/console/plans';
        const payload: Payload = {};
        if (typeof platform !== 'undefined') {
            payload['platform'] = platform;
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
     * Get the details of a plan using its plan ID.
     *
     * @param {string} params.planId - Plan id
     * @throws {AppwriteException}
     * @returns {Promise<Models.BillingPlan>}
     */
    getPlan(params: { planId: string  }): Promise<Models.BillingPlan>;
    /**
     * Get the details of a plan using its plan ID.
     *
     * @param {string} planId - Plan id
     * @throws {AppwriteException}
     * @returns {Promise<Models.BillingPlan>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getPlan(planId: string): Promise<Models.BillingPlan>;
    getPlan(
        paramsOrFirst: { planId: string } | string    
    ): Promise<Models.BillingPlan> {
        let params: { planId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { planId: string };
        } else {
            params = {
                planId: paramsOrFirst as string            
            };
        }
        
        const planId = params.planId;

        if (typeof planId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "planId"');
        }

        const apiPath = '/console/plans/{planId}'.replace('{planId}', planId);
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
     * Receive the details of a program using its ID.
     *
     * @param {string} params.programId - ID of the program
     * @throws {AppwriteException}
     * @returns {Promise<Models.Program>}
     */
    getProgram(params: { programId: string  }): Promise<Models.Program>;
    /**
     * Receive the details of a program using its ID.
     *
     * @param {string} programId - ID of the program
     * @throws {AppwriteException}
     * @returns {Promise<Models.Program>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getProgram(programId: string): Promise<Models.Program>;
    getProgram(
        paramsOrFirst: { programId: string } | string    
    ): Promise<Models.Program> {
        let params: { programId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { programId: string };
        } else {
            params = {
                programId: paramsOrFirst as string            
            };
        }
        
        const programId = params.programId;

        if (typeof programId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "programId"');
        }

        const apiPath = '/console/programs/{programId}'.replace('{programId}', programId);
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
     * Create a new membership for an account to a program.
     *
     * @param {string} params.programId - ID of the program
     * @throws {AppwriteException}
     * @returns {Promise<Models.Organization<Preferences>>}
     */
    createProgramMembership<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: { programId: string  }): Promise<Models.Organization<Preferences>>;
    /**
     * Create a new membership for an account to a program.
     *
     * @param {string} programId - ID of the program
     * @throws {AppwriteException}
     * @returns {Promise<Models.Organization<Preferences>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createProgramMembership<Preferences extends Models.Preferences = Models.DefaultPreferences>(programId: string): Promise<Models.Organization<Preferences>>;
    createProgramMembership<Preferences extends Models.Preferences = Models.DefaultPreferences>(
        paramsOrFirst: { programId: string } | string    
    ): Promise<Models.Organization<Preferences>> {
        let params: { programId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { programId: string };
        } else {
            params = {
                programId: paramsOrFirst as string            
            };
        }
        
        const programId = params.programId;

        if (typeof programId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "programId"');
        }

        const apiPath = '/console/programs/{programId}/memberships'.replace('{programId}', programId);
        const payload: Payload = {};
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
     * Get all available regions for the console.
     *
     * @param {string} params.organizationId - Team ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ConsoleRegionList>}
     */
    getRegions(params: { organizationId: string  }): Promise<Models.ConsoleRegionList>;
    /**
     * Get all available regions for the console.
     *
     * @param {string} organizationId - Team ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ConsoleRegionList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getRegions(organizationId: string): Promise<Models.ConsoleRegionList>;
    getRegions(
        paramsOrFirst: { organizationId: string } | string    
    ): Promise<Models.ConsoleRegionList> {
        let params: { organizationId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { organizationId: string };
        } else {
            params = {
                organizationId: paramsOrFirst as string            
            };
        }
        
        const organizationId = params.organizationId;

        if (typeof organizationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "organizationId"');
        }

        const apiPath = '/console/regions';
        const payload: Payload = {};
        if (typeof organizationId !== 'undefined') {
            payload['organizationId'] = organizationId;
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
     * Check if a resource ID is available.
     *
     * @param {string} params.value - Resource value.
     * @param {ConsoleResourceType} params.type - Resource type.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    getResource(params: { value: string, type: ConsoleResourceType  }): Promise<{}>;
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
    getResource(
        paramsOrFirst: { value: string, type: ConsoleResourceType } | string,
        ...rest: [(ConsoleResourceType)?]    
    ): Promise<{}> {
        let params: { value: string, type: ConsoleResourceType };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { value: string, type: ConsoleResourceType };
        } else {
            params = {
                value: paramsOrFirst as string,
                type: rest[0] as ConsoleResourceType            
            };
        }
        
        const value = params.value;
        const type = params.type;

        if (typeof value === 'undefined') {
            throw new AppwriteException('Missing required parameter: "value"');
        }
        if (typeof type === 'undefined') {
            throw new AppwriteException('Missing required parameter: "type"');
        }

        const apiPath = '/console/resources';
        const payload: Payload = {};
        if (typeof value !== 'undefined') {
            payload['value'] = value;
        }
        if (typeof type !== 'undefined') {
            payload['type'] = type;
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
    createSource(params?: { ref?: string, referrer?: string, utmSource?: string, utmCampaign?: string, utmMedium?: string  }): Promise<{}>;
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
    createSource(
        paramsOrFirst?: { ref?: string, referrer?: string, utmSource?: string, utmCampaign?: string, utmMedium?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { ref?: string, referrer?: string, utmSource?: string, utmCampaign?: string, utmMedium?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { ref?: string, referrer?: string, utmSource?: string, utmCampaign?: string, utmMedium?: string };
        } else {
            params = {
                ref: paramsOrFirst as string,
                referrer: rest[0] as string,
                utmSource: rest[1] as string,
                utmCampaign: rest[2] as string,
                utmMedium: rest[3] as string            
            };
        }
        
        const ref = params.ref;
        const referrer = params.referrer;
        const utmSource = params.utmSource;
        const utmCampaign = params.utmCampaign;
        const utmMedium = params.utmMedium;


        const apiPath = '/console/sources';
        const payload: Payload = {};
        if (typeof ref !== 'undefined') {
            payload['ref'] = ref;
        }
        if (typeof referrer !== 'undefined') {
            payload['referrer'] = referrer;
        }
        if (typeof utmSource !== 'undefined') {
            payload['utmSource'] = utmSource;
        }
        if (typeof utmCampaign !== 'undefined') {
            payload['utmCampaign'] = utmCampaign;
        }
        if (typeof utmMedium !== 'undefined') {
            payload['utmMedium'] = utmMedium;
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
     * Suggests column names and their size limits based on the provided table name. The API will also analyze other tables in the same database to provide context-aware suggestions, ensuring consistency across schema design. Users may optionally provide custom context to further refine the suggestions.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID.
     * @param {string} params.context - Optional user provided context to refine suggestions.
     * @param {number | bigint} params.min - Minimum number of suggestions to generate.
     * @param {number | bigint} params.max - Maximum number of suggestions to generate.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnList>}
     */
    suggestColumns(params: { databaseId: string, tableId: string, context?: string, min?: number | bigint, max?: number | bigint  }): Promise<Models.ColumnList>;
    /**
     * Suggests column names and their size limits based on the provided table name. The API will also analyze other tables in the same database to provide context-aware suggestions, ensuring consistency across schema design. Users may optionally provide custom context to further refine the suggestions.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID.
     * @param {string} context - Optional user provided context to refine suggestions.
     * @param {number | bigint} min - Minimum number of suggestions to generate.
     * @param {number | bigint} max - Maximum number of suggestions to generate.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    suggestColumns(databaseId: string, tableId: string, context?: string, min?: number | bigint, max?: number | bigint): Promise<Models.ColumnList>;
    suggestColumns(
        paramsOrFirst: { databaseId: string, tableId: string, context?: string, min?: number | bigint, max?: number | bigint } | string,
        ...rest: [(string)?, (string)?, (number | bigint)?, (number | bigint)?]    
    ): Promise<Models.ColumnList> {
        let params: { databaseId: string, tableId: string, context?: string, min?: number | bigint, max?: number | bigint };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, tableId: string, context?: string, min?: number | bigint, max?: number | bigint };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                context: rest[1] as string,
                min: rest[2] as number | bigint,
                max: rest[3] as number | bigint            
            };
        }
        
        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const context = params.context;
        const min = params.min;
        const max = params.max;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }

        const apiPath = '/console/suggestions/columns';
        const payload: Payload = {};
        if (typeof databaseId !== 'undefined') {
            payload['databaseId'] = databaseId;
        }
        if (typeof tableId !== 'undefined') {
            payload['tableId'] = tableId;
        }
        if (typeof context !== 'undefined') {
            payload['context'] = context;
        }
        if (typeof min !== 'undefined') {
            payload['min'] = min;
        }
        if (typeof max !== 'undefined') {
            payload['max'] = max;
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
     * Suggests database indexes for table columns based on the provided table structure and existing columns. The API will also analyze the table's column types, names, and patterns to recommend optimal indexes that improve query performance for common database operations like filtering, sorting, and searching.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.tableId - Table ID.
     * @param {number | bigint} params.min - Minimum number of suggestions to generate.
     * @param {number | bigint} params.max - Maximum number of suggestions to generate.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnIndexList>}
     */
    suggestIndexes(params: { databaseId: string, tableId: string, min?: number | bigint, max?: number | bigint  }): Promise<Models.ColumnIndexList>;
    /**
     * Suggests database indexes for table columns based on the provided table structure and existing columns. The API will also analyze the table's column types, names, and patterns to recommend optimal indexes that improve query performance for common database operations like filtering, sorting, and searching.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} tableId - Table ID.
     * @param {number | bigint} min - Minimum number of suggestions to generate.
     * @param {number | bigint} max - Maximum number of suggestions to generate.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ColumnIndexList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    suggestIndexes(databaseId: string, tableId: string, min?: number | bigint, max?: number | bigint): Promise<Models.ColumnIndexList>;
    suggestIndexes(
        paramsOrFirst: { databaseId: string, tableId: string, min?: number | bigint, max?: number | bigint } | string,
        ...rest: [(string)?, (number | bigint)?, (number | bigint)?]    
    ): Promise<Models.ColumnIndexList> {
        let params: { databaseId: string, tableId: string, min?: number | bigint, max?: number | bigint };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, tableId: string, min?: number | bigint, max?: number | bigint };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                tableId: rest[0] as string,
                min: rest[1] as number | bigint,
                max: rest[2] as number | bigint            
            };
        }
        
        const databaseId = params.databaseId;
        const tableId = params.tableId;
        const min = params.min;
        const max = params.max;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }

        const apiPath = '/console/suggestions/indexes';
        const payload: Payload = {};
        if (typeof databaseId !== 'undefined') {
            payload['databaseId'] = databaseId;
        }
        if (typeof tableId !== 'undefined') {
            payload['tableId'] = tableId;
        }
        if (typeof min !== 'undefined') {
            payload['min'] = min;
        }
        if (typeof max !== 'undefined') {
            payload['max'] = max;
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
     * Get all Environment Variables that are relevant for the console.
     *
     * @throws {AppwriteException}
     * @returns {Promise<Models.ConsoleVariables>}
     */
    variables(): Promise<Models.ConsoleVariables> {

        const apiPath = '/console/variables';
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
}
