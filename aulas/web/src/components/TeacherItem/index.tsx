import React from 'react'

import whatsapIcon from '../../assests/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem(){

    return(
        <article className="teacher-item">
        <header>
            <img src="https://media-exp1.licdn.com/dms/image/C4D03AQH8ApFDr-jo9g/profile-displayphoto-shrink_200_200/0?e=1602720000&v=beta&t=-hkgvXgHYw6xVQ8alrIW1JD1dO6nRojsaqKWEVhrvVg" alt="Rodrigo Monte"/>
            <div>
                <strong> Rodrigo Monte </strong>
                <span>Química</span>
            </div>
        </header>

        <p>
            Entusiata das melhores tecnologias de química avançada.
            <br/> <br/>
            Apaxionado por explodir laboratios
        </p>

        <footer>
            <p>
                Preço/hora
                <strong>R$ 500,00</strong>
            </p>
            <button type="button">
                <img src={whatsapIcon} alt="Whatsapp"/>
                Entrar em contato
            </button>
        </footer>
    </article>
    );
}


export default TeacherItem;