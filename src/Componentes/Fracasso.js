import Topo from './Topo'
import emoticonTriste from '../assets/sad.png'

export default function Fracasso() {
    return (
        <>
            <Topo />
            <div className='centralizado'>
                <div>
                    Putz.. 
                    <img src={ emoticonTriste } alt='Emoticon Feliz' />
                </div>
                <div>
                    Você esqueceu alguns flashcards.. 
                    {<br/>}
                    Não desanime! Na próxima você consegue!
                </div>
            </div>
        </>
    )
}