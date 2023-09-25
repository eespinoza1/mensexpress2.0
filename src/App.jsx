
import './App.css'
import logo from "../src/assets/3.png";
import dispositivo from "../src/assets/dispositivo.png";
import mini from "../src/assets/mini.png";
import garantee from "../src/assets/guarantee.png"
import foto from "../src/assets/foto.png";
import verified from "../src/assets/verified.png";
import visgpay from "../src/assets/visagpay.png";
import camion from "../src/assets/camion.png";
import corazon from "../src/assets/corazon.png";
import back from "../src/assets/back.png";
import circuloverde from "../src/assets/circuloverde.png";
import cuatroazul from "../src/assets/4azul.png";
import tresazul from "../src/assets/3azul.png";

import c1 from "../src/assets/x.png";
import c3 from "../src/assets/x3.png";
import c4 from "../src/assets/x7.png";

import c5 from "../src/assets/x3.png";
import c6 from "../src/assets/x7.png";


import lock from "../src/assets/lock.png";



function App() {
  return (
    <>
      <div className='carousel-container'>
        <ul className='garanty'>
          <li ><img src={verified} className='pb-1' />&nbsp;100% Confiable</li>
          <li> <img src={camion} alt="" />&nbsp;Mesajería y Paquetería a Nivel Nacional</li>
          <li><img src={corazon} alt="" />&nbsp;+2000 Clientes felices</li>
          <li><img src={back} alt="" />&nbsp;Entrega 100% seguro</li>
        </ul>
      </div>

      <div className='garanty2'>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Mensexpress2.0</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Rastrea</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Cotiza aquí</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Contactenos
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Whatsapp</a></li>
                    <li><a className="dropdown-item" href="#">Correo</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Cotiza aqui</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" aria-disabled="true"></a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Rastrea tu paquete" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Buscar</button>
              </form>
            </div>
          </div>
        </nav>
      </div>

      <div className="container">
        <div className='logo'>
          <img src={logo} alt="" />
          <div className='security'>

          </div>
        </div>

        <div className='title'>
          <h1>
            Espere! estamos rastreando su paquete.
          </h1>
          <p>
            Servicio disponible de lunes a sabado desde las 8:am hasta las 5:00 pm
          </p>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Rastrea tu paquete" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Buscar</button>
          </form>
        </div>

        <div className=''>
          <ul className='checkout'>
            <li><img src={circuloverde} alt="" />&nbsp;Cotiza con nosotros</li>
            <li><img src={circuloverde} alt="" />&nbsp;Registrate</li>
            <li><img src={tresazul} alt="" />&nbsp;: Obten tu oferta</li>
            <li><img src={cuatroazul} alt="" />&nbsp;Copia tu numero de guia</li>
          </ul>
        </div>


        <div id="carouselExample" className="carousel slide carousel-slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={c1} className="d-block w-100" alt="..." style={{ width: '20%', height: 'auto' }} />
            </div>
            <div className="carousel-item">
              <img src={c3} className="d-block w-100" alt="..." style={{ width: '20%', height: 'auto' }} />
            </div>
            <div className="carousel-item">
              <img src={c4} className="d-block w-100" alt="..." style={{ width: '20%', height: 'auto' }} />
            </div>
            <div className="carousel-item">
              <img src={c5} className="d-block w-100" alt="..." style={{ width: '20%', height: 'auto' }} />
            </div>
            <div className="carousel-item">
              <img src={c6} className="d-block w-100" alt="..." style={{ width: '20%', height: 'auto' }} />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="split-container2">
          <div className="left-side2">

            <div className='product-container'>
              <img src={foto} alt="" />
              <div className='product-details'>
                <div className="star-ratings">
                  <span className="star-icon">★</span>
                  <span className="star-icon">★</span>
                  <span className="star-icon">★</span>
                  <span className="star-icon">★</span>
                  <span className="star-icon">★</span>
                </div>
                <p> Kenny Muñoz</p>
                <p>Usuario Verificado</p>
                <p>
                "¡Increíble experiencia con esta empresa! Su servicio es rápido, confiable y siempre me sorprende lo puntuales que son. Sin duda, mi elección número uno para mis envíos. ¡Gracias por hacer mi vida más fácil!" 🚚📦😃
                </p>
              </div>
            </div>

          </div>

          <div className="right-side2">

            <div className='medio'>
             
            </div>

            <div className='garantee'>
              <img src={garantee} alt="" />
              <br />
              <p className='pgarantee'>"Entregamos Tu Éxito, Siempre a Tiempo"</p>
            </div>

          </div>

        </div>

      </div>

      <div className='footer'>
        <div className='superior'>
          <ul className='footer2'>
            <li>Copyright (c) 2023  |  Código Postal IP-21-04-23-65</li>
            <li><img src={lock} alt="" />&nbsp;Secure 256-bit SSL encryption.</li>
          </ul>
        </div>
      </div>


    </>
  )
}

export default App
