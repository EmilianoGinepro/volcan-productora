import React from 'react';
import { Nav } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";


const NavrBar = () => {
  return (
    <nav className='nav'>
      <div className='titulo'>
        <h1>Volcán</h1>
        <h2>Productora Audiovisual</h2>
      </div>
      <div className='menu'>
        <Nav.Item>
          <Nav.Link href='#trabajos'>Servicios</Nav.Link>
        </Nav.Item>
                <Nav.Item>
          <Nav.Link href='#nosotros'>Nosotros</Nav.Link>
        </Nav.Item>
                <Nav.Item>
          <Nav.Link href='#contactenos'>Contactenos</Nav.Link>
        </Nav.Item>
      </div>

      </nav>
  )
}

export default NavrBar