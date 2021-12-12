import { useState } from 'react'

import Inicial from './Pagina Inicial/Inicial'
import Cartoes from './Cartoes/Cartoes'
import Sucesso from './Tela final/Sucesso'
import Fracasso from './Tela final/Fracasso'

import '../css/reset.css'
import '../css/style.css'

export default function App() {

    const [ metaDeZap, setMetaDeZap ] = useState(0)
    const [ paginaAtual, setPaginaAtual ] = useState('paginaInicial')
    const [ baralhoEscolhido, setBaralhoEscolhido ] = useState('')
    const [ indiceBaralho, setIndiceBaralho ] = useState('')

    console.log(metaDeZap, 'meta')

    const baralhos = ['Praticar React', 'Teste do Teste']
    
    const perguntas = [
        [
            {pergunta: 'O que é JSX?', resposta: 'É uma extensão de linguagem do JavaScript.'},
            {pergunta: 'O React é ___', resposta: 'Uma biblioteca JavaScript para construção de interfaces.'},
            {pergunta: 'Componentes devem iniciar com ___', resposta: 'Com a letra maiuscula.'}
        ],
        [
            {pergunta: 'Teste do Teste?', resposta: 'É Teste.'},
            {pergunta: 'O Teste é ___', resposta: 'Teste apenas um teste.'},
            {pergunta: 'Testes devem iniciar com ___', resposta: 'Com o teste maiusculo.'},
            {pergunta: 'Testes devem iniciar com ___', resposta: 'Com o teste maiusculo.'}
        ],
    ]
    
    const paginas = {
        paginaInicial: <Inicial renderizarCartoes={mudarPagina} baralhos={baralhos} />,
        paginaCartoes: <Cartoes renderizarResultado={mudarPagina} arrayPerguntas={perguntas[indiceBaralho]} baralhoEscolhido={baralhoEscolhido} meta={metaDeZap}/>,
        paginaSucesso: <Sucesso />,
        paginaFracasso: <Fracasso meta={metaDeZap}/>
    }
    
    function mudarPagina(pagina, valorInput, baralho) {
        setPaginaAtual(pagina)
        setMetaDeZap(valorInput)
        setBaralhoEscolhido(baralho)
        selecionarPerguntas(baralho)
    }

    function selecionarPerguntas(baralho) {
        const indice = baralhos.indexOf(baralho)
        setIndiceBaralho(indice)
    }

    return(
        <>
            {paginas[paginaAtual]}
        </>
    )
}