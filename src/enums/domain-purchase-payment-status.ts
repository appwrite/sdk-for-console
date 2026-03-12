export enum DomainPurchasePaymentStatus {
    Pending = 'pending',
    PendingConfirmation = 'pending_confirmation',
    PendingPaymentProcessing = 'pending_payment_processing',
    Authorized = 'authorized',
    Captured = 'captured',
    Failed = 'failed',
    CaptureFailed = 'capture_failed',
    RenewalCaptureFailed = 'renewal_capture_failed',
}