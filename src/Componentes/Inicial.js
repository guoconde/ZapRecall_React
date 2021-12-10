import logoGrande from '../assets/logo.png'
import nextImagem from '../assets/next.png'

export default function TelaInicial() {
    return (
        <>
            <div className="tela-inicial">
                <img src={ logoGrande } alt="logo" />
                <button className="btn">
                    <span>Praticar React</span>
                    <img src={ nextImagem } alt="next" />
                </button>
            </div>
        </>
    )
}