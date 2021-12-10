import Topo from './Topo'
import btnVoltar from '../assets/turn.png'

export default function Cartoes() {
    return (
        <div>
            <Topo />
            <Cartao />
        </div>
    )
}

function Cartao() {
    return (
        <div className="cartoes">
            <div className='topo-cartao'>
                <span>O que é JSX?</span>
                <div>1/8</div>
            </div>
            <CartaoResposta />
            <img src={ btnVoltar } alt="Botao Voltar" />
        </div>
    )
}

function CartaoPergunta() {
    return (
            <div className='pergunta'>O que é JSX?</div>
            )
        }
        
function CartaoResposta() {
    return (
        <div className='resposta'>É uma extensão da linguagem do JavaScript.</div>
    )
}

