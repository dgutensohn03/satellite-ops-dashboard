import { getFleet } from "../services/fleetService.js";
const routes = async (app) => {
    app.get("/fleet", async () => {
        return getFleet();
    });
};
export default routes;
