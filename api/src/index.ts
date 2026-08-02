import Fastify from "fastify";
import cors from "@fastify/cors";
import { getTLE } from "./services/celestrak.js";
import { calculatePosition } from "./services/propagation.js";
import satelliteRoutes from "./routes/satellites.js";

const app = Fastify({
  logger: true
});

async function start() {
  try {
    await app.register(cors, {
      origin: true
    });

    app.get("/", async () => {
      return {
        name: "Satellite Ops API",
        status: "online",
        version: "1.0.0"
      };
    });

app.get("/test-celestrak", async () => {
  try {
    const response = await fetch(
      "https://celestrak.org/NORAD/elements/gp.php?CATNR=25544&FORMAT=TLE",
      {
        signal: AbortSignal.timeout(15000)
      }
    );

    return {
      status: response.status,
      body: await response.text()
    };
  } catch (error) {
    return {
      error: error instanceof Error ? error.message : "Unknown error"
    };
  }
});

app.get("/test-position", async () => {
  const tle = await getTLE(25544);

  const position = calculatePosition(tle);

  return position;
});

    await app.register(satelliteRoutes, {
      prefix: "/api"
    });

    await app.listen({
      port: Number(process.env.PORT) || 4000,
      host: "0.0.0.0"
    });

  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
}

start();