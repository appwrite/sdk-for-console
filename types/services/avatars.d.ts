import { Client } from '../client';
import { Browser } from '../enums/browser';
import { CreditCard } from '../enums/credit-card';
import { Flag } from '../enums/flag';
import { Theme } from '../enums/theme';
import { Timezone } from '../enums/timezone';
import { BrowserPermission } from '../enums/browser-permission';
import { ImageFormat } from '../enums/image-format';
export declare class Avatars {
    client: Client;
    constructor(client: Client);
    /**
     * You can use this endpoint to show different browser icons to your users. The code argument receives the browser code as it appears in your user [GET /account/sessions](https://appwrite.io/docs/references/cloud/client-web/account#getSessions) endpoint. Use width, height and quality arguments to change the output settings.
     *
     * When one dimension is specified and the other is 0, the image is scaled with preserved aspect ratio. If both dimensions are 0, the API provides an image at source quality. If dimensions are not specified, the default size of image returned is 100x100px.
     *
     * @param {Browser} params.code - Browser Code.
     * @param {number} params.width - Image width. Pass an integer between 0 to 2000. Defaults to 100.
     * @param {number} params.height - Image height. Pass an integer between 0 to 2000. Defaults to 100.
     * @param {number} params.quality - Image quality. Pass an integer between 0 to 100. Defaults to keep existing image quality.
     * @throws {AppwriteException}
     * @returns {string}
     */
    getBrowser(params: {
        code: Browser;
        width?: number;
        height?: number;
        quality?: number;
    }): string;
    /**
     * You can use this endpoint to show different browser icons to your users. The code argument receives the browser code as it appears in your user [GET /account/sessions](https://appwrite.io/docs/references/cloud/client-web/account#getSessions) endpoint. Use width, height and quality arguments to change the output settings.
     *
     * When one dimension is specified and the other is 0, the image is scaled with preserved aspect ratio. If both dimensions are 0, the API provides an image at source quality. If dimensions are not specified, the default size of image returned is 100x100px.
     *
     * @param {Browser} code - Browser Code.
     * @param {number} width - Image width. Pass an integer between 0 to 2000. Defaults to 100.
     * @param {number} height - Image height. Pass an integer between 0 to 2000. Defaults to 100.
     * @param {number} quality - Image quality. Pass an integer between 0 to 100. Defaults to keep existing image quality.
     * @throws {AppwriteException}
     * @returns {string}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getBrowser(code: Browser, width?: number, height?: number, quality?: number): string;
    /**
     * The credit card endpoint will return you the icon of the credit card provider you need. Use width, height and quality arguments to change the output settings.
     *
     * When one dimension is specified and the other is 0, the image is scaled with preserved aspect ratio. If both dimensions are 0, the API provides an image at source quality. If dimensions are not specified, the default size of image returned is 100x100px.
     *
     *
     * @param {CreditCard} params.code - Credit Card Code. Possible values: amex, argencard, cabal, cencosud, diners, discover, elo, hipercard, jcb, mastercard, naranja, targeta-shopping, unionpay, visa, mir, maestro, rupay.
     * @param {number} params.width - Image width. Pass an integer between 0 to 2000. Defaults to 100.
     * @param {number} params.height - Image height. Pass an integer between 0 to 2000. Defaults to 100.
     * @param {number} params.quality - Image quality. Pass an integer between 0 to 100. Defaults to keep existing image quality.
     * @throws {AppwriteException}
     * @returns {string}
     */
    getCreditCard(params: {
        code: CreditCard;
        width?: number;
        height?: number;
        quality?: number;
    }): string;
    /**
     * The credit card endpoint will return you the icon of the credit card provider you need. Use width, height and quality arguments to change the output settings.
     *
     * When one dimension is specified and the other is 0, the image is scaled with preserved aspect ratio. If both dimensions are 0, the API provides an image at source quality. If dimensions are not specified, the default size of image returned is 100x100px.
     *
     *
     * @param {CreditCard} code - Credit Card Code. Possible values: amex, argencard, cabal, cencosud, diners, discover, elo, hipercard, jcb, mastercard, naranja, targeta-shopping, unionpay, visa, mir, maestro, rupay.
     * @param {number} width - Image width. Pass an integer between 0 to 2000. Defaults to 100.
     * @param {number} height - Image height. Pass an integer between 0 to 2000. Defaults to 100.
     * @param {number} quality - Image quality. Pass an integer between 0 to 100. Defaults to keep existing image quality.
     * @throws {AppwriteException}
     * @returns {string}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getCreditCard(code: CreditCard, width?: number, height?: number, quality?: number): string;
    /**
     * Use this endpoint to fetch the favorite icon (AKA favicon) of any remote website URL.
     *
     * This endpoint does not follow HTTP redirects.
     *
     * @param {string} params.url - Website URL which you want to fetch the favicon from.
     * @throws {AppwriteException}
     * @returns {string}
     */
    getFavicon(params: {
        url: string;
    }): string;
    /**
     * Use this endpoint to fetch the favorite icon (AKA favicon) of any remote website URL.
     *
     * This endpoint does not follow HTTP redirects.
     *
     * @param {string} url - Website URL which you want to fetch the favicon from.
     * @throws {AppwriteException}
     * @returns {string}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getFavicon(url: string): string;
    /**
     * You can use this endpoint to show different country flags icons to your users. The code argument receives the 2 letter country code. Use width, height and quality arguments to change the output settings. Country codes follow the [ISO 3166-1](https://en.wikipedia.org/wiki/ISO_3166-1) standard.
     *
     * When one dimension is specified and the other is 0, the image is scaled with preserved aspect ratio. If both dimensions are 0, the API provides an image at source quality. If dimensions are not specified, the default size of image returned is 100x100px.
     *
     *
     * @param {Flag} params.code - Country Code. ISO Alpha-2 country code format.
     * @param {number} params.width - Image width. Pass an integer between 0 to 2000. Defaults to 100.
     * @param {number} params.height - Image height. Pass an integer between 0 to 2000. Defaults to 100.
     * @param {number} params.quality - Image quality. Pass an integer between 0 to 100. Defaults to keep existing image quality.
     * @throws {AppwriteException}
     * @returns {string}
     */
    getFlag(params: {
        code: Flag;
        width?: number;
        height?: number;
        quality?: number;
    }): string;
    /**
     * You can use this endpoint to show different country flags icons to your users. The code argument receives the 2 letter country code. Use width, height and quality arguments to change the output settings. Country codes follow the [ISO 3166-1](https://en.wikipedia.org/wiki/ISO_3166-1) standard.
     *
     * When one dimension is specified and the other is 0, the image is scaled with preserved aspect ratio. If both dimensions are 0, the API provides an image at source quality. If dimensions are not specified, the default size of image returned is 100x100px.
     *
     *
     * @param {Flag} code - Country Code. ISO Alpha-2 country code format.
     * @param {number} width - Image width. Pass an integer between 0 to 2000. Defaults to 100.
     * @param {number} height - Image height. Pass an integer between 0 to 2000. Defaults to 100.
     * @param {number} quality - Image quality. Pass an integer between 0 to 100. Defaults to keep existing image quality.
     * @throws {AppwriteException}
     * @returns {string}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getFlag(code: Flag, width?: number, height?: number, quality?: number): string;
    /**
     * Use this endpoint to fetch a remote image URL and crop it to any image size you want. This endpoint is very useful if you need to crop and display remote images in your app or in case you want to make sure a 3rd party image is properly served using a TLS protocol.
     *
     * When one dimension is specified and the other is 0, the image is scaled with preserved aspect ratio. If both dimensions are 0, the API provides an image at source quality. If dimensions are not specified, the default size of image returned is 400x400px.
     *
     * This endpoint does not follow HTTP redirects.
     *
     * @param {string} params.url - Image URL which you want to crop.
     * @param {number} params.width - Resize preview image width, Pass an integer between 0 to 2000. Defaults to 400.
     * @param {number} params.height - Resize preview image height, Pass an integer between 0 to 2000. Defaults to 400.
     * @throws {AppwriteException}
     * @returns {string}
     */
    getImage(params: {
        url: string;
        width?: number;
        height?: number;
    }): string;
    /**
     * Use this endpoint to fetch a remote image URL and crop it to any image size you want. This endpoint is very useful if you need to crop and display remote images in your app or in case you want to make sure a 3rd party image is properly served using a TLS protocol.
     *
     * When one dimension is specified and the other is 0, the image is scaled with preserved aspect ratio. If both dimensions are 0, the API provides an image at source quality. If dimensions are not specified, the default size of image returned is 400x400px.
     *
     * This endpoint does not follow HTTP redirects.
     *
     * @param {string} url - Image URL which you want to crop.
     * @param {number} width - Resize preview image width, Pass an integer between 0 to 2000. Defaults to 400.
     * @param {number} height - Resize preview image height, Pass an integer between 0 to 2000. Defaults to 400.
     * @throws {AppwriteException}
     * @returns {string}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getImage(url: string, width?: number, height?: number): string;
    /**
     * Use this endpoint to show your user initials avatar icon on your website or app. By default, this route will try to print your logged-in user name or email initials. You can also overwrite the user name if you pass the 'name' parameter. If no name is given and no user is logged, an empty avatar will be returned.
     *
     * You can use the color and background params to change the avatar colors. By default, a random theme will be selected. The random theme will persist for the user's initials when reloading the same theme will always return for the same initials.
     *
     * When one dimension is specified and the other is 0, the image is scaled with preserved aspect ratio. If both dimensions are 0, the API provides an image at source quality. If dimensions are not specified, the default size of image returned is 100x100px.
     *
     *
     * @param {string} params.name - Full Name. When empty, current user name or email will be used. Max length: 128 chars.
     * @param {number} params.width - Image width. Pass an integer between 0 to 2000. Defaults to 100.
     * @param {number} params.height - Image height. Pass an integer between 0 to 2000. Defaults to 100.
     * @param {string} params.background - Changes background color. By default a random color will be picked and stay will persistent to the given name.
     * @throws {AppwriteException}
     * @returns {string}
     */
    getInitials(params?: {
        name?: string;
        width?: number;
        height?: number;
        background?: string;
    }): string;
    /**
     * Use this endpoint to show your user initials avatar icon on your website or app. By default, this route will try to print your logged-in user name or email initials. You can also overwrite the user name if you pass the 'name' parameter. If no name is given and no user is logged, an empty avatar will be returned.
     *
     * You can use the color and background params to change the avatar colors. By default, a random theme will be selected. The random theme will persist for the user's initials when reloading the same theme will always return for the same initials.
     *
     * When one dimension is specified and the other is 0, the image is scaled with preserved aspect ratio. If both dimensions are 0, the API provides an image at source quality. If dimensions are not specified, the default size of image returned is 100x100px.
     *
     *
     * @param {string} name - Full Name. When empty, current user name or email will be used. Max length: 128 chars.
     * @param {number} width - Image width. Pass an integer between 0 to 2000. Defaults to 100.
     * @param {number} height - Image height. Pass an integer between 0 to 2000. Defaults to 100.
     * @param {string} background - Changes background color. By default a random color will be picked and stay will persistent to the given name.
     * @throws {AppwriteException}
     * @returns {string}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getInitials(name?: string, width?: number, height?: number, background?: string): string;
    /**
     * Converts a given plain text to a QR code image. You can use the query parameters to change the size and style of the resulting image.
     *
     *
     * @param {string} params.text - Plain text to be converted to QR code image.
     * @param {number} params.size - QR code size. Pass an integer between 1 to 1000. Defaults to 400.
     * @param {number} params.margin - Margin from edge. Pass an integer between 0 to 10. Defaults to 1.
     * @param {boolean} params.download - Return resulting image with 'Content-Disposition: attachment ' headers for the browser to start downloading it. Pass 0 for no header, or 1 for otherwise. Default value is set to 0.
     * @throws {AppwriteException}
     * @returns {string}
     */
    getQR(params: {
        text: string;
        size?: number;
        margin?: number;
        download?: boolean;
    }): string;
    /**
     * Converts a given plain text to a QR code image. You can use the query parameters to change the size and style of the resulting image.
     *
     *
     * @param {string} text - Plain text to be converted to QR code image.
     * @param {number} size - QR code size. Pass an integer between 1 to 1000. Defaults to 400.
     * @param {number} margin - Margin from edge. Pass an integer between 0 to 10. Defaults to 1.
     * @param {boolean} download - Return resulting image with 'Content-Disposition: attachment ' headers for the browser to start downloading it. Pass 0 for no header, or 1 for otherwise. Default value is set to 0.
     * @throws {AppwriteException}
     * @returns {string}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getQR(text: string, size?: number, margin?: number, download?: boolean): string;
    /**
     * Use this endpoint to capture a screenshot of any website URL. This endpoint uses a headless browser to render the webpage and capture it as an image.
     *
     * You can configure the browser viewport size, theme, user agent, geolocation, permissions, and more. Capture either just the viewport or the full page scroll.
     *
     * When width and height are specified, the image is resized accordingly. If both dimensions are 0, the API provides an image at original size. If dimensions are not specified, the default viewport size is 1280x720px.
     *
     * @param {string} params.url - Website URL which you want to capture.
     * @param {object} params.headers - HTTP headers to send with the browser request. Defaults to empty.
     * @param {number} params.viewportWidth - Browser viewport width. Pass an integer between 1 to 1920. Defaults to 1280.
     * @param {number} params.viewportHeight - Browser viewport height. Pass an integer between 1 to 1080. Defaults to 720.
     * @param {number} params.scale - Browser scale factor. Pass a number between 0.1 to 3. Defaults to 1.
     * @param {Theme} params.theme - Browser theme. Pass "light" or "dark". Defaults to "light".
     * @param {string} params.userAgent - Custom user agent string. Defaults to browser default.
     * @param {boolean} params.fullpage - Capture full page scroll. Pass 0 for viewport only, or 1 for full page. Defaults to 0.
     * @param {string} params.locale - Browser locale (e.g., "en-US", "fr-FR"). Defaults to browser default.
     * @param {Timezone} params.timezone - IANA timezone identifier (e.g., "America/New_York", "Europe/London"). Defaults to browser default.
     * @param {number} params.latitude - Geolocation latitude. Pass a number between -90 to 90. Defaults to 0.
     * @param {number} params.longitude - Geolocation longitude. Pass a number between -180 to 180. Defaults to 0.
     * @param {number} params.accuracy - Geolocation accuracy in meters. Pass a number between 0 to 100000. Defaults to 0.
     * @param {boolean} params.touch - Enable touch support. Pass 0 for no touch, or 1 for touch enabled. Defaults to 0.
     * @param {BrowserPermission[]} params.permissions - Browser permissions to grant. Pass an array of permission names like ["geolocation", "camera", "microphone"]. Defaults to empty.
     * @param {number} params.sleep - Wait time in seconds before taking the screenshot. Pass an integer between 0 to 10. Defaults to 0.
     * @param {number} params.width - Output image width. Pass 0 to use original width, or an integer between 1 to 2000. Defaults to 0 (original width).
     * @param {number} params.height - Output image height. Pass 0 to use original height, or an integer between 1 to 2000. Defaults to 0 (original height).
     * @param {number} params.quality - Screenshot quality. Pass an integer between 0 to 100. Defaults to keep existing image quality.
     * @param {ImageFormat} params.output - Output format type (jpeg, jpg, png, gif and webp).
     * @throws {AppwriteException}
     * @returns {string}
     */
    getScreenshot(params: {
        url: string;
        headers?: object;
        viewportWidth?: number;
        viewportHeight?: number;
        scale?: number;
        theme?: Theme;
        userAgent?: string;
        fullpage?: boolean;
        locale?: string;
        timezone?: Timezone;
        latitude?: number;
        longitude?: number;
        accuracy?: number;
        touch?: boolean;
        permissions?: BrowserPermission[];
        sleep?: number;
        width?: number;
        height?: number;
        quality?: number;
        output?: ImageFormat;
    }): string;
    /**
     * Use this endpoint to capture a screenshot of any website URL. This endpoint uses a headless browser to render the webpage and capture it as an image.
     *
     * You can configure the browser viewport size, theme, user agent, geolocation, permissions, and more. Capture either just the viewport or the full page scroll.
     *
     * When width and height are specified, the image is resized accordingly. If both dimensions are 0, the API provides an image at original size. If dimensions are not specified, the default viewport size is 1280x720px.
     *
     * @param {string} url - Website URL which you want to capture.
     * @param {object} headers - HTTP headers to send with the browser request. Defaults to empty.
     * @param {number} viewportWidth - Browser viewport width. Pass an integer between 1 to 1920. Defaults to 1280.
     * @param {number} viewportHeight - Browser viewport height. Pass an integer between 1 to 1080. Defaults to 720.
     * @param {number} scale - Browser scale factor. Pass a number between 0.1 to 3. Defaults to 1.
     * @param {Theme} theme - Browser theme. Pass "light" or "dark". Defaults to "light".
     * @param {string} userAgent - Custom user agent string. Defaults to browser default.
     * @param {boolean} fullpage - Capture full page scroll. Pass 0 for viewport only, or 1 for full page. Defaults to 0.
     * @param {string} locale - Browser locale (e.g., "en-US", "fr-FR"). Defaults to browser default.
     * @param {Timezone} timezone - IANA timezone identifier (e.g., "America/New_York", "Europe/London"). Defaults to browser default.
     * @param {number} latitude - Geolocation latitude. Pass a number between -90 to 90. Defaults to 0.
     * @param {number} longitude - Geolocation longitude. Pass a number between -180 to 180. Defaults to 0.
     * @param {number} accuracy - Geolocation accuracy in meters. Pass a number between 0 to 100000. Defaults to 0.
     * @param {boolean} touch - Enable touch support. Pass 0 for no touch, or 1 for touch enabled. Defaults to 0.
     * @param {BrowserPermission[]} permissions - Browser permissions to grant. Pass an array of permission names like ["geolocation", "camera", "microphone"]. Defaults to empty.
     * @param {number} sleep - Wait time in seconds before taking the screenshot. Pass an integer between 0 to 10. Defaults to 0.
     * @param {number} width - Output image width. Pass 0 to use original width, or an integer between 1 to 2000. Defaults to 0 (original width).
     * @param {number} height - Output image height. Pass 0 to use original height, or an integer between 1 to 2000. Defaults to 0 (original height).
     * @param {number} quality - Screenshot quality. Pass an integer between 0 to 100. Defaults to keep existing image quality.
     * @param {ImageFormat} output - Output format type (jpeg, jpg, png, gif and webp).
     * @throws {AppwriteException}
     * @returns {string}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getScreenshot(url: string, headers?: object, viewportWidth?: number, viewportHeight?: number, scale?: number, theme?: Theme, userAgent?: string, fullpage?: boolean, locale?: string, timezone?: Timezone, latitude?: number, longitude?: number, accuracy?: number, touch?: boolean, permissions?: BrowserPermission[], sleep?: number, width?: number, height?: number, quality?: number, output?: ImageFormat): string;
}
