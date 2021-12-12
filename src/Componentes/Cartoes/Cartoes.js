import { useState } from 'react'

import CartaoPergunta from './Cartao Pergunta/CartaoPergunta'
import Respostas from './Cartao Resposta/CartaoResposta'
import BotaoProximo from './Genericos/BotaoProximo'
import Topo from '../Genericos/Topo'

export default function Cartoes({ renderizarResultado, arrayPerguntas, baralhoEscolhido, meta }) {

    const arrayApelidoDoBaralho = baralhoEscolhido.split(' ')
    const apelidoDoBaralho = arrayApelidoDoBaralho[arrayApelidoDoBaralho.length - 1]

    return (
        <div>
            <Topo />
            <div className='apelido-baralho'>{apelidoDoBaralho}</div>
            <Cartao renderizarResultado={renderizarResultado} arrayPerguntas={arrayPerguntas} meta={meta} />
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
            {ladoDoCartao === 'frente' ?
                <CartaoPergunta
                    arrayPerguntas={arrayPerguntas}
                    perguntaAtual={perguntaAtual}
                    virarCartao={virarCartao} /> :
                <CartaoResposta 
                    setRespostaDoCartao={setRespostaDoCartao}
                    setRespostaCerta={setRespostaCerta}
                    respostaCerta={respostaCerta} />}
        </>
    )

    function CartaoResposta() {

        let resposta = arrayPerguntas[respostaAtual]

        return (
            <div className={`cartoes verso ${respostaDoCartao}`} key={respostaAtual}>
                <div className='topo-cartao'>
                    <span>{resposta.pergunta}</span>
                    <div>{respostaAtual + 1}/{arrayPerguntas.length}</div>
                </div>
                <div className='resposta'>{resposta.resposta}</div>
                {respostaDoCartao !== '' ?
                    <BotaoProximo 
                        arrayPerguntas={arrayPerguntas}
                        setPerguntaAtual={setPerguntaAtual}
                        setRespostaAtual={setRespostaAtual}
                        setLadoDoCartao={setLadoDoCartao}
                        respostaCerta={respostaCerta}
                        perguntaAtual={perguntaAtual}
                        meta={meta}
                        renderizarResultado={renderizarResultado} /> :
                    <Respostas />}
            </div>
        )
    }
}


