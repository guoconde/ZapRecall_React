import logoMini from '../assets/logo-mini.png'
import btnVoltar from '../assets/turn.png'


export default function Cartoes() {
    return (
        <div>
            <header>
                <img src={ logoMini } alt='Logo Pequena' />
            </header>
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
        <div className='resposta'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non ullamcorper at quis eu. Malesuada iaculis viverra a tincidunt arcu nullam. Orci tortor arcu placerat id sit et. Elementum in erat cras tortor at auctor diam.</div>
    )
}