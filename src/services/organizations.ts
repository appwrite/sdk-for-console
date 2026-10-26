import {
    AppwriteException,
    Client,
    type Payload,
    applyDefaults,
} from '../client';
import type { Models } from '../models';

import { Platform } from '../enums/platform';
import { AddonKey } from '../enums/addon-key';
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
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OrganizationList<Preferences>>}
     */
    list<
        Preferences extends Models.Preferences = Models.DefaultPreferences,
    >(params?: {
        queries?: string[];
        search?: string;
        total?: boolean;
    }): Promise<Models.OrganizationList<Preferences>>;
    /**
     * Get a list of all the teams in which the current user is a member. You can use the parameters to filter your results.
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, total, billingPlan, paymentMethodId, backupPaymentMethodId, platform
     * @param {string} search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.OrganizationList<Preferences>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    list<Preferences extends Models.Preferences = Models.DefaultPreferences>(
        queries?: string[],
        search?: string,
        total?: boolean,
    ): Promise<Models.OrganizationList<Preferences>>;
    list<Preferences extends Models.Preferences = Models.DefaultPreferences>(
        paramsOrFirst?:
            { queries?: string[]; search?: string; total?: boolean } | string[],
        ...rest: [string?, boolean?]
    ): Promise<Models.OrganizationList<Preferences>> {
        let params: { queries?: string[]; search?: string; total?: boolean };

        if (
            (typeof paramsOrFirst === 'undefined' && rest.length === 0) ||
            (paramsOrFirst &&
                typeof paramsOrFirst === 'object' &&
                !Array.isArray(paramsOrFirst))
        ) {
            params = (paramsOrFirst || {}) as {
                queries?: string[];
                search?: string;
                total?: boolean;
            };
        } else {
            params = {
                queries: paramsOrFirst as string[],
                search: rest[0] as string,
                total: rest[1] as boolean,
            };
        }

        const queries = params.queries;
        const search = params.search;
        const total = params.total;

        const apiPath = '/organizations';
        const apiPayload: Payload = {};
        if (typeof queries !== 'undefined') {
            apiPayload['queries'] = queries;
        }
        if (typeof search !== 'undefined') {
            apiPayload['search'] = search;
        }
        if (typeof total !== 'undefined') {
            apiPayload['total'] = total;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            accept: 'application/json',
        };

        const request = this.client.call('get', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'organizationList',
            models: {
                organizationList: {
                    defaults: {
                        total: 0,
                        teams: [],
                    },
                    properties: {
                        teams: {
                            items: 'organization',
                        },
                    },
                },
                organization: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        name: '',
                        total: 0,
                        budgetAlerts: [75],
                        billingPlan: 'tier-0',
                        billingPlanId: 'tier-0',
                        billingEmail: '',
                        status: 'draft',
                        markedForDeletion: false,
                        platform: 'appwrite',
                        projects: [],
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Create a new organization.
     *
     *
     * @param {string} params.organizationId - Organization ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Organization name. Max length: 128 chars.
     * @param {string} params.billingPlan - Organization billing plan chosen
     * @param {string | null} params.paymentMethodId - Payment method ID. Required for pro plans when trial is not available and user doesn't have default payment method set.
     * @param {string | null} params.billingAddressId - Unique ID of billing address
     * @param {string[]} params.invites - Additional member invites
     * @param {string | null} params.couponId - Coupon id
     * @param {string | null} params.taxId - Tax Id associated to billing.
     * @param {number | null} params.budget - Budget limit for additional usage set for the organization
     * @param {Platform} params.platform - Platform type
     * @throws {AppwriteException}
     * @returns {Promise<Models.Organization<Preferences> | Models.PaymentAuthentication>}
     */
    create<
        Preferences extends Models.Preferences = Models.DefaultPreferences,
    >(params: {
        organizationId: string;
        name: string;
        billingPlan: string;
        paymentMethodId?: string | null;
        billingAddressId?: string | null;
        invites?: string[];
        couponId?: string | null;
        taxId?: string | null;
        budget?: number | null;
        platform?: Platform;
    }): Promise<
        Models.Organization<Preferences> | Models.PaymentAuthentication
    >;
    /**
     * Create a new organization.
     *
     *
     * @param {string} organizationId - Organization ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Organization name. Max length: 128 chars.
     * @param {string} billingPlan - Organization billing plan chosen
     * @param {string | null} paymentMethodId - Payment method ID. Required for pro plans when trial is not available and user doesn't have default payment method set.
     * @param {string | null} billingAddressId - Unique ID of billing address
     * @param {string[]} invites - Additional member invites
     * @param {string | null} couponId - Coupon id
     * @param {string | null} taxId - Tax Id associated to billing.
     * @param {number | null} budget - Budget limit for additional usage set for the organization
     * @param {Platform} platform - Platform type
     * @throws {AppwriteException}
     * @returns {Promise<Models.Organization<Preferences> | Models.PaymentAuthentication>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    create<Preferences extends Models.Preferences = Models.DefaultPreferences>(
        organizationId: string,
        name: string,
        billingPlan: string,
        paymentMethodId?: string | null,
        billingAddressId?: string | null,
        invites?: string[],
        couponId?: string | null,
        taxId?: string | null,
        budget?: number | null,
        platform?: Platform,
    ): Promise<Models.Organization<Preferences> | Models.PaymentAuthentication>;
    create<Preferences extends Models.Preferences = Models.DefaultPreferences>(
        paramsOrFirst:
            | {
                  organizationId: string;
                  name: string;
                  billingPlan: string;
                  paymentMethodId?: string | null;
                  billingAddressId?: string | null;
                  invites?: string[];
                  couponId?: string | null;
                  taxId?: string | null;
                  budget?: number | null;
                  platform?: Platform;
              }
            | string,
        ...rest: [
            string?,
            string?,
            (string | null)?,
            (string | null)?,
            string[]?,
            (string | null)?,
            (string | null)?,
            (number | null)?,
            Platform?,
        ]
    ): Promise<
        Models.Organization<Preferences> | Models.PaymentAuthentication
    > {
        let params: {
            organizationId: string;
            name: string;
            billingPlan: string;
            paymentMethodId?: string | null;
            billingAddressId?: string | null;
            invites?: string[];
            couponId?: string | null;
            taxId?: string | null;
            budget?: number | null;
            platform?: Platform;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                organizationId: string;
                name: string;
                billingPlan: string;
                paymentMethodId?: string | null;
                billingAddressId?: string | null;
                invites?: string[];
                couponId?: string | null;
                taxId?: string | null;
                budget?: number | null;
                platform?: Platform;
            };
        } else {
            params = {
                organizationId: paramsOrFirst as string,
                name: rest[0] as string,
                billingPlan: rest[1] as string,
                paymentMethodId: rest[2] as string | null,
                billingAddressId: rest[3] as string | null,
                invites: rest[4] as string[],
                couponId: rest[5] as string | null,
                taxId: rest[6] as string | null,
                budget: rest[7] as number | null,
                platform: rest[8] as Platform,
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
            throw new AppwriteException(
                'Missing required parameter: "organizationId"',
            );
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof billingPlan === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "billingPlan"',
            );
        }
        const apiPath = '/organizations';
        const apiPayload: Payload = {};
        if (typeof organizationId !== 'undefined') {
            apiPayload['organizationId'] = organizationId;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof billingPlan !== 'undefined') {
            apiPayload['billingPlan'] = billingPlan;
        }
        if (typeof paymentMethodId !== 'undefined') {
            apiPayload['paymentMethodId'] = paymentMethodId;
        }
        if (typeof billingAddressId !== 'undefined') {
            apiPayload['billingAddressId'] = billingAddressId;
        }
        if (typeof invites !== 'undefined') {
            apiPayload['invites'] = invites;
        }
        if (typeof couponId !== 'undefined') {
            apiPayload['couponId'] = couponId;
        }
        if (typeof taxId !== 'undefined') {
            apiPayload['taxId'] = taxId;
        }
        if (typeof budget !== 'undefined') {
            apiPayload['budget'] = budget;
        }
        if (typeof platform !== 'undefined') {
            apiPayload['platform'] = platform;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('post', uri, apiHeaders, apiPayload);
    }

    /**
     * Get estimation for creating an organization.
     *
     * @param {string} params.billingPlan - Organization billing plan chosen
     * @param {string | null} params.paymentMethodId - Payment method ID. Required for pro plans when trial is not available and user doesn't have default payment method set.
     * @param {string[]} params.invites - Additional member invites
     * @param {string | null} params.couponId - Coupon id
     * @param {Platform} params.platform - Platform type
     * @throws {AppwriteException}
     * @returns {Promise<Models.Estimation>}
     */
    estimationCreateOrganization(params: {
        billingPlan: string;
        paymentMethodId?: string | null;
        invites?: string[];
        couponId?: string | null;
        platform?: Platform;
    }): Promise<Models.Estimation>;
    /**
     * Get estimation for creating an organization.
     *
     * @param {string} billingPlan - Organization billing plan chosen
     * @param {string | null} paymentMethodId - Payment method ID. Required for pro plans when trial is not available and user doesn't have default payment method set.
     * @param {string[]} invites - Additional member invites
     * @param {string | null} couponId - Coupon id
     * @param {Platform} platform - Platform type
     * @throws {AppwriteException}
     * @returns {Promise<Models.Estimation>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    estimationCreateOrganization(
        billingPlan: string,
        paymentMethodId?: string | null,
        invites?: string[],
        couponId?: string | null,
        platform?: Platform,
    ): Promise<Models.Estimation>;
    estimationCreateOrganization(
        paramsOrFirst:
            | {
                  billingPlan: string;
                  paymentMethodId?: string | null;
                  invites?: string[];
                  couponId?: string | null;
                  platform?: Platform;
              }
            | string,
        ...rest: [(string | null)?, string[]?, (string | null)?, Platform?]
    ): Promise<Models.Estimation> {
        let params: {
            billingPlan: string;
            paymentMethodId?: string | null;
            invites?: string[];
            couponId?: string | null;
            platform?: Platform;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                billingPlan: string;
                paymentMethodId?: string | null;
                invites?: string[];
                couponId?: string | null;
                platform?: Platform;
            };
        } else {
            params = {
                billingPlan: paramsOrFirst as string,
                paymentMethodId: rest[0] as string | null,
                invites: rest[1] as string[],
                couponId: rest[2] as string | null,
                platform: rest[3] as Platform,
            };
        }

        const billingPlan = params.billingPlan;
        const paymentMethodId = params.paymentMethodId;
        const invites = params.invites;
        const couponId = params.couponId;
        const platform = params.platform;

        if (typeof billingPlan === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "billingPlan"',
            );
        }
        const apiPath = '/organizations/estimations/create-organization';
        const apiPayload: Payload = {};
        if (typeof billingPlan !== 'undefined') {
            apiPayload['billingPlan'] = billingPlan;
        }
        if (typeof paymentMethodId !== 'undefined') {
            apiPayload['paymentMethodId'] = paymentMethodId;
        }
        if (typeof invites !== 'undefined') {
            apiPayload['invites'] = invites;
        }
        if (typeof couponId !== 'undefined') {
            apiPayload['couponId'] = couponId;
        }
        if (typeof platform !== 'undefined') {
            apiPayload['platform'] = platform;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        const request = this.client.call('patch', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'estimation',
            models: {
                estimation: {
                    defaults: {
                        amount: 0,
                        grossAmount: 0,
                        credits: 0,
                        items: [],
                        discounts: [],
                        trialDays: 0,
                    },
                    properties: {
                        items: {
                            items: 'estimation_item',
                        },
                        discounts: {
                            items: 'estimation_item',
                        },
                    },
                },
                estimation_item: {
                    defaults: {
                        label: '',
                        value: 0,
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
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
    delete(paramsOrFirst: { organizationId: string } | string): Promise<{}> {
        let params: { organizationId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as { organizationId: string };
        } else {
            params = {
                organizationId: paramsOrFirst as string,
            };
        }

        const organizationId = params.organizationId;

        if (typeof organizationId === 'undefined' || organizationId === '') {
            throw new AppwriteException(
                'Missing required parameter: "organizationId"',
            );
        }
        const apiPath = '/organizations/{organizationId}'.replace(
            '{organizationId}',
            encodeURIComponent(String(organizationId)),
        );
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('delete', uri, apiHeaders, apiPayload);
    }

    /**
     * List all billing addons for an organization.
     *
     *
     * @param {string} params.organizationId - Organization ID
     * @throws {AppwriteException}
     * @returns {Promise<Models.AddonList>}
     */
    listAddons(params: { organizationId: string }): Promise<Models.AddonList>;
    /**
     * List all billing addons for an organization.
     *
     *
     * @param {string} organizationId - Organization ID
     * @throws {AppwriteException}
     * @returns {Promise<Models.AddonList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listAddons(organizationId: string): Promise<Models.AddonList>;
    listAddons(
        paramsOrFirst: { organizationId: string } | string,
    ): Promise<Models.AddonList> {
        let params: { organizationId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as { organizationId: string };
        } else {
            params = {
                organizationId: paramsOrFirst as string,
            };
        }

        const organizationId = params.organizationId;

        if (typeof organizationId === 'undefined' || organizationId === '') {
            throw new AppwriteException(
                'Missing required parameter: "organizationId"',
            );
        }
        const apiPath = '/organizations/{organizationId}/addons'.replace(
            '{organizationId}',
            encodeURIComponent(String(organizationId)),
        );
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            accept: 'application/json',
        };

        const request = this.client.call('get', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'addonList',
            models: {
                addonList: {
                    defaults: {
                        total: 0,
                        addons: [],
                    },
                    properties: {
                        addons: {
                            items: 'addon',
                        },
                    },
                },
                addon: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        $permissions: [],
                        key: '',
                        resourceType: '',
                        resourceId: '',
                        status: 'active',
                        currentValue: 0,
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Create the BAA billing addon for an organization.
     *
     *
     * @param {string} params.organizationId - Organization ID
     * @throws {AppwriteException}
     * @returns {Promise<Models.Addon>}
     */
    createBaaAddon(params: { organizationId: string }): Promise<Models.Addon>;
    /**
     * Create the BAA billing addon for an organization.
     *
     *
     * @param {string} organizationId - Organization ID
     * @throws {AppwriteException}
     * @returns {Promise<Models.Addon>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createBaaAddon(organizationId: string): Promise<Models.Addon>;
    createBaaAddon(
        paramsOrFirst: { organizationId: string } | string,
    ): Promise<Models.Addon> {
        let params: { organizationId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as { organizationId: string };
        } else {
            params = {
                organizationId: paramsOrFirst as string,
            };
        }

        const organizationId = params.organizationId;

        if (typeof organizationId === 'undefined' || organizationId === '') {
            throw new AppwriteException(
                'Missing required parameter: "organizationId"',
            );
        }
        const apiPath = '/organizations/{organizationId}/addons/baa'.replace(
            '{organizationId}',
            encodeURIComponent(String(organizationId)),
        );
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        const request = this.client.call('post', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'addon',
            models: {
                addon: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        $permissions: [],
                        key: '',
                        resourceType: '',
                        resourceId: '',
                        status: 'active',
                        currentValue: 0,
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Create a Premium Geo DB addon for an organization.
     *
     *
     * @param {string} params.organizationId - Organization ID
     * @throws {AppwriteException}
     * @returns {Promise<Models.Addon>}
     */
    createPremiumGeoDBAddon(params: {
        organizationId: string;
    }): Promise<Models.Addon>;
    /**
     * Create a Premium Geo DB addon for an organization.
     *
     *
     * @param {string} organizationId - Organization ID
     * @throws {AppwriteException}
     * @returns {Promise<Models.Addon>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createPremiumGeoDBAddon(organizationId: string): Promise<Models.Addon>;
    createPremiumGeoDBAddon(
        paramsOrFirst: { organizationId: string } | string,
    ): Promise<Models.Addon> {
        let params: { organizationId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as { organizationId: string };
        } else {
            params = {
                organizationId: paramsOrFirst as string,
            };
        }

        const organizationId = params.organizationId;

        if (typeof organizationId === 'undefined' || organizationId === '') {
            throw new AppwriteException(
                'Missing required parameter: "organizationId"',
            );
        }
        const apiPath =
            '/organizations/{organizationId}/addons/premium-geo-db'.replace(
                '{organizationId}',
                encodeURIComponent(String(organizationId)),
            );
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        const request = this.client.call('post', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'addon',
            models: {
                addon: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        $permissions: [],
                        key: '',
                        resourceType: '',
                        resourceId: '',
                        status: 'active',
                        currentValue: 0,
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Get the details of a billing addon for an organization.
     *
     *
     * @param {string} params.organizationId - Organization ID
     * @param {string} params.addonId - Addon ID
     * @throws {AppwriteException}
     * @returns {Promise<Models.Addon>}
     */
    getAddon(params: {
        organizationId: string;
        addonId: string;
    }): Promise<Models.Addon>;
    /**
     * Get the details of a billing addon for an organization.
     *
     *
     * @param {string} organizationId - Organization ID
     * @param {string} addonId - Addon ID
     * @throws {AppwriteException}
     * @returns {Promise<Models.Addon>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getAddon(organizationId: string, addonId: string): Promise<Models.Addon>;
    getAddon(
        paramsOrFirst: { organizationId: string; addonId: string } | string,
        ...rest: [string?]
    ): Promise<Models.Addon> {
        let params: { organizationId: string; addonId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                organizationId: string;
                addonId: string;
            };
        } else {
            params = {
                organizationId: paramsOrFirst as string,
                addonId: rest[0] as string,
            };
        }

        const organizationId = params.organizationId;
        const addonId = params.addonId;

        if (typeof organizationId === 'undefined' || organizationId === '') {
            throw new AppwriteException(
                'Missing required parameter: "organizationId"',
            );
        }
        if (typeof addonId === 'undefined' || addonId === '') {
            throw new AppwriteException(
                'Missing required parameter: "addonId"',
            );
        }
        const apiPath = '/organizations/{organizationId}/addons/{addonId}'
            .replace(
                '{organizationId}',
                encodeURIComponent(String(organizationId)),
            )
            .replace('{addonId}', encodeURIComponent(String(addonId)));
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            accept: 'application/json',
        };

        const request = this.client.call('get', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'addon',
            models: {
                addon: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        $permissions: [],
                        key: '',
                        resourceType: '',
                        resourceId: '',
                        status: 'active',
                        currentValue: 0,
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Delete a billing addon for an organization.
     *
     *
     * @param {string} params.organizationId - Organization ID
     * @param {string} params.addonId - Addon ID
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteAddon(params: {
        organizationId: string;
        addonId: string;
    }): Promise<{}>;
    /**
     * Delete a billing addon for an organization.
     *
     *
     * @param {string} organizationId - Organization ID
     * @param {string} addonId - Addon ID
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteAddon(organizationId: string, addonId: string): Promise<{}>;
    deleteAddon(
        paramsOrFirst: { organizationId: string; addonId: string } | string,
        ...rest: [string?]
    ): Promise<{}> {
        let params: { organizationId: string; addonId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                organizationId: string;
                addonId: string;
            };
        } else {
            params = {
                organizationId: paramsOrFirst as string,
                addonId: rest[0] as string,
            };
        }

        const organizationId = params.organizationId;
        const addonId = params.addonId;

        if (typeof organizationId === 'undefined' || organizationId === '') {
            throw new AppwriteException(
                'Missing required parameter: "organizationId"',
            );
        }
        if (typeof addonId === 'undefined' || addonId === '') {
            throw new AppwriteException(
                'Missing required parameter: "addonId"',
            );
        }
        const apiPath = '/organizations/{organizationId}/addons/{addonId}'
            .replace(
                '{organizationId}',
                encodeURIComponent(String(organizationId)),
            )
            .replace('{addonId}', encodeURIComponent(String(addonId)));
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('delete', uri, apiHeaders, apiPayload);
    }

    /**
     * Confirm payment for a billing addon for an organization.
     *
     *
     * @param {string} params.organizationId - Organization ID
     * @param {string} params.addonId - Addon ID
     * @throws {AppwriteException}
     * @returns {Promise<Models.Addon>}
     */
    confirmAddonPayment(params: {
        organizationId: string;
        addonId: string;
    }): Promise<Models.Addon>;
    /**
     * Confirm payment for a billing addon for an organization.
     *
     *
     * @param {string} organizationId - Organization ID
     * @param {string} addonId - Addon ID
     * @throws {AppwriteException}
     * @returns {Promise<Models.Addon>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    confirmAddonPayment(
        organizationId: string,
        addonId: string,
    ): Promise<Models.Addon>;
    confirmAddonPayment(
        paramsOrFirst: { organizationId: string; addonId: string } | string,
        ...rest: [string?]
    ): Promise<Models.Addon> {
        let params: { organizationId: string; addonId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                organizationId: string;
                addonId: string;
            };
        } else {
            params = {
                organizationId: paramsOrFirst as string,
                addonId: rest[0] as string,
            };
        }

        const organizationId = params.organizationId;
        const addonId = params.addonId;

        if (typeof organizationId === 'undefined' || organizationId === '') {
            throw new AppwriteException(
                'Missing required parameter: "organizationId"',
            );
        }
        if (typeof addonId === 'undefined' || addonId === '') {
            throw new AppwriteException(
                'Missing required parameter: "addonId"',
            );
        }
        const apiPath =
            '/organizations/{organizationId}/addons/{addonId}/confirmations'
                .replace(
                    '{organizationId}',
                    encodeURIComponent(String(organizationId)),
                )
                .replace('{addonId}', encodeURIComponent(String(addonId)));
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        const request = this.client.call('post', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'addon',
            models: {
                addon: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        $permissions: [],
                        key: '',
                        resourceType: '',
                        resourceId: '',
                        status: 'active',
                        currentValue: 0,
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Get the price details for a billing addon for an organization.
     *
     *
     * @param {string} params.organizationId - Organization ID
     * @param {AddonKey} params.addon - Addon key identifier (e.g. baa).
     * @throws {AppwriteException}
     * @returns {Promise<Models.AddonPrice>}
     */
    getAddonPrice(params: {
        organizationId: string;
        addon: AddonKey;
    }): Promise<Models.AddonPrice>;
    /**
     * Get the price details for a billing addon for an organization.
     *
     *
     * @param {string} organizationId - Organization ID
     * @param {AddonKey} addon - Addon key identifier (e.g. baa).
     * @throws {AppwriteException}
     * @returns {Promise<Models.AddonPrice>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getAddonPrice(
        organizationId: string,
        addon: AddonKey,
    ): Promise<Models.AddonPrice>;
    getAddonPrice(
        paramsOrFirst: { organizationId: string; addon: AddonKey } | string,
        ...rest: [AddonKey?]
    ): Promise<Models.AddonPrice> {
        let params: { organizationId: string; addon: AddonKey };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                organizationId: string;
                addon: AddonKey;
            };
        } else {
            params = {
                organizationId: paramsOrFirst as string,
                addon: rest[0] as AddonKey,
            };
        }

        const organizationId = params.organizationId;
        const addon = params.addon;

        if (typeof organizationId === 'undefined' || organizationId === '') {
            throw new AppwriteException(
                'Missing required parameter: "organizationId"',
            );
        }
        if (typeof addon === 'undefined') {
            throw new AppwriteException('Missing required parameter: "addon"');
        }
        const apiPath = '/organizations/{organizationId}/addons/{addon}/price'
            .replace(
                '{organizationId}',
                encodeURIComponent(String(organizationId)),
            )
            .replace('{addon}', encodeURIComponent(String(addon)));
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            accept: 'application/json',
        };

        const request = this.client.call('get', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'addonPrice',
            models: {
                addonPrice: {
                    defaults: {
                        addonKey: '',
                        name: '',
                        monthlyPrice: 0,
                        proratedAmount: 0,
                        remainingDays: 0,
                        totalCycleDays: 0,
                        currency: 'USD',
                        billingCycleEnd: '',
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Get a list of all aggregations for an organization.
     *
     * @param {string} params.organizationId - Organization ID
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/databases#querying-documents). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: teamId, aggregationId, from, to
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AggregationTeamList>}
     */
    listAggregations(params: {
        organizationId: string;
        queries?: string[];
        total?: boolean;
    }): Promise<Models.AggregationTeamList>;
    /**
     * Get a list of all aggregations for an organization.
     *
     * @param {string} organizationId - Organization ID
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/databases#querying-documents). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: teamId, aggregationId, from, to
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AggregationTeamList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listAggregations(
        organizationId: string,
        queries?: string[],
        total?: boolean,
    ): Promise<Models.AggregationTeamList>;
    listAggregations(
        paramsOrFirst:
            | { organizationId: string; queries?: string[]; total?: boolean }
            | string,
        ...rest: [string[]?, boolean?]
    ): Promise<Models.AggregationTeamList> {
        let params: {
            organizationId: string;
            queries?: string[];
            total?: boolean;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                organizationId: string;
                queries?: string[];
                total?: boolean;
            };
        } else {
            params = {
                organizationId: paramsOrFirst as string,
                queries: rest[0] as string[],
                total: rest[1] as boolean,
            };
        }

        const organizationId = params.organizationId;
        const queries = params.queries;
        const total = params.total;

        if (typeof organizationId === 'undefined' || organizationId === '') {
            throw new AppwriteException(
                'Missing required parameter: "organizationId"',
            );
        }
        const apiPath = '/organizations/{organizationId}/aggregations'.replace(
            '{organizationId}',
            encodeURIComponent(String(organizationId)),
        );
        const apiPayload: Payload = {};
        if (typeof queries !== 'undefined') {
            apiPayload['queries'] = queries;
        }
        if (typeof total !== 'undefined') {
            apiPayload['total'] = total;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            accept: 'application/json',
        };

        const request = this.client.call('get', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'aggregationTeamList',
            models: {
                aggregationTeamList: {
                    defaults: {
                        total: 0,
                        aggregations: [],
                    },
                    properties: {
                        aggregations: {
                            items: 'aggregationTeam',
                        },
                    },
                },
                aggregationTeam: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        $permissions: [],
                        from: '',
                        to: '',
                        usageStorage: 0,
                        usageTotalStorage: 0,
                        usageFilesStorage: 0,
                        usageDeploymentsStorage: 0,
                        usageBuildsStorage: 0,
                        usageDatabasesStorage: 0,
                        usageFunctionsStorage: 0,
                        usageSitesStorage: 0,
                        usageUsers: 0,
                        usageExecutions: 0,
                        usageBandwidth: 0,
                        usageRealtime: 0,
                        usageRealtimeMessages: 0,
                        usageRealtimeBandwidth: 0,
                        additionalMembers: 0,
                        additionalMemberAmount: 0,
                        additionalStorageAmount: 0,
                        additionalUsersAmount: 0,
                        additionalExecutionsAmount: 0,
                        additionalBandwidthAmount: 0,
                        additionalRealtimeAmount: 0,
                        plan: '',
                        amount: 0,
                        breakdown: [],
                        resources: [],
                    },
                    properties: {
                        breakdown: {
                            items: 'aggregationBreakdown',
                        },
                        resources: {
                            items: 'usageResources',
                        },
                    },
                },
                aggregationBreakdown: {
                    defaults: {
                        $id: '',
                        name: '',
                        region: 'fra',
                        amount: 0,
                        resources: [],
                    },
                    properties: {
                        resources: {
                            items: 'usageResources',
                        },
                    },
                },
                usageResources: {
                    defaults: {
                        name: '',
                        value: 0,
                        amount: 0,
                        rate: 0,
                        desc: '',
                        resourceId: '',
                        type: '',
                        specification: '',
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
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
    getAggregation(params: {
        organizationId: string;
        aggregationId: string;
        limit?: number;
        offset?: number;
    }): Promise<Models.AggregationTeam>;
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
    getAggregation(
        organizationId: string,
        aggregationId: string,
        limit?: number,
        offset?: number,
    ): Promise<Models.AggregationTeam>;
    getAggregation(
        paramsOrFirst:
            | {
                  organizationId: string;
                  aggregationId: string;
                  limit?: number;
                  offset?: number;
              }
            | string,
        ...rest: [string?, number?, number?]
    ): Promise<Models.AggregationTeam> {
        let params: {
            organizationId: string;
            aggregationId: string;
            limit?: number;
            offset?: number;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                organizationId: string;
                aggregationId: string;
                limit?: number;
                offset?: number;
            };
        } else {
            params = {
                organizationId: paramsOrFirst as string,
                aggregationId: rest[0] as string,
                limit: rest[1] as number,
                offset: rest[2] as number,
            };
        }

        const organizationId = params.organizationId;
        const aggregationId = params.aggregationId;
        const limit = params.limit;
        const offset = params.offset;

        if (typeof organizationId === 'undefined' || organizationId === '') {
            throw new AppwriteException(
                'Missing required parameter: "organizationId"',
            );
        }
        if (typeof aggregationId === 'undefined' || aggregationId === '') {
            throw new AppwriteException(
                'Missing required parameter: "aggregationId"',
            );
        }
        const apiPath =
            '/organizations/{organizationId}/aggregations/{aggregationId}'
                .replace(
                    '{organizationId}',
                    encodeURIComponent(String(organizationId)),
                )
                .replace(
                    '{aggregationId}',
                    encodeURIComponent(String(aggregationId)),
                );
        const apiPayload: Payload = {};
        if (typeof limit !== 'undefined') {
            apiPayload['limit'] = limit;
        }
        if (typeof offset !== 'undefined') {
            apiPayload['offset'] = offset;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            accept: 'application/json',
        };

        const request = this.client.call('get', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'aggregationTeam',
            models: {
                aggregationTeam: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        $permissions: [],
                        from: '',
                        to: '',
                        usageStorage: 0,
                        usageTotalStorage: 0,
                        usageFilesStorage: 0,
                        usageDeploymentsStorage: 0,
                        usageBuildsStorage: 0,
                        usageDatabasesStorage: 0,
                        usageFunctionsStorage: 0,
                        usageSitesStorage: 0,
                        usageUsers: 0,
                        usageExecutions: 0,
                        usageBandwidth: 0,
                        usageRealtime: 0,
                        usageRealtimeMessages: 0,
                        usageRealtimeBandwidth: 0,
                        additionalMembers: 0,
                        additionalMemberAmount: 0,
                        additionalStorageAmount: 0,
                        additionalUsersAmount: 0,
                        additionalExecutionsAmount: 0,
                        additionalBandwidthAmount: 0,
                        additionalRealtimeAmount: 0,
                        plan: '',
                        amount: 0,
                        breakdown: [],
                        resources: [],
                    },
                    properties: {
                        breakdown: {
                            items: 'aggregationBreakdown',
                        },
                        resources: {
                            items: 'usageResources',
                        },
                    },
                },
                aggregationBreakdown: {
                    defaults: {
                        $id: '',
                        name: '',
                        region: 'fra',
                        amount: 0,
                        resources: [],
                    },
                    properties: {
                        resources: {
                            items: 'usageResources',
                        },
                    },
                },
                usageResources: {
                    defaults: {
                        name: '',
                        value: 0,
                        amount: 0,
                        rate: 0,
                        desc: '',
                        resourceId: '',
                        type: '',
                        specification: '',
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Set a billing address for an organization.
     *
     * @param {string} params.organizationId - Organization ID
     * @param {string} params.billingAddressId - Unique ID of billing address
     * @throws {AppwriteException}
     * @returns {Promise<Models.Organization<Preferences>>}
     */
    setBillingAddress<
        Preferences extends Models.Preferences = Models.DefaultPreferences,
    >(params: {
        organizationId: string;
        billingAddressId: string;
    }): Promise<Models.Organization<Preferences>>;
    /**
     * Set a billing address for an organization.
     *
     * @param {string} organizationId - Organization ID
     * @param {string} billingAddressId - Unique ID of billing address
     * @throws {AppwriteException}
     * @returns {Promise<Models.Organization<Preferences>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    setBillingAddress<
        Preferences extends Models.Preferences = Models.DefaultPreferences,
    >(
        organizationId: string,
        billingAddressId: string,
    ): Promise<Models.Organization<Preferences>>;
    setBillingAddress<
        Preferences extends Models.Preferences = Models.DefaultPreferences,
    >(
        paramsOrFirst:
            { organizationId: string; billingAddressId: string } | string,
        ...rest: [string?]
    ): Promise<Models.Organization<Preferences>> {
        let params: { organizationId: string; billingAddressId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                organizationId: string;
                billingAddressId: string;
            };
        } else {
            params = {
                organizationId: paramsOrFirst as string,
                billingAddressId: rest[0] as string,
            };
        }

        const organizationId = params.organizationId;
        const billingAddressId = params.billingAddressId;

        if (typeof organizationId === 'undefined' || organizationId === '') {
            throw new AppwriteException(
                'Missing required parameter: "organizationId"',
            );
        }
        if (typeof billingAddressId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "billingAddressId"',
            );
        }
        const apiPath =
            '/organizations/{organizationId}/billing-address'.replace(
                '{organizationId}',
                encodeURIComponent(String(organizationId)),
            );
        const apiPayload: Payload = {};
        if (typeof billingAddressId !== 'undefined') {
            apiPayload['billingAddressId'] = billingAddressId;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        const request = this.client.call('patch', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'organization',
            models: {
                organization: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        name: '',
                        total: 0,
                        budgetAlerts: [75],
                        billingPlan: 'tier-0',
                        billingPlanId: 'tier-0',
                        billingEmail: '',
                        status: 'draft',
                        markedForDeletion: false,
                        platform: 'appwrite',
                        projects: [],
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
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
        paramsOrFirst: { organizationId: string } | string,
    ): Promise<{}> {
        let params: { organizationId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as { organizationId: string };
        } else {
            params = {
                organizationId: paramsOrFirst as string,
            };
        }

        const organizationId = params.organizationId;

        if (typeof organizationId === 'undefined' || organizationId === '') {
            throw new AppwriteException(
                'Missing required parameter: "organizationId"',
            );
        }
        const apiPath =
            '/organizations/{organizationId}/billing-address'.replace(
                '{organizationId}',
                encodeURIComponent(String(organizationId)),
            );
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('delete', uri, apiHeaders, apiPayload);
    }

    /**
     * Get a billing address using it's ID.
     *
     * @param {string} params.organizationId - Organization ID
     * @param {string} params.billingAddressId - Unique ID of billing address
     * @throws {AppwriteException}
     * @returns {Promise<Models.BillingAddress>}
     */
    getBillingAddress(params: {
        organizationId: string;
        billingAddressId: string;
    }): Promise<Models.BillingAddress>;
    /**
     * Get a billing address using it's ID.
     *
     * @param {string} organizationId - Organization ID
     * @param {string} billingAddressId - Unique ID of billing address
     * @throws {AppwriteException}
     * @returns {Promise<Models.BillingAddress>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getBillingAddress(
        organizationId: string,
        billingAddressId: string,
    ): Promise<Models.BillingAddress>;
    getBillingAddress(
        paramsOrFirst:
            { organizationId: string; billingAddressId: string } | string,
        ...rest: [string?]
    ): Promise<Models.BillingAddress> {
        let params: { organizationId: string; billingAddressId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                organizationId: string;
                billingAddressId: string;
            };
        } else {
            params = {
                organizationId: paramsOrFirst as string,
                billingAddressId: rest[0] as string,
            };
        }

        const organizationId = params.organizationId;
        const billingAddressId = params.billingAddressId;

        if (typeof organizationId === 'undefined' || organizationId === '') {
            throw new AppwriteException(
                'Missing required parameter: "organizationId"',
            );
        }
        if (
            typeof billingAddressId === 'undefined' ||
            billingAddressId === ''
        ) {
            throw new AppwriteException(
                'Missing required parameter: "billingAddressId"',
            );
        }
        const apiPath =
            '/organizations/{organizationId}/billing-addresses/{billingAddressId}'
                .replace(
                    '{organizationId}',
                    encodeURIComponent(String(organizationId)),
                )
                .replace(
                    '{billingAddressId}',
                    encodeURIComponent(String(billingAddressId)),
                );
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            accept: 'application/json',
        };

        const request = this.client.call('get', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'billingAddress',
            models: {
                billingAddress: {
                    defaults: {
                        $id: '',
                        userId: '',
                        streetAddress: '',
                        country: '',
                        city: '',
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Set the current billing email for the organization.
     *
     * @param {string} params.organizationId - Organization ID
     * @param {string} params.billingEmail - Billing email for the organization.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Organization<Preferences>>}
     */
    setBillingEmail<
        Preferences extends Models.Preferences = Models.DefaultPreferences,
    >(params: {
        organizationId: string;
        billingEmail: string;
    }): Promise<Models.Organization<Preferences>>;
    /**
     * Set the current billing email for the organization.
     *
     * @param {string} organizationId - Organization ID
     * @param {string} billingEmail - Billing email for the organization.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Organization<Preferences>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    setBillingEmail<
        Preferences extends Models.Preferences = Models.DefaultPreferences,
    >(
        organizationId: string,
        billingEmail: string,
    ): Promise<Models.Organization<Preferences>>;
    setBillingEmail<
        Preferences extends Models.Preferences = Models.DefaultPreferences,
    >(
        paramsOrFirst:
            { organizationId: string; billingEmail: string } | string,
        ...rest: [string?]
    ): Promise<Models.Organization<Preferences>> {
        let params: { organizationId: string; billingEmail: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                organizationId: string;
                billingEmail: string;
            };
        } else {
            params = {
                organizationId: paramsOrFirst as string,
                billingEmail: rest[0] as string,
            };
        }

        const organizationId = params.organizationId;
        const billingEmail = params.billingEmail;

        if (typeof organizationId === 'undefined' || organizationId === '') {
            throw new AppwriteException(
                'Missing required parameter: "organizationId"',
            );
        }
        if (typeof billingEmail === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "billingEmail"',
            );
        }
        const apiPath = '/organizations/{organizationId}/billing-email'.replace(
            '{organizationId}',
            encodeURIComponent(String(organizationId)),
        );
        const apiPayload: Payload = {};
        if (typeof billingEmail !== 'undefined') {
            apiPayload['billingEmail'] = billingEmail;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        const request = this.client.call('patch', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'organization',
            models: {
                organization: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        name: '',
                        total: 0,
                        budgetAlerts: [75],
                        billingPlan: 'tier-0',
                        billingPlanId: 'tier-0',
                        billingEmail: '',
                        status: 'draft',
                        markedForDeletion: false,
                        platform: 'appwrite',
                        projects: [],
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Update the budget limit for an organization.
     *
     * @param {string} params.organizationId - Organization Unique ID
     * @param {number | null} params.budget - Budget limit for additional usage set for the organization
     * @param {number[]} params.alerts - Budget alert limit percentage
     * @throws {AppwriteException}
     * @returns {Promise<Models.Organization<Preferences>>}
     */
    updateBudget<
        Preferences extends Models.Preferences = Models.DefaultPreferences,
    >(params: {
        organizationId: string;
        budget?: number | null;
        alerts?: number[];
    }): Promise<Models.Organization<Preferences>>;
    /**
     * Update the budget limit for an organization.
     *
     * @param {string} organizationId - Organization Unique ID
     * @param {number | null} budget - Budget limit for additional usage set for the organization
     * @param {number[]} alerts - Budget alert limit percentage
     * @throws {AppwriteException}
     * @returns {Promise<Models.Organization<Preferences>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateBudget<
        Preferences extends Models.Preferences = Models.DefaultPreferences,
    >(
        organizationId: string,
        budget?: number | null,
        alerts?: number[],
    ): Promise<Models.Organization<Preferences>>;
    updateBudget<
        Preferences extends Models.Preferences = Models.DefaultPreferences,
    >(
        paramsOrFirst:
            | {
                  organizationId: string;
                  budget?: number | null;
                  alerts?: number[];
              }
            | string,
        ...rest: [(number | null)?, number[]?]
    ): Promise<Models.Organization<Preferences>> {
        let params: {
            organizationId: string;
            budget?: number | null;
            alerts?: number[];
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                organizationId: string;
                budget?: number | null;
                alerts?: number[];
            };
        } else {
            params = {
                organizationId: paramsOrFirst as string,
                budget: rest[0] as number | null,
                alerts: rest[1] as number[],
            };
        }

        const organizationId = params.organizationId;
        const budget = params.budget;
        const alerts = params.alerts;

        if (typeof organizationId === 'undefined' || organizationId === '') {
            throw new AppwriteException(
                'Missing required parameter: "organizationId"',
            );
        }
        if (typeof budget === 'undefined') {
            throw new AppwriteException('Missing required parameter: "budget"');
        }
        const apiPath = '/organizations/{organizationId}/budget'.replace(
            '{organizationId}',
            encodeURIComponent(String(organizationId)),
        );
        const apiPayload: Payload = {};
        if (typeof budget !== 'undefined') {
            apiPayload['budget'] = budget;
        }
        if (typeof alerts !== 'undefined') {
            apiPayload['alerts'] = alerts;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        const request = this.client.call('patch', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'organization',
            models: {
                organization: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        name: '',
                        total: 0,
                        budgetAlerts: [75],
                        billingPlan: 'tier-0',
                        billingPlanId: 'tier-0',
                        billingEmail: '',
                        status: 'draft',
                        markedForDeletion: false,
                        platform: 'appwrite',
                        projects: [],
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * List all credits for an organization.
     *
     *
     * @param {string} params.organizationId - Organization ID
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/databases#querying-documents). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: teamId, couponId, credits, expiration, status
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.CreditList>}
     */
    listCredits(params: {
        organizationId: string;
        queries?: string[];
        total?: boolean;
    }): Promise<Models.CreditList>;
    /**
     * List all credits for an organization.
     *
     *
     * @param {string} organizationId - Organization ID
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/databases#querying-documents). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: teamId, couponId, credits, expiration, status
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.CreditList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listCredits(
        organizationId: string,
        queries?: string[],
        total?: boolean,
    ): Promise<Models.CreditList>;
    listCredits(
        paramsOrFirst:
            | { organizationId: string; queries?: string[]; total?: boolean }
            | string,
        ...rest: [string[]?, boolean?]
    ): Promise<Models.CreditList> {
        let params: {
            organizationId: string;
            queries?: string[];
            total?: boolean;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                organizationId: string;
                queries?: string[];
                total?: boolean;
            };
        } else {
            params = {
                organizationId: paramsOrFirst as string,
                queries: rest[0] as string[],
                total: rest[1] as boolean,
            };
        }

        const organizationId = params.organizationId;
        const queries = params.queries;
        const total = params.total;

        if (typeof organizationId === 'undefined' || organizationId === '') {
            throw new AppwriteException(
                'Missing required parameter: "organizationId"',
            );
        }
        const apiPath = '/organizations/{organizationId}/credits'.replace(
            '{organizationId}',
            encodeURIComponent(String(organizationId)),
        );
        const apiPayload: Payload = {};
        if (typeof queries !== 'undefined') {
            apiPayload['queries'] = queries;
        }
        if (typeof total !== 'undefined') {
            apiPayload['total'] = total;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            accept: 'application/json',
        };

        const request = this.client.call('get', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'creditList',
            models: {
                creditList: {
                    defaults: {
                        credits: [],
                        total: 0,
                        available: 0,
                    },
                    properties: {
                        credits: {
                            items: 'credit',
                        },
                    },
                },
                credit: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        $permissions: [],
                        couponId: '',
                        userId: '',
                        teamId: '',
                        credits: 0,
                        total: 0,
                        expiration: '',
                        status: '',
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Add credit to an organization using a coupon.
     *
     * @param {string} params.organizationId - Organization ID
     * @param {string} params.couponId - ID of the coupon
     * @throws {AppwriteException}
     * @returns {Promise<Models.Credit>}
     */
    addCredit(params: {
        organizationId: string;
        couponId: string;
    }): Promise<Models.Credit>;
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
        paramsOrFirst: { organizationId: string; couponId: string } | string,
        ...rest: [string?]
    ): Promise<Models.Credit> {
        let params: { organizationId: string; couponId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                organizationId: string;
                couponId: string;
            };
        } else {
            params = {
                organizationId: paramsOrFirst as string,
                couponId: rest[0] as string,
            };
        }

        const organizationId = params.organizationId;
        const couponId = params.couponId;

        if (typeof organizationId === 'undefined' || organizationId === '') {
            throw new AppwriteException(
                'Missing required parameter: "organizationId"',
            );
        }
        if (typeof couponId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "couponId"',
            );
        }
        const apiPath = '/organizations/{organizationId}/credits'.replace(
            '{organizationId}',
            encodeURIComponent(String(organizationId)),
        );
        const apiPayload: Payload = {};
        if (typeof couponId !== 'undefined') {
            apiPayload['couponId'] = couponId;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        const request = this.client.call('post', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'credit',
            models: {
                credit: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        $permissions: [],
                        couponId: '',
                        userId: '',
                        teamId: '',
                        credits: 0,
                        total: 0,
                        expiration: '',
                        status: '',
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Get total available valid credits for an organization.
     *
     * @param {string} params.organizationId - Organization ID
     * @throws {AppwriteException}
     * @returns {Promise<Models.CreditAvailable>}
     */
    getAvailableCredits(params: {
        organizationId: string;
    }): Promise<Models.CreditAvailable>;
    /**
     * Get total available valid credits for an organization.
     *
     * @param {string} organizationId - Organization ID
     * @throws {AppwriteException}
     * @returns {Promise<Models.CreditAvailable>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getAvailableCredits(
        organizationId: string,
    ): Promise<Models.CreditAvailable>;
    getAvailableCredits(
        paramsOrFirst: { organizationId: string } | string,
    ): Promise<Models.CreditAvailable> {
        let params: { organizationId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as { organizationId: string };
        } else {
            params = {
                organizationId: paramsOrFirst as string,
            };
        }

        const organizationId = params.organizationId;

        if (typeof organizationId === 'undefined' || organizationId === '') {
            throw new AppwriteException(
                'Missing required parameter: "organizationId"',
            );
        }
        const apiPath =
            '/organizations/{organizationId}/credits/available'.replace(
                '{organizationId}',
                encodeURIComponent(String(organizationId)),
            );
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            accept: 'application/json',
        };

        const request = this.client.call('get', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'creditAvailable',
            models: {
                creditAvailable: {
                    defaults: {
                        available: 0,
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Get credit details.
     *
     * @param {string} params.organizationId - Organization ID
     * @param {string} params.creditId - Credit Unique ID
     * @throws {AppwriteException}
     * @returns {Promise<Models.Credit>}
     */
    getCredit(params: {
        organizationId: string;
        creditId: string;
    }): Promise<Models.Credit>;
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
        paramsOrFirst: { organizationId: string; creditId: string } | string,
        ...rest: [string?]
    ): Promise<Models.Credit> {
        let params: { organizationId: string; creditId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                organizationId: string;
                creditId: string;
            };
        } else {
            params = {
                organizationId: paramsOrFirst as string,
                creditId: rest[0] as string,
            };
        }

        const organizationId = params.organizationId;
        const creditId = params.creditId;

        if (typeof organizationId === 'undefined' || organizationId === '') {
            throw new AppwriteException(
                'Missing required parameter: "organizationId"',
            );
        }
        if (typeof creditId === 'undefined' || creditId === '') {
            throw new AppwriteException(
                'Missing required parameter: "creditId"',
            );
        }
        const apiPath = '/organizations/{organizationId}/credits/{creditId}'
            .replace(
                '{organizationId}',
                encodeURIComponent(String(organizationId)),
            )
            .replace('{creditId}', encodeURIComponent(String(creditId)));
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            accept: 'application/json',
        };

        const request = this.client.call('get', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'credit',
            models: {
                credit: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        $permissions: [],
                        couponId: '',
                        userId: '',
                        teamId: '',
                        credits: 0,
                        total: 0,
                        expiration: '',
                        status: '',
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Get estimation for deleting an organization.
     *
     * @param {string} params.organizationId - Team ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.EstimationDeleteOrganization>}
     */
    estimationDeleteOrganization(params: {
        organizationId: string;
    }): Promise<Models.EstimationDeleteOrganization>;
    /**
     * Get estimation for deleting an organization.
     *
     * @param {string} organizationId - Team ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.EstimationDeleteOrganization>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    estimationDeleteOrganization(
        organizationId: string,
    ): Promise<Models.EstimationDeleteOrganization>;
    estimationDeleteOrganization(
        paramsOrFirst: { organizationId: string } | string,
    ): Promise<Models.EstimationDeleteOrganization> {
        let params: { organizationId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as { organizationId: string };
        } else {
            params = {
                organizationId: paramsOrFirst as string,
            };
        }

        const organizationId = params.organizationId;

        if (typeof organizationId === 'undefined' || organizationId === '') {
            throw new AppwriteException(
                'Missing required parameter: "organizationId"',
            );
        }
        const apiPath =
            '/organizations/{organizationId}/estimations/delete-organization'.replace(
                '{organizationId}',
                encodeURIComponent(String(organizationId)),
            );
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        const request = this.client.call('patch', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'estimationDeleteOrganization',
            models: {
                estimationDeleteOrganization: {
                    defaults: {
                        unpaidInvoices: [],
                    },
                    properties: {
                        unpaidInvoices: {
                            items: 'invoice',
                        },
                    },
                },
                invoice: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        $permissions: [],
                        teamId: '',
                        aggregationId: '',
                        plan: 'tier-0',
                        usage: [],
                        amount: 0,
                        tax: 0,
                        taxAmount: 0,
                        vat: 0,
                        vatAmount: 0,
                        grossAmount: 0,
                        creditsUsed: 0,
                        currency: 'USD',
                        status: '',
                        type: 'subscription',
                        from: '',
                        to: '',
                    },
                    properties: {
                        usage: {
                            items: 'usageResources',
                        },
                    },
                },
                usageResources: {
                    defaults: {
                        name: '',
                        value: 0,
                        amount: 0,
                        rate: 0,
                        desc: '',
                        resourceId: '',
                        type: '',
                        specification: '',
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Get estimation for updating the organization plan.
     *
     * @param {string} params.organizationId - Organization ID
     * @param {string} params.billingPlan - Organization billing plan chosen
     * @param {string[]} params.invites - Additional member invites
     * @param {string | null} params.couponId - Coupon id
     * @throws {AppwriteException}
     * @returns {Promise<Models.EstimationUpdatePlan>}
     */
    estimationUpdatePlan(params: {
        organizationId: string;
        billingPlan: string;
        invites?: string[];
        couponId?: string | null;
    }): Promise<Models.EstimationUpdatePlan>;
    /**
     * Get estimation for updating the organization plan.
     *
     * @param {string} organizationId - Organization ID
     * @param {string} billingPlan - Organization billing plan chosen
     * @param {string[]} invites - Additional member invites
     * @param {string | null} couponId - Coupon id
     * @throws {AppwriteException}
     * @returns {Promise<Models.EstimationUpdatePlan>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    estimationUpdatePlan(
        organizationId: string,
        billingPlan: string,
        invites?: string[],
        couponId?: string | null,
    ): Promise<Models.EstimationUpdatePlan>;
    estimationUpdatePlan(
        paramsOrFirst:
            | {
                  organizationId: string;
                  billingPlan: string;
                  invites?: string[];
                  couponId?: string | null;
              }
            | string,
        ...rest: [string?, string[]?, (string | null)?]
    ): Promise<Models.EstimationUpdatePlan> {
        let params: {
            organizationId: string;
            billingPlan: string;
            invites?: string[];
            couponId?: string | null;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                organizationId: string;
                billingPlan: string;
                invites?: string[];
                couponId?: string | null;
            };
        } else {
            params = {
                organizationId: paramsOrFirst as string,
                billingPlan: rest[0] as string,
                invites: rest[1] as string[],
                couponId: rest[2] as string | null,
            };
        }

        const organizationId = params.organizationId;
        const billingPlan = params.billingPlan;
        const invites = params.invites;
        const couponId = params.couponId;

        if (typeof organizationId === 'undefined' || organizationId === '') {
            throw new AppwriteException(
                'Missing required parameter: "organizationId"',
            );
        }
        if (typeof billingPlan === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "billingPlan"',
            );
        }
        const apiPath =
            '/organizations/{organizationId}/estimations/update-plan'.replace(
                '{organizationId}',
                encodeURIComponent(String(organizationId)),
            );
        const apiPayload: Payload = {};
        if (typeof billingPlan !== 'undefined') {
            apiPayload['billingPlan'] = billingPlan;
        }
        if (typeof invites !== 'undefined') {
            apiPayload['invites'] = invites;
        }
        if (typeof couponId !== 'undefined') {
            apiPayload['couponId'] = couponId;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        const request = this.client.call('patch', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'estimationUpdatePlan',
            models: {
                estimationUpdatePlan: {
                    defaults: {
                        amount: 0,
                        grossAmount: 0,
                        credits: 0,
                        items: [],
                        discounts: [],
                        trialDays: 0,
                        organizationCredits: 0,
                    },
                    properties: {
                        items: {
                            items: 'estimation_item',
                        },
                        discounts: {
                            items: 'estimation_item',
                        },
                    },
                },
                estimation_item: {
                    defaults: {
                        label: '',
                        value: 0,
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
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
    createDowngradeFeedback(params: {
        organizationId: string;
        reason: string;
        message: string;
        fromPlanId: string;
        toPlanId: string;
    }): Promise<Models.DowngradeFeedback>;
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
    createDowngradeFeedback(
        organizationId: string,
        reason: string,
        message: string,
        fromPlanId: string,
        toPlanId: string,
    ): Promise<Models.DowngradeFeedback>;
    createDowngradeFeedback(
        paramsOrFirst:
            | {
                  organizationId: string;
                  reason: string;
                  message: string;
                  fromPlanId: string;
                  toPlanId: string;
              }
            | string,
        ...rest: [string?, string?, string?, string?]
    ): Promise<Models.DowngradeFeedback> {
        let params: {
            organizationId: string;
            reason: string;
            message: string;
            fromPlanId: string;
            toPlanId: string;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                organizationId: string;
                reason: string;
                message: string;
                fromPlanId: string;
                toPlanId: string;
            };
        } else {
            params = {
                organizationId: paramsOrFirst as string,
                reason: rest[0] as string,
                message: rest[1] as string,
                fromPlanId: rest[2] as string,
                toPlanId: rest[3] as string,
            };
        }

        const organizationId = params.organizationId;
        const reason = params.reason;
        const message = params.message;
        const fromPlanId = params.fromPlanId;
        const toPlanId = params.toPlanId;

        if (typeof organizationId === 'undefined' || organizationId === '') {
            throw new AppwriteException(
                'Missing required parameter: "organizationId"',
            );
        }
        if (typeof reason === 'undefined') {
            throw new AppwriteException('Missing required parameter: "reason"');
        }
        if (typeof message === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "message"',
            );
        }
        if (typeof fromPlanId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "fromPlanId"',
            );
        }
        if (typeof toPlanId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "toPlanId"',
            );
        }
        const apiPath =
            '/organizations/{organizationId}/feedbacks/downgrade'.replace(
                '{organizationId}',
                encodeURIComponent(String(organizationId)),
            );
        const apiPayload: Payload = {};
        if (typeof reason !== 'undefined') {
            apiPayload['reason'] = reason;
        }
        if (typeof message !== 'undefined') {
            apiPayload['message'] = message;
        }
        if (typeof fromPlanId !== 'undefined') {
            apiPayload['fromPlanId'] = fromPlanId;
        }
        if (typeof toPlanId !== 'undefined') {
            apiPayload['toPlanId'] = toPlanId;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        const request = this.client.call('post', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'downgradeFeedback',
            models: {
                downgradeFeedback: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        title: '',
                        message: '',
                        fromPlanId: '',
                        toPlanId: '',
                        teamId: '',
                        userId: '',
                        version: '',
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * List all invoices for an organization.
     *
     * @param {string} params.organizationId - Organization ID
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/databases#querying-documents). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: teamId, aggregationId, type, amount, currency, from, to, dueAt, attempts, status, grossAmount
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.InvoiceList>}
     */
    listInvoices(params: {
        organizationId: string;
        queries?: string[];
        total?: boolean;
    }): Promise<Models.InvoiceList>;
    /**
     * List all invoices for an organization.
     *
     * @param {string} organizationId - Organization ID
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/databases#querying-documents). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: teamId, aggregationId, type, amount, currency, from, to, dueAt, attempts, status, grossAmount
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.InvoiceList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listInvoices(
        organizationId: string,
        queries?: string[],
        total?: boolean,
    ): Promise<Models.InvoiceList>;
    listInvoices(
        paramsOrFirst:
            | { organizationId: string; queries?: string[]; total?: boolean }
            | string,
        ...rest: [string[]?, boolean?]
    ): Promise<Models.InvoiceList> {
        let params: {
            organizationId: string;
            queries?: string[];
            total?: boolean;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                organizationId: string;
                queries?: string[];
                total?: boolean;
            };
        } else {
            params = {
                organizationId: paramsOrFirst as string,
                queries: rest[0] as string[],
                total: rest[1] as boolean,
            };
        }

        const organizationId = params.organizationId;
        const queries = params.queries;
        const total = params.total;

        if (typeof organizationId === 'undefined' || organizationId === '') {
            throw new AppwriteException(
                'Missing required parameter: "organizationId"',
            );
        }
        const apiPath = '/organizations/{organizationId}/invoices'.replace(
            '{organizationId}',
            encodeURIComponent(String(organizationId)),
        );
        const apiPayload: Payload = {};
        if (typeof queries !== 'undefined') {
            apiPayload['queries'] = queries;
        }
        if (typeof total !== 'undefined') {
            apiPayload['total'] = total;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            accept: 'application/json',
        };

        const request = this.client.call('get', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'invoiceList',
            models: {
                invoiceList: {
                    defaults: {
                        total: 0,
                        invoices: [],
                    },
                    properties: {
                        invoices: {
                            items: 'invoice',
                        },
                    },
                },
                invoice: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        $permissions: [],
                        teamId: '',
                        aggregationId: '',
                        plan: 'tier-0',
                        usage: [],
                        amount: 0,
                        tax: 0,
                        taxAmount: 0,
                        vat: 0,
                        vatAmount: 0,
                        grossAmount: 0,
                        creditsUsed: 0,
                        currency: 'USD',
                        status: '',
                        type: 'subscription',
                        from: '',
                        to: '',
                    },
                    properties: {
                        usage: {
                            items: 'usageResources',
                        },
                    },
                },
                usageResources: {
                    defaults: {
                        name: '',
                        value: 0,
                        amount: 0,
                        rate: 0,
                        desc: '',
                        resourceId: '',
                        type: '',
                        specification: '',
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Get an invoice by its unique ID.
     *
     * @param {string} params.organizationId - Organization ID
     * @param {string} params.invoiceId - Invoice unique ID
     * @throws {AppwriteException}
     * @returns {Promise<Models.Invoice>}
     */
    getInvoice(params: {
        organizationId: string;
        invoiceId: string;
    }): Promise<Models.Invoice>;
    /**
     * Get an invoice by its unique ID.
     *
     * @param {string} organizationId - Organization ID
     * @param {string} invoiceId - Invoice unique ID
     * @throws {AppwriteException}
     * @returns {Promise<Models.Invoice>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getInvoice(
        organizationId: string,
        invoiceId: string,
    ): Promise<Models.Invoice>;
    getInvoice(
        paramsOrFirst: { organizationId: string; invoiceId: string } | string,
        ...rest: [string?]
    ): Promise<Models.Invoice> {
        let params: { organizationId: string; invoiceId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                organizationId: string;
                invoiceId: string;
            };
        } else {
            params = {
                organizationId: paramsOrFirst as string,
                invoiceId: rest[0] as string,
            };
        }

        const organizationId = params.organizationId;
        const invoiceId = params.invoiceId;

        if (typeof organizationId === 'undefined' || organizationId === '') {
            throw new AppwriteException(
                'Missing required parameter: "organizationId"',
            );
        }
        if (typeof invoiceId === 'undefined' || invoiceId === '') {
            throw new AppwriteException(
                'Missing required parameter: "invoiceId"',
            );
        }
        const apiPath = '/organizations/{organizationId}/invoices/{invoiceId}'
            .replace(
                '{organizationId}',
                encodeURIComponent(String(organizationId)),
            )
            .replace('{invoiceId}', encodeURIComponent(String(invoiceId)));
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            accept: 'application/json',
        };

        const request = this.client.call('get', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'invoice',
            models: {
                invoice: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        $permissions: [],
                        teamId: '',
                        aggregationId: '',
                        plan: 'tier-0',
                        usage: [],
                        amount: 0,
                        tax: 0,
                        taxAmount: 0,
                        vat: 0,
                        vatAmount: 0,
                        grossAmount: 0,
                        creditsUsed: 0,
                        currency: 'USD',
                        status: '',
                        type: 'subscription',
                        from: '',
                        to: '',
                    },
                    properties: {
                        usage: {
                            items: 'usageResources',
                        },
                    },
                },
                usageResources: {
                    defaults: {
                        name: '',
                        value: 0,
                        amount: 0,
                        rate: 0,
                        desc: '',
                        resourceId: '',
                        type: '',
                        specification: '',
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Download invoice in PDF
     *
     * @param {string} params.organizationId - Organization ID
     * @param {string} params.invoiceId - Invoice unique ID
     * @throws {AppwriteException}
     * @returns {string}
     */
    getInvoiceDownload(params: {
        organizationId: string;
        invoiceId: string;
    }): string;
    /**
     * Download invoice in PDF
     *
     * @param {string} organizationId - Organization ID
     * @param {string} invoiceId - Invoice unique ID
     * @throws {AppwriteException}
     * @returns {string}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getInvoiceDownload(organizationId: string, invoiceId: string): string;
    getInvoiceDownload(
        paramsOrFirst: { organizationId: string; invoiceId: string } | string,
        ...rest: [string?]
    ): string {
        let params: { organizationId: string; invoiceId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                organizationId: string;
                invoiceId: string;
            };
        } else {
            params = {
                organizationId: paramsOrFirst as string,
                invoiceId: rest[0] as string,
            };
        }

        const organizationId = params.organizationId;
        const invoiceId = params.invoiceId;

        if (typeof organizationId === 'undefined' || organizationId === '') {
            throw new AppwriteException(
                'Missing required parameter: "organizationId"',
            );
        }
        if (typeof invoiceId === 'undefined' || invoiceId === '') {
            throw new AppwriteException(
                'Missing required parameter: "invoiceId"',
            );
        }
        const apiPath =
            '/organizations/{organizationId}/invoices/{invoiceId}/download'
                .replace(
                    '{organizationId}',
                    encodeURIComponent(String(organizationId)),
                )
                .replace('{invoiceId}', encodeURIComponent(String(invoiceId)));
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        apiPayload['project'] = this.client.config.project;
        apiPayload['impersonateuserid'] = this.client.config.impersonateuserid;

        for (const [key, value] of Object.entries(Client.flatten(apiPayload))) {
            uri.searchParams.append(key, value);
        }

        return uri.toString();
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
    createInvoicePayment(params: {
        organizationId: string;
        invoiceId: string;
        paymentMethodId: string;
    }): Promise<Models.Invoice>;
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
    createInvoicePayment(
        organizationId: string,
        invoiceId: string,
        paymentMethodId: string,
    ): Promise<Models.Invoice>;
    createInvoicePayment(
        paramsOrFirst:
            | {
                  organizationId: string;
                  invoiceId: string;
                  paymentMethodId: string;
              }
            | string,
        ...rest: [string?, string?]
    ): Promise<Models.Invoice> {
        let params: {
            organizationId: string;
            invoiceId: string;
            paymentMethodId: string;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                organizationId: string;
                invoiceId: string;
                paymentMethodId: string;
            };
        } else {
            params = {
                organizationId: paramsOrFirst as string,
                invoiceId: rest[0] as string,
                paymentMethodId: rest[1] as string,
            };
        }

        const organizationId = params.organizationId;
        const invoiceId = params.invoiceId;
        const paymentMethodId = params.paymentMethodId;

        if (typeof organizationId === 'undefined' || organizationId === '') {
            throw new AppwriteException(
                'Missing required parameter: "organizationId"',
            );
        }
        if (typeof invoiceId === 'undefined' || invoiceId === '') {
            throw new AppwriteException(
                'Missing required parameter: "invoiceId"',
            );
        }
        if (typeof paymentMethodId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "paymentMethodId"',
            );
        }
        const apiPath =
            '/organizations/{organizationId}/invoices/{invoiceId}/payments'
                .replace(
                    '{organizationId}',
                    encodeURIComponent(String(organizationId)),
                )
                .replace('{invoiceId}', encodeURIComponent(String(invoiceId)));
        const apiPayload: Payload = {};
        if (typeof paymentMethodId !== 'undefined') {
            apiPayload['paymentMethodId'] = paymentMethodId;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        const request = this.client.call('post', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'invoice',
            models: {
                invoice: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        $permissions: [],
                        teamId: '',
                        aggregationId: '',
                        plan: 'tier-0',
                        usage: [],
                        amount: 0,
                        tax: 0,
                        taxAmount: 0,
                        vat: 0,
                        vatAmount: 0,
                        grossAmount: 0,
                        creditsUsed: 0,
                        currency: 'USD',
                        status: '',
                        type: 'subscription',
                        from: '',
                        to: '',
                    },
                    properties: {
                        usage: {
                            items: 'usageResources',
                        },
                    },
                },
                usageResources: {
                    defaults: {
                        name: '',
                        value: 0,
                        amount: 0,
                        rate: 0,
                        desc: '',
                        resourceId: '',
                        type: '',
                        specification: '',
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Validates the payment linked with the invoice and updates the invoice status if the payment status is changed.
     *
     * @param {string} params.organizationId - Organization ID
     * @param {string} params.invoiceId - Invoice unique ID
     * @throws {AppwriteException}
     * @returns {Promise<Models.Invoice>}
     */
    validateInvoice(params: {
        organizationId: string;
        invoiceId: string;
    }): Promise<Models.Invoice>;
    /**
     * Validates the payment linked with the invoice and updates the invoice status if the payment status is changed.
     *
     * @param {string} organizationId - Organization ID
     * @param {string} invoiceId - Invoice unique ID
     * @throws {AppwriteException}
     * @returns {Promise<Models.Invoice>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    validateInvoice(
        organizationId: string,
        invoiceId: string,
    ): Promise<Models.Invoice>;
    validateInvoice(
        paramsOrFirst: { organizationId: string; invoiceId: string } | string,
        ...rest: [string?]
    ): Promise<Models.Invoice> {
        let params: { organizationId: string; invoiceId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                organizationId: string;
                invoiceId: string;
            };
        } else {
            params = {
                organizationId: paramsOrFirst as string,
                invoiceId: rest[0] as string,
            };
        }

        const organizationId = params.organizationId;
        const invoiceId = params.invoiceId;

        if (typeof organizationId === 'undefined' || organizationId === '') {
            throw new AppwriteException(
                'Missing required parameter: "organizationId"',
            );
        }
        if (typeof invoiceId === 'undefined' || invoiceId === '') {
            throw new AppwriteException(
                'Missing required parameter: "invoiceId"',
            );
        }
        const apiPath =
            '/organizations/{organizationId}/invoices/{invoiceId}/status'
                .replace(
                    '{organizationId}',
                    encodeURIComponent(String(organizationId)),
                )
                .replace('{invoiceId}', encodeURIComponent(String(invoiceId)));
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        const request = this.client.call('patch', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'invoice',
            models: {
                invoice: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        $permissions: [],
                        teamId: '',
                        aggregationId: '',
                        plan: 'tier-0',
                        usage: [],
                        amount: 0,
                        tax: 0,
                        taxAmount: 0,
                        vat: 0,
                        vatAmount: 0,
                        grossAmount: 0,
                        creditsUsed: 0,
                        currency: 'USD',
                        status: '',
                        type: 'subscription',
                        from: '',
                        to: '',
                    },
                    properties: {
                        usage: {
                            items: 'usageResources',
                        },
                    },
                },
                usageResources: {
                    defaults: {
                        name: '',
                        value: 0,
                        amount: 0,
                        rate: 0,
                        desc: '',
                        resourceId: '',
                        type: '',
                        specification: '',
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * View invoice in PDF
     *
     * @param {string} params.organizationId - Organization ID
     * @param {string} params.invoiceId - Invoice unique ID
     * @throws {AppwriteException}
     * @returns {string}
     */
    getInvoiceView(params: {
        organizationId: string;
        invoiceId: string;
    }): string;
    /**
     * View invoice in PDF
     *
     * @param {string} organizationId - Organization ID
     * @param {string} invoiceId - Invoice unique ID
     * @throws {AppwriteException}
     * @returns {string}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getInvoiceView(organizationId: string, invoiceId: string): string;
    getInvoiceView(
        paramsOrFirst: { organizationId: string; invoiceId: string } | string,
        ...rest: [string?]
    ): string {
        let params: { organizationId: string; invoiceId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                organizationId: string;
                invoiceId: string;
            };
        } else {
            params = {
                organizationId: paramsOrFirst as string,
                invoiceId: rest[0] as string,
            };
        }

        const organizationId = params.organizationId;
        const invoiceId = params.invoiceId;

        if (typeof organizationId === 'undefined' || organizationId === '') {
            throw new AppwriteException(
                'Missing required parameter: "organizationId"',
            );
        }
        if (typeof invoiceId === 'undefined' || invoiceId === '') {
            throw new AppwriteException(
                'Missing required parameter: "invoiceId"',
            );
        }
        const apiPath =
            '/organizations/{organizationId}/invoices/{invoiceId}/view'
                .replace(
                    '{organizationId}',
                    encodeURIComponent(String(organizationId)),
                )
                .replace('{invoiceId}', encodeURIComponent(String(invoiceId)));
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        apiPayload['project'] = this.client.config.project;
        apiPayload['impersonateuserid'] = this.client.config.impersonateuserid;

        for (const [key, value] of Object.entries(Client.flatten(apiPayload))) {
            uri.searchParams.append(key, value);
        }

        return uri.toString();
    }

    /**
     * Set a organization's default payment method.
     *
     * @param {string} params.organizationId - Organization ID
     * @param {string} params.paymentMethodId - Unique ID of payment method
     * @throws {AppwriteException}
     * @returns {Promise<Models.Organization<Preferences>>}
     */
    setDefaultPaymentMethod<
        Preferences extends Models.Preferences = Models.DefaultPreferences,
    >(params: {
        organizationId: string;
        paymentMethodId: string;
    }): Promise<Models.Organization<Preferences>>;
    /**
     * Set a organization's default payment method.
     *
     * @param {string} organizationId - Organization ID
     * @param {string} paymentMethodId - Unique ID of payment method
     * @throws {AppwriteException}
     * @returns {Promise<Models.Organization<Preferences>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    setDefaultPaymentMethod<
        Preferences extends Models.Preferences = Models.DefaultPreferences,
    >(
        organizationId: string,
        paymentMethodId: string,
    ): Promise<Models.Organization<Preferences>>;
    setDefaultPaymentMethod<
        Preferences extends Models.Preferences = Models.DefaultPreferences,
    >(
        paramsOrFirst:
            { organizationId: string; paymentMethodId: string } | string,
        ...rest: [string?]
    ): Promise<Models.Organization<Preferences>> {
        let params: { organizationId: string; paymentMethodId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                organizationId: string;
                paymentMethodId: string;
            };
        } else {
            params = {
                organizationId: paramsOrFirst as string,
                paymentMethodId: rest[0] as string,
            };
        }

        const organizationId = params.organizationId;
        const paymentMethodId = params.paymentMethodId;

        if (typeof organizationId === 'undefined' || organizationId === '') {
            throw new AppwriteException(
                'Missing required parameter: "organizationId"',
            );
        }
        if (typeof paymentMethodId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "paymentMethodId"',
            );
        }
        const apiPath =
            '/organizations/{organizationId}/payment-method'.replace(
                '{organizationId}',
                encodeURIComponent(String(organizationId)),
            );
        const apiPayload: Payload = {};
        if (typeof paymentMethodId !== 'undefined') {
            apiPayload['paymentMethodId'] = paymentMethodId;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        const request = this.client.call('patch', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'organization',
            models: {
                organization: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        name: '',
                        total: 0,
                        budgetAlerts: [75],
                        billingPlan: 'tier-0',
                        billingPlanId: 'tier-0',
                        billingEmail: '',
                        status: 'draft',
                        markedForDeletion: false,
                        platform: 'appwrite',
                        projects: [],
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Delete the default payment method for an organization.
     *
     * @param {string} params.organizationId - Organization ID
     * @throws {AppwriteException}
     * @returns {Promise<Models.Organization<Preferences>>}
     */
    deleteDefaultPaymentMethod<
        Preferences extends Models.Preferences = Models.DefaultPreferences,
    >(params: {
        organizationId: string;
    }): Promise<Models.Organization<Preferences>>;
    /**
     * Delete the default payment method for an organization.
     *
     * @param {string} organizationId - Organization ID
     * @throws {AppwriteException}
     * @returns {Promise<Models.Organization<Preferences>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteDefaultPaymentMethod<
        Preferences extends Models.Preferences = Models.DefaultPreferences,
    >(organizationId: string): Promise<Models.Organization<Preferences>>;
    deleteDefaultPaymentMethod<
        Preferences extends Models.Preferences = Models.DefaultPreferences,
    >(
        paramsOrFirst: { organizationId: string } | string,
    ): Promise<Models.Organization<Preferences>> {
        let params: { organizationId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as { organizationId: string };
        } else {
            params = {
                organizationId: paramsOrFirst as string,
            };
        }

        const organizationId = params.organizationId;

        if (typeof organizationId === 'undefined' || organizationId === '') {
            throw new AppwriteException(
                'Missing required parameter: "organizationId"',
            );
        }
        const apiPath =
            '/organizations/{organizationId}/payment-method'.replace(
                '{organizationId}',
                encodeURIComponent(String(organizationId)),
            );
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        const request = this.client.call('delete', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'organization',
            models: {
                organization: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        name: '',
                        total: 0,
                        budgetAlerts: [75],
                        billingPlan: 'tier-0',
                        billingPlanId: 'tier-0',
                        billingEmail: '',
                        status: 'draft',
                        markedForDeletion: false,
                        platform: 'appwrite',
                        projects: [],
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
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
    setBackupPaymentMethod<
        Preferences extends Models.Preferences = Models.DefaultPreferences,
    >(params: {
        organizationId: string;
        paymentMethodId: string;
    }): Promise<Models.Organization<Preferences>>;
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
    setBackupPaymentMethod<
        Preferences extends Models.Preferences = Models.DefaultPreferences,
    >(
        organizationId: string,
        paymentMethodId: string,
    ): Promise<Models.Organization<Preferences>>;
    setBackupPaymentMethod<
        Preferences extends Models.Preferences = Models.DefaultPreferences,
    >(
        paramsOrFirst:
            { organizationId: string; paymentMethodId: string } | string,
        ...rest: [string?]
    ): Promise<Models.Organization<Preferences>> {
        let params: { organizationId: string; paymentMethodId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                organizationId: string;
                paymentMethodId: string;
            };
        } else {
            params = {
                organizationId: paramsOrFirst as string,
                paymentMethodId: rest[0] as string,
            };
        }

        const organizationId = params.organizationId;
        const paymentMethodId = params.paymentMethodId;

        if (typeof organizationId === 'undefined' || organizationId === '') {
            throw new AppwriteException(
                'Missing required parameter: "organizationId"',
            );
        }
        if (typeof paymentMethodId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "paymentMethodId"',
            );
        }
        const apiPath =
            '/organizations/{organizationId}/payment-method/backup'.replace(
                '{organizationId}',
                encodeURIComponent(String(organizationId)),
            );
        const apiPayload: Payload = {};
        if (typeof paymentMethodId !== 'undefined') {
            apiPayload['paymentMethodId'] = paymentMethodId;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        const request = this.client.call('patch', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'organization',
            models: {
                organization: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        name: '',
                        total: 0,
                        budgetAlerts: [75],
                        billingPlan: 'tier-0',
                        billingPlanId: 'tier-0',
                        billingEmail: '',
                        status: 'draft',
                        markedForDeletion: false,
                        platform: 'appwrite',
                        projects: [],
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Delete a backup payment method for an organization.
     *
     * @param {string} params.organizationId - Organization ID
     * @throws {AppwriteException}
     * @returns {Promise<Models.Organization<Preferences>>}
     */
    deleteBackupPaymentMethod<
        Preferences extends Models.Preferences = Models.DefaultPreferences,
    >(params: {
        organizationId: string;
    }): Promise<Models.Organization<Preferences>>;
    /**
     * Delete a backup payment method for an organization.
     *
     * @param {string} organizationId - Organization ID
     * @throws {AppwriteException}
     * @returns {Promise<Models.Organization<Preferences>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteBackupPaymentMethod<
        Preferences extends Models.Preferences = Models.DefaultPreferences,
    >(organizationId: string): Promise<Models.Organization<Preferences>>;
    deleteBackupPaymentMethod<
        Preferences extends Models.Preferences = Models.DefaultPreferences,
    >(
        paramsOrFirst: { organizationId: string } | string,
    ): Promise<Models.Organization<Preferences>> {
        let params: { organizationId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as { organizationId: string };
        } else {
            params = {
                organizationId: paramsOrFirst as string,
            };
        }

        const organizationId = params.organizationId;

        if (typeof organizationId === 'undefined' || organizationId === '') {
            throw new AppwriteException(
                'Missing required parameter: "organizationId"',
            );
        }
        const apiPath =
            '/organizations/{organizationId}/payment-method/backup'.replace(
                '{organizationId}',
                encodeURIComponent(String(organizationId)),
            );
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        const request = this.client.call('delete', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'organization',
            models: {
                organization: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        name: '',
                        total: 0,
                        budgetAlerts: [75],
                        billingPlan: 'tier-0',
                        billingPlanId: 'tier-0',
                        billingEmail: '',
                        status: 'draft',
                        markedForDeletion: false,
                        platform: 'appwrite',
                        projects: [],
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Get an organization's payment method using it's payment method ID.
     *
     * @param {string} params.organizationId - Organization ID
     * @param {string} params.paymentMethodId - Unique ID of payment method
     * @throws {AppwriteException}
     * @returns {Promise<Models.PaymentMethod>}
     */
    getPaymentMethod(params: {
        organizationId: string;
        paymentMethodId: string;
    }): Promise<Models.PaymentMethod>;
    /**
     * Get an organization's payment method using it's payment method ID.
     *
     * @param {string} organizationId - Organization ID
     * @param {string} paymentMethodId - Unique ID of payment method
     * @throws {AppwriteException}
     * @returns {Promise<Models.PaymentMethod>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getPaymentMethod(
        organizationId: string,
        paymentMethodId: string,
    ): Promise<Models.PaymentMethod>;
    getPaymentMethod(
        paramsOrFirst:
            { organizationId: string; paymentMethodId: string } | string,
        ...rest: [string?]
    ): Promise<Models.PaymentMethod> {
        let params: { organizationId: string; paymentMethodId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                organizationId: string;
                paymentMethodId: string;
            };
        } else {
            params = {
                organizationId: paramsOrFirst as string,
                paymentMethodId: rest[0] as string,
            };
        }

        const organizationId = params.organizationId;
        const paymentMethodId = params.paymentMethodId;

        if (typeof organizationId === 'undefined' || organizationId === '') {
            throw new AppwriteException(
                'Missing required parameter: "organizationId"',
            );
        }
        if (typeof paymentMethodId === 'undefined' || paymentMethodId === '') {
            throw new AppwriteException(
                'Missing required parameter: "paymentMethodId"',
            );
        }
        const apiPath =
            '/organizations/{organizationId}/payment-methods/{paymentMethodId}'
                .replace(
                    '{organizationId}',
                    encodeURIComponent(String(organizationId)),
                )
                .replace(
                    '{paymentMethodId}',
                    encodeURIComponent(String(paymentMethodId)),
                );
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            accept: 'application/json',
        };

        const request = this.client.call('get', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'paymentMethod',
            models: {
                paymentMethod: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        $permissions: [],
                        providerMethodId: '',
                        clientSecret: '',
                        providerUserId: '',
                        userId: '',
                        default: false,
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
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
        paramsOrFirst: { organizationId: string } | string,
    ): Promise<Models.BillingPlan> {
        let params: { organizationId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as { organizationId: string };
        } else {
            params = {
                organizationId: paramsOrFirst as string,
            };
        }

        const organizationId = params.organizationId;

        if (typeof organizationId === 'undefined' || organizationId === '') {
            throw new AppwriteException(
                'Missing required parameter: "organizationId"',
            );
        }
        const apiPath = '/organizations/{organizationId}/plan'.replace(
            '{organizationId}',
            encodeURIComponent(String(organizationId)),
        );
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            accept: 'application/json',
        };

        const request = this.client.call('get', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'billingPlan',
            models: {
                billingPlan: {
                    defaults: {
                        $id: '',
                        name: '',
                        desc: '',
                        order: 0,
                        price: 0,
                        trial: 0,
                        bandwidth: 0,
                        storage: 0,
                        imageTransformations: 0,
                        screenshotsGenerated: 0,
                        webhooks: 0,
                        wafRules: 0,
                        environments: 0,
                        projects: 0,
                        platforms: 0,
                        users: 0,
                        teams: 0,
                        databases: 0,
                        databasesReads: 0,
                        databasesWrites: 0,
                        databasesBatchSize: 0,
                        buckets: 0,
                        fileSize: 0,
                        functions: 0,
                        sites: 0,
                        executions: 0,
                        executionsRetentionCount: 1000,
                        deploymentRetention: 0,
                        deploymentRetentionMax: 0,
                        deploymentsRetentionCount: 0,
                        GBHours: 0,
                        realtime: 0,
                        realtimeMessages: 0,
                        messages: 0,
                        topics: 0,
                        authPhone: 0,
                        domains: 0,
                        usageLogs: 0,
                        projectInactivityDays: 0,
                        alertLimit: 80,
                        budgetCapEnabled: false,
                        customSmtp: false,
                        emailBranding: false,
                        requiresPaymentMethod: true,
                        requiresBillingAddress: false,
                        isAvailable: true,
                        selfService: true,
                        premiumSupport: true,
                        budgeting: true,
                        supportsMockNumbers: true,
                        supportsOrganizationRoles: true,
                        supportsCredits: false,
                        supportsDedicatedDatabases: false,
                        supportsDisposableEmailValidation: false,
                        supportsCanonicalEmailValidation: false,
                        supportsFreeEmailValidation: false,
                        supportsCorporateEmailValidation: false,
                        supportsProjectSpecificRoles: false,
                        usagePerProject: true,
                        deploymentSize: 0,
                        buildSize: 0,
                        functionsIntervalMinimum: 0,
                        functionsAllowCron: true,
                        databasesAllowEncrypt: false,
                        databaseComputeCredit: 0,
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Update the billing plan for an organization.
     *
     * @param {string} params.organizationId - Organization Unique ID
     * @param {string} params.billingPlan - Organization billing plan chosen
     * @param {string | null} params.paymentMethodId - Payment method ID. Required for pro plans when trial is not available and user doesn't have default payment method set.
     * @param {string} params.billingAddressId - Unique ID of billing address
     * @param {string[]} params.invites - Additional member invites
     * @param {string | null} params.couponId - Coupon id
     * @param {string | null} params.taxId - Tax Id associated to billing.
     * @param {number | null} params.budget - Budget limit for additional usage set for the organization
     * @throws {AppwriteException}
     * @returns {Promise<Models.Organization<Preferences>>}
     */
    updatePlan<
        Preferences extends Models.Preferences = Models.DefaultPreferences,
    >(params: {
        organizationId: string;
        billingPlan: string;
        paymentMethodId?: string | null;
        billingAddressId?: string;
        invites?: string[];
        couponId?: string | null;
        taxId?: string | null;
        budget?: number | null;
    }): Promise<Models.Organization<Preferences>>;
    /**
     * Update the billing plan for an organization.
     *
     * @param {string} organizationId - Organization Unique ID
     * @param {string} billingPlan - Organization billing plan chosen
     * @param {string | null} paymentMethodId - Payment method ID. Required for pro plans when trial is not available and user doesn't have default payment method set.
     * @param {string} billingAddressId - Unique ID of billing address
     * @param {string[]} invites - Additional member invites
     * @param {string | null} couponId - Coupon id
     * @param {string | null} taxId - Tax Id associated to billing.
     * @param {number | null} budget - Budget limit for additional usage set for the organization
     * @throws {AppwriteException}
     * @returns {Promise<Models.Organization<Preferences>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updatePlan<
        Preferences extends Models.Preferences = Models.DefaultPreferences,
    >(
        organizationId: string,
        billingPlan: string,
        paymentMethodId?: string | null,
        billingAddressId?: string,
        invites?: string[],
        couponId?: string | null,
        taxId?: string | null,
        budget?: number | null,
    ): Promise<Models.Organization<Preferences>>;
    updatePlan<
        Preferences extends Models.Preferences = Models.DefaultPreferences,
    >(
        paramsOrFirst:
            | {
                  organizationId: string;
                  billingPlan: string;
                  paymentMethodId?: string | null;
                  billingAddressId?: string;
                  invites?: string[];
                  couponId?: string | null;
                  taxId?: string | null;
                  budget?: number | null;
              }
            | string,
        ...rest: [
            string?,
            (string | null)?,
            string?,
            string[]?,
            (string | null)?,
            (string | null)?,
            (number | null)?,
        ]
    ): Promise<Models.Organization<Preferences>> {
        let params: {
            organizationId: string;
            billingPlan: string;
            paymentMethodId?: string | null;
            billingAddressId?: string;
            invites?: string[];
            couponId?: string | null;
            taxId?: string | null;
            budget?: number | null;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                organizationId: string;
                billingPlan: string;
                paymentMethodId?: string | null;
                billingAddressId?: string;
                invites?: string[];
                couponId?: string | null;
                taxId?: string | null;
                budget?: number | null;
            };
        } else {
            params = {
                organizationId: paramsOrFirst as string,
                billingPlan: rest[0] as string,
                paymentMethodId: rest[1] as string | null,
                billingAddressId: rest[2] as string,
                invites: rest[3] as string[],
                couponId: rest[4] as string | null,
                taxId: rest[5] as string | null,
                budget: rest[6] as number | null,
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

        if (typeof organizationId === 'undefined' || organizationId === '') {
            throw new AppwriteException(
                'Missing required parameter: "organizationId"',
            );
        }
        if (typeof billingPlan === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "billingPlan"',
            );
        }
        const apiPath = '/organizations/{organizationId}/plan'.replace(
            '{organizationId}',
            encodeURIComponent(String(organizationId)),
        );
        const apiPayload: Payload = {};
        if (typeof billingPlan !== 'undefined') {
            apiPayload['billingPlan'] = billingPlan;
        }
        if (typeof paymentMethodId !== 'undefined') {
            apiPayload['paymentMethodId'] = paymentMethodId;
        }
        if (typeof billingAddressId !== 'undefined') {
            apiPayload['billingAddressId'] = billingAddressId;
        }
        if (typeof invites !== 'undefined') {
            apiPayload['invites'] = invites;
        }
        if (typeof couponId !== 'undefined') {
            apiPayload['couponId'] = couponId;
        }
        if (typeof taxId !== 'undefined') {
            apiPayload['taxId'] = taxId;
        }
        if (typeof budget !== 'undefined') {
            apiPayload['budget'] = budget;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        const request = this.client.call('patch', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'organization',
            models: {
                organization: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        name: '',
                        total: 0,
                        budgetAlerts: [75],
                        billingPlan: 'tier-0',
                        billingPlanId: 'tier-0',
                        billingEmail: '',
                        status: 'draft',
                        markedForDeletion: false,
                        platform: 'appwrite',
                        projects: [],
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Create a billing plan estimation for upgrading or downgrading an organization plan.
     *
     *
     * @param {string} params.organizationId - Organization ID
     * @param {string} params.billingPlan - Target billing plan
     * @param {string[]} params.invites - Additional member invites
     * @param {string | null} params.couponId - Coupon id
     * @throws {AppwriteException}
     * @returns {Promise<Models.EstimationPlanChange>}
     */
    createPlanEstimation(params: {
        organizationId: string;
        billingPlan: string;
        invites?: string[];
        couponId?: string | null;
    }): Promise<Models.EstimationPlanChange>;
    /**
     * Create a billing plan estimation for upgrading or downgrading an organization plan.
     *
     *
     * @param {string} organizationId - Organization ID
     * @param {string} billingPlan - Target billing plan
     * @param {string[]} invites - Additional member invites
     * @param {string | null} couponId - Coupon id
     * @throws {AppwriteException}
     * @returns {Promise<Models.EstimationPlanChange>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createPlanEstimation(
        organizationId: string,
        billingPlan: string,
        invites?: string[],
        couponId?: string | null,
    ): Promise<Models.EstimationPlanChange>;
    createPlanEstimation(
        paramsOrFirst:
            | {
                  organizationId: string;
                  billingPlan: string;
                  invites?: string[];
                  couponId?: string | null;
              }
            | string,
        ...rest: [string?, string[]?, (string | null)?]
    ): Promise<Models.EstimationPlanChange> {
        let params: {
            organizationId: string;
            billingPlan: string;
            invites?: string[];
            couponId?: string | null;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                organizationId: string;
                billingPlan: string;
                invites?: string[];
                couponId?: string | null;
            };
        } else {
            params = {
                organizationId: paramsOrFirst as string,
                billingPlan: rest[0] as string,
                invites: rest[1] as string[],
                couponId: rest[2] as string | null,
            };
        }

        const organizationId = params.organizationId;
        const billingPlan = params.billingPlan;
        const invites = params.invites;
        const couponId = params.couponId;

        if (typeof organizationId === 'undefined' || organizationId === '') {
            throw new AppwriteException(
                'Missing required parameter: "organizationId"',
            );
        }
        if (typeof billingPlan === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "billingPlan"',
            );
        }
        const apiPath =
            '/organizations/{organizationId}/plan/estimations'.replace(
                '{organizationId}',
                encodeURIComponent(String(organizationId)),
            );
        const apiPayload: Payload = {};
        if (typeof billingPlan !== 'undefined') {
            apiPayload['billingPlan'] = billingPlan;
        }
        if (typeof invites !== 'undefined') {
            apiPayload['invites'] = invites;
        }
        if (typeof couponId !== 'undefined') {
            apiPayload['couponId'] = couponId;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        const request = this.client.call('post', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'estimationPlanChange',
            models: {
                estimationPlanChange: {
                    defaults: {
                        currentBillingPlanId: '',
                        targetBillingPlanId: '',
                        direction: '',
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Get all available regions for an organization.
     *
     * @param {string} params.organizationId - Team ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ConsoleRegionList>}
     */
    listRegions(params: {
        organizationId: string;
    }): Promise<Models.ConsoleRegionList>;
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
        paramsOrFirst: { organizationId: string } | string,
    ): Promise<Models.ConsoleRegionList> {
        let params: { organizationId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as { organizationId: string };
        } else {
            params = {
                organizationId: paramsOrFirst as string,
            };
        }

        const organizationId = params.organizationId;

        if (typeof organizationId === 'undefined' || organizationId === '') {
            throw new AppwriteException(
                'Missing required parameter: "organizationId"',
            );
        }
        const apiPath = '/organizations/{organizationId}/regions'.replace(
            '{organizationId}',
            encodeURIComponent(String(organizationId)),
        );
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            accept: 'application/json',
        };

        const request = this.client.call('get', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'consoleRegionList',
            models: {
                consoleRegionList: {
                    defaults: {
                        total: 0,
                        regions: [],
                    },
                    properties: {
                        regions: {
                            items: 'consoleRegion',
                        },
                    },
                },
                consoleRegion: {
                    defaults: {
                        $id: '',
                        name: '',
                        disabled: false,
                        default: false,
                        flag: '',
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Get Scopes
     *
     * @param {string} params.organizationId - Organization id
     * @param {string} params.projectId - Project id
     * @throws {AppwriteException}
     * @returns {Promise<Models.Roles>}
     */
    getScopes(params: {
        organizationId: string;
        projectId?: string;
    }): Promise<Models.Roles>;
    /**
     * Get Scopes
     *
     * @param {string} organizationId - Organization id
     * @param {string} projectId - Project id
     * @throws {AppwriteException}
     * @returns {Promise<Models.Roles>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getScopes(
        organizationId: string,
        projectId?: string,
    ): Promise<Models.Roles>;
    getScopes(
        paramsOrFirst: { organizationId: string; projectId?: string } | string,
        ...rest: [string?]
    ): Promise<Models.Roles> {
        let params: { organizationId: string; projectId?: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                organizationId: string;
                projectId?: string;
            };
        } else {
            params = {
                organizationId: paramsOrFirst as string,
                projectId: rest[0] as string,
            };
        }

        const organizationId = params.organizationId;
        const projectId = params.projectId;

        if (typeof organizationId === 'undefined' || organizationId === '') {
            throw new AppwriteException(
                'Missing required parameter: "organizationId"',
            );
        }
        const apiPath = '/organizations/{organizationId}/roles'.replace(
            '{organizationId}',
            encodeURIComponent(String(organizationId)),
        );
        const apiPayload: Payload = {};
        if (typeof projectId !== 'undefined') {
            apiPayload['projectId'] = projectId;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            accept: 'application/json',
        };

        const request = this.client.call('get', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'roles',
            models: {
                roles: {
                    defaults: {
                        scopes: [],
                        roles: [],
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Set an organization's billing tax ID.
     *
     * @param {string} params.organizationId - Organization ID
     * @param {string | null} params.taxId - Tax Id associated to billing.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Organization<Preferences>>}
     */
    setBillingTaxId<
        Preferences extends Models.Preferences = Models.DefaultPreferences,
    >(params: {
        organizationId: string;
        taxId?: string | null;
    }): Promise<Models.Organization<Preferences>>;
    /**
     * Set an organization's billing tax ID.
     *
     * @param {string} organizationId - Organization ID
     * @param {string | null} taxId - Tax Id associated to billing.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Organization<Preferences>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    setBillingTaxId<
        Preferences extends Models.Preferences = Models.DefaultPreferences,
    >(
        organizationId: string,
        taxId?: string | null,
    ): Promise<Models.Organization<Preferences>>;
    setBillingTaxId<
        Preferences extends Models.Preferences = Models.DefaultPreferences,
    >(
        paramsOrFirst:
            { organizationId: string; taxId?: string | null } | string,
        ...rest: [(string | null)?]
    ): Promise<Models.Organization<Preferences>> {
        let params: { organizationId: string; taxId?: string | null };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                organizationId: string;
                taxId?: string | null;
            };
        } else {
            params = {
                organizationId: paramsOrFirst as string,
                taxId: rest[0] as string | null,
            };
        }

        const organizationId = params.organizationId;
        const taxId = params.taxId;

        if (typeof organizationId === 'undefined' || organizationId === '') {
            throw new AppwriteException(
                'Missing required parameter: "organizationId"',
            );
        }
        if (typeof taxId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "taxId"');
        }
        const apiPath = '/organizations/{organizationId}/taxId'.replace(
            '{organizationId}',
            encodeURIComponent(String(organizationId)),
        );
        const apiPayload: Payload = {};
        if (typeof taxId !== 'undefined') {
            apiPayload['taxId'] = taxId;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        const request = this.client.call('patch', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'organization',
            models: {
                organization: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        name: '',
                        total: 0,
                        budgetAlerts: [75],
                        billingPlan: 'tier-0',
                        billingPlanId: 'tier-0',
                        billingEmail: '',
                        status: 'draft',
                        markedForDeletion: false,
                        platform: 'appwrite',
                        projects: [],
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
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
    getUsage(params: {
        organizationId: string;
        startDate?: string;
        endDate?: string;
    }): Promise<Models.UsageOrganization>;
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
    getUsage(
        organizationId: string,
        startDate?: string,
        endDate?: string,
    ): Promise<Models.UsageOrganization>;
    getUsage(
        paramsOrFirst:
            | { organizationId: string; startDate?: string; endDate?: string }
            | string,
        ...rest: [string?, string?]
    ): Promise<Models.UsageOrganization> {
        let params: {
            organizationId: string;
            startDate?: string;
            endDate?: string;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                organizationId: string;
                startDate?: string;
                endDate?: string;
            };
        } else {
            params = {
                organizationId: paramsOrFirst as string,
                startDate: rest[0] as string,
                endDate: rest[1] as string,
            };
        }

        const organizationId = params.organizationId;
        const startDate = params.startDate;
        const endDate = params.endDate;

        if (typeof organizationId === 'undefined' || organizationId === '') {
            throw new AppwriteException(
                'Missing required parameter: "organizationId"',
            );
        }
        const apiPath = '/organizations/{organizationId}/usage'.replace(
            '{organizationId}',
            encodeURIComponent(String(organizationId)),
        );
        const apiPayload: Payload = {};
        if (typeof startDate !== 'undefined') {
            apiPayload['startDate'] = startDate;
        }
        if (typeof endDate !== 'undefined') {
            apiPayload['endDate'] = endDate;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            accept: 'application/json',
        };

        const request = this.client.call('get', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'usageOrganization',
            models: {
                usageOrganization: {
                    defaults: {
                        bandwidth: [],
                        users: [],
                        executions: [],
                        databasesReads: [],
                        databasesWrites: [],
                        imageTransformations: [],
                        imageTransformationsTotal: 0,
                        screenshotsGenerated: [],
                        screenshotsGeneratedTotal: 0,
                        usersTotal: 0,
                        executionsTotal: 0,
                        executionsMBSecondsTotal: 0,
                        buildsMBSecondsTotal: 0,
                        filesStorageTotal: 0,
                        buildsStorageTotal: 0,
                        deploymentsStorageTotal: 0,
                        databasesStorageTotal: 0,
                        databasesReadsTotal: 0,
                        databasesWritesTotal: 0,
                        backupsStorageTotal: 0,
                        avatarsStorageTotal: 0,
                        storageTotal: 0,
                        authPhoneTotal: 0,
                        authPhoneEstimate: 0,
                        projects: [],
                        realtimeConnections: [],
                        realtimeConnectionsTotal: 0,
                        realtimeMessages: [],
                        realtimeMessagesTotal: 0,
                        realtimeBandwidth: [],
                        realtimeBandwidthTotal: 0,
                    },
                    properties: {
                        bandwidth: {
                            items: 'metric',
                        },
                        users: {
                            items: 'metric',
                        },
                        executions: {
                            items: 'metric',
                        },
                        databasesReads: {
                            items: 'metric',
                        },
                        databasesWrites: {
                            items: 'metric',
                        },
                        imageTransformations: {
                            items: 'metric',
                        },
                        screenshotsGenerated: {
                            items: 'metric',
                        },
                        projects: {
                            items: 'usageOrganizationProject',
                        },
                        realtimeConnections: {
                            items: 'metric',
                        },
                        realtimeMessages: {
                            items: 'metric',
                        },
                        realtimeBandwidth: {
                            items: 'metric',
                        },
                    },
                },
                metric: {
                    defaults: {
                        value: -1,
                        date: '',
                    },
                },
                usageOrganizationProject: {
                    defaults: {
                        projectId: '',
                        bandwidth: 0,
                        users: 0,
                        databasesReads: 0,
                        databasesWrites: 0,
                        executionsMBSeconds: 0,
                        buildsMBSeconds: 0,
                        databasesReadsTotal: 0,
                        databasesWritesTotal: 0,
                        imageTransformations: 0,
                        imageTransformationsTotal: 0,
                        screenshotsGenerated: 0,
                        screenshotsGeneratedTotal: 0,
                        realtimeConnections: 0,
                        realtimeMessages: 0,
                        realtimeBandwidth: 0,
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }

    /**
     * Validate payment for team after creation or upgrade.
     *
     * @param {string} params.organizationId - Organization ID
     * @param {string[]} params.invites - Additional member invites
     * @throws {AppwriteException}
     * @returns {Promise<Models.Organization<Preferences>>}
     */
    validatePayment<
        Preferences extends Models.Preferences = Models.DefaultPreferences,
    >(params: {
        organizationId: string;
        invites?: string[];
    }): Promise<Models.Organization<Preferences>>;
    /**
     * Validate payment for team after creation or upgrade.
     *
     * @param {string} organizationId - Organization ID
     * @param {string[]} invites - Additional member invites
     * @throws {AppwriteException}
     * @returns {Promise<Models.Organization<Preferences>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    validatePayment<
        Preferences extends Models.Preferences = Models.DefaultPreferences,
    >(
        organizationId: string,
        invites?: string[],
    ): Promise<Models.Organization<Preferences>>;
    validatePayment<
        Preferences extends Models.Preferences = Models.DefaultPreferences,
    >(
        paramsOrFirst: { organizationId: string; invites?: string[] } | string,
        ...rest: [string[]?]
    ): Promise<Models.Organization<Preferences>> {
        let params: { organizationId: string; invites?: string[] };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                organizationId: string;
                invites?: string[];
            };
        } else {
            params = {
                organizationId: paramsOrFirst as string,
                invites: rest[0] as string[],
            };
        }

        const organizationId = params.organizationId;
        const invites = params.invites;

        if (typeof organizationId === 'undefined' || organizationId === '') {
            throw new AppwriteException(
                'Missing required parameter: "organizationId"',
            );
        }
        const apiPath = '/organizations/{organizationId}/validate'.replace(
            '{organizationId}',
            encodeURIComponent(String(organizationId)),
        );
        const apiPayload: Payload = {};
        if (typeof invites !== 'undefined') {
            apiPayload['invites'] = invites;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        const request = this.client.call('patch', uri, apiHeaders, apiPayload);
        const defaults = {
            root: 'organization',
            models: {
                organization: {
                    defaults: {
                        $id: '',
                        $createdAt: '',
                        $updatedAt: '',
                        name: '',
                        total: 0,
                        budgetAlerts: [75],
                        billingPlan: 'tier-0',
                        billingPlanId: 'tier-0',
                        billingEmail: '',
                        status: 'draft',
                        markedForDeletion: false,
                        platform: 'appwrite',
                        projects: [],
                    },
                },
            },
        };

        return request.then((response) => applyDefaults(response, defaults));
    }
}
