import React from "react";
import { StyleSheet, FlatList, View} from "react-native";
import Texto from "../../components/Texto";

import Detalhes from "./components/Detalhes";
import Item from "./components/Item";
import Topo from "./components/Topo";



export default function Cesta ({topo, detalhes, itens}) {
    return(
       <>
        <FlatList 
        data={itens.lista} 
        renderItem ={Item} 
        keyExtractor = {({nome})=> nome} 
        ListHeaderComponent={()=>
        {
            return <>
                <Topo {...topo}/>
                <Detalhes {...detalhes}/>
            <View style ={style.cesta}>
                <Texto style ={style.titulo}>{itens.titulo}</Texto>
            </View>
            </>
        }
        }
        />
    
       </>
    )
}

const style = StyleSheet.create({
    titulo: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32
    },
    cesta:{
        padding: 8
    }
});
