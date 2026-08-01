import type { Satellite } from "../types/satellite";


const satellites: Satellite[] = [

{
id:"sat-001",
name:"Explorer-01",
status:"ACTIVE",
battery:87,
signal:96,
altitude:420,
latitude:42.3,
longitude:-71.2,
velocity:27500,
lastContact:"2 minutes ago",
alerts:[
"Orbit adjustment completed"
]
},


{
id:"sat-002",
name:"Voyager-02",
status:"WARNING",
battery:42,
signal:61,
altitude:510,
latitude:18.2,
longitude:33.5,
velocity:27800,
lastContact:"15 minutes ago",
alerts:[
"Communication delay detected"
]
},


{
id:"sat-003",
name:"Atlas-03",
status:"OFFLINE",
battery:12,
signal:0,
altitude:390,
latitude:-22.4,
longitude:110.5,
velocity:0,
lastContact:"3 hours ago",
alerts:[
"Lost communication"
]
}

];


export async function getSatellites(){

return new Promise<Satellite[]>((resolve)=>{

setTimeout(()=>{

resolve(satellites);

},500);


});

}