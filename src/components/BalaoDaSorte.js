import * as React from 'react';
import {Image, Text, View} from "react-native";
import {useState} from "react";
import Botao from "./Botao";
import  estilo from "../estilo"


export  const BalaoDaSorte = () =>{
    const [imagem, setImagem] = useState(require('../../assets/balloon_red.jpg'))
    const [frase, setFrase] = useState('')

    const frases = ['Grandezas em Pequenos Começos',
        'Melhor chegar atrasado neste mundo do que adiantado no outro',
        'Lute como os boletos, eles sempre vencem!',
        'Pra quem não tem nada, metade é o dobro',
        'As coisas podem piorar, você é que não tem imaginação!',
        'Perigo não é um cavalo na pista, mas sim um burro na direção',
        'Se casamento fosse bom não precisaria de testemunhas',
        'Às vezes é melhor ficar quieto e deixar que pensem que você é um idiota, do que abrir a boca e não deixar nenhuma dúvida.'
    ];

    const acao = () => {
        setImagem(require('../../assets/popped_balloon_red.jpg'))
        setFrase(Math.floor(Math.random() * (7 + 1)))
    }

    const limpar = () => {
        setImagem(require('../../assets/balloon_red.jpg'))
        setFrase('')
    }

    return(
        <View>
            <Image style={estilo.imagem} source={imagem}/>

            <Text style ={estilo.paragraph}>{frases[frase]}</Text>

            <Botao

                color ='red'
                title = 'estourar'
                action = {acao}

            />

            <Botao

                color = 'gray'
                title = 'Resetar'
                action = {limpar}

            />
        </View>

    );
}

export  default  BalaoDaSorte;