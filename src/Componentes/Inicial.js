import { useState } from 'react'
import logoGrande from '../assets/logo.png'
import nextImagem from '../assets/next.png'

export default function Inicial({ renderizarCartoes, baralhos }) {

    const [ valorInput, setValorInput ] = useState('')
    const [ classe, setClasse ] = useState('')
    const [ mostrarErro, setMostrarErro ] = useState('')

    function handleEnviarParaApp( proximaPagina, valorInput, baralho) {
        if(valorInput !== '' && valorInput >= 1) {
            renderizarCartoes(proximaPagina, valorInput, baralho)
        } else {
            setMostrarErro(<div className='texto-vermelho'>O valor deve ser maior ou igual a 1.</div>)
            setClasse('valor-invalido')
        }
    }

    return (
        <>
            <div className="tela-inicial">
                <img src={ logoGrande } alt="logo" />
                <div className='opcoes-zap'>
                    <input className={classe} type='number' placeholder='Sua meta de zaps' onChange={e => setValorInput(e.target.value)} value={valorInput}></input>
                    {mostrarErro}
                    <EscolherBaralho handle={handleEnviarParaApp} baralhos={baralhos} valorInput={valorInput}/>
                </div>
            </div>
        </>
    )
}

function EscolherBaralho({ handle, baralhos, valorInput }) {
    return (
        <>
            {baralhos.map(baralho => (
                <button className="btn" onClick={() => handle('paginaCartoes', valorInput, baralho)}>
                    {baralho}
                    <img src={ nextImagem } alt="next" />
                </button>
            ))}
        </>
        
    )
}