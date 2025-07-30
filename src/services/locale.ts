import { Service } from '../service';
import { AppwriteException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

export class Locale {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Create a new Document. Before using this route, you should create a new collection resource using either a [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection) API or directly from your database console.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} documentId
     * @param {Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Omit<Document, keyof Models.Document>} data
     * @param {string[]} permissions
     * @throws {AppwriteException}
     * @returns {Promise<Document>}
     */
    createDocument<Document extends Models.Document = Models.DefaultDocument>(databaseId: string, collectionId: string, documentId: string, data: Document extends Models.DefaultDocument ? Partial<Models.Document> & Record<string, any> : Partial<Models.Document> & Omit<Document, keyof Models.Document>, permissions?: string[]): Promise<Document> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }
        if (typeof documentId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "documentId"');
        }
        if (typeof data === 'undefined') {
            throw new AppwriteException('Missing required parameter: "data"');
        }
        const apiPath = '/databases/{databaseId}/collections/{collectionId}/documents'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
        const payload: Payload = {};
        if (typeof documentId !== 'undefined') {
            payload['documentId'] = documentId;
        }
        if (typeof data !== 'undefined') {
            payload['data'] = data;
        }
        if (typeof permissions !== 'undefined') {
            payload['permissions'] = permissions;
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
     * **WARNING: Experimental Feature** - This endpoint is experimental and not yet officially supported. It may be subject to breaking changes or removal in future versions.
     * 
     * Create new Documents. Before using this route, you should create a new collection resource using either a [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection) API or directly from your database console.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {object[]} documents
     * @throws {AppwriteException}
     * @returns {Promise<Models.DocumentList<Document>>}
     */
    createDocuments<Document extends Models.Document = Models.DefaultDocument>(databaseId: string, collectionId: string, documents: object[]): Promise<Models.DocumentList<Document>> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }
        if (typeof documents === 'undefined') {
            throw new AppwriteException('Missing required parameter: "documents"');
        }
        const apiPath = '/databases/{databaseId}/collections/{collectionId}/documents'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
        const payload: Payload = {};
        if (typeof documents !== 'undefined') {
            payload['documents'] = documents;
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
     * Get the current user location based on IP. Returns an object with user country code, country name, continent name, continent code, ip address and suggested currency. You can use the locale header to get the data in a supported language.
     * 
     * ([IP Geolocation by DB-IP](https://db-ip.com))
     *
     * @throws {AppwriteException}
     * @returns {Promise<Models.Locale>}
     */
    get(): Promise<Models.Locale> {
        const apiPath = '/locale';
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
     * List of all locale codes in [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes).
     *
     * @throws {AppwriteException}
     * @returns {Promise<Models.LocaleCodeList>}
     */
    listCodes(): Promise<Models.LocaleCodeList> {
        const apiPath = '/locale/codes';
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
     * List of all continents. You can use the locale header to get the data in a supported language.
     *
     * @throws {AppwriteException}
     * @returns {Promise<Models.ContinentList>}
     */
    listContinents(): Promise<Models.ContinentList> {
        const apiPath = '/locale/continents';
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
     * List of all countries. You can use the locale header to get the data in a supported language.
     *
     * @throws {AppwriteException}
     * @returns {Promise<Models.CountryList>}
     */
    listCountries(): Promise<Models.CountryList> {
        const apiPath = '/locale/countries';
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
     * List of all countries that are currently members of the EU. You can use the locale header to get the data in a supported language.
     *
     * @throws {AppwriteException}
     * @returns {Promise<Models.CountryList>}
     */
    listCountriesEU(): Promise<Models.CountryList> {
        const apiPath = '/locale/countries/eu';
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
     * List of all countries phone codes. You can use the locale header to get the data in a supported language.
     *
     * @throws {AppwriteException}
     * @returns {Promise<Models.PhoneList>}
     */
    listCountriesPhones(): Promise<Models.PhoneList> {
        const apiPath = '/locale/countries/phones';
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
     * List of all currencies, including currency symbol, name, plural, and decimal digits for all major and minor currencies. You can use the locale header to get the data in a supported language.
     *
     * @throws {AppwriteException}
     * @returns {Promise<Models.CurrencyList>}
     */
    listCurrencies(): Promise<Models.CurrencyList> {
        const apiPath = '/locale/currencies';
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
     * List of all languages classified by ISO 639-1 including 2-letter code, name in English, and name in the respective language.
     *
     * @throws {AppwriteException}
     * @returns {Promise<Models.LanguageList>}
     */
    listLanguages(): Promise<Models.LanguageList> {
        const apiPath = '/locale/languages';
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
