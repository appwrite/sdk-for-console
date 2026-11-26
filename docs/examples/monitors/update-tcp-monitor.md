```javascript
import { Client, Monitors, MonitorSeverity, Query } from '@appwrite.io/console';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const monitors = new Monitors(client);

const result = await monitors.updateTcpMonitor({
    monitorId: '<MONITOR_ID>',
    name: '<NAME>', // optional
    host: 'db.example.com', // optional
    port: 5432, // optional
    rules: [Query.greaterThan('latency', 1000)], // optional
    interval: 60, // optional
    timeout: 10, // optional
    cooldown: 300, // optional
    enabled: true, // optional
    notify: ['owner'], // optional
    severity: MonitorSeverity.Info, // optional
    escalationId: '<ESCALATION_ID>', // optional
});

console.log(result);
```
