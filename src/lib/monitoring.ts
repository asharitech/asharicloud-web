// Monitoring setup for error tracking and performance monitoring
// This can be adapted for Sentry, Datadog, or other monitoring services

export const initMonitoring = () => {
  // Only initialize in production
  if (process.env.NODE_ENV !== "production") {
    return;
  }

  // Example Sentry initialization (uncomment when ready)
  /*
  if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
    import('@sentry/nextjs').then(({ init }) => {
      init({
        dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
        environment: process.env.NODE_ENV,
        tracesSampleRate: 0.1,
        debug: false,
        replaysOnErrorSampleRate: 1.0,
        replaysSessionSampleRate: 0.1,
        integrations: [
          new Sentry.BrowserTracing({
            routingInstrumentation: Sentry.nextRouterInstrumentation,
          }),
          new Sentry.Replay({
            maskAllText: true,
            blockAllMedia: true,
          }),
        ],
      });
    });
  }
  */

  // Custom error handler
  window.addEventListener("error", (event) => {
    console.error("Global error:", event.error);
    // Send to monitoring service
  });

  window.addEventListener("unhandledrejection", (event) => {
    console.error("Unhandled promise rejection:", event.reason);
    // Send to monitoring service
  });
};

// Performance monitoring utilities
export const measurePerformance = (name: string, fn: () => void) => {
  if (typeof window === "undefined") return fn();

  const startTime = performance.now();
  const result = fn();
  const endTime = performance.now();

  const duration = endTime - startTime;
  console.log(`[Performance] ${name}: ${duration.toFixed(2)}ms`);

  // Send to monitoring service
  return result;
};

// Web Vitals tracking
export const trackWebVitals = (metric: {
  name: string;
  value: number;
  rating: string;
}) => {
  const { name, value, rating } = metric;

  // Log to console in development
  if (process.env.NODE_ENV === "development") {
    console.log(`[Web Vitals] ${name}: ${value} (${rating})`);
  }

  // Send to monitoring service in production
  if (process.env.NODE_ENV === "production") {
    // Example: send to analytics or monitoring service
  }
};
