interface Props {

title:string;

value:string;

}


export default function MetricCard({
title,
value
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

<p
className="
text-sm
text-slate-400
"
>

{title}

</p>


<p
className="
text-3xl
font-bold
mt-2
"
>

{value}

</p>


</div>

)

}