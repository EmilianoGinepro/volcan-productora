import React from 'react';
import Servicios from './Servicios';

const Trabajos = () => {
  return (
    <section id="trabajos" className="trabajos">
      <div className='seccionTrabajos'>
        <h1>La creatividad nos brota como lava a un Volcán.</h1>
        <p>
            Como Productora Audiovisual nos caracterizamos por crear productos
            animados para distintos tipos de plataformas:
        </p>
        <p>Facebook, Instagram, Tik Tok, YouTube, Google, entre otras.</p>
        <div>
          <Servicios />
        </div>
      </div>

    </section>
  )
}

export default Trabajos