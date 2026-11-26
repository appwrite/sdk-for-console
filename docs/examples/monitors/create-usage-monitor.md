```javascript
import { Client, Monitors, MonitorSeverity, Query } from '@appwrite.io/console';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const monitors = new Monitors(client);

const result = await monitors.createUsageMonitor({
    monitorId: '<MONITOR_ID>',
    name: '<NAME>',
    rules: [Query.greaterThan('network.outbound', 5000000000)],
    window: 3600, // optional
    cooldown: 1800, // optional
    enabled: true, // optional
    notify: ['owner'], // optional
    severity: MonitorSeverity.Info, // optional
    escalationId: '<ESCALATION_ID>', // optional
});

console.log(result);
```
