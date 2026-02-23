import { Client } from '../client';
import type { Models } from '../models';
import { Scopes } from '../enums/scopes';
import { AuthenticatorType } from '../enums/authenticator-type';
import { AuthenticationFactor } from '../enums/authentication-factor';
import { OAuthProvider } from '../enums/o-auth-provider';
export declare class Account {
    client: Client;
    constructor(client: Client);
    /**
     * Get the currently logged in user.
     *
     * @throws {AppwriteException}
     * @returns {Promise<Models.User<Preferences>>}
     */
    get<Preferences extends Models.Preferences = Models.DefaultPreferences>(): Promise<Models.User<Preferences>>;
    /**
     * Use this endpoint to allow a new user to register a new account in your project. After the user registration completes successfully, you can use the [/account/verfication](https://appwrite.io/docs/references/cloud/client-web/account#createVerification) route to start verifying the user email address. To allow the new user to login to their new account, you need to create a new [account session](https://appwrite.io/docs/references/cloud/client-web/account#createEmailSession).
     *
     * @param {string} params.userId - User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.email - User email.
     * @param {string} params.password - New user password. Must be between 8 and 256 chars.
     * @param {string} params.name - User name. Max length: 128 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.User<Preferences>>}
     */
    create<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: {
        userId: string;
        email: string;
        password: string;
        name?: string;
    }): Promise<Models.User<Preferences>>;
    /**
     * Use this endpoint to allow a new user to register a new account in your project. After the user registration completes successfully, you can use the [/account/verfication](https://appwrite.io/docs/references/cloud/client-web/account#createVerification) route to start verifying the user email address. To allow the new user to login to their new account, you need to create a new [account session](https://appwrite.io/docs/references/cloud/client-web/account#createEmailSession).
     *
     * @param {string} userId - User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} email - User email.
     * @param {string} password - New user password. Must be between 8 and 256 chars.
     * @param {string} name - User name. Max length: 128 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.User<Preferences>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    create<Preferences extends Models.Preferences = Models.DefaultPreferences>(userId: string, email: string, password: string, name?: string): Promise<Models.User<Preferences>>;
    /**
     * Delete the currently logged in user.
     *
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    delete(): Promise<{}>;
    /**
     * List all billing addresses for a user.
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/databases#querying-documents). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: userId, expired, failed
     * @throws {AppwriteException}
     * @returns {Promise<Models.BillingAddressList>}
     */
    listBillingAddresses(params?: {
        queries?: string[];
    }): Promise<Models.BillingAddressList>;
    /**
     * List all billing addresses for a user.
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/databases#querying-documents). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: userId, expired, failed
     * @throws {AppwriteException}
     * @returns {Promise<Models.BillingAddressList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listBillingAddresses(queries?: string[]): Promise<Models.BillingAddressList>;
    /**
     * Add a new billing address to a user's account.
     *
     * @param {string} params.country - Country
     * @param {string} params.city - City
     * @param {string} params.streetAddress - Street address
     * @param {string} params.addressLine2 - Address line 2
     * @param {string} params.state - State or province
     * @param {string} params.postalCode - Postal code
     * @throws {AppwriteException}
     * @returns {Promise<Models.BillingAddress>}
     */
    createBillingAddress(params: {
        country: string;
        city: string;
        streetAddress: string;
        addressLine2?: string;
        state?: string;
        postalCode?: string;
    }): Promise<Models.BillingAddress>;
    /**
     * Add a new billing address to a user's account.
     *
     * @param {string} country - Country
     * @param {string} city - City
     * @param {string} streetAddress - Street address
     * @param {string} addressLine2 - Address line 2
     * @param {string} state - State or province
     * @param {string} postalCode - Postal code
     * @throws {AppwriteException}
     * @returns {Promise<Models.BillingAddress>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createBillingAddress(country: string, city: string, streetAddress: string, addressLine2?: string, state?: string, postalCode?: string): Promise<Models.BillingAddress>;
    /**
     * Get a specific billing address for a user using it's ID.
     *
     * @param {string} params.billingAddressId - Unique ID of billing address
     * @throws {AppwriteException}
     * @returns {Promise<Models.BillingAddress>}
     */
    getBillingAddress(params: {
        billingAddressId: string;
    }): Promise<Models.BillingAddress>;
    /**
     * Get a specific billing address for a user using it's ID.
     *
     * @param {string} billingAddressId - Unique ID of billing address
     * @throws {AppwriteException}
     * @returns {Promise<Models.BillingAddress>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getBillingAddress(billingAddressId: string): Promise<Models.BillingAddress>;
    /**
     * Update a specific billing address using it's ID.
     *
     * @param {string} params.billingAddressId - Unique ID of billing address
     * @param {string} params.country - Country
     * @param {string} params.city - City
     * @param {string} params.streetAddress - Street address
     * @param {string} params.addressLine2 - Address line 2
     * @param {string} params.state - State or province
     * @param {string} params.postalCode - Postal code
     * @throws {AppwriteException}
     * @returns {Promise<Models.BillingAddress>}
     */
    updateBillingAddress(params: {
        billingAddressId: string;
        country: string;
        city: string;
        streetAddress: string;
        addressLine2?: string;
        state?: string;
        postalCode?: string;
    }): Promise<Models.BillingAddress>;
    /**
     * Update a specific billing address using it's ID.
     *
     * @param {string} billingAddressId - Unique ID of billing address
     * @param {string} country - Country
     * @param {string} city - City
     * @param {string} streetAddress - Street address
     * @param {string} addressLine2 - Address line 2
     * @param {string} state - State or province
     * @param {string} postalCode - Postal code
     * @throws {AppwriteException}
     * @returns {Promise<Models.BillingAddress>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateBillingAddress(billingAddressId: string, country: string, city: string, streetAddress: string, addressLine2?: string, state?: string, postalCode?: string): Promise<Models.BillingAddress>;
    /**
     * Delete a specific billing address using it's ID.
     *
     * @param {string} params.billingAddressId - Billing address unique ID
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteBillingAddress(params: {
        billingAddressId: string;
    }): Promise<{}>;
    /**
     * Delete a specific billing address using it's ID.
     *
     * @param {string} billingAddressId - Billing address unique ID
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteBillingAddress(billingAddressId: string): Promise<{}>;
    /**
     * Get coupon details for an account.
     *
     * @param {string} params.couponId - ID of the coupon
     * @throws {AppwriteException}
     * @returns {Promise<Models.Coupon>}
     */
    getCoupon(params: {
        couponId: string;
    }): Promise<Models.Coupon>;
    /**
     * Get coupon details for an account.
     *
     * @param {string} couponId - ID of the coupon
     * @throws {AppwriteException}
     * @returns {Promise<Models.Coupon>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getCoupon(couponId: string): Promise<Models.Coupon>;
    /**
     * Update currently logged in user account email address. After changing user address, the user confirmation status will get reset. A new confirmation email is not sent automatically however you can use the send confirmation email endpoint again to send the confirmation email. For security measures, user password is required to complete this request.
     * This endpoint can also be used to convert an anonymous account to a normal one, by passing an email address and a new password.
     *
     *
     * @param {string} params.email - User email.
     * @param {string} params.password - User password. Must be at least 8 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.User<Preferences>>}
     */
    updateEmail<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: {
        email: string;
        password: string;
    }): Promise<Models.User<Preferences>>;
    /**
     * Update currently logged in user account email address. After changing user address, the user confirmation status will get reset. A new confirmation email is not sent automatically however you can use the send confirmation email endpoint again to send the confirmation email. For security measures, user password is required to complete this request.
     * This endpoint can also be used to convert an anonymous account to a normal one, by passing an email address and a new password.
     *
     *
     * @param {string} email - User email.
     * @param {string} password - User password. Must be at least 8 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.User<Preferences>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateEmail<Preferences extends Models.Preferences = Models.DefaultPreferences>(email: string, password: string): Promise<Models.User<Preferences>>;
    /**
     * Get the list of identities for the currently logged in user.
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: userId, provider, providerUid, providerEmail, providerAccessTokenExpiry
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.IdentityList>}
     */
    listIdentities(params?: {
        queries?: string[];
        total?: boolean;
    }): Promise<Models.IdentityList>;
    /**
     * Get the list of identities for the currently logged in user.
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: userId, provider, providerUid, providerEmail, providerAccessTokenExpiry
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.IdentityList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listIdentities(queries?: string[], total?: boolean): Promise<Models.IdentityList>;
    /**
     * Delete an identity by its unique ID.
     *
     * @param {string} params.identityId - Identity ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteIdentity(params: {
        identityId: string;
    }): Promise<{}>;
    /**
     * Delete an identity by its unique ID.
     *
     * @param {string} identityId - Identity ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteIdentity(identityId: string): Promise<{}>;
    /**
     * List all invoices tied to an account.
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/databases#querying-documents). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: teamId, aggregationId, amount, currency, from, to, dueAt, attempts, status, grossAmount
     * @throws {AppwriteException}
     * @returns {Promise<Models.InvoiceList>}
     */
    listInvoices(params?: {
        queries?: string[];
    }): Promise<Models.InvoiceList>;
    /**
     * List all invoices tied to an account.
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/databases#querying-documents). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: teamId, aggregationId, amount, currency, from, to, dueAt, attempts, status, grossAmount
     * @throws {AppwriteException}
     * @returns {Promise<Models.InvoiceList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listInvoices(queries?: string[]): Promise<Models.InvoiceList>;
    /**
     * Use this endpoint to create a JSON Web Token. You can use the resulting JWT to authenticate on behalf of the current user when working with the Appwrite server-side API and SDKs. The JWT secret is valid for 15 minutes from its creation and will be invalid if the user will logout in that time frame.
     *
     * @param {number} params.duration - Time in seconds before JWT expires. Default duration is 900 seconds, and maximum is 3600 seconds.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Jwt>}
     */
    createJWT(params?: {
        duration?: number;
    }): Promise<Models.Jwt>;
    /**
     * Use this endpoint to create a JSON Web Token. You can use the resulting JWT to authenticate on behalf of the current user when working with the Appwrite server-side API and SDKs. The JWT secret is valid for 15 minutes from its creation and will be invalid if the user will logout in that time frame.
     *
     * @param {number} duration - Time in seconds before JWT expires. Default duration is 900 seconds, and maximum is 3600 seconds.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Jwt>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createJWT(duration?: number): Promise<Models.Jwt>;
    /**
     * Get a list of all API keys from the current account.
     *
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.KeyList>}
     */
    listKeys(params?: {
        total?: boolean;
    }): Promise<Models.KeyList>;
    /**
     * Get a list of all API keys from the current account.
     *
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.KeyList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listKeys(total?: boolean): Promise<Models.KeyList>;
    /**
     * Create a new account API key.
     *
     * @param {string} params.name - Key name. Max length: 128 chars.
     * @param {Scopes[]} params.scopes - Key scopes list. Maximum of 100 scopes are allowed.
     * @param {string} params.expire - Expiration time in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Use null for unlimited expiration.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Key>}
     */
    createKey(params: {
        name: string;
        scopes: Scopes[];
        expire?: string;
    }): Promise<Models.Key>;
    /**
     * Create a new account API key.
     *
     * @param {string} name - Key name. Max length: 128 chars.
     * @param {Scopes[]} scopes - Key scopes list. Maximum of 100 scopes are allowed.
     * @param {string} expire - Expiration time in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Use null for unlimited expiration.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Key>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createKey(name: string, scopes: Scopes[], expire?: string): Promise<Models.Key>;
    /**
     * Get a key by its unique ID. This endpoint returns details about a specific API key in your account including it's scopes.
     *
     * @param {string} params.keyId - Key unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Key>}
     */
    getKey(params: {
        keyId: string;
    }): Promise<Models.Key>;
    /**
     * Get a key by its unique ID. This endpoint returns details about a specific API key in your account including it's scopes.
     *
     * @param {string} keyId - Key unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Key>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getKey(keyId: string): Promise<Models.Key>;
    /**
     * Update a key by its unique ID. Use this endpoint to update the name, scopes, or expiration time of an API key.
     *
     * @param {string} params.keyId - Key unique ID.
     * @param {string} params.name - Key name. Max length: 128 chars.
     * @param {Scopes[]} params.scopes - Key scopes list. Maximum of 100 scopes are allowed.
     * @param {string} params.expire - Expiration time in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Use null for unlimited expiration.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Key>}
     */
    updateKey(params: {
        keyId: string;
        name: string;
        scopes: Scopes[];
        expire?: string;
    }): Promise<Models.Key>;
    /**
     * Update a key by its unique ID. Use this endpoint to update the name, scopes, or expiration time of an API key.
     *
     * @param {string} keyId - Key unique ID.
     * @param {string} name - Key name. Max length: 128 chars.
     * @param {Scopes[]} scopes - Key scopes list. Maximum of 100 scopes are allowed.
     * @param {string} expire - Expiration time in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Use null for unlimited expiration.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Key>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateKey(keyId: string, name: string, scopes: Scopes[], expire?: string): Promise<Models.Key>;
    /**
     * Delete a key by its unique ID. Once deleted, the key can no longer be used to authenticate API calls.
     *
     * @param {string} params.keyId - Key unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteKey(params: {
        keyId: string;
    }): Promise<{}>;
    /**
     * Delete a key by its unique ID. Once deleted, the key can no longer be used to authenticate API calls.
     *
     * @param {string} keyId - Key unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteKey(keyId: string): Promise<{}>;
    /**
     * Get the list of latest security activity logs for the currently logged in user. Each log returns user IP address, location and date and time of log.
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.LogList>}
     */
    listLogs(params?: {
        queries?: string[];
        total?: boolean;
    }): Promise<Models.LogList>;
    /**
     * Get the list of latest security activity logs for the currently logged in user. Each log returns user IP address, location and date and time of log.
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.LogList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listLogs(queries?: string[], total?: boolean): Promise<Models.LogList>;
    /**
     * Enable or disable MFA on an account.
     *
     * @param {boolean} params.mfa - Enable or disable MFA.
     * @throws {AppwriteException}
     * @returns {Promise<Models.User<Preferences>>}
     */
    updateMFA<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: {
        mfa: boolean;
    }): Promise<Models.User<Preferences>>;
    /**
     * Enable or disable MFA on an account.
     *
     * @param {boolean} mfa - Enable or disable MFA.
     * @throws {AppwriteException}
     * @returns {Promise<Models.User<Preferences>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateMFA<Preferences extends Models.Preferences = Models.DefaultPreferences>(mfa: boolean): Promise<Models.User<Preferences>>;
    /**
     * Add an authenticator app to be used as an MFA factor. Verify the authenticator using the [verify authenticator](/docs/references/cloud/client-web/account#updateMfaAuthenticator) method.
     *
     * @param {AuthenticatorType} params.type - Type of authenticator. Must be `totp`
     * @throws {AppwriteException}
     * @returns {Promise<Models.MfaType>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `Account.createMFAAuthenticator` instead.
     */
    createMfaAuthenticator(params: {
        type: AuthenticatorType;
    }): Promise<Models.MfaType>;
    /**
     * Add an authenticator app to be used as an MFA factor. Verify the authenticator using the [verify authenticator](/docs/references/cloud/client-web/account#updateMfaAuthenticator) method.
     *
     * @param {AuthenticatorType} type - Type of authenticator. Must be `totp`
     * @throws {AppwriteException}
     * @returns {Promise<Models.MfaType>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createMfaAuthenticator(type: AuthenticatorType): Promise<Models.MfaType>;
    /**
     * Add an authenticator app to be used as an MFA factor. Verify the authenticator using the [verify authenticator](/docs/references/cloud/client-web/account#updateMfaAuthenticator) method.
     *
     * @param {AuthenticatorType} params.type - Type of authenticator. Must be `totp`
     * @throws {AppwriteException}
     * @returns {Promise<Models.MfaType>}
     */
    createMFAAuthenticator(params: {
        type: AuthenticatorType;
    }): Promise<Models.MfaType>;
    /**
     * Add an authenticator app to be used as an MFA factor. Verify the authenticator using the [verify authenticator](/docs/references/cloud/client-web/account#updateMfaAuthenticator) method.
     *
     * @param {AuthenticatorType} type - Type of authenticator. Must be `totp`
     * @throws {AppwriteException}
     * @returns {Promise<Models.MfaType>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createMFAAuthenticator(type: AuthenticatorType): Promise<Models.MfaType>;
    /**
     * Verify an authenticator app after adding it using the [add authenticator](/docs/references/cloud/client-web/account#createMfaAuthenticator) method.
     *
     * @param {AuthenticatorType} params.type - Type of authenticator.
     * @param {string} params.otp - Valid verification token.
     * @throws {AppwriteException}
     * @returns {Promise<Models.User<Preferences>>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `Account.updateMFAAuthenticator` instead.
     */
    updateMfaAuthenticator<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: {
        type: AuthenticatorType;
        otp: string;
    }): Promise<Models.User<Preferences>>;
    /**
     * Verify an authenticator app after adding it using the [add authenticator](/docs/references/cloud/client-web/account#createMfaAuthenticator) method.
     *
     * @param {AuthenticatorType} type - Type of authenticator.
     * @param {string} otp - Valid verification token.
     * @throws {AppwriteException}
     * @returns {Promise<Models.User<Preferences>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateMfaAuthenticator<Preferences extends Models.Preferences = Models.DefaultPreferences>(type: AuthenticatorType, otp: string): Promise<Models.User<Preferences>>;
    /**
     * Verify an authenticator app after adding it using the [add authenticator](/docs/references/cloud/client-web/account#createMfaAuthenticator) method.
     *
     * @param {AuthenticatorType} params.type - Type of authenticator.
     * @param {string} params.otp - Valid verification token.
     * @throws {AppwriteException}
     * @returns {Promise<Models.User<Preferences>>}
     */
    updateMFAAuthenticator<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: {
        type: AuthenticatorType;
        otp: string;
    }): Promise<Models.User<Preferences>>;
    /**
     * Verify an authenticator app after adding it using the [add authenticator](/docs/references/cloud/client-web/account#createMfaAuthenticator) method.
     *
     * @param {AuthenticatorType} type - Type of authenticator.
     * @param {string} otp - Valid verification token.
     * @throws {AppwriteException}
     * @returns {Promise<Models.User<Preferences>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateMFAAuthenticator<Preferences extends Models.Preferences = Models.DefaultPreferences>(type: AuthenticatorType, otp: string): Promise<Models.User<Preferences>>;
    /**
     * Delete an authenticator for a user by ID.
     *
     * @param {AuthenticatorType} params.type - Type of authenticator.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `Account.deleteMFAAuthenticator` instead.
     */
    deleteMfaAuthenticator(params: {
        type: AuthenticatorType;
    }): Promise<{}>;
    /**
     * Delete an authenticator for a user by ID.
     *
     * @param {AuthenticatorType} type - Type of authenticator.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteMfaAuthenticator(type: AuthenticatorType): Promise<{}>;
    /**
     * Delete an authenticator for a user by ID.
     *
     * @param {AuthenticatorType} params.type - Type of authenticator.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteMFAAuthenticator(params: {
        type: AuthenticatorType;
    }): Promise<{}>;
    /**
     * Delete an authenticator for a user by ID.
     *
     * @param {AuthenticatorType} type - Type of authenticator.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteMFAAuthenticator(type: AuthenticatorType): Promise<{}>;
    /**
     * Begin the process of MFA verification after sign-in. Finish the flow with [updateMfaChallenge](/docs/references/cloud/client-web/account#updateMfaChallenge) method.
     *
     * @param {AuthenticationFactor} params.factor - Factor used for verification. Must be one of following: `email`, `phone`, `totp`, `recoveryCode`.
     * @throws {AppwriteException}
     * @returns {Promise<Models.MfaChallenge>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `Account.createMFAChallenge` instead.
     */
    createMfaChallenge(params: {
        factor: AuthenticationFactor;
    }): Promise<Models.MfaChallenge>;
    /**
     * Begin the process of MFA verification after sign-in. Finish the flow with [updateMfaChallenge](/docs/references/cloud/client-web/account#updateMfaChallenge) method.
     *
     * @param {AuthenticationFactor} factor - Factor used for verification. Must be one of following: `email`, `phone`, `totp`, `recoveryCode`.
     * @throws {AppwriteException}
     * @returns {Promise<Models.MfaChallenge>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createMfaChallenge(factor: AuthenticationFactor): Promise<Models.MfaChallenge>;
    /**
     * Begin the process of MFA verification after sign-in. Finish the flow with [updateMfaChallenge](/docs/references/cloud/client-web/account#updateMfaChallenge) method.
     *
     * @param {AuthenticationFactor} params.factor - Factor used for verification. Must be one of following: `email`, `phone`, `totp`, `recoveryCode`.
     * @throws {AppwriteException}
     * @returns {Promise<Models.MfaChallenge>}
     */
    createMFAChallenge(params: {
        factor: AuthenticationFactor;
    }): Promise<Models.MfaChallenge>;
    /**
     * Begin the process of MFA verification after sign-in. Finish the flow with [updateMfaChallenge](/docs/references/cloud/client-web/account#updateMfaChallenge) method.
     *
     * @param {AuthenticationFactor} factor - Factor used for verification. Must be one of following: `email`, `phone`, `totp`, `recoveryCode`.
     * @throws {AppwriteException}
     * @returns {Promise<Models.MfaChallenge>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createMFAChallenge(factor: AuthenticationFactor): Promise<Models.MfaChallenge>;
    /**
     * Complete the MFA challenge by providing the one-time password. Finish the process of MFA verification by providing the one-time password. To begin the flow, use [createMfaChallenge](/docs/references/cloud/client-web/account#createMfaChallenge) method.
     *
     * @param {string} params.challengeId - ID of the challenge.
     * @param {string} params.otp - Valid verification token.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Session>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `Account.updateMFAChallenge` instead.
     */
    updateMfaChallenge(params: {
        challengeId: string;
        otp: string;
    }): Promise<Models.Session>;
    /**
     * Complete the MFA challenge by providing the one-time password. Finish the process of MFA verification by providing the one-time password. To begin the flow, use [createMfaChallenge](/docs/references/cloud/client-web/account#createMfaChallenge) method.
     *
     * @param {string} challengeId - ID of the challenge.
     * @param {string} otp - Valid verification token.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Session>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateMfaChallenge(challengeId: string, otp: string): Promise<Models.Session>;
    /**
     * Complete the MFA challenge by providing the one-time password. Finish the process of MFA verification by providing the one-time password. To begin the flow, use [createMfaChallenge](/docs/references/cloud/client-web/account#createMfaChallenge) method.
     *
     * @param {string} params.challengeId - ID of the challenge.
     * @param {string} params.otp - Valid verification token.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Session>}
     */
    updateMFAChallenge(params: {
        challengeId: string;
        otp: string;
    }): Promise<Models.Session>;
    /**
     * Complete the MFA challenge by providing the one-time password. Finish the process of MFA verification by providing the one-time password. To begin the flow, use [createMfaChallenge](/docs/references/cloud/client-web/account#createMfaChallenge) method.
     *
     * @param {string} challengeId - ID of the challenge.
     * @param {string} otp - Valid verification token.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Session>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateMFAChallenge(challengeId: string, otp: string): Promise<Models.Session>;
    /**
     * List the factors available on the account to be used as a MFA challange.
     *
     * @throws {AppwriteException}
     * @returns {Promise<Models.MfaFactors>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `Account.listMFAFactors` instead.
     */
    listMfaFactors(): Promise<Models.MfaFactors>;
    /**
     * List the factors available on the account to be used as a MFA challange.
     *
     * @throws {AppwriteException}
     * @returns {Promise<Models.MfaFactors>}
     */
    listMFAFactors(): Promise<Models.MfaFactors>;
    /**
     * Get recovery codes that can be used as backup for MFA flow. Before getting codes, they must be generated using [createMfaRecoveryCodes](/docs/references/cloud/client-web/account#createMfaRecoveryCodes) method. An OTP challenge is required to read recovery codes.
     *
     * @throws {AppwriteException}
     * @returns {Promise<Models.MfaRecoveryCodes>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `Account.getMFARecoveryCodes` instead.
     */
    getMfaRecoveryCodes(): Promise<Models.MfaRecoveryCodes>;
    /**
     * Get recovery codes that can be used as backup for MFA flow. Before getting codes, they must be generated using [createMfaRecoveryCodes](/docs/references/cloud/client-web/account#createMfaRecoveryCodes) method. An OTP challenge is required to read recovery codes.
     *
     * @throws {AppwriteException}
     * @returns {Promise<Models.MfaRecoveryCodes>}
     */
    getMFARecoveryCodes(): Promise<Models.MfaRecoveryCodes>;
    /**
     * Generate recovery codes as backup for MFA flow. It's recommended to generate and show then immediately after user successfully adds their authehticator. Recovery codes can be used as a MFA verification type in [createMfaChallenge](/docs/references/cloud/client-web/account#createMfaChallenge) method.
     *
     * @throws {AppwriteException}
     * @returns {Promise<Models.MfaRecoveryCodes>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `Account.createMFARecoveryCodes` instead.
     */
    createMfaRecoveryCodes(): Promise<Models.MfaRecoveryCodes>;
    /**
     * Generate recovery codes as backup for MFA flow. It's recommended to generate and show then immediately after user successfully adds their authehticator. Recovery codes can be used as a MFA verification type in [createMfaChallenge](/docs/references/cloud/client-web/account#createMfaChallenge) method.
     *
     * @throws {AppwriteException}
     * @returns {Promise<Models.MfaRecoveryCodes>}
     */
    createMFARecoveryCodes(): Promise<Models.MfaRecoveryCodes>;
    /**
     * Regenerate recovery codes that can be used as backup for MFA flow. Before regenerating codes, they must be first generated using [createMfaRecoveryCodes](/docs/references/cloud/client-web/account#createMfaRecoveryCodes) method. An OTP challenge is required to regenreate recovery codes.
     *
     * @throws {AppwriteException}
     * @returns {Promise<Models.MfaRecoveryCodes>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `Account.updateMFARecoveryCodes` instead.
     */
    updateMfaRecoveryCodes(): Promise<Models.MfaRecoveryCodes>;
    /**
     * Regenerate recovery codes that can be used as backup for MFA flow. Before regenerating codes, they must be first generated using [createMfaRecoveryCodes](/docs/references/cloud/client-web/account#createMfaRecoveryCodes) method. An OTP challenge is required to regenreate recovery codes.
     *
     * @throws {AppwriteException}
     * @returns {Promise<Models.MfaRecoveryCodes>}
     */
    updateMFARecoveryCodes(): Promise<Models.MfaRecoveryCodes>;
    /**
     * Update currently logged in user account name.
     *
     * @param {string} params.name - User name. Max length: 128 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.User<Preferences>>}
     */
    updateName<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: {
        name: string;
    }): Promise<Models.User<Preferences>>;
    /**
     * Update currently logged in user account name.
     *
     * @param {string} name - User name. Max length: 128 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.User<Preferences>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateName<Preferences extends Models.Preferences = Models.DefaultPreferences>(name: string): Promise<Models.User<Preferences>>;
    /**
     * Update currently logged in user password. For validation, user is required to pass in the new password, and the old password. For users created with OAuth, Team Invites and Magic URL, oldPassword is optional.
     *
     * @param {string} params.password - New user password. Must be at least 8 chars.
     * @param {string} params.oldPassword - Current user password. Must be at least 8 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.User<Preferences>>}
     */
    updatePassword<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: {
        password: string;
        oldPassword?: string;
    }): Promise<Models.User<Preferences>>;
    /**
     * Update currently logged in user password. For validation, user is required to pass in the new password, and the old password. For users created with OAuth, Team Invites and Magic URL, oldPassword is optional.
     *
     * @param {string} password - New user password. Must be at least 8 chars.
     * @param {string} oldPassword - Current user password. Must be at least 8 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.User<Preferences>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updatePassword<Preferences extends Models.Preferences = Models.DefaultPreferences>(password: string, oldPassword?: string): Promise<Models.User<Preferences>>;
    /**
     * List payment methods for this account.
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/databases#querying-documents). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: userId, expired, failed
     * @throws {AppwriteException}
     * @returns {Promise<Models.PaymentMethodList>}
     */
    listPaymentMethods(params?: {
        queries?: string[];
    }): Promise<Models.PaymentMethodList>;
    /**
     * List payment methods for this account.
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/databases#querying-documents). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: userId, expired, failed
     * @throws {AppwriteException}
     * @returns {Promise<Models.PaymentMethodList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listPaymentMethods(queries?: string[]): Promise<Models.PaymentMethodList>;
    /**
     * Create a new payment method for the current user account.
     *
     * @throws {AppwriteException}
     * @returns {Promise<Models.PaymentMethod>}
     */
    createPaymentMethod(): Promise<Models.PaymentMethod>;
    /**
     * Get a specific payment method for the user.
     *
     * @param {string} params.paymentMethodId - Unique ID of payment method
     * @throws {AppwriteException}
     * @returns {Promise<Models.PaymentMethod>}
     */
    getPaymentMethod(params: {
        paymentMethodId: string;
    }): Promise<Models.PaymentMethod>;
    /**
     * Get a specific payment method for the user.
     *
     * @param {string} paymentMethodId - Unique ID of payment method
     * @throws {AppwriteException}
     * @returns {Promise<Models.PaymentMethod>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getPaymentMethod(paymentMethodId: string): Promise<Models.PaymentMethod>;
    /**
     * Update a new payment method for the current user account.
     *
     * @param {string} params.paymentMethodId - Unique ID of payment method
     * @param {number} params.expiryMonth - Payment expiry month
     * @param {number} params.expiryYear - Expiry year
     * @param {string} params.state - State of the payment method country
     * @throws {AppwriteException}
     * @returns {Promise<Models.PaymentMethod>}
     */
    updatePaymentMethod(params: {
        paymentMethodId: string;
        expiryMonth: number;
        expiryYear: number;
        state?: string;
    }): Promise<Models.PaymentMethod>;
    /**
     * Update a new payment method for the current user account.
     *
     * @param {string} paymentMethodId - Unique ID of payment method
     * @param {number} expiryMonth - Payment expiry month
     * @param {number} expiryYear - Expiry year
     * @param {string} state - State of the payment method country
     * @throws {AppwriteException}
     * @returns {Promise<Models.PaymentMethod>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updatePaymentMethod(paymentMethodId: string, expiryMonth: number, expiryYear: number, state?: string): Promise<Models.PaymentMethod>;
    /**
     * Delete a specific payment method from a user's account.
     *
     * @param {string} params.paymentMethodId - Unique ID of payment method
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deletePaymentMethod(params: {
        paymentMethodId: string;
    }): Promise<{}>;
    /**
     * Delete a specific payment method from a user's account.
     *
     * @param {string} paymentMethodId - Unique ID of payment method
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deletePaymentMethod(paymentMethodId: string): Promise<{}>;
    /**
     * Update payment method provider.
     *
     * @param {string} params.paymentMethodId - Unique ID of payment method
     * @param {string} params.providerMethodId - Payment method ID from the payment provider
     * @param {string} params.name - Name in the payment method
     * @param {string} params.state - State of the payment method country
     * @throws {AppwriteException}
     * @returns {Promise<Models.PaymentMethod>}
     */
    updatePaymentMethodProvider(params: {
        paymentMethodId: string;
        providerMethodId: string;
        name: string;
        state?: string;
    }): Promise<Models.PaymentMethod>;
    /**
     * Update payment method provider.
     *
     * @param {string} paymentMethodId - Unique ID of payment method
     * @param {string} providerMethodId - Payment method ID from the payment provider
     * @param {string} name - Name in the payment method
     * @param {string} state - State of the payment method country
     * @throws {AppwriteException}
     * @returns {Promise<Models.PaymentMethod>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updatePaymentMethodProvider(paymentMethodId: string, providerMethodId: string, name: string, state?: string): Promise<Models.PaymentMethod>;
    /**
     * Update payment method mandate options.
     *
     * @param {string} params.paymentMethodId - Unique ID of payment method
     * @throws {AppwriteException}
     * @returns {Promise<Models.PaymentMethod>}
     */
    updatePaymentMethodMandateOptions(params: {
        paymentMethodId: string;
    }): Promise<Models.PaymentMethod>;
    /**
     * Update payment method mandate options.
     *
     * @param {string} paymentMethodId - Unique ID of payment method
     * @throws {AppwriteException}
     * @returns {Promise<Models.PaymentMethod>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updatePaymentMethodMandateOptions(paymentMethodId: string): Promise<Models.PaymentMethod>;
    /**
     * Update the currently logged in user's phone number. After updating the phone number, the phone verification status will be reset. A confirmation SMS is not sent automatically, however you can use the [POST /account/verification/phone](https://appwrite.io/docs/references/cloud/client-web/account#createPhoneVerification) endpoint to send a confirmation SMS.
     *
     * @param {string} params.phone - Phone number. Format this number with a leading '+' and a country code, e.g., +16175551212.
     * @param {string} params.password - User password. Must be at least 8 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.User<Preferences>>}
     */
    updatePhone<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: {
        phone: string;
        password: string;
    }): Promise<Models.User<Preferences>>;
    /**
     * Update the currently logged in user's phone number. After updating the phone number, the phone verification status will be reset. A confirmation SMS is not sent automatically, however you can use the [POST /account/verification/phone](https://appwrite.io/docs/references/cloud/client-web/account#createPhoneVerification) endpoint to send a confirmation SMS.
     *
     * @param {string} phone - Phone number. Format this number with a leading '+' and a country code, e.g., +16175551212.
     * @param {string} password - User password. Must be at least 8 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.User<Preferences>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updatePhone<Preferences extends Models.Preferences = Models.DefaultPreferences>(phone: string, password: string): Promise<Models.User<Preferences>>;
    /**
     * Get the preferences as a key-value object for the currently logged in user.
     *
     * @throws {AppwriteException}
     * @returns {Promise<Preferences>}
     */
    getPrefs<Preferences extends Models.Preferences = Models.DefaultPreferences>(): Promise<Preferences>;
    /**
     * Update currently logged in user account preferences. The object you pass is stored as is, and replaces any previous value. The maximum allowed prefs size is 64kB and throws error if exceeded.
     *
     * @param {Partial<Preferences>} params.prefs - Prefs key-value JSON object.
     * @throws {AppwriteException}
     * @returns {Promise<Models.User<Preferences>>}
     */
    updatePrefs<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: {
        prefs: Partial<Preferences>;
    }): Promise<Models.User<Preferences>>;
    /**
     * Update currently logged in user account preferences. The object you pass is stored as is, and replaces any previous value. The maximum allowed prefs size is 64kB and throws error if exceeded.
     *
     * @param {Partial<Preferences>} prefs - Prefs key-value JSON object.
     * @throws {AppwriteException}
     * @returns {Promise<Models.User<Preferences>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updatePrefs<Preferences extends Models.Preferences = Models.DefaultPreferences>(prefs: Partial<Preferences>): Promise<Models.User<Preferences>>;
    /**
     * Sends the user an email with a temporary secret key for password reset. When the user clicks the confirmation link he is redirected back to your app password reset URL with the secret key and email address values attached to the URL query string. Use the query string params to submit a request to the [PUT /account/recovery](https://appwrite.io/docs/references/cloud/client-web/account#updateRecovery) endpoint to complete the process. The verification link sent to the user's email address is valid for 1 hour.
     *
     * @param {string} params.email - User email.
     * @param {string} params.url - URL to redirect the user back to your app from the recovery email. Only URLs from hostnames in your project platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Token>}
     */
    createRecovery(params: {
        email: string;
        url: string;
    }): Promise<Models.Token>;
    /**
     * Sends the user an email with a temporary secret key for password reset. When the user clicks the confirmation link he is redirected back to your app password reset URL with the secret key and email address values attached to the URL query string. Use the query string params to submit a request to the [PUT /account/recovery](https://appwrite.io/docs/references/cloud/client-web/account#updateRecovery) endpoint to complete the process. The verification link sent to the user's email address is valid for 1 hour.
     *
     * @param {string} email - User email.
     * @param {string} url - URL to redirect the user back to your app from the recovery email. Only URLs from hostnames in your project platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Token>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createRecovery(email: string, url: string): Promise<Models.Token>;
    /**
     * Use this endpoint to complete the user account password reset. Both the **userId** and **secret** arguments will be passed as query parameters to the redirect URL you have provided when sending your request to the [POST /account/recovery](https://appwrite.io/docs/references/cloud/client-web/account#createRecovery) endpoint.
     *
     * Please note that in order to avoid a [Redirect Attack](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md) the only valid redirect URLs are the ones from domains you have set when adding your platforms in the console interface.
     *
     * @param {string} params.userId - User ID.
     * @param {string} params.secret - Valid reset token.
     * @param {string} params.password - New user password. Must be between 8 and 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Token>}
     */
    updateRecovery(params: {
        userId: string;
        secret: string;
        password: string;
    }): Promise<Models.Token>;
    /**
     * Use this endpoint to complete the user account password reset. Both the **userId** and **secret** arguments will be passed as query parameters to the redirect URL you have provided when sending your request to the [POST /account/recovery](https://appwrite.io/docs/references/cloud/client-web/account#createRecovery) endpoint.
     *
     * Please note that in order to avoid a [Redirect Attack](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md) the only valid redirect URLs are the ones from domains you have set when adding your platforms in the console interface.
     *
     * @param {string} userId - User ID.
     * @param {string} secret - Valid reset token.
     * @param {string} password - New user password. Must be between 8 and 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Token>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateRecovery(userId: string, secret: string, password: string): Promise<Models.Token>;
    /**
     * Get the list of active sessions across different devices for the currently logged in user.
     *
     * @throws {AppwriteException}
     * @returns {Promise<Models.SessionList>}
     */
    listSessions(): Promise<Models.SessionList>;
    /**
     * Delete all sessions from the user account and remove any sessions cookies from the end client.
     *
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteSessions(): Promise<{}>;
    /**
     * Use this endpoint to allow a new user to register an anonymous account in your project. This route will also create a new session for the user. To allow the new user to convert an anonymous account to a normal account, you need to update its [email and password](https://appwrite.io/docs/references/cloud/client-web/account#updateEmail) or create an [OAuth2 session](https://appwrite.io/docs/references/cloud/client-web/account#CreateOAuth2Session).
     *
     * @throws {AppwriteException}
     * @returns {Promise<Models.Session>}
     */
    createAnonymousSession(): Promise<Models.Session>;
    /**
     * Allow the user to login into their account by providing a valid email and password combination. This route will create a new session for the user.
     *
     * A user is limited to 10 active sessions at a time by default. [Learn more about session limits](https://appwrite.io/docs/authentication-security#limits).
     *
     * @param {string} params.email - User email.
     * @param {string} params.password - User password. Must be at least 8 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Session>}
     */
    createEmailPasswordSession(params: {
        email: string;
        password: string;
    }): Promise<Models.Session>;
    /**
     * Allow the user to login into their account by providing a valid email and password combination. This route will create a new session for the user.
     *
     * A user is limited to 10 active sessions at a time by default. [Learn more about session limits](https://appwrite.io/docs/authentication-security#limits).
     *
     * @param {string} email - User email.
     * @param {string} password - User password. Must be at least 8 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Session>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createEmailPasswordSession(email: string, password: string): Promise<Models.Session>;
    /**
     * Use this endpoint to create a session from token. Provide the **userId** and **secret** parameters from the successful response of authentication flows initiated by token creation. For example, magic URL and phone login.
     *
     * @param {string} params.userId - User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.secret - Valid verification token.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Session>}
     * @deprecated This API has been deprecated since 1.6.0. Please use `Account.createSession` instead.
     */
    updateMagicURLSession(params: {
        userId: string;
        secret: string;
    }): Promise<Models.Session>;
    /**
     * Use this endpoint to create a session from token. Provide the **userId** and **secret** parameters from the successful response of authentication flows initiated by token creation. For example, magic URL and phone login.
     *
     * @param {string} userId - User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} secret - Valid verification token.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Session>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateMagicURLSession(userId: string, secret: string): Promise<Models.Session>;
    /**
     * Allow the user to login to their account using the OAuth2 provider of their choice. Each OAuth2 provider should be enabled from the Appwrite console first. Use the success and failure arguments to provide a redirect URL's back to your app when login is completed.
     *
     * If there is already an active session, the new session will be attached to the logged-in account. If there are no active sessions, the server will attempt to look for a user with the same email address as the email received from the OAuth2 provider and attach the new session to the existing user. If no matching user is found - the server will create a new user.
     *
     * A user is limited to 10 active sessions at a time by default. [Learn more about session limits](https://appwrite.io/docs/authentication-security#limits).
     *
     *
     * @param {OAuthProvider} params.provider - OAuth2 Provider. Currently, supported providers are: amazon, apple, auth0, authentik, autodesk, bitbucket, bitly, box, dailymotion, discord, disqus, dropbox, etsy, facebook, figma, github, gitlab, google, linkedin, microsoft, notion, oidc, okta, paypal, paypalSandbox, podio, salesforce, slack, spotify, stripe, tradeshift, tradeshiftBox, twitch, wordpress, yahoo, yammer, yandex, zoho, zoom.
     * @param {string} params.success - URL to redirect back to your app after a successful login attempt.  Only URLs from hostnames in your project's platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API.
     * @param {string} params.failure - URL to redirect back to your app after a failed login attempt.  Only URLs from hostnames in your project's platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API.
     * @param {string[]} params.scopes - A list of custom OAuth2 scopes. Check each provider internal docs for a list of supported scopes. Maximum of 100 scopes are allowed, each 4096 characters long.
     * @throws {AppwriteException}
     * @returns {void | string}
     */
    createOAuth2Session(params: {
        provider: OAuthProvider;
        success?: string;
        failure?: string;
        scopes?: string[];
    }): void | string;
    /**
     * Allow the user to login to their account using the OAuth2 provider of their choice. Each OAuth2 provider should be enabled from the Appwrite console first. Use the success and failure arguments to provide a redirect URL's back to your app when login is completed.
     *
     * If there is already an active session, the new session will be attached to the logged-in account. If there are no active sessions, the server will attempt to look for a user with the same email address as the email received from the OAuth2 provider and attach the new session to the existing user. If no matching user is found - the server will create a new user.
     *
     * A user is limited to 10 active sessions at a time by default. [Learn more about session limits](https://appwrite.io/docs/authentication-security#limits).
     *
     *
     * @param {OAuthProvider} provider - OAuth2 Provider. Currently, supported providers are: amazon, apple, auth0, authentik, autodesk, bitbucket, bitly, box, dailymotion, discord, disqus, dropbox, etsy, facebook, figma, github, gitlab, google, linkedin, microsoft, notion, oidc, okta, paypal, paypalSandbox, podio, salesforce, slack, spotify, stripe, tradeshift, tradeshiftBox, twitch, wordpress, yahoo, yammer, yandex, zoho, zoom.
     * @param {string} success - URL to redirect back to your app after a successful login attempt.  Only URLs from hostnames in your project's platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API.
     * @param {string} failure - URL to redirect back to your app after a failed login attempt.  Only URLs from hostnames in your project's platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API.
     * @param {string[]} scopes - A list of custom OAuth2 scopes. Check each provider internal docs for a list of supported scopes. Maximum of 100 scopes are allowed, each 4096 characters long.
     * @throws {AppwriteException}
     * @returns {void | string}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createOAuth2Session(provider: OAuthProvider, success?: string, failure?: string, scopes?: string[]): void | string;
    /**
     * Use this endpoint to create a session from token. Provide the **userId** and **secret** parameters from the successful response of authentication flows initiated by token creation. For example, magic URL and phone login.
     *
     * @param {string} params.userId - User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.secret - Valid verification token.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Session>}
     * @deprecated This API has been deprecated since 1.6.0. Please use `Account.createSession` instead.
     */
    updatePhoneSession(params: {
        userId: string;
        secret: string;
    }): Promise<Models.Session>;
    /**
     * Use this endpoint to create a session from token. Provide the **userId** and **secret** parameters from the successful response of authentication flows initiated by token creation. For example, magic URL and phone login.
     *
     * @param {string} userId - User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} secret - Valid verification token.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Session>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updatePhoneSession(userId: string, secret: string): Promise<Models.Session>;
    /**
     * Use this endpoint to create a session from token. Provide the **userId** and **secret** parameters from the successful response of authentication flows initiated by token creation. For example, magic URL and phone login.
     *
     * @param {string} params.userId - User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.secret - Secret of a token generated by login methods. For example, the `createMagicURLToken` or `createPhoneToken` methods.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Session>}
     */
    createSession(params: {
        userId: string;
        secret: string;
    }): Promise<Models.Session>;
    /**
     * Use this endpoint to create a session from token. Provide the **userId** and **secret** parameters from the successful response of authentication flows initiated by token creation. For example, magic URL and phone login.
     *
     * @param {string} userId - User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} secret - Secret of a token generated by login methods. For example, the `createMagicURLToken` or `createPhoneToken` methods.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Session>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createSession(userId: string, secret: string): Promise<Models.Session>;
    /**
     * Use this endpoint to get a logged in user's session using a Session ID. Inputting 'current' will return the current session being used.
     *
     * @param {string} params.sessionId - Session ID. Use the string 'current' to get the current device session.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Session>}
     */
    getSession(params: {
        sessionId: string;
    }): Promise<Models.Session>;
    /**
     * Use this endpoint to get a logged in user's session using a Session ID. Inputting 'current' will return the current session being used.
     *
     * @param {string} sessionId - Session ID. Use the string 'current' to get the current device session.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Session>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getSession(sessionId: string): Promise<Models.Session>;
    /**
     * Use this endpoint to extend a session's length. Extending a session is useful when session expiry is short. If the session was created using an OAuth provider, this endpoint refreshes the access token from the provider.
     *
     * @param {string} params.sessionId - Session ID. Use the string 'current' to update the current device session.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Session>}
     */
    updateSession(params: {
        sessionId: string;
    }): Promise<Models.Session>;
    /**
     * Use this endpoint to extend a session's length. Extending a session is useful when session expiry is short. If the session was created using an OAuth provider, this endpoint refreshes the access token from the provider.
     *
     * @param {string} sessionId - Session ID. Use the string 'current' to update the current device session.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Session>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateSession(sessionId: string): Promise<Models.Session>;
    /**
     * Logout the user. Use 'current' as the session ID to logout on this device, use a session ID to logout on another device. If you're looking to logout the user on all devices, use [Delete Sessions](https://appwrite.io/docs/references/cloud/client-web/account#deleteSessions) instead.
     *
     * @param {string} params.sessionId - Session ID. Use the string 'current' to delete the current device session.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteSession(params: {
        sessionId: string;
    }): Promise<{}>;
    /**
     * Logout the user. Use 'current' as the session ID to logout on this device, use a session ID to logout on another device. If you're looking to logout the user on all devices, use [Delete Sessions](https://appwrite.io/docs/references/cloud/client-web/account#deleteSessions) instead.
     *
     * @param {string} sessionId - Session ID. Use the string 'current' to delete the current device session.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteSession(sessionId: string): Promise<{}>;
    /**
     * Block the currently logged in user account. Behind the scene, the user record is not deleted but permanently blocked from any access. To completely delete a user, use the Users API instead.
     *
     * @throws {AppwriteException}
     * @returns {Promise<Models.User<Preferences>>}
     */
    updateStatus<Preferences extends Models.Preferences = Models.DefaultPreferences>(): Promise<Models.User<Preferences>>;
    /**
     * Use this endpoint to register a device for push notifications. Provide a target ID (custom or generated using ID.unique()), a device identifier (usually a device token), and optionally specify which provider should send notifications to this target. The target is automatically linked to the current session and includes device information like brand and model.
     *
     * @param {string} params.targetId - Target ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.identifier - The target identifier (token, email, phone etc.)
     * @param {string} params.providerId - Provider ID. Message will be sent to this target from the specified provider ID. If no provider ID is set the first setup provider will be used.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Target>}
     */
    createPushTarget(params: {
        targetId: string;
        identifier: string;
        providerId?: string;
    }): Promise<Models.Target>;
    /**
     * Use this endpoint to register a device for push notifications. Provide a target ID (custom or generated using ID.unique()), a device identifier (usually a device token), and optionally specify which provider should send notifications to this target. The target is automatically linked to the current session and includes device information like brand and model.
     *
     * @param {string} targetId - Target ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} identifier - The target identifier (token, email, phone etc.)
     * @param {string} providerId - Provider ID. Message will be sent to this target from the specified provider ID. If no provider ID is set the first setup provider will be used.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Target>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createPushTarget(targetId: string, identifier: string, providerId?: string): Promise<Models.Target>;
    /**
     * Update the currently logged in user's push notification target. You can modify the target's identifier (device token) and provider ID (token, email, phone etc.). The target must exist and belong to the current user. If you change the provider ID, notifications will be sent through the new messaging provider instead.
     *
     * @param {string} params.targetId - Target ID.
     * @param {string} params.identifier - The target identifier (token, email, phone etc.)
     * @throws {AppwriteException}
     * @returns {Promise<Models.Target>}
     */
    updatePushTarget(params: {
        targetId: string;
        identifier: string;
    }): Promise<Models.Target>;
    /**
     * Update the currently logged in user's push notification target. You can modify the target's identifier (device token) and provider ID (token, email, phone etc.). The target must exist and belong to the current user. If you change the provider ID, notifications will be sent through the new messaging provider instead.
     *
     * @param {string} targetId - Target ID.
     * @param {string} identifier - The target identifier (token, email, phone etc.)
     * @throws {AppwriteException}
     * @returns {Promise<Models.Target>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updatePushTarget(targetId: string, identifier: string): Promise<Models.Target>;
    /**
     * Delete a push notification target for the currently logged in user. After deletion, the device will no longer receive push notifications. The target must exist and belong to the current user.
     *
     * @param {string} params.targetId - Target ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deletePushTarget(params: {
        targetId: string;
    }): Promise<{}>;
    /**
     * Delete a push notification target for the currently logged in user. After deletion, the device will no longer receive push notifications. The target must exist and belong to the current user.
     *
     * @param {string} targetId - Target ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deletePushTarget(targetId: string): Promise<{}>;
    /**
     * Sends the user an email with a secret key for creating a session. If the email address has never been used, a **new account is created** using the provided `userId`. Otherwise, if the email address is already attached to an account, the **user ID is ignored**. Then, the user will receive an email with the one-time password. Use the returned user ID and secret and submit a request to the [POST /v1/account/sessions/token](https://appwrite.io/docs/references/cloud/client-web/account#createSession) endpoint to complete the login process. The secret sent to the user's email is valid for 15 minutes.
     *
     * A user is limited to 10 active sessions at a time by default. [Learn more about session limits](https://appwrite.io/docs/authentication-security#limits).
     *
     *
     * @param {string} params.userId - User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars. If the email address has never been used, a new account is created using the provided userId. Otherwise, if the email address is already attached to an account, the user ID is ignored.
     * @param {string} params.email - User email.
     * @param {boolean} params.phrase - Toggle for security phrase. If enabled, email will be send with a randomly generated phrase and the phrase will also be included in the response. Confirming phrases match increases the security of your authentication flow.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Token>}
     */
    createEmailToken(params: {
        userId: string;
        email: string;
        phrase?: boolean;
    }): Promise<Models.Token>;
    /**
     * Sends the user an email with a secret key for creating a session. If the email address has never been used, a **new account is created** using the provided `userId`. Otherwise, if the email address is already attached to an account, the **user ID is ignored**. Then, the user will receive an email with the one-time password. Use the returned user ID and secret and submit a request to the [POST /v1/account/sessions/token](https://appwrite.io/docs/references/cloud/client-web/account#createSession) endpoint to complete the login process. The secret sent to the user's email is valid for 15 minutes.
     *
     * A user is limited to 10 active sessions at a time by default. [Learn more about session limits](https://appwrite.io/docs/authentication-security#limits).
     *
     *
     * @param {string} userId - User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars. If the email address has never been used, a new account is created using the provided userId. Otherwise, if the email address is already attached to an account, the user ID is ignored.
     * @param {string} email - User email.
     * @param {boolean} phrase - Toggle for security phrase. If enabled, email will be send with a randomly generated phrase and the phrase will also be included in the response. Confirming phrases match increases the security of your authentication flow.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Token>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createEmailToken(userId: string, email: string, phrase?: boolean): Promise<Models.Token>;
    /**
     * Sends the user an email with a secret key for creating a session. If the provided user ID has not been registered, a new user will be created. When the user clicks the link in the email, the user is redirected back to the URL you provided with the secret key and userId values attached to the URL query string. Use the query string parameters to submit a request to the [POST /v1/account/sessions/token](https://appwrite.io/docs/references/cloud/client-web/account#createSession) endpoint to complete the login process. The link sent to the user's email address is valid for 1 hour.
     *
     * A user is limited to 10 active sessions at a time by default. [Learn more about session limits](https://appwrite.io/docs/authentication-security#limits).
     *
     *
     * @param {string} params.userId - Unique Id. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars. If the email address has never been used, a new account is created using the provided userId. Otherwise, if the email address is already attached to an account, the user ID is ignored.
     * @param {string} params.email - User email.
     * @param {string} params.url - URL to redirect the user back to your app from the magic URL login. Only URLs from hostnames in your project platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API.
     * @param {boolean} params.phrase - Toggle for security phrase. If enabled, email will be send with a randomly generated phrase and the phrase will also be included in the response. Confirming phrases match increases the security of your authentication flow.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Token>}
     */
    createMagicURLToken(params: {
        userId: string;
        email: string;
        url?: string;
        phrase?: boolean;
    }): Promise<Models.Token>;
    /**
     * Sends the user an email with a secret key for creating a session. If the provided user ID has not been registered, a new user will be created. When the user clicks the link in the email, the user is redirected back to the URL you provided with the secret key and userId values attached to the URL query string. Use the query string parameters to submit a request to the [POST /v1/account/sessions/token](https://appwrite.io/docs/references/cloud/client-web/account#createSession) endpoint to complete the login process. The link sent to the user's email address is valid for 1 hour.
     *
     * A user is limited to 10 active sessions at a time by default. [Learn more about session limits](https://appwrite.io/docs/authentication-security#limits).
     *
     *
     * @param {string} userId - Unique Id. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars. If the email address has never been used, a new account is created using the provided userId. Otherwise, if the email address is already attached to an account, the user ID is ignored.
     * @param {string} email - User email.
     * @param {string} url - URL to redirect the user back to your app from the magic URL login. Only URLs from hostnames in your project platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API.
     * @param {boolean} phrase - Toggle for security phrase. If enabled, email will be send with a randomly generated phrase and the phrase will also be included in the response. Confirming phrases match increases the security of your authentication flow.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Token>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createMagicURLToken(userId: string, email: string, url?: string, phrase?: boolean): Promise<Models.Token>;
    /**
     * Allow the user to login to their account using the OAuth2 provider of their choice. Each OAuth2 provider should be enabled from the Appwrite console first. Use the success and failure arguments to provide a redirect URL's back to your app when login is completed.
     *
     * If authentication succeeds, `userId` and `secret` of a token will be appended to the success URL as query parameters. These can be used to create a new session using the [Create session](https://appwrite.io/docs/references/cloud/client-web/account#createSession) endpoint.
     *
     * A user is limited to 10 active sessions at a time by default. [Learn more about session limits](https://appwrite.io/docs/authentication-security#limits).
     *
     * @param {OAuthProvider} params.provider - OAuth2 Provider. Currently, supported providers are: amazon, apple, auth0, authentik, autodesk, bitbucket, bitly, box, dailymotion, discord, disqus, dropbox, etsy, facebook, figma, github, gitlab, google, linkedin, microsoft, notion, oidc, okta, paypal, paypalSandbox, podio, salesforce, slack, spotify, stripe, tradeshift, tradeshiftBox, twitch, wordpress, yahoo, yammer, yandex, zoho, zoom.
     * @param {string} params.success - URL to redirect back to your app after a successful login attempt.  Only URLs from hostnames in your project's platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API.
     * @param {string} params.failure - URL to redirect back to your app after a failed login attempt.  Only URLs from hostnames in your project's platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API.
     * @param {string[]} params.scopes - A list of custom OAuth2 scopes. Check each provider internal docs for a list of supported scopes. Maximum of 100 scopes are allowed, each 4096 characters long.
     * @throws {AppwriteException}
     * @returns {void | string}
     */
    createOAuth2Token(params: {
        provider: OAuthProvider;
        success?: string;
        failure?: string;
        scopes?: string[];
    }): void | string;
    /**
     * Allow the user to login to their account using the OAuth2 provider of their choice. Each OAuth2 provider should be enabled from the Appwrite console first. Use the success and failure arguments to provide a redirect URL's back to your app when login is completed.
     *
     * If authentication succeeds, `userId` and `secret` of a token will be appended to the success URL as query parameters. These can be used to create a new session using the [Create session](https://appwrite.io/docs/references/cloud/client-web/account#createSession) endpoint.
     *
     * A user is limited to 10 active sessions at a time by default. [Learn more about session limits](https://appwrite.io/docs/authentication-security#limits).
     *
     * @param {OAuthProvider} provider - OAuth2 Provider. Currently, supported providers are: amazon, apple, auth0, authentik, autodesk, bitbucket, bitly, box, dailymotion, discord, disqus, dropbox, etsy, facebook, figma, github, gitlab, google, linkedin, microsoft, notion, oidc, okta, paypal, paypalSandbox, podio, salesforce, slack, spotify, stripe, tradeshift, tradeshiftBox, twitch, wordpress, yahoo, yammer, yandex, zoho, zoom.
     * @param {string} success - URL to redirect back to your app after a successful login attempt.  Only URLs from hostnames in your project's platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API.
     * @param {string} failure - URL to redirect back to your app after a failed login attempt.  Only URLs from hostnames in your project's platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API.
     * @param {string[]} scopes - A list of custom OAuth2 scopes. Check each provider internal docs for a list of supported scopes. Maximum of 100 scopes are allowed, each 4096 characters long.
     * @throws {AppwriteException}
     * @returns {void | string}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createOAuth2Token(provider: OAuthProvider, success?: string, failure?: string, scopes?: string[]): void | string;
    /**
     * Sends the user an SMS with a secret key for creating a session. If the provided user ID has not be registered, a new user will be created. Use the returned user ID and secret and submit a request to the [POST /v1/account/sessions/token](https://appwrite.io/docs/references/cloud/client-web/account#createSession) endpoint to complete the login process. The secret sent to the user's phone is valid for 15 minutes.
     *
     * A user is limited to 10 active sessions at a time by default. [Learn more about session limits](https://appwrite.io/docs/authentication-security#limits).
     *
     * @param {string} params.userId - Unique Id. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars. If the phone number has never been used, a new account is created using the provided userId. Otherwise, if the phone number is already attached to an account, the user ID is ignored.
     * @param {string} params.phone - Phone number. Format this number with a leading '+' and a country code, e.g., +16175551212.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Token>}
     */
    createPhoneToken(params: {
        userId: string;
        phone: string;
    }): Promise<Models.Token>;
    /**
     * Sends the user an SMS with a secret key for creating a session. If the provided user ID has not be registered, a new user will be created. Use the returned user ID and secret and submit a request to the [POST /v1/account/sessions/token](https://appwrite.io/docs/references/cloud/client-web/account#createSession) endpoint to complete the login process. The secret sent to the user's phone is valid for 15 minutes.
     *
     * A user is limited to 10 active sessions at a time by default. [Learn more about session limits](https://appwrite.io/docs/authentication-security#limits).
     *
     * @param {string} userId - Unique Id. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars. If the phone number has never been used, a new account is created using the provided userId. Otherwise, if the phone number is already attached to an account, the user ID is ignored.
     * @param {string} phone - Phone number. Format this number with a leading '+' and a country code, e.g., +16175551212.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Token>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createPhoneToken(userId: string, phone: string): Promise<Models.Token>;
    /**
     * Use this endpoint to send a verification message to your user email address to confirm they are the valid owners of that address. Both the **userId** and **secret** arguments will be passed as query parameters to the URL you have provided to be attached to the verification email. The provided URL should redirect the user back to your app and allow you to complete the verification process by verifying both the **userId** and **secret** parameters. Learn more about how to [complete the verification process](https://appwrite.io/docs/references/cloud/client-web/account#updateVerification). The verification link sent to the user's email address is valid for 7 days.
     *
     * Please note that in order to avoid a [Redirect Attack](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md), the only valid redirect URLs are the ones from domains you have set when adding your platforms in the console interface.
     *
     *
     * @param {string} params.url - URL to redirect the user back to your app from the verification email. Only URLs from hostnames in your project platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Token>}
     */
    createEmailVerification(params: {
        url: string;
    }): Promise<Models.Token>;
    /**
     * Use this endpoint to send a verification message to your user email address to confirm they are the valid owners of that address. Both the **userId** and **secret** arguments will be passed as query parameters to the URL you have provided to be attached to the verification email. The provided URL should redirect the user back to your app and allow you to complete the verification process by verifying both the **userId** and **secret** parameters. Learn more about how to [complete the verification process](https://appwrite.io/docs/references/cloud/client-web/account#updateVerification). The verification link sent to the user's email address is valid for 7 days.
     *
     * Please note that in order to avoid a [Redirect Attack](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md), the only valid redirect URLs are the ones from domains you have set when adding your platforms in the console interface.
     *
     *
     * @param {string} url - URL to redirect the user back to your app from the verification email. Only URLs from hostnames in your project platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Token>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createEmailVerification(url: string): Promise<Models.Token>;
    /**
     * Use this endpoint to send a verification message to your user email address to confirm they are the valid owners of that address. Both the **userId** and **secret** arguments will be passed as query parameters to the URL you have provided to be attached to the verification email. The provided URL should redirect the user back to your app and allow you to complete the verification process by verifying both the **userId** and **secret** parameters. Learn more about how to [complete the verification process](https://appwrite.io/docs/references/cloud/client-web/account#updateVerification). The verification link sent to the user's email address is valid for 7 days.
     *
     * Please note that in order to avoid a [Redirect Attack](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md), the only valid redirect URLs are the ones from domains you have set when adding your platforms in the console interface.
     *
     *
     * @param {string} params.url - URL to redirect the user back to your app from the verification email. Only URLs from hostnames in your project platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Token>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `Account.createEmailVerification` instead.
     */
    createVerification(params: {
        url: string;
    }): Promise<Models.Token>;
    /**
     * Use this endpoint to send a verification message to your user email address to confirm they are the valid owners of that address. Both the **userId** and **secret** arguments will be passed as query parameters to the URL you have provided to be attached to the verification email. The provided URL should redirect the user back to your app and allow you to complete the verification process by verifying both the **userId** and **secret** parameters. Learn more about how to [complete the verification process](https://appwrite.io/docs/references/cloud/client-web/account#updateVerification). The verification link sent to the user's email address is valid for 7 days.
     *
     * Please note that in order to avoid a [Redirect Attack](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md), the only valid redirect URLs are the ones from domains you have set when adding your platforms in the console interface.
     *
     *
     * @param {string} url - URL to redirect the user back to your app from the verification email. Only URLs from hostnames in your project platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Token>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createVerification(url: string): Promise<Models.Token>;
    /**
     * Use this endpoint to complete the user email verification process. Use both the **userId** and **secret** parameters that were attached to your app URL to verify the user email ownership. If confirmed this route will return a 200 status code.
     *
     * @param {string} params.userId - User ID.
     * @param {string} params.secret - Valid verification token.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Token>}
     */
    updateEmailVerification(params: {
        userId: string;
        secret: string;
    }): Promise<Models.Token>;
    /**
     * Use this endpoint to complete the user email verification process. Use both the **userId** and **secret** parameters that were attached to your app URL to verify the user email ownership. If confirmed this route will return a 200 status code.
     *
     * @param {string} userId - User ID.
     * @param {string} secret - Valid verification token.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Token>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateEmailVerification(userId: string, secret: string): Promise<Models.Token>;
    /**
     * Use this endpoint to complete the user email verification process. Use both the **userId** and **secret** parameters that were attached to your app URL to verify the user email ownership. If confirmed this route will return a 200 status code.
     *
     * @param {string} params.userId - User ID.
     * @param {string} params.secret - Valid verification token.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Token>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `Account.updateEmailVerification` instead.
     */
    updateVerification(params: {
        userId: string;
        secret: string;
    }): Promise<Models.Token>;
    /**
     * Use this endpoint to complete the user email verification process. Use both the **userId** and **secret** parameters that were attached to your app URL to verify the user email ownership. If confirmed this route will return a 200 status code.
     *
     * @param {string} userId - User ID.
     * @param {string} secret - Valid verification token.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Token>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateVerification(userId: string, secret: string): Promise<Models.Token>;
    /**
     * Use this endpoint to send a verification SMS to the currently logged in user. This endpoint is meant for use after updating a user's phone number using the [accountUpdatePhone](https://appwrite.io/docs/references/cloud/client-web/account#updatePhone) endpoint. Learn more about how to [complete the verification process](https://appwrite.io/docs/references/cloud/client-web/account#updatePhoneVerification). The verification code sent to the user's phone number is valid for 15 minutes.
     *
     * @throws {AppwriteException}
     * @returns {Promise<Models.Token>}
     */
    createPhoneVerification(): Promise<Models.Token>;
    /**
     * Use this endpoint to complete the user phone verification process. Use the **userId** and **secret** that were sent to your user's phone number to verify the user email ownership. If confirmed this route will return a 200 status code.
     *
     * @param {string} params.userId - User ID.
     * @param {string} params.secret - Valid verification token.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Token>}
     */
    updatePhoneVerification(params: {
        userId: string;
        secret: string;
    }): Promise<Models.Token>;
    /**
     * Use this endpoint to complete the user phone verification process. Use the **userId** and **secret** that were sent to your user's phone number to verify the user email ownership. If confirmed this route will return a 200 status code.
     *
     * @param {string} userId - User ID.
     * @param {string} secret - Valid verification token.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Token>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updatePhoneVerification(userId: string, secret: string): Promise<Models.Token>;
}
