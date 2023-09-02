import React from 'react'
import './navbar.css';
export const NavBar = () => {
  return (
    <div class="container__menu">


    
    <div class="menu">
        
        <label for="check__menu" id="label__check">
            <i class="fas fa-bars icon__menu"></i>
        </label>
        <nav>
            <ul>
                <li><a href="#" id="selected"></a></li>
                <li><a href="#">Datos personales</a></li>
                <li><a href="#">Perfil profesional</a></li>
                <li><a href="#">Experiencia academica</a></li>
                <li><a href="#">Experiencia profesional</a></li>
                
            </ul>
        </nav>
    </div>

</div>

  )
}
