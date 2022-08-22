import React from "react";
import { Image, Dimensions, StyleSheet } from "react-native";
import Texto from "../../../components/Texto";

import topo from "../../../../assets/topo.png"

const width = Dimensions.get('screen').width;

export default function Topo({titulo}){
    return <>
        <Image source={topo} style = {style.topo}/>
        <Texto style= {style.titulo}>{titulo}</Texto>
    </>

}

const style = StyleSheet.create({
    topo: {
        width: "100%",
        height: (578/768) * width,
    },

    titulo: {
        width: "100%",
        marginTop: 26,
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        color: "white",
        fontWeight: "bold",
        padding: 16
    },
  
})  