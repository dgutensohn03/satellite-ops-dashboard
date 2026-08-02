import { fleet } from "../config/fleet.js";
import { getTLE } from "./celestrak.js";
import { calculatePosition } from "./propagation.js";
import type { SatellitePosition } from "./propagation.js";

export interface SatelliteTelemetry {
  name: string;
  noradId: number;
  position: SatellitePosition | null;
  status: "online" | "unavailable";
  error?: string;
}

export async function getFleet(): Promise<SatelliteTelemetry[]> {
  return Promise.all(
    fleet.map(async (satellite) => {
      try {
        const tle = await getTLE(satellite.noradId);
        const position = calculatePosition(tle);

        return {
          name: satellite.name,
          noradId: satellite.noradId,
          position,
          status: position ? "online" : "unavailable"
        };
      } catch (error) {
        console.error(
          `Failed to fetch telemetry for ${satellite.name}:`,
          error
        );

        return {
          name: satellite.name,
          noradId: satellite.noradId,
          position: null,
          status: "unavailable",
          error:
            error instanceof Error
              ? error.message
              : "Unknown error"
        };
      }
    })
  );
}