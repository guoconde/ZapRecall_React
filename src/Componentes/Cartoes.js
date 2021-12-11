import { useState } from 'react'

import Topo from './Topo'
import btnVoltar from '../assets/turn.png'

export default function Cartoes({ renderizarResultado, arrayPerguntas, baralhoEscolhido }) {

    console.log(arrayPerguntas)
    
    const arrayApelidoDoBaralho = baralhoEscolhido.split(' ')
    const apelidoDoBaralho = arrayApelidoDoBaralho[arrayApelidoDoBaralho.length - 1]

    return (
        <div>
            <Topo />
            <div className='apelido-baralho'>{apelidoDoBaralho}</div>
            <Cartao renderizarResultado={renderizarResultado} arrayPerguntas={arrayPerguntas}/>
        </div>
    )
}

function Cartao({ renderizarResultado, arrayPerguntas }) {

    let [ ladoDoCartao, setLadoDoCartao ] = useState('frente')
    let [ respostaDoCartao, setRespostaDoCartao ] = useState('')
 
    if(respostaDoCartao !== '' && respostaDoCartao === 'resposta-certa') {
        console.log('esta certo')
    } else {
        console.log('esta errado')
    }

    function virarCartao() {
        if(ladoDoCartao === 'frente') {
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
        return (
            arrayPerguntas.map((a, i) => (
                <div className={`cartoes frente`} key={i}
                    onClick={virarCartao}>
                    <div className='topo-cartao'>
                        <div>{i + 1}/{ arrayPerguntas.length }</div>
                    </div>
                    <div className='pergunta'>{a.pergunta}</div>
                    <BotaoVoltar />
                </div>
            ))
            )
        }
            
    function CartaoResposta() {

        return (
            arrayPerguntas.map((a, i) => (
                <div className={`cartoes verso ${respostaDoCartao}`} key={i}>
                    <div className='topo-cartao'>
                        <span>{a.pergunta}</span>
                        <div>{i + 1}/{ arrayPerguntas.length }</div>
                    </div>
                    <div className='resposta'>{a.resposta}</div>
                    {respostaDoCartao !== '' ? <BotaoVoltar /> : <Respostas />}
                </div>
            ))
        )
    }

    function Respostas() {
        return (
            <div className='respostas'>
                <button className='btn resposta-aprendida' onClick={() => setRespostaDoCartao('resposta-aprendida')}>Aprendi agora</button>
                <button className='btn resposta-ausente' onClick={() => setRespostaDoCartao('resposta-ausente')}>Não lembrei</button>
                <button className='btn resposta-demorada' onClick={() => setRespostaDoCartao('resposta-demorada')}>Lembrei com esforço</button>
                <button className='btn resposta-certa' onClick={() => setRespostaDoCartao('resposta-certa')}>Zap!</button>
            </div>
        )
    }

    function BotaoVoltar() {
        return (
            <img src={ btnVoltar } alt="Botao Voltar" onClick={() => renderizarResultado('paginaSucesso')}/>
        )
    }
}


