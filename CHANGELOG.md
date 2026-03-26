# Change Log

## 7.0.0

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
