/**
 * Appwrite Models
 */
export namespace Models {
    /**
     * Documents List
     */
    export type DocumentList<Document extends Models.Document> = {
        /**
         * Total number of documents documents that matched your query.
         */
        total: number;
        /**
         * List of documents.
         */
        documents: Document[];
    }
    /**
     * Collections List
     */
    export type CollectionList = {
        /**
         * Total number of collections documents that matched your query.
         */
        total: number;
        /**
         * List of collections.
         */
        collections: Collection[];
    }
    /**
     * Databases List
     */
    export type DatabaseList = {
        /**
         * Total number of databases documents that matched your query.
         */
        total: number;
        /**
         * List of databases.
         */
        databases: Database[];
    }
    /**
     * Indexes List
     */
    export type IndexList = {
        /**
         * Total number of indexes documents that matched your query.
         */
        total: number;
        /**
         * List of indexes.
         */
        indexes: Index[];
    }
    /**
     * Users List
     */
    export type UserList<Preferences extends Models.Preferences> = {
        /**
         * Total number of users documents that matched your query.
         */
        total: number;
        /**
         * List of users.
         */
        users: User<Preferences>[];
    }
    /**
     * Sessions List
     */
    export type SessionList = {
        /**
         * Total number of sessions documents that matched your query.
         */
        total: number;
        /**
         * List of sessions.
         */
        sessions: Session[];
    }
    /**
     * Identities List
     */
    export type IdentityList = {
        /**
         * Total number of identities documents that matched your query.
         */
        total: number;
        /**
         * List of identities.
         */
        identities: Identity[];
    }
    /**
     * Logs List
     */
    export type LogList = {
        /**
         * Total number of logs documents that matched your query.
         */
        total: number;
        /**
         * List of logs.
         */
        logs: Log[];
    }
    /**
     * Files List
     */
    export type FileList = {
        /**
         * Total number of files documents that matched your query.
         */
        total: number;
        /**
         * List of files.
         */
        files: File[];
    }
    /**
     * Buckets List
     */
    export type BucketList = {
        /**
         * Total number of buckets documents that matched your query.
         */
        total: number;
        /**
         * List of buckets.
         */
        buckets: Bucket[];
    }
    /**
     * Resource Tokens List
     */
    export type ResourceTokenList = {
        /**
         * Total number of tokens documents that matched your query.
         */
        total: number;
        /**
         * List of tokens.
         */
        tokens: ResourceToken[];
    }
    /**
     * Teams List
     */
    export type TeamList<Preferences extends Models.Preferences> = {
        /**
         * Total number of teams documents that matched your query.
         */
        total: number;
        /**
         * List of teams.
         */
        teams: Team<Preferences>[];
    }
    /**
     * Memberships List
     */
    export type MembershipList = {
        /**
         * Total number of memberships documents that matched your query.
         */
        total: number;
        /**
         * List of memberships.
         */
        memberships: Membership[];
    }
    /**
     * Sites List
     */
    export type SiteList = {
        /**
         * Total number of sites documents that matched your query.
         */
        total: number;
        /**
         * List of sites.
         */
        sites: Site[];
    }
    /**
     * Site Templates List
     */
    export type TemplateSiteList = {
        /**
         * Total number of templates documents that matched your query.
         */
        total: number;
        /**
         * List of templates.
         */
        templates: TemplateSite[];
    }
    /**
     * Functions List
     */
    export type FunctionList = {
        /**
         * Total number of functions documents that matched your query.
         */
        total: number;
        /**
         * List of functions.
         */
        functions: Function[];
    }
    /**
     * Function Templates List
     */
    export type TemplateFunctionList = {
        /**
         * Total number of templates documents that matched your query.
         */
        total: number;
        /**
         * List of templates.
         */
        templates: TemplateFunction[];
    }
    /**
     * Installations List
     */
    export type InstallationList = {
        /**
         * Total number of installations documents that matched your query.
         */
        total: number;
        /**
         * List of installations.
         */
        installations: Installation[];
    }
    /**
     * Framework Provider Repositories List
     */
    export type ProviderRepositoryFrameworkList = {
        /**
         * Total number of frameworkProviderRepositories documents that matched your query.
         */
        total: number;
        /**
         * List of frameworkProviderRepositories.
         */
        frameworkProviderRepositories: ProviderRepositoryFramework[];
    }
    /**
     * Runtime Provider Repositories List
     */
    export type ProviderRepositoryRuntimeList = {
        /**
         * Total number of runtimeProviderRepositories documents that matched your query.
         */
        total: number;
        /**
         * List of runtimeProviderRepositories.
         */
        runtimeProviderRepositories: ProviderRepositoryRuntime[];
    }
    /**
     * Branches List
     */
    export type BranchList = {
        /**
         * Total number of branches documents that matched your query.
         */
        total: number;
        /**
         * List of branches.
         */
        branches: Branch[];
    }
    /**
     * Frameworks List
     */
    export type FrameworkList = {
        /**
         * Total number of frameworks documents that matched your query.
         */
        total: number;
        /**
         * List of frameworks.
         */
        frameworks: Framework[];
    }
    /**
     * Runtimes List
     */
    export type RuntimeList = {
        /**
         * Total number of runtimes documents that matched your query.
         */
        total: number;
        /**
         * List of runtimes.
         */
        runtimes: Runtime[];
    }
    /**
     * Deployments List
     */
    export type DeploymentList = {
        /**
         * Total number of deployments documents that matched your query.
         */
        total: number;
        /**
         * List of deployments.
         */
        deployments: Deployment[];
    }
    /**
     * Executions List
     */
    export type ExecutionList = {
        /**
         * Total number of executions documents that matched your query.
         */
        total: number;
        /**
         * List of executions.
         */
        executions: Execution[];
    }
    /**
     * Projects List
     */
    export type ProjectList = {
        /**
         * Total number of projects documents that matched your query.
         */
        total: number;
        /**
         * List of projects.
         */
        projects: Project[];
    }
    /**
     * Webhooks List
     */
    export type WebhookList = {
        /**
         * Total number of webhooks documents that matched your query.
         */
        total: number;
        /**
         * List of webhooks.
         */
        webhooks: Webhook[];
    }
    /**
     * API Keys List
     */
    export type KeyList = {
        /**
         * Total number of keys documents that matched your query.
         */
        total: number;
        /**
         * List of keys.
         */
        keys: Key[];
    }
    /**
     * Dev Keys List
     */
    export type DevKeyList = {
        /**
         * Total number of devKeys documents that matched your query.
         */
        total: number;
        /**
         * List of devKeys.
         */
        devKeys: DevKey[];
    }
    /**
     * Platforms List
     */
    export type PlatformList = {
        /**
         * Total number of platforms documents that matched your query.
         */
        total: number;
        /**
         * List of platforms.
         */
        platforms: Platform[];
    }
    /**
     * Countries List
     */
    export type CountryList = {
        /**
         * Total number of countries documents that matched your query.
         */
        total: number;
        /**
         * List of countries.
         */
        countries: Country[];
    }
    /**
     * Continents List
     */
    export type ContinentList = {
        /**
         * Total number of continents documents that matched your query.
         */
        total: number;
        /**
         * List of continents.
         */
        continents: Continent[];
    }
    /**
     * Languages List
     */
    export type LanguageList = {
        /**
         * Total number of languages documents that matched your query.
         */
        total: number;
        /**
         * List of languages.
         */
        languages: Language[];
    }
    /**
     * Currencies List
     */
    export type CurrencyList = {
        /**
         * Total number of currencies documents that matched your query.
         */
        total: number;
        /**
         * List of currencies.
         */
        currencies: Currency[];
    }
    /**
     * Phones List
     */
    export type PhoneList = {
        /**
         * Total number of phones documents that matched your query.
         */
        total: number;
        /**
         * List of phones.
         */
        phones: Phone[];
    }
    /**
     * Variables List
     */
    export type VariableList = {
        /**
         * Total number of variables documents that matched your query.
         */
        total: number;
        /**
         * List of variables.
         */
        variables: Variable[];
    }
    /**
     * Rule List
     */
    export type ProxyRuleList = {
        /**
         * Total number of rules documents that matched your query.
         */
        total: number;
        /**
         * List of rules.
         */
        rules: ProxyRule[];
    }
    /**
     * Locale codes list
     */
    export type LocaleCodeList = {
        /**
         * Total number of localeCodes documents that matched your query.
         */
        total: number;
        /**
         * List of localeCodes.
         */
        localeCodes: LocaleCode[];
    }
    /**
     * Provider list
     */
    export type ProviderList = {
        /**
         * Total number of providers documents that matched your query.
         */
        total: number;
        /**
         * List of providers.
         */
        providers: Provider[];
    }
    /**
     * Message list
     */
    export type MessageList = {
        /**
         * Total number of messages documents that matched your query.
         */
        total: number;
        /**
         * List of messages.
         */
        messages: Message[];
    }
    /**
     * Topic list
     */
    export type TopicList = {
        /**
         * Total number of topics documents that matched your query.
         */
        total: number;
        /**
         * List of topics.
         */
        topics: Topic[];
    }
    /**
     * Subscriber list
     */
    export type SubscriberList = {
        /**
         * Total number of subscribers documents that matched your query.
         */
        total: number;
        /**
         * List of subscribers.
         */
        subscribers: Subscriber[];
    }
    /**
     * Target list
     */
    export type TargetList = {
        /**
         * Total number of targets documents that matched your query.
         */
        total: number;
        /**
         * List of targets.
         */
        targets: Target[];
    }
    /**
     * Migrations List
     */
    export type MigrationList = {
        /**
         * Total number of migrations documents that matched your query.
         */
        total: number;
        /**
         * List of migrations.
         */
        migrations: Migration[];
    }
    /**
     * Specifications List
     */
    export type SpecificationList = {
        /**
         * Total number of specifications documents that matched your query.
         */
        total: number;
        /**
         * List of specifications.
         */
        specifications: Specification[];
    }
    /**
     * VCS Content List
     */
    export type VcsContentList = {
        /**
         * Total number of contents documents that matched your query.
         */
        total: number;
        /**
         * List of contents.
         */
        contents: VcsContent[];
    }
    /**
     * Database
     */
    export type Database = {
        /**
         * Database ID.
         */
        $id: string;
        /**
         * Database name.
         */
        name: string;
        /**
         * Database creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Database update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * If database is enabled. Can be &#039;enabled&#039; or &#039;disabled&#039;. When disabled, the database is inaccessible to users, but remains accessible to Server SDKs using API keys.
         */
        enabled: boolean;
        /**
         * Database backup policies.
         */
        policies: Index[];
        /**
         * Database backup archives.
         */
        archives: Collection[];
    }
    /**
     * Collection
     */
    export type Collection = {
        /**
         * Collection ID.
         */
        $id: string;
        /**
         * Collection creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Collection update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Collection permissions. [Learn more about permissions](https://appwrite.io/docs/permissions).
         */
        $permissions: string[];
        /**
         * Database ID.
         */
        databaseId: string;
        /**
         * Collection name.
         */
        name: string;
        /**
         * Collection enabled. Can be &#039;enabled&#039; or &#039;disabled&#039;. When disabled, the collection is inaccessible to users, but remains accessible to Server SDKs using API keys.
         */
        enabled: boolean;
        /**
         * Whether document-level permissions are enabled. [Learn more about permissions](https://appwrite.io/docs/permissions).
         */
        documentSecurity: boolean;
        /**
         * Collection attributes.
         */
        attributes: (Models.AttributeBoolean | Models.AttributeInteger | Models.AttributeFloat | Models.AttributeEmail | Models.AttributeEnum | Models.AttributeUrl | Models.AttributeIp | Models.AttributeDatetime | Models.AttributeRelationship | Models.AttributeString)[];
        /**
         * Collection indexes.
         */
        indexes: Index[];
    }
    /**
     * Attributes List
     */
    export type AttributeList = {
        /**
         * Total number of attributes in the given collection.
         */
        total: number;
        /**
         * List of attributes.
         */
        attributes: (Models.AttributeBoolean | Models.AttributeInteger | Models.AttributeFloat | Models.AttributeEmail | Models.AttributeEnum | Models.AttributeUrl | Models.AttributeIp | Models.AttributeDatetime | Models.AttributeRelationship | Models.AttributeString)[];
    }
    /**
     * AttributeString
     */
    export type AttributeString = {
        /**
         * Attribute Key.
         */
        key: string;
        /**
         * Attribute type.
         */
        type: string;
        /**
         * Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: string;
        /**
         * Error message. Displays error generated on failure of creating or deleting an attribute.
         */
        error: string;
        /**
         * Is attribute required?
         */
        required: boolean;
        /**
         * Is attribute an array?
         */
        array?: boolean;
        /**
         * Attribute creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Attribute update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Attribute size.
         */
        size: number;
        /**
         * Default value for attribute when not provided. Cannot be set when attribute is required.
         */
        default?: string;
        /**
         * Defines whether this attribute is encrypted or not.
         */
        encrypt?: boolean;
    }
    /**
     * AttributeInteger
     */
    export type AttributeInteger = {
        /**
         * Attribute Key.
         */
        key: string;
        /**
         * Attribute type.
         */
        type: string;
        /**
         * Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: string;
        /**
         * Error message. Displays error generated on failure of creating or deleting an attribute.
         */
        error: string;
        /**
         * Is attribute required?
         */
        required: boolean;
        /**
         * Is attribute an array?
         */
        array?: boolean;
        /**
         * Attribute creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Attribute update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Minimum value to enforce for new documents.
         */
        min?: number;
        /**
         * Maximum value to enforce for new documents.
         */
        max?: number;
        /**
         * Default value for attribute when not provided. Cannot be set when attribute is required.
         */
        default?: number;
    }
    /**
     * AttributeFloat
     */
    export type AttributeFloat = {
        /**
         * Attribute Key.
         */
        key: string;
        /**
         * Attribute type.
         */
        type: string;
        /**
         * Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: string;
        /**
         * Error message. Displays error generated on failure of creating or deleting an attribute.
         */
        error: string;
        /**
         * Is attribute required?
         */
        required: boolean;
        /**
         * Is attribute an array?
         */
        array?: boolean;
        /**
         * Attribute creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Attribute update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Minimum value to enforce for new documents.
         */
        min?: number;
        /**
         * Maximum value to enforce for new documents.
         */
        max?: number;
        /**
         * Default value for attribute when not provided. Cannot be set when attribute is required.
         */
        default?: number;
    }
    /**
     * AttributeBoolean
     */
    export type AttributeBoolean = {
        /**
         * Attribute Key.
         */
        key: string;
        /**
         * Attribute type.
         */
        type: string;
        /**
         * Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: string;
        /**
         * Error message. Displays error generated on failure of creating or deleting an attribute.
         */
        error: string;
        /**
         * Is attribute required?
         */
        required: boolean;
        /**
         * Is attribute an array?
         */
        array?: boolean;
        /**
         * Attribute creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Attribute update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Default value for attribute when not provided. Cannot be set when attribute is required.
         */
        default?: boolean;
    }
    /**
     * AttributeEmail
     */
    export type AttributeEmail = {
        /**
         * Attribute Key.
         */
        key: string;
        /**
         * Attribute type.
         */
        type: string;
        /**
         * Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: string;
        /**
         * Error message. Displays error generated on failure of creating or deleting an attribute.
         */
        error: string;
        /**
         * Is attribute required?
         */
        required: boolean;
        /**
         * Is attribute an array?
         */
        array?: boolean;
        /**
         * Attribute creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Attribute update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * String format.
         */
        format: string;
        /**
         * Default value for attribute when not provided. Cannot be set when attribute is required.
         */
        default?: string;
    }
    /**
     * AttributeEnum
     */
    export type AttributeEnum = {
        /**
         * Attribute Key.
         */
        key: string;
        /**
         * Attribute type.
         */
        type: string;
        /**
         * Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: string;
        /**
         * Error message. Displays error generated on failure of creating or deleting an attribute.
         */
        error: string;
        /**
         * Is attribute required?
         */
        required: boolean;
        /**
         * Is attribute an array?
         */
        array?: boolean;
        /**
         * Attribute creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Attribute update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Array of elements in enumerated type.
         */
        elements: string[];
        /**
         * String format.
         */
        format: string;
        /**
         * Default value for attribute when not provided. Cannot be set when attribute is required.
         */
        default?: string;
    }
    /**
     * AttributeIP
     */
    export type AttributeIp = {
        /**
         * Attribute Key.
         */
        key: string;
        /**
         * Attribute type.
         */
        type: string;
        /**
         * Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: string;
        /**
         * Error message. Displays error generated on failure of creating or deleting an attribute.
         */
        error: string;
        /**
         * Is attribute required?
         */
        required: boolean;
        /**
         * Is attribute an array?
         */
        array?: boolean;
        /**
         * Attribute creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Attribute update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * String format.
         */
        format: string;
        /**
         * Default value for attribute when not provided. Cannot be set when attribute is required.
         */
        default?: string;
    }
    /**
     * AttributeURL
     */
    export type AttributeUrl = {
        /**
         * Attribute Key.
         */
        key: string;
        /**
         * Attribute type.
         */
        type: string;
        /**
         * Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: string;
        /**
         * Error message. Displays error generated on failure of creating or deleting an attribute.
         */
        error: string;
        /**
         * Is attribute required?
         */
        required: boolean;
        /**
         * Is attribute an array?
         */
        array?: boolean;
        /**
         * Attribute creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Attribute update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * String format.
         */
        format: string;
        /**
         * Default value for attribute when not provided. Cannot be set when attribute is required.
         */
        default?: string;
    }
    /**
     * AttributeDatetime
     */
    export type AttributeDatetime = {
        /**
         * Attribute Key.
         */
        key: string;
        /**
         * Attribute type.
         */
        type: string;
        /**
         * Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: string;
        /**
         * Error message. Displays error generated on failure of creating or deleting an attribute.
         */
        error: string;
        /**
         * Is attribute required?
         */
        required: boolean;
        /**
         * Is attribute an array?
         */
        array?: boolean;
        /**
         * Attribute creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Attribute update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * ISO 8601 format.
         */
        format: string;
        /**
         * Default value for attribute when not provided. Only null is optional
         */
        default?: string;
    }
    /**
     * AttributeRelationship
     */
    export type AttributeRelationship = {
        /**
         * Attribute Key.
         */
        key: string;
        /**
         * Attribute type.
         */
        type: string;
        /**
         * Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: string;
        /**
         * Error message. Displays error generated on failure of creating or deleting an attribute.
         */
        error: string;
        /**
         * Is attribute required?
         */
        required: boolean;
        /**
         * Is attribute an array?
         */
        array?: boolean;
        /**
         * Attribute creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Attribute update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * The ID of the related collection.
         */
        relatedCollection: string;
        /**
         * The type of the relationship.
         */
        relationType: string;
        /**
         * Is the relationship two-way?
         */
        twoWay: boolean;
        /**
         * The key of the two-way relationship.
         */
        twoWayKey: string;
        /**
         * How deleting the parent document will propagate to child documents.
         */
        onDelete: string;
        /**
         * Whether this is the parent or child side of the relationship
         */
        side: string;
    }
    /**
     * Index
     */
    export type Index = {
        /**
         * Index Key.
         */
        key: string;
        /**
         * Index type.
         */
        type: string;
        /**
         * Index status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: string;
        /**
         * Error message. Displays error generated on failure of creating or deleting an index.
         */
        error: string;
        /**
         * Index attributes.
         */
        attributes: string[];
        /**
         * Index attributes length.
         */
        lengths: number[];
        /**
         * Index orders.
         */
        orders?: string[];
        /**
         * Index creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Index update date in ISO 8601 format.
         */
        $updatedAt: string;
    }
    /**
     * Document
     */
    export type Document = {
        /**
         * Document ID.
         */
        $id: string;
        /**
         * Document automatically incrementing ID.
         */
        $sequence: number;
        /**
         * Collection ID.
         */
        $collectionId: string;
        /**
         * Database ID.
         */
        $databaseId: string;
        /**
         * Document creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Document update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Document permissions. [Learn more about permissions](https://appwrite.io/docs/permissions).
         */
        $permissions: string[];
        [key: string]: any;
    }
    /**
     * Log
     */
    export type Log = {
        /**
         * Event name.
         */
        event: string;
        /**
         * User ID.
         */
        userId: string;
        /**
         * User Email.
         */
        userEmail: string;
        /**
         * User Name.
         */
        userName: string;
        /**
         * API mode when event triggered.
         */
        mode: string;
        /**
         * IP session in use when the session was created.
         */
        ip: string;
        /**
         * Log creation date in ISO 8601 format.
         */
        time: string;
        /**
         * Operating system code name. View list of [available options](https://github.com/appwrite/appwrite/blob/master/docs/lists/os.json).
         */
        osCode: string;
        /**
         * Operating system name.
         */
        osName: string;
        /**
         * Operating system version.
         */
        osVersion: string;
        /**
         * Client type.
         */
        clientType: string;
        /**
         * Client code name. View list of [available options](https://github.com/appwrite/appwrite/blob/master/docs/lists/clients.json).
         */
        clientCode: string;
        /**
         * Client name.
         */
        clientName: string;
        /**
         * Client version.
         */
        clientVersion: string;
        /**
         * Client engine name.
         */
        clientEngine: string;
        /**
         * Client engine name.
         */
        clientEngineVersion: string;
        /**
         * Device name.
         */
        deviceName: string;
        /**
         * Device brand name.
         */
        deviceBrand: string;
        /**
         * Device model name.
         */
        deviceModel: string;
        /**
         * Country two-character ISO 3166-1 alpha code.
         */
        countryCode: string;
        /**
         * Country name.
         */
        countryName: string;
    }
    /**
     * User
     */
    export type User<Preferences extends Models.Preferences> = {
        /**
         * User ID.
         */
        $id: string;
        /**
         * User creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * User update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * User name.
         */
        name: string;
        /**
         * Hashed user password.
         */
        password?: string;
        /**
         * Password hashing algorithm.
         */
        hash?: string;
        /**
         * Password hashing algorithm configuration.
         */
        hashOptions?: object;
        /**
         * User registration date in ISO 8601 format.
         */
        registration: string;
        /**
         * User status. Pass `true` for enabled and `false` for disabled.
         */
        status: boolean;
        /**
         * Labels for the user.
         */
        labels: string[];
        /**
         * Password update time in ISO 8601 format.
         */
        passwordUpdate: string;
        /**
         * User email address.
         */
        email: string;
        /**
         * User phone number in E.164 format.
         */
        phone: string;
        /**
         * Email verification status.
         */
        emailVerification: boolean;
        /**
         * Phone verification status.
         */
        phoneVerification: boolean;
        /**
         * Multi factor authentication status.
         */
        mfa: boolean;
        /**
         * User preferences as a key-value object
         */
        prefs: Preferences;
        /**
         * A user-owned message receiver. A single user may have multiple e.g. emails, phones, and a browser. Each target is registered with a single provider.
         */
        targets: Target[];
        /**
         * Most recent access date in ISO 8601 format. This attribute is only updated again after 24 hours.
         */
        accessedAt: string;
    }
    /**
     * AlgoMD5
     */
    export type AlgoMd5 = {
        /**
         * Algo type.
         */
        type: string;
    }
    /**
     * AlgoSHA
     */
    export type AlgoSha = {
        /**
         * Algo type.
         */
        type: string;
    }
    /**
     * AlgoPHPass
     */
    export type AlgoPhpass = {
        /**
         * Algo type.
         */
        type: string;
    }
    /**
     * AlgoBcrypt
     */
    export type AlgoBcrypt = {
        /**
         * Algo type.
         */
        type: string;
    }
    /**
     * AlgoScrypt
     */
    export type AlgoScrypt = {
        /**
         * Algo type.
         */
        type: string;
        /**
         * CPU complexity of computed hash.
         */
        costCpu: number;
        /**
         * Memory complexity of computed hash.
         */
        costMemory: number;
        /**
         * Parallelization of computed hash.
         */
        costParallel: number;
        /**
         * Length used to compute hash.
         */
        length: number;
    }
    /**
     * AlgoScryptModified
     */
    export type AlgoScryptModified = {
        /**
         * Algo type.
         */
        type: string;
        /**
         * Salt used to compute hash.
         */
        salt: string;
        /**
         * Separator used to compute hash.
         */
        saltSeparator: string;
        /**
         * Key used to compute hash.
         */
        signerKey: string;
    }
    /**
     * AlgoArgon2
     */
    export type AlgoArgon2 = {
        /**
         * Algo type.
         */
        type: string;
        /**
         * Memory used to compute hash.
         */
        memoryCost: number;
        /**
         * Amount of time consumed to compute hash
         */
        timeCost: number;
        /**
         * Number of threads used to compute hash.
         */
        threads: number;
    }
    /**
     * Preferences
     */
    export type Preferences = {
        [key: string]: any;
    }
    /**
     * Session
     */
    export type Session = {
        /**
         * Session ID.
         */
        $id: string;
        /**
         * Session creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Session update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * User ID.
         */
        userId: string;
        /**
         * Session expiration date in ISO 8601 format.
         */
        expire: string;
        /**
         * Session Provider.
         */
        provider: string;
        /**
         * Session Provider User ID.
         */
        providerUid: string;
        /**
         * Session Provider Access Token.
         */
        providerAccessToken: string;
        /**
         * The date of when the access token expires in ISO 8601 format.
         */
        providerAccessTokenExpiry: string;
        /**
         * Session Provider Refresh Token.
         */
        providerRefreshToken: string;
        /**
         * IP in use when the session was created.
         */
        ip: string;
        /**
         * Operating system code name. View list of [available options](https://github.com/appwrite/appwrite/blob/master/docs/lists/os.json).
         */
        osCode: string;
        /**
         * Operating system name.
         */
        osName: string;
        /**
         * Operating system version.
         */
        osVersion: string;
        /**
         * Client type.
         */
        clientType: string;
        /**
         * Client code name. View list of [available options](https://github.com/appwrite/appwrite/blob/master/docs/lists/clients.json).
         */
        clientCode: string;
        /**
         * Client name.
         */
        clientName: string;
        /**
         * Client version.
         */
        clientVersion: string;
        /**
         * Client engine name.
         */
        clientEngine: string;
        /**
         * Client engine name.
         */
        clientEngineVersion: string;
        /**
         * Device name.
         */
        deviceName: string;
        /**
         * Device brand name.
         */
        deviceBrand: string;
        /**
         * Device model name.
         */
        deviceModel: string;
        /**
         * Country two-character ISO 3166-1 alpha code.
         */
        countryCode: string;
        /**
         * Country name.
         */
        countryName: string;
        /**
         * Returns true if this the current user session.
         */
        current: boolean;
        /**
         * Returns a list of active session factors.
         */
        factors: string[];
        /**
         * Secret used to authenticate the user. Only included if the request was made with an API key
         */
        secret: string;
        /**
         * Most recent date in ISO 8601 format when the session successfully passed MFA challenge.
         */
        mfaUpdatedAt: string;
    }
    /**
     * Identity
     */
    export type Identity = {
        /**
         * Identity ID.
         */
        $id: string;
        /**
         * Identity creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Identity update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * User ID.
         */
        userId: string;
        /**
         * Identity Provider.
         */
        provider: string;
        /**
         * ID of the User in the Identity Provider.
         */
        providerUid: string;
        /**
         * Email of the User in the Identity Provider.
         */
        providerEmail: string;
        /**
         * Identity Provider Access Token.
         */
        providerAccessToken: string;
        /**
         * The date of when the access token expires in ISO 8601 format.
         */
        providerAccessTokenExpiry: string;
        /**
         * Identity Provider Refresh Token.
         */
        providerRefreshToken: string;
    }
    /**
     * Token
     */
    export type Token = {
        /**
         * Token ID.
         */
        $id: string;
        /**
         * Token creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * User ID.
         */
        userId: string;
        /**
         * Token secret key. This will return an empty string unless the response is returned using an API key or as part of a webhook payload.
         */
        secret: string;
        /**
         * Token expiration date in ISO 8601 format.
         */
        expire: string;
        /**
         * Security phrase of a token. Empty if security phrase was not requested when creating a token. It includes randomly generated phrase which is also sent in the external resource such as email.
         */
        phrase: string;
    }
    /**
     * JWT
     */
    export type Jwt = {
        /**
         * JWT encoded string.
         */
        jwt: string;
    }
    /**
     * Locale
     */
    export type Locale = {
        /**
         * User IP address.
         */
        ip: string;
        /**
         * Country code in [ISO 3166-1](http://en.wikipedia.org/wiki/ISO_3166-1) two-character format
         */
        countryCode: string;
        /**
         * Country name. This field support localization.
         */
        country: string;
        /**
         * Continent code. A two character continent code &quot;AF&quot; for Africa, &quot;AN&quot; for Antarctica, &quot;AS&quot; for Asia, &quot;EU&quot; for Europe, &quot;NA&quot; for North America, &quot;OC&quot; for Oceania, and &quot;SA&quot; for South America.
         */
        continentCode: string;
        /**
         * Continent name. This field support localization.
         */
        continent: string;
        /**
         * True if country is part of the European Union.
         */
        eu: boolean;
        /**
         * Currency code in [ISO 4217-1](http://en.wikipedia.org/wiki/ISO_4217) three-character format
         */
        currency: string;
    }
    /**
     * LocaleCode
     */
    export type LocaleCode = {
        /**
         * Locale codes in [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)
         */
        code: string;
        /**
         * Locale name
         */
        name: string;
    }
    /**
     * File
     */
    export type File = {
        /**
         * File ID.
         */
        $id: string;
        /**
         * Bucket ID.
         */
        bucketId: string;
        /**
         * File creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * File update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * File permissions. [Learn more about permissions](https://appwrite.io/docs/permissions).
         */
        $permissions: string[];
        /**
         * File name.
         */
        name: string;
        /**
         * File MD5 signature.
         */
        signature: string;
        /**
         * File mime type.
         */
        mimeType: string;
        /**
         * File original size in bytes.
         */
        sizeOriginal: number;
        /**
         * Total number of chunks available
         */
        chunksTotal: number;
        /**
         * Total number of chunks uploaded
         */
        chunksUploaded: number;
    }
    /**
     * Bucket
     */
    export type Bucket = {
        /**
         * Bucket ID.
         */
        $id: string;
        /**
         * Bucket creation time in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Bucket update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Bucket permissions. [Learn more about permissions](https://appwrite.io/docs/permissions).
         */
        $permissions: string[];
        /**
         * Whether file-level security is enabled. [Learn more about permissions](https://appwrite.io/docs/permissions).
         */
        fileSecurity: boolean;
        /**
         * Bucket name.
         */
        name: string;
        /**
         * Bucket enabled.
         */
        enabled: boolean;
        /**
         * Maximum file size supported.
         */
        maximumFileSize: number;
        /**
         * Allowed file extensions.
         */
        allowedFileExtensions: string[];
        /**
         * Compression algorithm choosen for compression. Will be one of none, [gzip](https://en.wikipedia.org/wiki/Gzip), or [zstd](https://en.wikipedia.org/wiki/Zstd).
         */
        compression: string;
        /**
         * Bucket is encrypted.
         */
        encryption: boolean;
        /**
         * Virus scanning is enabled.
         */
        antivirus: boolean;
    }
    /**
     * ResourceToken
     */
    export type ResourceToken = {
        /**
         * Token ID.
         */
        $id: string;
        /**
         * Token creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Resource ID.
         */
        resourceId: string;
        /**
         * Resource type.
         */
        resourceType: string;
        /**
         * Token expiration date in ISO 8601 format.
         */
        expire: string;
        /**
         * JWT encoded string.
         */
        secret: string;
        /**
         * Most recent access date in ISO 8601 format. This attribute is only updated again after 24 hours.
         */
        accessedAt: string;
    }
    /**
     * Team
     */
    export type Team<Preferences extends Models.Preferences> = {
        /**
         * Team ID.
         */
        $id: string;
        /**
         * Team creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Team update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Team name.
         */
        name: string;
        /**
         * Total number of team members.
         */
        total: number;
        /**
         * Team preferences as a key-value object
         */
        prefs: Preferences;
    }
    /**
     * Membership
     */
    export type Membership = {
        /**
         * Membership ID.
         */
        $id: string;
        /**
         * Membership creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Membership update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * User ID.
         */
        userId: string;
        /**
         * User name. Hide this attribute by toggling membership privacy in the Console.
         */
        userName: string;
        /**
         * User email address. Hide this attribute by toggling membership privacy in the Console.
         */
        userEmail: string;
        /**
         * Team ID.
         */
        teamId: string;
        /**
         * Team name.
         */
        teamName: string;
        /**
         * Date, the user has been invited to join the team in ISO 8601 format.
         */
        invited: string;
        /**
         * Date, the user has accepted the invitation to join the team in ISO 8601 format.
         */
        joined: string;
        /**
         * User confirmation status, true if the user has joined the team or false otherwise.
         */
        confirm: boolean;
        /**
         * Multi factor authentication status, true if the user has MFA enabled or false otherwise. Hide this attribute by toggling membership privacy in the Console.
         */
        mfa: boolean;
        /**
         * User list of roles
         */
        roles: string[];
    }
    /**
     * Site
     */
    export type Site = {
        /**
         * Site ID.
         */
        $id: string;
        /**
         * Site creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Site update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Site name.
         */
        name: string;
        /**
         * Site enabled.
         */
        enabled: boolean;
        /**
         * Is the site deployed with the latest configuration? This is set to false if you&#039;ve changed an environment variables, entrypoint, commands, or other settings that needs redeploy to be applied. When the value is false, redeploy the site to update it with the latest configuration.
         */
        live: boolean;
        /**
         * When disabled, request logs will exclude logs and errors, and site responses will be slightly faster.
         */
        logging: boolean;
        /**
         * Site framework.
         */
        framework: string;
        /**
         * Site&#039;s active deployment ID.
         */
        deploymentId: string;
        /**
         * Active deployment creation date in ISO 8601 format.
         */
        deploymentCreatedAt: string;
        /**
         * Screenshot of active deployment with light theme preference file ID.
         */
        deploymentScreenshotLight: string;
        /**
         * Screenshot of active deployment with dark theme preference file ID.
         */
        deploymentScreenshotDark: string;
        /**
         * Site&#039;s latest deployment ID.
         */
        latestDeploymentId: string;
        /**
         * Latest deployment creation date in ISO 8601 format.
         */
        latestDeploymentCreatedAt: string;
        /**
         * Status of latest deployment. Possible values are &quot;waiting&quot;, &quot;processing&quot;, &quot;building&quot;, &quot;ready&quot;, and &quot;failed&quot;.
         */
        latestDeploymentStatus: string;
        /**
         * Site variables.
         */
        vars: Variable[];
        /**
         * Site request timeout in seconds.
         */
        timeout: number;
        /**
         * The install command used to install the site dependencies.
         */
        installCommand: string;
        /**
         * The build command used to build the site.
         */
        buildCommand: string;
        /**
         * The directory where the site build output is located.
         */
        outputDirectory: string;
        /**
         * Site VCS (Version Control System) installation id.
         */
        installationId: string;
        /**
         * VCS (Version Control System) Repository ID
         */
        providerRepositoryId: string;
        /**
         * VCS (Version Control System) branch name
         */
        providerBranch: string;
        /**
         * Path to site in VCS (Version Control System) repository
         */
        providerRootDirectory: string;
        /**
         * Is VCS (Version Control System) connection is in silent mode? When in silence mode, no comments will be posted on the repository pull or merge requests
         */
        providerSilentMode: boolean;
        /**
         * Machine specification for builds and executions.
         */
        specification: string;
        /**
         * Site build runtime.
         */
        buildRuntime: string;
        /**
         * Site framework adapter.
         */
        adapter: string;
        /**
         * Name of fallback file to use instead of 404 page. If null, Appwrite 404 page will be displayed.
         */
        fallbackFile: string;
    }
    /**
     * Template Site
     */
    export type TemplateSite = {
        /**
         * Site Template ID.
         */
        key: string;
        /**
         * Site Template Name.
         */
        name: string;
        /**
         * Short description of template
         */
        tagline: string;
        /**
         * URL hosting a template demo.
         */
        demoUrl: string;
        /**
         * File URL with preview screenshot in dark theme preference.
         */
        screenshotDark: string;
        /**
         * File URL with preview screenshot in light theme preference.
         */
        screenshotLight: string;
        /**
         * Site use cases.
         */
        useCases: string[];
        /**
         * List of frameworks that can be used with this template.
         */
        frameworks: TemplateFramework[];
        /**
         * VCS (Version Control System) Provider.
         */
        vcsProvider: string;
        /**
         * VCS (Version Control System) Repository ID
         */
        providerRepositoryId: string;
        /**
         * VCS (Version Control System) Owner.
         */
        providerOwner: string;
        /**
         * VCS (Version Control System) branch version (tag).
         */
        providerVersion: string;
        /**
         * Site variables.
         */
        variables: TemplateVariable[];
    }
    /**
     * Template Framework
     */
    export type TemplateFramework = {
        /**
         * Parent framework key.
         */
        key: string;
        /**
         * Framework Name.
         */
        name: string;
        /**
         * The install command used to install the dependencies.
         */
        installCommand: string;
        /**
         * The build command used to build the deployment.
         */
        buildCommand: string;
        /**
         * The output directory to store the build output.
         */
        outputDirectory: string;
        /**
         * Path to site in VCS (Version Control System) repository
         */
        providerRootDirectory: string;
        /**
         * Runtime used during build step of template.
         */
        buildRuntime: string;
        /**
         * Site framework runtime
         */
        adapter: string;
        /**
         * Fallback file for SPA. Only relevant for static serve runtime.
         */
        fallbackFile: string;
    }
    /**
     * Function
     */
    export type Function = {
        /**
         * Function ID.
         */
        $id: string;
        /**
         * Function creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Function update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Execution permissions.
         */
        execute: string[];
        /**
         * Function name.
         */
        name: string;
        /**
         * Function enabled.
         */
        enabled: boolean;
        /**
         * Is the function deployed with the latest configuration? This is set to false if you&#039;ve changed an environment variables, entrypoint, commands, or other settings that needs redeploy to be applied. When the value is false, redeploy the function to update it with the latest configuration.
         */
        live: boolean;
        /**
         * When disabled, executions will exclude logs and errors, and will be slightly faster.
         */
        logging: boolean;
        /**
         * Function execution and build runtime.
         */
        runtime: string;
        /**
         * Function&#039;s active deployment ID.
         */
        deploymentId: string;
        /**
         * Active deployment creation date in ISO 8601 format.
         */
        deploymentCreatedAt: string;
        /**
         * Function&#039;s latest deployment ID.
         */
        latestDeploymentId: string;
        /**
         * Latest deployment creation date in ISO 8601 format.
         */
        latestDeploymentCreatedAt: string;
        /**
         * Status of latest deployment. Possible values are &quot;waiting&quot;, &quot;processing&quot;, &quot;building&quot;, &quot;ready&quot;, and &quot;failed&quot;.
         */
        latestDeploymentStatus: string;
        /**
         * Allowed permission scopes.
         */
        scopes: string[];
        /**
         * Function variables.
         */
        vars: Variable[];
        /**
         * Function trigger events.
         */
        events: string[];
        /**
         * Function execution schedule in CRON format.
         */
        schedule: string;
        /**
         * Function execution timeout in seconds.
         */
        timeout: number;
        /**
         * The entrypoint file used to execute the deployment.
         */
        entrypoint: string;
        /**
         * The build command used to build the deployment.
         */
        commands: string;
        /**
         * Version of Open Runtimes used for the function.
         */
        version: string;
        /**
         * Function VCS (Version Control System) installation id.
         */
        installationId: string;
        /**
         * VCS (Version Control System) Repository ID
         */
        providerRepositoryId: string;
        /**
         * VCS (Version Control System) branch name
         */
        providerBranch: string;
        /**
         * Path to function in VCS (Version Control System) repository
         */
        providerRootDirectory: string;
        /**
         * Is VCS (Version Control System) connection is in silent mode? When in silence mode, no comments will be posted on the repository pull or merge requests
         */
        providerSilentMode: boolean;
        /**
         * Machine specification for builds and executions.
         */
        specification: string;
    }
    /**
     * Template Function
     */
    export type TemplateFunction = {
        /**
         * Function Template Icon.
         */
        icon: string;
        /**
         * Function Template ID.
         */
        id: string;
        /**
         * Function Template Name.
         */
        name: string;
        /**
         * Function Template Tagline.
         */
        tagline: string;
        /**
         * Execution permissions.
         */
        permissions: string[];
        /**
         * Function trigger events.
         */
        events: string[];
        /**
         * Function execution schedult in CRON format.
         */
        cron: string;
        /**
         * Function execution timeout in seconds.
         */
        timeout: number;
        /**
         * Function use cases.
         */
        useCases: string[];
        /**
         * List of runtimes that can be used with this template.
         */
        runtimes: TemplateRuntime[];
        /**
         * Function Template Instructions.
         */
        instructions: string;
        /**
         * VCS (Version Control System) Provider.
         */
        vcsProvider: string;
        /**
         * VCS (Version Control System) Repository ID
         */
        providerRepositoryId: string;
        /**
         * VCS (Version Control System) Owner.
         */
        providerOwner: string;
        /**
         * VCS (Version Control System) branch version (tag).
         */
        providerVersion: string;
        /**
         * Function variables.
         */
        variables: TemplateVariable[];
        /**
         * Function scopes.
         */
        scopes: string[];
    }
    /**
     * Template Runtime
     */
    export type TemplateRuntime = {
        /**
         * Runtime Name.
         */
        name: string;
        /**
         * The build command used to build the deployment.
         */
        commands: string;
        /**
         * The entrypoint file used to execute the deployment.
         */
        entrypoint: string;
        /**
         * Path to function in VCS (Version Control System) repository
         */
        providerRootDirectory: string;
    }
    /**
     * Template Variable
     */
    export type TemplateVariable = {
        /**
         * Variable Name.
         */
        name: string;
        /**
         * Variable Description.
         */
        description: string;
        /**
         * Variable Value.
         */
        value: string;
        /**
         * Variable secret flag. Secret variables can only be updated or deleted, but never read.
         */
        secret: boolean;
        /**
         * Variable Placeholder.
         */
        placeholder: string;
        /**
         * Is the variable required?
         */
        required: boolean;
        /**
         * Variable Type.
         */
        type: string;
    }
    /**
     * Installation
     */
    export type Installation = {
        /**
         * Function ID.
         */
        $id: string;
        /**
         * Function creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Function update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * VCS (Version Control System) provider name.
         */
        provider: string;
        /**
         * VCS (Version Control System) organization name.
         */
        organization: string;
        /**
         * VCS (Version Control System) installation ID.
         */
        providerInstallationId: string;
    }
    /**
     * ProviderRepository
     */
    export type ProviderRepository = {
        /**
         * VCS (Version Control System) repository ID.
         */
        id: string;
        /**
         * VCS (Version Control System) repository name.
         */
        name: string;
        /**
         * VCS (Version Control System) organization name
         */
        organization: string;
        /**
         * VCS (Version Control System) provider name.
         */
        provider: string;
        /**
         * Is VCS (Version Control System) repository private?
         */
        private: boolean;
        /**
         * Last commit date in ISO 8601 format.
         */
        pushedAt: string;
    }
    /**
     * ProviderRepositoryFramework
     */
    export type ProviderRepositoryFramework = {
        /**
         * VCS (Version Control System) repository ID.
         */
        id: string;
        /**
         * VCS (Version Control System) repository name.
         */
        name: string;
        /**
         * VCS (Version Control System) organization name
         */
        organization: string;
        /**
         * VCS (Version Control System) provider name.
         */
        provider: string;
        /**
         * Is VCS (Version Control System) repository private?
         */
        private: boolean;
        /**
         * Last commit date in ISO 8601 format.
         */
        pushedAt: string;
        /**
         * Auto-detected framework. Empty if type is not &quot;framework&quot;.
         */
        framework: string;
    }
    /**
     * ProviderRepositoryRuntime
     */
    export type ProviderRepositoryRuntime = {
        /**
         * VCS (Version Control System) repository ID.
         */
        id: string;
        /**
         * VCS (Version Control System) repository name.
         */
        name: string;
        /**
         * VCS (Version Control System) organization name
         */
        organization: string;
        /**
         * VCS (Version Control System) provider name.
         */
        provider: string;
        /**
         * Is VCS (Version Control System) repository private?
         */
        private: boolean;
        /**
         * Last commit date in ISO 8601 format.
         */
        pushedAt: string;
        /**
         * Auto-detected runtime. Empty if type is not &quot;runtime&quot;.
         */
        runtime: string;
    }
    /**
     * DetectionFramework
     */
    export type DetectionFramework = {
        /**
         * Framework
         */
        framework: string;
        /**
         * Site Install Command
         */
        installCommand: string;
        /**
         * Site Build Command
         */
        buildCommand: string;
        /**
         * Site Output Directory
         */
        outputDirectory: string;
    }
    /**
     * DetectionRuntime
     */
    export type DetectionRuntime = {
        /**
         * Runtime
         */
        runtime: string;
        /**
         * Function Entrypoint
         */
        entrypoint: string;
        /**
         * Function install and build commands
         */
        commands: string;
    }
    /**
     * VcsContents
     */
    export type VcsContent = {
        /**
         * Content size in bytes. Only files have size, and for directories, 0 is returned.
         */
        size?: number;
        /**
         * If a content is a directory. Directories can be used to check nested contents.
         */
        isDirectory?: boolean;
        /**
         * Name of directory or file.
         */
        name: string;
    }
    /**
     * Branch
     */
    export type Branch = {
        /**
         * Branch Name.
         */
        name: string;
    }
    /**
     * Runtime
     */
    export type Runtime = {
        /**
         * Runtime ID.
         */
        $id: string;
        /**
         * Parent runtime key.
         */
        key: string;
        /**
         * Runtime Name.
         */
        name: string;
        /**
         * Runtime version.
         */
        version: string;
        /**
         * Base Docker image used to build the runtime.
         */
        base: string;
        /**
         * Image name of Docker Hub.
         */
        image: string;
        /**
         * Name of the logo image.
         */
        logo: string;
        /**
         * List of supported architectures.
         */
        supports: string[];
    }
    /**
     * Framework
     */
    export type Framework = {
        /**
         * Framework key.
         */
        key: string;
        /**
         * Framework Name.
         */
        name: string;
        /**
         * Default runtime version.
         */
        buildRuntime: string;
        /**
         * List of supported runtime versions.
         */
        runtimes: string[];
        /**
         * List of supported adapters.
         */
        adapters: FrameworkAdapter[];
    }
    /**
     * Framework Adapter
     */
    export type FrameworkAdapter = {
        /**
         * Adapter key.
         */
        key: string;
        /**
         * Default command to download dependencies.
         */
        installCommand: string;
        /**
         * Default command to build site into output directory.
         */
        buildCommand: string;
        /**
         * Default output directory of build.
         */
        outputDirectory: string;
        /**
         * Name of fallback file to use instead of 404 page. If null, Appwrite 404 page will be displayed.
         */
        fallbackFile: string;
    }
    /**
     * Deployment
     */
    export type Deployment = {
        /**
         * Deployment ID.
         */
        $id: string;
        /**
         * Deployment creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Deployment update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Type of deployment.
         */
        type: string;
        /**
         * Resource ID.
         */
        resourceId: string;
        /**
         * Resource type.
         */
        resourceType: string;
        /**
         * The entrypoint file to use to execute the deployment code.
         */
        entrypoint: string;
        /**
         * The code size in bytes.
         */
        sourceSize: number;
        /**
         * The build output size in bytes.
         */
        buildSize: number;
        /**
         * The total size in bytes (source and build output).
         */
        totalSize: number;
        /**
         * The current build ID.
         */
        buildId: string;
        /**
         * Whether the deployment should be automatically activated.
         */
        activate: boolean;
        /**
         * Screenshot with light theme preference file ID.
         */
        screenshotLight: string;
        /**
         * Screenshot with dark theme preference file ID.
         */
        screenshotDark: string;
        /**
         * The deployment status. Possible values are &quot;waiting&quot;, &quot;processing&quot;, &quot;building&quot;, &quot;ready&quot;, and &quot;failed&quot;.
         */
        status: string;
        /**
         * The build logs.
         */
        buildLogs: string;
        /**
         * The current build time in seconds.
         */
        buildDuration: number;
        /**
         * The name of the vcs provider repository
         */
        providerRepositoryName: string;
        /**
         * The name of the vcs provider repository owner
         */
        providerRepositoryOwner: string;
        /**
         * The url of the vcs provider repository
         */
        providerRepositoryUrl: string;
        /**
         * The branch of the vcs repository
         */
        providerBranch: string;
        /**
         * The commit hash of the vcs commit
         */
        providerCommitHash: string;
        /**
         * The url of vcs commit author
         */
        providerCommitAuthorUrl: string;
        /**
         * The name of vcs commit author
         */
        providerCommitAuthor: string;
        /**
         * The commit message
         */
        providerCommitMessage: string;
        /**
         * The url of the vcs commit
         */
        providerCommitUrl: string;
        /**
         * The branch of the vcs repository
         */
        providerBranchUrl: string;
    }
    /**
     * Execution
     */
    export type Execution = {
        /**
         * Execution ID.
         */
        $id: string;
        /**
         * Execution creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Execution upate date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Execution roles.
         */
        $permissions: string[];
        /**
         * Function ID.
         */
        functionId: string;
        /**
         * The trigger that caused the function to execute. Possible values can be: `http`, `schedule`, or `event`.
         */
        trigger: string;
        /**
         * The status of the function execution. Possible values can be: `waiting`, `processing`, `completed`, or `failed`.
         */
        status: string;
        /**
         * HTTP request method type.
         */
        requestMethod: string;
        /**
         * HTTP request path and query.
         */
        requestPath: string;
        /**
         * HTTP response headers as a key-value object. This will return only whitelisted headers. All headers are returned if execution is created as synchronous.
         */
        requestHeaders: Headers[];
        /**
         * HTTP response status code.
         */
        responseStatusCode: number;
        /**
         * HTTP response body. This will return empty unless execution is created as synchronous.
         */
        responseBody: string;
        /**
         * HTTP response headers as a key-value object. This will return only whitelisted headers. All headers are returned if execution is created as synchronous.
         */
        responseHeaders: Headers[];
        /**
         * Function logs. Includes the last 4,000 characters. This will return an empty string unless the response is returned using an API key or as part of a webhook payload.
         */
        logs: string;
        /**
         * Function errors. Includes the last 4,000 characters. This will return an empty string unless the response is returned using an API key or as part of a webhook payload.
         */
        errors: string;
        /**
         * Resource(function/site) execution duration in seconds.
         */
        duration: number;
        /**
         * The scheduled time for execution. If left empty, execution will be queued immediately.
         */
        scheduledAt?: string;
    }
    /**
     * Project
     */
    export type Project = {
        /**
         * Project ID.
         */
        $id: string;
        /**
         * Project creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Project update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Project name.
         */
        name: string;
        /**
         * Project description.
         */
        description: string;
        /**
         * Project team ID.
         */
        teamId: string;
        /**
         * Project logo file ID.
         */
        logo: string;
        /**
         * Project website URL.
         */
        url: string;
        /**
         * Company legal name.
         */
        legalName: string;
        /**
         * Country code in [ISO 3166-1](http://en.wikipedia.org/wiki/ISO_3166-1) two-character format.
         */
        legalCountry: string;
        /**
         * State name.
         */
        legalState: string;
        /**
         * City name.
         */
        legalCity: string;
        /**
         * Company Address.
         */
        legalAddress: string;
        /**
         * Company Tax ID.
         */
        legalTaxId: string;
        /**
         * Session duration in seconds.
         */
        authDuration: number;
        /**
         * Max users allowed. 0 is unlimited.
         */
        authLimit: number;
        /**
         * Max sessions allowed per user. 100 maximum.
         */
        authSessionsLimit: number;
        /**
         * Max allowed passwords in the history list per user. Max passwords limit allowed in history is 20. Use 0 for disabling password history.
         */
        authPasswordHistory: number;
        /**
         * Whether or not to check user&#039;s password against most commonly used passwords.
         */
        authPasswordDictionary: boolean;
        /**
         * Whether or not to check the user password for similarity with their personal data.
         */
        authPersonalDataCheck: boolean;
        /**
         * An array of mock numbers and their corresponding verification codes (OTPs).
         */
        authMockNumbers: MockNumber[];
        /**
         * Whether or not to send session alert emails to users.
         */
        authSessionAlerts: boolean;
        /**
         * Whether or not to show user names in the teams membership response.
         */
        authMembershipsUserName: boolean;
        /**
         * Whether or not to show user emails in the teams membership response.
         */
        authMembershipsUserEmail: boolean;
        /**
         * Whether or not to show user MFA status in the teams membership response.
         */
        authMembershipsMfa: boolean;
        /**
         * List of Auth Providers.
         */
        oAuthProviders: AuthProvider[];
        /**
         * List of Platforms.
         */
        platforms: Platform[];
        /**
         * List of Webhooks.
         */
        webhooks: Webhook[];
        /**
         * List of API Keys.
         */
        keys: Key[];
        /**
         * List of dev keys.
         */
        devKeys: DevKey[];
        /**
         * Status for custom SMTP
         */
        smtpEnabled: boolean;
        /**
         * SMTP sender name
         */
        smtpSenderName: string;
        /**
         * SMTP sender email
         */
        smtpSenderEmail: string;
        /**
         * SMTP reply to email
         */
        smtpReplyTo: string;
        /**
         * SMTP server host name
         */
        smtpHost: string;
        /**
         * SMTP server port
         */
        smtpPort: number;
        /**
         * SMTP server username
         */
        smtpUsername: string;
        /**
         * SMTP server password
         */
        smtpPassword: string;
        /**
         * SMTP server secure protocol
         */
        smtpSecure: string;
        /**
         * Number of times the ping was received for this project.
         */
        pingCount: number;
        /**
         * Last ping datetime in ISO 8601 format.
         */
        pingedAt: string;
        /**
         * Email/Password auth method status
         */
        authEmailPassword: boolean;
        /**
         * Magic URL auth method status
         */
        authUsersAuthMagicURL: boolean;
        /**
         * Email (OTP) auth method status
         */
        authEmailOtp: boolean;
        /**
         * Anonymous auth method status
         */
        authAnonymous: boolean;
        /**
         * Invites auth method status
         */
        authInvites: boolean;
        /**
         * JWT auth method status
         */
        authJWT: boolean;
        /**
         * Phone auth method status
         */
        authPhone: boolean;
        /**
         * Account service status
         */
        serviceStatusForAccount: boolean;
        /**
         * Avatars service status
         */
        serviceStatusForAvatars: boolean;
        /**
         * Databases service status
         */
        serviceStatusForDatabases: boolean;
        /**
         * Locale service status
         */
        serviceStatusForLocale: boolean;
        /**
         * Health service status
         */
        serviceStatusForHealth: boolean;
        /**
         * Storage service status
         */
        serviceStatusForStorage: boolean;
        /**
         * Teams service status
         */
        serviceStatusForTeams: boolean;
        /**
         * Users service status
         */
        serviceStatusForUsers: boolean;
        /**
         * Sites service status
         */
        serviceStatusForSites: boolean;
        /**
         * Functions service status
         */
        serviceStatusForFunctions: boolean;
        /**
         * GraphQL service status
         */
        serviceStatusForGraphql: boolean;
        /**
         * Messaging service status
         */
        serviceStatusForMessaging: boolean;
        /**
         * Project region
         */
        region: string;
    }
    /**
     * Webhook
     */
    export type Webhook = {
        /**
         * Webhook ID.
         */
        $id: string;
        /**
         * Webhook creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Webhook update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Webhook name.
         */
        name: string;
        /**
         * Webhook URL endpoint.
         */
        url: string;
        /**
         * Webhook trigger events.
         */
        events: string[];
        /**
         * Indicated if SSL / TLS Certificate verification is enabled.
         */
        security: boolean;
        /**
         * HTTP basic authentication username.
         */
        httpUser: string;
        /**
         * HTTP basic authentication password.
         */
        httpPass: string;
        /**
         * Signature key which can be used to validated incoming
         */
        signatureKey: string;
        /**
         * Indicates if this webhook is enabled.
         */
        enabled: boolean;
        /**
         * Webhook error logs from the most recent failure.
         */
        logs: string;
        /**
         * Number of consecutive failed webhook attempts.
         */
        attempts: number;
    }
    /**
     * Key
     */
    export type Key = {
        /**
         * Key ID.
         */
        $id: string;
        /**
         * Key creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Key update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Key name.
         */
        name: string;
        /**
         * Key expiration date in ISO 8601 format.
         */
        expire: string;
        /**
         * Allowed permission scopes.
         */
        scopes: string[];
        /**
         * Secret key.
         */
        secret: string;
        /**
         * Most recent access date in ISO 8601 format. This attribute is only updated again after 24 hours.
         */
        accessedAt: string;
        /**
         * List of SDK user agents that used this key.
         */
        sdks: string[];
    }
    /**
     * DevKey
     */
    export type DevKey = {
        /**
         * Key ID.
         */
        $id: string;
        /**
         * Key creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Key update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Key name.
         */
        name: string;
        /**
         * Key expiration date in ISO 8601 format.
         */
        expire: string;
        /**
         * Secret key.
         */
        secret: string;
        /**
         * Most recent access date in ISO 8601 format. This attribute is only updated again after 24 hours.
         */
        accessedAt: string;
        /**
         * List of SDK user agents that used this key.
         */
        sdks: string[];
    }
    /**
     * Mock Number
     */
    export type MockNumber = {
        /**
         * Mock phone number for testing phone authentication. Useful for testing phone authentication without sending an SMS.
         */
        phone: string;
        /**
         * Mock OTP for the number. 
         */
        otp: string;
    }
    /**
     * AuthProvider
     */
    export type AuthProvider = {
        /**
         * Auth Provider.
         */
        key: string;
        /**
         * Auth Provider name.
         */
        name: string;
        /**
         * OAuth 2.0 application ID.
         */
        appId: string;
        /**
         * OAuth 2.0 application secret. Might be JSON string if provider requires extra configuration.
         */
        secret: string;
        /**
         * Auth Provider is active and can be used to create session.
         */
        enabled: boolean;
    }
    /**
     * Platform
     */
    export type Platform = {
        /**
         * Platform ID.
         */
        $id: string;
        /**
         * Platform creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Platform update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Platform name.
         */
        name: string;
        /**
         * Platform type. Possible values are: web, flutter-web, flutter-ios, flutter-android, ios, android, and unity.
         */
        type: string;
        /**
         * Platform Key. iOS bundle ID or Android package name.  Empty string for other platforms.
         */
        key: string;
        /**
         * App store or Google Play store ID.
         */
        store: string;
        /**
         * Web app hostname. Empty string for other platforms.
         */
        hostname: string;
        /**
         * HTTP basic authentication username.
         */
        httpUser: string;
        /**
         * HTTP basic authentication password.
         */
        httpPass: string;
    }
    /**
     * Variable
     */
    export type Variable = {
        /**
         * Variable ID.
         */
        $id: string;
        /**
         * Variable creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Variable creation date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Variable key.
         */
        key: string;
        /**
         * Variable value.
         */
        value: string;
        /**
         * Variable secret flag. Secret variables can only be updated or deleted, but never read.
         */
        secret: boolean;
        /**
         * Service to which the variable belongs. Possible values are &quot;project&quot;, &quot;function&quot;
         */
        resourceType: string;
        /**
         * ID of resource to which the variable belongs. If resourceType is &quot;project&quot;, it is empty. If resourceType is &quot;function&quot;, it is ID of the function.
         */
        resourceId: string;
    }
    /**
     * Country
     */
    export type Country = {
        /**
         * Country name.
         */
        name: string;
        /**
         * Country two-character ISO 3166-1 alpha code.
         */
        code: string;
    }
    /**
     * Continent
     */
    export type Continent = {
        /**
         * Continent name.
         */
        name: string;
        /**
         * Continent two letter code.
         */
        code: string;
    }
    /**
     * Language
     */
    export type Language = {
        /**
         * Language name.
         */
        name: string;
        /**
         * Language two-character ISO 639-1 codes.
         */
        code: string;
        /**
         * Language native name.
         */
        nativeName: string;
    }
    /**
     * Currency
     */
    export type Currency = {
        /**
         * Currency symbol.
         */
        symbol: string;
        /**
         * Currency name.
         */
        name: string;
        /**
         * Currency native symbol.
         */
        symbolNative: string;
        /**
         * Number of decimal digits.
         */
        decimalDigits: number;
        /**
         * Currency digit rounding.
         */
        rounding: number;
        /**
         * Currency code in [ISO 4217-1](http://en.wikipedia.org/wiki/ISO_4217) three-character format.
         */
        code: string;
        /**
         * Currency plural name
         */
        namePlural: string;
    }
    /**
     * Phone
     */
    export type Phone = {
        /**
         * Phone code.
         */
        code: string;
        /**
         * Country two-character ISO 3166-1 alpha code.
         */
        countryCode: string;
        /**
         * Country name.
         */
        countryName: string;
    }
    /**
     * Health Antivirus
     */
    export type HealthAntivirus = {
        /**
         * Antivirus version.
         */
        version: string;
        /**
         * Antivirus status. Possible values can are: `disabled`, `offline`, `online`
         */
        status: string;
    }
    /**
     * Health Queue
     */
    export type HealthQueue = {
        /**
         * Amount of actions in the queue.
         */
        size: number;
    }
    /**
     * Health Status
     */
    export type HealthStatus = {
        /**
         * Name of the service.
         */
        name: string;
        /**
         * Duration in milliseconds how long the health check took.
         */
        ping: number;
        /**
         * Service status. Possible values can are: `pass`, `fail`
         */
        status: string;
    }
    /**
     * Health Certificate
     */
    export type HealthCertificate = {
        /**
         * Certificate name
         */
        name: string;
        /**
         * Subject SN
         */
        subjectSN: string;
        /**
         * Issuer organisation
         */
        issuerOrganisation: string;
        /**
         * Valid from
         */
        validFrom: string;
        /**
         * Valid to
         */
        validTo: string;
        /**
         * Signature type SN
         */
        signatureTypeSN: string;
    }
    /**
     * Health Time
     */
    export type HealthTime = {
        /**
         * Current unix timestamp on trustful remote server.
         */
        remoteTime: number;
        /**
         * Current unix timestamp of local server where Appwrite runs.
         */
        localTime: number;
        /**
         * Difference of unix remote and local timestamps in milliseconds.
         */
        diff: number;
    }
    /**
     * Metric
     */
    export type Metric = {
        /**
         * The value of this metric at the timestamp.
         */
        value: number;
        /**
         * The date at which this metric was aggregated in ISO 8601 format.
         */
        date: string;
    }
    /**
     * Metric Breakdown
     */
    export type MetricBreakdown = {
        /**
         * Resource ID.
         */
        resourceId?: string;
        /**
         * Resource name.
         */
        name: string;
        /**
         * The value of this metric at the timestamp.
         */
        value: number;
        /**
         * The estimated value of this metric at the end of the period.
         */
        estimate?: number;
    }
    /**
     * UsageDatabases
     */
    export type UsageDatabases = {
        /**
         * Time range of the usage stats.
         */
        range: string;
        /**
         * Total aggregated number of databases.
         */
        databasesTotal: number;
        /**
         * Total aggregated number  of collections.
         */
        collectionsTotal: number;
        /**
         * Total aggregated number of documents.
         */
        documentsTotal: number;
        /**
         * Total aggregated number of total databases storage in bytes.
         */
        storageTotal: number;
        /**
         * Total number of databases reads.
         */
        databasesReadsTotal: number;
        /**
         * Total number of databases writes.
         */
        databasesWritesTotal: number;
        /**
         * Aggregated number of databases per period.
         */
        databases: Metric[];
        /**
         * Aggregated number of collections per period.
         */
        collections: Metric[];
        /**
         * Aggregated number of documents per period.
         */
        documents: Metric[];
        /**
         * An array of the aggregated number of databases storage in bytes per period.
         */
        storage: Metric[];
        /**
         * An array of aggregated number of database reads.
         */
        databasesReads: Metric[];
        /**
         * An array of aggregated number of database writes.
         */
        databasesWrites: Metric[];
    }
    /**
     * UsageDatabase
     */
    export type UsageDatabase = {
        /**
         * Time range of the usage stats.
         */
        range: string;
        /**
         * Total aggregated number of collections.
         */
        collectionsTotal: number;
        /**
         * Total aggregated number of documents.
         */
        documentsTotal: number;
        /**
         * Total aggregated number of total storage used in bytes.
         */
        storageTotal: number;
        /**
         * Total number of databases reads.
         */
        databaseReadsTotal: number;
        /**
         * Total number of databases writes.
         */
        databaseWritesTotal: number;
        /**
         * Aggregated  number of collections per period.
         */
        collections: Metric[];
        /**
         * Aggregated  number of documents per period.
         */
        documents: Metric[];
        /**
         * Aggregated storage used in bytes per period.
         */
        storage: Metric[];
        /**
         * An array of aggregated number of database reads.
         */
        databaseReads: Metric[];
        /**
         * An array of aggregated number of database writes.
         */
        databaseWrites: Metric[];
    }
    /**
     * UsageCollection
     */
    export type UsageCollection = {
        /**
         * Time range of the usage stats.
         */
        range: string;
        /**
         * Total aggregated number of of documents.
         */
        documentsTotal: number;
        /**
         * Aggregated  number of documents per period.
         */
        documents: Metric[];
    }
    /**
     * UsageUsers
     */
    export type UsageUsers = {
        /**
         * Time range of the usage stats.
         */
        range: string;
        /**
         * Total aggregated number of statistics of users.
         */
        usersTotal: number;
        /**
         * Total aggregated number of active sessions.
         */
        sessionsTotal: number;
        /**
         * Aggregated number of users per period.
         */
        users: Metric[];
        /**
         * Aggregated number of active sessions  per period.
         */
        sessions: Metric[];
    }
    /**
     * StorageUsage
     */
    export type UsageStorage = {
        /**
         * Time range of the usage stats.
         */
        range: string;
        /**
         * Total aggregated number of buckets
         */
        bucketsTotal: number;
        /**
         * Total aggregated number of files.
         */
        filesTotal: number;
        /**
         * Total aggregated number of files storage (in bytes).
         */
        filesStorageTotal: number;
        /**
         * Aggregated number of buckets per period.
         */
        buckets: Metric[];
        /**
         * Aggregated number of files per period.
         */
        files: Metric[];
        /**
         * Aggregated number of files storage (in bytes) per period .
         */
        storage: Metric[];
    }
    /**
     * UsageBuckets
     */
    export type UsageBuckets = {
        /**
         * Time range of the usage stats.
         */
        range: string;
        /**
         * Total aggregated number of bucket files.
         */
        filesTotal: number;
        /**
         * Total aggregated number of bucket files storage (in bytes).
         */
        filesStorageTotal: number;
        /**
         * Aggregated  number of bucket files per period.
         */
        files: Metric[];
        /**
         * Aggregated  number of bucket storage files (in bytes) per period.
         */
        storage: Metric[];
        /**
         * Aggregated number of files transformations per period.
         */
        imageTransformations: Metric[];
        /**
         * Total aggregated number of files transformations.
         */
        imageTransformationsTotal: number;
    }
    /**
     * UsageFunctions
     */
    export type UsageFunctions = {
        /**
         * Time range of the usage stats.
         */
        range: string;
        /**
         * Total aggregated number of functions.
         */
        functionsTotal: number;
        /**
         * Total aggregated number of functions deployments.
         */
        deploymentsTotal: number;
        /**
         * Total aggregated sum of functions deployment storage.
         */
        deploymentsStorageTotal: number;
        /**
         * Total aggregated number of functions build.
         */
        buildsTotal: number;
        /**
         * total aggregated sum of functions build storage.
         */
        buildsStorageTotal: number;
        /**
         * Total aggregated sum of functions build compute time.
         */
        buildsTimeTotal: number;
        /**
         * Total aggregated sum of functions build mbSeconds.
         */
        buildsMbSecondsTotal: number;
        /**
         * Total  aggregated number of functions execution.
         */
        executionsTotal: number;
        /**
         * Total aggregated sum of functions  execution compute time.
         */
        executionsTimeTotal: number;
        /**
         * Total aggregated sum of functions execution mbSeconds.
         */
        executionsMbSecondsTotal: number;
        /**
         * Aggregated number of functions per period.
         */
        functions: Metric[];
        /**
         * Aggregated number of functions deployment per period.
         */
        deployments: Metric[];
        /**
         * Aggregated number of  functions deployment storage per period.
         */
        deploymentsStorage: Metric[];
        /**
         * Total aggregated number of successful function builds.
         */
        buildsSuccessTotal: number;
        /**
         * Total aggregated number of failed function builds.
         */
        buildsFailedTotal: number;
        /**
         * Aggregated number of functions build per period.
         */
        builds: Metric[];
        /**
         * Aggregated sum of functions build storage per period.
         */
        buildsStorage: Metric[];
        /**
         * Aggregated sum of  functions build compute time per period.
         */
        buildsTime: Metric[];
        /**
         * Aggregated sum of functions build mbSeconds per period.
         */
        buildsMbSeconds: Metric[];
        /**
         * Aggregated number of  functions execution per period.
         */
        executions: Metric[];
        /**
         * Aggregated number of functions execution compute time per period.
         */
        executionsTime: Metric[];
        /**
         * Aggregated number of functions mbSeconds per period.
         */
        executionsMbSeconds: Metric[];
        /**
         * Aggregated number of successful function builds per period.
         */
        buildsSuccess: Metric[];
        /**
         * Aggregated number of failed function builds per period.
         */
        buildsFailed: Metric[];
    }
    /**
     * UsageFunction
     */
    export type UsageFunction = {
        /**
         * The time range of the usage stats.
         */
        range: string;
        /**
         * Total aggregated number of function deployments.
         */
        deploymentsTotal: number;
        /**
         * Total aggregated sum of function deployments storage.
         */
        deploymentsStorageTotal: number;
        /**
         * Total aggregated number of function builds.
         */
        buildsTotal: number;
        /**
         * Total aggregated number of successful function builds.
         */
        buildsSuccessTotal: number;
        /**
         * Total aggregated number of failed function builds.
         */
        buildsFailedTotal: number;
        /**
         * total aggregated sum of function builds storage.
         */
        buildsStorageTotal: number;
        /**
         * Total aggregated sum of function builds compute time.
         */
        buildsTimeTotal: number;
        /**
         * Average builds compute time.
         */
        buildsTimeAverage: number;
        /**
         * Total aggregated sum of function builds mbSeconds.
         */
        buildsMbSecondsTotal: number;
        /**
         * Total  aggregated number of function executions.
         */
        executionsTotal: number;
        /**
         * Total aggregated sum of function  executions compute time.
         */
        executionsTimeTotal: number;
        /**
         * Total aggregated sum of function executions mbSeconds.
         */
        executionsMbSecondsTotal: number;
        /**
         * Aggregated number of function deployments per period.
         */
        deployments: Metric[];
        /**
         * Aggregated number of  function deployments storage per period.
         */
        deploymentsStorage: Metric[];
        /**
         * Aggregated number of function builds per period.
         */
        builds: Metric[];
        /**
         * Aggregated sum of function builds storage per period.
         */
        buildsStorage: Metric[];
        /**
         * Aggregated sum of function builds compute time per period.
         */
        buildsTime: Metric[];
        /**
         * Aggregated number of function builds mbSeconds per period.
         */
        buildsMbSeconds: Metric[];
        /**
         * Aggregated number of function executions per period.
         */
        executions: Metric[];
        /**
         * Aggregated number of function executions compute time per period.
         */
        executionsTime: Metric[];
        /**
         * Aggregated number of function mbSeconds per period.
         */
        executionsMbSeconds: Metric[];
        /**
         * Aggregated number of successful builds per period.
         */
        buildsSuccess: Metric[];
        /**
         * Aggregated number of failed builds per period.
         */
        buildsFailed: Metric[];
    }
    /**
     * UsageSites
     */
    export type UsageSites = {
        /**
         * Time range of the usage stats.
         */
        range: string;
        /**
         * Total aggregated number of functions deployments.
         */
        deploymentsTotal: number;
        /**
         * Total aggregated sum of functions deployment storage.
         */
        deploymentsStorageTotal: number;
        /**
         * Total aggregated number of functions build.
         */
        buildsTotal: number;
        /**
         * total aggregated sum of functions build storage.
         */
        buildsStorageTotal: number;
        /**
         * Total aggregated sum of functions build compute time.
         */
        buildsTimeTotal: number;
        /**
         * Total aggregated sum of functions build mbSeconds.
         */
        buildsMbSecondsTotal: number;
        /**
         * Total  aggregated number of functions execution.
         */
        executionsTotal: number;
        /**
         * Total aggregated sum of functions  execution compute time.
         */
        executionsTimeTotal: number;
        /**
         * Total aggregated sum of functions execution mbSeconds.
         */
        executionsMbSecondsTotal: number;
        /**
         * Aggregated number of functions deployment per period.
         */
        deployments: Metric[];
        /**
         * Aggregated number of  functions deployment storage per period.
         */
        deploymentsStorage: Metric[];
        /**
         * Total aggregated number of successful function builds.
         */
        buildsSuccessTotal: number;
        /**
         * Total aggregated number of failed function builds.
         */
        buildsFailedTotal: number;
        /**
         * Aggregated number of functions build per period.
         */
        builds: Metric[];
        /**
         * Aggregated sum of functions build storage per period.
         */
        buildsStorage: Metric[];
        /**
         * Aggregated sum of  functions build compute time per period.
         */
        buildsTime: Metric[];
        /**
         * Aggregated sum of functions build mbSeconds per period.
         */
        buildsMbSeconds: Metric[];
        /**
         * Aggregated number of  functions execution per period.
         */
        executions: Metric[];
        /**
         * Aggregated number of functions execution compute time per period.
         */
        executionsTime: Metric[];
        /**
         * Aggregated number of functions mbSeconds per period.
         */
        executionsMbSeconds: Metric[];
        /**
         * Aggregated number of successful function builds per period.
         */
        buildsSuccess: Metric[];
        /**
         * Aggregated number of failed function builds per period.
         */
        buildsFailed: Metric[];
        /**
         * Total aggregated number of sites.
         */
        sitesTotal: number;
        /**
         * Aggregated number of sites per period.
         */
        sites: Metric[];
        /**
         * Total aggregated number of requests.
         */
        requestsTotal: number;
        /**
         * Aggregated number of requests per period.
         */
        requests: Metric[];
        /**
         * Total aggregated inbound bandwidth.
         */
        inboundTotal: number;
        /**
         * Aggregated number of inbound bandwidth per period.
         */
        inbound: Metric[];
        /**
         * Total aggregated outbound bandwidth.
         */
        outboundTotal: number;
        /**
         * Aggregated number of outbound bandwidth per period.
         */
        outbound: Metric[];
    }
    /**
     * UsageSite
     */
    export type UsageSite = {
        /**
         * The time range of the usage stats.
         */
        range: string;
        /**
         * Total aggregated number of function deployments.
         */
        deploymentsTotal: number;
        /**
         * Total aggregated sum of function deployments storage.
         */
        deploymentsStorageTotal: number;
        /**
         * Total aggregated number of function builds.
         */
        buildsTotal: number;
        /**
         * Total aggregated number of successful function builds.
         */
        buildsSuccessTotal: number;
        /**
         * Total aggregated number of failed function builds.
         */
        buildsFailedTotal: number;
        /**
         * total aggregated sum of function builds storage.
         */
        buildsStorageTotal: number;
        /**
         * Total aggregated sum of function builds compute time.
         */
        buildsTimeTotal: number;
        /**
         * Average builds compute time.
         */
        buildsTimeAverage: number;
        /**
         * Total aggregated sum of function builds mbSeconds.
         */
        buildsMbSecondsTotal: number;
        /**
         * Total  aggregated number of function executions.
         */
        executionsTotal: number;
        /**
         * Total aggregated sum of function  executions compute time.
         */
        executionsTimeTotal: number;
        /**
         * Total aggregated sum of function executions mbSeconds.
         */
        executionsMbSecondsTotal: number;
        /**
         * Aggregated number of function deployments per period.
         */
        deployments: Metric[];
        /**
         * Aggregated number of  function deployments storage per period.
         */
        deploymentsStorage: Metric[];
        /**
         * Aggregated number of function builds per period.
         */
        builds: Metric[];
        /**
         * Aggregated sum of function builds storage per period.
         */
        buildsStorage: Metric[];
        /**
         * Aggregated sum of function builds compute time per period.
         */
        buildsTime: Metric[];
        /**
         * Aggregated number of function builds mbSeconds per period.
         */
        buildsMbSeconds: Metric[];
        /**
         * Aggregated number of function executions per period.
         */
        executions: Metric[];
        /**
         * Aggregated number of function executions compute time per period.
         */
        executionsTime: Metric[];
        /**
         * Aggregated number of function mbSeconds per period.
         */
        executionsMbSeconds: Metric[];
        /**
         * Aggregated number of successful builds per period.
         */
        buildsSuccess: Metric[];
        /**
         * Aggregated number of failed builds per period.
         */
        buildsFailed: Metric[];
        /**
         * Total aggregated number of requests.
         */
        requestsTotal: number;
        /**
         * Aggregated number of requests per period.
         */
        requests: Metric[];
        /**
         * Total aggregated inbound bandwidth.
         */
        inboundTotal: number;
        /**
         * Aggregated number of inbound bandwidth per period.
         */
        inbound: Metric[];
        /**
         * Total aggregated outbound bandwidth.
         */
        outboundTotal: number;
        /**
         * Aggregated number of outbound bandwidth per period.
         */
        outbound: Metric[];
    }
    /**
     * UsageProject
     */
    export type UsageProject = {
        /**
         * Total aggregated number of function executions.
         */
        executionsTotal: number;
        /**
         * Total aggregated  number of documents.
         */
        documentsTotal: number;
        /**
         * Total aggregated number of databases.
         */
        databasesTotal: number;
        /**
         * Total aggregated sum of databases storage size (in bytes).
         */
        databasesStorageTotal: number;
        /**
         * Total aggregated number of users.
         */
        usersTotal: number;
        /**
         * Total aggregated sum of files storage size (in bytes).
         */
        filesStorageTotal: number;
        /**
         * Total aggregated sum of functions storage size (in bytes).
         */
        functionsStorageTotal: number;
        /**
         * Total aggregated sum of builds storage size (in bytes).
         */
        buildsStorageTotal: number;
        /**
         * Total aggregated sum of deployments storage size (in bytes).
         */
        deploymentsStorageTotal: number;
        /**
         * Total aggregated number of buckets.
         */
        bucketsTotal: number;
        /**
         * Total aggregated number of function executions mbSeconds.
         */
        executionsMbSecondsTotal: number;
        /**
         * Total aggregated number of function builds mbSeconds.
         */
        buildsMbSecondsTotal: number;
        /**
         * Aggregated stats for total databases reads.
         */
        databasesReadsTotal: number;
        /**
         * Aggregated stats for total databases writes.
         */
        databasesWritesTotal: number;
        /**
         * Aggregated  number of requests per period.
         */
        requests: Metric[];
        /**
         * Aggregated number of consumed bandwidth per period.
         */
        network: Metric[];
        /**
         * Aggregated number of users per period.
         */
        users: Metric[];
        /**
         * Aggregated number of executions per period.
         */
        executions: Metric[];
        /**
         * Aggregated breakdown in totals of executions by functions.
         */
        executionsBreakdown: MetricBreakdown[];
        /**
         * Aggregated breakdown in totals of usage by buckets.
         */
        bucketsBreakdown: MetricBreakdown[];
        /**
         * An array of the aggregated breakdown of storage usage by databases.
         */
        databasesStorageBreakdown: MetricBreakdown[];
        /**
         * Aggregated breakdown in totals of execution mbSeconds by functions.
         */
        executionsMbSecondsBreakdown: MetricBreakdown[];
        /**
         * Aggregated breakdown in totals of build mbSeconds by functions.
         */
        buildsMbSecondsBreakdown: MetricBreakdown[];
        /**
         * Aggregated breakdown in totals of functions storage size (in bytes).
         */
        functionsStorageBreakdown: MetricBreakdown[];
        /**
         * Aggregated stats for total auth phone.
         */
        authPhoneTotal: number;
        /**
         * Aggregated stats for total auth phone estimation.
         */
        authPhoneEstimate: number;
        /**
         * Aggregated breakdown in totals of phone auth by country.
         */
        authPhoneCountryBreakdown: MetricBreakdown[];
        /**
         * Aggregated stats for database reads.
         */
        databasesReads: Metric[];
        /**
         * Aggregated stats for database writes.
         */
        databasesWrites: Metric[];
        /**
         * An array of aggregated number of image transformations.
         */
        imageTransformations: Metric[];
        /**
         * Total aggregated number of image transformations.
         */
        imageTransformationsTotal: number;
        /**
         * Aggregated stats for total network bandwidth.
         */
        networkTotal: number;
        /**
         * Aggregated stats for total backups storage.
         */
        backupsStorageTotal: number;
    }
    /**
     * Headers
     */
    export type Headers = {
        /**
         * Header name.
         */
        name: string;
        /**
         * Header value.
         */
        value: string;
    }
    /**
     * Specification
     */
    export type Specification = {
        /**
         * Memory size in MB.
         */
        memory: number;
        /**
         * Number of CPUs.
         */
        cpus: number;
        /**
         * Is size enabled.
         */
        enabled: boolean;
        /**
         * Size slug.
         */
        slug: string;
    }
    /**
     * Rule
     */
    export type ProxyRule = {
        /**
         * Rule ID.
         */
        $id: string;
        /**
         * Rule creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Rule update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Domain name.
         */
        domain: string;
        /**
         * Action definition for the rule. Possible values are &quot;api&quot;, &quot;deployment&quot;, or &quot;redirect&quot;
         */
        type: string;
        /**
         * Defines how the rule was created. Possible values are &quot;manual&quot; or &quot;deployment&quot;
         */
        trigger: string;
        /**
         * URL to redirect to. Used if type is &quot;redirect&quot;
         */
        redirectUrl: string;
        /**
         * Status code to apply during redirect. Used if type is &quot;redirect&quot;
         */
        redirectStatusCode: number;
        /**
         * ID of deployment. Used if type is &quot;deployment&quot;
         */
        deploymentId: string;
        /**
         * Type of deployment. Possible values are &quot;function&quot;, &quot;site&quot;. Used if rule&#039;s type is &quot;deployment&quot;.
         */
        deploymentResourceType: string;
        /**
         * ID deployment&#039;s resource. Used if type is &quot;deployment&quot;
         */
        deploymentResourceId: string;
        /**
         * Name of Git branch that updates rule. Used if type is &quot;deployment&quot;
         */
        deploymentVcsProviderBranch: string;
        /**
         * Domain verification status. Possible values are &quot;created&quot;, &quot;verifying&quot;, &quot;verified&quot; and &quot;unverified&quot;
         */
        status: string;
        /**
         * Certificate generation logs. This will return an empty string if generation did not run, or succeeded.
         */
        logs: string;
        /**
         * Certificate auto-renewal date in ISO 8601 format.
         */
        renewAt: string;
    }
    /**
     * SmsTemplate
     */
    export type SmsTemplate = {
        /**
         * Template type
         */
        type: string;
        /**
         * Template locale
         */
        locale: string;
        /**
         * Template message
         */
        message: string;
    }
    /**
     * EmailTemplate
     */
    export type EmailTemplate = {
        /**
         * Template type
         */
        type: string;
        /**
         * Template locale
         */
        locale: string;
        /**
         * Template message
         */
        message: string;
        /**
         * Name of the sender
         */
        senderName: string;
        /**
         * Email of the sender
         */
        senderEmail: string;
        /**
         * Reply to email address
         */
        replyTo: string;
        /**
         * Email subject
         */
        subject: string;
    }
    /**
     * Console Variables
     */
    export type ConsoleVariables = {
        /**
         * CNAME target for your Appwrite custom domains.
         */
        _APP_DOMAIN_TARGET_CNAME: string;
        /**
         * A target for your Appwrite custom domains.
         */
        _APP_DOMAIN_TARGET_A: string;
        /**
         * AAAA target for your Appwrite custom domains.
         */
        _APP_DOMAIN_TARGET_AAAA: string;
        /**
         * Maximum file size allowed for file upload in bytes.
         */
        _APP_STORAGE_LIMIT: number;
        /**
         * Maximum file size allowed for deployment in bytes.
         */
        _APP_COMPUTE_SIZE_LIMIT: number;
        /**
         * Defines if usage stats are enabled. This value is set to &#039;enabled&#039; by default, to disable the usage stats set the value to &#039;disabled&#039;.
         */
        _APP_USAGE_STATS: string;
        /**
         * Defines if VCS (Version Control System) is enabled.
         */
        _APP_VCS_ENABLED: boolean;
        /**
         * Defines if main domain is configured. If so, custom domains can be created.
         */
        _APP_DOMAIN_ENABLED: boolean;
        /**
         * Defines if AI assistant is enabled.
         */
        _APP_ASSISTANT_ENABLED: boolean;
        /**
         * A domain to use for site URLs.
         */
        _APP_DOMAIN_SITES: string;
        /**
         * A domain to use for function URLs.
         */
        _APP_DOMAIN_FUNCTIONS: string;
        /**
         * Defines if HTTPS is enforced for all requests.
         */
        _APP_OPTIONS_FORCE_HTTPS: string;
        /**
         * Comma-separated list of nameservers.
         */
        _APP_DOMAINS_NAMESERVERS: string;
    }
    /**
     * MFA Challenge
     */
    export type MfaChallenge = {
        /**
         * Token ID.
         */
        $id: string;
        /**
         * Token creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * User ID.
         */
        userId: string;
        /**
         * Token expiration date in ISO 8601 format.
         */
        expire: string;
    }
    /**
     * MFA Recovery Codes
     */
    export type MfaRecoveryCodes = {
        /**
         * Recovery codes.
         */
        recoveryCodes: string[];
    }
    /**
     * MFAType
     */
    export type MfaType = {
        /**
         * Secret token used for TOTP factor.
         */
        secret: string;
        /**
         * URI for authenticator apps.
         */
        uri: string;
    }
    /**
     * MFAFactors
     */
    export type MfaFactors = {
        /**
         * Can TOTP be used for MFA challenge for this account.
         */
        totp: boolean;
        /**
         * Can phone (SMS) be used for MFA challenge for this account.
         */
        phone: boolean;
        /**
         * Can email be used for MFA challenge for this account.
         */
        email: boolean;
        /**
         * Can recovery code be used for MFA challenge for this account.
         */
        recoveryCode: boolean;
    }
    /**
     * Provider
     */
    export type Provider = {
        /**
         * Provider ID.
         */
        $id: string;
        /**
         * Provider creation time in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Provider update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * The name for the provider instance.
         */
        name: string;
        /**
         * The name of the provider service.
         */
        provider: string;
        /**
         * Is provider enabled?
         */
        enabled: boolean;
        /**
         * Type of provider.
         */
        type: string;
        /**
         * Provider credentials.
         */
        credentials: object;
        /**
         * Provider options.
         */
        options?: object;
    }
    /**
     * Message
     */
    export type Message = {
        /**
         * Message ID.
         */
        $id: string;
        /**
         * Message creation time in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Message update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Message provider type.
         */
        providerType: string;
        /**
         * Topic IDs set as recipients.
         */
        topics: string[];
        /**
         * User IDs set as recipients.
         */
        users: string[];
        /**
         * Target IDs set as recipients.
         */
        targets: string[];
        /**
         * The scheduled time for message.
         */
        scheduledAt?: string;
        /**
         * The time when the message was delivered.
         */
        deliveredAt?: string;
        /**
         * Delivery errors if any.
         */
        deliveryErrors?: string[];
        /**
         * Number of recipients the message was delivered to.
         */
        deliveredTotal: number;
        /**
         * Data of the message.
         */
        data: object;
        /**
         * Status of delivery.
         */
        status: string;
    }
    /**
     * Topic
     */
    export type Topic = {
        /**
         * Topic ID.
         */
        $id: string;
        /**
         * Topic creation time in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Topic update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * The name of the topic.
         */
        name: string;
        /**
         * Total count of email subscribers subscribed to the topic.
         */
        emailTotal: number;
        /**
         * Total count of SMS subscribers subscribed to the topic.
         */
        smsTotal: number;
        /**
         * Total count of push subscribers subscribed to the topic.
         */
        pushTotal: number;
        /**
         * Subscribe permissions.
         */
        subscribe: string[];
    }
    /**
     * Subscriber
     */
    export type Subscriber = {
        /**
         * Subscriber ID.
         */
        $id: string;
        /**
         * Subscriber creation time in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Subscriber update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Target ID.
         */
        targetId: string;
        /**
         * Target.
         */
        target: Target;
        /**
         * Topic ID.
         */
        userId: string;
        /**
         * User Name.
         */
        userName: string;
        /**
         * Topic ID.
         */
        topicId: string;
        /**
         * The target provider type. Can be one of the following: `email`, `sms` or `push`.
         */
        providerType: string;
    }
    /**
     * Target
     */
    export type Target = {
        /**
         * Target ID.
         */
        $id: string;
        /**
         * Target creation time in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Target update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Target Name.
         */
        name: string;
        /**
         * User ID.
         */
        userId: string;
        /**
         * Provider ID.
         */
        providerId?: string;
        /**
         * The target provider type. Can be one of the following: `email`, `sms` or `push`.
         */
        providerType: string;
        /**
         * The target identifier.
         */
        identifier: string;
        /**
         * Is the target expired.
         */
        expired: boolean;
    }
    /**
     * Migration
     */
    export type Migration = {
        /**
         * Migration ID.
         */
        $id: string;
        /**
         * Migration creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Variable creation date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Migration status ( pending, processing, failed, completed ) 
         */
        status: string;
        /**
         * Migration stage ( init, processing, source-check, destination-check, migrating, finished )
         */
        stage: string;
        /**
         * A string containing the type of source of the migration.
         */
        source: string;
        /**
         * A string containing the type of destination of the migration.
         */
        destination: string;
        /**
         * Resources to migrate.
         */
        resources: string[];
        /**
         * Id of the resource to migrate.
         */
        resourceId: string;
        /**
         * A group of counters that represent the total progress of the migration.
         */
        statusCounters: object;
        /**
         * An array of objects containing the report data of the resources that were migrated.
         */
        resourceData: object;
        /**
         * All errors that occurred during the migration process.
         */
        errors: string[];
    }
    /**
     * Migration Report
     */
    export type MigrationReport = {
        /**
         * Number of users to be migrated.
         */
        user: number;
        /**
         * Number of teams to be migrated.
         */
        team: number;
        /**
         * Number of databases to be migrated.
         */
        database: number;
        /**
         * Number of documents to be migrated.
         */
        document: number;
        /**
         * Number of files to be migrated.
         */
        file: number;
        /**
         * Number of buckets to be migrated.
         */
        bucket: number;
        /**
         * Number of functions to be migrated.
         */
        function: number;
        /**
         * Size of files to be migrated in mb.
         */
        size: number;
        /**
         * Version of the Appwrite instance to be migrated.
         */
        version: string;
    }
    /**
     * AdditionalResource
     */
    export type AdditionalResource = {
        /**
         * Resource unit
         */
        unit: string;
        /**
         * Price currency
         */
        currency: string;
        /**
         * Price
         */
        price: number;
        /**
         * Resource value
         */
        value: number;
    }
    /**
     * AggregationTeam
     */
    export type AggregationTeam = {
        /**
         * Aggregation ID.
         */
        $id: string;
        /**
         * Aggregation creation time in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Aggregation update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Aggregation permissions. [Learn more about permissions](/docs/permissions).
         */
        $permissions: string[];
        /**
         * Beginning date of the invoice
         */
        from: string;
        /**
         * End date of the invoice
         */
        to: string;
        /**
         * Total storage usage
         */
        usageStorage: number;
        /**
         * Total storage usage with builds storage
         */
        usageTotalStorage: number;
        /**
         * Total files storage usage
         */
        usageFilesStorage: number;
        /**
         * Total deployments storage usage
         */
        usageDeploymentsStorage: number;
        /**
         * Total builds storage usage
         */
        usageBuildsStorage: number;
        /**
         * Total databases storage usage
         */
        usageDatabasesStorage: number;
        /**
         * Total active users for the billing period
         */
        usageUsers: number;
        /**
         * Total number of executions for the billing period
         */
        usageExecutions: number;
        /**
         * Total bandwidth usage for the billing period
         */
        usageBandwidth: number;
        /**
         * Total realtime usage for the billing period
         */
        usageRealtime: number;
        /**
         * Additional members
         */
        additionalMembers: number;
        /**
         * Additional members cost
         */
        additionalMemberAmount: number;
        /**
         * Additional storage usage cost
         */
        additionalStorageAmount: number;
        /**
         * Additional users usage cost.
         */
        additionalUsersAmount: number;
        /**
         * Additional executions usage cost
         */
        additionalExecutionsAmount: number;
        /**
         * Additional bandwidth usage cost
         */
        additionalBandwidthAmount: number;
        /**
         * Additional realtime usage cost
         */
        additionalRealtimeAmount: number;
        /**
         * Billing plan
         */
        plan: string;
        /**
         * Aggregated amount
         */
        amount: number;
    }
    /**
     * Archive
     */
    export type BackupArchive = {
        /**
         * Archive ID.
         */
        $id: string;
        /**
         * Archive creation time in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Archive update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Archive policy ID.
         */
        policyId: string;
        /**
         * Archive size in bytes.
         */
        size: number;
        /**
         * The status of the archive creation. Possible values: pending, processing, uploading, completed, failed.
         */
        status: string;
        /**
         * The backup start time.
         */
        startedAt: string;
        /**
         * Migration ID.
         */
        migrationId: string;
        /**
         * The services that are backed up by this archive.
         */
        services: string[];
        /**
         * The resources that are backed up by this archive.
         */
        resources: string[];
        /**
         * The resource ID to backup. Set only if this archive should backup a single resource.
         */
        resourceId?: string;
        /**
         * The resource type to backup. Set only if this archive should backup a single resource.
         */
        resourceType?: string;
    }
    /**
     * BillingAddress
     */
    export type BillingAddress = {
        /**
         * Region ID
         */
        $id: string;
        /**
         * User ID
         */
        userId: string;
        /**
         * Street address
         */
        streetAddress: string;
        /**
         * Address line 2
         */
        addressLine2: string;
        /**
         * Address country
         */
        country: string;
        /**
         * city
         */
        city: string;
        /**
         * state
         */
        state: string;
        /**
         * postal code
         */
        postalCode: string;
    }
    /**
     * billingPlan
     */
    export type BillingPlan = {
        /**
         * Plan ID.
         */
        $id: string;
        /**
         * Plan name
         */
        name: string;
        /**
         * Plan description
         */
        desc: string;
        /**
         * Plan order
         */
        order: number;
        /**
         * Price
         */
        price: number;
        /**
         * Trial days
         */
        trial: number;
        /**
         * Bandwidth
         */
        bandwidth: number;
        /**
         * Storage
         */
        storage: number;
        /**
         * Image Transformations
         */
        imageTransformations: number;
        /**
         * Members
         */
        members: number;
        /**
         * Webhooks
         */
        webhooks: number;
        /**
         * Platofrms
         */
        platforms: number;
        /**
         * Users
         */
        users: number;
        /**
         * Teams
         */
        teams: number;
        /**
         * Databases
         */
        databases: number;
        /**
         * Buckets
         */
        buckets: number;
        /**
         * File size
         */
        fileSize: number;
        /**
         * Functions
         */
        functions: number;
        /**
         * Function executions
         */
        executions: number;
        /**
         * Realtime connections
         */
        realtime: number;
        /**
         * Log days
         */
        logs: number;
        /**
         * Additional resources
         */
        usage: UsageBillingPlan;
        /**
         * Addons
         */
        addons: BillingPlanAddon;
        /**
         * Budget cap enabled or disabled.
         */
        budgetCapEnabled: boolean;
        /**
         * Custom SMTP
         */
        customSmtp: boolean;
        /**
         * Appwrite branding in email
         */
        emailBranding: boolean;
        /**
         * Does plan require payment method
         */
        requiresPaymentMethod: boolean;
        /**
         * Does plan require billing address
         */
        requiresBillingAddress: boolean;
        /**
         * Is the billing plan available
         */
        isAvailable: boolean;
        /**
         * Can user change the plan themselves
         */
        selfService: boolean;
        /**
         * Does plan enable premium support
         */
        premiumSupport: boolean;
        /**
         * Does plan support budget cap
         */
        budgeting: boolean;
        /**
         * Does plan support mock numbers
         */
        supportsMockNumbers: boolean;
        /**
         * Does plan support organization roles
         */
        supportsOrganizationRoles: boolean;
        /**
         * Does plan support credit
         */
        supportsCredits: boolean;
        /**
         * Does plan support backup policies.
         */
        backupsEnabled: boolean;
        /**
         * How many policies does plan support
         */
        backupPolicies: number;
        /**
         * Maximum function and site deployment size in MB
         */
        deploymentSize: number;
        /**
         * Maximum function and site deployment size in MB
         */
        buildSize: number;
        /**
         * Does the plan support encrypted string attributes or not.
         */
        databasesAllowEncrypt: boolean;
    }
    /**
     * BillingPlanAddon
     */
    export type BillingPlanAddon = {
        /**
         * Addon seats
         */
        seats: BillingPlanAddonDetails;
    }
    /**
     * BillingPlanAddonDetails
     */
    export type BillingPlanAddonDetails = {
        /**
         * Is the addon supported in the plan?
         */
        supported: boolean;
        /**
         * Addon limit
         */
        limit: number;
        /**
         * Addon type
         */
        type: string;
        /**
         * Price currency
         */
        currency: string;
        /**
         * Price
         */
        price: number;
        /**
         * Resource value
         */
        value: number;
    }
    /**
     * BillingLimits
     */
    export type BillingLimits = {
        /**
         * Bandwidth limit
         */
        bandwidth: number;
        /**
         * Storage limit
         */
        storage: number;
        /**
         * Users limit
         */
        users: number;
        /**
         * Executions limit
         */
        executions: number;
        /**
         * GBHours limit
         */
        GBHours: number;
        /**
         * Image transformations limit
         */
        imageTransformations: number;
        /**
         * Auth phone limit
         */
        authPhone: number;
    }
    /**
     * Campaign
     */
    export type Campaign = {
        /**
         * Campaign ID
         */
        $id: string;
        /**
         * Campaign template
         */
        template: string;
        /**
         * Campaign title
         */
        title: string;
        /**
         * Campaign description
         */
        description: string;
        /**
         * Billing plan campaign is associated with
         */
        plan?: string;
        /**
         * Campaign CTA
         */
        cta?: string;
        /**
         * Campaign info when claimed
         */
        claimed?: string;
        /**
         * Campaign infor when unclaimed
         */
        unclaimed?: string;
        /**
         * Campaign images
         */
        image?: object;
        /**
         * Campaign reviews
         */
        reviews?: Review[];
        /**
         * Campaign valid only for new orgs.
         */
        onlyNewOrgs?: boolean;
        /**
         * Is footer
         */
        footer?: boolean;
    }
    /**
     * Coupon
     */
    export type Coupon = {
        /**
         * coupon ID
         */
        $id: string;
        /**
         * coupon ID
         */
        code: string;
        /**
         * Provided credit amount
         */
        credits: number;
        /**
         * Coupon expiration time in ISO 8601 format.
         */
        expiration: string;
        /**
         * Credit validity in days.
         */
        validity: number;
        /**
         * Campaign the coupon is associated with`.
         */
        campaign: string;
        /**
         * Status of the coupon. Can be one of `disabled`, `active` or `expired`.
         */
        status: string;
        /**
         * If the coupon is only valid for new organizations or not.
         */
        onlyNewOrgs: boolean;
    }
    /**
     * Credit
     */
    export type Credit = {
        /**
         * Credit ID.
         */
        $id: string;
        /**
         * Credit creation time in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Credit update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Credit permissions. [Learn more about permissions](/docs/permissions).
         */
        $permissions: string[];
        /**
         * coupon ID
         */
        couponId: string;
        /**
         * ID of the User.
         */
        userId: string;
        /**
         * ID of the Team.
         */
        teamId: string;
        /**
         * Provided credit amount
         */
        credits: number;
        /**
         * Provided credit amount
         */
        total: number;
        /**
         * Credit expiration time in ISO 8601 format.
         */
        expiration: string;
        /**
         * Status of the credit. Can be one of `disabled`, `active` or `expired`.
         */
        status: string;
    }
    /**
     * CreditList
     */
    export type CreditList = {
        /**
         * Credits
         */
        credits: Credit[];
        /**
         * Total number of credits
         */
        total: number;
        /**
         * Total available credit balance in USD
         */
        available: number;
    }
    /**
     * Invoice
     */
    export type Invoice = {
        /**
         * Invoice ID.
         */
        $id: string;
        /**
         * Invoice creation time in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Invoice update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Invoice permissions. [Learn more about permissions](/docs/permissions).
         */
        $permissions: string[];
        /**
         * Project ID
         */
        teamId: string;
        /**
         * Aggregation ID
         */
        aggregationId: string;
        /**
         * Billing plan selected. Can be one of `tier-0`, `tier-1` or `tier-2`.
         */
        plan: string;
        /**
         * Usage breakdown per resource
         */
        usage: UsageInvoice[];
        /**
         * Invoice Amount
         */
        amount: number;
        /**
         * Tax percentage
         */
        tax: number;
        /**
         * Tax amount
         */
        taxAmount: number;
        /**
         * VAT percentage
         */
        vat: number;
        /**
         * VAT amount
         */
        vatAmount: number;
        /**
         * Gross amount after vat, tax, and discounts applied.
         */
        grossAmount: number;
        /**
         * Credits used.
         */
        creditsUsed: number;
        /**
         * Currency the invoice is in
         */
        currency: string;
        /**
         * Client secret for processing failed payments in front-end
         */
        clientSecret: string;
        /**
         * Invoice status
         */
        status: string;
        /**
         * Last payment error associated with the invoice
         */
        lastError: string;
        /**
         * Invoice due date.
         */
        dueAt: string;
        /**
         * Beginning date of the invoice
         */
        from: string;
        /**
         * End date of the invoice
         */
        to: string;
    }
    /**
     * Organization
     */
    export type Organization<Preferences extends Models.Preferences> = {
        /**
         * Team ID.
         */
        $id: string;
        /**
         * Team creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Team update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Team name.
         */
        name: string;
        /**
         * Total number of team members.
         */
        total: number;
        /**
         * Team preferences as a key-value object
         */
        prefs: Preferences;
        /**
         * Project budget limit
         */
        billingBudget: number;
        /**
         * Project budget limit
         */
        budgetAlerts: number[];
        /**
         * Billing plan selected. Can be one of `tier-0`, `tier-1` or `tier-2`.
         */
        billingPlan: string;
        /**
         * Billing email set for the organization.
         */
        billingEmail: string;
        /**
         * Billing cycle start date.
         */
        billingStartDate: string;
        /**
         * Current invoice cycle start date.
         */
        billingCurrentInvoiceDate: string;
        /**
         * Next invoice cycle start date.
         */
        billingNextInvoiceDate: string;
        /**
         * Start date of trial.
         */
        billingTrialStartDate: string;
        /**
         * Number of trial days.
         */
        billingTrialDays: number;
        /**
         * Current active aggregation id.
         */
        billingAggregationId: string;
        /**
         * Current active aggregation id.
         */
        billingInvoiceId: string;
        /**
         * Default payment method.
         */
        paymentMethodId: string;
        /**
         * Default payment method.
         */
        billingAddressId: string;
        /**
         * Backup payment method.
         */
        backupPaymentMethodId: string;
        /**
         * Team status.
         */
        status: string;
        /**
         * Remarks on team status.
         */
        remarks: string;
        /**
         * Organization agreements
         */
        agreementBAA: string;
        /**
         * Program manager&#039;s name.
         */
        programManagerName: string;
        /**
         * Program manager&#039;s calendar link.
         */
        programManagerCalendar: string;
        /**
         * Program&#039;s discord channel name.
         */
        programDiscordChannelName: string;
        /**
         * Program&#039;s discord channel URL.
         */
        programDiscordChannelUrl: string;
        /**
         * Billing limits reached
         */
        billingLimits: BillingLimits;
        /**
         * Billing plan selected for downgrade.
         */
        billingPlanDowngrade: string;
        /**
         * Tax Id
         */
        billingTaxId: string;
        /**
         * Marked for deletion
         */
        markedForDeletion: boolean;
    }
    /**
     * paymentMethod
     */
    export type PaymentMethod = {
        /**
         * Payment Method ID.
         */
        $id: string;
        /**
         * Payment method creation time in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Payment method update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Payment method permissions. [Learn more about permissions](/docs/permissions).
         */
        $permissions: string[];
        /**
         * Payment method ID from the payment provider
         */
        providerMethodId: string;
        /**
         * Client secret hash for payment setup
         */
        clientSecret: string;
        /**
         * User ID from the payment provider.
         */
        providerUserId: string;
        /**
         * ID of the Team.
         */
        userId: string;
        /**
         * Expiry month of the payment method.
         */
        expiryMonth: number;
        /**
         * Expiry year of the payment method.
         */
        expiryYear: number;
        /**
         * Last 4 digit of the payment method
         */
        last4: string;
        /**
         * Payment method brand
         */
        brand: string;
        /**
         * Name of the owner
         */
        name: string;
        /**
         * Mandate ID of the payment method
         */
        mandateId: string;
        /**
         * Country of the payment method
         */
        country: string;
        /**
         * Last payment error associated with the payment method.
         */
        lastError: string;
        /**
         * True when it&#039;s the default payment method.
         */
        default: boolean;
        /**
         * True when payment method has expired.
         */
        expired: boolean;
        /**
         * True when payment method has failed to process multiple times.
         */
        failed: boolean;
    }
    /**
     * backup
     */
    export type BackupPolicy = {
        /**
         * Backup policy ID.
         */
        $id: string;
        /**
         * Backup policy name.
         */
        name: string;
        /**
         * Policy creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Policy update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * The services that are backed up by this policy.
         */
        services: string[];
        /**
         * The resources that are backed up by this policy.
         */
        resources: string[];
        /**
         * The resource ID to backup. Set only if this policy should backup a single resource.
         */
        resourceId?: string;
        /**
         * The resource type to backup. Set only if this policy should backup a single resource.
         */
        resourceType?: string;
        /**
         * How many days to keep the backup before it will be automatically deleted.
         */
        retention: number;
        /**
         * Policy backup schedule in CRON format.
         */
        schedule: string;
        /**
         * Is this policy enabled.
         */
        enabled: boolean;
    }
    /**
     * Region
     */
    export type ConsoleRegion = {
        /**
         * Region ID
         */
        $id: string;
        /**
         * Region name
         */
        name: string;
        /**
         * Does the organization have access to this region.
         */
        available: boolean;
        /**
         * Does the backend support this region.
         */
        disabled: boolean;
        /**
         * Is this the region default.
         */
        default: boolean;
        /**
         * Region flag code.
         */
        flag: string;
    }
    /**
     * Restoration
     */
    export type BackupRestoration = {
        /**
         * Restoration ID.
         */
        $id: string;
        /**
         * Restoration creation time in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Restoration update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Backup archive ID.
         */
        archiveId: string;
        /**
         * Backup policy ID.
         */
        policyId: string;
        /**
         * The status of the restoration. Possible values: pending, downloading, processing, completed, failed.
         */
        status: string;
        /**
         * The backup start time.
         */
        startedAt: string;
        /**
         * Migration ID.
         */
        migrationId: string;
        /**
         * The services that are backed up by this policy.
         */
        services: string[];
        /**
         * The resources that are backed up by this policy.
         */
        resources: string[];
        /**
         * Optional data in key-value object. 
         */
        options: string;
    }
    /**
     * Review
     */
    export type Review = {
        /**
         * Name of user
         */
        name: string;
        /**
         * Reviewer image
         */
        image: string;
        /**
         * Reviewer description
         */
        description: string;
        /**
         * Review
         */
        review: string;
    }
    /**
     * Roles
     */
    export type Roles = {
        /**
         * Array of scopes accessible to current user.
         */
        scopes: string[];
        /**
         * Array of roles assigned to current user.
         */
        roles: string[];
    }
    /**
     * UsageOrganization
     */
    export type UsageOrganization = {
        /**
         * Aggregated stats for number of requests.
         */
        bandwidth: Metric[];
        /**
         * Aggregated stats for consumed bandwidth.
         */
        users: Metric[];
        /**
         * Aggregated stats for function executions.
         */
        executions: Metric[];
        /**
         * Aggregated stats for database reads.
         */
        databasesReads: Metric[];
        /**
         * Aggregated stats for database writes.
         */
        databasesWrites: Metric[];
        /**
         * Aggregated stats for file transformations.
         */
        imageTransformations: Metric[];
        /**
         * Aggregated stats for total file transformations.
         */
        imageTransformationsTotal: number;
        /**
         * Aggregated stats for total users.
         */
        usersTotal: number;
        /**
         * Aggregated stats for total executions.
         */
        executionsTotal: number;
        /**
         * Aggregated stats for function executions in mb seconds.
         */
        executionsMBSecondsTotal: number;
        /**
         * Aggregated stats for function builds in mb seconds.
         */
        buildsMBSecondsTotal: number;
        /**
         * Aggregated stats for total file storage.
         */
        filesStorageTotal: number;
        /**
         * Aggregated stats for total builds storage.
         */
        buildsStorageTotal: number;
        /**
         * Aggregated stats for total deployments storage.
         */
        deploymentsStorageTotal: number;
        /**
         * Aggregated stats for total databases storage.
         */
        databasesStorageTotal: number;
        /**
         * Aggregated stats for total databases  reads.
         */
        databasesReadsTotal: number;
        /**
         * Aggregated stats for total databases  writes.
         */
        databasesWritesTotal: number;
        /**
         * Aggregated stats for total backups storage.
         */
        backupsStorageTotal: number;
        /**
         * Aggregated stats for total storage.
         */
        storageTotal: number;
        /**
         * Aggregated stats for total auth phone.
         */
        authPhoneTotal: number;
        /**
         * Aggregated stats for total auth phone estimation.
         */
        authPhoneEstimate: number;
        /**
         * Aggregated stats for each projects.
         */
        projects: UsageOrganizationProject[];
    }
    /**
     * UsageOrganizationProject
     */
    export type UsageOrganizationProject = {
        /**
         * projectId
         */
        projectId: string;
        /**
         * Aggregated stats for number of requests.
         */
        bandwidth: Metric[];
        /**
         * Aggregated stats for consumed bandwidth.
         */
        users: Metric[];
        /**
         * Aggregated stats for function executions.
         */
        executions: number;
        /**
         * Aggregated stats for database reads.
         */
        databasesReads: Metric[];
        /**
         * Aggregated stats for database writes.
         */
        databasesWrites: Metric[];
        /**
         * Aggregated stats for function executions in mb seconds.
         */
        executionsMBSeconds: number;
        /**
         * Aggregated stats for function builds in mb seconds.
         */
        buildsMBSeconds: number;
        /**
         * Aggregated stats for number of documents.
         */
        storage: number;
        /**
         * Aggregated stats for phone authentication.
         */
        authPhoneTotal: number;
        /**
         * Aggregated stats for phone authentication estimated cost.
         */
        authPhoneEstimate: number;
        /**
         * Aggregated stats for total databases reads.
         */
        databasesReadsTotal: number;
        /**
         * Aggregated stats for total databases writes.
         */
        databasesWritesTotal: number;
        /**
         * Aggregated stats for file transformations.
         */
        imageTransformations: Metric[];
        /**
         * Aggregated stats for total file transformations.
         */
        imageTransformationsTotal: number;
    }
    /**
     * Domain
     */
    export type Domain = {
        /**
         * Domain ID.
         */
        $id: string;
        /**
         * Domain creation time in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Domain update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Domain name.
         */
        domain: string;
        /**
         * Domain registrar (e.g. &quot;appwrite&quot; or &quot;third_party&quot;).
         */
        registrar: string;
        /**
         * Nameservers setting. &quot;Appwrite&quot; or empty string.
         */
        nameservers: string;
        /**
         * Domain expiry date in ISO 8601 format.
         */
        expire: string;
        /**
         * Domain renewal date in ISO 8601 format.
         */
        renewal: string;
        /**
         * If set to true, the domain will automatically renew.
         */
        autoRenewal: boolean;
        /**
         * Renewal price (in USD).
         */
        renewalPrice: number;
        /**
         * Team ID.
         */
        teamId: string;
        /**
         * Dns records
         */
        dnsRecords: DnsRecord[];
    }
    /**
     * DNSRecord
     */
    export type DnsRecord = {
        /**
         * DNS Record ID.
         */
        $id: string;
        /**
         * DNS Record creation time in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * DNS Record update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * DNS record type (e.g. A, CNAME, MX).
         */
        type: string;
        /**
         * Record name or subdomain.
         */
        name: string;
        /**
         * Value of the record (IP address, domain, etc.).
         */
        value: string;
        /**
         * Time to live (in seconds).
         */
        ttl: number;
        /**
         * Record priority (commonly used for MX).
         */
        priority: number;
        /**
         * Whether this record is locked (read-only).
         */
        lock: boolean;
        /**
         * Record weight (used for SRV records).
         */
        weight: number;
        /**
         * Target port (used for SRV records).
         */
        port: number;
        /**
         * Comment for the DNS record.
         */
        comment: string;
    }
    /**
     * UsageInvoice
     */
    export type UsageInvoice = {
        /**
         * Invoice name
         */
        name: string;
        /**
         * Invoice value
         */
        value: number;
        /**
         * Invoice amount
         */
        amount: number;
        /**
         * Invoice rate
         */
        rate: number;
        /**
         * Invoice description
         */
        desc: string;
    }
    /**
     * usageBillingPlan
     */
    export type UsageBillingPlan = {
        /**
         * Bandwidth additional resources
         */
        bandwidth: AdditionalResource;
        /**
         * Executions additional resources
         */
        executions: AdditionalResource;
        /**
         * Member additional resources
         */
        member: AdditionalResource;
        /**
         * Realtime additional resources
         */
        realtime: AdditionalResource;
        /**
         * Storage additional resources
         */
        storage: AdditionalResource;
        /**
         * User additional resources
         */
        users: AdditionalResource;
        /**
         * GBHour additional resources
         */
        GBHours: AdditionalResource;
        /**
         * Image transformation additional resources
         */
        imageTransformations: AdditionalResource;
    }
    /**
     * Estimation
     */
    export type Estimation = {
        /**
         * Total amount
         */
        amount: number;
        /**
         * Gross payable amount
         */
        grossAmount: number;
        /**
         * Discount amount
         */
        discount: number;
        /**
         * Credits amount
         */
        credits: number;
        /**
         * Estimation items
         */
        items: EstimationItem[];
        /**
         * Estimation discount items
         */
        discounts: EstimationItem[];
        /**
         * Trial days
         */
        trialDays: number;
        /**
         * Trial end date
         */
        trialEndDate?: string;
    }
    /**
     * EstimationUpdatePlan
     */
    export type EstimationUpdatePlan = {
        /**
         * Total amount
         */
        amount: number;
        /**
         * Gross payable amount
         */
        grossAmount: number;
        /**
         * Discount amount
         */
        discount: number;
        /**
         * Credits amount
         */
        credits: number;
        /**
         * Estimation items
         */
        items: EstimationItem[];
        /**
         * Estimation discount items
         */
        discounts: EstimationItem[];
        /**
         * Trial days
         */
        trialDays: number;
        /**
         * Trial end date
         */
        trialEndDate?: string;
        /**
         * Organization&#039;s existing credits
         */
        organizationCredits: number;
    }
    /**
     * EstimationDeleteOrganization
     */
    export type EstimationDeleteOrganization = {
        /**
         * List of unpaid invoices
         */
        unpaidInvoices: Invoice[];
    }
    /**
     * EstimationItem
     */
    export type EstimationItem = {
        /**
         * Label
         */
        label: string;
        /**
         * Gross payable amount
         */
        value: number;
    }
    /**
     * Aggregation team list
     */
    export type AggregationTeamList = {
        /**
         * Total number of aggregations documents that matched your query.
         */
        total: number;
        /**
         * List of aggregations.
         */
        aggregations: AggregationTeam[];
    }
    /**
     * Backup archive list
     */
    export type BackupArchiveList = {
        /**
         * Total number of archives documents that matched your query.
         */
        total: number;
        /**
         * List of archives.
         */
        archives: BackupArchive[];
    }
    /**
     * Backup policy list
     */
    export type BackupPolicyList = {
        /**
         * Total number of policies documents that matched your query.
         */
        total: number;
        /**
         * List of policies.
         */
        policies: BackupPolicy[];
    }
    /**
     * Backup restoration list
     */
    export type BackupRestorationList = {
        /**
         * Total number of restorations documents that matched your query.
         */
        total: number;
        /**
         * List of restorations.
         */
        restorations: BackupRestoration[];
    }
    /**
     * Billing invoices list
     */
    export type InvoiceList = {
        /**
         * Total number of invoices documents that matched your query.
         */
        total: number;
        /**
         * List of invoices.
         */
        invoices: Invoice[];
    }
    /**
     * Billing address list
     */
    export type BillingAddressList = {
        /**
         * Total number of billingAddresses documents that matched your query.
         */
        total: number;
        /**
         * List of billingAddresses.
         */
        billingAddresses: BillingAddress[];
    }
    /**
     * Billing plan list
     */
    export type BillingPlanList = {
        /**
         * Total number of plans documents that matched your query.
         */
        total: number;
        /**
         * List of plans.
         */
        plans: BillingPlan[];
    }
    /**
     * Organizations List
     */
    export type OrganizationList<Preferences extends Models.Preferences> = {
        /**
         * Total number of teams documents that matched your query.
         */
        total: number;
        /**
         * List of teams.
         */
        teams: Organization<Preferences>[];
    }
    /**
     * Payment methods list
     */
    export type PaymentMethodList = {
        /**
         * Total number of paymentMethods documents that matched your query.
         */
        total: number;
        /**
         * List of paymentMethods.
         */
        paymentMethods: PaymentMethod[];
    }
    /**
     * Regions list
     */
    export type ConsoleRegionList = {
        /**
         * Total number of regions documents that matched your query.
         */
        total: number;
        /**
         * List of regions.
         */
        regions: ConsoleRegion[];
    }
    /**
     * Domains list
     */
    export type DomainsList = {
        /**
         * Total number of domains documents that matched your query.
         */
        total: number;
        /**
         * List of domains.
         */
        domains: Domain[];
    }
    /**
     * DNS records list
     */
    export type DnsRecordsList = {
        /**
         * Total number of dnsRecords documents that matched your query.
         */
        total: number;
        /**
         * List of dnsRecords.
         */
        dnsRecords: DnsRecord[];
    }
}
