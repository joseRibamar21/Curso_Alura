import React from "react";
import {StyleSheet ,Image, View } from "react-native";

import Texto from "../../../components/Texto";


export default function Detalhes({ nome, logoFazenda, nomeFazenda, descricao, preco}){
    return <>
        <View style={style.cesta}>
                <Texto style={style.nome}>nome</Texto>
                <View style={style.fazenda}>
                    <Image source={logoFazenda} style={style.imagemFazenda}/>
                    <Texto style={style.nomeFazenda}>{nomeFazenda}</Texto>
                </View>
                <Texto style={style.descricao}>{descricao}</Texto>
                <Texto style={style.preco}>{preco}</Texto>
            </View>
    </>

}

const style = StyleSheet.create({
    cesta: {
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 8,
        paddingEnd: 8
    },

    fazenda:{
        flexDirection: "row",
        paddingVertical: 12
    },

    imagemFazenda: {
        width: 32,
        height: 32,
        borderRadius: 50
    },

    nomeFazenda:{
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12 
    },

    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26
    },

    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    }
})  