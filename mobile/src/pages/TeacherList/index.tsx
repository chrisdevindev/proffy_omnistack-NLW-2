import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { ScrollView, TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'

import TeacherItem from '../../components/TeacherItem'
import PageHeader from '../../components/PageHeader'

import styles from './styles'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import api from '../../services/api'


function TeacherList() {

    const [isFilterVisible, setIsFilterVisible] = useState(false)

    const [teachers, setTeachers] = useState([])

    const [subject, setSubject] = useState('')
    const [week_day, setWeekDay] = useState('')
    const [time, setTime] = useState('')


    function handleToggleFilterVisible() {
        setIsFilterVisible(!isFilterVisible)
    }

    async function handleFilterSubmit(){
        const response = await api.get('classes', {
            params:{
                subject,
                week_day,
                time,
            }
        })

        console.log(response.data)
         
        setTeachers(response.data)
    }


    return (
        <View style={styles.container}>
            <PageHeader
                title="Proffys Disponíveis"
                headerRight={(
                    <BorderlessButton onPress={handleToggleFilterVisible}>
                        <Feather style={styles.filterIcon} name="filter" size={20} color="#fff" />
                    </BorderlessButton>
                )}>


                {isFilterVisible && (
                    <View style={styles.searchForm}>
                        <Text style={styles.label}>Matéria</Text>
                        <TextInput
                            value={subject}
                            onChangeText={text => setSubject(text)}
                            style={styles.input}
                            placeholder='Qual a matéria?'
                            placeholderTextColor="#c1bccc"
                        />

                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Dia da semana</Text>
                                <TextInput
                                    value={week_day}
                                    onChangeText={text => setWeekDay(text)}
                                    style={styles.input}
                                    placeholder='Qual o dia?'
                                    placeholderTextColor="#c1bccc"
                                />
                            </View>

                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Horário</Text>
                                <TextInput
                                    value={time}
                                    onChangeText={text => setTime(text)}
                                    style={styles.input}
                                    placeholder='Qual horário'
                                    placeholderTextColor="#c1bccc"
                                />
                            </View>
                        </View>

                        <RectButton 
                            style={styles.submitButton} 
                            onPress={handleFilterSubmit}
                        >
                            <Text style={styles.submitButtonText}>
                                Filtrar
                            </Text>
                        </RectButton>
                    </View>

                )}
            </PageHeader>


            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16
                }}
            >
                {teachers.map(teacher => {
                    return <TeacherItem/>
                })}
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </ScrollView>
        </View>

    )
}

export default TeacherList