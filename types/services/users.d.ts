import { Client } from '../client';
import type { Models } from '../models';
import { PasswordHash } from '../enums/password-hash';
import { UsageRange } from '../enums/usage-range';
import { AuthenticatorType } from '../enums/authenticator-type';
import { MessagingProviderType } from '../enums/messaging-provider-type';
export declare class Users {
    client: Client;
    constructor(client: Client);
    /**
     * Get a list of all the project's users. You can use the query params to filter your results.
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, email, phone, status, passwordUpdate, registration, emailVerification, phoneVerification, labels
     * @param {string} params.search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.UserList<Preferences>>}
     */
    list<Preferences extends Models.Preferences = Models.DefaultPreferences>(params?: {
        queries?: string[];
        search?: string;
        total?: boolean;
    }): Promise<Models.UserList<Preferences>>;
    /**
     * Get a list of all the project's users. You can use the query params to filter your results.
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, email, phone, status, passwordUpdate, registration, emailVerification, phoneVerification, labels
     * @param {string} search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.UserList<Preferences>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    list<Preferences extends Models.Preferences = Models.DefaultPreferences>(queries?: string[], search?: string, total?: boolean): Promise<Models.UserList<Preferences>>;
    /**
     * Create a new user.
     *
     * @param {string} params.userId - User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.email - User email.
     * @param {string} params.phone - Phone number. Format this number with a leading '+' and a country code, e.g., +16175551212.
     * @param {string} params.password - Plain text user password. Must be at least 8 chars.
     * @param {string} params.name - User name. Max length: 128 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.User<Preferences>>}
     */
    create<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: {
        userId: string;
        email?: string;
        phone?: string;
        password?: string;
        name?: string;
    }): Promise<Models.User<Preferences>>;
    /**
     * Create a new user.
     *
     * @param {string} userId - User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} email - User email.
     * @param {string} phone - Phone number. Format this number with a leading '+' and a country code, e.g., +16175551212.
     * @param {string} password - Plain text user password. Must be at least 8 chars.
     * @param {string} name - User name. Max length: 128 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.User<Preferences>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    create<Preferences extends Models.Preferences = Models.DefaultPreferences>(userId: string, email?: string, phone?: string, password?: string, name?: string): Promise<Models.User<Preferences>>;
    /**
     * Create a new user. Password provided must be hashed with the [Argon2](https://en.wikipedia.org/wiki/Argon2) algorithm. Use the [POST /users](https://appwrite.io/docs/server/users#usersCreate) endpoint to create users with a plain text password.
     *
     * @param {string} params.userId - User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.email - User email.
     * @param {string} params.password - User password hashed using Argon2.
     * @param {string} params.name - User name. Max length: 128 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.User<Preferences>>}
     */
    createArgon2User<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: {
        userId: string;
        email: string;
        password: string;
        name?: string;
    }): Promise<Models.User<Preferences>>;
    /**
     * Create a new user. Password provided must be hashed with the [Argon2](https://en.wikipedia.org/wiki/Argon2) algorithm. Use the [POST /users](https://appwrite.io/docs/server/users#usersCreate) endpoint to create users with a plain text password.
     *
     * @param {string} userId - User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} email - User email.
     * @param {string} password - User password hashed using Argon2.
     * @param {string} name - User name. Max length: 128 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.User<Preferences>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createArgon2User<Preferences extends Models.Preferences = Models.DefaultPreferences>(userId: string, email: string, password: string, name?: string): Promise<Models.User<Preferences>>;
    /**
     * Create a new user. Password provided must be hashed with the [Bcrypt](https://en.wikipedia.org/wiki/Bcrypt) algorithm. Use the [POST /users](https://appwrite.io/docs/server/users#usersCreate) endpoint to create users with a plain text password.
     *
     * @param {string} params.userId - User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.email - User email.
     * @param {string} params.password - User password hashed using Bcrypt.
     * @param {string} params.name - User name. Max length: 128 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.User<Preferences>>}
     */
    createBcryptUser<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: {
        userId: string;
        email: string;
        password: string;
        name?: string;
    }): Promise<Models.User<Preferences>>;
    /**
     * Create a new user. Password provided must be hashed with the [Bcrypt](https://en.wikipedia.org/wiki/Bcrypt) algorithm. Use the [POST /users](https://appwrite.io/docs/server/users#usersCreate) endpoint to create users with a plain text password.
     *
     * @param {string} userId - User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} email - User email.
     * @param {string} password - User password hashed using Bcrypt.
     * @param {string} name - User name. Max length: 128 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.User<Preferences>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createBcryptUser<Preferences extends Models.Preferences = Models.DefaultPreferences>(userId: string, email: string, password: string, name?: string): Promise<Models.User<Preferences>>;
    /**
     * Get identities for all users.
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: userId, provider, providerUid, providerEmail, providerAccessTokenExpiry
     * @param {string} params.search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.IdentityList>}
     */
    listIdentities(params?: {
        queries?: string[];
        search?: string;
        total?: boolean;
    }): Promise<Models.IdentityList>;
    /**
     * Get identities for all users.
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: userId, provider, providerUid, providerEmail, providerAccessTokenExpiry
     * @param {string} search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.IdentityList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listIdentities(queries?: string[], search?: string, total?: boolean): Promise<Models.IdentityList>;
    /**
     * Delete an identity by its unique ID.
     *
     * @param {string} params.identityId - Identity ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteIdentity(params: {
        identityId: string;
    }): Promise<{}>;
    /**
     * Delete an identity by its unique ID.
     *
     * @param {string} identityId - Identity ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteIdentity(identityId: string): Promise<{}>;
    /**
     * Create a new user. Password provided must be hashed with the [MD5](https://en.wikipedia.org/wiki/MD5) algorithm. Use the [POST /users](https://appwrite.io/docs/server/users#usersCreate) endpoint to create users with a plain text password.
     *
     * @param {string} params.userId - User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.email - User email.
     * @param {string} params.password - User password hashed using MD5.
     * @param {string} params.name - User name. Max length: 128 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.User<Preferences>>}
     */
    createMD5User<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: {
        userId: string;
        email: string;
        password: string;
        name?: string;
    }): Promise<Models.User<Preferences>>;
    /**
     * Create a new user. Password provided must be hashed with the [MD5](https://en.wikipedia.org/wiki/MD5) algorithm. Use the [POST /users](https://appwrite.io/docs/server/users#usersCreate) endpoint to create users with a plain text password.
     *
     * @param {string} userId - User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} email - User email.
     * @param {string} password - User password hashed using MD5.
     * @param {string} name - User name. Max length: 128 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.User<Preferences>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createMD5User<Preferences extends Models.Preferences = Models.DefaultPreferences>(userId: string, email: string, password: string, name?: string): Promise<Models.User<Preferences>>;
    /**
     * Create a new user. Password provided must be hashed with the [PHPass](https://www.openwall.com/phpass/) algorithm. Use the [POST /users](https://appwrite.io/docs/server/users#usersCreate) endpoint to create users with a plain text password.
     *
     * @param {string} params.userId - User ID. Choose a custom ID or pass the string `ID.unique()`to auto generate it. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.email - User email.
     * @param {string} params.password - User password hashed using PHPass.
     * @param {string} params.name - User name. Max length: 128 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.User<Preferences>>}
     */
    createPHPassUser<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: {
        userId: string;
        email: string;
        password: string;
        name?: string;
    }): Promise<Models.User<Preferences>>;
    /**
     * Create a new user. Password provided must be hashed with the [PHPass](https://www.openwall.com/phpass/) algorithm. Use the [POST /users](https://appwrite.io/docs/server/users#usersCreate) endpoint to create users with a plain text password.
     *
     * @param {string} userId - User ID. Choose a custom ID or pass the string `ID.unique()`to auto generate it. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} email - User email.
     * @param {string} password - User password hashed using PHPass.
     * @param {string} name - User name. Max length: 128 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.User<Preferences>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createPHPassUser<Preferences extends Models.Preferences = Models.DefaultPreferences>(userId: string, email: string, password: string, name?: string): Promise<Models.User<Preferences>>;
    /**
     * Create a new user. Password provided must be hashed with the [Scrypt](https://github.com/Tarsnap/scrypt) algorithm. Use the [POST /users](https://appwrite.io/docs/server/users#usersCreate) endpoint to create users with a plain text password.
     *
     * @param {string} params.userId - User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.email - User email.
     * @param {string} params.password - User password hashed using Scrypt.
     * @param {string} params.passwordSalt - Optional salt used to hash password.
     * @param {number} params.passwordCpu - Optional CPU cost used to hash password.
     * @param {number} params.passwordMemory - Optional memory cost used to hash password.
     * @param {number} params.passwordParallel - Optional parallelization cost used to hash password.
     * @param {number} params.passwordLength - Optional hash length used to hash password.
     * @param {string} params.name - User name. Max length: 128 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.User<Preferences>>}
     */
    createScryptUser<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: {
        userId: string;
        email: string;
        password: string;
        passwordSalt: string;
        passwordCpu: number;
        passwordMemory: number;
        passwordParallel: number;
        passwordLength: number;
        name?: string;
    }): Promise<Models.User<Preferences>>;
    /**
     * Create a new user. Password provided must be hashed with the [Scrypt](https://github.com/Tarsnap/scrypt) algorithm. Use the [POST /users](https://appwrite.io/docs/server/users#usersCreate) endpoint to create users with a plain text password.
     *
     * @param {string} userId - User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} email - User email.
     * @param {string} password - User password hashed using Scrypt.
     * @param {string} passwordSalt - Optional salt used to hash password.
     * @param {number} passwordCpu - Optional CPU cost used to hash password.
     * @param {number} passwordMemory - Optional memory cost used to hash password.
     * @param {number} passwordParallel - Optional parallelization cost used to hash password.
     * @param {number} passwordLength - Optional hash length used to hash password.
     * @param {string} name - User name. Max length: 128 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.User<Preferences>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createScryptUser<Preferences extends Models.Preferences = Models.DefaultPreferences>(userId: string, email: string, password: string, passwordSalt: string, passwordCpu: number, passwordMemory: number, passwordParallel: number, passwordLength: number, name?: string): Promise<Models.User<Preferences>>;
    /**
     * Create a new user. Password provided must be hashed with the [Scrypt Modified](https://gist.github.com/Meldiron/eecf84a0225eccb5a378d45bb27462cc) algorithm. Use the [POST /users](https://appwrite.io/docs/server/users#usersCreate) endpoint to create users with a plain text password.
     *
     * @param {string} params.userId - User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.email - User email.
     * @param {string} params.password - User password hashed using Scrypt Modified.
     * @param {string} params.passwordSalt - Salt used to hash password.
     * @param {string} params.passwordSaltSeparator - Salt separator used to hash password.
     * @param {string} params.passwordSignerKey - Signer key used to hash password.
     * @param {string} params.name - User name. Max length: 128 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.User<Preferences>>}
     */
    createScryptModifiedUser<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: {
        userId: string;
        email: string;
        password: string;
        passwordSalt: string;
        passwordSaltSeparator: string;
        passwordSignerKey: string;
        name?: string;
    }): Promise<Models.User<Preferences>>;
    /**
     * Create a new user. Password provided must be hashed with the [Scrypt Modified](https://gist.github.com/Meldiron/eecf84a0225eccb5a378d45bb27462cc) algorithm. Use the [POST /users](https://appwrite.io/docs/server/users#usersCreate) endpoint to create users with a plain text password.
     *
     * @param {string} userId - User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} email - User email.
     * @param {string} password - User password hashed using Scrypt Modified.
     * @param {string} passwordSalt - Salt used to hash password.
     * @param {string} passwordSaltSeparator - Salt separator used to hash password.
     * @param {string} passwordSignerKey - Signer key used to hash password.
     * @param {string} name - User name. Max length: 128 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.User<Preferences>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createScryptModifiedUser<Preferences extends Models.Preferences = Models.DefaultPreferences>(userId: string, email: string, password: string, passwordSalt: string, passwordSaltSeparator: string, passwordSignerKey: string, name?: string): Promise<Models.User<Preferences>>;
    /**
     * Create a new user. Password provided must be hashed with the [SHA](https://en.wikipedia.org/wiki/Secure_Hash_Algorithm) algorithm. Use the [POST /users](https://appwrite.io/docs/server/users#usersCreate) endpoint to create users with a plain text password.
     *
     * @param {string} params.userId - User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.email - User email.
     * @param {string} params.password - User password hashed using SHA.
     * @param {PasswordHash} params.passwordVersion - Optional SHA version used to hash password. Allowed values are: 'sha1', 'sha224', 'sha256', 'sha384', 'sha512/224', 'sha512/256', 'sha512', 'sha3-224', 'sha3-256', 'sha3-384', 'sha3-512'
     * @param {string} params.name - User name. Max length: 128 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.User<Preferences>>}
     */
    createSHAUser<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: {
        userId: string;
        email: string;
        password: string;
        passwordVersion?: PasswordHash;
        name?: string;
    }): Promise<Models.User<Preferences>>;
    /**
     * Create a new user. Password provided must be hashed with the [SHA](https://en.wikipedia.org/wiki/Secure_Hash_Algorithm) algorithm. Use the [POST /users](https://appwrite.io/docs/server/users#usersCreate) endpoint to create users with a plain text password.
     *
     * @param {string} userId - User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} email - User email.
     * @param {string} password - User password hashed using SHA.
     * @param {PasswordHash} passwordVersion - Optional SHA version used to hash password. Allowed values are: 'sha1', 'sha224', 'sha256', 'sha384', 'sha512/224', 'sha512/256', 'sha512', 'sha3-224', 'sha3-256', 'sha3-384', 'sha3-512'
     * @param {string} name - User name. Max length: 128 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.User<Preferences>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createSHAUser<Preferences extends Models.Preferences = Models.DefaultPreferences>(userId: string, email: string, password: string, passwordVersion?: PasswordHash, name?: string): Promise<Models.User<Preferences>>;
    /**
     * Get usage metrics and statistics for all users in the project. You can view the total number of users and sessions. The response includes both current totals and historical data over time. Use the optional range parameter to specify the time window for historical data: 24h (last 24 hours), 30d (last 30 days), or 90d (last 90 days). If not specified, range defaults to 30 days.
     *
     *
     * @param {UsageRange} params.range - Date range.
     * @throws {AppwriteException}
     * @returns {Promise<Models.UsageUsers>}
     */
    getUsage(params?: {
        range?: UsageRange;
    }): Promise<Models.UsageUsers>;
    /**
     * Get usage metrics and statistics for all users in the project. You can view the total number of users and sessions. The response includes both current totals and historical data over time. Use the optional range parameter to specify the time window for historical data: 24h (last 24 hours), 30d (last 30 days), or 90d (last 90 days). If not specified, range defaults to 30 days.
     *
     *
     * @param {UsageRange} range - Date range.
     * @throws {AppwriteException}
     * @returns {Promise<Models.UsageUsers>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getUsage(range?: UsageRange): Promise<Models.UsageUsers>;
    /**
     * Get a user by its unique ID.
     *
     * @param {string} params.userId - User ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.User<Preferences>>}
     */
    get<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: {
        userId: string;
    }): Promise<Models.User<Preferences>>;
    /**
     * Get a user by its unique ID.
     *
     * @param {string} userId - User ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.User<Preferences>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    get<Preferences extends Models.Preferences = Models.DefaultPreferences>(userId: string): Promise<Models.User<Preferences>>;
    /**
     * Delete a user by its unique ID, thereby releasing it's ID. Since ID is released and can be reused, all user-related resources like documents or storage files should be deleted before user deletion. If you want to keep ID reserved, use the [updateStatus](https://appwrite.io/docs/server/users#usersUpdateStatus) endpoint instead.
     *
     * @param {string} params.userId - User ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    delete(params: {
        userId: string;
    }): Promise<{}>;
    /**
     * Delete a user by its unique ID, thereby releasing it's ID. Since ID is released and can be reused, all user-related resources like documents or storage files should be deleted before user deletion. If you want to keep ID reserved, use the [updateStatus](https://appwrite.io/docs/server/users#usersUpdateStatus) endpoint instead.
     *
     * @param {string} userId - User ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    delete(userId: string): Promise<{}>;
    /**
     * Update the user email by its unique ID.
     *
     * @param {string} params.userId - User ID.
     * @param {string} params.email - User email.
     * @throws {AppwriteException}
     * @returns {Promise<Models.User<Preferences>>}
     */
    updateEmail<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: {
        userId: string;
        email: string;
    }): Promise<Models.User<Preferences>>;
    /**
     * Update the user email by its unique ID.
     *
     * @param {string} userId - User ID.
     * @param {string} email - User email.
     * @throws {AppwriteException}
     * @returns {Promise<Models.User<Preferences>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateEmail<Preferences extends Models.Preferences = Models.DefaultPreferences>(userId: string, email: string): Promise<Models.User<Preferences>>;
    /**
     * Use this endpoint to create a JSON Web Token for user by its unique ID. You can use the resulting JWT to authenticate on behalf of the user. The JWT secret will become invalid if the session it uses gets deleted.
     *
     * @param {string} params.userId - User ID.
     * @param {string} params.sessionId - Session ID. Use the string 'recent' to use the most recent session. Defaults to the most recent session.
     * @param {number} params.duration - Time in seconds before JWT expires. Default duration is 900 seconds, and maximum is 3600 seconds.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Jwt>}
     */
    createJWT(params: {
        userId: string;
        sessionId?: string;
        duration?: number;
    }): Promise<Models.Jwt>;
    /**
     * Use this endpoint to create a JSON Web Token for user by its unique ID. You can use the resulting JWT to authenticate on behalf of the user. The JWT secret will become invalid if the session it uses gets deleted.
     *
     * @param {string} userId - User ID.
     * @param {string} sessionId - Session ID. Use the string 'recent' to use the most recent session. Defaults to the most recent session.
     * @param {number} duration - Time in seconds before JWT expires. Default duration is 900 seconds, and maximum is 3600 seconds.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Jwt>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createJWT(userId: string, sessionId?: string, duration?: number): Promise<Models.Jwt>;
    /**
     * Update the user labels by its unique ID.
     *
     * Labels can be used to grant access to resources. While teams are a way for user's to share access to a resource, labels can be defined by the developer to grant access without an invitation. See the [Permissions docs](https://appwrite.io/docs/permissions) for more info.
     *
     * @param {string} params.userId - User ID.
     * @param {string[]} params.labels - Array of user labels. Replaces the previous labels. Maximum of 1000 labels are allowed, each up to 36 alphanumeric characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Models.User<Preferences>>}
     */
    updateLabels<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: {
        userId: string;
        labels: string[];
    }): Promise<Models.User<Preferences>>;
    /**
     * Update the user labels by its unique ID.
     *
     * Labels can be used to grant access to resources. While teams are a way for user's to share access to a resource, labels can be defined by the developer to grant access without an invitation. See the [Permissions docs](https://appwrite.io/docs/permissions) for more info.
     *
     * @param {string} userId - User ID.
     * @param {string[]} labels - Array of user labels. Replaces the previous labels. Maximum of 1000 labels are allowed, each up to 36 alphanumeric characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Models.User<Preferences>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateLabels<Preferences extends Models.Preferences = Models.DefaultPreferences>(userId: string, labels: string[]): Promise<Models.User<Preferences>>;
    /**
     * Get the user activity logs list by its unique ID.
     *
     * @param {string} params.userId - User ID.
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.LogList>}
     */
    listLogs(params: {
        userId: string;
        queries?: string[];
        total?: boolean;
    }): Promise<Models.LogList>;
    /**
     * Get the user activity logs list by its unique ID.
     *
     * @param {string} userId - User ID.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.LogList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listLogs(userId: string, queries?: string[], total?: boolean): Promise<Models.LogList>;
    /**
     * Get the user membership list by its unique ID.
     *
     * @param {string} params.userId - User ID.
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: userId, teamId, invited, joined, confirm, roles
     * @param {string} params.search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.MembershipList>}
     */
    listMemberships(params: {
        userId: string;
        queries?: string[];
        search?: string;
        total?: boolean;
    }): Promise<Models.MembershipList>;
    /**
     * Get the user membership list by its unique ID.
     *
     * @param {string} userId - User ID.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: userId, teamId, invited, joined, confirm, roles
     * @param {string} search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.MembershipList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listMemberships(userId: string, queries?: string[], search?: string, total?: boolean): Promise<Models.MembershipList>;
    /**
     * Enable or disable MFA on a user account.
     *
     * @param {string} params.userId - User ID.
     * @param {boolean} params.mfa - Enable or disable MFA.
     * @throws {AppwriteException}
     * @returns {Promise<Models.User<Preferences>>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `Users.updateMFA` instead.
     */
    updateMfa<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: {
        userId: string;
        mfa: boolean;
    }): Promise<Models.User<Preferences>>;
    /**
     * Enable or disable MFA on a user account.
     *
     * @param {string} userId - User ID.
     * @param {boolean} mfa - Enable or disable MFA.
     * @throws {AppwriteException}
     * @returns {Promise<Models.User<Preferences>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateMfa<Preferences extends Models.Preferences = Models.DefaultPreferences>(userId: string, mfa: boolean): Promise<Models.User<Preferences>>;
    /**
     * Enable or disable MFA on a user account.
     *
     * @param {string} params.userId - User ID.
     * @param {boolean} params.mfa - Enable or disable MFA.
     * @throws {AppwriteException}
     * @returns {Promise<Models.User<Preferences>>}
     */
    updateMFA<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: {
        userId: string;
        mfa: boolean;
    }): Promise<Models.User<Preferences>>;
    /**
     * Enable or disable MFA on a user account.
     *
     * @param {string} userId - User ID.
     * @param {boolean} mfa - Enable or disable MFA.
     * @throws {AppwriteException}
     * @returns {Promise<Models.User<Preferences>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateMFA<Preferences extends Models.Preferences = Models.DefaultPreferences>(userId: string, mfa: boolean): Promise<Models.User<Preferences>>;
    /**
     * Delete an authenticator app.
     *
     * @param {string} params.userId - User ID.
     * @param {AuthenticatorType} params.type - Type of authenticator.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `Users.deleteMFAAuthenticator` instead.
     */
    deleteMfaAuthenticator(params: {
        userId: string;
        type: AuthenticatorType;
    }): Promise<{}>;
    /**
     * Delete an authenticator app.
     *
     * @param {string} userId - User ID.
     * @param {AuthenticatorType} type - Type of authenticator.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteMfaAuthenticator(userId: string, type: AuthenticatorType): Promise<{}>;
    /**
     * Delete an authenticator app.
     *
     * @param {string} params.userId - User ID.
     * @param {AuthenticatorType} params.type - Type of authenticator.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteMFAAuthenticator(params: {
        userId: string;
        type: AuthenticatorType;
    }): Promise<{}>;
    /**
     * Delete an authenticator app.
     *
     * @param {string} userId - User ID.
     * @param {AuthenticatorType} type - Type of authenticator.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteMFAAuthenticator(userId: string, type: AuthenticatorType): Promise<{}>;
    /**
     * List the factors available on the account to be used as a MFA challange.
     *
     * @param {string} params.userId - User ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.MfaFactors>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `Users.listMFAFactors` instead.
     */
    listMfaFactors(params: {
        userId: string;
    }): Promise<Models.MfaFactors>;
    /**
     * List the factors available on the account to be used as a MFA challange.
     *
     * @param {string} userId - User ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.MfaFactors>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listMfaFactors(userId: string): Promise<Models.MfaFactors>;
    /**
     * List the factors available on the account to be used as a MFA challange.
     *
     * @param {string} params.userId - User ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.MfaFactors>}
     */
    listMFAFactors(params: {
        userId: string;
    }): Promise<Models.MfaFactors>;
    /**
     * List the factors available on the account to be used as a MFA challange.
     *
     * @param {string} userId - User ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.MfaFactors>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listMFAFactors(userId: string): Promise<Models.MfaFactors>;
    /**
     * Get recovery codes that can be used as backup for MFA flow by User ID. Before getting codes, they must be generated using [createMfaRecoveryCodes](/docs/references/cloud/client-web/account#createMfaRecoveryCodes) method.
     *
     * @param {string} params.userId - User ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.MfaRecoveryCodes>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `Users.getMFARecoveryCodes` instead.
     */
    getMfaRecoveryCodes(params: {
        userId: string;
    }): Promise<Models.MfaRecoveryCodes>;
    /**
     * Get recovery codes that can be used as backup for MFA flow by User ID. Before getting codes, they must be generated using [createMfaRecoveryCodes](/docs/references/cloud/client-web/account#createMfaRecoveryCodes) method.
     *
     * @param {string} userId - User ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.MfaRecoveryCodes>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getMfaRecoveryCodes(userId: string): Promise<Models.MfaRecoveryCodes>;
    /**
     * Get recovery codes that can be used as backup for MFA flow by User ID. Before getting codes, they must be generated using [createMfaRecoveryCodes](/docs/references/cloud/client-web/account#createMfaRecoveryCodes) method.
     *
     * @param {string} params.userId - User ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.MfaRecoveryCodes>}
     */
    getMFARecoveryCodes(params: {
        userId: string;
    }): Promise<Models.MfaRecoveryCodes>;
    /**
     * Get recovery codes that can be used as backup for MFA flow by User ID. Before getting codes, they must be generated using [createMfaRecoveryCodes](/docs/references/cloud/client-web/account#createMfaRecoveryCodes) method.
     *
     * @param {string} userId - User ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.MfaRecoveryCodes>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getMFARecoveryCodes(userId: string): Promise<Models.MfaRecoveryCodes>;
    /**
     * Regenerate recovery codes that can be used as backup for MFA flow by User ID. Before regenerating codes, they must be first generated using [createMfaRecoveryCodes](/docs/references/cloud/client-web/account#createMfaRecoveryCodes) method.
     *
     * @param {string} params.userId - User ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.MfaRecoveryCodes>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `Users.updateMFARecoveryCodes` instead.
     */
    updateMfaRecoveryCodes(params: {
        userId: string;
    }): Promise<Models.MfaRecoveryCodes>;
    /**
     * Regenerate recovery codes that can be used as backup for MFA flow by User ID. Before regenerating codes, they must be first generated using [createMfaRecoveryCodes](/docs/references/cloud/client-web/account#createMfaRecoveryCodes) method.
     *
     * @param {string} userId - User ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.MfaRecoveryCodes>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateMfaRecoveryCodes(userId: string): Promise<Models.MfaRecoveryCodes>;
    /**
     * Regenerate recovery codes that can be used as backup for MFA flow by User ID. Before regenerating codes, they must be first generated using [createMfaRecoveryCodes](/docs/references/cloud/client-web/account#createMfaRecoveryCodes) method.
     *
     * @param {string} params.userId - User ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.MfaRecoveryCodes>}
     */
    updateMFARecoveryCodes(params: {
        userId: string;
    }): Promise<Models.MfaRecoveryCodes>;
    /**
     * Regenerate recovery codes that can be used as backup for MFA flow by User ID. Before regenerating codes, they must be first generated using [createMfaRecoveryCodes](/docs/references/cloud/client-web/account#createMfaRecoveryCodes) method.
     *
     * @param {string} userId - User ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.MfaRecoveryCodes>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateMFARecoveryCodes(userId: string): Promise<Models.MfaRecoveryCodes>;
    /**
     * Generate recovery codes used as backup for MFA flow for User ID. Recovery codes can be used as a MFA verification type in [createMfaChallenge](/docs/references/cloud/client-web/account#createMfaChallenge) method by client SDK.
     *
     * @param {string} params.userId - User ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.MfaRecoveryCodes>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `Users.createMFARecoveryCodes` instead.
     */
    createMfaRecoveryCodes(params: {
        userId: string;
    }): Promise<Models.MfaRecoveryCodes>;
    /**
     * Generate recovery codes used as backup for MFA flow for User ID. Recovery codes can be used as a MFA verification type in [createMfaChallenge](/docs/references/cloud/client-web/account#createMfaChallenge) method by client SDK.
     *
     * @param {string} userId - User ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.MfaRecoveryCodes>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createMfaRecoveryCodes(userId: string): Promise<Models.MfaRecoveryCodes>;
    /**
     * Generate recovery codes used as backup for MFA flow for User ID. Recovery codes can be used as a MFA verification type in [createMfaChallenge](/docs/references/cloud/client-web/account#createMfaChallenge) method by client SDK.
     *
     * @param {string} params.userId - User ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.MfaRecoveryCodes>}
     */
    createMFARecoveryCodes(params: {
        userId: string;
    }): Promise<Models.MfaRecoveryCodes>;
    /**
     * Generate recovery codes used as backup for MFA flow for User ID. Recovery codes can be used as a MFA verification type in [createMfaChallenge](/docs/references/cloud/client-web/account#createMfaChallenge) method by client SDK.
     *
     * @param {string} userId - User ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.MfaRecoveryCodes>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createMFARecoveryCodes(userId: string): Promise<Models.MfaRecoveryCodes>;
    /**
     * Update the user name by its unique ID.
     *
     * @param {string} params.userId - User ID.
     * @param {string} params.name - User name. Max length: 128 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.User<Preferences>>}
     */
    updateName<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: {
        userId: string;
        name: string;
    }): Promise<Models.User<Preferences>>;
    /**
     * Update the user name by its unique ID.
     *
     * @param {string} userId - User ID.
     * @param {string} name - User name. Max length: 128 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.User<Preferences>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateName<Preferences extends Models.Preferences = Models.DefaultPreferences>(userId: string, name: string): Promise<Models.User<Preferences>>;
    /**
     * Update the user password by its unique ID.
     *
     * @param {string} params.userId - User ID.
     * @param {string} params.password - New user password. Must be at least 8 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.User<Preferences>>}
     */
    updatePassword<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: {
        userId: string;
        password: string;
    }): Promise<Models.User<Preferences>>;
    /**
     * Update the user password by its unique ID.
     *
     * @param {string} userId - User ID.
     * @param {string} password - New user password. Must be at least 8 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.User<Preferences>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updatePassword<Preferences extends Models.Preferences = Models.DefaultPreferences>(userId: string, password: string): Promise<Models.User<Preferences>>;
    /**
     * Update the user phone by its unique ID.
     *
     * @param {string} params.userId - User ID.
     * @param {string} params.number - User phone number.
     * @throws {AppwriteException}
     * @returns {Promise<Models.User<Preferences>>}
     */
    updatePhone<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: {
        userId: string;
        number: string;
    }): Promise<Models.User<Preferences>>;
    /**
     * Update the user phone by its unique ID.
     *
     * @param {string} userId - User ID.
     * @param {string} number - User phone number.
     * @throws {AppwriteException}
     * @returns {Promise<Models.User<Preferences>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updatePhone<Preferences extends Models.Preferences = Models.DefaultPreferences>(userId: string, number: string): Promise<Models.User<Preferences>>;
    /**
     * Get the user preferences by its unique ID.
     *
     * @param {string} params.userId - User ID.
     * @throws {AppwriteException}
     * @returns {Promise<Preferences>}
     */
    getPrefs<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: {
        userId: string;
    }): Promise<Preferences>;
    /**
     * Get the user preferences by its unique ID.
     *
     * @param {string} userId - User ID.
     * @throws {AppwriteException}
     * @returns {Promise<Preferences>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getPrefs<Preferences extends Models.Preferences = Models.DefaultPreferences>(userId: string): Promise<Preferences>;
    /**
     * Update the user preferences by its unique ID. The object you pass is stored as is, and replaces any previous value. The maximum allowed prefs size is 64kB and throws error if exceeded.
     *
     * @param {string} params.userId - User ID.
     * @param {object} params.prefs - Prefs key-value JSON object.
     * @throws {AppwriteException}
     * @returns {Promise<Preferences>}
     */
    updatePrefs<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: {
        userId: string;
        prefs: object;
    }): Promise<Preferences>;
    /**
     * Update the user preferences by its unique ID. The object you pass is stored as is, and replaces any previous value. The maximum allowed prefs size is 64kB and throws error if exceeded.
     *
     * @param {string} userId - User ID.
     * @param {object} prefs - Prefs key-value JSON object.
     * @throws {AppwriteException}
     * @returns {Promise<Preferences>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updatePrefs<Preferences extends Models.Preferences = Models.DefaultPreferences>(userId: string, prefs: object): Promise<Preferences>;
    /**
     * Get the user sessions list by its unique ID.
     *
     * @param {string} params.userId - User ID.
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.SessionList>}
     */
    listSessions(params: {
        userId: string;
        total?: boolean;
    }): Promise<Models.SessionList>;
    /**
     * Get the user sessions list by its unique ID.
     *
     * @param {string} userId - User ID.
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.SessionList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listSessions(userId: string, total?: boolean): Promise<Models.SessionList>;
    /**
     * Creates a session for a user. Returns an immediately usable session object.
     *
     * If you want to generate a token for a custom authentication flow, use the [POST /users/{userId}/tokens](https://appwrite.io/docs/server/users#createToken) endpoint.
     *
     * @param {string} params.userId - User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Session>}
     */
    createSession(params: {
        userId: string;
    }): Promise<Models.Session>;
    /**
     * Creates a session for a user. Returns an immediately usable session object.
     *
     * If you want to generate a token for a custom authentication flow, use the [POST /users/{userId}/tokens](https://appwrite.io/docs/server/users#createToken) endpoint.
     *
     * @param {string} userId - User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Session>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createSession(userId: string): Promise<Models.Session>;
    /**
     * Delete all user's sessions by using the user's unique ID.
     *
     * @param {string} params.userId - User ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteSessions(params: {
        userId: string;
    }): Promise<{}>;
    /**
     * Delete all user's sessions by using the user's unique ID.
     *
     * @param {string} userId - User ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteSessions(userId: string): Promise<{}>;
    /**
     * Delete a user sessions by its unique ID.
     *
     * @param {string} params.userId - User ID.
     * @param {string} params.sessionId - Session ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteSession(params: {
        userId: string;
        sessionId: string;
    }): Promise<{}>;
    /**
     * Delete a user sessions by its unique ID.
     *
     * @param {string} userId - User ID.
     * @param {string} sessionId - Session ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteSession(userId: string, sessionId: string): Promise<{}>;
    /**
     * Update the user status by its unique ID. Use this endpoint as an alternative to deleting a user if you want to keep user's ID reserved.
     *
     * @param {string} params.userId - User ID.
     * @param {boolean} params.status - User Status. To activate the user pass `true` and to block the user pass `false`.
     * @throws {AppwriteException}
     * @returns {Promise<Models.User<Preferences>>}
     */
    updateStatus<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: {
        userId: string;
        status: boolean;
    }): Promise<Models.User<Preferences>>;
    /**
     * Update the user status by its unique ID. Use this endpoint as an alternative to deleting a user if you want to keep user's ID reserved.
     *
     * @param {string} userId - User ID.
     * @param {boolean} status - User Status. To activate the user pass `true` and to block the user pass `false`.
     * @throws {AppwriteException}
     * @returns {Promise<Models.User<Preferences>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateStatus<Preferences extends Models.Preferences = Models.DefaultPreferences>(userId: string, status: boolean): Promise<Models.User<Preferences>>;
    /**
     * List the messaging targets that are associated with a user.
     *
     * @param {string} params.userId - User ID.
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: userId, providerId, identifier, providerType
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.TargetList>}
     */
    listTargets(params: {
        userId: string;
        queries?: string[];
        total?: boolean;
    }): Promise<Models.TargetList>;
    /**
     * List the messaging targets that are associated with a user.
     *
     * @param {string} userId - User ID.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: userId, providerId, identifier, providerType
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.TargetList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listTargets(userId: string, queries?: string[], total?: boolean): Promise<Models.TargetList>;
    /**
     * Create a messaging target.
     *
     * @param {string} params.userId - User ID.
     * @param {string} params.targetId - Target ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {MessagingProviderType} params.providerType - The target provider type. Can be one of the following: `email`, `sms` or `push`.
     * @param {string} params.identifier - The target identifier (token, email, phone etc.)
     * @param {string} params.providerId - Provider ID. Message will be sent to this target from the specified provider ID. If no provider ID is set the first setup provider will be used.
     * @param {string} params.name - Target name. Max length: 128 chars. For example: My Awesome App Galaxy S23.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Target>}
     */
    createTarget(params: {
        userId: string;
        targetId: string;
        providerType: MessagingProviderType;
        identifier: string;
        providerId?: string;
        name?: string;
    }): Promise<Models.Target>;
    /**
     * Create a messaging target.
     *
     * @param {string} userId - User ID.
     * @param {string} targetId - Target ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {MessagingProviderType} providerType - The target provider type. Can be one of the following: `email`, `sms` or `push`.
     * @param {string} identifier - The target identifier (token, email, phone etc.)
     * @param {string} providerId - Provider ID. Message will be sent to this target from the specified provider ID. If no provider ID is set the first setup provider will be used.
     * @param {string} name - Target name. Max length: 128 chars. For example: My Awesome App Galaxy S23.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Target>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createTarget(userId: string, targetId: string, providerType: MessagingProviderType, identifier: string, providerId?: string, name?: string): Promise<Models.Target>;
    /**
     * Get a user's push notification target by ID.
     *
     * @param {string} params.userId - User ID.
     * @param {string} params.targetId - Target ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Target>}
     */
    getTarget(params: {
        userId: string;
        targetId: string;
    }): Promise<Models.Target>;
    /**
     * Get a user's push notification target by ID.
     *
     * @param {string} userId - User ID.
     * @param {string} targetId - Target ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Target>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getTarget(userId: string, targetId: string): Promise<Models.Target>;
    /**
     * Update a messaging target.
     *
     * @param {string} params.userId - User ID.
     * @param {string} params.targetId - Target ID.
     * @param {string} params.identifier - The target identifier (token, email, phone etc.)
     * @param {string} params.providerId - Provider ID. Message will be sent to this target from the specified provider ID. If no provider ID is set the first setup provider will be used.
     * @param {string} params.name - Target name. Max length: 128 chars. For example: My Awesome App Galaxy S23.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Target>}
     */
    updateTarget(params: {
        userId: string;
        targetId: string;
        identifier?: string;
        providerId?: string;
        name?: string;
    }): Promise<Models.Target>;
    /**
     * Update a messaging target.
     *
     * @param {string} userId - User ID.
     * @param {string} targetId - Target ID.
     * @param {string} identifier - The target identifier (token, email, phone etc.)
     * @param {string} providerId - Provider ID. Message will be sent to this target from the specified provider ID. If no provider ID is set the first setup provider will be used.
     * @param {string} name - Target name. Max length: 128 chars. For example: My Awesome App Galaxy S23.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Target>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateTarget(userId: string, targetId: string, identifier?: string, providerId?: string, name?: string): Promise<Models.Target>;
    /**
     * Delete a messaging target.
     *
     * @param {string} params.userId - User ID.
     * @param {string} params.targetId - Target ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteTarget(params: {
        userId: string;
        targetId: string;
    }): Promise<{}>;
    /**
     * Delete a messaging target.
     *
     * @param {string} userId - User ID.
     * @param {string} targetId - Target ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteTarget(userId: string, targetId: string): Promise<{}>;
    /**
     * Returns a token with a secret key for creating a session. Use the user ID and secret and submit a request to the [PUT /account/sessions/token](https://appwrite.io/docs/references/cloud/client-web/account#createSession) endpoint to complete the login process.
     *
     *
     * @param {string} params.userId - User ID.
     * @param {number} params.length - Token length in characters. The default length is 6 characters
     * @param {number} params.expire - Token expiration period in seconds. The default expiration is 15 minutes.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Token>}
     */
    createToken(params: {
        userId: string;
        length?: number;
        expire?: number;
    }): Promise<Models.Token>;
    /**
     * Returns a token with a secret key for creating a session. Use the user ID and secret and submit a request to the [PUT /account/sessions/token](https://appwrite.io/docs/references/cloud/client-web/account#createSession) endpoint to complete the login process.
     *
     *
     * @param {string} userId - User ID.
     * @param {number} length - Token length in characters. The default length is 6 characters
     * @param {number} expire - Token expiration period in seconds. The default expiration is 15 minutes.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Token>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createToken(userId: string, length?: number, expire?: number): Promise<Models.Token>;
    /**
     * Update the user email verification status by its unique ID.
     *
     * @param {string} params.userId - User ID.
     * @param {boolean} params.emailVerification - User email verification status.
     * @throws {AppwriteException}
     * @returns {Promise<Models.User<Preferences>>}
     */
    updateEmailVerification<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: {
        userId: string;
        emailVerification: boolean;
    }): Promise<Models.User<Preferences>>;
    /**
     * Update the user email verification status by its unique ID.
     *
     * @param {string} userId - User ID.
     * @param {boolean} emailVerification - User email verification status.
     * @throws {AppwriteException}
     * @returns {Promise<Models.User<Preferences>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateEmailVerification<Preferences extends Models.Preferences = Models.DefaultPreferences>(userId: string, emailVerification: boolean): Promise<Models.User<Preferences>>;
    /**
     * Update the user phone verification status by its unique ID.
     *
     * @param {string} params.userId - User ID.
     * @param {boolean} params.phoneVerification - User phone verification status.
     * @throws {AppwriteException}
     * @returns {Promise<Models.User<Preferences>>}
     */
    updatePhoneVerification<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: {
        userId: string;
        phoneVerification: boolean;
    }): Promise<Models.User<Preferences>>;
    /**
     * Update the user phone verification status by its unique ID.
     *
     * @param {string} userId - User ID.
     * @param {boolean} phoneVerification - User phone verification status.
     * @throws {AppwriteException}
     * @returns {Promise<Models.User<Preferences>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updatePhoneVerification<Preferences extends Models.Preferences = Models.DefaultPreferences>(userId: string, phoneVerification: boolean): Promise<Models.User<Preferences>>;
}
