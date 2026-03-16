import { Client } from '../client';
import { Channel, ActionableChannel, ResolvedChannel } from '../channel';
import { Query } from '../query';
export declare type RealtimeSubscription = {
    close: () => Promise<void>;
};
export declare type RealtimeCallback<T = any> = {
    channels: Set<string>;
    queries: string[];
    callback: (event: RealtimeResponseEvent<T>) => void;
};
export declare type RealtimeResponse = {
    type: string;
    data?: any;
};
export declare type RealtimeResponseEvent<T = any> = {
    events: string[];
    channels: string[];
    timestamp: string;
    payload: T;
    subscriptions: string[];
};
export declare type RealtimeResponseConnected = {
    channels: string[];
    user?: object;
    subscriptions?: {
        [slot: string]: string;
    };
};
export declare type RealtimeRequest = {
    type: 'authentication';
    data: {
        session: string;
    };
};
export declare enum RealtimeCode {
    NORMAL_CLOSURE = 1000,
    POLICY_VIOLATION = 1008,
    UNKNOWN_ERROR = -1
}
export declare class Realtime {
    private readonly TYPE_ERROR;
    private readonly TYPE_EVENT;
    private readonly TYPE_PONG;
    private readonly TYPE_CONNECTED;
    private readonly DEBOUNCE_MS;
    private readonly HEARTBEAT_INTERVAL;
    private client;
    private socket?;
    private activeSubscriptions;
    private slotToSubscriptionId;
    private subscriptionIdToSlot;
    private heartbeatTimer?;
    private subCallDepth;
    private reconnectAttempts;
    private subscriptionsCounter;
    private connectionId;
    private reconnect;
    private onErrorCallbacks;
    private onCloseCallbacks;
    private onOpenCallbacks;
    constructor(client: Client);
    /**
     * Register a callback function to be called when an error occurs
     *
     * @param {Function} callback - Callback function to handle errors
     * @returns {void}
     */
    onError(callback: (error?: Error, statusCode?: number) => void): void;
    /**
     * Register a callback function to be called when the connection closes
     *
     * @param {Function} callback - Callback function to handle connection close
     * @returns {void}
     */
    onClose(callback: () => void): void;
    /**
     * Register a callback function to be called when the connection opens
     *
     * @param {Function} callback - Callback function to handle connection open
     * @returns {void}
     */
    onOpen(callback: () => void): void;
    private startHeartbeat;
    private stopHeartbeat;
    private createSocket;
    private closeSocket;
    private getTimeout;
    private sleep;
    /**
     * Convert a channel value to a string
     *
     * @private
     * @param {string | Channel<any> | ActionableChannel | ResolvedChannel} channel - Channel value (string or Channel builder instance)
     * @returns {string} Channel string representation
     */
    private channelToString;
    /**
     * Subscribe to a single channel
     *
     * @param {string | Channel<any> | ActionableChannel | ResolvedChannel} channel - Channel name to subscribe to (string or Channel builder instance)
     * @param {Function} callback - Callback function to handle events
     * @returns {Promise<RealtimeSubscription>} Subscription object with close method
     */
    subscribe(channel: string | Channel<any> | ActionableChannel | ResolvedChannel, callback: (event: RealtimeResponseEvent<any>) => void, queries?: (string | Query)[]): Promise<RealtimeSubscription>;
    /**
     * Subscribe to multiple channels
     *
     * @param {(string | Channel<any> | ActionableChannel | ResolvedChannel)[]} channels - Array of channel names to subscribe to (strings or Channel builder instances)
     * @param {Function} callback - Callback function to handle events
     * @returns {Promise<RealtimeSubscription>} Subscription object with close method
     */
    subscribe(channels: (string | Channel<any> | ActionableChannel | ResolvedChannel)[], callback: (event: RealtimeResponseEvent<any>) => void, queries?: (string | Query)[]): Promise<RealtimeSubscription>;
    /**
     * Subscribe to a single channel with typed payload
     *
     * @param {string | Channel<any> | ActionableChannel | ResolvedChannel} channel - Channel name to subscribe to (string or Channel builder instance)
     * @param {Function} callback - Callback function to handle events with typed payload
     * @returns {Promise<RealtimeSubscription>} Subscription object with close method
     */
    subscribe<T>(channel: string | Channel<any> | ActionableChannel | ResolvedChannel, callback: (event: RealtimeResponseEvent<T>) => void, queries?: (string | Query)[]): Promise<RealtimeSubscription>;
    /**
     * Subscribe to multiple channels with typed payload
     *
     * @param {(string | Channel<any> | ActionableChannel | ResolvedChannel)[]} channels - Array of channel names to subscribe to (strings or Channel builder instances)
     * @param {Function} callback - Callback function to handle events with typed payload
     * @returns {Promise<RealtimeSubscription>} Subscription object with close method
     */
    subscribe<T>(channels: (string | Channel<any> | ActionableChannel | ResolvedChannel)[], callback: (event: RealtimeResponseEvent<T>) => void, queries?: (string | Query)[]): Promise<RealtimeSubscription>;
    private handleMessage;
    private handleResponseConnected;
    private handleResponseError;
    private handleResponseEvent;
}
