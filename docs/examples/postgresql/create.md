```javascript
import { Client, Postgresql } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const postgresql = new Postgresql(client);

const result = await postgresql.create({
    databaseId: '<DATABASE_ID>',
    name: '<NAME>',
    version: '17', // optional
    specification: '<SPECIFICATION>', // optional
    replicas: 0, // optional
    syncMode: 'async', // optional
    standbyRegion: '<STANDBY_REGION>', // optional
    networkIdleTimeoutSeconds: 60, // optional
    networkIPAllowlist: [], // optional
    idleTimeoutMinutes: 5, // optional
    pitr: false, // optional
    pitrRetentionDays: 1, // optional
    storageAutoscaling: false, // optional
    storageAutoscalingThresholdPercent: 50, // optional
    storageAutoscalingMaxGb: 0, // optional
    api: 'tablesdb' // optional
});

console.log(result);
```
