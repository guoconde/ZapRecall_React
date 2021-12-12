import Topo from '../Genericos/Topo'
import ReiniciarJogo from '../Reiniciar Jogo/ReiniciarJogo'
import emoticonTriste from '../../assets/sad.png'

export default function Fracasso({ meta }) {

    console.log(meta)

    return (
        <>
            <Topo />
            <div className='centralizado'>
                <div>
                    Putz..
                    <img src={emoticonTriste} alt='Emoticon Feliz' />
                </div>
                <div className='texto-final'>
                    Você não atingiu sua meta de {meta} flashcards..
                    {<br />}
                    Não desanime! Na próxima você consegue!
                </div>
                <ReiniciarJogo />
            </div>
        </>
    )
}