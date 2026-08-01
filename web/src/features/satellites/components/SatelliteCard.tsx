import type {
Satellite
} from "../types/satellite";


interface Props {

satellite: Satellite;

}


export default function SatelliteCard({
satellite
}:Props){


return (

<div
className="
rounded-xl
border
border-slate-800
bg-slate-900
p-5
"
>


<div className="flex justify-between">


<h2 className="
text-xl
font-semibold
">

{satellite.name}

</h2>


<span
className="
text-green-400
"
>

{satellite.status}

</span>


</div>



<div className="
grid
grid-cols-3
gap-4
mt-6
">


<div>

<p className="text-slate-400 text-sm">
Battery
</p>

<p className="text-lg">

{satellite.battery}%

</p>

</div>



<div>

<p className="text-slate-400 text-sm">
Signal
</p>

<p className="text-lg">

{satellite.signal}%

</p>

</div>



<div>

<p className="text-slate-400 text-sm">
Altitude
</p>

<p className="text-lg">

{satellite.altitude} km

</p>

</div>


</div>



</div>

)

}