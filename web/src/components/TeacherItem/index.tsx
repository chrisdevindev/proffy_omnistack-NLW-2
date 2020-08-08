import React from 'react'
import whatsAppIcon from '../../assets/images/icons/whatsapp.svg'
import './style.css'


export interface Teacher{
    id: number;
    avatar: string;
    bio: string;
    cost: number;
    name: string;
    subject: string;
    whatsapp: string
}

interface TeacherItemProps{
    teacher: Teacher;
}



const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
    return (
        <article className="teacher-item">
            <header>
                <img src={teacher.avatar} alt={teacher.name} />
                <div>
                <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>

            <p>{teacher.bio}</p>
            
            <footer>
                <p>
                    Preço/hora
                <strong>{teacher.cost}</strong>
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