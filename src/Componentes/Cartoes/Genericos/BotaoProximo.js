import btnVoltar from '../../../assets/turn.png'

export default function BotaoProximo({ meta, renderizarResultado, arrayPerguntas, setPerguntaAtual, setRespostaAtual, setLadoDoCartao, respostaCerta, perguntaAtual}) {

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
            renderizarResultado('paginaFracasso')
        }
    }

    return (
        <img src={btnVoltar} alt="Botao Voltar" onClick={() => proximaPergunta(perguntaAtual)} />
    )
}