import { Client, Proxy } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('&lt;YOUR_PROJECT_ID&gt;'); // Your project ID

const proxy = new Proxy(client);

const result = await proxy.getRule(
    '<RULE_ID>' // ruleId
);

console.log(response);
