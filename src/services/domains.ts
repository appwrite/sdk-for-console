import { Service } from '../service';
import { AppwriteException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

export class Domains {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     *     List all domains registered for this project. This endpoint supports pagination.
     *
     * @param {string[]} queries
     * @param {string} search
     * @throws {AppwriteException}
     * @returns {Promise<Models.DomainsList>}
     */
    list(queries?: string[], search?: string): Promise<Models.DomainsList> {
        const apiPath = '/domains';
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
     *     Create a new domain. Before creating a domain, you need to ensure that your DNS provider is properly configured. After creating the domain, you can use the verification endpoint to check if the domain is ready to be used.
     *
     * @param {string} teamId
     * @param {string} domain
     * @throws {AppwriteException}
     * @returns {Promise<Models.Domain>}
     */
    create(teamId: string, domain: string): Promise<Models.Domain> {
        if (typeof teamId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "teamId"');
        }
        if (typeof domain === 'undefined') {
            throw new AppwriteException('Missing required parameter: "domain"');
        }
        const apiPath = '/domains';
        const payload: Payload = {};
        if (typeof teamId !== 'undefined') {
            payload['teamId'] = teamId;
        }
        if (typeof domain !== 'undefined') {
            payload['domain'] = domain;
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
     *     Get a domain by its unique ID.
     *
     * @param {string} domainId
     * @throws {AppwriteException}
     * @returns {Promise<Models.Domain>}
     */
    get(domainId: string): Promise<Models.Domain> {
        if (typeof domainId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "domainId"');
        }
        const apiPath = '/domains/{domainId}'.replace('{domainId}', domainId);
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
     * Delete a domain by its unique ID. This endpoint can be used to delete a domain from your project.
     * Once deleted, the domain will no longer be available for use and all associated resources will be removed.
     *
     * @param {string} domainId
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    delete(domainId: string): Promise<{}> {
        if (typeof domainId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "domainId"');
        }
        const apiPath = '/domains/{domainId}'.replace('{domainId}', domainId);
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
     *     Verify which NS records are used and update the domain accordingly. This will check the domain&#039;s 
     *     nameservers and update the domain&#039;s status based on whether the nameservers match the expected 
     *     Appwrite nameservers.
     *
     * @param {string} domainId
     * @throws {AppwriteException}
     * @returns {Promise<Models.Domain>}
     */
    updateNameservers(domainId: string): Promise<Models.Domain> {
        if (typeof domainId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "domainId"');
        }
        const apiPath = '/domains/{domainId}/nameservers'.replace('{domainId}', domainId);
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
     *     List Google Workspace DNS records.
     *
     * @param {string} domainId
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecordsList>}
     */
    getPresetGoogleWorkspace(domainId: string): Promise<Models.DnsRecordsList> {
        if (typeof domainId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "domainId"');
        }
        const apiPath = '/domains/{domainId}/presets/google-workspace'.replace('{domainId}', domainId);
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
     *     Add Google Workspace DNS records to the domain. This will create the required MX records 
     *     for Google Workspace email hosting.
     *
     * @param {string} domainId
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecordsList>}
     */
    createPresetGoogleWorkspace(domainId: string): Promise<Models.DnsRecordsList> {
        if (typeof domainId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "domainId"');
        }
        const apiPath = '/domains/{domainId}/presets/google-workspace'.replace('{domainId}', domainId);
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
     *     List iCloud DNS records.
     *
     * @param {string} domainId
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecordsList>}
     */
    getPresetICloud(domainId: string): Promise<Models.DnsRecordsList> {
        if (typeof domainId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "domainId"');
        }
        const apiPath = '/domains/{domainId}/presets/icloud'.replace('{domainId}', domainId);
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
     *     Add iCloud DNS records to the domain. This will create the required MX and SPF records
     *     for using iCloud email services with your domain.
     *
     * @param {string} domainId
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecordsList>}
     */
    createPresetICloud(domainId: string): Promise<Models.DnsRecordsList> {
        if (typeof domainId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "domainId"');
        }
        const apiPath = '/domains/{domainId}/presets/icloud'.replace('{domainId}', domainId);
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
     *     List Mailgun DNS records.
     *
     * @param {string} domainId
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecordsList>}
     */
    getPresetMailgun(domainId: string): Promise<Models.DnsRecordsList> {
        if (typeof domainId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "domainId"');
        }
        const apiPath = '/domains/{domainId}/presets/mailgun'.replace('{domainId}', domainId);
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
     *     Add Mailgun DNS records to the domain. This endpoint will create the required DNS records 
     *     for Mailgun in the specified domain.
     *
     * @param {string} domainId
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecordsList>}
     */
    createPresetMailgun(domainId: string): Promise<Models.DnsRecordsList> {
        if (typeof domainId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "domainId"');
        }
        const apiPath = '/domains/{domainId}/presets/mailgun'.replace('{domainId}', domainId);
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
     *     List Outlook DNS records.
     *
     * @param {string} domainId
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecordsList>}
     */
    getPresetOutlook(domainId: string): Promise<Models.DnsRecordsList> {
        if (typeof domainId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "domainId"');
        }
        const apiPath = '/domains/{domainId}/presets/outlook'.replace('{domainId}', domainId);
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
     *     Add Outlook DNS records to the domain. This will create the required MX records
     *     for setting up Outlook email hosting for your domain.
     *
     * @param {string} domainId
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecordsList>}
     */
    createPresetOutlook(domainId: string): Promise<Models.DnsRecordsList> {
        if (typeof domainId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "domainId"');
        }
        const apiPath = '/domains/{domainId}/presets/outlook'.replace('{domainId}', domainId);
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
     *     List ProtonMail DNS records.
     *
     * @param {string} domainId
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecordsList>}
     */
    getPresetProtonMail(domainId: string): Promise<Models.DnsRecordsList> {
        if (typeof domainId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "domainId"');
        }
        const apiPath = '/domains/{domainId}/presets/proton-mail'.replace('{domainId}', domainId);
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
     *     Add ProtonMail DNS records to the domain. This will create the required MX records
     *     for using ProtonMail with your custom domain.
     *
     * @param {string} domainId
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecordsList>}
     */
    createPresetProtonMail(domainId: string): Promise<Models.DnsRecordsList> {
        if (typeof domainId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "domainId"');
        }
        const apiPath = '/domains/{domainId}/presets/proton-mail'.replace('{domainId}', domainId);
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
     *     List Zoho DNS records.
     *
     * @param {string} domainId
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecordsList>}
     */
    getPresetZoho(domainId: string): Promise<Models.DnsRecordsList> {
        if (typeof domainId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "domainId"');
        }
        const apiPath = '/domains/{domainId}/presets/zoho'.replace('{domainId}', domainId);
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
     *     Add Zoho Mail DNS records to the domain. This will create the required MX records
     *     for setting up Zoho Mail on your domain.
     *
     * @param {string} domainId
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecordsList>}
     */
    createPresetZoho(domainId: string): Promise<Models.DnsRecordsList> {
        if (typeof domainId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "domainId"');
        }
        const apiPath = '/domains/{domainId}/presets/zoho'.replace('{domainId}', domainId);
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
     *     List DNS records for a given domain. You can use this endpoint to list all the DNS records
     *     associated with your domain.
     *
     * @param {string} domainId
     * @param {string[]} queries
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecordsList>}
     */
    listRecords(domainId: string, queries?: string[]): Promise<Models.DnsRecordsList> {
        if (typeof domainId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "domainId"');
        }
        const apiPath = '/domains/{domainId}/records'.replace('{domainId}', domainId);
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
     * Create a new A record for the given domain. A records are used to point a domain name 
     * to an IPv4 address. The record value should be a valid IPv4 address.
     *
     * @param {string} domainId
     * @param {string} name
     * @param {string} value
     * @param {number} ttl
     * @param {string} comment
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     */
    createRecordA(domainId: string, name: string, value: string, ttl: number, comment?: string): Promise<Models.DnsRecord> {
        if (typeof domainId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "domainId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof value === 'undefined') {
            throw new AppwriteException('Missing required parameter: "value"');
        }
        if (typeof ttl === 'undefined') {
            throw new AppwriteException('Missing required parameter: "ttl"');
        }
        const apiPath = '/domains/{domainId}/records/a'.replace('{domainId}', domainId);
        const payload: Payload = {};
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof value !== 'undefined') {
            payload['value'] = value;
        }
        if (typeof ttl !== 'undefined') {
            payload['ttl'] = ttl;
        }
        if (typeof comment !== 'undefined') {
            payload['comment'] = comment;
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
     *     Update an existing A record for the given domain. This endpoint allows you to modify 
     *     the properties of an A record including its name (subdomain), IPv4 address, TTL, 
     *     and optional comment.
     *
     * @param {string} domainId
     * @param {string} recordId
     * @param {string} name
     * @param {string} value
     * @param {number} ttl
     * @param {string} comment
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     */
    updateRecordA(domainId: string, recordId: string, name: string, value: string, ttl: number, comment?: string): Promise<Models.DnsRecord> {
        if (typeof domainId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "domainId"');
        }
        if (typeof recordId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "recordId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof value === 'undefined') {
            throw new AppwriteException('Missing required parameter: "value"');
        }
        if (typeof ttl === 'undefined') {
            throw new AppwriteException('Missing required parameter: "ttl"');
        }
        const apiPath = '/domains/{domainId}/records/a/{recordId}'.replace('{domainId}', domainId).replace('{recordId}', recordId);
        const payload: Payload = {};
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof value !== 'undefined') {
            payload['value'] = value;
        }
        if (typeof ttl !== 'undefined') {
            payload['ttl'] = ttl;
        }
        if (typeof comment !== 'undefined') {
            payload['comment'] = comment;
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
     *     Create a new AAAA record for the given domain. This endpoint allows you to add a new IPv6 DNS record 
     *     to your domain. The record will be used to point a hostname to an IPv6 address.
     *
     * @param {string} domainId
     * @param {string} name
     * @param {string} value
     * @param {number} ttl
     * @param {string} comment
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     */
    createRecordAAAA(domainId: string, name: string, value: string, ttl: number, comment?: string): Promise<Models.DnsRecord> {
        if (typeof domainId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "domainId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof value === 'undefined') {
            throw new AppwriteException('Missing required parameter: "value"');
        }
        if (typeof ttl === 'undefined') {
            throw new AppwriteException('Missing required parameter: "ttl"');
        }
        const apiPath = '/domains/{domainId}/records/aaaa'.replace('{domainId}', domainId);
        const payload: Payload = {};
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof value !== 'undefined') {
            payload['value'] = value;
        }
        if (typeof ttl !== 'undefined') {
            payload['ttl'] = ttl;
        }
        if (typeof comment !== 'undefined') {
            payload['comment'] = comment;
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
     *     Update an existing AAAA record for the given domain. This endpoint allows you to modify
     *     the properties of an existing AAAA record, including its name (subdomain), IPv6 address,
     *     TTL, and optional comment.
     *
     * @param {string} domainId
     * @param {string} recordId
     * @param {string} name
     * @param {string} value
     * @param {number} ttl
     * @param {string} comment
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     */
    updateRecordAAAA(domainId: string, recordId: string, name: string, value: string, ttl: number, comment?: string): Promise<Models.DnsRecord> {
        if (typeof domainId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "domainId"');
        }
        if (typeof recordId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "recordId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof value === 'undefined') {
            throw new AppwriteException('Missing required parameter: "value"');
        }
        if (typeof ttl === 'undefined') {
            throw new AppwriteException('Missing required parameter: "ttl"');
        }
        const apiPath = '/domains/{domainId}/records/aaaa/{recordId}'.replace('{domainId}', domainId).replace('{recordId}', recordId);
        const payload: Payload = {};
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof value !== 'undefined') {
            payload['value'] = value;
        }
        if (typeof ttl !== 'undefined') {
            payload['ttl'] = ttl;
        }
        if (typeof comment !== 'undefined') {
            payload['comment'] = comment;
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
     *     Create a new ALIAS record for the given domain. This record type can be used to point your domain 
     *     to another domain name that will serve as an alias. This is particularly useful when you want to 
     *     map your domain to a target domain that may change its IP address.
     *
     * @param {string} domainId
     * @param {string} name
     * @param {string} value
     * @param {number} ttl
     * @param {string} comment
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     */
    createRecordAlias(domainId: string, name: string, value: string, ttl: number, comment?: string): Promise<Models.DnsRecord> {
        if (typeof domainId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "domainId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof value === 'undefined') {
            throw new AppwriteException('Missing required parameter: "value"');
        }
        if (typeof ttl === 'undefined') {
            throw new AppwriteException('Missing required parameter: "ttl"');
        }
        const apiPath = '/domains/{domainId}/records/alias'.replace('{domainId}', domainId);
        const payload: Payload = {};
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof value !== 'undefined') {
            payload['value'] = value;
        }
        if (typeof ttl !== 'undefined') {
            payload['ttl'] = ttl;
        }
        if (typeof comment !== 'undefined') {
            payload['comment'] = comment;
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
     *     Update an existing ALIAS record for the specified domain. This endpoint allows you to modify
     *     the properties of an existing ALIAS record including its name, target domain, TTL, and comment.
     *     
     *     The ALIAS record type is similar to a CNAME record but can be used at the zone apex (root domain).
     *     It provides a way to map one domain name to another.
     *
     * @param {string} domainId
     * @param {string} recordId
     * @param {string} name
     * @param {string} value
     * @param {number} ttl
     * @param {string} comment
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     */
    updateRecordAlias(domainId: string, recordId: string, name: string, value: string, ttl: number, comment?: string): Promise<Models.DnsRecord> {
        if (typeof domainId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "domainId"');
        }
        if (typeof recordId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "recordId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof value === 'undefined') {
            throw new AppwriteException('Missing required parameter: "value"');
        }
        if (typeof ttl === 'undefined') {
            throw new AppwriteException('Missing required parameter: "ttl"');
        }
        const apiPath = '/domains/{domainId}/records/alias/{recordId}'.replace('{domainId}', domainId).replace('{recordId}', recordId);
        const payload: Payload = {};
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof value !== 'undefined') {
            payload['value'] = value;
        }
        if (typeof ttl !== 'undefined') {
            payload['ttl'] = ttl;
        }
        if (typeof comment !== 'undefined') {
            payload['comment'] = comment;
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
     * Create a new CAA record for the given domain. CAA records are used to specify which 
     * Certificate Authorities (CAs) are allowed to issue SSL/TLS certificates for your domain.
     *
     * @param {string} domainId
     * @param {string} name
     * @param {string} value
     * @param {number} ttl
     * @param {string} comment
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     */
    createRecordCAA(domainId: string, name: string, value: string, ttl: number, comment?: string): Promise<Models.DnsRecord> {
        if (typeof domainId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "domainId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof value === 'undefined') {
            throw new AppwriteException('Missing required parameter: "value"');
        }
        if (typeof ttl === 'undefined') {
            throw new AppwriteException('Missing required parameter: "ttl"');
        }
        const apiPath = '/domains/{domainId}/records/caa'.replace('{domainId}', domainId);
        const payload: Payload = {};
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof value !== 'undefined') {
            payload['value'] = value;
        }
        if (typeof ttl !== 'undefined') {
            payload['ttl'] = ttl;
        }
        if (typeof comment !== 'undefined') {
            payload['comment'] = comment;
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
     *     Update an existing CAA record for the given domain. A CAA (Certification Authority Authorization) 
     *     record is used to specify which certificate authorities (CAs) are authorized to issue certificates 
     *     for a domain.
     *
     * @param {string} domainId
     * @param {string} recordId
     * @param {string} name
     * @param {string} value
     * @param {number} ttl
     * @param {string} comment
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     */
    updateRecordCAA(domainId: string, recordId: string, name: string, value: string, ttl: number, comment?: string): Promise<Models.DnsRecord> {
        if (typeof domainId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "domainId"');
        }
        if (typeof recordId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "recordId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof value === 'undefined') {
            throw new AppwriteException('Missing required parameter: "value"');
        }
        if (typeof ttl === 'undefined') {
            throw new AppwriteException('Missing required parameter: "ttl"');
        }
        const apiPath = '/domains/{domainId}/records/caa/{recordId}'.replace('{domainId}', domainId).replace('{recordId}', recordId);
        const payload: Payload = {};
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof value !== 'undefined') {
            payload['value'] = value;
        }
        if (typeof ttl !== 'undefined') {
            payload['ttl'] = ttl;
        }
        if (typeof comment !== 'undefined') {
            payload['comment'] = comment;
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
     *     Create a new CNAME record for the given domain.
     *     
     *     A CNAME record maps a subdomain to another domain name, allowing you to create aliases 
     *     for your domain. For example, you can create a CNAME record to point &#039;blog.example.com&#039; 
     *     to &#039;example.wordpress.com&#039;.
     *
     * @param {string} domainId
     * @param {string} name
     * @param {string} value
     * @param {number} ttl
     * @param {string} comment
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     */
    createRecordCNAME(domainId: string, name: string, value: string, ttl: number, comment?: string): Promise<Models.DnsRecord> {
        if (typeof domainId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "domainId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof value === 'undefined') {
            throw new AppwriteException('Missing required parameter: "value"');
        }
        if (typeof ttl === 'undefined') {
            throw new AppwriteException('Missing required parameter: "ttl"');
        }
        const apiPath = '/domains/{domainId}/records/cname'.replace('{domainId}', domainId);
        const payload: Payload = {};
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof value !== 'undefined') {
            payload['value'] = value;
        }
        if (typeof ttl !== 'undefined') {
            payload['ttl'] = ttl;
        }
        if (typeof comment !== 'undefined') {
            payload['comment'] = comment;
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
     *     Update an existing CNAME record for the given domain.
     *
     * @param {string} domainId
     * @param {string} recordId
     * @param {string} name
     * @param {string} value
     * @param {number} ttl
     * @param {string} comment
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     */
    updateRecordCNAME(domainId: string, recordId: string, name: string, value: string, ttl: number, comment?: string): Promise<Models.DnsRecord> {
        if (typeof domainId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "domainId"');
        }
        if (typeof recordId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "recordId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof value === 'undefined') {
            throw new AppwriteException('Missing required parameter: "value"');
        }
        if (typeof ttl === 'undefined') {
            throw new AppwriteException('Missing required parameter: "ttl"');
        }
        const apiPath = '/domains/{domainId}/records/cname/{recordId}'.replace('{domainId}', domainId).replace('{recordId}', recordId);
        const payload: Payload = {};
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof value !== 'undefined') {
            payload['value'] = value;
        }
        if (typeof ttl !== 'undefined') {
            payload['ttl'] = ttl;
        }
        if (typeof comment !== 'undefined') {
            payload['comment'] = comment;
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
     *     Create a new HTTPS record for the given domain. This record is used to configure HTTPS 
     *     settings for your domain, enabling secure communication over SSL/TLS.
     *
     * @param {string} domainId
     * @param {string} name
     * @param {string} value
     * @param {number} ttl
     * @param {string} comment
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     */
    createRecordHTTPS(domainId: string, name: string, value: string, ttl: number, comment?: string): Promise<Models.DnsRecord> {
        if (typeof domainId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "domainId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof value === 'undefined') {
            throw new AppwriteException('Missing required parameter: "value"');
        }
        if (typeof ttl === 'undefined') {
            throw new AppwriteException('Missing required parameter: "ttl"');
        }
        const apiPath = '/domains/{domainId}/records/https'.replace('{domainId}', domainId);
        const payload: Payload = {};
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof value !== 'undefined') {
            payload['value'] = value;
        }
        if (typeof ttl !== 'undefined') {
            payload['ttl'] = ttl;
        }
        if (typeof comment !== 'undefined') {
            payload['comment'] = comment;
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
     * Update an existing HTTPS record for the given domain. This endpoint allows you to modify 
     * the properties of an HTTPS record associated with your domain, including the name (subdomain), 
     * target value, TTL, and optional comment.
     *
     * @param {string} domainId
     * @param {string} recordId
     * @param {string} name
     * @param {string} value
     * @param {number} ttl
     * @param {string} comment
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     */
    updateRecordHTTPS(domainId: string, recordId: string, name: string, value: string, ttl: number, comment?: string): Promise<Models.DnsRecord> {
        if (typeof domainId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "domainId"');
        }
        if (typeof recordId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "recordId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof value === 'undefined') {
            throw new AppwriteException('Missing required parameter: "value"');
        }
        if (typeof ttl === 'undefined') {
            throw new AppwriteException('Missing required parameter: "ttl"');
        }
        const apiPath = '/domains/{domainId}/records/https/{recordId}'.replace('{domainId}', domainId).replace('{recordId}', recordId);
        const payload: Payload = {};
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof value !== 'undefined') {
            payload['value'] = value;
        }
        if (typeof ttl !== 'undefined') {
            payload['ttl'] = ttl;
        }
        if (typeof comment !== 'undefined') {
            payload['comment'] = comment;
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
     *     Create a new MX record for the given domain. MX records are used to define the mail servers responsible 
     *     for accepting email messages for the domain. Multiple MX records can be created with different priorities.
     *     The priority parameter determines the order in which mail servers are used, with lower values indicating 
     *     higher priority.
     *
     * @param {string} domainId
     * @param {string} name
     * @param {string} value
     * @param {number} ttl
     * @param {number} priority
     * @param {string} comment
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     */
    createRecordMX(domainId: string, name: string, value: string, ttl: number, priority: number, comment?: string): Promise<Models.DnsRecord> {
        if (typeof domainId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "domainId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof value === 'undefined') {
            throw new AppwriteException('Missing required parameter: "value"');
        }
        if (typeof ttl === 'undefined') {
            throw new AppwriteException('Missing required parameter: "ttl"');
        }
        if (typeof priority === 'undefined') {
            throw new AppwriteException('Missing required parameter: "priority"');
        }
        const apiPath = '/domains/{domainId}/records/mx'.replace('{domainId}', domainId);
        const payload: Payload = {};
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof value !== 'undefined') {
            payload['value'] = value;
        }
        if (typeof ttl !== 'undefined') {
            payload['ttl'] = ttl;
        }
        if (typeof priority !== 'undefined') {
            payload['priority'] = priority;
        }
        if (typeof comment !== 'undefined') {
            payload['comment'] = comment;
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
     *     Update an existing MX record for the given domain.
     *
     * @param {string} domainId
     * @param {string} recordId
     * @param {string} name
     * @param {string} value
     * @param {number} ttl
     * @param {number} priority
     * @param {string} comment
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     */
    updateRecordMX(domainId: string, recordId: string, name: string, value: string, ttl: number, priority: number, comment?: string): Promise<Models.DnsRecord> {
        if (typeof domainId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "domainId"');
        }
        if (typeof recordId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "recordId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof value === 'undefined') {
            throw new AppwriteException('Missing required parameter: "value"');
        }
        if (typeof ttl === 'undefined') {
            throw new AppwriteException('Missing required parameter: "ttl"');
        }
        if (typeof priority === 'undefined') {
            throw new AppwriteException('Missing required parameter: "priority"');
        }
        const apiPath = '/domains/{domainId}/records/mx/{recordId}'.replace('{domainId}', domainId).replace('{recordId}', recordId);
        const payload: Payload = {};
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof value !== 'undefined') {
            payload['value'] = value;
        }
        if (typeof ttl !== 'undefined') {
            payload['ttl'] = ttl;
        }
        if (typeof priority !== 'undefined') {
            payload['priority'] = priority;
        }
        if (typeof comment !== 'undefined') {
            payload['comment'] = comment;
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
     *     Create a new NS record for the given domain. NS records specify the nameservers that are used 
     *     to resolve the domain name to IP addresses. Each domain can have multiple NS records.
     *
     * @param {string} domainId
     * @param {string} name
     * @param {string} value
     * @param {number} ttl
     * @param {string} comment
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     */
    createRecordNS(domainId: string, name: string, value: string, ttl: number, comment?: string): Promise<Models.DnsRecord> {
        if (typeof domainId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "domainId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof value === 'undefined') {
            throw new AppwriteException('Missing required parameter: "value"');
        }
        if (typeof ttl === 'undefined') {
            throw new AppwriteException('Missing required parameter: "ttl"');
        }
        const apiPath = '/domains/{domainId}/records/ns'.replace('{domainId}', domainId);
        const payload: Payload = {};
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof value !== 'undefined') {
            payload['value'] = value;
        }
        if (typeof ttl !== 'undefined') {
            payload['ttl'] = ttl;
        }
        if (typeof comment !== 'undefined') {
            payload['comment'] = comment;
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
     *     Update an existing NS record for the given domain. This endpoint allows you to modify 
     *     the properties of an NS (nameserver) record associated with your domain. You can update 
     *     the record name (subdomain), target nameserver value, TTL, and add or modify comments 
     *     for better record management.
     *
     * @param {string} domainId
     * @param {string} recordId
     * @param {string} name
     * @param {string} value
     * @param {number} ttl
     * @param {string} comment
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     */
    updateRecordNS(domainId: string, recordId: string, name: string, value: string, ttl: number, comment?: string): Promise<Models.DnsRecord> {
        if (typeof domainId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "domainId"');
        }
        if (typeof recordId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "recordId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof value === 'undefined') {
            throw new AppwriteException('Missing required parameter: "value"');
        }
        if (typeof ttl === 'undefined') {
            throw new AppwriteException('Missing required parameter: "ttl"');
        }
        const apiPath = '/domains/{domainId}/records/ns/{recordId}'.replace('{domainId}', domainId).replace('{recordId}', recordId);
        const payload: Payload = {};
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof value !== 'undefined') {
            payload['value'] = value;
        }
        if (typeof ttl !== 'undefined') {
            payload['ttl'] = ttl;
        }
        if (typeof comment !== 'undefined') {
            payload['comment'] = comment;
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
     *     Create a new SRV record for the given domain. SRV records are used to define the location 
     *     of servers for specific services. For example, they can be used to specify which server 
     *     handles a specific service like SIP or XMPP for the domain.
     *
     * @param {string} domainId
     * @param {string} name
     * @param {string} value
     * @param {number} ttl
     * @param {number} priority
     * @param {number} weight
     * @param {number} port
     * @param {string} comment
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     */
    createRecordSRV(domainId: string, name: string, value: string, ttl: number, priority: number, weight: number, port: number, comment?: string): Promise<Models.DnsRecord> {
        if (typeof domainId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "domainId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof value === 'undefined') {
            throw new AppwriteException('Missing required parameter: "value"');
        }
        if (typeof ttl === 'undefined') {
            throw new AppwriteException('Missing required parameter: "ttl"');
        }
        if (typeof priority === 'undefined') {
            throw new AppwriteException('Missing required parameter: "priority"');
        }
        if (typeof weight === 'undefined') {
            throw new AppwriteException('Missing required parameter: "weight"');
        }
        if (typeof port === 'undefined') {
            throw new AppwriteException('Missing required parameter: "port"');
        }
        const apiPath = '/domains/{domainId}/records/srv'.replace('{domainId}', domainId);
        const payload: Payload = {};
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof value !== 'undefined') {
            payload['value'] = value;
        }
        if (typeof ttl !== 'undefined') {
            payload['ttl'] = ttl;
        }
        if (typeof priority !== 'undefined') {
            payload['priority'] = priority;
        }
        if (typeof weight !== 'undefined') {
            payload['weight'] = weight;
        }
        if (typeof port !== 'undefined') {
            payload['port'] = port;
        }
        if (typeof comment !== 'undefined') {
            payload['comment'] = comment;
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
     * @param {string} domainId
     * @param {string} recordId
     * @param {string} name
     * @param {string} value
     * @param {number} ttl
     * @param {number} priority
     * @param {number} weight
     * @param {number} port
     * @param {string} comment
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     */
    updateRecordSRV(domainId: string, recordId: string, name: string, value: string, ttl: number, priority: number, weight: number, port: number, comment?: string): Promise<Models.DnsRecord> {
        if (typeof domainId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "domainId"');
        }
        if (typeof recordId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "recordId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof value === 'undefined') {
            throw new AppwriteException('Missing required parameter: "value"');
        }
        if (typeof ttl === 'undefined') {
            throw new AppwriteException('Missing required parameter: "ttl"');
        }
        if (typeof priority === 'undefined') {
            throw new AppwriteException('Missing required parameter: "priority"');
        }
        if (typeof weight === 'undefined') {
            throw new AppwriteException('Missing required parameter: "weight"');
        }
        if (typeof port === 'undefined') {
            throw new AppwriteException('Missing required parameter: "port"');
        }
        const apiPath = '/domains/{domainId}/records/srv/{recordId}'.replace('{domainId}', domainId).replace('{recordId}', recordId);
        const payload: Payload = {};
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof value !== 'undefined') {
            payload['value'] = value;
        }
        if (typeof ttl !== 'undefined') {
            payload['ttl'] = ttl;
        }
        if (typeof priority !== 'undefined') {
            payload['priority'] = priority;
        }
        if (typeof weight !== 'undefined') {
            payload['weight'] = weight;
        }
        if (typeof port !== 'undefined') {
            payload['port'] = port;
        }
        if (typeof comment !== 'undefined') {
            payload['comment'] = comment;
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
     *     Create a new TXT record for the given domain. TXT records can be used 
     *     to provide additional information about your domain, such as domain 
     *     verification records, SPF records, or DKIM records.
     *
     * @param {string} domainId
     * @param {string} name
     * @param {number} ttl
     * @param {string} value
     * @param {string} comment
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     */
    createRecordTXT(domainId: string, name: string, ttl: number, value?: string, comment?: string): Promise<Models.DnsRecord> {
        if (typeof domainId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "domainId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof ttl === 'undefined') {
            throw new AppwriteException('Missing required parameter: "ttl"');
        }
        const apiPath = '/domains/{domainId}/records/txt'.replace('{domainId}', domainId);
        const payload: Payload = {};
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof value !== 'undefined') {
            payload['value'] = value;
        }
        if (typeof ttl !== 'undefined') {
            payload['ttl'] = ttl;
        }
        if (typeof comment !== 'undefined') {
            payload['comment'] = comment;
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
     *     Update an existing TXT record for the given domain.
     *     
     *     Update the TXT record details for a specific domain by providing the domain ID,
     *     record ID, and the new record configuration including name, value, TTL, and an optional comment.
     *
     * @param {string} domainId
     * @param {string} recordId
     * @param {string} name
     * @param {string} value
     * @param {number} ttl
     * @param {string} comment
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     */
    updateRecordTXT(domainId: string, recordId: string, name: string, value: string, ttl: number, comment?: string): Promise<Models.DnsRecord> {
        if (typeof domainId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "domainId"');
        }
        if (typeof recordId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "recordId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof value === 'undefined') {
            throw new AppwriteException('Missing required parameter: "value"');
        }
        if (typeof ttl === 'undefined') {
            throw new AppwriteException('Missing required parameter: "ttl"');
        }
        const apiPath = '/domains/{domainId}/records/txt/{recordId}'.replace('{domainId}', domainId).replace('{recordId}', recordId);
        const payload: Payload = {};
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof value !== 'undefined') {
            payload['value'] = value;
        }
        if (typeof ttl !== 'undefined') {
            payload['ttl'] = ttl;
        }
        if (typeof comment !== 'undefined') {
            payload['comment'] = comment;
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
     *     Get a single DNS record for a given domain by record ID.
     *     
     *     This endpoint allows you to retrieve a specific DNS record associated with a domain
     *     using its unique identifier. The record contains information about the DNS configuration
     *     such as type, value, and TTL settings.
     *
     * @param {string} domainId
     * @param {string} recordId
     * @throws {AppwriteException}
     * @returns {Promise<Models.DnsRecord>}
     */
    getRecord(domainId: string, recordId: string): Promise<Models.DnsRecord> {
        if (typeof domainId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "domainId"');
        }
        if (typeof recordId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "recordId"');
        }
        const apiPath = '/domains/{domainId}/records/{recordId}'.replace('{domainId}', domainId).replace('{recordId}', recordId);
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
     *     Delete a DNS record for the given domain. This endpoint allows you to delete an existing DNS record 
     *     from a specific domain.
     *
     * @param {string} domainId
     * @param {string} recordId
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteRecord(domainId: string, recordId: string): Promise<{}> {
        if (typeof domainId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "domainId"');
        }
        if (typeof recordId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "recordId"');
        }
        const apiPath = '/domains/{domainId}/records/{recordId}'.replace('{domainId}', domainId).replace('{recordId}', recordId);
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
     *     Update the team ID for a specific domain. This endpoint requires admin access.
     *     
     *     Updating the team ID will transfer ownership and access control of the domain
     *     and all its DNS records to the new team.
     *
     * @param {string} domainId
     * @param {string} teamId
     * @throws {AppwriteException}
     * @returns {Promise<Models.Domain>}
     */
    updateTeam(domainId: string, teamId: string): Promise<Models.Domain> {
        if (typeof domainId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "domainId"');
        }
        if (typeof teamId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "teamId"');
        }
        const apiPath = '/domains/{domainId}/team'.replace('{domainId}', domainId);
        const payload: Payload = {};
        if (typeof teamId !== 'undefined') {
            payload['teamId'] = teamId;
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
     *     Retrieve the DNS zone file for the given domain. This endpoint will return the DNS 
     *     zone file in a standardized format that can be used to configure DNS servers.
     *
     * @param {string} domainId
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    getZone(domainId: string): Promise<{}> {
        if (typeof domainId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "domainId"');
        }
        const apiPath = '/domains/{domainId}/zone'.replace('{domainId}', domainId);
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
     * Update the DNS zone for the given domain using the provided zone file content. 
     * All parsed records are imported and then the main domain document is returned.
     *
     * @param {string} domainId
     * @param {string} content
     * @throws {AppwriteException}
     * @returns {Promise<Models.Domain>}
     */
    updateZone(domainId: string, content: string): Promise<Models.Domain> {
        if (typeof domainId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "domainId"');
        }
        if (typeof content === 'undefined') {
            throw new AppwriteException('Missing required parameter: "content"');
        }
        const apiPath = '/domains/{domainId}/zone'.replace('{domainId}', domainId);
        const payload: Payload = {};
        if (typeof content !== 'undefined') {
            payload['content'] = content;
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
}
