```javascript
import { Client, Console, ProjectEmailTemplateId, ProjectEmailTemplateLocale } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const xconsole = new Console(client);

const result = await xconsole.getEmailTemplate({
    templateId: ProjectEmailTemplateId.Verification,
    locale: ProjectEmailTemplateLocale.Af // optional
});

console.log(result);
```
