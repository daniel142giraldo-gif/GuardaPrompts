import { useState } from 'react'

import FormularioDatos from './components/FormulariosDatos.jsx'
import VistaPrevia from './components/VistaPrevia.jsx'

function App() {

  const [paso, setPaso] = useState(1);

  const [caja, setcaja] = useState({
    datos: [],

  });


  return (
    <>
      <div className="contenedor">
        <header>
          {
            paso === 1 &&
            <FormularioDatos
              caja={caja}
              setcaja={setcaja}
              siguiente={() => setPaso(2)}
            />
          }

          {
            paso === 2 && (<FormularioAcademico
              persona={persona}
              setpersona={setpersona}
              siguiente={() => setPaso(3)}
              anterior={() => setPaso(1)}
            />
            )
          }

          {
            paso === 3 && (<FormularioExperiencia
              persona={persona}
              setpersona={setpersona}
              siguiente={() => setPaso(4)}
              anterior={() => setPaso(2)}
            />
            )
          }
          {
            paso === 4 && (<VistaPrevia
              persona={persona}
              anterior={() => setPaso(3)}
              guardarhojavida={guardarhojavida}
            />
            )
          }


        </header>
      </div>
      <Footer />
    </>
  )
}

export default App
