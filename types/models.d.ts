export declare namespace Models {
    /**
     * Documents List
     */
    type DocumentList<Document extends Models.Document> = {
        /**
         * Total number of documents documents that matched your query.
         */
        total: number;
        /**
         * List of documents.
         */
        documents: Document[];
    };
    /**
     * Collections List
     */
    type CollectionList = {
        /**
         * Total number of collections documents that matched your query.
         */
        total: number;
        /**
         * List of collections.
         */
        collections: Collection[];
    };
    /**
     * Databases List
     */
    type DatabaseList = {
        /**
         * Total number of databases documents that matched your query.
         */
        total: number;
        /**
         * List of databases.
         */
        databases: Database[];
    };
    /**
     * Indexes List
     */
    type IndexList = {
        /**
         * Total number of indexes documents that matched your query.
         */
        total: number;
        /**
         * List of indexes.
         */
        indexes: Index[];
    };
    /**
     * Users List
     */
    type UserList<Preferences extends Models.Preferences> = {
        /**
         * Total number of users documents that matched your query.
         */
        total: number;
        /**
         * List of users.
         */
        users: User<Preferences>[];
    };
    /**
     * Sessions List
     */
    type SessionList = {
        /**
         * Total number of sessions documents that matched your query.
         */
        total: number;
        /**
         * List of sessions.
         */
        sessions: Session[];
    };
    /**
     * Logs List
     */
    type LogList = {
        /**
         * Total number of logs documents that matched your query.
         */
        total: number;
        /**
         * List of logs.
         */
        logs: Log[];
    };
    /**
     * Files List
     */
    type FileList = {
        /**
         * Total number of files documents that matched your query.
         */
        total: number;
        /**
         * List of files.
         */
        files: File[];
    };
    /**
     * Buckets List
     */
    type BucketList = {
        /**
         * Total number of buckets documents that matched your query.
         */
        total: number;
        /**
         * List of buckets.
         */
        buckets: Bucket[];
    };
    /**
     * Teams List
     */
    type TeamList<Preferences extends Models.Preferences> = {
        /**
         * Total number of teams documents that matched your query.
         */
        total: number;
        /**
         * List of teams.
         */
        teams: Team<Preferences>[];
    };
    /**
     * Memberships List
     */
    type MembershipList = {
        /**
         * Total number of memberships documents that matched your query.
         */
        total: number;
        /**
         * List of memberships.
         */
        memberships: Membership[];
    };
    /**
     * Functions List
     */
    type FunctionList = {
        /**
         * Total number of functions documents that matched your query.
         */
        total: number;
        /**
         * List of functions.
         */
        functions: Function[];
    };
    /**
     * Runtimes List
     */
    type RuntimeList = {
        /**
         * Total number of runtimes documents that matched your query.
         */
        total: number;
        /**
         * List of runtimes.
         */
        runtimes: Runtime[];
    };
    /**
     * Deployments List
     */
    type DeploymentList = {
        /**
         * Total number of deployments documents that matched your query.
         */
        total: number;
        /**
         * List of deployments.
         */
        deployments: Deployment[];
    };
    /**
     * Executions List
     */
    type ExecutionList = {
        /**
         * Total number of executions documents that matched your query.
         */
        total: number;
        /**
         * List of executions.
         */
        executions: Execution[];
    };
    /**
     * Projects List
     */
    type ProjectList = {
        /**
         * Total number of projects documents that matched your query.
         */
        total: number;
        /**
         * List of projects.
         */
        projects: Project[];
    };
    /**
     * Webhooks List
     */
    type WebhookList = {
        /**
         * Total number of webhooks documents that matched your query.
         */
        total: number;
        /**
         * List of webhooks.
         */
        webhooks: Webhook[];
    };
    /**
     * API Keys List
     */
    type KeyList = {
        /**
         * Total number of keys documents that matched your query.
         */
        total: number;
        /**
         * List of keys.
         */
        keys: Key[];
    };
    /**
     * Platforms List
     */
    type PlatformList = {
        /**
         * Total number of platforms documents that matched your query.
         */
        total: number;
        /**
         * List of platforms.
         */
        platforms: Platform[];
    };
    /**
     * Domains List
     */
    type DomainList = {
        /**
         * Total number of domains documents that matched your query.
         */
        total: number;
        /**
         * List of domains.
         */
        domains: Domain[];
    };
    /**
     * Countries List
     */
    type CountryList = {
        /**
         * Total number of countries documents that matched your query.
         */
        total: number;
        /**
         * List of countries.
         */
        countries: Country[];
    };
    /**
     * Continents List
     */
    type ContinentList = {
        /**
         * Total number of continents documents that matched your query.
         */
        total: number;
        /**
         * List of continents.
         */
        continents: Continent[];
    };
    /**
     * Languages List
     */
    type LanguageList = {
        /**
         * Total number of languages documents that matched your query.
         */
        total: number;
        /**
         * List of languages.
         */
        languages: Language[];
    };
    /**
     * Currencies List
     */
    type CurrencyList = {
        /**
         * Total number of currencies documents that matched your query.
         */
        total: number;
        /**
         * List of currencies.
         */
        currencies: Currency[];
    };
    /**
     * Phones List
     */
    type PhoneList = {
        /**
         * Total number of phones documents that matched your query.
         */
        total: number;
        /**
         * List of phones.
         */
        phones: Phone[];
    };
    /**
     * Variables List
     */
    type VariableList = {
        /**
         * Total number of variables documents that matched your query.
         */
        total: number;
        /**
         * List of variables.
         */
        variables: Variable[];
    };
    /**
     * Database
     */
    type Database = {
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
    };
    /**
     * Collection
     */
    type Collection = {
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
         * Collection permissions. [Learn more about permissions](/docs/permissions).
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
         * Collection enabled.
         */
        enabled: boolean;
        /**
         * Whether document-level permissions are enabled. [Learn more about permissions](/docs/permissions).
         */
        documentSecurity: boolean;
        /**
         * Collection attributes.
         */
        attributes: string[];
        /**
         * Collection indexes.
         */
        indexes: Index[];
    };
    /**
     * Attributes List
     */
    type AttributeList = {
        /**
         * Total number of attributes in the given collection.
         */
        total: number;
        /**
         * List of attributes.
         */
        attributes: string[];
    };
    /**
     * AttributeString
     */
    type AttributeString = {
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
         * Is attribute required?
         */
        required: boolean;
        /**
         * Is attribute an array?
         */
        array?: boolean;
        /**
         * Attribute size.
         */
        size: number;
        /**
         * Default value for attribute when not provided. Cannot be set when attribute is required.
         */
        default?: string;
    };
    /**
     * AttributeInteger
     */
    type AttributeInteger = {
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
         * Is attribute required?
         */
        required: boolean;
        /**
         * Is attribute an array?
         */
        array?: boolean;
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
    };
    /**
     * AttributeFloat
     */
    type AttributeFloat = {
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
         * Is attribute required?
         */
        required: boolean;
        /**
         * Is attribute an array?
         */
        array?: boolean;
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
    };
    /**
     * AttributeBoolean
     */
    type AttributeBoolean = {
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
         * Is attribute required?
         */
        required: boolean;
        /**
         * Is attribute an array?
         */
        array?: boolean;
        /**
         * Default value for attribute when not provided. Cannot be set when attribute is required.
         */
        default?: boolean;
    };
    /**
     * AttributeEmail
     */
    type AttributeEmail = {
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
         * Is attribute required?
         */
        required: boolean;
        /**
         * Is attribute an array?
         */
        array?: boolean;
        /**
         * String format.
         */
        format: string;
        /**
         * Default value for attribute when not provided. Cannot be set when attribute is required.
         */
        default?: string;
    };
    /**
     * AttributeEnum
     */
    type AttributeEnum = {
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
         * Is attribute required?
         */
        required: boolean;
        /**
         * Is attribute an array?
         */
        array?: boolean;
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
    };
    /**
     * AttributeIP
     */
    type AttributeIp = {
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
         * Is attribute required?
         */
        required: boolean;
        /**
         * Is attribute an array?
         */
        array?: boolean;
        /**
         * String format.
         */
        format: string;
        /**
         * Default value for attribute when not provided. Cannot be set when attribute is required.
         */
        default?: string;
    };
    /**
     * AttributeURL
     */
    type AttributeUrl = {
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
         * Is attribute required?
         */
        required: boolean;
        /**
         * Is attribute an array?
         */
        array?: boolean;
        /**
         * String format.
         */
        format: string;
        /**
         * Default value for attribute when not provided. Cannot be set when attribute is required.
         */
        default?: string;
    };
    /**
     * AttributeDatetime
     */
    type AttributeDatetime = {
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
         * Is attribute required?
         */
        required: boolean;
        /**
         * Is attribute an array?
         */
        array?: boolean;
        /**
         * ISO 8601 format.
         */
        format: string;
        /**
         * Default value for attribute when not provided. Only null is optional
         */
        default?: string;
    };
    /**
     * AttributeRelationship
     */
    type AttributeRelationship = {
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
         * Is attribute required?
         */
        required: boolean;
        /**
         * Is attribute an array?
         */
        array?: boolean;
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
    };
    /**
     * Index
     */
    type Index = {
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
         * Index attributes.
         */
        attributes: string[];
        /**
         * Index orders.
         */
        orders?: string[];
    };
    /**
     * Document
     */
    type Document = {
        /**
         * Document ID.
         */
        $id: string;
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
         * Document permissions. [Learn more about permissions](/docs/permissions).
         */
        $permissions: string[];
        [key: string]: any;
    };
    /**
     * Log
     */
    type Log = {
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
    };
    /**
     * User
     */
    type User<Preferences extends Models.Preferences> = {
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
         * User preferences as a key-value object
         */
        prefs: Preferences;
    };
    /**
     * AlgoMD5
     */
    type AlgoMd5 = {
        /**
         * Algo type.
         */
        type: string;
    };
    /**
     * AlgoSHA
     */
    type AlgoSha = {
        /**
         * Algo type.
         */
        type: string;
    };
    /**
     * AlgoPHPass
     */
    type AlgoPhpass = {
        /**
         * Algo type.
         */
        type: string;
    };
    /**
     * AlgoBcrypt
     */
    type AlgoBcrypt = {
        /**
         * Algo type.
         */
        type: string;
    };
    /**
     * AlgoScrypt
     */
    type AlgoScrypt = {
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
    };
    /**
     * AlgoScryptModified
     */
    type AlgoScryptModified = {
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
    };
    /**
     * AlgoArgon2
     */
    type AlgoArgon2 = {
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
    };
    /**
     * Account
     */
    type Account<Preferences extends Models.Preferences> = {
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
         * User registration date in ISO 8601 format.
         */
        registration: string;
        /**
         * User status. Pass `true` for enabled and `false` for disabled.
         */
        status: boolean;
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
         * User preferences as a key-value object
         */
        prefs: Preferences;
    };
    /**
     * Preferences
     */
    type Preferences = {
        [key: string]: any;
    };
    /**
     * Session
     */
    type Session = {
        /**
         * Session ID.
         */
        $id: string;
        /**
         * Session creation date in ISO 8601 format.
         */
        $createdAt: string;
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
    };
    /**
     * Token
     */
    type Token = {
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
    };
    /**
     * JWT
     */
    type Jwt = {
        /**
         * JWT encoded string.
         */
        jwt: string;
    };
    /**
     * Locale
     */
    type Locale = {
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
    };
    /**
     * File
     */
    type File = {
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
         * File permissions. [Learn more about permissions](/docs/permissions).
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
    };
    /**
     * Bucket
     */
    type Bucket = {
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
         * Bucket permissions. [Learn more about permissions](/docs/permissions).
         */
        $permissions: string[];
        /**
         * Whether file-level security is enabled. [Learn more about permissions](/docs/permissions).
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
    };
    /**
     * Team
     */
    type Team<Preferences extends Models.Preferences> = {
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
    };
    /**
     * Membership
     */
    type Membership = {
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
         * User name.
         */
        userName: string;
        /**
         * User email address.
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
         * User list of roles
         */
        roles: string[];
    };
    /**
     * Function
     */
    type Function = {
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
         * Function execution runtime.
         */
        runtime: string;
        /**
         * Function&#039;s active deployment ID.
         */
        deployment: string;
        /**
         * Function variables.
         */
        vars: Variable[];
        /**
         * Function trigger events.
         */
        events: string[];
        /**
         * Function execution schedult in CRON format.
         */
        schedule: string;
        /**
         * Function execution timeout in seconds.
         */
        timeout: number;
    };
    /**
     * Runtime
     */
    type Runtime = {
        /**
         * Runtime ID.
         */
        $id: string;
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
    };
    /**
     * Deployment
     */
    type Deployment = {
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
        size: number;
        /**
         * The current build ID.
         */
        buildId: string;
        /**
         * Whether the deployment should be automatically activated.
         */
        activate: boolean;
        /**
         * The deployment status. Possible values are &quot;processing&quot;, &quot;building&quot;, &quot;pending&quot;, &quot;ready&quot;, and &quot;failed&quot;.
         */
        status: string;
        /**
         * The build stdout.
         */
        buildStdout: string;
        /**
         * The build stderr.
         */
        buildStderr: string;
        /**
         * The current build time in seconds.
         */
        buildTime: number;
    };
    /**
     * Execution
     */
    type Execution = {
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
         * The script status code.
         */
        statusCode: number;
        /**
         * The script response output string. Logs the last 4,000 characters of the execution response output.
         */
        response: string;
        /**
         * The script stdout output string. Logs the last 4,000 characters of the execution stdout output. This will return an empty string unless the response is returned using an API key or as part of a webhook payload.
         */
        stdout: string;
        /**
         * The script stderr output string. Logs the last 4,000 characters of the execution stderr output. This will return an empty string unless the response is returned using an API key or as part of a webhook payload.
         */
        stderr: string;
        /**
         * The script execution duration in seconds.
         */
        duration: number;
    };
    /**
     * Project
     */
    type Project = {
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
         * List of Providers.
         */
        providers: Provider[];
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
         * List of Domains.
         */
        domains: Domain[];
        /**
         * Email/Password auth method status
         */
        authEmailPassword: boolean;
        /**
         * Magic URL auth method status
         */
        authUsersAuthMagicURL: boolean;
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
         * Functions service status
         */
        serviceStatusForFunctions: boolean;
        /**
         * GraphQL service status
         */
        serviceStatusForGraphql: boolean;
    };
    /**
     * Webhook
     */
    type Webhook = {
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
    };
    /**
     * Key
     */
    type Key = {
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
         * Most recent access date in ISO 8601 format.
         */
        accessedAt: string;
        /**
         * List of SDK user agents that used this key.
         */
        sdks: string[];
    };
    /**
     * Domain
     */
    type Domain = {
        /**
         * Domain ID.
         */
        $id: string;
        /**
         * Domain creation date in ISO 8601 format.
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
         * Registerable domain name.
         */
        registerable: string;
        /**
         * TLD name.
         */
        tld: string;
        /**
         * Verification process status.
         */
        verification: boolean;
        /**
         * Certificate ID.
         */
        certificateId: string;
    };
    /**
     * Provider
     */
    type Provider = {
        /**
         * Provider name.
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
         * Provider is active and can be used to create session.
         */
        enabled: boolean;
    };
    /**
     * Platform
     */
    type Platform = {
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
    };
    /**
     * Variable
     */
    type Variable = {
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
         * Function ID.
         */
        functionId: string;
    };
    /**
     * Country
     */
    type Country = {
        /**
         * Country name.
         */
        name: string;
        /**
         * Country two-character ISO 3166-1 alpha code.
         */
        code: string;
    };
    /**
     * Continent
     */
    type Continent = {
        /**
         * Continent name.
         */
        name: string;
        /**
         * Continent two letter code.
         */
        code: string;
    };
    /**
     * Language
     */
    type Language = {
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
    };
    /**
     * Currency
     */
    type Currency = {
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
    };
    /**
     * Phone
     */
    type Phone = {
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
    };
    /**
     * Health Antivirus
     */
    type HealthAntivirus = {
        /**
         * Antivirus version.
         */
        version: string;
        /**
         * Antivirus status. Possible values can are: `disabled`, `offline`, `online`
         */
        status: string;
    };
    /**
     * Health Queue
     */
    type HealthQueue = {
        /**
         * Amount of actions in the queue.
         */
        size: number;
    };
    /**
     * Health Status
     */
    type HealthStatus = {
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
    };
    /**
     * Health Time
     */
    type HealthTime = {
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
    };
    /**
     * Metric
     */
    type Metric = {
        /**
         * The value of this metric at the timestamp.
         */
        value: number;
        /**
         * The date at which this metric was aggregated in ISO 8601 format.
         */
        date: string;
    };
    /**
     * UsageDatabases
     */
    type UsageDatabases = {
        /**
         * The time range of the usage stats.
         */
        range: string;
        /**
         * Aggregated stats for total number of documents.
         */
        databasesTotal: Metric[];
        /**
         * Aggregated stats for total number of collections.
         */
        collectionsTotal: Metric[];
        /**
         * Aggregated stats for total number of documents.
         */
        documentsTotal: Metric[];
    };
    /**
     * UsageDatabase
     */
    type UsageDatabase = {
        /**
         * The time range of the usage stats.
         */
        range: string;
        /**
         * Aggregated stats for total number of collections.
         */
        collectionsTotal: Metric[];
        /**
         * Aggregated stats for total number of documents.
         */
        documentsTotal: Metric[];
    };
    /**
     * UsageCollection
     */
    type UsageCollection = {
        /**
         * The time range of the usage stats.
         */
        range: string;
        /**
         * Aggregated stats for total number of documents.
         */
        documentsTotal: Metric[];
    };
    /**
     * UsageUsers
     */
    type UsageUsers = {
        /**
         * The time range of the usage stats.
         */
        range: string;
        /**
         * Aggregated stats for total number of users.
         */
        usersTotal: Metric[];
        /**
         * Aggregated stats for sessions created.
         */
        sessionsTotal: Metric[];
    };
    /**
     * StorageUsage
     */
    type UsageStorage = {
        /**
         * The time range of the usage stats.
         */
        range: string;
        /**
         * Aggregated stats for total number of buckets.
         */
        bucketsTotal: Metric[];
        /**
         * Aggregated stats for total number of files.
         */
        filesTotal: Metric[];
        /**
         * Aggregated stats for the occupied storage size (in bytes).
         */
        filesStorage: Metric[];
    };
    /**
     * UsageBuckets
     */
    type UsageBuckets = {
        /**
         * The time range of the usage stats.
         */
        range: string;
        /**
         * Aggregated stats for total number of files in this bucket.
         */
        filesTotal: Metric[];
        /**
         * Aggregated stats for total storage of files in this bucket.
         */
        filesStorage: Metric[];
    };
    /**
     * UsageFunctions
     */
    type UsageFunctions = {
        /**
         * The time range of the usage stats.
         */
        range: string;
        /**
         * Aggregated stats for number of functions.
         */
        functionsTotal: Metric[];
        /**
         * Aggregated stats for number of function deployments.
         */
        deploymentsTotal: Metric[];
        /**
         * Aggregated stats for function deployments storage.
         */
        deploymentsStorage: Metric[];
        /**
         * Aggregated stats for number of function builds.
         */
        buildsTotal: Metric[];
        /**
         * Aggregated stats for builds  storage.
         */
        buildsStorage: Metric[];
        /**
         * Aggregated stats for function build compute.
         */
        buildsTime: Metric[];
        /**
         * Aggregated stats for number of function executions.
         */
        executionsTotal: Metric[];
        /**
         * Aggregated stats for function execution compute.
         */
        executionsTime: Metric[];
    };
    /**
     * UsageProject
     */
    type UsageProject = {
        /**
         * The time range of the usage stats.
         */
        range: string;
        /**
         * Aggregated stats for number of requests.
         */
        requestsTotal: Metric[];
        /**
         * Aggregated stats for consumed bandwidth.
         */
        network: Metric[];
        /**
         * Aggregated stats for function executions.
         */
        executionsTotal: Metric[];
        /**
         * Aggregated stats for number of documents.
         */
        documentsTotal: Metric[];
        /**
         * Aggregated stats for number of databases.
         */
        databasesTotal: Metric[];
        /**
         * Aggregated stats for number of users.
         */
        usersTotal: Metric[];
        /**
         * Aggregated stats for the occupied storage size (in bytes).
         */
        filesStorage: Metric[];
        /**
         * Aggregated stats for number of buckets.
         */
        bucketsTotal: Metric[];
    };
    /**
     * Console Variables
     */
    type ConsoleVariables = {
        /**
         * CNAME target for your Appwrite custom domains.
         */
        _APP_DOMAIN_TARGET: string;
        /**
         * Maximum file size allowed for file upload in bytes.
         */
        _APP_STORAGE_LIMIT: number;
        /**
         * Maximum file size allowed for deployment in bytes.
         */
        _APP_FUNCTIONS_SIZE_LIMIT: number;
        /**
         * Defines if usage stats are enabled. This value is set to &#039;enabled&#039; by default, to disable the usage stats set the value to &#039;disabled&#039;.
         */
        _APP_USAGE_STATS: string;
    };
}
