import { Client, Projects, SmsTemplateType, SmsTemplateLocale } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('&lt;YOUR_PROJECT_ID&gt;'); // Your project ID

const projects = new Projects(client);

const result = await projects.updateSmsTemplate(
    '<PROJECT_ID>', // projectId
    SmsTemplateType.Verification, // type
    SmsTemplateLocale.Af, // locale
    '<MESSAGE>' // message
);

console.log(response);
