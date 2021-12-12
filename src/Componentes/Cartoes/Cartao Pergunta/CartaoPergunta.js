import BotaoProximo from "../Genericos/BotaoProximo"

export default function CartaoPergunta({ perguntaAtual, arrayPerguntas, virarCartao }) {

    let pergunta = arrayPerguntas[perguntaAtual]

    return (
        <div className={`cartoes frente`} key={perguntaAtual}
            onClick={virarCartao}>
            <div className='topo-cartao'>
                <div>{perguntaAtual + 1}/{arrayPerguntas.length}</div>
            </div>
            <div className='pergunta'>{pergunta.pergunta}</div>
            <BotaoProximo />
        </div>
    )
}