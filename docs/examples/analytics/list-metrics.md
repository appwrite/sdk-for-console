```javascript
import {
    Client,
    Analytics,
    AnalyticsInterval,
    AnalyticsDimension,
} from '@appwrite.io/console';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const analytics = new Analytics(client);

const result = await analytics.listMetrics({
    propertyId: '<PROPERTY_ID>',
    queries: [], // optional
    interval: AnalyticsInterval.OneHour, // optional
    dimensions: [AnalyticsDimension.Country], // optional
    dateRange: '<DATE_RANGE>', // optional
    startAt: '2020-10-15T06:38:00.000+00:00', // optional
    endAt: '2020-10-15T06:38:00.000+00:00', // optional
    limit: 1, // optional
});

console.log(result);
```
