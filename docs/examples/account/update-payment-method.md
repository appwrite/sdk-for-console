import { Client, Account } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const account = new Account(client);

const result = await account.updatePaymentMethod(
    '<PAYMENT_METHOD_ID>', // paymentMethodId
    1, // expiryMonth
    2025 // expiryYear
);

console.log(result);
