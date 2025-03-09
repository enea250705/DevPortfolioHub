import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  const ip = req.ip || req.socket.remoteAddress || 'unknown';
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  // Add request ID for better tracking
  const requestId = Math.random().toString(36).substring(2, 10);
  (req as any).requestId = requestId;
  
  // Log incoming request
  if (path.startsWith("/api")) {
    log(`[${requestId}] 🔵 Request: ${req.method} ${path} from ${ip}`);
  }

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      // Color status codes based on response
      let statusColor = '🟢'; // Green for success
      if (res.statusCode >= 400 && res.statusCode < 500) {
        statusColor = '🟠'; // Orange for client errors
      } else if (res.statusCode >= 500) {
        statusColor = '🔴'; // Red for server errors
      }
      
      let logLine = `[${requestId}] ${statusColor} Response: ${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      
      if (capturedJsonResponse) {
        // Only include useful parts of the response for logging
        const sanitizedResponse = { ...capturedJsonResponse };
        if (sanitizedResponse.message && typeof sanitizedResponse.message === 'string') {
          sanitizedResponse.message = sanitizedResponse.message.length > 50 
            ? sanitizedResponse.message.substring(0, 50) + '...' 
            : sanitizedResponse.message;
        }
        logLine += ` :: ${JSON.stringify(sanitizedResponse)}`;
      }

      if (logLine.length > 120) {
        logLine = logLine.slice(0, 119) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // ALWAYS serve the app on port 5000
  // this serves both the API and the client
  const port = 5000;
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true,
  }, () => {
    log(`serving on port ${port}`);
  });
})();
