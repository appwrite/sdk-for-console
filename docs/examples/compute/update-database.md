```javascript
import { Client, Compute } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const compute = new Compute(client);

const result = await compute.updateDatabase({
    databaseId: '<DATABASE_ID>',
    name: '<NAME>', // optional
    status: 'ready', // optional
    specification: '<SPECIFICATION>', // optional
    cpu: 125, // optional
    memory: 128, // optional
    storage: 1, // optional
    storageClass: 'ssd', // optional
    replicas: 0, // optional
    highAvailabilitySyncMode: 'async', // optional
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
    poolerEnabled: false, // optional
    metricsEnabled: false, // optional
    metricsTraceSampleRate: null, // optional
    metricsSlowQueryLogThresholdMs: 0, // optional
    sqlApiEnabled: false, // optional
    sqlApiAllowedStatements: [], // optional
    sqlApiMaxRows: 1, // optional
    sqlApiMaxBytes: 1024, // optional
    sqlApiTimeoutSeconds: 1 // optional
});

console.log(result);
```
