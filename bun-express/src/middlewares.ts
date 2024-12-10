import promBundle from "express-prom-bundle";

/** Prometheus middleware */
export const metricsMiddleware = promBundle({
  includeMethod: true, // Add HTTP methods to metrics
  includePath: true, // Add request paths to metrics
  includeStatusCode: true, // Add HTTP status codes to metrics
  includeUp: true, // Include an "up" metric to indicate the app is running
  buckets: [0.1, 0.3, 1.5, 10], // Customize histogram buckets
  // metricType: "summary", // Use summaries instead of histograms
  promClient: {
    collectDefaultMetrics: {}, // Enable default metrics collection
  },
});
