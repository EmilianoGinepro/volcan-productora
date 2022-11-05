import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Send from '../services/sendEmailService'

const Contactenos = () => {

  const MySwal = withReactContent(Swal)

  const [nombre, setNombre] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [email, setEmail] = useState('');
  const [opcion, setOpcion] = useState('');
  const [textArea, setTextArea] = useState('');
  const [validated, setValidated] = useState(false);

  const opciones = [
    { "id": "1", "nombre": "Banners Webs Animados" },
    { "id": "2", "nombre": "Pack Gráfico Animado" },
    { "id": "3", "nombre": "Anuncios Animados" },
    { "id": "4", "nombre": "Videos Tutoriales y Explicativos Animados" },
    { "id": "5", "nombre": "Institucionales" },
    { "id": "6", "nombre": "Videos tutoriales/ educativos" },
    { "id": "7", "nombre": "Curso web" },
    { "id": "8", "nombre": "Otros"}
  ];

  const sendForm = async (e) => {
    e.preventDefault();

    const resultOpcion = opciones.find(op => op.id === opcion);
    const sendOPtion = resultOpcion.nombre;

    if (!nombre || !email || !textArea || !opcion) {
      setValidated(true);
      MySwal.fire({
        title: "Volcan",
        text: "Para poder brindarle el mejor servicio necesitamos un nombre, un email y que nos cuentes tu idea",
        icon: "error",
        buttons: "Ok",
        timer: "4000"
      })
    } else {
      try {
        await Send.postSendEmail({
          nombre,
          empresa,
          email,
          sendOPtion,
          textArea
        })
        MySwal.fire({
          title: "Volcan",
          text: "Nos vamos a contactar con usted lo antes posible y poder contarte qué podemos hacer con tus necesidades",
          icon: "success",
          timer: 6000
        });
      } catch (err) {
        console.log(err);
      }


    setNombre('');
    setEmpresa('');
    setEmail('');
    setOpcion('');
    setTextArea('');
    };


  }

  return (
    <section id="contactenos" className="contactenos">
      <div className='seccionContactenos'>
        <h1>Envianos tus consultas y propuestas</h1>
        <Form noValidate validated={validated} onSubmit={sendForm}>
            <Form.Group className="form-group" controlId="formNombre">
              <Form.Label className='form-label'>Nombre</Form.Label>
              <Form.Control
              required
              type='text'
              onChange={({ target }) => setNombre(target.value)}
              value={nombre}
              />
            </Form.Group>

            <Form.Group className="form-group" controlId="formEmpresa">
              <Form.Label>Empresa</Form.Label>
              <Form.Control
                type='text'
                onChange={({ target }) => setEmpresa(target.value)}
                value={empresa}
              />
            </Form.Group>

            <Form.Group className="form-group" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                type='email'
                onChange={({ target }) => setEmail(target.value)}
                value={email}
              />
            </Form.Group>

            <Form.Group className="form-group" controlId="formEmail">
                <Form.Label>Elija que servicio desea</Form.Label>
                <Form.Select onChange={({ target }) => setOpcion(target.value)} value={opcion}>
                      <option value="1">Banners Webs Animados</option>
                      <option value="2">Pack Gráfico Animado</option>
                      <option value="3">Anuncios Animados</option>
                      <option value="4">Videos Tutoriales y Explicativos Animados</option>
                      <option value="5">Institucionales</option>
                      <option value="6">Videos tutoriales/ educativos</option>
                      <option value="7">Curso web</option>
                      <option value="8">Otros</option>
                </Form.Select>
            </Form.Group>

              <Form.Group className="form-group" controlId="FormTextArea" >
                <Form.Label>Hablanos de tu proyecto</Form.Label>
                  <Form.Control
                    required
                    as="textarea"
                    onChange={({ target }) => setTextArea(target.value)}
                    value={textArea}
                    placeholder='No olvides contarnos tus objetivos y compartirnos alguna referencia.'
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                 Enviar
            </Button>
        </Form>
      </div>

    </section>
  )
}

export default Contactenos