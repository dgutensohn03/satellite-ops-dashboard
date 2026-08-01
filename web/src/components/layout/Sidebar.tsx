import {
  LayoutDashboard,
  Satellite,
  Activity,
  AlertTriangle,
} from "lucide-react";


const navigation = [
  {
    name:"Dashboard",
    icon:LayoutDashboard
  },
  {
    name:"Satellites",
    icon:Satellite
  },
  {
    name:"Telemetry",
    icon:Activity
  },
  {
    name:"Alerts",
    icon:AlertTriangle
  }
];


export default function Sidebar(){

return (

<aside
className="
w-64
min-h-screen
border-r
border-slate-800
bg-slate-950
p-5
"
>


<h2
className="
text-xl
font-bold
mb-8
"
>
🛰 Mission Control
</h2>


<nav className="space-y-3">


{
navigation.map((item)=>{

const Icon=item.icon;


return (

<div
key={item.name}
className="
flex
items-center
gap-3
text-slate-300
hover:text-white
cursor-pointer
"
>

<Icon size={20}/>

<span>
{item.name}
</span>


</div>

)

})
}


</nav>


</aside>

)

}