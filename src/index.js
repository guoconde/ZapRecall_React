import reactDOM from 'react-dom'
// import Inicial from './Componentes/Inicial'
// import Cartoes from './Componentes/Cartoes'
// import Sucesso from './Componentes/Sucesso'
import Fracasso from './Componentes/Fracasso'

import './css/reset.css'
import './css/style.css'

function App() {
    return(
        <>
            {/* <Inicial /> */}
            {/* <Cartoes /> */}
            {/* <Sucesso /> */}
            <Fracasso />
        </>
    )
}

reactDOM.render(App(), document.querySelector('.root'))

