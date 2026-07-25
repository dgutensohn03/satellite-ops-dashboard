import {
useQuery
} from "@tanstack/react-query";


import {
getSatellites
} from "../api/satelliteApi";


export function useSatellites(){

return useQuery({

queryKey:["satellites"],

queryFn:getSatellites

});

}