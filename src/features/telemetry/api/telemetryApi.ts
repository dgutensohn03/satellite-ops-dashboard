import type {
  SatelliteTelemetry
} from "../types/telemetry";


const telemetry:SatelliteTelemetry = {

satelliteId:"sat-001",

points:[

{
timestamp:"10:00",
battery:92,
signal:98,
altitude:420
},

{
timestamp:"10:15",
battery:90,
signal:96,
altitude:421
},

{
timestamp:"10:30",
battery:89,
signal:95,
altitude:419
},

{
timestamp:"10:45",
battery:87,
signal:96,
altitude:420
},

{
timestamp:"11:00",
battery:86,
signal:94,
altitude:422
}

]

};


export async function getTelemetry(){

return new Promise<SatelliteTelemetry>((resolve)=>{

setTimeout(()=>{

resolve(telemetry);

},400);

});

}