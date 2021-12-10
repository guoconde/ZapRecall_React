import Topo from './Topo'
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
                <div>
                    Você não esqueceu de nenhum flashcard!
                </div>
            </div>
        </>
    )
}