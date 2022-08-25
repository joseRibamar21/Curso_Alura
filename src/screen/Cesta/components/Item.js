import React from "react";
import { Image, StyleSheet, View } from "react-native";

import Texto from "../../../components/Texto";

export default function Itenm({item: {imagem, nome}}){

    return <View style={style.item}>
            <Image source={imagem} style={style.image}/>
            <Texto  key={nome}>{nome}</Texto>
        </View>
    
}

const style = StyleSheet.create({
    item: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        paddingVertical: 16,
        marginHorizontal: 16,
        alignItems: "center"
    },
    
    image:{
        width: 46,
        height: 46
    }, 
    nome:{
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 16,
        color: "#464646"
    }
});