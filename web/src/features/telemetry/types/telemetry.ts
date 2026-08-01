export interface TelemetryPoint {

  timestamp:string;

  battery:number;

  signal:number;

  altitude:number;

}


export interface SatelliteTelemetry {

  satelliteId:string;

  points:TelemetryPoint[];

}