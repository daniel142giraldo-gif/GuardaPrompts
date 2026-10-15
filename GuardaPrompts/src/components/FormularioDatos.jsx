import { useState } from 'react';

function FormularioDatos({ caja, setcaja, siguiente }) {
    const [nuevoDato, setNuevoDato] = useState('');


    const agregarDato = () => {
        if (nuevoDato.trim() === '') {
            alert("Debes ingresar un dato");
            return;
        }

        setcaja({
            ...caja,
            datos: [
                ...caja.datos,
                nuevoDato
            ]
        });

        setNuevoDato('');

    };



    return (
        <>
            <section>
                <div className="contenedor">
                    <div className="titulo">
                        <p>Ingrese los datos a registrar</p>
                    </div>

                    <div className="datos">
                        <form>
                            <div className="input">
                                <label>Dato</label>
                                <input type="text" placeholder="Ingrese el dato a registrar"
                                    value={nuevoDato}
                                    onChange={(e) => setNuevoDato(e.target.value)}
                                />
                                <button type="button" onClick={agregarDato}>
                                    Guardar dato
                                </button>
                            </div>
                            <div className="lista">
                                {
                                    caja.datos.map(
                                        (dato, indice) => (
                                            <div className='curso'
                                                key={indice}>
                                                <span>
                                                    {dato}
                                                </span>
                                                <button type='button'>
                                                    Eliminar
                                                </button>
                                            </div>
                                        )
                                    )
                                }
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
};
export default FormularioDatos;