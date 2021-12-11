import logoGrande from '../assets/logo.png'
import nextImagem from '../assets/next.png'

export default function Inicial({ renderizarCartoes }) {
    return (
        <>
            <div className="tela-inicial">
                <img src={ logoGrande } alt="logo" />
                <button className="btn" onClick={() => renderizarCartoes('paginaCartoes')}>
                    <span>Praticar React</span>
                    <img src={ nextImagem } alt="next" />
                </button>
            </div>
        </>
    )
}