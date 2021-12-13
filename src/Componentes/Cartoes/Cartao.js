import { useState } from 'react'

import CartaoPergunta from './Cartao Pergunta/CartaoPergunta'
import CartaoResposta from './Cartao Resposta/CartaoResposta'

export default function Cartao({ renderizarResultado, arrayPerguntas, meta }) {

    let [ladoDoCartao, setLadoDoCartao] = useState('frente')
    let [respostaDoCartao, setRespostaDoCartao] = useState('')
    const [perguntaAtual, setPerguntaAtual] = useState(0)
    const [respostaAtual, setRespostaAtual] = useState(0)
    const [respostaCerta, setRespostaCerta] = useState(0)

    function virarCartao() {
        if (ladoDoCartao === 'frente') {
            setLadoDoCartao(ladoDoCartao = 'verso')
            setRespostaDoCartao(respostaDoCartao = '')
        } else {
            setLadoDoCartao(ladoDoCartao = 'frente')
        }
    }

    return (
        <>
            {ladoDoCartao === 'frente' ?
                <CartaoPergunta
                    arrayPerguntas={arrayPerguntas}
                    perguntaAtual={perguntaAtual}
                    virarCartao={virarCartao} /> :
                <CartaoResposta
                    arrayPerguntas={arrayPerguntas}
                    perguntaAtual={perguntaAtual}
                    respostaAtual={respostaAtual}
                    respostaDoCartao={respostaDoCartao}
                    setRespostaDoCartao={setRespostaDoCartao}
                    respostaCerta={respostaCerta}
                    setPerguntaAtual={setPerguntaAtual}
                    setRespostaAtual={setRespostaAtual}
                    setLadoDoCartao={setLadoDoCartao}
                    setRespostaCerta={setRespostaCerta}
                    renderizarResultado={renderizarResultado}
                    meta={meta} />}
        </>
    )
}