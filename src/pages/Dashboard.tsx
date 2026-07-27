import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";

import MetricCard from "../features/dashboard/components/MetricCard";

import SatelliteCard 
from "../features/satellites/components/SatelliteCard";

import {
useSatellites
} from "../features/satellites/hooks/useSatellites";

import TelemetryChart 
from "../features/telemetry/components/TelemetryChart";

export default function Dashboard(){


const {
data:satellites,
isLoading
}=useSatellites();


const active =
satellites?.filter(
s=>s.status==="ACTIVE"
).length ?? 0;


const warnings =
satellites?.filter(
s=>s.status==="WARNING"
).length ?? 0;



return (

<div
className="
flex
min-h-screen
bg-slate-950
text-white
"
>


<Sidebar/>


<div
className="
flex-1
"
>

<Header/>


<main className="p-8">


<h1
className="
text-3xl
font-bold
mb-8
"
>
Satellite Operations Dashboard
</h1>



<div
className="
grid
md:grid-cols-3
gap-6
mb-10
"
>

<MetricCard
title="Total Satellites"
value={`${satellites?.length ?? 0}`}
/>


<MetricCard
title="Active"
value={`${active}`}
/>


<MetricCard
title="Warnings"
value={`${warnings}`}
/>

<TelemetryChart />
</div>



{
isLoading ?

<p>
Loading...
</p>


:

<div
className="
grid
md:grid-cols-3
gap-6
"
>

{
satellites?.map(
satellite=>(

<SatelliteCard
key={satellite.id}
satellite={satellite}
/>

)

)
}


</div>

}


</main>


</div>


</div>

)

}