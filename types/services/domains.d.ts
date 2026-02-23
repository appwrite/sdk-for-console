import { Client } from '../client';
import type { Models } from '../models';
import { RegistrationType } from '../enums/registration-type';
import { FilterType } from '../enums/filter-type';
export declare class Domains {
    client: Client;
    constructor(client: Client);
    /**
     *     List all domains registered for this project. This endpoint supports pagination.
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/databases#querying-documents). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on attributes such as domain name, teamInternalId, expiration, etc.
     * @param {string} params.search - Search term to filter your list results. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DomainsList>}
     */
    list(params?: {
        queries?: string[];
        search?: string;
    }): Promise<Models.DomainsList>;
    /**
     *     List all domains registered for this project. This endpoint supports pagination.
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/databases#querying-documents). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on attributes such as domain name, teamInternalId, expiration, etc.
     * @param {string} search - Search term to filter your list results. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DomainsList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    list(queries?: string[], search?: string): Promise<Models.DomainsList>;
    /**
     *     Create a new domain. Before creating a domain, you need to ensure that your DNS provider is properly configured. After creating the domain, you can use the verification endpoint to check if the domain is ready to be used.
     *
     * @param {string} params.teamId - Team unique ID.
     * @param {string} params.domain - Domain name (e.g. "example.com").
     * @throws {AppwriteException}
     * @returns {Promise<Models.Domain>}
     */
    create(params: {
        teamId: string;
        domain: string;
    }): Promise<Models.Domain>;
    /**
     *     Create a new domain. Before creating a domain, you need to ensure that your DNS provider is properly configured. After creating the domain, you can use the verification endpoint to check if the domain is ready to be used.
     *
     * @param {string} teamId - Team unique ID.
     * @param {string} domain - Domain name (e.g. "example.com").
     * @throws {AppwriteException}
     * @returns {Promise<Models.Domain>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    create(teamId: string, domain: string): Promise<Models.Domain>;
    /**
     *     Get the registration price for a domain name.
     *
     * @param {string} params.domain - Domain name to get price for.
     * @param {number} params.periodYears - Number of years to calculate the domain price for. Must be at least 1.
     * @param {RegistrationType} params.registrationType - Type of registration pricing to fetch. Allowed values: new, transfer, renewal, trade.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DomainPrice>}
     */
    getPrice(params: {
        domain: string;
        periodYears?: number;
        registrationType?: RegistrationType;
    }): Promise<Models.DomainPrice>;
    /**
     *     Get the registration price for a domain name.
     *
     * @param {string} domain - Domain name to get price for.
     * @param {number} periodYears - Number of years to calculate the domain price for. Must be at least 1.
     * @param {RegistrationType} registrationType - Type of registration pricing to fetch. Allowed values: new, transfer, renewal, trade.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DomainPrice>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getPrice(domain: string, periodYears?: number, registrationType?: RegistrationType): Promise<Models.DomainPrice>;
    /**
     *     Create a domain purchase with registrant information.
     *
     * @param {string} params.domain - Fully qualified domain name to purchase (for example, example.com).
     * @param {string} params.teamId - Team ID that will own the domain.
     * @param {string} params.firstName - Registrant first name used for domain registration.
     * @param {string} params.lastName - Registrant last name used for domain registration.
     * @param {string} params.email - Registrant email address for registration and notices.
     * @param {string} params.phone - Registrant phone number in E.164 format (for example, +15555551234).
     * @param {string} params.billingAddressId - Billing address ID used for registration contact details.
     * @param {string} params.paymentMethodId - Payment method ID to authorize and capture the purchase.
     * @param {string} params.addressLine3 - Additional address line for the registrant (line 3).
     * @param {string} params.companyName - Company or organization name for the registrant.
     * @param {number} params.periodYears - Registration term in years (1-10).
     * @throws {AppwriteException}
     * @returns {Promise<Models.Domain>}
     */
    createPurchase(params: {
        domain: string;
        teamId: string;
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        billingAddressId: string;
        paymentMethodId: string;
        addressLine3?: string;
        companyName?: string;
        periodYears?: number;
    }): Promise<Models.Domain>;
    /**
     *     Create a domain purchase with registrant information.
     *
     * @param {string} domain - Fully qualified domain name to purchase (for example, example.com).
     * @param {string} teamId - Team ID that will own the domain.
     * @param {string} firstName - Registrant first name used for domain registration.
     * @param {string} lastName - Registrant last name used for domain registration.
     * @param {string} email - Registrant email address for registration and notices.
     * @param {string} phone - Registrant phone number in E.164 format (for example, +15555551234).
     * @param {string} billingAddressId - Billing address ID used for registration contact details.
     * @param {string} paymentMethodId - Payment method ID to authorize and capture the purchase.
     * @param {string} addressLine3 - Additional address line for the registrant (line 3).
     * @param {string} companyName - Company or organization name for the registrant.
     * @param {number} periodYears - Registration term in years (1-10).
     * @throws {AppwriteException}
     * @returns {Promise<Models.Domain>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createPurchase(domain: string, teamId: string, firstName: string, lastName: string, email: string, phone: string, billingAddressId: string, paymentMethodId: string, addressLine3?: string, companyName?: string, periodYears?: number): Promise<Models.Domain>;
    /**
     *     List domain suggestions.
     *
     * @param {string} params.query - Query to find available domains and suggestions. Max length: 256 chars.
     * @param {string[]} params.tlds - TLDs to suggest.
     * @param {number} params.limit - Maximum number of suggestions to return.
     * @param {FilterType} params.filterType - Filter type: premium, suggestion.
     * @param {number} params.priceMax - Filter premium domains by maximum price. Only premium domains at or below this price will be returned. Does not affect regular domain suggestions.
     * @param {number} params.priceMin - Filter premium domains by minimum price. Only premium domains at or above this price will be returned. Does not affect regular domain suggestions.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DomainSuggestionsList>}
     */
    listSuggestions(params: {
        query: string;
        tlds?: string[];
        limit?: number;
        filterType?: FilterType;
        priceMax?: number;
        priceMin?: number;
    }): Promise<Models.DomainSuggestionsList>;
    /**
     *     List domain suggestions.
     *
     * @param {string} query - Query to find available domains and suggestions. Max length: 256 chars.
     * @param {string[]} tlds - TLDs to suggest.
     * @param {number} limit - Maximum number of suggestions to return.
     * @param {FilterType} filterType - Filter type: premium, suggestion.
     * @param {number} priceMax - Filter premium domains by maximum price. Only premium domains at or below this price will be returned. Does not affect regular domain suggestions.
     * @param {number} priceMin - Filter premium domains by minimum price. Only premium domains at or above this price will be returned. Does not affect regular domain suggestions.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DomainSuggestionsList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listSuggestions(query: string, tlds?: string[], limit?: number, filterType?: FilterType, priceMax?: number, priceMin?: number): Promise<Models.DomainSuggestionsList>;
    /**
     *     Get a domain by its unique ID.
     *
     * @param {string} params.domainId - Domain unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Domain>}
     */
    get(params: {
        domainId: string;
    }): Promise<Models.Domain>;
    /**
     *     Get a domain by its unique ID.
     *
     * @param {string} domainId - Domain unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Domain>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    get(domainId: string): Promise<Models.Domain>;
    /**
     * Delete a domain by its unique ID. This endpoint can be used to delete a domain from your project.
     * Once deleted, the domain will no longer be available for use and all associated resources will be removed.
     *
     * @param {string} params.domainId - Domain unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    delete(params: {
        domainId: string;
    }): Promise<{}>;
    /**
     * Delete a domain by its unique ID. This endpoint can be used to delete a domain from your project.
     * Once deleted, the domain will no longer be available for use and all associated resources will be removed.
     *
     * @param {string} domainId - Domain unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    delete(domainId: string): Promise<{}>;
    /**
     *     Verify which NS records are used and update the domain accordingly. This will check the domain's
     *     nameservers and update the domain's status based on whether the nameservers match the expected
     *     Appwrite nameservers.
     *
     * @param {string} params.domainId - Domain unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Domain>}
     */
    updateNameservers(params: {
        domainId: string;
    }): Promise<Models.Domain>;
    /**
     *     Verify which NS records are used and update the domain accordingly. This will check the domain's
     *     nameservers and update the domain's status based on whether the nameservers match the expected
     *     Appwrite nameservers.
     *
     * @param {string} domainId - Domain unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Domain>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateNameservers(domainId: string): Promise<Models.Domain>;
    /**
     *     List Google Workspace DNS records.
     *
     * @param {string} params.domainId - Domain unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecordsList>}
     */
    getPresetGoogleWorkspace(params: {
        domainId: string;
    }): Promise<Models.DnsRecordsList>;
    /**
     *     List Google Workspace DNS records.
     *
     * @param {string} domainId - Domain unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecordsList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getPresetGoogleWorkspace(domainId: string): Promise<Models.DnsRecordsList>;
    /**
     *     Add Google Workspace DNS records to the domain. This will create the required MX records
     *     for Google Workspace email hosting.
     *
     * @param {string} params.domainId - Domain unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecordsList>}
     */
    createPresetGoogleWorkspace(params: {
        domainId: string;
    }): Promise<Models.DnsRecordsList>;
    /**
     *     Add Google Workspace DNS records to the domain. This will create the required MX records
     *     for Google Workspace email hosting.
     *
     * @param {string} domainId - Domain unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecordsList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createPresetGoogleWorkspace(domainId: string): Promise<Models.DnsRecordsList>;
    /**
     *     List iCloud DNS records.
     *
     * @param {string} params.domainId - Domain unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecordsList>}
     */
    getPresetICloud(params: {
        domainId: string;
    }): Promise<Models.DnsRecordsList>;
    /**
     *     List iCloud DNS records.
     *
     * @param {string} domainId - Domain unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecordsList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getPresetICloud(domainId: string): Promise<Models.DnsRecordsList>;
    /**
     *     Add iCloud DNS records to the domain. This will create the required MX and SPF records
     *     for using iCloud email services with your domain.
     *
     * @param {string} params.domainId - Domain unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecordsList>}
     */
    createPresetICloud(params: {
        domainId: string;
    }): Promise<Models.DnsRecordsList>;
    /**
     *     Add iCloud DNS records to the domain. This will create the required MX and SPF records
     *     for using iCloud email services with your domain.
     *
     * @param {string} domainId - Domain unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecordsList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createPresetICloud(domainId: string): Promise<Models.DnsRecordsList>;
    /**
     *     List Mailgun DNS records.
     *
     * @param {string} params.domainId - Domain unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecordsList>}
     */
    getPresetMailgun(params: {
        domainId: string;
    }): Promise<Models.DnsRecordsList>;
    /**
     *     List Mailgun DNS records.
     *
     * @param {string} domainId - Domain unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecordsList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getPresetMailgun(domainId: string): Promise<Models.DnsRecordsList>;
    /**
     *     Add Mailgun DNS records to the domain. This endpoint will create the required DNS records
     *     for Mailgun in the specified domain.
     *
     * @param {string} params.domainId - Domain unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecordsList>}
     */
    createPresetMailgun(params: {
        domainId: string;
    }): Promise<Models.DnsRecordsList>;
    /**
     *     Add Mailgun DNS records to the domain. This endpoint will create the required DNS records
     *     for Mailgun in the specified domain.
     *
     * @param {string} domainId - Domain unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecordsList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createPresetMailgun(domainId: string): Promise<Models.DnsRecordsList>;
    /**
     *     List Outlook DNS records.
     *
     * @param {string} params.domainId - Domain unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecordsList>}
     */
    getPresetOutlook(params: {
        domainId: string;
    }): Promise<Models.DnsRecordsList>;
    /**
     *     List Outlook DNS records.
     *
     * @param {string} domainId - Domain unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecordsList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getPresetOutlook(domainId: string): Promise<Models.DnsRecordsList>;
    /**
     *     Add Outlook DNS records to the domain. This will create the required MX records
     *     for setting up Outlook email hosting for your domain.
     *
     * @param {string} params.domainId - Domain unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecordsList>}
     */
    createPresetOutlook(params: {
        domainId: string;
    }): Promise<Models.DnsRecordsList>;
    /**
     *     Add Outlook DNS records to the domain. This will create the required MX records
     *     for setting up Outlook email hosting for your domain.
     *
     * @param {string} domainId - Domain unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecordsList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createPresetOutlook(domainId: string): Promise<Models.DnsRecordsList>;
    /**
     *     List ProtonMail DNS records.
     *
     * @param {string} params.domainId - Domain unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecordsList>}
     */
    getPresetProtonMail(params: {
        domainId: string;
    }): Promise<Models.DnsRecordsList>;
    /**
     *     List ProtonMail DNS records.
     *
     * @param {string} domainId - Domain unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecordsList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getPresetProtonMail(domainId: string): Promise<Models.DnsRecordsList>;
    /**
     *     Add ProtonMail DNS records to the domain. This will create the required MX records
     *     for using ProtonMail with your custom domain.
     *
     * @param {string} params.domainId - Domain unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecordsList>}
     */
    createPresetProtonMail(params: {
        domainId: string;
    }): Promise<Models.DnsRecordsList>;
    /**
     *     Add ProtonMail DNS records to the domain. This will create the required MX records
     *     for using ProtonMail with your custom domain.
     *
     * @param {string} domainId - Domain unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecordsList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createPresetProtonMail(domainId: string): Promise<Models.DnsRecordsList>;
    /**
     *     List Zoho DNS records.
     *
     * @param {string} params.domainId - Domain unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecordsList>}
     */
    getPresetZoho(params: {
        domainId: string;
    }): Promise<Models.DnsRecordsList>;
    /**
     *     List Zoho DNS records.
     *
     * @param {string} domainId - Domain unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecordsList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getPresetZoho(domainId: string): Promise<Models.DnsRecordsList>;
    /**
     *     Add Zoho Mail DNS records to the domain. This will create the required MX records
     *     for setting up Zoho Mail on your domain.
     *
     * @param {string} params.domainId - Domain unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecordsList>}
     */
    createPresetZoho(params: {
        domainId: string;
    }): Promise<Models.DnsRecordsList>;
    /**
     *     Add Zoho Mail DNS records to the domain. This will create the required MX records
     *     for setting up Zoho Mail on your domain.
     *
     * @param {string} domainId - Domain unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecordsList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createPresetZoho(domainId: string): Promise<Models.DnsRecordsList>;
    /**
     *     List DNS records for a given domain. You can use this endpoint to list all the DNS records
     *     associated with your domain.
     *
     * @param {string} params.domainId - Domain unique ID.
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. You may filter on attributes such as type, name, value, etc. Maximum of 100 queries are allowed, each 4096 characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecordsList>}
     */
    listRecords(params: {
        domainId: string;
        queries?: string[];
    }): Promise<Models.DnsRecordsList>;
    /**
     *     List DNS records for a given domain. You can use this endpoint to list all the DNS records
     *     associated with your domain.
     *
     * @param {string} domainId - Domain unique ID.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. You may filter on attributes such as type, name, value, etc. Maximum of 100 queries are allowed, each 4096 characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecordsList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listRecords(domainId: string, queries?: string[]): Promise<Models.DnsRecordsList>;
    /**
     * Create a new A record for the given domain. A records are used to point a domain name
     * to an IPv4 address. The record value should be a valid IPv4 address.
     *
     * @param {string} params.domainId - Domain unique ID.
     * @param {string} params.name - Record name (subdomain).
     * @param {string} params.value - IPv4 address for this A record.
     * @param {number} params.ttl - Time to live, in seconds. Must be greater than 0.
     * @param {string} params.comment - A comment explaining what this record is for.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     */
    createRecordA(params: {
        domainId: string;
        name: string;
        value: string;
        ttl: number;
        comment?: string;
    }): Promise<Models.DnsRecord>;
    /**
     * Create a new A record for the given domain. A records are used to point a domain name
     * to an IPv4 address. The record value should be a valid IPv4 address.
     *
     * @param {string} domainId - Domain unique ID.
     * @param {string} name - Record name (subdomain).
     * @param {string} value - IPv4 address for this A record.
     * @param {number} ttl - Time to live, in seconds. Must be greater than 0.
     * @param {string} comment - A comment explaining what this record is for.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createRecordA(domainId: string, name: string, value: string, ttl: number, comment?: string): Promise<Models.DnsRecord>;
    /**
     *     Update an existing A record for the given domain. This endpoint allows you to modify
     *     the properties of an A record including its name (subdomain), IPv4 address, TTL,
     *     and optional comment.
     *
     * @param {string} params.domainId - Domain unique ID.
     * @param {string} params.recordId - DNS record unique ID.
     * @param {string} params.name - Record name (subdomain).
     * @param {string} params.value - IPv4 address for this A record.
     * @param {number} params.ttl - Time to live, in seconds. Must be greater than 0.
     * @param {string} params.comment - A comment explaining what this record is for.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     */
    updateRecordA(params: {
        domainId: string;
        recordId: string;
        name: string;
        value: string;
        ttl: number;
        comment?: string;
    }): Promise<Models.DnsRecord>;
    /**
     *     Update an existing A record for the given domain. This endpoint allows you to modify
     *     the properties of an A record including its name (subdomain), IPv4 address, TTL,
     *     and optional comment.
     *
     * @param {string} domainId - Domain unique ID.
     * @param {string} recordId - DNS record unique ID.
     * @param {string} name - Record name (subdomain).
     * @param {string} value - IPv4 address for this A record.
     * @param {number} ttl - Time to live, in seconds. Must be greater than 0.
     * @param {string} comment - A comment explaining what this record is for.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateRecordA(domainId: string, recordId: string, name: string, value: string, ttl: number, comment?: string): Promise<Models.DnsRecord>;
    /**
     *     Create a new AAAA record for the given domain. This endpoint allows you to add a new IPv6 DNS record
     *     to your domain. The record will be used to point a hostname to an IPv6 address.
     *
     * @param {string} params.domainId - Domain unique ID.
     * @param {string} params.name - Record name (subdomain).
     * @param {string} params.value - IPv6 address for this AAAA record.
     * @param {number} params.ttl - Time to live, in seconds. Must be greater than 0.
     * @param {string} params.comment - A comment explaining what this record is for.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     */
    createRecordAAAA(params: {
        domainId: string;
        name: string;
        value: string;
        ttl: number;
        comment?: string;
    }): Promise<Models.DnsRecord>;
    /**
     *     Create a new AAAA record for the given domain. This endpoint allows you to add a new IPv6 DNS record
     *     to your domain. The record will be used to point a hostname to an IPv6 address.
     *
     * @param {string} domainId - Domain unique ID.
     * @param {string} name - Record name (subdomain).
     * @param {string} value - IPv6 address for this AAAA record.
     * @param {number} ttl - Time to live, in seconds. Must be greater than 0.
     * @param {string} comment - A comment explaining what this record is for.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createRecordAAAA(domainId: string, name: string, value: string, ttl: number, comment?: string): Promise<Models.DnsRecord>;
    /**
     *     Update an existing AAAA record for the given domain. This endpoint allows you to modify
     *     the properties of an existing AAAA record, including its name (subdomain), IPv6 address,
     *     TTL, and optional comment.
     *
     * @param {string} params.domainId - Domain unique ID.
     * @param {string} params.recordId - DNS record unique ID.
     * @param {string} params.name - Record name (subdomain).
     * @param {string} params.value - IPv6 address for this AAAA record.
     * @param {number} params.ttl - Time to live, in seconds. Must be greater than 0.
     * @param {string} params.comment - A comment for this record.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     */
    updateRecordAAAA(params: {
        domainId: string;
        recordId: string;
        name: string;
        value: string;
        ttl: number;
        comment?: string;
    }): Promise<Models.DnsRecord>;
    /**
     *     Update an existing AAAA record for the given domain. This endpoint allows you to modify
     *     the properties of an existing AAAA record, including its name (subdomain), IPv6 address,
     *     TTL, and optional comment.
     *
     * @param {string} domainId - Domain unique ID.
     * @param {string} recordId - DNS record unique ID.
     * @param {string} name - Record name (subdomain).
     * @param {string} value - IPv6 address for this AAAA record.
     * @param {number} ttl - Time to live, in seconds. Must be greater than 0.
     * @param {string} comment - A comment for this record.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateRecordAAAA(domainId: string, recordId: string, name: string, value: string, ttl: number, comment?: string): Promise<Models.DnsRecord>;
    /**
     *     Create a new ALIAS record for the given domain. This record type can be used to point your domain
     *     to another domain name that will serve as an alias. This is particularly useful when you want to
     *     map your domain to a target domain that may change its IP address.
     *
     * @param {string} params.domainId - Domain unique ID.
     * @param {string} params.name - Record name.
     * @param {string} params.value - Target domain for this ALIAS record.
     * @param {number} params.ttl - Time to live, in seconds. Must be greater than 0.
     * @param {string} params.comment - A comment for this record.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     */
    createRecordAlias(params: {
        domainId: string;
        name: string;
        value: string;
        ttl: number;
        comment?: string;
    }): Promise<Models.DnsRecord>;
    /**
     *     Create a new ALIAS record for the given domain. This record type can be used to point your domain
     *     to another domain name that will serve as an alias. This is particularly useful when you want to
     *     map your domain to a target domain that may change its IP address.
     *
     * @param {string} domainId - Domain unique ID.
     * @param {string} name - Record name.
     * @param {string} value - Target domain for this ALIAS record.
     * @param {number} ttl - Time to live, in seconds. Must be greater than 0.
     * @param {string} comment - A comment for this record.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createRecordAlias(domainId: string, name: string, value: string, ttl: number, comment?: string): Promise<Models.DnsRecord>;
    /**
     *     Update an existing ALIAS record for the specified domain. This endpoint allows you to modify
     *     the properties of an existing ALIAS record including its name, target domain, TTL, and comment.
     *
     *     The ALIAS record type is similar to a CNAME record but can be used at the zone apex (root domain).
     *     It provides a way to map one domain name to another.
     *
     * @param {string} params.domainId - Domain unique ID.
     * @param {string} params.recordId - DNS record unique ID.
     * @param {string} params.name - Record name.
     * @param {string} params.value - Target domain for this ALIAS record.
     * @param {number} params.ttl - Time to live, in seconds. Must be greater than 0.
     * @param {string} params.comment - A comment for this record.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     */
    updateRecordAlias(params: {
        domainId: string;
        recordId: string;
        name: string;
        value: string;
        ttl: number;
        comment?: string;
    }): Promise<Models.DnsRecord>;
    /**
     *     Update an existing ALIAS record for the specified domain. This endpoint allows you to modify
     *     the properties of an existing ALIAS record including its name, target domain, TTL, and comment.
     *
     *     The ALIAS record type is similar to a CNAME record but can be used at the zone apex (root domain).
     *     It provides a way to map one domain name to another.
     *
     * @param {string} domainId - Domain unique ID.
     * @param {string} recordId - DNS record unique ID.
     * @param {string} name - Record name.
     * @param {string} value - Target domain for this ALIAS record.
     * @param {number} ttl - Time to live, in seconds. Must be greater than 0.
     * @param {string} comment - A comment for this record.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateRecordAlias(domainId: string, recordId: string, name: string, value: string, ttl: number, comment?: string): Promise<Models.DnsRecord>;
    /**
     * Create a new CAA record for the given domain. CAA records are used to specify which
     * Certificate Authorities (CAs) are allowed to issue SSL/TLS certificates for your domain.
     *
     * @param {string} params.domainId - Domain unique ID.
     * @param {string} params.name - Record name.
     * @param {string} params.value - CAA value (e.g. issuer domain).
     * @param {number} params.ttl - Time to live, in seconds. Must be greater than 0.
     * @param {string} params.comment - A comment for this record.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     */
    createRecordCAA(params: {
        domainId: string;
        name: string;
        value: string;
        ttl: number;
        comment?: string;
    }): Promise<Models.DnsRecord>;
    /**
     * Create a new CAA record for the given domain. CAA records are used to specify which
     * Certificate Authorities (CAs) are allowed to issue SSL/TLS certificates for your domain.
     *
     * @param {string} domainId - Domain unique ID.
     * @param {string} name - Record name.
     * @param {string} value - CAA value (e.g. issuer domain).
     * @param {number} ttl - Time to live, in seconds. Must be greater than 0.
     * @param {string} comment - A comment for this record.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createRecordCAA(domainId: string, name: string, value: string, ttl: number, comment?: string): Promise<Models.DnsRecord>;
    /**
     *     Update an existing CAA record for the given domain. A CAA (Certification Authority Authorization)
     *     record is used to specify which certificate authorities (CAs) are authorized to issue certificates
     *     for a domain.
     *
     * @param {string} params.domainId - Domain unique ID.
     * @param {string} params.recordId - DNS record unique ID.
     * @param {string} params.name - Record name.
     * @param {string} params.value - CAA value (e.g. issuer domain).
     * @param {number} params.ttl - Time to live, in seconds. Must be greater than 0.
     * @param {string} params.comment - A comment for this record.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     */
    updateRecordCAA(params: {
        domainId: string;
        recordId: string;
        name: string;
        value: string;
        ttl: number;
        comment?: string;
    }): Promise<Models.DnsRecord>;
    /**
     *     Update an existing CAA record for the given domain. A CAA (Certification Authority Authorization)
     *     record is used to specify which certificate authorities (CAs) are authorized to issue certificates
     *     for a domain.
     *
     * @param {string} domainId - Domain unique ID.
     * @param {string} recordId - DNS record unique ID.
     * @param {string} name - Record name.
     * @param {string} value - CAA value (e.g. issuer domain).
     * @param {number} ttl - Time to live, in seconds. Must be greater than 0.
     * @param {string} comment - A comment for this record.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateRecordCAA(domainId: string, recordId: string, name: string, value: string, ttl: number, comment?: string): Promise<Models.DnsRecord>;
    /**
     *     Create a new CNAME record for the given domain.
     *
     *     A CNAME record maps a subdomain to another domain name, allowing you to create aliases
     *     for your domain. For example, you can create a CNAME record to point 'blog.example.com'
     *     to 'example.wordpress.com'.
     *
     * @param {string} params.domainId - Domain unique ID.
     * @param {string} params.name - Record name (subdomain).
     * @param {string} params.value - Canonical target for this CNAME record.
     * @param {number} params.ttl - Time to live, in seconds. Must be greater than 0.
     * @param {string} params.comment - A comment for this record.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     */
    createRecordCNAME(params: {
        domainId: string;
        name: string;
        value: string;
        ttl: number;
        comment?: string;
    }): Promise<Models.DnsRecord>;
    /**
     *     Create a new CNAME record for the given domain.
     *
     *     A CNAME record maps a subdomain to another domain name, allowing you to create aliases
     *     for your domain. For example, you can create a CNAME record to point 'blog.example.com'
     *     to 'example.wordpress.com'.
     *
     * @param {string} domainId - Domain unique ID.
     * @param {string} name - Record name (subdomain).
     * @param {string} value - Canonical target for this CNAME record.
     * @param {number} ttl - Time to live, in seconds. Must be greater than 0.
     * @param {string} comment - A comment for this record.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createRecordCNAME(domainId: string, name: string, value: string, ttl: number, comment?: string): Promise<Models.DnsRecord>;
    /**
     *     Update an existing CNAME record for the given domain.
     *
     * @param {string} params.domainId - Domain unique ID.
     * @param {string} params.recordId - DNS record unique ID.
     * @param {string} params.name - Record name (subdomain).
     * @param {string} params.value - Canonical target for this CNAME record.
     * @param {number} params.ttl - Time to live, in seconds. Must be greater than 0.
     * @param {string} params.comment - A comment for this record.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     */
    updateRecordCNAME(params: {
        domainId: string;
        recordId: string;
        name: string;
        value: string;
        ttl: number;
        comment?: string;
    }): Promise<Models.DnsRecord>;
    /**
     *     Update an existing CNAME record for the given domain.
     *
     * @param {string} domainId - Domain unique ID.
     * @param {string} recordId - DNS record unique ID.
     * @param {string} name - Record name (subdomain).
     * @param {string} value - Canonical target for this CNAME record.
     * @param {number} ttl - Time to live, in seconds. Must be greater than 0.
     * @param {string} comment - A comment for this record.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateRecordCNAME(domainId: string, recordId: string, name: string, value: string, ttl: number, comment?: string): Promise<Models.DnsRecord>;
    /**
     *     Create a new HTTPS record for the given domain. This record is used to configure HTTPS
     *     settings for your domain, enabling secure communication over SSL/TLS.
     *
     * @param {string} params.domainId - Domain unique ID.
     * @param {string} params.name - Record name (subdomain).
     * @param {string} params.value - Target for the HTTPS record.
     * @param {number} params.ttl - Time to live, in seconds. Must be greater than 0.
     * @param {string} params.comment - A comment for this record.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     */
    createRecordHTTPS(params: {
        domainId: string;
        name: string;
        value: string;
        ttl: number;
        comment?: string;
    }): Promise<Models.DnsRecord>;
    /**
     *     Create a new HTTPS record for the given domain. This record is used to configure HTTPS
     *     settings for your domain, enabling secure communication over SSL/TLS.
     *
     * @param {string} domainId - Domain unique ID.
     * @param {string} name - Record name (subdomain).
     * @param {string} value - Target for the HTTPS record.
     * @param {number} ttl - Time to live, in seconds. Must be greater than 0.
     * @param {string} comment - A comment for this record.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createRecordHTTPS(domainId: string, name: string, value: string, ttl: number, comment?: string): Promise<Models.DnsRecord>;
    /**
     * Update an existing HTTPS record for the given domain. This endpoint allows you to modify
     * the properties of an HTTPS record associated with your domain, including the name (subdomain),
     * target value, TTL, and optional comment.
     *
     * @param {string} params.domainId - Domain unique ID.
     * @param {string} params.recordId - DNS record unique ID.
     * @param {string} params.name - Record name (subdomain).
     * @param {string} params.value - Target for the HTTPS record.
     * @param {number} params.ttl - Time to live, in seconds. Must be greater than 0.
     * @param {string} params.comment - A comment for this record.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     */
    updateRecordHTTPS(params: {
        domainId: string;
        recordId: string;
        name: string;
        value: string;
        ttl: number;
        comment?: string;
    }): Promise<Models.DnsRecord>;
    /**
     * Update an existing HTTPS record for the given domain. This endpoint allows you to modify
     * the properties of an HTTPS record associated with your domain, including the name (subdomain),
     * target value, TTL, and optional comment.
     *
     * @param {string} domainId - Domain unique ID.
     * @param {string} recordId - DNS record unique ID.
     * @param {string} name - Record name (subdomain).
     * @param {string} value - Target for the HTTPS record.
     * @param {number} ttl - Time to live, in seconds. Must be greater than 0.
     * @param {string} comment - A comment for this record.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateRecordHTTPS(domainId: string, recordId: string, name: string, value: string, ttl: number, comment?: string): Promise<Models.DnsRecord>;
    /**
     *     Create a new MX record for the given domain. MX records are used to define the mail servers responsible
     *     for accepting email messages for the domain. Multiple MX records can be created with different priorities.
     *     The priority parameter determines the order in which mail servers are used, with lower values indicating
     *     higher priority.
     *
     * @param {string} params.domainId - Domain unique ID.
     * @param {string} params.name - Record name (subdomain).
     * @param {string} params.value - Mail server domain for this MX record.
     * @param {number} params.ttl - Time to live, in seconds. Must be greater than 0.
     * @param {number} params.priority - MX priority.
     * @param {string} params.comment - A comment for this record.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     */
    createRecordMX(params: {
        domainId: string;
        name: string;
        value: string;
        ttl: number;
        priority: number;
        comment?: string;
    }): Promise<Models.DnsRecord>;
    /**
     *     Create a new MX record for the given domain. MX records are used to define the mail servers responsible
     *     for accepting email messages for the domain. Multiple MX records can be created with different priorities.
     *     The priority parameter determines the order in which mail servers are used, with lower values indicating
     *     higher priority.
     *
     * @param {string} domainId - Domain unique ID.
     * @param {string} name - Record name (subdomain).
     * @param {string} value - Mail server domain for this MX record.
     * @param {number} ttl - Time to live, in seconds. Must be greater than 0.
     * @param {number} priority - MX priority.
     * @param {string} comment - A comment for this record.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createRecordMX(domainId: string, name: string, value: string, ttl: number, priority: number, comment?: string): Promise<Models.DnsRecord>;
    /**
     *     Update an existing MX record for the given domain.
     *
     * @param {string} params.domainId - Domain unique ID.
     * @param {string} params.recordId - DNS record unique ID.
     * @param {string} params.name - Record name (subdomain).
     * @param {string} params.value - Mail server domain for this MX record.
     * @param {number} params.ttl - Time to live, in seconds. Must be greater than 0.
     * @param {number} params.priority - MX priority.
     * @param {string} params.comment - A comment for this record.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     */
    updateRecordMX(params: {
        domainId: string;
        recordId: string;
        name: string;
        value: string;
        ttl: number;
        priority: number;
        comment?: string;
    }): Promise<Models.DnsRecord>;
    /**
     *     Update an existing MX record for the given domain.
     *
     * @param {string} domainId - Domain unique ID.
     * @param {string} recordId - DNS record unique ID.
     * @param {string} name - Record name (subdomain).
     * @param {string} value - Mail server domain for this MX record.
     * @param {number} ttl - Time to live, in seconds. Must be greater than 0.
     * @param {number} priority - MX priority.
     * @param {string} comment - A comment for this record.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateRecordMX(domainId: string, recordId: string, name: string, value: string, ttl: number, priority: number, comment?: string): Promise<Models.DnsRecord>;
    /**
     *     Create a new NS record for the given domain. NS records specify the nameservers that are used
     *     to resolve the domain name to IP addresses. Each domain can have multiple NS records.
     *
     * @param {string} params.domainId - Domain unique ID.
     * @param {string} params.name - Record name (subdomain).
     * @param {string} params.value - Nameserver target for this NS record.
     * @param {number} params.ttl - Time to live, in seconds. Must be greater than 0.
     * @param {string} params.comment - A comment for this record.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     */
    createRecordNS(params: {
        domainId: string;
        name: string;
        value: string;
        ttl: number;
        comment?: string;
    }): Promise<Models.DnsRecord>;
    /**
     *     Create a new NS record for the given domain. NS records specify the nameservers that are used
     *     to resolve the domain name to IP addresses. Each domain can have multiple NS records.
     *
     * @param {string} domainId - Domain unique ID.
     * @param {string} name - Record name (subdomain).
     * @param {string} value - Nameserver target for this NS record.
     * @param {number} ttl - Time to live, in seconds. Must be greater than 0.
     * @param {string} comment - A comment for this record.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createRecordNS(domainId: string, name: string, value: string, ttl: number, comment?: string): Promise<Models.DnsRecord>;
    /**
     *     Update an existing NS record for the given domain. This endpoint allows you to modify
     *     the properties of an NS (nameserver) record associated with your domain. You can update
     *     the record name (subdomain), target nameserver value, TTL, and add or modify comments
     *     for better record management.
     *
     * @param {string} params.domainId - Domain unique ID.
     * @param {string} params.recordId - DNS record unique ID.
     * @param {string} params.name - Record name (subdomain).
     * @param {string} params.value - Nameserver target for this NS record.
     * @param {number} params.ttl - Time to live, in seconds. Must be greater than 0.
     * @param {string} params.comment - A comment for this record.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     */
    updateRecordNS(params: {
        domainId: string;
        recordId: string;
        name: string;
        value: string;
        ttl: number;
        comment?: string;
    }): Promise<Models.DnsRecord>;
    /**
     *     Update an existing NS record for the given domain. This endpoint allows you to modify
     *     the properties of an NS (nameserver) record associated with your domain. You can update
     *     the record name (subdomain), target nameserver value, TTL, and add or modify comments
     *     for better record management.
     *
     * @param {string} domainId - Domain unique ID.
     * @param {string} recordId - DNS record unique ID.
     * @param {string} name - Record name (subdomain).
     * @param {string} value - Nameserver target for this NS record.
     * @param {number} ttl - Time to live, in seconds. Must be greater than 0.
     * @param {string} comment - A comment for this record.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateRecordNS(domainId: string, recordId: string, name: string, value: string, ttl: number, comment?: string): Promise<Models.DnsRecord>;
    /**
     *     Create a new SRV record for the given domain. SRV records are used to define the location
     *     of servers for specific services. For example, they can be used to specify which server
     *     handles a specific service like SIP or XMPP for the domain.
     *
     * @param {string} params.domainId - Domain unique ID.
     * @param {string} params.name - Record name (service name).
     * @param {string} params.value - Target hostname for this SRV record.
     * @param {number} params.ttl - Time to live, in seconds. Must be greater than 0.
     * @param {number} params.priority - Record priority.
     * @param {number} params.weight - Record weight.
     * @param {number} params.port - Port number for the service.
     * @param {string} params.comment - A comment for this record.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     */
    createRecordSRV(params: {
        domainId: string;
        name: string;
        value: string;
        ttl: number;
        priority: number;
        weight: number;
        port: number;
        comment?: string;
    }): Promise<Models.DnsRecord>;
    /**
     *     Create a new SRV record for the given domain. SRV records are used to define the location
     *     of servers for specific services. For example, they can be used to specify which server
     *     handles a specific service like SIP or XMPP for the domain.
     *
     * @param {string} domainId - Domain unique ID.
     * @param {string} name - Record name (service name).
     * @param {string} value - Target hostname for this SRV record.
     * @param {number} ttl - Time to live, in seconds. Must be greater than 0.
     * @param {number} priority - Record priority.
     * @param {number} weight - Record weight.
     * @param {number} port - Port number for the service.
     * @param {string} comment - A comment for this record.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createRecordSRV(domainId: string, name: string, value: string, ttl: number, priority: number, weight: number, port: number, comment?: string): Promise<Models.DnsRecord>;
    /**
     *     Update an existing SRV record for the given domain.
     *
     *     Required parameters:
     *     - domainId: Domain unique ID
     *     - recordId: DNS record unique ID
     *     - name: Record name (service name)
     *     - value: Target hostname for this SRV record
     *     - ttl: Time to live, in seconds
     *     - priority: Record priority
     *     - weight: Record weight
     *     - port: Port number for the service
     *
     *     Optional parameters:
     *     - comment: A comment for this record
     *
     * @param {string} params.domainId - Domain unique ID.
     * @param {string} params.recordId - DNS record unique ID.
     * @param {string} params.name - Record name (service name).
     * @param {string} params.value - Target hostname for this SRV record.
     * @param {number} params.ttl - Time to live, in seconds. Must be greater than 0.
     * @param {number} params.priority - Record priority.
     * @param {number} params.weight - Record weight.
     * @param {number} params.port - Port number for the service.
     * @param {string} params.comment - A comment for this record.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     */
    updateRecordSRV(params: {
        domainId: string;
        recordId: string;
        name: string;
        value: string;
        ttl: number;
        priority: number;
        weight: number;
        port: number;
        comment?: string;
    }): Promise<Models.DnsRecord>;
    /**
     *     Update an existing SRV record for the given domain.
     *
     *     Required parameters:
     *     - domainId: Domain unique ID
     *     - recordId: DNS record unique ID
     *     - name: Record name (service name)
     *     - value: Target hostname for this SRV record
     *     - ttl: Time to live, in seconds
     *     - priority: Record priority
     *     - weight: Record weight
     *     - port: Port number for the service
     *
     *     Optional parameters:
     *     - comment: A comment for this record
     *
     * @param {string} domainId - Domain unique ID.
     * @param {string} recordId - DNS record unique ID.
     * @param {string} name - Record name (service name).
     * @param {string} value - Target hostname for this SRV record.
     * @param {number} ttl - Time to live, in seconds. Must be greater than 0.
     * @param {number} priority - Record priority.
     * @param {number} weight - Record weight.
     * @param {number} port - Port number for the service.
     * @param {string} comment - A comment for this record.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateRecordSRV(domainId: string, recordId: string, name: string, value: string, ttl: number, priority: number, weight: number, port: number, comment?: string): Promise<Models.DnsRecord>;
    /**
     *     Create a new TXT record for the given domain. TXT records can be used
     *     to provide additional information about your domain, such as domain
     *     verification records, SPF records, or DKIM records.
     *
     * @param {string} params.domainId - Domain unique ID.
     * @param {string} params.name - Record name (subdomain) for the TXT record.
     * @param {number} params.ttl - Time to live, in seconds. Must be greater than 0.
     * @param {string} params.value - TXT record value.
     * @param {string} params.comment - A comment for this record.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     */
    createRecordTXT(params: {
        domainId: string;
        name: string;
        ttl: number;
        value?: string;
        comment?: string;
    }): Promise<Models.DnsRecord>;
    /**
     *     Create a new TXT record for the given domain. TXT records can be used
     *     to provide additional information about your domain, such as domain
     *     verification records, SPF records, or DKIM records.
     *
     * @param {string} domainId - Domain unique ID.
     * @param {string} name - Record name (subdomain) for the TXT record.
     * @param {number} ttl - Time to live, in seconds. Must be greater than 0.
     * @param {string} value - TXT record value.
     * @param {string} comment - A comment for this record.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createRecordTXT(domainId: string, name: string, ttl: number, value?: string, comment?: string): Promise<Models.DnsRecord>;
    /**
     *     Update an existing TXT record for the given domain.
     *
     *     Update the TXT record details for a specific domain by providing the domain ID,
     *     record ID, and the new record configuration including name, value, TTL, and an optional comment.
     *
     * @param {string} params.domainId - Domain unique ID.
     * @param {string} params.recordId - DNS record unique ID.
     * @param {string} params.name - Record name (subdomain) for the TXT record.
     * @param {string} params.value - TXT record value.
     * @param {number} params.ttl - Time to live, in seconds. Must be greater than 0.
     * @param {string} params.comment - A comment for this record.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     */
    updateRecordTXT(params: {
        domainId: string;
        recordId: string;
        name: string;
        value: string;
        ttl: number;
        comment?: string;
    }): Promise<Models.DnsRecord>;
    /**
     *     Update an existing TXT record for the given domain.
     *
     *     Update the TXT record details for a specific domain by providing the domain ID,
     *     record ID, and the new record configuration including name, value, TTL, and an optional comment.
     *
     * @param {string} domainId - Domain unique ID.
     * @param {string} recordId - DNS record unique ID.
     * @param {string} name - Record name (subdomain) for the TXT record.
     * @param {string} value - TXT record value.
     * @param {number} ttl - Time to live, in seconds. Must be greater than 0.
     * @param {string} comment - A comment for this record.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateRecordTXT(domainId: string, recordId: string, name: string, value: string, ttl: number, comment?: string): Promise<Models.DnsRecord>;
    /**
     *     Get a single DNS record for a given domain by record ID.
     *
     *     This endpoint allows you to retrieve a specific DNS record associated with a domain
     *     using its unique identifier. The record contains information about the DNS configuration
     *     such as type, value, and TTL settings.
     *
     * @param {string} params.domainId - Domain unique ID.
     * @param {string} params.recordId - DNS record unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     */
    getRecord(params: {
        domainId: string;
        recordId: string;
    }): Promise<Models.DnsRecord>;
    /**
     *     Get a single DNS record for a given domain by record ID.
     *
     *     This endpoint allows you to retrieve a specific DNS record associated with a domain
     *     using its unique identifier. The record contains information about the DNS configuration
     *     such as type, value, and TTL settings.
     *
     * @param {string} domainId - Domain unique ID.
     * @param {string} recordId - DNS record unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getRecord(domainId: string, recordId: string): Promise<Models.DnsRecord>;
    /**
     *     Delete a DNS record for the given domain. This endpoint allows you to delete an existing DNS record
     *     from a specific domain.
     *
     * @param {string} params.domainId - Domain unique ID.
     * @param {string} params.recordId - DNS record unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteRecord(params: {
        domainId: string;
        recordId: string;
    }): Promise<{}>;
    /**
     *     Delete a DNS record for the given domain. This endpoint allows you to delete an existing DNS record
     *     from a specific domain.
     *
     * @param {string} domainId - Domain unique ID.
     * @param {string} recordId - DNS record unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteRecord(domainId: string, recordId: string): Promise<{}>;
    /**
     *     Update the team ID for a specific domain. This endpoint requires admin access.
     *
     *     Updating the team ID will transfer ownership and access control of the domain
     *     and all its DNS records to the new team.
     *
     * @param {string} params.domainId - Domain unique ID.
     * @param {string} params.teamId - New team unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Domain>}
     */
    updateTeam(params: {
        domainId: string;
        teamId: string;
    }): Promise<Models.Domain>;
    /**
     *     Update the team ID for a specific domain. This endpoint requires admin access.
     *
     *     Updating the team ID will transfer ownership and access control of the domain
     *     and all its DNS records to the new team.
     *
     * @param {string} domainId - Domain unique ID.
     * @param {string} teamId - New team unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Domain>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateTeam(domainId: string, teamId: string): Promise<Models.Domain>;
    /**
     *     Retrieve the DNS zone file for the given domain. This endpoint will return the DNS
     *     zone file in a standardized format that can be used to configure DNS servers.
     *
     * @param {string} params.domainId - Domain unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    getZone(params: {
        domainId: string;
    }): Promise<{}>;
    /**
     *     Retrieve the DNS zone file for the given domain. This endpoint will return the DNS
     *     zone file in a standardized format that can be used to configure DNS servers.
     *
     * @param {string} domainId - Domain unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getZone(domainId: string): Promise<{}>;
    /**
     * Update the DNS zone for the given domain using the provided zone file content.
     * All parsed records are imported and then the main domain document is returned.
     *
     * @param {string} params.domainId - Domain unique ID.
     * @param {string} params.content - DNS zone file content as a string.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Domain>}
     */
    updateZone(params: {
        domainId: string;
        content: string;
    }): Promise<Models.Domain>;
    /**
     * Update the DNS zone for the given domain using the provided zone file content.
     * All parsed records are imported and then the main domain document is returned.
     *
     * @param {string} domainId - Domain unique ID.
     * @param {string} content - DNS zone file content as a string.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Domain>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateZone(domainId: string, content: string): Promise<Models.Domain>;
}
