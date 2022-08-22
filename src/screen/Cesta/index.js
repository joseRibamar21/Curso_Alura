import React from "react";
import Detalhes from "./components/Detalhes";

import Topo from "./components/Topo";



export default function Cesta ({topo, detalhes}) {
    return(
       <>
            <Topo {...topo}/>
            <Detalhes {...detalhes}/>
       </>
    )
}

