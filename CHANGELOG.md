# Change Log

## 3.0.0

* Breaking: EmailTemplateType enum values renamed and updated (Magicsession -> MagicSession, Mfachallenge -> MfaChallenge, Sessionalert -> SessionAlert, Otpsession -> OtpSession) and their underlying string values changed accordingly, which may affect existing integrations.
* Breaking: OAuthProvider enum removed GithubImagine and GoogleImagine options, potentially breaking code that referenced those providers.
* New: Channel.upsert() method added to support upserting documents/rows with Channel.
* New: Expanded runtime support with additional runtimes across BuildRuntime, Runtime, and Runtimes enums (Node.js 23-25, PHP 8.4, Ruby 3.4/4.0, Python 3.13/3.14, Deno 2.5/2.6, Bun 1.2/1.3, Go 1.24-1.26, Java 25, Kotlin 2.3, Swift 6.2, etc.).
* Chore: Removed bignumber.js dependency; library now relies on json-bigint and native BigInt handling; ensure compatibility for users that depended on bignumber.js.
* Documentation: Update README to reflect Appwrite server compatibility 1.8.x.
* Maintenance: Changelog updated with 2.3.1 patch: Add missing `queries` parameter to new string type attributes (backward-compatible improvement).

## 2.3.1

* Add missing `queries` parameter to new string type attributes

## 2.3.0

* Add `queries` parameter to `Realtime.subscribe()` and `client.subscribe()` for server-side query filtering
* Add slot-based subscription management with subscription ID mappings from backend
* Add `subscriptions` field to `RealtimeResponseEvent` type
* Fix `Roles` enum removed from Teams service; `roles` parameter now accepts `string[]`
* Fix parameter detection in overloaded methods to check for optional params (Account, Avatars, Graphql)
* Fix WebSocket connection handling with stale connection guards and improved close/reconnect logic
* Fix doc examples wrapped in markdown code fences

## 2.2.0

* Add array-based enum parameters (e.g., `permissions: BrowserPermission[]`).
* Breaking change: `Output` enum has been removed; use `ImageFormat` instead.
* Add `Channel` helpers for Realtime.
* Add `getQueueAudits` support to `Health` service.
* Add longtext/mediumtext/text/varchar attribute and column helpers to `Databases` and `TablesDB` services.

## 2.1.3

Fix bigint and float parsing in SDK.

## 2.1.2

* Fix only use `bigint` for min, max and default attributes

## 2.1.1

* Allow `bigint` to be passed in all methods that previously only accepted `number`

## 2.1.0

* Add `setSelfSigned` and `setCookie` methods to `Client` class

## 2.0.0

* Update SDK examples to use object-based parameters instead of positional arguments
* Align all service method usage with the new API signature style
* Update publish workflow to use trusted publishing mechanism

## 1.10.0

* Fix autocompletion not working for `Document` model even when generic is passed
* Add `getAvailableCredits` and `updateProjects` methods to `Organizations` service
* Allow internal attributes to be passed in `data` parameter of `createDocument`, `updateDocument` etc. methods
* Formatting changes

## 1.9.0

* Add `1.8.x` support

## 1.8.0

* Add encrypt to string attribute model
* Add upsert document method
* Add max deployment size and max build size plan attributes
* Remove `templateRepository`, `templateOwner`, `templateRootDirectory`, `templateVersion` from `functions.create`

## 1.7.0

* Update docs to use `https://<REGION>.cloud.appwrite.io/v1` instead of `https://cloud.appwrite.io/v1`
* Add `1.7.x` support

## 1.6.0

* Updates checking and then setting of cloud and realtime endpoint.
* Remove unnecessary asyncs and awaits.
* Adds and fixes lot of the billing related models and return types.
* Fixes typing for attributes type in Collection class.
* Removes method.title for multiplexing of endpoints.
* Removes unnecessary adding of project to payload.
* Ensures AppwriteException's "response" attribute is always string
* Adds check for file not found in chuckedUpload method
* Adds figma oauth adapter

## 1.5.2

* Adds image transformations usages to project, bucket and org. usages.

## 1.5.1

* Add some model vars that were left out and were required for DB read & writes.

## 1.5.0

* Adds support for `databasesReadsTotal` and `databasesWritesTotal` attributes

## 22.3.1

* Add `upsert` method to Realtime `Channels` helper class
* Fix `bignumber.js` bundler conflict with Next.js Turbopack by removing direct dependency in favor of transitive dependency from `json-bigint`

## 22.1.0

* Add `queries` parameter to `Realtime.subscribe()` and `client.subscribe()` for server-side query filtering
* Add slot-based subscription management with subscription ID mappings from backend
* Add `subscriptions` field to `RealtimeResponseEvent` type
* Fix `Roles` enum removed from Teams service; `roles` parameter now accepts `string[]`
* Fix parameter detection in overloaded methods to check for optional params (Account, Avatars, Graphql)
* Fix WebSocket connection handling with stale connection guards and improved close/reconnect logic
* Fix doc examples wrapped in markdown code fences

## 22.0.0

* Add array-based enum parameters (e.g., `permissions: BrowserPermission[]`).
* Breaking change: `Output` enum has been removed; use `ImageFormat` instead.
* Add `Channel` helpers for Realtime.

## 21.5.0

* Add `getScreenshot` method to `Avatars` service
* Add `Theme`, `Timezone` and `Output` enums

## 21.4.0

* Add `total` parameter to list queries allowing skipping counting rows in a table for improved performance
* Add `Operator` class for atomic modification of rows via update, bulk update, upsert, and bulk upsert operations

## 21.3.0

* Add new `Realtime` service with methods for subscribing to channels and receiving messages
* Fix `client.setSession` not working when using realtime
* Deprecate `client.subscribe` method in favor of `Realtime` service

> Note: Deprecated methods are still available for backwards compatibility, but might be removed in future versions.

## 21.2.1

* Add transaction support for Databases and TablesDB

## 21.1.0

* Deprecate `createVerification` method in `Account` service
* Add `createEmailVerification` method in `Account` service

## 18.2.0

* Add `incrementDocumentAttribute` and `decrementDocumentAttribute` support to `Databases` service
* Add `gif` support to `ImageFormat` enum
* Fix undefined `fileParam` error in `chunkedUpload` method
* Fix autocompletion not working for `Document` model even when generic is passed

## 18.1.1

* Fix using `devKeys` resulting in an error by conditionally removing credentials

## 18.1.0

* Add `devKeys` support to `Client` service
* Add `upsertDocument` support to `Databases` service

## 18.0.0

* Add `<REGION>` to doc examples due to the new multi region endpoints
* Remove `Gif` from ImageFormat enum
* Remove `search` param from `listExecutions` method
* Add `token` param to `getFilePreview` and `getFileView` for File tokens usage
* Improve CORS error catching in `client.call` method

## 17.0.2

* Fix requests failing by removing `Content-Type` header from `GET` and `HEAD` requests

## 17.0.1

* Remove unnecessary titles from method descriptions
* Fix duplicate adding of payload params
* Remove unnecessary awaits and asyncs
* Ensure `AppwriteException` response is always string

## 17.0.0

* Fix pong response & chunked upload
* Add `ping` support to `Realtime` service
