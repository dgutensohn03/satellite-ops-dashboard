import { fleet } from "../config/fleet";
import { getTLE } from "./celestrak";
import { calculatePosition } from "./propagation";

export async function getFleet() {
  return Promise.all(
    fleet.map(async (satellite) => {
      const tle = await getTLE(satellite.noradId);

      const position = calculatePosition(tle);

      return {
        noradId: satellite.noradId,
        name: satellite.name,
        ...position
      };
    })
  );
}