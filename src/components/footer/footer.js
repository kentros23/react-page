import React from 'react'
import '@fortawesome/fontawesome-free/css/all.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faPinterest, faHome, faMobileAlt, faEnvelope } from '@fortawesome/free-brands-svg-icons';
import './footer.css';

export const Footer = () => {
  return (
    <footer>
        <div class="container-footer-all">
		 
         <div class="container-body">

             <div class="colum1">
                 <h1>Mas informacion sobre el blog</h1>

                 <p>Este es un blog dedicado a la públicacion de contenido sencillo de leer para principiantes acerca del mundo de la Fisica.</p>

             </div>

             <div class="colum2">

                 <h1>Redes Sociales</h1>
|
                <div class="row">
                <a title="Facebook" href="https://www.facebook.com/kennethmauricio.rosalesrodriguez" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <label>Sigueme en Facebook</label>
                </div>
                <div class="row">
                <a title="Twitter" href="https://twitter.com/kentros23" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
                <label>Sígueme en Twitter</label>
                </div>

                <div class="row">
                <a title="Instagram" href="https://www.instagram.com/kennethr_6/?hl=es" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <label>Sígueme en Instagram</label>
                </div>

                <div class="row">
                <a title="Pinterest" href="https://pin.it/1oNL3k8" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faPinterest} />
                </a>
                <label>Sígueme en Pinterest</label>
                </div>


             </div>

             <div class="colum3">

                 <h1>Informacion Contactos</h1>

                 <div class="row2">
                <FontAwesomeIcon iconfaHome />
                <label>Barranquilla, Colombia Campo Alegre Conjunto Miraflores</label>
                </div>

                <div class="row2">
                <FontAwesomeIcon iconfaMobileAlt />
                <label>(+57)3016737458</label>
                </div>

                <div class="row2">
                <FontAwesomeIcon iconfaEnvelope />
                <label><a href="mailto:rosaleskenneth77@gmail.com"><h4>Contáctame aquí</h4></a></label>
                </div>

             </div>

         </div>
     
     </div>
     
     <div class="container-footer">
            <div class="footer">
                 <div class="copyright">
                     © 2022 Todos los Derechos Reservados | <a href="">kentros</a>
                 </div>

                 <div class="information">
                     <a href="">Informacion Compañia</a> | <a href="">Privacion y Politica</a> | <a href="">Terminos y Condiciones</a>
                 </div>
             </div>

         </div>
    </footer>
  )
}
export default Footer;
