import Fastify from "fastify";
import cors from "@fastify/cors";
import satelliteRoutes from "./routes/satellites.js";
const app = Fastify({
    logger: true
});
async function start() {
    await app.register(cors, {
        origin: true
    });
    app.register(satelliteRoutes, {
        prefix: "/api"
    });
    await app.listen({
        port: 4000,
        host: "0.0.0.0"
    });
}
start();
