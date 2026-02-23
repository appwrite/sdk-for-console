declare type OperatorValuesSingle = string | number | boolean;
export declare type OperatorValuesList = string[] | number[] | boolean[] | any[];
export declare type OperatorValues = OperatorValuesSingle | OperatorValuesList;
export declare enum Condition {
    Equal = "equal",
    NotEqual = "notEqual",
    GreaterThan = "greaterThan",
    GreaterThanEqual = "greaterThanEqual",
    LessThan = "lessThan",
    LessThanEqual = "lessThanEqual",
    Contains = "contains",
    IsNull = "isNull",
    IsNotNull = "isNotNull"
}
/**
 * Helper class to generate operator strings for atomic operations.
 */
export declare class Operator {
    method: string;
    values: OperatorValuesList | undefined;
    /**
     * Constructor for Operator class.
     *
     * @param {string} method
     * @param {OperatorValues} values
     */
    constructor(method: string, values?: OperatorValues);
    /**
     * Convert the operator object to a JSON string.
     *
     * @returns {string}
     */
    toString(): string;
    /**
     * Increment a numeric attribute by a specified value.
     *
     * @param {number} value
     * @param {number} max
     * @returns {string}
     */
    static increment: (value?: number, max?: number) => string;
    /**
     * Decrement a numeric attribute by a specified value.
     *
     * @param {number} value
     * @param {number} min
     * @returns {string}
     */
    static decrement: (value?: number, min?: number) => string;
    /**
     * Multiply a numeric attribute by a specified factor.
     *
     * @param {number} factor
     * @param {number} max
     * @returns {string}
     */
    static multiply: (factor: number, max?: number) => string;
    /**
     * Divide a numeric attribute by a specified divisor.
     *
     * @param {number} divisor
     * @param {number} min
     * @returns {string}
     */
    static divide: (divisor: number, min?: number) => string;
    /**
     * Apply modulo operation on a numeric attribute.
     *
     * @param {number} divisor
     * @returns {string}
     */
    static modulo: (divisor: number) => string;
    /**
     * Raise a numeric attribute to a specified power.
     *
     * @param {number} exponent
     * @param {number} max
     * @returns {string}
     */
    static power: (exponent: number, max?: number) => string;
    /**
     * Append values to an array attribute.
     *
     * @param {any[]} values
     * @returns {string}
     */
    static arrayAppend: (values: any[]) => string;
    /**
     * Prepend values to an array attribute.
     *
     * @param {any[]} values
     * @returns {string}
     */
    static arrayPrepend: (values: any[]) => string;
    /**
     * Insert a value at a specific index in an array attribute.
     *
     * @param {number} index
     * @param {any} value
     * @returns {string}
     */
    static arrayInsert: (index: number, value: any) => string;
    /**
     * Remove a value from an array attribute.
     *
     * @param {any} value
     * @returns {string}
     */
    static arrayRemove: (value: any) => string;
    /**
     * Remove duplicate values from an array attribute.
     *
     * @returns {string}
     */
    static arrayUnique: () => string;
    /**
     * Keep only values that exist in both the current array and the provided array.
     *
     * @param {any[]} values
     * @returns {string}
     */
    static arrayIntersect: (values: any[]) => string;
    /**
     * Remove values from the array that exist in the provided array.
     *
     * @param {any[]} values
     * @returns {string}
     */
    static arrayDiff: (values: any[]) => string;
    /**
     * Filter array values based on a condition.
     *
     * @param {Condition} condition
     * @param {any} value
     * @returns {string}
     */
    static arrayFilter: (condition: Condition, value?: any) => string;
    /**
     * Concatenate a value to a string or array attribute.
     *
     * @param {any} value
     * @returns {string}
     */
    static stringConcat: (value: any) => string;
    /**
     * Replace occurrences of a search string with a replacement string.
     *
     * @param {string} search
     * @param {string} replace
     * @returns {string}
     */
    static stringReplace: (search: string, replace: string) => string;
    /**
     * Toggle a boolean attribute.
     *
     * @returns {string}
     */
    static toggle: () => string;
    /**
     * Add days to a date attribute.
     *
     * @param {number} days
     * @returns {string}
     */
    static dateAddDays: (days: number) => string;
    /**
     * Subtract days from a date attribute.
     *
     * @param {number} days
     * @returns {string}
     */
    static dateSubDays: (days: number) => string;
    /**
     * Set a date attribute to the current date and time.
     *
     * @returns {string}
     */
    static dateSetNow: () => string;
}
export {};
