import React from 'react'
import './DatosPersonales.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
	faTwitter,
	faGithub,
	faLinkedin,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import INFO from '../images/user';
import images from '../images/foto.jpg';

export const DatosPersonales = () => {
  return (
    
        <div className='card-container'>
			<div class="card">
				<h2>¿Quien soy?</h2>
				<p>
          Soy un estudiante de ingenieria en sistemas de la universidad de la costa cursando actualmente el octavo semestre, me gusta resolver problemas o acertijos desde puntos de vista logicos esto ayudandome a tener una perspectiva util a la hora de la resolucion de conflictos
          </p>
				
          <div className="socials">
			<div className="social">
				<a href={INFO.socials.twitter} target="_blank" rel="noreferrer">
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faTwitter}
							className="social-icon"
						/>
					</div>
					
				</a>
			</div>

			<div className="social">
				<a href={INFO.socials.github} target="_blank" rel="noreferrer">
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faGithub}
							className="social-icon"
						/>
					</div>
					
				</a>
			</div>

			<div className="social">
				<a
					href={INFO.socials.linkedin}
					target="_blank"
					rel="noreferrer"
				>
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faLinkedin}
							className="social-icon"
						/>
					</div>
					
				</a>
			</div>

			<div className="social">
				<a
					href={INFO.socials.instagram}
					target="_blank"
					rel="noreferrer"
				>
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faInstagram}
							className="social-icon"
						/>
					</div>
					
				</a>
			</div>

			<div className="email">
				<div className="email-wrapper">
					<a
						href={`mailto:${INFO.main.email}`}
						target="_blank"
						rel="noreferrer"
					>
						<div className="social-icon">
							<FontAwesomeIcon icon={faEnvelope} />
						</div>

						
					</a>
				</div>
			</div>
		</div>
    
			</div>
      <div className="card">
    <img src={image} alt="" />
    </div>
    </div>
    
  )
}
