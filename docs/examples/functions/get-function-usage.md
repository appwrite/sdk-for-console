import { Client, Functions, FunctionUsageRange } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('&lt;YOUR_PROJECT_ID&gt;'); // Your project ID

const functions = new Functions(client);

const result = await functions.getFunctionUsage(
    '<FUNCTION_ID>', // functionId
    FunctionUsageRange.TwentyFourHours // range (optional)
);

console.log(response);
