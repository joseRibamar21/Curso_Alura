import logo from "../../assets/logo.png"

import Tomate from "../../assets/frutas/Tomate.png"
import Brócolis from "../../assets/frutas/Brócolis.png"
import Batata from "../../assets/frutas/Batata.png"
import Pepino from "../../assets/frutas/Pepino.png"

const cesta = {
    topo:{
        titulo: "Detalhes da cesta"
    },
    detalhes:{
        nome: "Cesta de verduras",
        logoFazenda: logo,
        nomeFazenda: "Jenny Jack Farm",
        descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
        preco: "R$ 40,00",
        botao: "Comprar"
    },

    itens: {
        titulo: "Itens da cesta",
        lista: [
            {
                nome: "Tomate",
                imagem: Tomate
            },
            {
                nome: "Brócolis",
                imagem: Brócolis
            },
            {
                nome: "Batata",
                imagem: Batata
            },
            {
                nome: "Pepino",
                imagem: Pepino
            },
            
        ]
    }
}

export default cesta