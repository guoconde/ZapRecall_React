import Topo from './Topo'
import ReiniciarJogo from './ReiniciarJogo'
import emoticonFeliz from '../assets/party.png'


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
                    Você não esqueceu de nenhum flashcard!
                </div>
                <ReiniciarJogo />
            </div>
        </>
    )
}