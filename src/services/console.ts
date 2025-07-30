import { Service } from '../service';
import { AppwriteException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';
import { ConsoleResourceType } from '../enums/console-resource-type';

export class Console {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Recieve the details of a compaign using it&#039;s ID.
     *
     * @param {string} campaignId
     * @throws {AppwriteException}
     * @returns {Promise<Models.Campaign>}
     */
    getCampaign(campaignId: string): Promise<Models.Campaign> {
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
     * Get the details of a coupon using it&#039;s coupon ID.
     *
     * @param {string} couponId
     * @throws {AppwriteException}
     * @returns {Promise<Models.Coupon>}
     */
    getCoupon(couponId: string): Promise<Models.Coupon> {
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
     * @throws {AppwriteException}
     * @returns {Promise<Models.BillingPlanList>}
     */
    plans(): Promise<Models.BillingPlanList> {
        const apiPath = '/console/plans';
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
     * @param {string} programId
     * @throws {AppwriteException}
     * @returns {Promise<Models.Organization<Preferences>>}
     */
    createProgramMembership<Preferences extends Models.Preferences = Models.DefaultPreferences>(programId: string): Promise<Models.Organization<Preferences>> {
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
     * @throws {AppwriteException}
     * @returns {Promise<Models.ConsoleRegionList>}
     */
    regions(): Promise<Models.ConsoleRegionList> {
        const apiPath = '/console/regions';
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
     * Check if a resource ID is available.
     *
     * @param {string} value
     * @param {ConsoleResourceType} type
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    getResource(value: string, type: ConsoleResourceType): Promise<{}> {
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
     * @param {string} ref
     * @param {string} referrer
     * @param {string} utmSource
     * @param {string} utmCampaign
     * @param {string} utmMedium
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    createSource(ref?: string, referrer?: string, utmSource?: string, utmCampaign?: string, utmMedium?: string): Promise<{}> {
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
