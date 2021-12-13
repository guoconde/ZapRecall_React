import Respostas from './Respostas'
import BotaoProximo from './BotaoProximo'

export default function CartaoResposta({ arrayPerguntas, perguntaAtual,
    respostaAtual, respostaDoCartao, setRespostaDoCartao,
    setRespostaCerta, respostaCerta, setPerguntaAtual, setRespostaAtual,
    setLadoDoCartao, meta, renderizarResultado }) {

    let resposta = arrayPerguntas[respostaAtual]

    return (
        <div className={`cartoes verso ${respostaDoCartao}`} key={respostaAtual} data-identifier="flashcard">
            <div className='topo-cartao'>
                <span>{resposta.pergunta}</span>
                <div data-identifier="counter">{respostaAtual + 1}/{arrayPerguntas.length}</div>
            </div>
            <div className='resposta'>{resposta.resposta}</div>
            {respostaDoCartao !== '' ?
                <BotaoProximo
                    arrayPerguntas={arrayPerguntas}
                    perguntaAtual={perguntaAtual}
                    respostaCerta={respostaCerta}
                    setPerguntaAtual={setPerguntaAtual}
                    setRespostaAtual={setRespostaAtual}
                    setLadoDoCartao={setLadoDoCartao}
                    renderizarResultado={renderizarResultado}
                    meta={meta}
                /> :
                <Respostas
                    setRespostaDoCartao={setRespostaDoCartao}
                    setRespostaCerta={setRespostaCerta}
                    respostaCerta={respostaCerta} />}
        </div>
    )
}