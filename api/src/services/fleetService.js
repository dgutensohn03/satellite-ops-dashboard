import { fleet } from "../config/fleet.js";
import { getTLE } from "./celestrak.js";
import { calculatePosition } from "./propagation.js";
export async function getFleet() {
    return Promise.all(fleet.map(async (satellite) => {
        const tle = await getTLE(satellite.noradId);
        const position = calculatePosition(tle);
        return {
            name: satellite.name,
            noradId: satellite.noradId,
            position
        };
    }));
}
