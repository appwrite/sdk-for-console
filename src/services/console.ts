import { Service } from '../service';
import { AppwriteException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

export class Console {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Get campaign details
     *
     *
     * @param {string} campaignId
     * @throws {AppwriteException}
     * @returns {Promise<Models.Campaign>}
     */
    async getCampaign(campaignId: string): Promise<Models.Campaign> {
        if (typeof campaignId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "campaignId"');
        }
        const apiPath = '/console/campaigns/{campaignId}'.replace('{campaignId}', campaignId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * Get coupon details
     *
     *
     * @param {string} couponId
     * @throws {AppwriteException}
     * @returns {Promise<Models.Coupon>}
     */
    async getCopon(couponId: string): Promise<Models.Coupon> {
        if (typeof couponId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "couponId"');
        }
        const apiPath = '/console/coupons/{couponId}'.replace('{couponId}', couponId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * Get plans
     *
     *
     * @throws {AppwriteException}
     * @returns {Promise<Models.BillingPlanList>}
     */
    async plans(): Promise<Models.BillingPlanList> {
        const apiPath = '/console/plans';
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * Get Regions
     *
     *
     * @throws {AppwriteException}
     * @returns {Promise<Models.ConsoleRegionList>}
     */
    async regions(): Promise<Models.ConsoleRegionList> {
        const apiPath = '/console/regions';
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * Create source
     *
     *
     * @param {string} ref
     * @param {string} referrer
     * @param {string} utmSource
     * @param {string} utmCampaign
     * @param {string} utmMedium
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    async createSource(ref?: string, referrer?: string, utmSource?: string, utmCampaign?: string, utmMedium?: string): Promise<{}> {
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


        return await this.client.call(
            'post',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * Get variables
     *
     * Get all Environment Variables that are relevant for the console.
     *
     * @throws {AppwriteException}
     * @returns {Promise<Models.ConsoleVariables>}
     */
    async variables(): Promise<Models.ConsoleVariables> {
        const apiPath = '/console/variables';
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }
}
