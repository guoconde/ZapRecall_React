import Botao from '../../../assets/turn.png'

export default function CartaoPergunta({ arrayPerguntas, perguntaAtual, virarCartao }) {

    let pergunta = arrayPerguntas[perguntaAtual]

    return (
        <div className={`cartoes frente`} key={perguntaAtual} data-identifier="flashcard">
            <div className='topo-cartao'>
                <div data-identifier="counter">{perguntaAtual + 1}/{arrayPerguntas.length}</div>
            </div>
            <div className='pergunta'>{pergunta.pergunta}</div>
            <img src={Botao} alt="Botao Voltar" onClick={virarCartao} data-identifier="arrow" />
        </div>
    )
}