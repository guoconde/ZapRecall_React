import Topo from '../Genericos/Topo'
import ReiniciarJogo from '../Reiniciar Jogo/ReiniciarJogo'
import emoticonFeliz from '../../assets/party.png'


export default function Sucesso() {
    return (
        <>
            <Topo />
            <div className='centralizado'>
                <div>
                    PARABÉNS! 
                    <img src={ emoticonFeliz } alt='Emoticon Feliz' />
                </div>
                <div className='texto-final'>
                    Você atingiu a sua meta de flashcards!
                </div>
                <ReiniciarJogo />
            </div>
        </>
    )
}