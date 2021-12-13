import Topo from '../Genericos/Topo'
import Cartao from './Cartao'

export default function Cartoes({ renderizarResultado, arrayPerguntas, baralhoEscolhido, meta }) {

    const arrayApelidoDoBaralho = baralhoEscolhido.split(' ')
    const apelidoDoBaralho = arrayApelidoDoBaralho[arrayApelidoDoBaralho.length - 1]

    return (
        <div>
            <Topo />
            <div className='apelido-baralho'>{apelidoDoBaralho}</div>
            <Cartao renderizarResultado={renderizarResultado} arrayPerguntas={arrayPerguntas} meta={meta} />
        </div>
    )
}