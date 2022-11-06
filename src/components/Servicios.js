import React, { useState, useEffect } from 'react';
import { Card, Button, Modal  } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Servicio from '../services/servicioService'


const Servicios = () => {

    const [servicios, setServicios] = useState([])
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);
    const [show6, setShow6] = useState(false);
    const [show7, setShow7] = useState(false);
    let keyModal1 = '';
    let keyModal2 = '';
    let keyModal3 = '';
    let keyModal4 = '';
    let keyModal5 = '';
    let keyModal6 = '';
    let keyModal7 = '';

    useEffect(() => {
    Servicio.getServicios()
      .then((servicio) => {
        setServicios(servicio)
      })
    }, [])

    const showModal = (id) => {

        if (id === keyModal1) {
            setShow1(true);
        };
        if(id === keyModal2) {
            setShow2(true);
        };
        if(id === keyModal3) {
            setShow3(true);
        };
        if(id === keyModal4) {
            setShow4(true);
        };
        if(id === keyModal5) {
            setShow5(true);
        };
        if(id === keyModal6) {
            setShow6(true);
        };
        if(id === keyModal7) {
            setShow7(true);
        };

    }

    const closeModal = (e) => {
        setShow1(false);
        setShow2(false);
        setShow3(false);
        setShow4(false);
        setShow5(false);
        setShow6(false);
        setShow7(false);
  }

  return (
    <>
        <div className='tarjetas'>
            {servicios.map((dato) => {
                const {id,modal,titulo,texto} = dato
                return <div className='tarjeta' key={id}>
                    <Card key={id} >
                        <Card.Body >
                            <Card.Title>{titulo}</Card.Title>
                            <Card.Text>{texto}</Card.Text>
                            <Button variant="primary" onClick={e=>showModal(modal)}>Seguir leyendo…</Button>
                        </Card.Body>
                    </Card>
                </div>
            })}
          </div>


          <Modal show={show1} onHide={closeModal} key={keyModal1= "modal-1"}>
            <Modal.Header >
                <Modal.Title >Banners Webs Animados</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <h1>Banners Webs Animados</h1>
                    <p>
                        Mediante personalizados y atractivos diseños atraemos usuarios desde
                        toda la red a tu sitio para que hagan una compra, si ese fuera el
                        objetivo Son una sólida estrategia de crecimiento empresarial. Algunas
                        razones por las que las empresas invierten en la publicidad de banners
                        online son para:
                    </p>
                    <ul>
                      <li>Conducir el tráfico a la página web</li>
                      <li>Vender productos en línea</li>
                      <li>Atraer la atención de los clientes</li>
                      <li>Ofrecer descuentos, ventas y promociones</li>
                    </ul>
                    <p>En Volcán estamos listos para hacer crecer tu idea.</p>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={closeModal}>
                    Cerrar
                </Button>
              </Modal.Footer>
          </Modal>

          <Modal show={show2} onHide={closeModal} key={keyModal2= "modal-2"}>
            <Modal.Header >
                <Modal.Title >Pack Gráfico Animado</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h1>Pack Gráfico Animado</h1>
                <p>
                    Cada vez hay más y más personas en la red vendiendo sus productos,
                    promocionando su empresa o buscando seguidores para su canal. Sin un
                    buen diseño de imagen se terminan perdiendo entre toda la oferta que
                    hay. En Volcán te recomendamos un pack personalizado gráfico adaptado a
                    tu necesidad. Logos y logotipos animados, aperturas, zócalos, barridas o
                    separadores con su propia identidad cohesionada. Aquí nuestra
                    creatividad no tiene barreras. Creamos todos los aspectos gráficos para
                    que tu producción audiovisual esté alineada con tu marca o producto.
                    Contanos tu idea, pasanos una referencia que te inspire.
                </p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={closeModal}>
                  Cerrar
              </Button>
            </Modal.Footer>
          </Modal>

            <Modal show={show3} onHide={closeModal} key={keyModal3= "modal-3"}>
              <Modal.Header >
                <Modal.Title >Anuncios Animados</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h1>Anuncios Animados</h1>
                <p>
                  Son videos cortos, de entre 10 a 30 segundos, en los que se busca llamar
                  la atención de la audiencia para incrementar las conversiones. Tienen
                  que transmitir un mensaje claro y al mismo tiempo ser entretenidos.
                  Tienen un alto impacto en los usuarios y te destacan de los demás.
                  Mandanos tu propuesta y juntos la llevamos al próximo nivel.
                </p>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={closeModal}>
                  Cerrar
                </Button>
              </Modal.Footer>
            </Modal>

            <Modal show={show4} onHide={closeModal} key={keyModal4= "modal-4"} scrollable={true}>
              <Modal.Header >
                <Modal.Title >Videos Tutoriales y Explicativos Animados</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h1>Videos Tutoriales Animados</h1>
                <p>
                  Buscan contar de manera breve y efectiva los paso a paso de lo que
                  quieras explicar. Como un arreglo, una actividad, un servicio o una
                  idea. Por medio de elementos como ilustraciones, textos y diseños
                  convierten un mensaje complejo en uno simple para llegar a más personas.
                  Las empresas y organizaciones suelen usarlos para explicar funciones de
                  su negocio, sus servicios o productos. Se pueden colocar en páginas web,
                  redes sociales, ferias comerciales, newsletters, reuniones de ventas y
                  uso interno.
                </p>
                <h1>Videos Explicativos Animados</h1>
                <p>
                  Ayudan a conseguir leads de calidad, que luego pueden convertirse en
                  clientes. Además, reducen la tasa de rebote y aumentan el tiempo de
                  visita en las páginas web. Son una gran herramienta para mejorar el
                  posicionamiento SEO de la web, motores de búsqueda y en YouTube. Algunas
                  de sus características:
                </p>
                <ul>
                  <li>Suelen durar menos de dos minutos.</li>
                  <li>Claros y concisos.</li>
                  <li>Hacen un llamado a la acción específica.</li>
                  <li>Tono conversacional.</li>
                </ul>
                <p>
                  Nos dedicamos a crear vídeos explicativos personalizados, con especial
                  énfasis en resaltar el branding de la marca. Usamos técnicas de
                  animación profesionales como el Motion Graphics y animación 2D
                  Escribinos mediante nuestro formulario para que podamos empezar a
                  trabajar juntos.
                </p>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={closeModal}>
                  Cerrar
                </Button>
              </Modal.Footer>
            </Modal>

          <Modal show={show5} onHide={closeModal} key={keyModal5= "modal-5"} scrollable={true}>
            <Modal.Header >
                <Modal.Title >Anuncios Animados</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h1>Videos Institucionales:</h1>
              <p>
                Los videos institucionales suelen dividirse en dos grandes categorías.
                Por un lado, los videos corporativos, que están orientados a contar la
                historia de la empresa, su trayectoria y misión. Por el otro, los videos
                testimoniales o casos de éxito, en los que se busca dar a conocer
                experiencias con clientes y empleados. Estos videos son ideales para
                colocar en sitios webs, presentaciones, exposiciones, redes sociales y
                emails.
              </p>
              <h1>Producción de Videos Corporativos</h1>
              <p>
                transmitir la historia, visión y experiencia de cada empresa e
                institución de manera personalizada y profesional. Este tipo de
                contenido destaca sus productos o servicios, su manera de trabajar y
                fortalezas frente a la competencia. Las jornadas de filmación se
                realizan dentro de la compañía, donde nos encargamos de mostrar en
                detalle las instalaciones, los productos y su diseño, elaboración,
                embalaje y distribución en caso de que haya. También entrevistamos a
                directivos, empleados y clientes. Hacemos especial énfasis en que el
                branding, el equipo y el producto / servicio quede visible durante la
                narrativa.
              </p>
              <h1>Video Testimonial o Caso de Éxito</h1>
              <p>
                Los videos testimoniales o de casos de éxito son cada vez más utilizados
                por grandes empresas como Facebook, YouTube, Mercado Libre y Amazon. En
                este tipo de contenido se cuentan testimonios de empleados y clientes
                que hayan obtenido buenos resultados con la empresa. Esto genera una
                sensación de confianza hacia la institución y atrae nuevos clientes.
                Decimos cuáles son tus objetivos.
              </p>
            </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={closeModal}>
                  Cerrar
                </Button>
            </Modal.Footer>
          </Modal>

          <Modal show={show6} onHide={closeModal} key={keyModal6= "modal-6"} scrollable={true}>
            <Modal.Header >
              <Modal.Title >Anuncios Animados</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h1>Videos Educativos</h1>
              <p>
                No sólo puede ser un video sobre el producto o servicio, sino también
                sobre temas relacionados a la empresa, problemas comunes que tengan sus
                usuarios o información adicional útil y valiosa. Pueden adaptarse para
                ser usados en redes sociales, páginas web y el canal de YouTube de la
                empresa. Son útiles para todo tipo de industrias, como educación,
                cuidado de salud, tecnología, marketing y servicios financieros. Nos
                dedicamos a hacer videos educativos para empresas y todo tipo de
                instituciones. Nos caracterizamos por lograr un hilo narrativo atractivo
                y que cumpla el objetivo de educar a quien lo está viendo. Traenos tu
                idea y juntos la llevamos al próximo nivel. Contactanos
              </p>
              <h1>Video Tutorial</h1>
              <p>
                Videos que explican de forma clara y directa el paso a paso para
                realizar lo que quieras explicar. Hoy en día el video tutorial es el
                contenido más buscado en internet. y están presentes en todas las
                plataformas como Instagram, Facebook, Youtube, Tiktok. No esperes más,
                contanos tu idea.
              </p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={closeModal}>
                  Cerrar
                </Button>
            </Modal.Footer>
          </Modal>

          <Modal show={show7} onHide={closeModal} key={keyModal7= "modal-7"}>
            <Modal.Header >
              <Modal.Title >Anuncios Animados</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h1>Curso Web</h1>
              <p>
                Los cursos online revolucionaron la educación hace ya muchos años, pero
                especialmente en el 2020 ha cobrado un protagonismo esencial debido a la
                pandemia. Y han llegado para quedarse. Los cursos en línea brindan un
                conocimiento más práctico y se desarrollan habilidades cotidianas sobre
                un tema de manera más efectiva que la educación tradicional. Esto ha
                aumentado la credibilidad de las formaciones online, ya que todo el
                mundo empieza a tomar en serio los certificados obtenidos de esta forma.
                Por lo tanto, compartir tus habilidades creando un curso online es una
                excelente manera de retribuir a la comunidad. Lo haces una vez y lo
                monetizas siempre. Nos especializamos en crear un producto audiovisual
                de calidad y de acuerdo a tus necesidades. Traenos tu idea de curso y
                nosotros la realizamos con vos.
              </p>
            </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={closeModal}>
                  Cerrar
                </Button>
              </Modal.Footer>
          </Modal>
    </>
  )
}

export default Servicios