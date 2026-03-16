import { Client, UploadProgress } from '../client';
import type { Models } from '../models';
import { Compression } from '../enums/compression';
import { ImageGravity } from '../enums/image-gravity';
import { ImageFormat } from '../enums/image-format';
import { UsageRange } from '../enums/usage-range';
export declare class Storage {
    client: Client;
    constructor(client: Client);
    /**
     * Get a list of all the storage buckets. You can use the query params to filter your results.
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: enabled, name, fileSecurity, maximumFileSize, encryption, antivirus, transformations
     * @param {string} params.search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.BucketList>}
     */
    listBuckets(params?: {
        queries?: string[];
        search?: string;
        total?: boolean;
    }): Promise<Models.BucketList>;
    /**
     * Get a list of all the storage buckets. You can use the query params to filter your results.
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: enabled, name, fileSecurity, maximumFileSize, encryption, antivirus, transformations
     * @param {string} search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.BucketList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listBuckets(queries?: string[], search?: string, total?: boolean): Promise<Models.BucketList>;
    /**
     * Create a new storage bucket.
     *
     * @param {string} params.bucketId - Unique Id. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Bucket name
     * @param {string[]} params.permissions - An array of permission strings. By default, no user is granted with any permissions. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {boolean} params.fileSecurity - Enables configuring permissions for individual file. A user needs one of file or bucket level permissions to access a file. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {boolean} params.enabled - Is bucket enabled? When set to 'disabled', users cannot access the files in this bucket but Server SDKs with and API key can still access the bucket. No files are lost when this is toggled.
     * @param {number} params.maximumFileSize - Maximum file size allowed in bytes. Maximum allowed value is 5GB.
     * @param {string[]} params.allowedFileExtensions - Allowed file extensions. Maximum of 100 extensions are allowed, each 64 characters long.
     * @param {Compression} params.compression - Compression algorithm chosen for compression. Can be one of none,  [gzip](https://en.wikipedia.org/wiki/Gzip), or [zstd](https://en.wikipedia.org/wiki/Zstd), For file size above 20MB compression is skipped even if it's enabled
     * @param {boolean} params.encryption - Is encryption enabled? For file size above 20MB encryption is skipped even if it's enabled
     * @param {boolean} params.antivirus - Is virus scanning enabled? For file size above 20MB AntiVirus scanning is skipped even if it's enabled
     * @param {boolean} params.transformations - Are image transformations enabled?
     * @throws {AppwriteException}
     * @returns {Promise<Models.Bucket>}
     */
    createBucket(params: {
        bucketId: string;
        name: string;
        permissions?: string[];
        fileSecurity?: boolean;
        enabled?: boolean;
        maximumFileSize?: number;
        allowedFileExtensions?: string[];
        compression?: Compression;
        encryption?: boolean;
        antivirus?: boolean;
        transformations?: boolean;
    }): Promise<Models.Bucket>;
    /**
     * Create a new storage bucket.
     *
     * @param {string} bucketId - Unique Id. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Bucket name
     * @param {string[]} permissions - An array of permission strings. By default, no user is granted with any permissions. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {boolean} fileSecurity - Enables configuring permissions for individual file. A user needs one of file or bucket level permissions to access a file. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {boolean} enabled - Is bucket enabled? When set to 'disabled', users cannot access the files in this bucket but Server SDKs with and API key can still access the bucket. No files are lost when this is toggled.
     * @param {number} maximumFileSize - Maximum file size allowed in bytes. Maximum allowed value is 5GB.
     * @param {string[]} allowedFileExtensions - Allowed file extensions. Maximum of 100 extensions are allowed, each 64 characters long.
     * @param {Compression} compression - Compression algorithm chosen for compression. Can be one of none,  [gzip](https://en.wikipedia.org/wiki/Gzip), or [zstd](https://en.wikipedia.org/wiki/Zstd), For file size above 20MB compression is skipped even if it's enabled
     * @param {boolean} encryption - Is encryption enabled? For file size above 20MB encryption is skipped even if it's enabled
     * @param {boolean} antivirus - Is virus scanning enabled? For file size above 20MB AntiVirus scanning is skipped even if it's enabled
     * @param {boolean} transformations - Are image transformations enabled?
     * @throws {AppwriteException}
     * @returns {Promise<Models.Bucket>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createBucket(bucketId: string, name: string, permissions?: string[], fileSecurity?: boolean, enabled?: boolean, maximumFileSize?: number, allowedFileExtensions?: string[], compression?: Compression, encryption?: boolean, antivirus?: boolean, transformations?: boolean): Promise<Models.Bucket>;
    /**
     * Get a storage bucket by its unique ID. This endpoint response returns a JSON object with the storage bucket metadata.
     *
     * @param {string} params.bucketId - Bucket unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Bucket>}
     */
    getBucket(params: {
        bucketId: string;
    }): Promise<Models.Bucket>;
    /**
     * Get a storage bucket by its unique ID. This endpoint response returns a JSON object with the storage bucket metadata.
     *
     * @param {string} bucketId - Bucket unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Bucket>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getBucket(bucketId: string): Promise<Models.Bucket>;
    /**
     * Update a storage bucket by its unique ID.
     *
     * @param {string} params.bucketId - Bucket unique ID.
     * @param {string} params.name - Bucket name
     * @param {string[]} params.permissions - An array of permission strings. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {boolean} params.fileSecurity - Enables configuring permissions for individual file. A user needs one of file or bucket level permissions to access a file. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {boolean} params.enabled - Is bucket enabled? When set to 'disabled', users cannot access the files in this bucket but Server SDKs with and API key can still access the bucket. No files are lost when this is toggled.
     * @param {number} params.maximumFileSize - Maximum file size allowed in bytes. Maximum allowed value is 5GB.
     * @param {string[]} params.allowedFileExtensions - Allowed file extensions. Maximum of 100 extensions are allowed, each 64 characters long.
     * @param {Compression} params.compression - Compression algorithm chosen for compression. Can be one of none, [gzip](https://en.wikipedia.org/wiki/Gzip), or [zstd](https://en.wikipedia.org/wiki/Zstd), For file size above 20MB compression is skipped even if it's enabled
     * @param {boolean} params.encryption - Is encryption enabled? For file size above 20MB encryption is skipped even if it's enabled
     * @param {boolean} params.antivirus - Is virus scanning enabled? For file size above 20MB AntiVirus scanning is skipped even if it's enabled
     * @param {boolean} params.transformations - Are image transformations enabled?
     * @throws {AppwriteException}
     * @returns {Promise<Models.Bucket>}
     */
    updateBucket(params: {
        bucketId: string;
        name: string;
        permissions?: string[];
        fileSecurity?: boolean;
        enabled?: boolean;
        maximumFileSize?: number;
        allowedFileExtensions?: string[];
        compression?: Compression;
        encryption?: boolean;
        antivirus?: boolean;
        transformations?: boolean;
    }): Promise<Models.Bucket>;
    /**
     * Update a storage bucket by its unique ID.
     *
     * @param {string} bucketId - Bucket unique ID.
     * @param {string} name - Bucket name
     * @param {string[]} permissions - An array of permission strings. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {boolean} fileSecurity - Enables configuring permissions for individual file. A user needs one of file or bucket level permissions to access a file. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {boolean} enabled - Is bucket enabled? When set to 'disabled', users cannot access the files in this bucket but Server SDKs with and API key can still access the bucket. No files are lost when this is toggled.
     * @param {number} maximumFileSize - Maximum file size allowed in bytes. Maximum allowed value is 5GB.
     * @param {string[]} allowedFileExtensions - Allowed file extensions. Maximum of 100 extensions are allowed, each 64 characters long.
     * @param {Compression} compression - Compression algorithm chosen for compression. Can be one of none, [gzip](https://en.wikipedia.org/wiki/Gzip), or [zstd](https://en.wikipedia.org/wiki/Zstd), For file size above 20MB compression is skipped even if it's enabled
     * @param {boolean} encryption - Is encryption enabled? For file size above 20MB encryption is skipped even if it's enabled
     * @param {boolean} antivirus - Is virus scanning enabled? For file size above 20MB AntiVirus scanning is skipped even if it's enabled
     * @param {boolean} transformations - Are image transformations enabled?
     * @throws {AppwriteException}
     * @returns {Promise<Models.Bucket>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateBucket(bucketId: string, name: string, permissions?: string[], fileSecurity?: boolean, enabled?: boolean, maximumFileSize?: number, allowedFileExtensions?: string[], compression?: Compression, encryption?: boolean, antivirus?: boolean, transformations?: boolean): Promise<Models.Bucket>;
    /**
     * Delete a storage bucket by its unique ID.
     *
     * @param {string} params.bucketId - Bucket unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteBucket(params: {
        bucketId: string;
    }): Promise<{}>;
    /**
     * Delete a storage bucket by its unique ID.
     *
     * @param {string} bucketId - Bucket unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteBucket(bucketId: string): Promise<{}>;
    /**
     * Get a list of all the user files. You can use the query params to filter your results.
     *
     * @param {string} params.bucketId - Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, signature, mimeType, sizeOriginal, chunksTotal, chunksUploaded
     * @param {string} params.search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.FileList>}
     */
    listFiles(params: {
        bucketId: string;
        queries?: string[];
        search?: string;
        total?: boolean;
    }): Promise<Models.FileList>;
    /**
     * Get a list of all the user files. You can use the query params to filter your results.
     *
     * @param {string} bucketId - Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, signature, mimeType, sizeOriginal, chunksTotal, chunksUploaded
     * @param {string} search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.FileList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listFiles(bucketId: string, queries?: string[], search?: string, total?: boolean): Promise<Models.FileList>;
    /**
     * Create a new file. Before using this route, you should create a new bucket resource using either a [server integration](https://appwrite.io/docs/server/storage#storageCreateBucket) API or directly from your Appwrite console.
     *
     * Larger files should be uploaded using multiple requests with the [content-range](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Range) header to send a partial request with a maximum supported chunk of `5MB`. The `content-range` header values should always be in bytes.
     *
     * When the first request is sent, the server will return the **File** object, and the subsequent part request must include the file's **id** in `x-appwrite-id` header to allow the server to know that the partial upload is for the existing file and not for a new one.
     *
     * If you're creating a new file using one of the Appwrite SDKs, all the chunking logic will be managed by the SDK internally.
     *
     *
     * @param {string} params.bucketId - Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).
     * @param {string} params.fileId - File ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {File} params.file - Binary file. Appwrite SDKs provide helpers to handle file input. [Learn about file input](https://appwrite.io/docs/products/storage/upload-download#input-file).
     * @param {string[]} params.permissions - An array of permission strings. By default, only the current user is granted all permissions. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @throws {AppwriteException}
     * @returns {Promise<Models.File>}
     */
    createFile(params: {
        bucketId: string;
        fileId: string;
        file: File;
        permissions?: string[];
        onProgress?: (progress: UploadProgress) => void;
    }): Promise<Models.File>;
    /**
     * Create a new file. Before using this route, you should create a new bucket resource using either a [server integration](https://appwrite.io/docs/server/storage#storageCreateBucket) API or directly from your Appwrite console.
     *
     * Larger files should be uploaded using multiple requests with the [content-range](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Range) header to send a partial request with a maximum supported chunk of `5MB`. The `content-range` header values should always be in bytes.
     *
     * When the first request is sent, the server will return the **File** object, and the subsequent part request must include the file's **id** in `x-appwrite-id` header to allow the server to know that the partial upload is for the existing file and not for a new one.
     *
     * If you're creating a new file using one of the Appwrite SDKs, all the chunking logic will be managed by the SDK internally.
     *
     *
     * @param {string} bucketId - Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).
     * @param {string} fileId - File ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {File} file - Binary file. Appwrite SDKs provide helpers to handle file input. [Learn about file input](https://appwrite.io/docs/products/storage/upload-download#input-file).
     * @param {string[]} permissions - An array of permission strings. By default, only the current user is granted all permissions. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @throws {AppwriteException}
     * @returns {Promise<Models.File>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createFile(bucketId: string, fileId: string, file: File, permissions?: string[], onProgress?: (progress: UploadProgress) => void): Promise<Models.File>;
    /**
     * Get a file by its unique ID. This endpoint response returns a JSON object with the file metadata.
     *
     * @param {string} params.bucketId - Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).
     * @param {string} params.fileId - File ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.File>}
     */
    getFile(params: {
        bucketId: string;
        fileId: string;
    }): Promise<Models.File>;
    /**
     * Get a file by its unique ID. This endpoint response returns a JSON object with the file metadata.
     *
     * @param {string} bucketId - Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).
     * @param {string} fileId - File ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.File>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getFile(bucketId: string, fileId: string): Promise<Models.File>;
    /**
     * Update a file by its unique ID. Only users with write permissions have access to update this resource.
     *
     * @param {string} params.bucketId - Bucket unique ID.
     * @param {string} params.fileId - File ID.
     * @param {string} params.name - File name.
     * @param {string[]} params.permissions - An array of permission strings. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @throws {AppwriteException}
     * @returns {Promise<Models.File>}
     */
    updateFile(params: {
        bucketId: string;
        fileId: string;
        name?: string;
        permissions?: string[];
    }): Promise<Models.File>;
    /**
     * Update a file by its unique ID. Only users with write permissions have access to update this resource.
     *
     * @param {string} bucketId - Bucket unique ID.
     * @param {string} fileId - File ID.
     * @param {string} name - File name.
     * @param {string[]} permissions - An array of permission strings. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @throws {AppwriteException}
     * @returns {Promise<Models.File>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateFile(bucketId: string, fileId: string, name?: string, permissions?: string[]): Promise<Models.File>;
    /**
     * Delete a file by its unique ID. Only users with write permissions have access to delete this resource.
     *
     * @param {string} params.bucketId - Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).
     * @param {string} params.fileId - File ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteFile(params: {
        bucketId: string;
        fileId: string;
    }): Promise<{}>;
    /**
     * Delete a file by its unique ID. Only users with write permissions have access to delete this resource.
     *
     * @param {string} bucketId - Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).
     * @param {string} fileId - File ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteFile(bucketId: string, fileId: string): Promise<{}>;
    /**
     * Get a file content by its unique ID. The endpoint response return with a 'Content-Disposition: attachment' header that tells the browser to start downloading the file to user downloads directory.
     *
     * @param {string} params.bucketId - Storage bucket ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).
     * @param {string} params.fileId - File ID.
     * @param {string} params.token - File token for accessing this file.
     * @throws {AppwriteException}
     * @returns {string}
     */
    getFileDownload(params: {
        bucketId: string;
        fileId: string;
        token?: string;
    }): string;
    /**
     * Get a file content by its unique ID. The endpoint response return with a 'Content-Disposition: attachment' header that tells the browser to start downloading the file to user downloads directory.
     *
     * @param {string} bucketId - Storage bucket ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).
     * @param {string} fileId - File ID.
     * @param {string} token - File token for accessing this file.
     * @throws {AppwriteException}
     * @returns {string}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getFileDownload(bucketId: string, fileId: string, token?: string): string;
    /**
     * Get a file preview image. Currently, this method supports preview for image files (jpg, png, and gif), other supported formats, like pdf, docs, slides, and spreadsheets, will return the file icon image. You can also pass query string arguments for cutting and resizing your preview image. Preview is supported only for image files smaller than 10MB.
     *
     * @param {string} params.bucketId - Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).
     * @param {string} params.fileId - File ID
     * @param {number} params.width - Resize preview image width, Pass an integer between 0 to 4000.
     * @param {number} params.height - Resize preview image height, Pass an integer between 0 to 4000.
     * @param {ImageGravity} params.gravity - Image crop gravity. Can be one of center,top-left,top,top-right,left,right,bottom-left,bottom,bottom-right
     * @param {number} params.quality - Preview image quality. Pass an integer between 0 to 100. Defaults to keep existing image quality.
     * @param {number} params.borderWidth - Preview image border in pixels. Pass an integer between 0 to 100. Defaults to 0.
     * @param {string} params.borderColor - Preview image border color. Use a valid HEX color, no # is needed for prefix.
     * @param {number} params.borderRadius - Preview image border radius in pixels. Pass an integer between 0 to 4000.
     * @param {number} params.opacity - Preview image opacity. Only works with images having an alpha channel (like png). Pass a number between 0 to 1.
     * @param {number} params.rotation - Preview image rotation in degrees. Pass an integer between -360 and 360.
     * @param {string} params.background - Preview image background color. Only works with transparent images (png). Use a valid HEX color, no # is needed for prefix.
     * @param {ImageFormat} params.output - Output format type (jpeg, jpg, png, gif and webp).
     * @param {string} params.token - File token for accessing this file.
     * @throws {AppwriteException}
     * @returns {string}
     */
    getFilePreview(params: {
        bucketId: string;
        fileId: string;
        width?: number;
        height?: number;
        gravity?: ImageGravity;
        quality?: number;
        borderWidth?: number;
        borderColor?: string;
        borderRadius?: number;
        opacity?: number;
        rotation?: number;
        background?: string;
        output?: ImageFormat;
        token?: string;
    }): string;
    /**
     * Get a file preview image. Currently, this method supports preview for image files (jpg, png, and gif), other supported formats, like pdf, docs, slides, and spreadsheets, will return the file icon image. You can also pass query string arguments for cutting and resizing your preview image. Preview is supported only for image files smaller than 10MB.
     *
     * @param {string} bucketId - Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).
     * @param {string} fileId - File ID
     * @param {number} width - Resize preview image width, Pass an integer between 0 to 4000.
     * @param {number} height - Resize preview image height, Pass an integer between 0 to 4000.
     * @param {ImageGravity} gravity - Image crop gravity. Can be one of center,top-left,top,top-right,left,right,bottom-left,bottom,bottom-right
     * @param {number} quality - Preview image quality. Pass an integer between 0 to 100. Defaults to keep existing image quality.
     * @param {number} borderWidth - Preview image border in pixels. Pass an integer between 0 to 100. Defaults to 0.
     * @param {string} borderColor - Preview image border color. Use a valid HEX color, no # is needed for prefix.
     * @param {number} borderRadius - Preview image border radius in pixels. Pass an integer between 0 to 4000.
     * @param {number} opacity - Preview image opacity. Only works with images having an alpha channel (like png). Pass a number between 0 to 1.
     * @param {number} rotation - Preview image rotation in degrees. Pass an integer between -360 and 360.
     * @param {string} background - Preview image background color. Only works with transparent images (png). Use a valid HEX color, no # is needed for prefix.
     * @param {ImageFormat} output - Output format type (jpeg, jpg, png, gif and webp).
     * @param {string} token - File token for accessing this file.
     * @throws {AppwriteException}
     * @returns {string}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getFilePreview(bucketId: string, fileId: string, width?: number, height?: number, gravity?: ImageGravity, quality?: number, borderWidth?: number, borderColor?: string, borderRadius?: number, opacity?: number, rotation?: number, background?: string, output?: ImageFormat, token?: string): string;
    /**
     * Get a file content by its unique ID. This endpoint is similar to the download method but returns with no  'Content-Disposition: attachment' header.
     *
     * @param {string} params.bucketId - Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).
     * @param {string} params.fileId - File ID.
     * @param {string} params.token - File token for accessing this file.
     * @throws {AppwriteException}
     * @returns {string}
     */
    getFileView(params: {
        bucketId: string;
        fileId: string;
        token?: string;
    }): string;
    /**
     * Get a file content by its unique ID. This endpoint is similar to the download method but returns with no  'Content-Disposition: attachment' header.
     *
     * @param {string} bucketId - Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).
     * @param {string} fileId - File ID.
     * @param {string} token - File token for accessing this file.
     * @throws {AppwriteException}
     * @returns {string}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getFileView(bucketId: string, fileId: string, token?: string): string;
    /**
     * Get usage metrics and statistics for all buckets in the project. You can view the total number of buckets, files, storage usage. The response includes both current totals and historical data over time. Use the optional range parameter to specify the time window for historical data: 24h (last 24 hours), 30d (last 30 days), or 90d (last 90 days). If not specified, range defaults to 30 days.
     *
     *
     * @param {UsageRange} params.range - Date range.
     * @throws {AppwriteException}
     * @returns {Promise<Models.UsageStorage>}
     */
    getUsage(params?: {
        range?: UsageRange;
    }): Promise<Models.UsageStorage>;
    /**
     * Get usage metrics and statistics for all buckets in the project. You can view the total number of buckets, files, storage usage. The response includes both current totals and historical data over time. Use the optional range parameter to specify the time window for historical data: 24h (last 24 hours), 30d (last 30 days), or 90d (last 90 days). If not specified, range defaults to 30 days.
     *
     *
     * @param {UsageRange} range - Date range.
     * @throws {AppwriteException}
     * @returns {Promise<Models.UsageStorage>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getUsage(range?: UsageRange): Promise<Models.UsageStorage>;
    /**
     * Get usage metrics and statistics a specific bucket in the project. You can view the total number of files, storage usage. The response includes both current totals and historical data over time. Use the optional range parameter to specify the time window for historical data: 24h (last 24 hours), 30d (last 30 days), or 90d (last 90 days). If not specified, range defaults to 30 days.
     *
     *
     * @param {string} params.bucketId - Bucket ID.
     * @param {UsageRange} params.range - Date range.
     * @throws {AppwriteException}
     * @returns {Promise<Models.UsageBuckets>}
     */
    getBucketUsage(params: {
        bucketId: string;
        range?: UsageRange;
    }): Promise<Models.UsageBuckets>;
    /**
     * Get usage metrics and statistics a specific bucket in the project. You can view the total number of files, storage usage. The response includes both current totals and historical data over time. Use the optional range parameter to specify the time window for historical data: 24h (last 24 hours), 30d (last 30 days), or 90d (last 90 days). If not specified, range defaults to 30 days.
     *
     *
     * @param {string} bucketId - Bucket ID.
     * @param {UsageRange} range - Date range.
     * @throws {AppwriteException}
     * @returns {Promise<Models.UsageBuckets>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getBucketUsage(bucketId: string, range?: UsageRange): Promise<Models.UsageBuckets>;
}
