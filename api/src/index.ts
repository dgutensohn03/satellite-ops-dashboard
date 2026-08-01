import Fastify from "fastify";
import cors from "@fastify/cors";

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