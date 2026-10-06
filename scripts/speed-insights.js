// Initialize Vercel Speed Insights
import { injectSpeedInsights } from '../node_modules/@vercel/speed-insights/dist/index.mjs';

// Inject Speed Insights tracking script
injectSpeedInsights({
  framework: 'vanilla',
  debug: false
});
