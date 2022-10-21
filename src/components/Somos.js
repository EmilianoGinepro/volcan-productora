import React from 'react';
import Logo from '../image/volcan-logo.png';

const Somos = () => {
  return (
    <section id='somos'>
      <div className='somos' >
        <div className='logo'>
          <img src={Logo} className='img-logo' alt="volcal-productora-audiovisual" />
        </div>

        <p>
          Somos Volcán, la fuerza imparable de la naturaleza. Somos Tierra y
          Fuego. Sacamos a la luz tus proyectos,
        </p>
        <p>
          hacemos que tus ideas erupcionen de tu cabeza a las pantallas.
        </p>
        </div>
      </section>
  )
}

export default Somos