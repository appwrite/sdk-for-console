```javascript
import { Client, Mysql } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const mysql = new Mysql(client);

const result = await mysql.create({
    databaseId: '<DATABASE_ID>',
    name: '<NAME>',
    database: '<DATABASE>', // optional
    engine: 'mysql', // optional
    version: '17', // optional
    specification: '<SPECIFICATION>', // optional
    backend: 'prisma', // optional
    cpu: 125, // optional
    memory: 128, // optional
    storage: 1, // optional
    storageClass: 'ssd', // optional
    storageMaxGb: 0, // optional
    replicas: 0, // optional
    syncMode: 'async', // optional
    networkMaxConnections: 10, // optional
    networkIdleTimeoutSeconds: 60, // optional
    networkIPAllowlist: [], // optional
    idleTimeoutMinutes: 5, // optional
    backupEnabled: false, // optional
    backupPitr: false, // optional
    backupCron: '', // optional
    backupRetentionDays: 1, // optional
    pitrRetentionDays: 1, // optional
    storageAutoscaling: false, // optional
    storageAutoscalingThresholdPercent: 50, // optional
    storageAutoscalingMaxGb: 0, // optional
    metricsEnabled: false, // optional
    poolerEnabled: false, // optional
    api: 'nativedb' // optional
});

console.log(result);
```
