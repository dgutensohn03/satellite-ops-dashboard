import Header from "../components/layout/Header";

import SatelliteCard 
from "../features/satellites/components/SatelliteCard";

import {
useSatellites
} from "../features/satellites/hooks/useSatellites";


export default function Dashboard(){


const {
data:satellites,
isLoading
}=useSatellites();



return (

<div
className="
min-h-screen
bg-slate-950
text-white
"
>

<Header />


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



{
isLoading ?

<p>
Loading satellites...
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

)

}