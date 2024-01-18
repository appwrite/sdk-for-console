import { Client, Account } from "@appwrite.io/console";

const client = new Client();

const account = new Account(client);

client
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
;

const promise = account.updatePushTarget('[TARGET_ID]', '[IDENTIFIER]');

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});