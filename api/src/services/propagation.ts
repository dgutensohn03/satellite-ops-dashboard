import * as satellite from "satellite.js";

export interface SatellitePosition {
  latitude: number;
  longitude: number;
  altitude: number;
  velocity: number;
}

export function calculatePosition(tle: string): SatellitePosition | null {
  const lines = tle.trim().split("\n");

  if (lines.length < 3) {
    throw new Error("Invalid TLE");
  }

  const line1 = lines[1];
  const line2 = lines[2];

  const satrec = satellite.twoline2satrec(line1, line2);

  const now = new Date();

  const positionAndVelocity = satellite.propagate(satrec, now);

  if (!positionAndVelocity) {
    return null;
  }

  if (!positionAndVelocity.position || !positionAndVelocity.velocity) {
    throw new Error("Unable to propagate orbit");
  }

  const gmst = satellite.gstime(now);

  const geo = satellite.eciToGeodetic(
    positionAndVelocity.position,
    gmst
  );

  const latitude = satellite.radiansToDegrees(geo.latitude);
  const longitude = satellite.radiansToDegrees(geo.longitude);

  const altitude = geo.height;

  const velocityVector = positionAndVelocity.velocity;

  const velocity = Math.sqrt(
    velocityVector.x ** 2 +
    velocityVector.y ** 2 +
    velocityVector.z ** 2
  );

  return {
    latitude,
    longitude,
    altitude,
    velocity
  };
}