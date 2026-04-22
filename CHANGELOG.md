# Change Log

## 11.0.0

* Breaking: Renamed `project.updateProtocolStatus` to `project.updateProtocol` (endpoint changed to `/project/protocols/{protocolId}`)
* Breaking: Renamed `project.updateServiceStatus` to `project.updateService` (endpoint changed to `/project/services/{serviceId}`)
* Breaking: Removed SMS template methods `getSmsTemplate`, `getSMSTemplate`, `updateSmsTemplate`, `updateSMSTemplate`, `deleteSmsTemplate`, and `deleteSMSTemplate` from `Projects` service
* Breaking: Removed `SmsTemplate` model and `SmsTemplateType`/`SmsTemplateLocale` enums
* Breaking: Moved email template `type` and `locale` from the URL path to the request body — endpoints are now `/projects/{projectId}/templates/email`
* Breaking: Made `locale` optional on `projects.getEmailTemplate`, `projects.updateEmailTemplate`, and `projects.deleteEmailTemplate`
* Breaking: Reordered positional parameters on `projects.updateEmailTemplate` — `locale` now optional and placed after `message` (object-style callers unaffected)
* Breaking: Removed deprecated `Deno121`, `Deno124`, and `Deno135` values from `Runtime`, `Runtimes`, and `BuildRuntime` enums
* Breaking: Removed shared `queries` set from the Realtime client — queries are now tracked per-subscription
* Added `DetectionFrameworkType` and `DetectionRuntimeType` enums
* Added `type` field to `ProviderRepositoryFrameworkList`, `ProviderRepositoryRuntimeList`, `DetectionFramework`, and `DetectionRuntime` models
* Added Realtime `subscribe` message protocol — channels and queries are sent per-subscription over the WebSocket, with per-subscription IDs and reconnect handling
* Updated `updateProtocol` and `updateService` descriptions to "Update properties of a specific…"

## 10.0.0

* Added `DocumentsDB` service with full CRUD for document-based databases, collections, attributes, indexes, and documents
* Added `VectorsDB` service with full CRUD for vector databases, collections, attributes, indexes, and documents
* Added `DocumentsDBIndexType` and `VectorsDBIndexType` enums
* Added `DocumentsDB` and `VectorsDB` to `ServiceId` enum
* Added `Model` enum

## 9.1.0

* Added optional `secret` parameter to `webhooks.create()` and `webhooks.updateSecret()` methods
* Updated `Webhook.secret` field description to clarify it is only returned on creation and secret rotation
* Updated `taxId` parameter to optional in `setBillingTaxId` method

## 9.0.0

* Breaking: Moved `keys`, `labels`, and `platforms` methods from `Projects` to `Project` service
* Breaking: Replaced generic `Platform` model and `PlatformType` enum with typed models: `PlatformWeb`, `PlatformApple`, `PlatformAndroid`, `PlatformWindows`, `PlatformLinux`
* Breaking: Replaced generic `createPlatform`/`updatePlatform` with platform-specific methods: `createAndroidPlatform`, `createApplePlatform`, `createLinuxPlatform`, `createWebPlatform`, `createWindowsPlatform` (and corresponding update variants). The `key` parameter was renamed to platform-specific terminology, such as `bundleIdentifier` or `packageName`
* Breaking: Removed `PlatformList` model from `Projects` service (now returned by `Project` service)
* Breaking: Removed `updateApiStatus`, `updateApiStatusAll`, `updateAPIStatus`, `updateAPIStatusAll` methods and `Api`, `ApiService` enums from `Projects` service
* Breaking: Renamed webhook parameters `security` to `tls`, `httpUser` to `authUsername`, `httpPass` to `authPassword`, `signatureKey` to `secret`
* Breaking: Renamed `updateSignature` to `updateSecret` in `Webhooks` service
* Added `updateCanonicalEmails`, `updateDisposableEmails`, `updateFreeEmails` methods to `Project` service
* Added `updateProtocolStatus`, `updateServiceStatus` methods to `Project` service with new `ProtocolId` and `ServiceId` enums
* Added `purge` parameter to `databases.updateCollection` and `tablesDb.updateTable`
* Added `x` (Twitter/X) to `OAuthProvider` enum
* Added `keys.read`, `keys.write`, `platforms.read`, `platforms.write` to `Scopes` enum
* Added `userType` field to audit log model
* Added service and protocol status fields to `Project` model
* Added `supportsDisposableEmailValidation`, `supportsCanonicalEmailValidation`, `supportsFreeEmailValidation` fields to plan model
* Updated `ttl` parameter description for `databases.listDocuments` and `tablesDb.listRows` with detailed caching behaviour

## 8.3.0

* Added addon management methods to Organizations service: `listAddons`, `createBaaAddon`, `getAddon`, `deleteAddon`, `confirmAddonPayment`, `getAddonPrice`
* Added `Addon` enum and `BillingPlanSupportedAddons` model
* Added `templateRepository`, `templateOwner`, `templateRootDirectory`, `templateVersion` optional parameters to `functions.create`
* Added `authDisposableEmails`, `authCanonicalEmails`, `authFreeEmails` fields to Project model
* Added `supportForIntegerIds` field to database adapter model
* Added descriptions to `createJSONExport` and `createJSONImport` migration methods
* Updated `ProxyRule` field descriptions for clarity

## 8.2.0

* Added: `createJSONExport()` and `createJSONImport()` methods to Migrations service
* Added: `Dart311` and `Flutter341` runtime variants
* Updated: `reason` and `expiredAt` fields on `Block` model are now optional
* Updated: Improved `ProxyRule` field descriptions
* Updated: Rollup upgraded to v4 with ESM config, Node >= 18 engine requirement

## 8.1.1

* Fixed: Added `files` field to `package.json` to publish only built artifacts to npm

## 8.1.0

* Added: Added `getHeaders()` method to `Client` to expose current request headers
* Added: Added `ProviderRepositoryRuntime` and `ProviderRepositoryRuntimeList` models
* Updated: `createRepositoryDetection()` return type now includes `DetectionRuntime`
* Updated: `listRepositories()` return type now includes `ProviderRepositoryRuntimeList`
* Added: Added `package-lock.json` to track dependency lockfile in version control

## 8.0.0

* [BREAKING] Changed `$sequence` type from `number` to `string` for `Row` and `Document` models
* [BREAKING] Renamed `IndexType` enum: split into `DatabasesIndexType` (for Databases) and `TablesDBIndexType` (for TablesDB)
* [BREAKING] `Project.createVariable` now requires `variableId` as a new first parameter
* [BREAKING] Removed `ProviderRepositoryRuntime`, `ProviderRepositoryRuntimeList`, and `DetectionRuntime` models
* [BREAKING] Removed all RC (release candidate) runtime variants from `Runtime`, `Runtimes`, and `BuildRuntime` enums
* Added new `Domains.updateAutoRenewal()` method for enabling/disabling domain auto-renewal
* Added new `Users.updateImpersonator()` method for enabling/disabling user impersonation
* Added impersonation support: `setImpersonateUserId()`, `setImpersonateUserEmail()`, `setImpersonateUserPhone()` on `Client`
* Added `impersonator` and `impersonatorUserId` optional fields to `User` model
* Added `autoRenewal` optional parameter to `Domains.createPurchase()` and `Domains.createTransferIn()`
* Added optional `queries` and `total` parameters to `Project.listVariables()`
* Added `Documentsdb` and `Vectorsdb` values to `DatabaseType` and `BackupServices` enums
* Added new scopes: `Account`, `ProjectRead`, `ProjectWrite`, `PlatformsRead`, `PlatformsWrite`, `ProjectsRead`, `ProjectsWrite`, `KeysRead`, `KeysWrite`, `DevKeysRead`, `DevKeysWrite`
* Added VectorsDB and DocumentsDB usage metrics to `UsagePeriod` model
* Added embeddings metrics (`embeddingsText*`) to `UsagePeriod` model
* Added `realtimeMessages` and `realtimeBandwidth` fields to `Plan` model
* Changed `Project.updateVariable` `key` parameter from required to optional
* Updated `Log` model field descriptions to clarify impersonation behavior
* Updated `X-Appwrite-Response-Format` header to `1.9.0`
* Updated devDependencies: Rollup 2→3, TypeScript 4.7→5.7, and related plugin upgrades

## 6.0.0

* Breaking: Renamed `domains.confirmPurchase()` to `domains.updatePurchase()`
* Breaking: Renamed `domains.confirmTransferIn()` to `domains.updateTransferIn()`
* Breaking: Replaced `Projects` API with `Webhooks` for webhook usage
* Breaking: Renamed `updateWebhook()` to `update()` on `Webhooks`
* Breaking: Renamed `listWebhooks()` to `list()` on `Webhooks`
* Breaking: Replaced `DomainPurchasePaymentStatus` with `DomainPurchaseStatus`
* Breaking: Renamed `DomainTransferStatusStatus` to `DomainTransferStatus`
* Breaking: Removed `Deno121`, `Deno124`, `Deno135` from `BuildRuntime`/`Runtime` enums
* Updated README badge to API version `1.8.2`
* Added `queries` option to `webhooks.list()`

## 5.0.0

* Breaking: Functions and Sites now require `specification` parameter and support `deploymentRetention`
* Breaking: New `buildSpecification` and `runtimeSpecification` parameters for functions
* Added messaging migration resource types: Provider, Topic, Subscriber, Message
* Added new build runtimes and runtime versions
* Added domain purchase and transfer confirmation endpoints
* Added `DomainPurchasePaymentStatus` enum

## 4.0.0

* Breaking: Channel.collection() and Channel.table() now require explicit IDs
* Added migration resource enums: AppwriteMigrationResource, FirebaseMigrationResource, NHostMigrationResource, SupabaseMigrationResource
* Added DomainTransferStatusStatus enum
* Added ttl option to listDocuments and listRows
* Added new docs/examples across domains, health, migrations, projects, sites
* Updated docs and examples to reflect new resources and transfers

## 3.1.0

* Add support for `createPurchase` method in `Domains` service
* Fix very large double values (for example 1.7976931348623157e+308) from being expanded into giant integer literals

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
