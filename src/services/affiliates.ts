import { Service } from '../service';
import { AppwriteException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';


export class Affiliates {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * List affiliate links for the current account.
     * 
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/databases#querying-documents). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, status
     * @throws {AppwriteException}
     * @returns {Promise<Models.AffiliateLinkList>}
     */
    listLinks(params?: { queries?: string[] }): Promise<Models.AffiliateLinkList>;
    /**
     * List affiliate links for the current account.
     * 
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/databases#querying-documents). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, status
     * @throws {AppwriteException}
     * @returns {Promise<Models.AffiliateLinkList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listLinks(queries?: string[]): Promise<Models.AffiliateLinkList>;
    listLinks(
        paramsOrFirst?: { queries?: string[] } | string[]    
    ): Promise<Models.AffiliateLinkList> {
        let params: { queries?: string[] };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { queries?: string[] };
        } else {
            params = {
                queries: paramsOrFirst as string[]            
            };
        }
        
        const queries = params.queries;


        const apiPath = '/affiliates/links';
        const payload: Payload = {};
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'accept': 'application/json',
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Create a shareable affiliate link for the current account. Every console user is automatically in the affiliates program.
     * 
     *
     * @param {string} params.linkId - Link ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars. This ID is the shareable referral code.
     * @param {string} params.name - Link name. Max length: 128 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AffiliateLink>}
     */
    createLink(params: { linkId: string, name?: string }): Promise<Models.AffiliateLink>;
    /**
     * Create a shareable affiliate link for the current account. Every console user is automatically in the affiliates program.
     * 
     *
     * @param {string} linkId - Link ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars. This ID is the shareable referral code.
     * @param {string} name - Link name. Max length: 128 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AffiliateLink>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createLink(linkId: string, name?: string): Promise<Models.AffiliateLink>;
    createLink(
        paramsOrFirst: { linkId: string, name?: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.AffiliateLink> {
        let params: { linkId: string, name?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { linkId: string, name?: string };
        } else {
            params = {
                linkId: paramsOrFirst as string,
                name: rest[0] as string            
            };
        }
        
        const linkId = params.linkId;
        const name = params.name;

        if (typeof linkId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "linkId"');
        }

        const apiPath = '/affiliates/links';
        const payload: Payload = {};
        if (typeof linkId !== 'undefined') {
            payload['linkId'] = linkId;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
        }

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Get a single affiliate link owned by the current account.
     * 
     *
     * @param {string} params.linkId - Link ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AffiliateLink>}
     */
    getLink(params: { linkId: string }): Promise<Models.AffiliateLink>;
    /**
     * Get a single affiliate link owned by the current account.
     * 
     *
     * @param {string} linkId - Link ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AffiliateLink>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getLink(linkId: string): Promise<Models.AffiliateLink>;
    getLink(
        paramsOrFirst: { linkId: string } | string    
    ): Promise<Models.AffiliateLink> {
        let params: { linkId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { linkId: string };
        } else {
            params = {
                linkId: paramsOrFirst as string            
            };
        }
        
        const linkId = params.linkId;

        if (typeof linkId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "linkId"');
        }

        const apiPath = '/affiliates/links/{linkId}'.replace('{linkId}', encodeURIComponent(String(linkId)));
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'accept': 'application/json',
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Delete an affiliate link owned by the current account. Existing referrals and rewards keep their stored link IDs for history.
     * 
     *
     * @param {string} params.linkId - Link ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteLink(params: { linkId: string }): Promise<{}>;
    /**
     * Delete an affiliate link owned by the current account. Existing referrals and rewards keep their stored link IDs for history.
     * 
     *
     * @param {string} linkId - Link ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteLink(linkId: string): Promise<{}>;
    deleteLink(
        paramsOrFirst: { linkId: string } | string    
    ): Promise<{}> {
        let params: { linkId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { linkId: string };
        } else {
            params = {
                linkId: paramsOrFirst as string            
            };
        }
        
        const linkId = params.linkId;

        if (typeof linkId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "linkId"');
        }

        const apiPath = '/affiliates/links/{linkId}'.replace('{linkId}', encodeURIComponent(String(linkId)));
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
        }

        return this.client.call(
            'delete',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * List referrals attributed to the current account's affiliate links. Responses include privacy-safe metadata only (truncated user ID and signup country), never email or name. Referrals are created automatically on signup when the invite cookie is present.
     * 
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/databases#querying-documents). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: linkId, referredUserMaskedId, referredUserCountry, status, attributedAt, expiresAt, convertedAt
     * @throws {AppwriteException}
     * @returns {Promise<Models.AffiliateReferralList>}
     */
    listReferrals(params?: { queries?: string[] }): Promise<Models.AffiliateReferralList>;
    /**
     * List referrals attributed to the current account's affiliate links. Responses include privacy-safe metadata only (truncated user ID and signup country), never email or name. Referrals are created automatically on signup when the invite cookie is present.
     * 
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/databases#querying-documents). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: linkId, referredUserMaskedId, referredUserCountry, status, attributedAt, expiresAt, convertedAt
     * @throws {AppwriteException}
     * @returns {Promise<Models.AffiliateReferralList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listReferrals(queries?: string[]): Promise<Models.AffiliateReferralList>;
    listReferrals(
        paramsOrFirst?: { queries?: string[] } | string[]    
    ): Promise<Models.AffiliateReferralList> {
        let params: { queries?: string[] };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { queries?: string[] };
        } else {
            params = {
                queries: paramsOrFirst as string[]            
            };
        }
        
        const queries = params.queries;


        const apiPath = '/affiliates/referrals';
        const payload: Payload = {};
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'accept': 'application/json',
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * List rewards earned by the current account from affiliate link conversions.
     * 
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/databases#querying-documents). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: linkId, referralId, amount, status, teamId, creditId
     * @throws {AppwriteException}
     * @returns {Promise<Models.AffiliateRewardList>}
     */
    listRewards(params?: { queries?: string[] }): Promise<Models.AffiliateRewardList>;
    /**
     * List rewards earned by the current account from affiliate link conversions.
     * 
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/databases#querying-documents). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: linkId, referralId, amount, status, teamId, creditId
     * @throws {AppwriteException}
     * @returns {Promise<Models.AffiliateRewardList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listRewards(queries?: string[]): Promise<Models.AffiliateRewardList>;
    listRewards(
        paramsOrFirst?: { queries?: string[] } | string[]    
    ): Promise<Models.AffiliateRewardList> {
        let params: { queries?: string[] };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { queries?: string[] };
        } else {
            params = {
                queries: paramsOrFirst as string[]            
            };
        }
        
        const queries = params.queries;


        const apiPath = '/affiliates/rewards';
        const payload: Payload = {};
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'accept': 'application/json',
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Claim a pending affiliate reward by setting its status to `claimed`. Creates organization credits for the target organization. The current user must be an owner of that organization.
     * 
     *
     * @param {string} params.rewardId - Reward ID
     * @param {string} params.status - New reward status. Use `claimed` to claim the reward as organization credits.
     * @param {string} params.organizationId - Organization ID to apply credits to when claiming.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AffiliateReward>}
     */
    updateReward(params: { rewardId: string, status: string, organizationId: string }): Promise<Models.AffiliateReward>;
    /**
     * Claim a pending affiliate reward by setting its status to `claimed`. Creates organization credits for the target organization. The current user must be an owner of that organization.
     * 
     *
     * @param {string} rewardId - Reward ID
     * @param {string} status - New reward status. Use `claimed` to claim the reward as organization credits.
     * @param {string} organizationId - Organization ID to apply credits to when claiming.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AffiliateReward>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateReward(rewardId: string, status: string, organizationId: string): Promise<Models.AffiliateReward>;
    updateReward(
        paramsOrFirst: { rewardId: string, status: string, organizationId: string } | string,
        ...rest: [(string)?, (string)?]    
    ): Promise<Models.AffiliateReward> {
        let params: { rewardId: string, status: string, organizationId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { rewardId: string, status: string, organizationId: string };
        } else {
            params = {
                rewardId: paramsOrFirst as string,
                status: rest[0] as string,
                organizationId: rest[1] as string            
            };
        }
        
        const rewardId = params.rewardId;
        const status = params.status;
        const organizationId = params.organizationId;

        if (typeof rewardId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "rewardId"');
        }
        if (typeof status === 'undefined') {
            throw new AppwriteException('Missing required parameter: "status"');
        }
        if (typeof organizationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "organizationId"');
        }

        const apiPath = '/affiliates/rewards/{rewardId}'.replace('{rewardId}', encodeURIComponent(String(rewardId)));
        const payload: Payload = {};
        if (typeof status !== 'undefined') {
            payload['status'] = status;
        }
        if (typeof organizationId !== 'undefined') {
            payload['organizationId'] = organizationId;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            'accept': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload
        );
    }
}
