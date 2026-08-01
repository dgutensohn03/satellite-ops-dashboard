import {
LineChart,
Line,
XAxis,
YAxis,
CartesianGrid,
Tooltip,
ResponsiveContainer
} from "recharts";


import {
useTelemetry
} from "../hooks/useTelemetry";


export default function TelemetryChart(){


const {
data,
isLoading
}=useTelemetry();



if(isLoading){

return (

<div>
Loading telemetry...
</div>

)

}



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


<h2
className="
font-semibold
mb-4
"
>

Explorer-01 Telemetry

</h2>



<ResponsiveContainer
width="100%"
height={300}
>


<LineChart
data={data?.points}
>


<CartesianGrid
strokeDasharray="3 3"
/>


<XAxis
dataKey="timestamp"
/>


<YAxis
domain={[0,100]}
/>


<Tooltip />



<Line

type="monotone"

dataKey="battery"

stroke="#22c55e"

strokeWidth={2}

/>


<Line

type="monotone"

dataKey="signal"

stroke="#38bdf8"

strokeWidth={2}

/>


</LineChart>


</ResponsiveContainer>


</div>

)

}