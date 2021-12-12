import { useState } from 'react'

import Topo from './Topo'
import btnVoltar from '../assets/turn.png'

export default function Cartoes({ renderizarResultado, arrayPerguntas, baralhoEscolhido, meta }) {

    const arrayApelidoDoBaralho = baralhoEscolhido.split(' ')
    const apelidoDoBaralho = arrayApelidoDoBaralho[arrayApelidoDoBaralho.length - 1]

    return (
        <div>
            <Topo />
            <div className='apelido-baralho'>{apelidoDoBaralho}</div>
            <Cartao renderizarResultado={renderizarResultado} arrayPerguntas={arrayPerguntas} meta={meta}/>
        </div>
    )
}

function Cartao({ renderizarResultado, arrayPerguntas, meta }) {

    let [ladoDoCartao, setLadoDoCartao] = useState('frente')
    let [respostaDoCartao, setRespostaDoCartao] = useState('')
    const [perguntaAtual, setPerguntaAtual] = useState(0)
    const [respostaAtual, setRespostaAtual] = useState(0)
    const [respostaCerta, setRespostaCerta] = useState(0)

    console.log(respostaCerta)

    if (respostaDoCartao !== '' && respostaDoCartao === 'resposta-certa') {
        console.log('esta certo')
    } else {
        console.log('esta errado')
    }

    function virarCartao() {
        if (ladoDoCartao === 'frente') {
            setLadoDoCartao(ladoDoCartao = 'verso')
            setRespostaDoCartao(respostaDoCartao = '')
        } else {
            setLadoDoCartao(ladoDoCartao = 'frente')
        }
    }

    return (
        <>
            {ladoDoCartao === 'frente' ? <CartaoPergunta /> : <CartaoResposta />}
        </>
    )

    function CartaoPergunta() {

        let pergunta = arrayPerguntas[perguntaAtual]

        return (
            <div className={`cartoes frente`} key={perguntaAtual}
                onClick={virarCartao}>
                <div className='topo-cartao'>
                    <div>{perguntaAtual + 1}/{arrayPerguntas.length}</div>
                </div>
                <div className='pergunta'>{pergunta.pergunta}</div>
                <BotaoVoltar />
            </div>
        )
    }

    function CartaoResposta() {

        let resposta = arrayPerguntas[respostaAtual]

        return (
            <div className={`cartoes verso ${respostaDoCartao}`} key={respostaAtual}>
                <div className='topo-cartao'>
                    <span>{resposta.pergunta}</span>
                    <div>{respostaAtual + 1}/{arrayPerguntas.length}</div>
                </div>
                <div className='resposta'>{resposta.resposta}</div>
                {respostaDoCartao !== '' ? <BotaoVoltar /> : <Respostas />}
            </div>
        )
    }
    
  
    function Respostas() {

        function verificadorDeResposta(resposta) {
            setRespostaDoCartao(resposta)

            if(resposta === 'resposta-certa') {
                setRespostaCerta(respostaCerta + 1)
            }
        }
        
        return (
            <div className='respostas'>
                <button className='btn resposta-aprendida' onClick={() => verificadorDeResposta('resposta-aprendida')}>Aprendi agora</button>
                <button className='btn resposta-ausente' onClick={() => verificadorDeResposta('resposta-ausente')}>Não lembrei</button>
                <button className='btn resposta-demorada' onClick={() => verificadorDeResposta('resposta-demorada')}>Lembrei com esforço</button>
                <button className='btn resposta-certa' onClick={() => verificadorDeResposta('resposta-certa')}>Zap!</button>
            </div>
        )
    }
    
    function BotaoVoltar() {
        
        function proximaPergunta(posicaoAtual) {

            if(posicaoAtual + 1 !== arrayPerguntas.length) {
                setPerguntaAtual(posicaoAtual + 1)
                setRespostaAtual(posicaoAtual + 1)
                setLadoDoCartao('frente')
            } else {
                verificadorDeSucesso()
            }
        }

        function verificadorDeSucesso() {
            if(respostaCerta >= meta) {
                renderizarResultado('paginaSucesso')
            } else {
                renderizarResultado('paginaFracasso')
            }
        }

        return (
            <img src={btnVoltar} alt="Botao Voltar" onClick={() => proximaPergunta(perguntaAtual)} />
        )
    }
}


