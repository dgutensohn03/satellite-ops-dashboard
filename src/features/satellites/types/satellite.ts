export type SatelliteStatus =
  | "ACTIVE"
  | "WARNING"
  | "OFFLINE";


export interface Satellite {

  id: string;

  name: string;

  status: SatelliteStatus;

  battery: number;

  signal: number;

  altitude: number;

  latitude: number;

  longitude: number;

  velocity: number;

  lastContact: string;

  alerts: string[];

}