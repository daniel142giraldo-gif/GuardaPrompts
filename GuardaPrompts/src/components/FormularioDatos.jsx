import { useState } from 'react';

function FormularioDatos({ caja, setcaja}) {
    const [Datos, setDatos] = useState({
        datostemporales: [],
    });

    const [nuevoDato, setNuevoDato] = useState('');

    const agregarDato = () => {
        if (nuevoDato.trim() === '') {
            alert('Debes ingresar un dato');
            return;
        }

        setDatos({
            ...Datos,
            datostemporales: [
                ...Datos.datostemporales,
                nuevoDato.trim(),
            ],
        });

        setNuevoDato('');
    };

    const guardarDatos = () => {
        if (Datos.datostemporales.length === 0) {
            alert('Debes agregar al menos un dato para crear una nueva caja');
            return;
        }

        setcaja({
            ...caja,
            datos: [
                ...caja.datos,
                Datos,
            ],
        });

        setDatos({
            datostemporales: [],
        });
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

                                <input
                                    type="text"
                                    placeholder="Ingrese el dato a registrar"
                                    value={nuevoDato}
                                    onChange={(e) => setNuevoDato(e.target.value)}
                                />

                                <button type="button" onClick={agregarDato}>
                                    Guardar dato
                                </button>
                            </div>

                            <div className="lista">
                                {[...Datos.datostemporales]
                                    .sort((a, b) =>
                                        a.localeCompare(b, 'es', {
                                            numeric: true,
                                            sensitivity: 'base',
                                        })
                                    )
                                    .map((dato, indice) => (
                                        <div className="curso" key={indice}>
                                            <span>{dato}</span>
                                            <button type="button">Eliminar</button>
                                        </div>
                                    ))}
                            </div>

                            <div className="NuevaCaja">
                                <button type="button" onClick={guardarDatos}>
                                    Nueva caja
                                </button>
                            </div>

                            <div className="ListaCajas">
                                <h3>Cajas de datos</h3>

                                {caja.datos?.length > 0 ? (
                                    caja.datos.map((dato, indice) => (
                                        <div
                                            key={indice}
                                            className="experiencia"
                                        >
                                            <p>Datos:</p>

                                            <ul>
                                                {[...dato.datostemporales]
                                                    .sort((a, b) =>
                                                        a.localeCompare(b, 'es', {
                                                            numeric: true,
                                                            sensitivity: 'base',
                                                        })
                                                    )
                                                    .map((datoAgregado, i) => (
                                                        <li key={i}>
                                                            {datoAgregado}
                                                        </li>
                                                    ))}
                                            </ul>
                                        </div>
                                    ))
                                ) : (
                                    <p>No hay cajas con datos guardados</p>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

export default FormularioDatos;