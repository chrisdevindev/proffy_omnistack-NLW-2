import React from 'react'
import whatsAppIcon from '../../assets/images/icons/whatsapp.svg'
import './style.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/47678397?s=460&u=61b6356f21130c8f107da90ab4b1fcf2fadad065&v=4" alt="Christian Castro" />
                <div>
                    <strong>Christian Castro</strong>
                    <span>Programação</span>
                </div>
            </header>

            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque quae earum rerum distinctio, numquam ratione est ex architecto! Nihil, accusantium ipsum voluptatibus nostrum nemo odio facilis aliquid dolores impedit reprehenderit!
                    </p>

            <footer>
                <p>
                    Preço/hora
                            <strong>R$100,00</strong>
                </p>
                <button type="button">
                    <img src={whatsAppIcon} alt="Whatsapp" />
                            Entrar em contato
                        </button>
            </footer>
        </article>
    )
}
export default TeacherItem