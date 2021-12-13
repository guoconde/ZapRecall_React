import Botao from '../../../assets/turn.png'

export default function BotaoProximo({ arrayPerguntas, perguntaAtual, respostaCerta, 
    setPerguntaAtual, setRespostaAtual, setLadoDoCartao, meta,
    renderizarResultado }) {

function proximaPergunta(posicaoAtual) {

    if (posicaoAtual + 1 !== arrayPerguntas.length) {
        setPerguntaAtual(posicaoAtual + 1)
        setRespostaAtual(posicaoAtual + 1)
        setLadoDoCartao('frente')
    } else {
        verificadorDeSucesso()
    }
}

function verificadorDeSucesso() {
    if (respostaCerta >= meta) {
        renderizarResultado('paginaSucesso')
    } else {
        renderizarResultado('paginaFracasso', meta)
    }
}

return (
    <img src={Botao} alt="Botao Voltar" onClick={() => proximaPergunta(perguntaAtual)} data-identifier="arrow" />
)
}