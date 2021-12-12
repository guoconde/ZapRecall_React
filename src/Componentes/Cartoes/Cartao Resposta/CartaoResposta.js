export default function Respostas({ setRespostaCerta, setRespostaDoCartao, respostaCerta }) {

    function verificadorDeResposta(resposta) {
        setRespostaDoCartao(resposta)

        if (resposta === 'resposta-certa') {
            setRespostaCerta(respostaCerta + 1)
        }
    }

    return (
        <div className='respostas'>
            <button className='btn resposta-aprendida' onClick={() => verificadorDeResposta('resposta-aprendida')}>Aprendi agora</button>
            <button className='btn resposta-ausente' onClick={() => verificadorDeResposta('resposta-ausente')}>Não lembrei</button>
            <button className='btn resposta-demorada' onClick={() => verificadorDeResposta('resposta-demorada')}>Lembrei com esforço</button>
            <button className='btn resposta-certa' onClick={() => verificadorDeResposta('resposta-certa')}>Zap!</button>
        </div>
    )
}