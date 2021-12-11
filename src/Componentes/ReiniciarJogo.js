import nextImagem from '../assets/next.png'

export default function ReiniciarJogo() {
    return (
        <button className='btn' onClick={() => window.location.reload()}>
            Tentar novamente
            <img src={ nextImagem } alt="next" />
        </button>
    )
}