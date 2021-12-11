import { useState } from 'react'

import Inicial from './Inicial'
import Cartoes from './Cartoes'
import Sucesso from './Sucesso'
import Fracasso from './Fracasso'

import '../css/reset.css'
import '../css/style.css'

export default function App() {

    const perguntas = [
        {pergunta: 'O que é JSX?', resposta: 'É uma extensão de linguagem do JavaScript.'},
        {pergunta: 'O React é ___', resposta: 'Uma biblioteca JavaScript para construção de interfaces.'},
        {pergunta: 'Componentes devem iniciar com ___', resposta: 'Com a letra maiuscula.'}
    ]

    const [ paginaAtual, setPaginaAtual ] = useState('paginaInicial')
    
    const paginas = {
        paginaInicial: <Inicial renderizarCartoes={mudarPagina} />,
        paginaCartoes: <Cartoes renderizarResultado={mudarPagina} arrayPerguntas={perguntas} />,
        paginaSucesso: <Sucesso />,
        paginaFracasso: <Fracasso />
    }

    function mudarPagina(pagina) {
        setPaginaAtual(pagina)
    }

    return(
        <>
            {paginas[paginaAtual]}
        </>
    )
}