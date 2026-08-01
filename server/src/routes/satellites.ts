import { FastifyPluginAsync } from "fastify";
import { getFleet } from "../services/fleetService";

const routes: FastifyPluginAsync = async (app) => {
  app.get("/fleet", async () => {
    return getFleet();
  });
};

export default routes;