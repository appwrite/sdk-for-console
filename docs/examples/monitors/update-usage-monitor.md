```javascript
import { Client, Monitors, MonitorSeverity } from '@appwrite.io/console';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const monitors = new Monitors(client);

const result = await monitors.updateUsageMonitor({
    monitorId: '<MONITOR_ID>',
    name: '<NAME>', // optional
    rules: [
        '{"method":"greaterThan", "attribute":"network.outbound", "values":[5000000000]}',
    ], // optional
    window: 60, // optional
    cooldown: 300, // optional
    enabled: false, // optional
    notify: ['owner'], // optional
    severity: MonitorSeverity.Info, // optional
    escalationId: '<ESCALATION_ID>', // optional
});

console.log(result);
```
