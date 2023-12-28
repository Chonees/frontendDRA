import React, { useState } from 'react';

import "./QueHacemos.css";
const QueHacemos= ()=>{
    // Estado para controlar la visibilidad de las respuestas
    const [mostrarRespuestas, setMostrarRespuestas] = useState([false]);


      // Función para cambiar la visibilidad de una respuesta específica
    const toggleRespuesta = (index) => {
      setMostrarRespuestas((prevState) => {
      const nuevosEstados = [...prevState];
      nuevosEstados[index] = !nuevosEstados[index];
      return nuevosEstados;
    });
    const handleClick = (index) => {
      setMostrarRespuestas(!mostrarRespuestas[index]);
    };
  };
    return (
        <>        
          <div>
            <h1>
              <span>
                Lifestyle &amp; 
              </span>

              <span>
                Functional 
              </span>

              <span>
                Medicine. 
              </span>
            </h1>
            <div>
              <h2 >
                Un abordaje de vanguardia para optimizar tu relación con tu salud y tu manera de vivir.
              </h2>
            </div>
          </div>
         <div>
            <hr/>
            <h2>
              ¿Qué es el Lifestyle <br />&amp; Functional Medicine?
            </h2>
            <article>
              <figure>
                <img/>
              </figure>

              <p>
                Una nueva solución para tu salud que va a la raíz de tus síntomas trabajando para prevenir, restaurar y revertir disfunciones crónicas relacionadas a tu estilo de vida.
              </p>

              <figure>
                <img />
              </figure>

              <p>
                Un abordaje científico que aplica los últimos avances en biología molecular, genómica nutricional, microbiología, inmunología nutricional y neuroendocrinología.
              </p>

              <figure>
                <img/>
              </figure>
              <p>
                Un campo que cuenta con un amplio respaldo internacional, liderado por Cleveland Clinic y la Clínica Mayo en Estados Unidos y organizaciones como BANT y IFM.
              </p>
            </article>
          </div>
          <div>
            <h2>Nuestro abordaje</h2>
            <div>
              <h3>Pregunta 1</h3>
              <button onClick={() => toggleRespuesta(0)}>Mostrar respuesta</button>
              {mostrarRespuestas[0] && <p>Respuesta 1</p>}
            </div>

            <div>
              <h3>Pregunta 2</h3>
              <button onClick={() => toggleRespuesta(1)}>Mostrar respuesta</button>
              {mostrarRespuestas[1] && <p>Respuesta 2</p>}
            </div>

            <div>
              <h3>Pregunta 3</h3>
              <button onClick={() => toggleRespuesta(2)}>Mostrar respuesta</button>
              {mostrarRespuestas[2] && <p>Respuesta 3</p>}
            </div>
            <div>
              <h3>Pilares de intervencion</h3>
              <p>Trabajaremos en revitalizar, detoxificar, optimizar y recalibrar tu organismo de forma sistémica yendo a las causas detrás de tus síntomas mediante intervenciones personalizadas en nuestros seis pilares:</p>
              <ul>
                <li>Alimentacion y suplementacion</li>
                <li>Gestion del estres y relajacion</li>
                <li>Ritmo circadiano y sueño</li>
              </ul>
            </div>
            <div>
              <h3>- Modelo de atencion P4 -</h3>
              <div>
                <h4 onClick={()=> handleClick(0)}>Personalizado</h4>
                {mostrarRespuestas[2] && <p>Respuesta 2</p>}
                
              </div>
            </div>

          </div>
          
        </>
        
    )
    }
    
export default QueHacemos;