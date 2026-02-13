import { Service } from '../service';
import { AppwriteException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { Platform } from '../enums/platform';
import { Scopes } from '../enums/scopes';

export class Organizations {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Get a list of all the teams in which the current user is a member. You can use the parameters to filter your results.
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, total, billingPlan, paymentMethodId, backupPaymentMethodId, platform
     * @param {string} params.search - Search term to filter your list results. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OrganizationList<Preferences>>}
     */
    list<Preferences extends Models.Preferences = Models.DefaultPreferences>(params?: { queries?: string[], search?: string }): Promise<Models.OrganizationList<Preferences>>;
    /**
     * Get a list of all the teams in which the current user is a member. You can use the parameters to filter your results.
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, total, billingPlan, paymentMethodId, backupPaymentMethodId, platform
     * @param {string} search - Search term to filter your list results. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OrganizationList<Preferences>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    list<Preferences extends Models.Preferences = Models.DefaultPreferences>(queries?: string[], search?: string): Promise<Models.OrganizationList<Preferences>>;
    list<Preferences extends Models.Preferences = Models.DefaultPreferences>(
        paramsOrFirst?: { queries?: string[], search?: string } | string[],
        ...rest: [(string)?]    
    ): Promise<Models.OrganizationList<Preferences>> {
        let params: { queries?: string[], search?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { queries?: string[], search?: string };
        } else {
            params = {
                queries: paramsOrFirst as string[],
                search: rest[0] as string            
            };
        }
        
        const queries = params.queries;
        const search = params.search;


        const apiPath = '/organizations';
        const payload: Payload = {};
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }
        if (typeof search !== 'undefined') {
            payload['search'] = search;
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
     * Create a new organization.
     * 
     *
     * @param {string} params.organizationId - Organization ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Organization name. Max length: 128 chars.
     * @param {string} params.billingPlan - Organization billing plan chosen
     * @param {string} params.paymentMethodId - Payment method ID. Required for pro plans when trial is not available and user doesn't have default payment method set.
     * @param {string} params.billingAddressId - Unique ID of billing address
     * @param {string[]} params.invites - Additional member invites
     * @param {string} params.couponId - Coupon id
     * @param {string} params.taxId - Tax Id associated to billing.
     * @param {number} params.budget - Budget limit for additional usage set for the organization
     * @param {Platform} params.platform - Platform type
     * @throws {AppwriteException}
     * @returns {Promise<Models.Organization<Preferences> | Models.PaymentAuthentication>}
     */
    create<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: { organizationId: string, name: string, billingPlan: string, paymentMethodId?: string, billingAddressId?: string, invites?: string[], couponId?: string, taxId?: string, budget?: number, platform?: Platform }): Promise<Models.Organization<Preferences> | Models.PaymentAuthentication>;
    /**
     * Create a new organization.
     * 
     *
     * @param {string} organizationId - Organization ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Organization name. Max length: 128 chars.
     * @param {string} billingPlan - Organization billing plan chosen
     * @param {string} paymentMethodId - Payment method ID. Required for pro plans when trial is not available and user doesn't have default payment method set.
     * @param {string} billingAddressId - Unique ID of billing address
     * @param {string[]} invites - Additional member invites
     * @param {string} couponId - Coupon id
     * @param {string} taxId - Tax Id associated to billing.
     * @param {number} budget - Budget limit for additional usage set for the organization
     * @param {Platform} platform - Platform type
     * @throws {AppwriteException}
     * @returns {Promise<Models.Organization<Preferences> | Models.PaymentAuthentication>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    create<Preferences extends Models.Preferences = Models.DefaultPreferences>(organizationId: string, name: string, billingPlan: string, paymentMethodId?: string, billingAddressId?: string, invites?: string[], couponId?: string, taxId?: string, budget?: number, platform?: Platform): Promise<Models.Organization<Preferences> | Models.PaymentAuthentication>;
    create<Preferences extends Models.Preferences = Models.DefaultPreferences>(
        paramsOrFirst: { organizationId: string, name: string, billingPlan: string, paymentMethodId?: string, billingAddressId?: string, invites?: string[], couponId?: string, taxId?: string, budget?: number, platform?: Platform } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (string[])?, (string)?, (string)?, (number)?, (Platform)?]    
    ): Promise<Models.Organization<Preferences> | Models.PaymentAuthentication> {
        let params: { organizationId: string, name: string, billingPlan: string, paymentMethodId?: string, billingAddressId?: string, invites?: string[], couponId?: string, taxId?: string, budget?: number, platform?: Platform };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { organizationId: string, name: string, billingPlan: string, paymentMethodId?: string, billingAddressId?: string, invites?: string[], couponId?: string, taxId?: string, budget?: number, platform?: Platform };
        } else {
            params = {
                organizationId: paramsOrFirst as string,
                name: rest[0] as string,
                billingPlan: rest[1] as string,
                paymentMethodId: rest[2] as string,
                billingAddressId: rest[3] as string,
                invites: rest[4] as string[],
                couponId: rest[5] as string,
                taxId: rest[6] as string,
                budget: rest[7] as number,
                platform: rest[8] as Platform            
            };
        }
        
        const organizationId = params.organizationId;
        const name = params.name;
        const billingPlan = params.billingPlan;
        const paymentMethodId = params.paymentMethodId;
        const billingAddressId = params.billingAddressId;
        const invites = params.invites;
        const couponId = params.couponId;
        const taxId = params.taxId;
        const budget = params.budget;
        const platform = params.platform;

        if (typeof organizationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "organizationId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof billingPlan === 'undefined') {
            throw new AppwriteException('Missing required parameter: "billingPlan"');
        }

        const apiPath = '/organizations';
        const payload: Payload = {};
        if (typeof organizationId !== 'undefined') {
            payload['organizationId'] = organizationId;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof billingPlan !== 'undefined') {
            payload['billingPlan'] = billingPlan;
        }
        if (typeof paymentMethodId !== 'undefined') {
            payload['paymentMethodId'] = paymentMethodId;
        }
        if (typeof billingAddressId !== 'undefined') {
            payload['billingAddressId'] = billingAddressId;
        }
        if (typeof invites !== 'undefined') {
            payload['invites'] = invites;
        }
        if (typeof couponId !== 'undefined') {
            payload['couponId'] = couponId;
        }
        if (typeof taxId !== 'undefined') {
            payload['taxId'] = taxId;
        }
        if (typeof budget !== 'undefined') {
            payload['budget'] = budget;
        }
        if (typeof platform !== 'undefined') {
            payload['platform'] = platform;
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
     * Get estimation for creating an organization.
     *
     * @param {string} params.billingPlan - Organization billing plan chosen
     * @param {string} params.paymentMethodId - Payment method ID. Required for pro plans when trial is not available and user doesn't have default payment method set.
     * @param {string[]} params.invites - Additional member invites
     * @param {string} params.couponId - Coupon id
     * @param {Platform} params.platform - Platform type
     * @throws {AppwriteException}
     * @returns {Promise<Models.Estimation>}
     */
    estimationCreateOrganization(params: { billingPlan: string, paymentMethodId?: string, invites?: string[], couponId?: string, platform?: Platform }): Promise<Models.Estimation>;
    /**
     * Get estimation for creating an organization.
     *
     * @param {string} billingPlan - Organization billing plan chosen
     * @param {string} paymentMethodId - Payment method ID. Required for pro plans when trial is not available and user doesn't have default payment method set.
     * @param {string[]} invites - Additional member invites
     * @param {string} couponId - Coupon id
     * @param {Platform} platform - Platform type
     * @throws {AppwriteException}
     * @returns {Promise<Models.Estimation>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    estimationCreateOrganization(billingPlan: string, paymentMethodId?: string, invites?: string[], couponId?: string, platform?: Platform): Promise<Models.Estimation>;
    estimationCreateOrganization(
        paramsOrFirst: { billingPlan: string, paymentMethodId?: string, invites?: string[], couponId?: string, platform?: Platform } | string,
        ...rest: [(string)?, (string[])?, (string)?, (Platform)?]    
    ): Promise<Models.Estimation> {
        let params: { billingPlan: string, paymentMethodId?: string, invites?: string[], couponId?: string, platform?: Platform };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { billingPlan: string, paymentMethodId?: string, invites?: string[], couponId?: string, platform?: Platform };
        } else {
            params = {
                billingPlan: paramsOrFirst as string,
                paymentMethodId: rest[0] as string,
                invites: rest[1] as string[],
                couponId: rest[2] as string,
                platform: rest[3] as Platform            
            };
        }
        
        const billingPlan = params.billingPlan;
        const paymentMethodId = params.paymentMethodId;
        const invites = params.invites;
        const couponId = params.couponId;
        const platform = params.platform;

        if (typeof billingPlan === 'undefined') {
            throw new AppwriteException('Missing required parameter: "billingPlan"');
        }

        const apiPath = '/organizations/estimations/create-organization';
        const payload: Payload = {};
        if (typeof billingPlan !== 'undefined') {
            payload['billingPlan'] = billingPlan;
        }
        if (typeof paymentMethodId !== 'undefined') {
            payload['paymentMethodId'] = paymentMethodId;
        }
        if (typeof invites !== 'undefined') {
            payload['invites'] = invites;
        }
        if (typeof couponId !== 'undefined') {
            payload['couponId'] = couponId;
        }
        if (typeof platform !== 'undefined') {
            payload['platform'] = platform;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Delete an organization.
     *
     * @param {string} params.organizationId - Team ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    delete(params: { organizationId: string }): Promise<{}>;
    /**
     * Delete an organization.
     *
     * @param {string} organizationId - Team ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    delete(organizationId: string): Promise<{}>;
    delete(
        paramsOrFirst: { organizationId: string } | string    
    ): Promise<{}> {
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

        const apiPath = '/organizations/{organizationId}'.replace('{organizationId}', organizationId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'delete',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Get a list of all aggregations for an organization.
     *
     * @param {string} params.organizationId - Organization ID
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/databases#querying-documents). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: teamId, aggregationId, from, to
     * @throws {AppwriteException}
     * @returns {Promise<Models.AggregationTeamList>}
     */
    listAggregations(params: { organizationId: string, queries?: string[] }): Promise<Models.AggregationTeamList>;
    /**
     * Get a list of all aggregations for an organization.
     *
     * @param {string} organizationId - Organization ID
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/databases#querying-documents). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: teamId, aggregationId, from, to
     * @throws {AppwriteException}
     * @returns {Promise<Models.AggregationTeamList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listAggregations(organizationId: string, queries?: string[]): Promise<Models.AggregationTeamList>;
    listAggregations(
        paramsOrFirst: { organizationId: string, queries?: string[] } | string,
        ...rest: [(string[])?]    
    ): Promise<Models.AggregationTeamList> {
        let params: { organizationId: string, queries?: string[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { organizationId: string, queries?: string[] };
        } else {
            params = {
                organizationId: paramsOrFirst as string,
                queries: rest[0] as string[]            
            };
        }
        
        const organizationId = params.organizationId;
        const queries = params.queries;

        if (typeof organizationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "organizationId"');
        }

        const apiPath = '/organizations/{organizationId}/aggregations'.replace('{organizationId}', organizationId);
        const payload: Payload = {};
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
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
     * Get a specific aggregation using it's aggregation ID.
     *
     * @param {string} params.organizationId - Organization ID
     * @param {string} params.aggregationId - Invoice unique ID
     * @param {number} params.limit - Maximum number of project aggregations to return in response. By default will return maximum 5 results. Maximum of 10 results allowed per request.
     * @param {number} params.offset - Offset value. The default value is 0. Use this param to manage pagination.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AggregationTeam>}
     */
    getAggregation(params: { organizationId: string, aggregationId: string, limit?: number, offset?: number }): Promise<Models.AggregationTeam>;
    /**
     * Get a specific aggregation using it's aggregation ID.
     *
     * @param {string} organizationId - Organization ID
     * @param {string} aggregationId - Invoice unique ID
     * @param {number} limit - Maximum number of project aggregations to return in response. By default will return maximum 5 results. Maximum of 10 results allowed per request.
     * @param {number} offset - Offset value. The default value is 0. Use this param to manage pagination.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AggregationTeam>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getAggregation(organizationId: string, aggregationId: string, limit?: number, offset?: number): Promise<Models.AggregationTeam>;
    getAggregation(
        paramsOrFirst: { organizationId: string, aggregationId: string, limit?: number, offset?: number } | string,
        ...rest: [(string)?, (number)?, (number)?]    
    ): Promise<Models.AggregationTeam> {
        let params: { organizationId: string, aggregationId: string, limit?: number, offset?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { organizationId: string, aggregationId: string, limit?: number, offset?: number };
        } else {
            params = {
                organizationId: paramsOrFirst as string,
                aggregationId: rest[0] as string,
                limit: rest[1] as number,
                offset: rest[2] as number            
            };
        }
        
        const organizationId = params.organizationId;
        const aggregationId = params.aggregationId;
        const limit = params.limit;
        const offset = params.offset;

        if (typeof organizationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "organizationId"');
        }
        if (typeof aggregationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "aggregationId"');
        }

        const apiPath = '/organizations/{organizationId}/aggregations/{aggregationId}'.replace('{organizationId}', organizationId).replace('{aggregationId}', aggregationId);
        const payload: Payload = {};
        if (typeof limit !== 'undefined') {
            payload['limit'] = limit;
        }
        if (typeof offset !== 'undefined') {
            payload['offset'] = offset;
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
     * Set a billing address for an organization.
     *
     * @param {string} params.organizationId - Organization ID
     * @param {string} params.billingAddressId - Unique ID of billing address
     * @throws {AppwriteException}
     * @returns {Promise<Models.Organization<Preferences>>}
     */
    setBillingAddress<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: { organizationId: string, billingAddressId: string }): Promise<Models.Organization<Preferences>>;
    /**
     * Set a billing address for an organization.
     *
     * @param {string} organizationId - Organization ID
     * @param {string} billingAddressId - Unique ID of billing address
     * @throws {AppwriteException}
     * @returns {Promise<Models.Organization<Preferences>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    setBillingAddress<Preferences extends Models.Preferences = Models.DefaultPreferences>(organizationId: string, billingAddressId: string): Promise<Models.Organization<Preferences>>;
    setBillingAddress<Preferences extends Models.Preferences = Models.DefaultPreferences>(
        paramsOrFirst: { organizationId: string, billingAddressId: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.Organization<Preferences>> {
        let params: { organizationId: string, billingAddressId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { organizationId: string, billingAddressId: string };
        } else {
            params = {
                organizationId: paramsOrFirst as string,
                billingAddressId: rest[0] as string            
            };
        }
        
        const organizationId = params.organizationId;
        const billingAddressId = params.billingAddressId;

        if (typeof organizationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "organizationId"');
        }
        if (typeof billingAddressId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "billingAddressId"');
        }

        const apiPath = '/organizations/{organizationId}/billing-address'.replace('{organizationId}', organizationId);
        const payload: Payload = {};
        if (typeof billingAddressId !== 'undefined') {
            payload['billingAddressId'] = billingAddressId;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Delete a team's billing address.
     *
     * @param {string} params.organizationId - Organization ID
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteBillingAddress(params: { organizationId: string }): Promise<{}>;
    /**
     * Delete a team's billing address.
     *
     * @param {string} organizationId - Organization ID
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteBillingAddress(organizationId: string): Promise<{}>;
    deleteBillingAddress(
        paramsOrFirst: { organizationId: string } | string    
    ): Promise<{}> {
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

        const apiPath = '/organizations/{organizationId}/billing-address'.replace('{organizationId}', organizationId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'delete',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Get a billing address using it's ID.
     *
     * @param {string} params.organizationId - Organization ID
     * @param {string} params.billingAddressId - Unique ID of billing address
     * @throws {AppwriteException}
     * @returns {Promise<Models.BillingAddress>}
     */
    getBillingAddress(params: { organizationId: string, billingAddressId: string }): Promise<Models.BillingAddress>;
    /**
     * Get a billing address using it's ID.
     *
     * @param {string} organizationId - Organization ID
     * @param {string} billingAddressId - Unique ID of billing address
     * @throws {AppwriteException}
     * @returns {Promise<Models.BillingAddress>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getBillingAddress(organizationId: string, billingAddressId: string): Promise<Models.BillingAddress>;
    getBillingAddress(
        paramsOrFirst: { organizationId: string, billingAddressId: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.BillingAddress> {
        let params: { organizationId: string, billingAddressId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { organizationId: string, billingAddressId: string };
        } else {
            params = {
                organizationId: paramsOrFirst as string,
                billingAddressId: rest[0] as string            
            };
        }
        
        const organizationId = params.organizationId;
        const billingAddressId = params.billingAddressId;

        if (typeof organizationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "organizationId"');
        }
        if (typeof billingAddressId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "billingAddressId"');
        }

        const apiPath = '/organizations/{organizationId}/billing-addresses/{billingAddressId}'.replace('{organizationId}', organizationId).replace('{billingAddressId}', billingAddressId);
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
     * Set the current billing email for the organization.
     *
     * @param {string} params.organizationId - Organization ID
     * @param {string} params.billingEmail - Billing email for the organization.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Organization<Preferences>>}
     */
    setBillingEmail<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: { organizationId: string, billingEmail: string }): Promise<Models.Organization<Preferences>>;
    /**
     * Set the current billing email for the organization.
     *
     * @param {string} organizationId - Organization ID
     * @param {string} billingEmail - Billing email for the organization.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Organization<Preferences>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    setBillingEmail<Preferences extends Models.Preferences = Models.DefaultPreferences>(organizationId: string, billingEmail: string): Promise<Models.Organization<Preferences>>;
    setBillingEmail<Preferences extends Models.Preferences = Models.DefaultPreferences>(
        paramsOrFirst: { organizationId: string, billingEmail: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.Organization<Preferences>> {
        let params: { organizationId: string, billingEmail: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { organizationId: string, billingEmail: string };
        } else {
            params = {
                organizationId: paramsOrFirst as string,
                billingEmail: rest[0] as string            
            };
        }
        
        const organizationId = params.organizationId;
        const billingEmail = params.billingEmail;

        if (typeof organizationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "organizationId"');
        }
        if (typeof billingEmail === 'undefined') {
            throw new AppwriteException('Missing required parameter: "billingEmail"');
        }

        const apiPath = '/organizations/{organizationId}/billing-email'.replace('{organizationId}', organizationId);
        const payload: Payload = {};
        if (typeof billingEmail !== 'undefined') {
            payload['billingEmail'] = billingEmail;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Update the budget limit for an organization.
     *
     * @param {string} params.organizationId - Organization Unique ID
     * @param {number} params.budget - Budget limit for additional usage set for the organization
     * @param {number[]} params.alerts - Budget alert limit percentage
     * @throws {AppwriteException}
     * @returns {Promise<Models.Organization<Preferences>>}
     */
    updateBudget<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: { organizationId: string, budget?: number, alerts?: number[] }): Promise<Models.Organization<Preferences>>;
    /**
     * Update the budget limit for an organization.
     *
     * @param {string} organizationId - Organization Unique ID
     * @param {number} budget - Budget limit for additional usage set for the organization
     * @param {number[]} alerts - Budget alert limit percentage
     * @throws {AppwriteException}
     * @returns {Promise<Models.Organization<Preferences>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateBudget<Preferences extends Models.Preferences = Models.DefaultPreferences>(organizationId: string, budget?: number, alerts?: number[]): Promise<Models.Organization<Preferences>>;
    updateBudget<Preferences extends Models.Preferences = Models.DefaultPreferences>(
        paramsOrFirst: { organizationId: string, budget?: number, alerts?: number[] } | string,
        ...rest: [(number)?, (number[])?]    
    ): Promise<Models.Organization<Preferences>> {
        let params: { organizationId: string, budget?: number, alerts?: number[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { organizationId: string, budget?: number, alerts?: number[] };
        } else {
            params = {
                organizationId: paramsOrFirst as string,
                budget: rest[0] as number,
                alerts: rest[1] as number[]            
            };
        }
        
        const organizationId = params.organizationId;
        const budget = params.budget;
        const alerts = params.alerts;

        if (typeof organizationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "organizationId"');
        }
        if (typeof budget === 'undefined') {
            throw new AppwriteException('Missing required parameter: "budget"');
        }

        const apiPath = '/organizations/{organizationId}/budget'.replace('{organizationId}', organizationId);
        const payload: Payload = {};
        if (typeof budget !== 'undefined') {
            payload['budget'] = budget;
        }
        if (typeof alerts !== 'undefined') {
            payload['alerts'] = alerts;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * List all credits for an organization.
     * 
     *
     * @param {string} params.organizationId - Organization ID
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/databases#querying-documents). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: teamId, couponId, credits, expiration, status
     * @throws {AppwriteException}
     * @returns {Promise<Models.CreditList>}
     */
    listCredits(params: { organizationId: string, queries?: string[] }): Promise<Models.CreditList>;
    /**
     * List all credits for an organization.
     * 
     *
     * @param {string} organizationId - Organization ID
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/databases#querying-documents). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: teamId, couponId, credits, expiration, status
     * @throws {AppwriteException}
     * @returns {Promise<Models.CreditList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listCredits(organizationId: string, queries?: string[]): Promise<Models.CreditList>;
    listCredits(
        paramsOrFirst: { organizationId: string, queries?: string[] } | string,
        ...rest: [(string[])?]    
    ): Promise<Models.CreditList> {
        let params: { organizationId: string, queries?: string[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { organizationId: string, queries?: string[] };
        } else {
            params = {
                organizationId: paramsOrFirst as string,
                queries: rest[0] as string[]            
            };
        }
        
        const organizationId = params.organizationId;
        const queries = params.queries;

        if (typeof organizationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "organizationId"');
        }

        const apiPath = '/organizations/{organizationId}/credits'.replace('{organizationId}', organizationId);
        const payload: Payload = {};
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
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
     * Add credit to an organization using a coupon.
     *
     * @param {string} params.organizationId - Organization ID
     * @param {string} params.couponId - ID of the coupon
     * @throws {AppwriteException}
     * @returns {Promise<Models.Credit>}
     */
    addCredit(params: { organizationId: string, couponId: string }): Promise<Models.Credit>;
    /**
     * Add credit to an organization using a coupon.
     *
     * @param {string} organizationId - Organization ID
     * @param {string} couponId - ID of the coupon
     * @throws {AppwriteException}
     * @returns {Promise<Models.Credit>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    addCredit(organizationId: string, couponId: string): Promise<Models.Credit>;
    addCredit(
        paramsOrFirst: { organizationId: string, couponId: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.Credit> {
        let params: { organizationId: string, couponId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { organizationId: string, couponId: string };
        } else {
            params = {
                organizationId: paramsOrFirst as string,
                couponId: rest[0] as string            
            };
        }
        
        const organizationId = params.organizationId;
        const couponId = params.couponId;

        if (typeof organizationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "organizationId"');
        }
        if (typeof couponId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "couponId"');
        }

        const apiPath = '/organizations/{organizationId}/credits'.replace('{organizationId}', organizationId);
        const payload: Payload = {};
        if (typeof couponId !== 'undefined') {
            payload['couponId'] = couponId;
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
     * Get total available valid credits for an organization.
     *
     * @param {string} params.organizationId - Organization ID
     * @throws {AppwriteException}
     * @returns {Promise<Models.CreditAvailable>}
     */
    getAvailableCredits(params: { organizationId: string }): Promise<Models.CreditAvailable>;
    /**
     * Get total available valid credits for an organization.
     *
     * @param {string} organizationId - Organization ID
     * @throws {AppwriteException}
     * @returns {Promise<Models.CreditAvailable>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getAvailableCredits(organizationId: string): Promise<Models.CreditAvailable>;
    getAvailableCredits(
        paramsOrFirst: { organizationId: string } | string    
    ): Promise<Models.CreditAvailable> {
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

        const apiPath = '/organizations/{organizationId}/credits/available'.replace('{organizationId}', organizationId);
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
     * Get credit details.
     *
     * @param {string} params.organizationId - Organization ID
     * @param {string} params.creditId - Credit Unique ID
     * @throws {AppwriteException}
     * @returns {Promise<Models.Credit>}
     */
    getCredit(params: { organizationId: string, creditId: string }): Promise<Models.Credit>;
    /**
     * Get credit details.
     *
     * @param {string} organizationId - Organization ID
     * @param {string} creditId - Credit Unique ID
     * @throws {AppwriteException}
     * @returns {Promise<Models.Credit>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getCredit(organizationId: string, creditId: string): Promise<Models.Credit>;
    getCredit(
        paramsOrFirst: { organizationId: string, creditId: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.Credit> {
        let params: { organizationId: string, creditId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { organizationId: string, creditId: string };
        } else {
            params = {
                organizationId: paramsOrFirst as string,
                creditId: rest[0] as string            
            };
        }
        
        const organizationId = params.organizationId;
        const creditId = params.creditId;

        if (typeof organizationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "organizationId"');
        }
        if (typeof creditId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "creditId"');
        }

        const apiPath = '/organizations/{organizationId}/credits/{creditId}'.replace('{organizationId}', organizationId).replace('{creditId}', creditId);
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
     * Get estimation for deleting an organization.
     *
     * @param {string} params.organizationId - Team ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.EstimationDeleteOrganization>}
     */
    estimationDeleteOrganization(params: { organizationId: string }): Promise<Models.EstimationDeleteOrganization>;
    /**
     * Get estimation for deleting an organization.
     *
     * @param {string} organizationId - Team ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.EstimationDeleteOrganization>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    estimationDeleteOrganization(organizationId: string): Promise<Models.EstimationDeleteOrganization>;
    estimationDeleteOrganization(
        paramsOrFirst: { organizationId: string } | string    
    ): Promise<Models.EstimationDeleteOrganization> {
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

        const apiPath = '/organizations/{organizationId}/estimations/delete-organization'.replace('{organizationId}', organizationId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Get estimation for updating the organization plan.
     *
     * @param {string} params.organizationId - Organization ID
     * @param {string} params.billingPlan - Organization billing plan chosen
     * @param {string[]} params.invites - Additional member invites
     * @param {string} params.couponId - Coupon id
     * @throws {AppwriteException}
     * @returns {Promise<Models.EstimationUpdatePlan>}
     */
    estimationUpdatePlan(params: { organizationId: string, billingPlan: string, invites?: string[], couponId?: string }): Promise<Models.EstimationUpdatePlan>;
    /**
     * Get estimation for updating the organization plan.
     *
     * @param {string} organizationId - Organization ID
     * @param {string} billingPlan - Organization billing plan chosen
     * @param {string[]} invites - Additional member invites
     * @param {string} couponId - Coupon id
     * @throws {AppwriteException}
     * @returns {Promise<Models.EstimationUpdatePlan>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    estimationUpdatePlan(organizationId: string, billingPlan: string, invites?: string[], couponId?: string): Promise<Models.EstimationUpdatePlan>;
    estimationUpdatePlan(
        paramsOrFirst: { organizationId: string, billingPlan: string, invites?: string[], couponId?: string } | string,
        ...rest: [(string)?, (string[])?, (string)?]    
    ): Promise<Models.EstimationUpdatePlan> {
        let params: { organizationId: string, billingPlan: string, invites?: string[], couponId?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { organizationId: string, billingPlan: string, invites?: string[], couponId?: string };
        } else {
            params = {
                organizationId: paramsOrFirst as string,
                billingPlan: rest[0] as string,
                invites: rest[1] as string[],
                couponId: rest[2] as string            
            };
        }
        
        const organizationId = params.organizationId;
        const billingPlan = params.billingPlan;
        const invites = params.invites;
        const couponId = params.couponId;

        if (typeof organizationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "organizationId"');
        }
        if (typeof billingPlan === 'undefined') {
            throw new AppwriteException('Missing required parameter: "billingPlan"');
        }

        const apiPath = '/organizations/{organizationId}/estimations/update-plan'.replace('{organizationId}', organizationId);
        const payload: Payload = {};
        if (typeof billingPlan !== 'undefined') {
            payload['billingPlan'] = billingPlan;
        }
        if (typeof invites !== 'undefined') {
            payload['invites'] = invites;
        }
        if (typeof couponId !== 'undefined') {
            payload['couponId'] = couponId;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Submit feedback about downgrading from a paid plan to a lower tier. This helps the team understand user experience and improve the platform.
     * 
     *
     * @param {string} params.organizationId - Organization Unique ID
     * @param {string} params.reason - Feedback reason
     * @param {string} params.message - Feedback message
     * @param {string} params.fromPlanId - Plan downgrading from
     * @param {string} params.toPlanId - Plan downgrading to
     * @throws {AppwriteException}
     * @returns {Promise<Models.DowngradeFeedback>}
     */
    createDowngradeFeedback(params: { organizationId: string, reason: string, message: string, fromPlanId: string, toPlanId: string }): Promise<Models.DowngradeFeedback>;
    /**
     * Submit feedback about downgrading from a paid plan to a lower tier. This helps the team understand user experience and improve the platform.
     * 
     *
     * @param {string} organizationId - Organization Unique ID
     * @param {string} reason - Feedback reason
     * @param {string} message - Feedback message
     * @param {string} fromPlanId - Plan downgrading from
     * @param {string} toPlanId - Plan downgrading to
     * @throws {AppwriteException}
     * @returns {Promise<Models.DowngradeFeedback>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createDowngradeFeedback(organizationId: string, reason: string, message: string, fromPlanId: string, toPlanId: string): Promise<Models.DowngradeFeedback>;
    createDowngradeFeedback(
        paramsOrFirst: { organizationId: string, reason: string, message: string, fromPlanId: string, toPlanId: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?]    
    ): Promise<Models.DowngradeFeedback> {
        let params: { organizationId: string, reason: string, message: string, fromPlanId: string, toPlanId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { organizationId: string, reason: string, message: string, fromPlanId: string, toPlanId: string };
        } else {
            params = {
                organizationId: paramsOrFirst as string,
                reason: rest[0] as string,
                message: rest[1] as string,
                fromPlanId: rest[2] as string,
                toPlanId: rest[3] as string            
            };
        }
        
        const organizationId = params.organizationId;
        const reason = params.reason;
        const message = params.message;
        const fromPlanId = params.fromPlanId;
        const toPlanId = params.toPlanId;

        if (typeof organizationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "organizationId"');
        }
        if (typeof reason === 'undefined') {
            throw new AppwriteException('Missing required parameter: "reason"');
        }
        if (typeof message === 'undefined') {
            throw new AppwriteException('Missing required parameter: "message"');
        }
        if (typeof fromPlanId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "fromPlanId"');
        }
        if (typeof toPlanId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "toPlanId"');
        }

        const apiPath = '/organizations/{organizationId}/feedbacks/downgrade'.replace('{organizationId}', organizationId);
        const payload: Payload = {};
        if (typeof reason !== 'undefined') {
            payload['reason'] = reason;
        }
        if (typeof message !== 'undefined') {
            payload['message'] = message;
        }
        if (typeof fromPlanId !== 'undefined') {
            payload['fromPlanId'] = fromPlanId;
        }
        if (typeof toPlanId !== 'undefined') {
            payload['toPlanId'] = toPlanId;
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
     * List all invoices for an organization.
     *
     * @param {string} params.organizationId - Organization ID
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/databases#querying-documents). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: teamId, aggregationId, amount, currency, from, to, dueAt, attempts, status, grossAmount
     * @throws {AppwriteException}
     * @returns {Promise<Models.InvoiceList>}
     */
    listInvoices(params: { organizationId: string, queries?: string[] }): Promise<Models.InvoiceList>;
    /**
     * List all invoices for an organization.
     *
     * @param {string} organizationId - Organization ID
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/databases#querying-documents). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: teamId, aggregationId, amount, currency, from, to, dueAt, attempts, status, grossAmount
     * @throws {AppwriteException}
     * @returns {Promise<Models.InvoiceList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listInvoices(organizationId: string, queries?: string[]): Promise<Models.InvoiceList>;
    listInvoices(
        paramsOrFirst: { organizationId: string, queries?: string[] } | string,
        ...rest: [(string[])?]    
    ): Promise<Models.InvoiceList> {
        let params: { organizationId: string, queries?: string[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { organizationId: string, queries?: string[] };
        } else {
            params = {
                organizationId: paramsOrFirst as string,
                queries: rest[0] as string[]            
            };
        }
        
        const organizationId = params.organizationId;
        const queries = params.queries;

        if (typeof organizationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "organizationId"');
        }

        const apiPath = '/organizations/{organizationId}/invoices'.replace('{organizationId}', organizationId);
        const payload: Payload = {};
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
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
     * Get an invoice by its unique ID.
     *
     * @param {string} params.organizationId - Organization ID
     * @param {string} params.invoiceId - Invoice unique ID
     * @throws {AppwriteException}
     * @returns {Promise<Models.Invoice>}
     */
    getInvoice(params: { organizationId: string, invoiceId: string }): Promise<Models.Invoice>;
    /**
     * Get an invoice by its unique ID.
     *
     * @param {string} organizationId - Organization ID
     * @param {string} invoiceId - Invoice unique ID
     * @throws {AppwriteException}
     * @returns {Promise<Models.Invoice>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getInvoice(organizationId: string, invoiceId: string): Promise<Models.Invoice>;
    getInvoice(
        paramsOrFirst: { organizationId: string, invoiceId: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.Invoice> {
        let params: { organizationId: string, invoiceId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { organizationId: string, invoiceId: string };
        } else {
            params = {
                organizationId: paramsOrFirst as string,
                invoiceId: rest[0] as string            
            };
        }
        
        const organizationId = params.organizationId;
        const invoiceId = params.invoiceId;

        if (typeof organizationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "organizationId"');
        }
        if (typeof invoiceId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "invoiceId"');
        }

        const apiPath = '/organizations/{organizationId}/invoices/{invoiceId}'.replace('{organizationId}', organizationId).replace('{invoiceId}', invoiceId);
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
     * Download invoice in PDF
     *
     * @param {string} params.organizationId - Organization ID
     * @param {string} params.invoiceId - Invoice unique ID
     * @throws {AppwriteException}
     * @returns {Promise<Models.PaymentMethod>}
     */
    getInvoiceDownload(params: { organizationId: string, invoiceId: string }): Promise<Models.PaymentMethod>;
    /**
     * Download invoice in PDF
     *
     * @param {string} organizationId - Organization ID
     * @param {string} invoiceId - Invoice unique ID
     * @throws {AppwriteException}
     * @returns {Promise<Models.PaymentMethod>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getInvoiceDownload(organizationId: string, invoiceId: string): Promise<Models.PaymentMethod>;
    getInvoiceDownload(
        paramsOrFirst: { organizationId: string, invoiceId: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.PaymentMethod> {
        let params: { organizationId: string, invoiceId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { organizationId: string, invoiceId: string };
        } else {
            params = {
                organizationId: paramsOrFirst as string,
                invoiceId: rest[0] as string            
            };
        }
        
        const organizationId = params.organizationId;
        const invoiceId = params.invoiceId;

        if (typeof organizationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "organizationId"');
        }
        if (typeof invoiceId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "invoiceId"');
        }

        const apiPath = '/organizations/{organizationId}/invoices/{invoiceId}/download'.replace('{organizationId}', organizationId).replace('{invoiceId}', invoiceId);
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
     * Initiate payment for failed invoice to pay live from console
     *
     * @param {string} params.organizationId - Organization ID
     * @param {string} params.invoiceId - Invoice unique ID
     * @param {string} params.paymentMethodId - Payment method ID
     * @throws {AppwriteException}
     * @returns {Promise<Models.Invoice>}
     */
    createInvoicePayment(params: { organizationId: string, invoiceId: string, paymentMethodId: string }): Promise<Models.Invoice>;
    /**
     * Initiate payment for failed invoice to pay live from console
     *
     * @param {string} organizationId - Organization ID
     * @param {string} invoiceId - Invoice unique ID
     * @param {string} paymentMethodId - Payment method ID
     * @throws {AppwriteException}
     * @returns {Promise<Models.Invoice>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createInvoicePayment(organizationId: string, invoiceId: string, paymentMethodId: string): Promise<Models.Invoice>;
    createInvoicePayment(
        paramsOrFirst: { organizationId: string, invoiceId: string, paymentMethodId: string } | string,
        ...rest: [(string)?, (string)?]    
    ): Promise<Models.Invoice> {
        let params: { organizationId: string, invoiceId: string, paymentMethodId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { organizationId: string, invoiceId: string, paymentMethodId: string };
        } else {
            params = {
                organizationId: paramsOrFirst as string,
                invoiceId: rest[0] as string,
                paymentMethodId: rest[1] as string            
            };
        }
        
        const organizationId = params.organizationId;
        const invoiceId = params.invoiceId;
        const paymentMethodId = params.paymentMethodId;

        if (typeof organizationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "organizationId"');
        }
        if (typeof invoiceId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "invoiceId"');
        }
        if (typeof paymentMethodId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "paymentMethodId"');
        }

        const apiPath = '/organizations/{organizationId}/invoices/{invoiceId}/payments'.replace('{organizationId}', organizationId).replace('{invoiceId}', invoiceId);
        const payload: Payload = {};
        if (typeof paymentMethodId !== 'undefined') {
            payload['paymentMethodId'] = paymentMethodId;
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
     * Validates the payment linked with the invoice and updates the invoice status if the payment status is changed.
     *
     * @param {string} params.organizationId - Organization ID
     * @param {string} params.invoiceId - Invoice unique ID
     * @throws {AppwriteException}
     * @returns {Promise<Models.Invoice>}
     */
    validateInvoice(params: { organizationId: string, invoiceId: string }): Promise<Models.Invoice>;
    /**
     * Validates the payment linked with the invoice and updates the invoice status if the payment status is changed.
     *
     * @param {string} organizationId - Organization ID
     * @param {string} invoiceId - Invoice unique ID
     * @throws {AppwriteException}
     * @returns {Promise<Models.Invoice>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    validateInvoice(organizationId: string, invoiceId: string): Promise<Models.Invoice>;
    validateInvoice(
        paramsOrFirst: { organizationId: string, invoiceId: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.Invoice> {
        let params: { organizationId: string, invoiceId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { organizationId: string, invoiceId: string };
        } else {
            params = {
                organizationId: paramsOrFirst as string,
                invoiceId: rest[0] as string            
            };
        }
        
        const organizationId = params.organizationId;
        const invoiceId = params.invoiceId;

        if (typeof organizationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "organizationId"');
        }
        if (typeof invoiceId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "invoiceId"');
        }

        const apiPath = '/organizations/{organizationId}/invoices/{invoiceId}/status'.replace('{organizationId}', organizationId).replace('{invoiceId}', invoiceId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * View invoice in PDF
     *
     * @param {string} params.organizationId - Organization ID
     * @param {string} params.invoiceId - Invoice unique ID
     * @throws {AppwriteException}
     * @returns {Promise<Models.PaymentMethod>}
     */
    getInvoiceView(params: { organizationId: string, invoiceId: string }): Promise<Models.PaymentMethod>;
    /**
     * View invoice in PDF
     *
     * @param {string} organizationId - Organization ID
     * @param {string} invoiceId - Invoice unique ID
     * @throws {AppwriteException}
     * @returns {Promise<Models.PaymentMethod>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getInvoiceView(organizationId: string, invoiceId: string): Promise<Models.PaymentMethod>;
    getInvoiceView(
        paramsOrFirst: { organizationId: string, invoiceId: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.PaymentMethod> {
        let params: { organizationId: string, invoiceId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { organizationId: string, invoiceId: string };
        } else {
            params = {
                organizationId: paramsOrFirst as string,
                invoiceId: rest[0] as string            
            };
        }
        
        const organizationId = params.organizationId;
        const invoiceId = params.invoiceId;

        if (typeof organizationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "organizationId"');
        }
        if (typeof invoiceId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "invoiceId"');
        }

        const apiPath = '/organizations/{organizationId}/invoices/{invoiceId}/view'.replace('{organizationId}', organizationId).replace('{invoiceId}', invoiceId);
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
     * Get a list of all API keys from the current organization. 
     *
     * @param {string} params.organizationId - Organization Unique ID
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.KeyList>}
     */
    listKeys(params: { organizationId: string, total?: boolean }): Promise<Models.KeyList>;
    /**
     * Get a list of all API keys from the current organization. 
     *
     * @param {string} organizationId - Organization Unique ID
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.KeyList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listKeys(organizationId: string, total?: boolean): Promise<Models.KeyList>;
    listKeys(
        paramsOrFirst: { organizationId: string, total?: boolean } | string,
        ...rest: [(boolean)?]    
    ): Promise<Models.KeyList> {
        let params: { organizationId: string, total?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { organizationId: string, total?: boolean };
        } else {
            params = {
                organizationId: paramsOrFirst as string,
                total: rest[0] as boolean            
            };
        }
        
        const organizationId = params.organizationId;
        const total = params.total;

        if (typeof organizationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "organizationId"');
        }

        const apiPath = '/organizations/{organizationId}/keys'.replace('{organizationId}', organizationId);
        const payload: Payload = {};
        if (typeof total !== 'undefined') {
            payload['total'] = total;
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
     * Create a new organization API key.
     *
     * @param {string} params.organizationId - Organization Unique ID
     * @param {string} params.name - Key name. Max length: 128 chars.
     * @param {Scopes[]} params.scopes - Key scopes list. Maximum of 100 scopes are allowed.
     * @param {string} params.expire - Expiration time in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Use null for unlimited expiration.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Key>}
     */
    createKey(params: { organizationId: string, name: string, scopes: Scopes[], expire?: string }): Promise<Models.Key>;
    /**
     * Create a new organization API key.
     *
     * @param {string} organizationId - Organization Unique ID
     * @param {string} name - Key name. Max length: 128 chars.
     * @param {Scopes[]} scopes - Key scopes list. Maximum of 100 scopes are allowed.
     * @param {string} expire - Expiration time in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Use null for unlimited expiration.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Key>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createKey(organizationId: string, name: string, scopes: Scopes[], expire?: string): Promise<Models.Key>;
    createKey(
        paramsOrFirst: { organizationId: string, name: string, scopes: Scopes[], expire?: string } | string,
        ...rest: [(string)?, (Scopes[])?, (string)?]    
    ): Promise<Models.Key> {
        let params: { organizationId: string, name: string, scopes: Scopes[], expire?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { organizationId: string, name: string, scopes: Scopes[], expire?: string };
        } else {
            params = {
                organizationId: paramsOrFirst as string,
                name: rest[0] as string,
                scopes: rest[1] as Scopes[],
                expire: rest[2] as string            
            };
        }
        
        const organizationId = params.organizationId;
        const name = params.name;
        const scopes = params.scopes;
        const expire = params.expire;

        if (typeof organizationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "organizationId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof scopes === 'undefined') {
            throw new AppwriteException('Missing required parameter: "scopes"');
        }

        const apiPath = '/organizations/{organizationId}/keys'.replace('{organizationId}', organizationId);
        const payload: Payload = {};
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof scopes !== 'undefined') {
            payload['scopes'] = scopes;
        }
        if (typeof expire !== 'undefined') {
            payload['expire'] = expire;
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
     * Get a key by its unique ID. This endpoint returns details about a specific API key in your organization including it's scopes.
     *
     * @param {string} params.organizationId - Organization Unique ID
     * @param {string} params.keyId - Key unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Key>}
     */
    getKey(params: { organizationId: string, keyId: string }): Promise<Models.Key>;
    /**
     * Get a key by its unique ID. This endpoint returns details about a specific API key in your organization including it's scopes.
     *
     * @param {string} organizationId - Organization Unique ID
     * @param {string} keyId - Key unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Key>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getKey(organizationId: string, keyId: string): Promise<Models.Key>;
    getKey(
        paramsOrFirst: { organizationId: string, keyId: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.Key> {
        let params: { organizationId: string, keyId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { organizationId: string, keyId: string };
        } else {
            params = {
                organizationId: paramsOrFirst as string,
                keyId: rest[0] as string            
            };
        }
        
        const organizationId = params.organizationId;
        const keyId = params.keyId;

        if (typeof organizationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "organizationId"');
        }
        if (typeof keyId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "keyId"');
        }

        const apiPath = '/organizations/{organizationId}/keys/{keyId}'.replace('{organizationId}', organizationId).replace('{keyId}', keyId);
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
     * Update a key by its unique ID. Use this endpoint to update the name, scopes, or expiration time of an API key.
     *
     * @param {string} params.organizationId - Organization Unique ID
     * @param {string} params.keyId - Key unique ID.
     * @param {string} params.name - Key name. Max length: 128 chars.
     * @param {Scopes[]} params.scopes - Key scopes list. Maximum of 100 scopes are allowed.
     * @param {string} params.expire - Expiration time in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Use null for unlimited expiration.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Key>}
     */
    updateKey(params: { organizationId: string, keyId: string, name: string, scopes: Scopes[], expire?: string }): Promise<Models.Key>;
    /**
     * Update a key by its unique ID. Use this endpoint to update the name, scopes, or expiration time of an API key.
     *
     * @param {string} organizationId - Organization Unique ID
     * @param {string} keyId - Key unique ID.
     * @param {string} name - Key name. Max length: 128 chars.
     * @param {Scopes[]} scopes - Key scopes list. Maximum of 100 scopes are allowed.
     * @param {string} expire - Expiration time in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Use null for unlimited expiration.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Key>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateKey(organizationId: string, keyId: string, name: string, scopes: Scopes[], expire?: string): Promise<Models.Key>;
    updateKey(
        paramsOrFirst: { organizationId: string, keyId: string, name: string, scopes: Scopes[], expire?: string } | string,
        ...rest: [(string)?, (string)?, (Scopes[])?, (string)?]    
    ): Promise<Models.Key> {
        let params: { organizationId: string, keyId: string, name: string, scopes: Scopes[], expire?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { organizationId: string, keyId: string, name: string, scopes: Scopes[], expire?: string };
        } else {
            params = {
                organizationId: paramsOrFirst as string,
                keyId: rest[0] as string,
                name: rest[1] as string,
                scopes: rest[2] as Scopes[],
                expire: rest[3] as string            
            };
        }
        
        const organizationId = params.organizationId;
        const keyId = params.keyId;
        const name = params.name;
        const scopes = params.scopes;
        const expire = params.expire;

        if (typeof organizationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "organizationId"');
        }
        if (typeof keyId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "keyId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof scopes === 'undefined') {
            throw new AppwriteException('Missing required parameter: "scopes"');
        }

        const apiPath = '/organizations/{organizationId}/keys/{keyId}'.replace('{organizationId}', organizationId).replace('{keyId}', keyId);
        const payload: Payload = {};
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof scopes !== 'undefined') {
            payload['scopes'] = scopes;
        }
        if (typeof expire !== 'undefined') {
            payload['expire'] = expire;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'put',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Delete a key by its unique ID. Once deleted, the key can no longer be used to authenticate API calls.
     *
     * @param {string} params.organizationId - Organization Unique ID
     * @param {string} params.keyId - Key unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteKey(params: { organizationId: string, keyId: string }): Promise<{}>;
    /**
     * Delete a key by its unique ID. Once deleted, the key can no longer be used to authenticate API calls.
     *
     * @param {string} organizationId - Organization Unique ID
     * @param {string} keyId - Key unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteKey(organizationId: string, keyId: string): Promise<{}>;
    deleteKey(
        paramsOrFirst: { organizationId: string, keyId: string } | string,
        ...rest: [(string)?]    
    ): Promise<{}> {
        let params: { organizationId: string, keyId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { organizationId: string, keyId: string };
        } else {
            params = {
                organizationId: paramsOrFirst as string,
                keyId: rest[0] as string            
            };
        }
        
        const organizationId = params.organizationId;
        const keyId = params.keyId;

        if (typeof organizationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "organizationId"');
        }
        if (typeof keyId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "keyId"');
        }

        const apiPath = '/organizations/{organizationId}/keys/{keyId}'.replace('{organizationId}', organizationId).replace('{keyId}', keyId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'delete',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Set a organization's default payment method.
     *
     * @param {string} params.organizationId - Organization ID
     * @param {string} params.paymentMethodId - Unique ID of payment method
     * @throws {AppwriteException}
     * @returns {Promise<Models.Organization<Preferences>>}
     */
    setDefaultPaymentMethod<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: { organizationId: string, paymentMethodId: string }): Promise<Models.Organization<Preferences>>;
    /**
     * Set a organization's default payment method.
     *
     * @param {string} organizationId - Organization ID
     * @param {string} paymentMethodId - Unique ID of payment method
     * @throws {AppwriteException}
     * @returns {Promise<Models.Organization<Preferences>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    setDefaultPaymentMethod<Preferences extends Models.Preferences = Models.DefaultPreferences>(organizationId: string, paymentMethodId: string): Promise<Models.Organization<Preferences>>;
    setDefaultPaymentMethod<Preferences extends Models.Preferences = Models.DefaultPreferences>(
        paramsOrFirst: { organizationId: string, paymentMethodId: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.Organization<Preferences>> {
        let params: { organizationId: string, paymentMethodId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { organizationId: string, paymentMethodId: string };
        } else {
            params = {
                organizationId: paramsOrFirst as string,
                paymentMethodId: rest[0] as string            
            };
        }
        
        const organizationId = params.organizationId;
        const paymentMethodId = params.paymentMethodId;

        if (typeof organizationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "organizationId"');
        }
        if (typeof paymentMethodId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "paymentMethodId"');
        }

        const apiPath = '/organizations/{organizationId}/payment-method'.replace('{organizationId}', organizationId);
        const payload: Payload = {};
        if (typeof paymentMethodId !== 'undefined') {
            payload['paymentMethodId'] = paymentMethodId;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Delete the default payment method for an organization.
     *
     * @param {string} params.organizationId - Organization ID
     * @throws {AppwriteException}
     * @returns {Promise<Models.Organization<Preferences>>}
     */
    deleteDefaultPaymentMethod<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: { organizationId: string }): Promise<Models.Organization<Preferences>>;
    /**
     * Delete the default payment method for an organization.
     *
     * @param {string} organizationId - Organization ID
     * @throws {AppwriteException}
     * @returns {Promise<Models.Organization<Preferences>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteDefaultPaymentMethod<Preferences extends Models.Preferences = Models.DefaultPreferences>(organizationId: string): Promise<Models.Organization<Preferences>>;
    deleteDefaultPaymentMethod<Preferences extends Models.Preferences = Models.DefaultPreferences>(
        paramsOrFirst: { organizationId: string } | string    
    ): Promise<Models.Organization<Preferences>> {
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

        const apiPath = '/organizations/{organizationId}/payment-method'.replace('{organizationId}', organizationId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'delete',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Set an organization's backup payment method.
     * 
     *
     * @param {string} params.organizationId - Organization ID
     * @param {string} params.paymentMethodId - Unique ID of payment method
     * @throws {AppwriteException}
     * @returns {Promise<Models.Organization<Preferences>>}
     */
    setBackupPaymentMethod<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: { organizationId: string, paymentMethodId: string }): Promise<Models.Organization<Preferences>>;
    /**
     * Set an organization's backup payment method.
     * 
     *
     * @param {string} organizationId - Organization ID
     * @param {string} paymentMethodId - Unique ID of payment method
     * @throws {AppwriteException}
     * @returns {Promise<Models.Organization<Preferences>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    setBackupPaymentMethod<Preferences extends Models.Preferences = Models.DefaultPreferences>(organizationId: string, paymentMethodId: string): Promise<Models.Organization<Preferences>>;
    setBackupPaymentMethod<Preferences extends Models.Preferences = Models.DefaultPreferences>(
        paramsOrFirst: { organizationId: string, paymentMethodId: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.Organization<Preferences>> {
        let params: { organizationId: string, paymentMethodId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { organizationId: string, paymentMethodId: string };
        } else {
            params = {
                organizationId: paramsOrFirst as string,
                paymentMethodId: rest[0] as string            
            };
        }
        
        const organizationId = params.organizationId;
        const paymentMethodId = params.paymentMethodId;

        if (typeof organizationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "organizationId"');
        }
        if (typeof paymentMethodId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "paymentMethodId"');
        }

        const apiPath = '/organizations/{organizationId}/payment-method/backup'.replace('{organizationId}', organizationId);
        const payload: Payload = {};
        if (typeof paymentMethodId !== 'undefined') {
            payload['paymentMethodId'] = paymentMethodId;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Delete a backup payment method for an organization.
     *
     * @param {string} params.organizationId - Organization ID
     * @throws {AppwriteException}
     * @returns {Promise<Models.Organization<Preferences>>}
     */
    deleteBackupPaymentMethod<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: { organizationId: string }): Promise<Models.Organization<Preferences>>;
    /**
     * Delete a backup payment method for an organization.
     *
     * @param {string} organizationId - Organization ID
     * @throws {AppwriteException}
     * @returns {Promise<Models.Organization<Preferences>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteBackupPaymentMethod<Preferences extends Models.Preferences = Models.DefaultPreferences>(organizationId: string): Promise<Models.Organization<Preferences>>;
    deleteBackupPaymentMethod<Preferences extends Models.Preferences = Models.DefaultPreferences>(
        paramsOrFirst: { organizationId: string } | string    
    ): Promise<Models.Organization<Preferences>> {
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

        const apiPath = '/organizations/{organizationId}/payment-method/backup'.replace('{organizationId}', organizationId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'delete',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Get an organization's payment method using it's payment method ID.
     *
     * @param {string} params.organizationId - Organization ID
     * @param {string} params.paymentMethodId - Unique ID of payment method
     * @throws {AppwriteException}
     * @returns {Promise<Models.PaymentMethod>}
     */
    getPaymentMethod(params: { organizationId: string, paymentMethodId: string }): Promise<Models.PaymentMethod>;
    /**
     * Get an organization's payment method using it's payment method ID.
     *
     * @param {string} organizationId - Organization ID
     * @param {string} paymentMethodId - Unique ID of payment method
     * @throws {AppwriteException}
     * @returns {Promise<Models.PaymentMethod>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getPaymentMethod(organizationId: string, paymentMethodId: string): Promise<Models.PaymentMethod>;
    getPaymentMethod(
        paramsOrFirst: { organizationId: string, paymentMethodId: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.PaymentMethod> {
        let params: { organizationId: string, paymentMethodId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { organizationId: string, paymentMethodId: string };
        } else {
            params = {
                organizationId: paramsOrFirst as string,
                paymentMethodId: rest[0] as string            
            };
        }
        
        const organizationId = params.organizationId;
        const paymentMethodId = params.paymentMethodId;

        if (typeof organizationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "organizationId"');
        }
        if (typeof paymentMethodId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "paymentMethodId"');
        }

        const apiPath = '/organizations/{organizationId}/payment-methods/{paymentMethodId}'.replace('{organizationId}', organizationId).replace('{paymentMethodId}', paymentMethodId);
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
     * Get the details of the current billing plan for an organization.
     *
     * @param {string} params.organizationId - Organization Unique ID
     * @throws {AppwriteException}
     * @returns {Promise<Models.BillingPlan>}
     */
    getPlan(params: { organizationId: string }): Promise<Models.BillingPlan>;
    /**
     * Get the details of the current billing plan for an organization.
     *
     * @param {string} organizationId - Organization Unique ID
     * @throws {AppwriteException}
     * @returns {Promise<Models.BillingPlan>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getPlan(organizationId: string): Promise<Models.BillingPlan>;
    getPlan(
        paramsOrFirst: { organizationId: string } | string    
    ): Promise<Models.BillingPlan> {
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

        const apiPath = '/organizations/{organizationId}/plan'.replace('{organizationId}', organizationId);
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
     * Update the billing plan for an organization.
     *
     * @param {string} params.organizationId - Organization Unique ID
     * @param {string} params.billingPlan - Organization billing plan chosen
     * @param {string} params.paymentMethodId - Payment method ID. Required for pro plans when trial is not available and user doesn't have default payment method set.
     * @param {string} params.billingAddressId - Unique ID of billing address
     * @param {string[]} params.invites - Additional member invites
     * @param {string} params.couponId - Coupon id
     * @param {string} params.taxId - Tax Id associated to billing.
     * @param {number} params.budget - Budget limit for additional usage set for the organization
     * @throws {AppwriteException}
     * @returns {Promise<Models.Organization<Preferences>>}
     */
    updatePlan<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: { organizationId: string, billingPlan: string, paymentMethodId?: string, billingAddressId?: string, invites?: string[], couponId?: string, taxId?: string, budget?: number }): Promise<Models.Organization<Preferences>>;
    /**
     * Update the billing plan for an organization.
     *
     * @param {string} organizationId - Organization Unique ID
     * @param {string} billingPlan - Organization billing plan chosen
     * @param {string} paymentMethodId - Payment method ID. Required for pro plans when trial is not available and user doesn't have default payment method set.
     * @param {string} billingAddressId - Unique ID of billing address
     * @param {string[]} invites - Additional member invites
     * @param {string} couponId - Coupon id
     * @param {string} taxId - Tax Id associated to billing.
     * @param {number} budget - Budget limit for additional usage set for the organization
     * @throws {AppwriteException}
     * @returns {Promise<Models.Organization<Preferences>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updatePlan<Preferences extends Models.Preferences = Models.DefaultPreferences>(organizationId: string, billingPlan: string, paymentMethodId?: string, billingAddressId?: string, invites?: string[], couponId?: string, taxId?: string, budget?: number): Promise<Models.Organization<Preferences>>;
    updatePlan<Preferences extends Models.Preferences = Models.DefaultPreferences>(
        paramsOrFirst: { organizationId: string, billingPlan: string, paymentMethodId?: string, billingAddressId?: string, invites?: string[], couponId?: string, taxId?: string, budget?: number } | string,
        ...rest: [(string)?, (string)?, (string)?, (string[])?, (string)?, (string)?, (number)?]    
    ): Promise<Models.Organization<Preferences>> {
        let params: { organizationId: string, billingPlan: string, paymentMethodId?: string, billingAddressId?: string, invites?: string[], couponId?: string, taxId?: string, budget?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { organizationId: string, billingPlan: string, paymentMethodId?: string, billingAddressId?: string, invites?: string[], couponId?: string, taxId?: string, budget?: number };
        } else {
            params = {
                organizationId: paramsOrFirst as string,
                billingPlan: rest[0] as string,
                paymentMethodId: rest[1] as string,
                billingAddressId: rest[2] as string,
                invites: rest[3] as string[],
                couponId: rest[4] as string,
                taxId: rest[5] as string,
                budget: rest[6] as number            
            };
        }
        
        const organizationId = params.organizationId;
        const billingPlan = params.billingPlan;
        const paymentMethodId = params.paymentMethodId;
        const billingAddressId = params.billingAddressId;
        const invites = params.invites;
        const couponId = params.couponId;
        const taxId = params.taxId;
        const budget = params.budget;

        if (typeof organizationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "organizationId"');
        }
        if (typeof billingPlan === 'undefined') {
            throw new AppwriteException('Missing required parameter: "billingPlan"');
        }

        const apiPath = '/organizations/{organizationId}/plan'.replace('{organizationId}', organizationId);
        const payload: Payload = {};
        if (typeof billingPlan !== 'undefined') {
            payload['billingPlan'] = billingPlan;
        }
        if (typeof paymentMethodId !== 'undefined') {
            payload['paymentMethodId'] = paymentMethodId;
        }
        if (typeof billingAddressId !== 'undefined') {
            payload['billingAddressId'] = billingAddressId;
        }
        if (typeof invites !== 'undefined') {
            payload['invites'] = invites;
        }
        if (typeof couponId !== 'undefined') {
            payload['couponId'] = couponId;
        }
        if (typeof taxId !== 'undefined') {
            payload['taxId'] = taxId;
        }
        if (typeof budget !== 'undefined') {
            payload['budget'] = budget;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Cancel the downgrade initiated for an organization.
     *
     * @param {string} params.organizationId - Organization Unique ID
     * @throws {AppwriteException}
     * @returns {Promise<Models.Organization<Preferences>>}
     */
    cancelDowngrade<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: { organizationId: string }): Promise<Models.Organization<Preferences>>;
    /**
     * Cancel the downgrade initiated for an organization.
     *
     * @param {string} organizationId - Organization Unique ID
     * @throws {AppwriteException}
     * @returns {Promise<Models.Organization<Preferences>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    cancelDowngrade<Preferences extends Models.Preferences = Models.DefaultPreferences>(organizationId: string): Promise<Models.Organization<Preferences>>;
    cancelDowngrade<Preferences extends Models.Preferences = Models.DefaultPreferences>(
        paramsOrFirst: { organizationId: string } | string    
    ): Promise<Models.Organization<Preferences>> {
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

        const apiPath = '/organizations/{organizationId}/plan/cancel'.replace('{organizationId}', organizationId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Update selected projects to keep in the organization.
     *
     * @param {string} params.organizationId - Organization Unique ID
     * @param {string[]} params.projects - List of project IDs to be selected for the organization
     * @throws {AppwriteException}
     * @returns {Promise<Models.Organization<Preferences>>}
     */
    updateProjects<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: { organizationId: string, projects?: string[] }): Promise<Models.Organization<Preferences>>;
    /**
     * Update selected projects to keep in the organization.
     *
     * @param {string} organizationId - Organization Unique ID
     * @param {string[]} projects - List of project IDs to be selected for the organization
     * @throws {AppwriteException}
     * @returns {Promise<Models.Organization<Preferences>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateProjects<Preferences extends Models.Preferences = Models.DefaultPreferences>(organizationId: string, projects?: string[]): Promise<Models.Organization<Preferences>>;
    updateProjects<Preferences extends Models.Preferences = Models.DefaultPreferences>(
        paramsOrFirst: { organizationId: string, projects?: string[] } | string,
        ...rest: [(string[])?]    
    ): Promise<Models.Organization<Preferences>> {
        let params: { organizationId: string, projects?: string[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { organizationId: string, projects?: string[] };
        } else {
            params = {
                organizationId: paramsOrFirst as string,
                projects: rest[0] as string[]            
            };
        }
        
        const organizationId = params.organizationId;
        const projects = params.projects;

        if (typeof organizationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "organizationId"');
        }

        const apiPath = '/organizations/{organizationId}/projects'.replace('{organizationId}', organizationId);
        const payload: Payload = {};
        if (typeof projects !== 'undefined') {
            payload['projects'] = projects;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Get all available regions for an organization.
     *
     * @param {string} params.organizationId - Team ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ConsoleRegionList>}
     */
    listRegions(params: { organizationId: string }): Promise<Models.ConsoleRegionList>;
    /**
     * Get all available regions for an organization.
     *
     * @param {string} organizationId - Team ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ConsoleRegionList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listRegions(organizationId: string): Promise<Models.ConsoleRegionList>;
    listRegions(
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

        const apiPath = '/organizations/{organizationId}/regions'.replace('{organizationId}', organizationId);
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
     * Get Scopes
     *
     * @param {string} params.organizationId - Organization id
     * @throws {AppwriteException}
     * @returns {Promise<Models.Roles>}
     */
    getScopes(params: { organizationId: string }): Promise<Models.Roles>;
    /**
     * Get Scopes
     *
     * @param {string} organizationId - Organization id
     * @throws {AppwriteException}
     * @returns {Promise<Models.Roles>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getScopes(organizationId: string): Promise<Models.Roles>;
    getScopes(
        paramsOrFirst: { organizationId: string } | string    
    ): Promise<Models.Roles> {
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

        const apiPath = '/organizations/{organizationId}/roles'.replace('{organizationId}', organizationId);
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
     * Set an organization's billing tax ID.
     *
     * @param {string} params.organizationId - Organization ID
     * @param {string} params.taxId - Tax Id associated to billing.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Organization<Preferences>>}
     */
    setBillingTaxId<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: { organizationId: string, taxId: string }): Promise<Models.Organization<Preferences>>;
    /**
     * Set an organization's billing tax ID.
     *
     * @param {string} organizationId - Organization ID
     * @param {string} taxId - Tax Id associated to billing.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Organization<Preferences>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    setBillingTaxId<Preferences extends Models.Preferences = Models.DefaultPreferences>(organizationId: string, taxId: string): Promise<Models.Organization<Preferences>>;
    setBillingTaxId<Preferences extends Models.Preferences = Models.DefaultPreferences>(
        paramsOrFirst: { organizationId: string, taxId: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.Organization<Preferences>> {
        let params: { organizationId: string, taxId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { organizationId: string, taxId: string };
        } else {
            params = {
                organizationId: paramsOrFirst as string,
                taxId: rest[0] as string            
            };
        }
        
        const organizationId = params.organizationId;
        const taxId = params.taxId;

        if (typeof organizationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "organizationId"');
        }
        if (typeof taxId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "taxId"');
        }

        const apiPath = '/organizations/{organizationId}/taxId'.replace('{organizationId}', organizationId);
        const payload: Payload = {};
        if (typeof taxId !== 'undefined') {
            payload['taxId'] = taxId;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Get the usage data for an organization.
     *
     * @param {string} params.organizationId - Organization ID
     * @param {string} params.startDate - Starting date for the usage
     * @param {string} params.endDate - End date for the usage
     * @throws {AppwriteException}
     * @returns {Promise<Models.UsageOrganization>}
     */
    getUsage(params: { organizationId: string, startDate?: string, endDate?: string }): Promise<Models.UsageOrganization>;
    /**
     * Get the usage data for an organization.
     *
     * @param {string} organizationId - Organization ID
     * @param {string} startDate - Starting date for the usage
     * @param {string} endDate - End date for the usage
     * @throws {AppwriteException}
     * @returns {Promise<Models.UsageOrganization>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getUsage(organizationId: string, startDate?: string, endDate?: string): Promise<Models.UsageOrganization>;
    getUsage(
        paramsOrFirst: { organizationId: string, startDate?: string, endDate?: string } | string,
        ...rest: [(string)?, (string)?]    
    ): Promise<Models.UsageOrganization> {
        let params: { organizationId: string, startDate?: string, endDate?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { organizationId: string, startDate?: string, endDate?: string };
        } else {
            params = {
                organizationId: paramsOrFirst as string,
                startDate: rest[0] as string,
                endDate: rest[1] as string            
            };
        }
        
        const organizationId = params.organizationId;
        const startDate = params.startDate;
        const endDate = params.endDate;

        if (typeof organizationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "organizationId"');
        }

        const apiPath = '/organizations/{organizationId}/usage'.replace('{organizationId}', organizationId);
        const payload: Payload = {};
        if (typeof startDate !== 'undefined') {
            payload['startDate'] = startDate;
        }
        if (typeof endDate !== 'undefined') {
            payload['endDate'] = endDate;
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
     * Validate payment for team after creation or upgrade.
     *
     * @param {string} params.organizationId - Organization ID
     * @param {string[]} params.invites - Additional member invites
     * @throws {AppwriteException}
     * @returns {Promise<Models.Organization<Preferences>>}
     */
    validatePayment<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: { organizationId: string, invites?: string[] }): Promise<Models.Organization<Preferences>>;
    /**
     * Validate payment for team after creation or upgrade.
     *
     * @param {string} organizationId - Organization ID
     * @param {string[]} invites - Additional member invites
     * @throws {AppwriteException}
     * @returns {Promise<Models.Organization<Preferences>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    validatePayment<Preferences extends Models.Preferences = Models.DefaultPreferences>(organizationId: string, invites?: string[]): Promise<Models.Organization<Preferences>>;
    validatePayment<Preferences extends Models.Preferences = Models.DefaultPreferences>(
        paramsOrFirst: { organizationId: string, invites?: string[] } | string,
        ...rest: [(string[])?]    
    ): Promise<Models.Organization<Preferences>> {
        let params: { organizationId: string, invites?: string[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { organizationId: string, invites?: string[] };
        } else {
            params = {
                organizationId: paramsOrFirst as string,
                invites: rest[0] as string[]            
            };
        }
        
        const organizationId = params.organizationId;
        const invites = params.invites;

        if (typeof organizationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "organizationId"');
        }

        const apiPath = '/organizations/{organizationId}/validate'.replace('{organizationId}', organizationId);
        const payload: Payload = {};
        if (typeof invites !== 'undefined') {
            payload['invites'] = invites;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload
        );
    }
}
