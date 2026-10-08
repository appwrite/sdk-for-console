import { AppwriteException, Client, type Payload } from '../client';
import type { Models } from '../models';

import { AnalyticsInterval } from '../enums/analytics-interval';
import { AnalyticsDimension } from '../enums/analytics-dimension';
export class Analytics {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * List analytics properties for the current project.
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, domain, timezone, enabled, public, snippetId
     * @param {string} params.search - Search term to filter your list results. Matches the property ID, name and domain. Max length: 256 chars.
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AnalyticsPropertyList>}
     */
    listProperties(params?: {
        queries?: string[];
        search?: string;
        total?: boolean;
    }): Promise<Models.AnalyticsPropertyList>;
    /**
     * List analytics properties for the current project.
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, domain, timezone, enabled, public, snippetId
     * @param {string} search - Search term to filter your list results. Matches the property ID, name and domain. Max length: 256 chars.
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AnalyticsPropertyList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listProperties(
        queries?: string[],
        search?: string,
        total?: boolean,
    ): Promise<Models.AnalyticsPropertyList>;
    listProperties(
        paramsOrFirst?:
            { queries?: string[]; search?: string; total?: boolean } | string[],
        ...rest: [string?, boolean?]
    ): Promise<Models.AnalyticsPropertyList> {
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

        const apiPath = '/analytics/properties';
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

        return this.client.call('get', uri, apiHeaders, apiPayload);
    }

    /**
     * Create a new analytics property to track a website or application.
     *
     * @param {string} params.propertyId - Unique ID. Choose a custom ID or generate a random ID with `ID.unique()`. Max length is 36 chars.
     * @param {string} params.name - Human-readable name for this property.
     * @param {string} params.domain - Primary domain to track (e.g. example.com). Optional for native apps.
     * @param {string} params.timezone - IANA timezone used for daily boundaries.
     * @param {boolean} params.enabled - Whether tracking is enabled.
     * @param {boolean} params.xpublic - Whether stats are publicly viewable.
     * @param {string[]} params.allowedOrigins - Allowed origins for tracking. Use ["*"] to allow all.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AnalyticsProperty>}
     */
    createProperty(params: {
        propertyId: string;
        name: string;
        domain?: string;
        timezone?: string;
        enabled?: boolean;
        xpublic?: boolean;
        allowedOrigins?: string[];
    }): Promise<Models.AnalyticsProperty>;
    /**
     * Create a new analytics property to track a website or application.
     *
     * @param {string} propertyId - Unique ID. Choose a custom ID or generate a random ID with `ID.unique()`. Max length is 36 chars.
     * @param {string} name - Human-readable name for this property.
     * @param {string} domain - Primary domain to track (e.g. example.com). Optional for native apps.
     * @param {string} timezone - IANA timezone used for daily boundaries.
     * @param {boolean} enabled - Whether tracking is enabled.
     * @param {boolean} xpublic - Whether stats are publicly viewable.
     * @param {string[]} allowedOrigins - Allowed origins for tracking. Use ["*"] to allow all.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AnalyticsProperty>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createProperty(
        propertyId: string,
        name: string,
        domain?: string,
        timezone?: string,
        enabled?: boolean,
        xpublic?: boolean,
        allowedOrigins?: string[],
    ): Promise<Models.AnalyticsProperty>;
    createProperty(
        paramsOrFirst:
            | {
                  propertyId: string;
                  name: string;
                  domain?: string;
                  timezone?: string;
                  enabled?: boolean;
                  xpublic?: boolean;
                  allowedOrigins?: string[];
              }
            | string,
        ...rest: [string?, string?, string?, boolean?, boolean?, string[]?]
    ): Promise<Models.AnalyticsProperty> {
        let params: {
            propertyId: string;
            name: string;
            domain?: string;
            timezone?: string;
            enabled?: boolean;
            xpublic?: boolean;
            allowedOrigins?: string[];
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                propertyId: string;
                name: string;
                domain?: string;
                timezone?: string;
                enabled?: boolean;
                xpublic?: boolean;
                allowedOrigins?: string[];
            };
        } else {
            params = {
                propertyId: paramsOrFirst as string,
                name: rest[0] as string,
                domain: rest[1] as string,
                timezone: rest[2] as string,
                enabled: rest[3] as boolean,
                xpublic: rest[4] as boolean,
                allowedOrigins: rest[5] as string[],
            };
        }

        const propertyId = params.propertyId;
        const name = params.name;
        const domain = params.domain;
        const timezone = params.timezone;
        const enabled = params.enabled;
        const xpublic = params.xpublic;
        const allowedOrigins = params.allowedOrigins;

        if (typeof propertyId === 'undefined') {
            throw new AppwriteException(
                'Missing required parameter: "propertyId"',
            );
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        const apiPath = '/analytics/properties';
        const apiPayload: Payload = {};
        if (typeof propertyId !== 'undefined') {
            apiPayload['propertyId'] = propertyId;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof domain !== 'undefined') {
            apiPayload['domain'] = domain;
        }
        if (typeof timezone !== 'undefined') {
            apiPayload['timezone'] = timezone;
        }
        if (typeof enabled !== 'undefined') {
            apiPayload['enabled'] = enabled;
        }
        if (typeof xpublic !== 'undefined') {
            apiPayload['public'] = xpublic;
        }
        if (typeof allowedOrigins !== 'undefined') {
            apiPayload['allowedOrigins'] = allowedOrigins;
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
     * Get an analytics property by ID.
     *
     * @param {string} params.propertyId - Analytics property unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AnalyticsProperty>}
     */
    getProperty(params: {
        propertyId: string;
    }): Promise<Models.AnalyticsProperty>;
    /**
     * Get an analytics property by ID.
     *
     * @param {string} propertyId - Analytics property unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AnalyticsProperty>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getProperty(propertyId: string): Promise<Models.AnalyticsProperty>;
    getProperty(
        paramsOrFirst: { propertyId: string } | string,
    ): Promise<Models.AnalyticsProperty> {
        let params: { propertyId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as { propertyId: string };
        } else {
            params = {
                propertyId: paramsOrFirst as string,
            };
        }

        const propertyId = params.propertyId;

        if (typeof propertyId === 'undefined' || propertyId === '') {
            throw new AppwriteException(
                'Missing required parameter: "propertyId"',
            );
        }
        const apiPath = '/analytics/properties/{propertyId}'.replace(
            '{propertyId}',
            encodeURIComponent(String(propertyId)),
        );
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            accept: 'application/json',
        };

        return this.client.call('get', uri, apiHeaders, apiPayload);
    }

    /**
     * Update an analytics property. Only the attributes you pass are changed; omitted attributes keep their current value.
     *
     * @param {string} params.propertyId - Analytics property unique ID.
     * @param {string} params.name - Human-readable name for this property.
     * @param {string} params.domain - Primary domain to track (e.g. example.com). Pass an empty string to clear it.
     * @param {string} params.timezone - IANA timezone used for daily boundaries.
     * @param {boolean} params.enabled - Whether tracking is enabled.
     * @param {boolean} params.xpublic - Whether stats are publicly viewable.
     * @param {string[]} params.allowedOrigins - Allowed origins for tracking. Use ["*"] to allow all.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AnalyticsProperty>}
     */
    updateProperty(params: {
        propertyId: string;
        name?: string;
        domain?: string;
        timezone?: string;
        enabled?: boolean;
        xpublic?: boolean;
        allowedOrigins?: string[];
    }): Promise<Models.AnalyticsProperty>;
    /**
     * Update an analytics property. Only the attributes you pass are changed; omitted attributes keep their current value.
     *
     * @param {string} propertyId - Analytics property unique ID.
     * @param {string} name - Human-readable name for this property.
     * @param {string} domain - Primary domain to track (e.g. example.com). Pass an empty string to clear it.
     * @param {string} timezone - IANA timezone used for daily boundaries.
     * @param {boolean} enabled - Whether tracking is enabled.
     * @param {boolean} xpublic - Whether stats are publicly viewable.
     * @param {string[]} allowedOrigins - Allowed origins for tracking. Use ["*"] to allow all.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AnalyticsProperty>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateProperty(
        propertyId: string,
        name?: string,
        domain?: string,
        timezone?: string,
        enabled?: boolean,
        xpublic?: boolean,
        allowedOrigins?: string[],
    ): Promise<Models.AnalyticsProperty>;
    updateProperty(
        paramsOrFirst:
            | {
                  propertyId: string;
                  name?: string;
                  domain?: string;
                  timezone?: string;
                  enabled?: boolean;
                  xpublic?: boolean;
                  allowedOrigins?: string[];
              }
            | string,
        ...rest: [string?, string?, string?, boolean?, boolean?, string[]?]
    ): Promise<Models.AnalyticsProperty> {
        let params: {
            propertyId: string;
            name?: string;
            domain?: string;
            timezone?: string;
            enabled?: boolean;
            xpublic?: boolean;
            allowedOrigins?: string[];
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                propertyId: string;
                name?: string;
                domain?: string;
                timezone?: string;
                enabled?: boolean;
                xpublic?: boolean;
                allowedOrigins?: string[];
            };
        } else {
            params = {
                propertyId: paramsOrFirst as string,
                name: rest[0] as string,
                domain: rest[1] as string,
                timezone: rest[2] as string,
                enabled: rest[3] as boolean,
                xpublic: rest[4] as boolean,
                allowedOrigins: rest[5] as string[],
            };
        }

        const propertyId = params.propertyId;
        const name = params.name;
        const domain = params.domain;
        const timezone = params.timezone;
        const enabled = params.enabled;
        const xpublic = params.xpublic;
        const allowedOrigins = params.allowedOrigins;

        if (typeof propertyId === 'undefined' || propertyId === '') {
            throw new AppwriteException(
                'Missing required parameter: "propertyId"',
            );
        }
        const apiPath = '/analytics/properties/{propertyId}'.replace(
            '{propertyId}',
            encodeURIComponent(String(propertyId)),
        );
        const apiPayload: Payload = {};
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof domain !== 'undefined') {
            apiPayload['domain'] = domain;
        }
        if (typeof timezone !== 'undefined') {
            apiPayload['timezone'] = timezone;
        }
        if (typeof enabled !== 'undefined') {
            apiPayload['enabled'] = enabled;
        }
        if (typeof xpublic !== 'undefined') {
            apiPayload['public'] = xpublic;
        }
        if (typeof allowedOrigins !== 'undefined') {
            apiPayload['allowedOrigins'] = allowedOrigins;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('patch', uri, apiHeaders, apiPayload);
    }

    /**
     * Delete an analytics property along with every event and session collected for it. This cannot be undone.
     *
     * @param {string} params.propertyId - Analytics property unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteProperty(params: { propertyId: string }): Promise<{}>;
    /**
     * Delete an analytics property along with every event and session collected for it. This cannot be undone.
     *
     * @param {string} propertyId - Analytics property unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteProperty(propertyId: string): Promise<{}>;
    deleteProperty(
        paramsOrFirst: { propertyId: string } | string,
    ): Promise<{}> {
        let params: { propertyId: string };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as { propertyId: string };
        } else {
            params = {
                propertyId: paramsOrFirst as string,
            };
        }

        const propertyId = params.propertyId;

        if (typeof propertyId === 'undefined' || propertyId === '') {
            throw new AppwriteException(
                'Missing required parameter: "propertyId"',
            );
        }
        const apiPath = '/analytics/properties/{propertyId}'.replace(
            '{propertyId}',
            encodeURIComponent(String(propertyId)),
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
     * Send a tracking event from a browser, native app, or server-side SDK.
     *
     * @param {string} params.propertyId - Analytics property ID or snippet ID identifying the property.
     * @param {string} params.name - Event name. "pageview" is just a conventional event name; events are not modeled specially.
     * @param {string} params.url - Full page URL or screen identifier.
     * @param {string} params.domain - Hostname (e.g. example.com).
     * @param {string} params.referrer - Referrer URL.
     * @param {number} params.screenWidth - Viewport width in CSS pixels.
     * @param {string} params.sessionHash - Optional session hash (provided by SDK).
     * @param {number} params.scrollDepth - Scroll depth percentage 0-100.
     * @param {number} params.engagementTime - Engagement time in seconds, 0-4294967295.
     * @param {string[]} params.props - Custom string properties as a flat key=value list (max 32 entries, alternating key,value).
     * @param {string} params.userId - Override user ID. Requires API-key auth with analytics.write scope.
     * @param {string} params.ip - Override IP address. Requires API-key auth with analytics.write scope.
     * @param {string} params.userAgent - Override user agent. Requires API-key auth with analytics.write scope.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    createEvent(params: {
        propertyId: string;
        name: string;
        url: string;
        domain?: string;
        referrer?: string;
        screenWidth?: number;
        sessionHash?: string;
        scrollDepth?: number;
        engagementTime?: number;
        props?: string[];
        userId?: string;
        ip?: string;
        userAgent?: string;
    }): Promise<{}>;
    /**
     * Send a tracking event from a browser, native app, or server-side SDK.
     *
     * @param {string} propertyId - Analytics property ID or snippet ID identifying the property.
     * @param {string} name - Event name. "pageview" is just a conventional event name; events are not modeled specially.
     * @param {string} url - Full page URL or screen identifier.
     * @param {string} domain - Hostname (e.g. example.com).
     * @param {string} referrer - Referrer URL.
     * @param {number} screenWidth - Viewport width in CSS pixels.
     * @param {string} sessionHash - Optional session hash (provided by SDK).
     * @param {number} scrollDepth - Scroll depth percentage 0-100.
     * @param {number} engagementTime - Engagement time in seconds, 0-4294967295.
     * @param {string[]} props - Custom string properties as a flat key=value list (max 32 entries, alternating key,value).
     * @param {string} userId - Override user ID. Requires API-key auth with analytics.write scope.
     * @param {string} ip - Override IP address. Requires API-key auth with analytics.write scope.
     * @param {string} userAgent - Override user agent. Requires API-key auth with analytics.write scope.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createEvent(
        propertyId: string,
        name: string,
        url: string,
        domain?: string,
        referrer?: string,
        screenWidth?: number,
        sessionHash?: string,
        scrollDepth?: number,
        engagementTime?: number,
        props?: string[],
        userId?: string,
        ip?: string,
        userAgent?: string,
    ): Promise<{}>;
    createEvent(
        paramsOrFirst:
            | {
                  propertyId: string;
                  name: string;
                  url: string;
                  domain?: string;
                  referrer?: string;
                  screenWidth?: number;
                  sessionHash?: string;
                  scrollDepth?: number;
                  engagementTime?: number;
                  props?: string[];
                  userId?: string;
                  ip?: string;
                  userAgent?: string;
              }
            | string,
        ...rest: [
            string?,
            string?,
            string?,
            string?,
            number?,
            string?,
            number?,
            number?,
            string[]?,
            string?,
            string?,
            string?,
        ]
    ): Promise<{}> {
        let params: {
            propertyId: string;
            name: string;
            url: string;
            domain?: string;
            referrer?: string;
            screenWidth?: number;
            sessionHash?: string;
            scrollDepth?: number;
            engagementTime?: number;
            props?: string[];
            userId?: string;
            ip?: string;
            userAgent?: string;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                propertyId: string;
                name: string;
                url: string;
                domain?: string;
                referrer?: string;
                screenWidth?: number;
                sessionHash?: string;
                scrollDepth?: number;
                engagementTime?: number;
                props?: string[];
                userId?: string;
                ip?: string;
                userAgent?: string;
            };
        } else {
            params = {
                propertyId: paramsOrFirst as string,
                name: rest[0] as string,
                url: rest[1] as string,
                domain: rest[2] as string,
                referrer: rest[3] as string,
                screenWidth: rest[4] as number,
                sessionHash: rest[5] as string,
                scrollDepth: rest[6] as number,
                engagementTime: rest[7] as number,
                props: rest[8] as string[],
                userId: rest[9] as string,
                ip: rest[10] as string,
                userAgent: rest[11] as string,
            };
        }

        const propertyId = params.propertyId;
        const name = params.name;
        const url = params.url;
        const domain = params.domain;
        const referrer = params.referrer;
        const screenWidth = params.screenWidth;
        const sessionHash = params.sessionHash;
        const scrollDepth = params.scrollDepth;
        const engagementTime = params.engagementTime;
        const props = params.props;
        const userId = params.userId;
        const ip = params.ip;
        const userAgent = params.userAgent;

        if (typeof propertyId === 'undefined' || propertyId === '') {
            throw new AppwriteException(
                'Missing required parameter: "propertyId"',
            );
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof url === 'undefined') {
            throw new AppwriteException('Missing required parameter: "url"');
        }
        const apiPath = '/analytics/properties/{propertyId}/events'.replace(
            '{propertyId}',
            encodeURIComponent(String(propertyId)),
        );
        const apiPayload: Payload = {};
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof url !== 'undefined') {
            apiPayload['url'] = url;
        }
        if (typeof domain !== 'undefined') {
            apiPayload['domain'] = domain;
        }
        if (typeof referrer !== 'undefined') {
            apiPayload['referrer'] = referrer;
        }
        if (typeof screenWidth !== 'undefined') {
            apiPayload['screenWidth'] = screenWidth;
        }
        if (typeof sessionHash !== 'undefined') {
            apiPayload['sessionHash'] = sessionHash;
        }
        if (typeof scrollDepth !== 'undefined') {
            apiPayload['scrollDepth'] = scrollDepth;
        }
        if (typeof engagementTime !== 'undefined') {
            apiPayload['engagementTime'] = engagementTime;
        }
        if (typeof props !== 'undefined') {
            apiPayload['props'] = props;
        }
        if (typeof userId !== 'undefined') {
            apiPayload['userId'] = userId;
        }
        if (typeof ip !== 'undefined') {
            apiPayload['ip'] = ip;
        }
        if (typeof userAgent !== 'undefined') {
            apiPayload['userAgent'] = userAgent;
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
     * Read analytics metrics (visitors, sessions, pageviews, events, bounceRate, …) for a property over a date range.
     *
     * **Three response shapes**, chosen by `dimensions[]` and `interval`:
     * - Neither: one row aggregating the whole window, with `value` and `date` null. Only this shape carries `pageviews`, `visits`, `bounceRate`, `visitDuration`, `viewsPerVisit`, `scrollDepth` and `engagementTime`.
     * - `dimensions[]`: one row per dimension value, ranked by visitors, with `value` set and `date` null.
     * - `interval`: one row per time bucket in chronological order, with `date` set and `value` null.
     *
     * Combining `dimensions[]` with `interval` is not supported yet. `queries[]` filters the underlying events using standard Utopia query syntax.
     *
     * @param {string} params.propertyId - Analytics property unique ID.
     * @param {string[]} params.queries - Up to 10 filter queries in Utopia syntax. Allowed attributes: country, region, city, browser, operatingSystem, device, screenSize, referrerSource, channel, utmSource, utmMedium, utmCampaign, utmContent, utmTerm, page, hostname, botName, botCategory, eventName. page, eventName are only accepted alongside `interval`, or with a breakdown on a dimension other than entryPage, exitPage. Allowed methods: equal, notEqual, contains, startsWith, endsWith. Example: `queries[]=equal("country", ["US"])`.
     * @param {AnalyticsInterval} params.interval - Time bucket size. Omit (null) for a flat aggregate over the whole window. Allowed: 1h, 1d, 1w, 1m.
     * @param {AnalyticsDimension[]} params.dimensions - Dimension to break the metrics down by. One at most for now; the parameter is a list so that cap can be raised without a breaking change. Allowed: country, region, city, browser, operatingSystem, device, screenSize, referrerSource, channel, utmSource, utmMedium, utmCampaign, utmContent, utmTerm, page, hostname, entryPage, exitPage, trafficType, botName, botCategory, eventName.
     * @param {string} params.dateRange - Date range shorthand (e.g. 7d, 30d). Ignored for any bound you supply explicitly via startAt/endAt.
     * @param {string} params.startAt - Explicit window start in ISO 8601. Defaults to endAt minus dateRange.
     * @param {string} params.endAt - Explicit window end in ISO 8601. Defaults to the current time.
     * @param {number} params.limit - Maximum number of ranked values to return.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AnalyticsMetricList>}
     */
    listMetrics(params: {
        propertyId: string;
        queries?: string[];
        interval?: AnalyticsInterval;
        dimensions?: AnalyticsDimension[];
        dateRange?: string;
        startAt?: string;
        endAt?: string;
        limit?: number;
    }): Promise<Models.AnalyticsMetricList>;
    /**
     * Read analytics metrics (visitors, sessions, pageviews, events, bounceRate, …) for a property over a date range.
     *
     * **Three response shapes**, chosen by `dimensions[]` and `interval`:
     * - Neither: one row aggregating the whole window, with `value` and `date` null. Only this shape carries `pageviews`, `visits`, `bounceRate`, `visitDuration`, `viewsPerVisit`, `scrollDepth` and `engagementTime`.
     * - `dimensions[]`: one row per dimension value, ranked by visitors, with `value` set and `date` null.
     * - `interval`: one row per time bucket in chronological order, with `date` set and `value` null.
     *
     * Combining `dimensions[]` with `interval` is not supported yet. `queries[]` filters the underlying events using standard Utopia query syntax.
     *
     * @param {string} propertyId - Analytics property unique ID.
     * @param {string[]} queries - Up to 10 filter queries in Utopia syntax. Allowed attributes: country, region, city, browser, operatingSystem, device, screenSize, referrerSource, channel, utmSource, utmMedium, utmCampaign, utmContent, utmTerm, page, hostname, botName, botCategory, eventName. page, eventName are only accepted alongside `interval`, or with a breakdown on a dimension other than entryPage, exitPage. Allowed methods: equal, notEqual, contains, startsWith, endsWith. Example: `queries[]=equal("country", ["US"])`.
     * @param {AnalyticsInterval} interval - Time bucket size. Omit (null) for a flat aggregate over the whole window. Allowed: 1h, 1d, 1w, 1m.
     * @param {AnalyticsDimension[]} dimensions - Dimension to break the metrics down by. One at most for now; the parameter is a list so that cap can be raised without a breaking change. Allowed: country, region, city, browser, operatingSystem, device, screenSize, referrerSource, channel, utmSource, utmMedium, utmCampaign, utmContent, utmTerm, page, hostname, entryPage, exitPage, trafficType, botName, botCategory, eventName.
     * @param {string} dateRange - Date range shorthand (e.g. 7d, 30d). Ignored for any bound you supply explicitly via startAt/endAt.
     * @param {string} startAt - Explicit window start in ISO 8601. Defaults to endAt minus dateRange.
     * @param {string} endAt - Explicit window end in ISO 8601. Defaults to the current time.
     * @param {number} limit - Maximum number of ranked values to return.
     * @throws {AppwriteException}
     * @returns {Promise<Models.AnalyticsMetricList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listMetrics(
        propertyId: string,
        queries?: string[],
        interval?: AnalyticsInterval,
        dimensions?: AnalyticsDimension[],
        dateRange?: string,
        startAt?: string,
        endAt?: string,
        limit?: number,
    ): Promise<Models.AnalyticsMetricList>;
    listMetrics(
        paramsOrFirst:
            | {
                  propertyId: string;
                  queries?: string[];
                  interval?: AnalyticsInterval;
                  dimensions?: AnalyticsDimension[];
                  dateRange?: string;
                  startAt?: string;
                  endAt?: string;
                  limit?: number;
              }
            | string,
        ...rest: [
            string[]?,
            AnalyticsInterval?,
            AnalyticsDimension[]?,
            string?,
            string?,
            string?,
            number?,
        ]
    ): Promise<Models.AnalyticsMetricList> {
        let params: {
            propertyId: string;
            queries?: string[];
            interval?: AnalyticsInterval;
            dimensions?: AnalyticsDimension[];
            dateRange?: string;
            startAt?: string;
            endAt?: string;
            limit?: number;
        };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                propertyId: string;
                queries?: string[];
                interval?: AnalyticsInterval;
                dimensions?: AnalyticsDimension[];
                dateRange?: string;
                startAt?: string;
                endAt?: string;
                limit?: number;
            };
        } else {
            params = {
                propertyId: paramsOrFirst as string,
                queries: rest[0] as string[],
                interval: rest[1] as AnalyticsInterval,
                dimensions: rest[2] as AnalyticsDimension[],
                dateRange: rest[3] as string,
                startAt: rest[4] as string,
                endAt: rest[5] as string,
                limit: rest[6] as number,
            };
        }

        const propertyId = params.propertyId;
        const queries = params.queries;
        const interval = params.interval;
        const dimensions = params.dimensions;
        const dateRange = params.dateRange;
        const startAt = params.startAt;
        const endAt = params.endAt;
        const limit = params.limit;

        if (typeof propertyId === 'undefined' || propertyId === '') {
            throw new AppwriteException(
                'Missing required parameter: "propertyId"',
            );
        }
        const apiPath = '/analytics/properties/{propertyId}/metrics'.replace(
            '{propertyId}',
            encodeURIComponent(String(propertyId)),
        );
        const apiPayload: Payload = {};
        if (typeof queries !== 'undefined') {
            apiPayload['queries'] = queries;
        }
        if (typeof interval !== 'undefined') {
            apiPayload['interval'] = interval;
        }
        if (typeof dimensions !== 'undefined') {
            apiPayload['dimensions'] = dimensions;
        }
        if (typeof dateRange !== 'undefined') {
            apiPayload['dateRange'] = dateRange;
        }
        if (typeof startAt !== 'undefined') {
            apiPayload['startAt'] = startAt;
        }
        if (typeof endAt !== 'undefined') {
            apiPayload['endAt'] = endAt;
        }
        if (typeof limit !== 'undefined') {
            apiPayload['limit'] = limit;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            accept: 'application/json',
        };

        return this.client.call('get', uri, apiHeaders, apiPayload);
    }
}
