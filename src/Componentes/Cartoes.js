import { useState } from 'react'

import Topo from './Topo'
import btnVoltar from '../assets/turn.png'

export default function Cartoes({ renderizarResultado, arrayPerguntas }) {
    
    console.log(arrayPerguntas)
    console.log(renderizarResultado)
    
    return (
        <div>
            <Topo />
            <Cartao renderizarResultado={renderizarResultado} arrayPerguntas={arrayPerguntas}/>
        </div>
    )
}

function Cartao({ renderizarResultado, arrayPerguntas }) {

   

    const [ quantidadeCartoes, setQuantidadeCartoes ] = useState([1])
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
            <div className={`cartoes frente`}
             onClick={virarCartao}>
                <div className='topo-cartao'>
                    <div>{ quantidadeCartoes }/{ arrayPerguntas.length }</div>
                </div>
                <div className='pergunta'>O que é JSX?</div>
                <BotaoVoltar />
            </div>
            )
        }
            
    function CartaoResposta() {

        return (
            <div className={`cartoes verso ${respostaDoCartao}`}>
                <div className='topo-cartao'>
                    <span>O que é JSX?</span>
                    <div>{ quantidadeCartoes }/{ quantidadeCartoes.length }</div>
                </div>
                <div className='resposta'>É uma extensão da linguagem do JavaScript.</div>
                {respostaDoCartao !== '' ? <BotaoVoltar /> : <Respostas />}
            </div>
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


