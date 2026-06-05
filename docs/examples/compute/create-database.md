```javascript
import { Client, Compute } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const compute = new Compute(client);

const result = await compute.createDatabase({
    databaseId: '<DATABASE_ID>',
    name: '<NAME>',
    database: '<DATABASE>', // optional
    engine: 'postgres', // optional
    version: '17', // optional
    region: 'fra', // optional
    type: 'shared', // optional
    specification: '<SPECIFICATION>', // optional
    backend: 'prisma', // optional
    cpu: 125, // optional
    memory: 128, // optional
    storage: 1, // optional
    storageClass: 'ssd', // optional
    storageMaxGb: 0, // optional
    highAvailability: false, // optional
    highAvailabilityReplicaCount: 0, // optional
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
    metricsEnabled: false, // optional
    poolerEnabled: false // optional
});

console.log(result);
```
