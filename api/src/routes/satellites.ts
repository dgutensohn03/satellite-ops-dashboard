import { FastifyPluginAsync } from "fastify";
import { getFleet } from "../services/fleetService.js";

const routes: FastifyPluginAsync = async (app) => {
  app.get("/satellites", async () => {
    return getFleet();
  });
};

export default routes;