import { fleet } from "../config/fleet.js";
import { getTLE } from "./celestrak.js";
import { calculatePosition } from "./propagation.js";
import type { SatellitePosition } from "./propagation.js";

export interface SatelliteTelemetry {
  name: string;
  noradId: number;
  position: SatellitePosition | null;
}

export async function getFleet(): Promise<SatelliteTelemetry[]> {
  return Promise.all(
    fleet.map(async (satellite) => {
      const tle = await getTLE(satellite.noradId);

      const position = calculatePosition(tle);

      return {
        name: satellite.name,
        noradId: satellite.noradId,
        position
      };
    })
  );
}