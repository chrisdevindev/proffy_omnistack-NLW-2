import React from 'react'

import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'
import Input from '../../components/Input'
import Select from '../../components/Select'


import './style.css'

function TeacherList() {
    return (
        <div>
            <div id="page-teacher-list" className="container">
                <PageHeader title="Estes são os proffys disponíveis.">
                    <form action="" id="search-teachers">

                        <Select
                            name="subject"
                            label="Matéria"
                            options={[
                                { value: 'Artes', label: 'Artes' },
                                { value: 'Biologia', label: 'Biologia' },
                                { value: 'Programação', label: 'Programação' },
                                { value: 'Matemática', label: 'Matemática' },
                                { value: 'Psicologia', label: 'Psicologia' },
                                { value: 'Designer', label: 'Designer' },
                            ]}
                        />
                         <Select
                            name="week_day"
                            label="Dia da Semana"
                            options={[
                                { value: '0', label: 'Domingo' },
                                { value: '1', label: 'Segunda-feira' },
                                { value: '2', label: 'Terça-feira' },
                                { value: '3', label: 'Quarta-feira' },
                                { value: '4', label: 'Quinta-feira' },
                                { value: '5', label: 'Sexta-feira' },
                                { value: '6', label: 'Sábado' },
                            ]}
                        />
                        <Input type="time" name="time" label="Hora" />

                    </form>
                </PageHeader>

                <main>
                    <TeacherItem />
                    <TeacherItem />
                    <TeacherItem />
                    <TeacherItem />
                </main>
            </div>
        </div>
    )
}
export default TeacherList;