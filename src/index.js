import reactDOM from 'react-dom'
// import Inicial from './Componentes/Inicial'
import Cartoes from './Componentes/Cartoes'

import './css/reset.css'
import './css/style.css'

function App() {
    return(
        <>
            {/* <Inicial /> */}
            <Cartoes />
        </>
    )
}

reactDOM.render(App(), document.querySelector('.root'))

