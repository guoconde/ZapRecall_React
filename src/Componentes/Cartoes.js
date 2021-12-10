import Topo from './Topo'
import btnVoltar from '../assets/turn.png'
import { useState } from 'react'

export default function Cartoes() {
    return (
        <div>
            <Topo />
            <Cartao />
        </div>
    )
}

function Cartao() {
    
    const [ quantidadeCartoes, setQuantidadeCartoes ] = useState([1])
    let [ ladoDoCartao, setLadoDoCartao ] = useState('frente')

    function virarCartao() {
        if(ladoDoCartao === 'frente') {
            setLadoDoCartao(ladoDoCartao = 'verso')
        } else {
            setLadoDoCartao(ladoDoCartao = 'frente')
        }
    }

    return (
            <>
                {ladoDoCartao === 'frente' ? <CartaoPergunta quantidadeCartoes={quantidadeCartoes} /> : <CartaoResposta />}
            </>        
    )
}

function CartaoPergunta(props) {
    return (
        <div className={`cartoes frente`}
         onClick={props.virarCartao}>
            <div className='topo-cartao'>
                <div>{ props.quantidadeCartoes }/{ props.quantidadeCartoes.length }</div>
            </div>
            <div className='pergunta'>O que é JSX?</div>
            <img src={ btnVoltar } alt="Botao Voltar" />
        </div>
            )
        }
        
function CartaoResposta(props) {
    return (
        <div className={`cartoes verso`}
         onClick={props.virarCartao}>
            <div className='topo-cartao'>
                <span>O que é JSX?</span>
                <div>{ props.quantidadeCartoes }/{ props.quantidadeCartoes.length }</div>
            </div>
            <div className='resposta'>É uma extensão da linguagem do JavaScript.</div>
            <img src={ btnVoltar } alt="Botao Voltar" />
        </div>
    )
}

