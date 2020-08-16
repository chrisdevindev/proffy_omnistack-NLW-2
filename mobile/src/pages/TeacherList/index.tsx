import React from 'react'
import { View, Text } from 'react-native'

import TeacherItem from '../../components/TeacherItem'
import PageHeader from '../../components/PageHeader'

import styles from './styles'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace'

function TeacherList() {
    return (
        <View style={styles.container}>
            <PageHeader title="Proffys Disponíveis">
                <View style={styles.searchForm}>
                    <Text style={styles.label}>Matéria</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Qual a matéria?'
                    />

                    <View style={styles.inputGroup}>
                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>Dia da semana</Text>
                            <TextInput
                                style={styles.input}
                                placeholder='Qual o dia?'
                            />
                        </View>

                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>Horário</Text>
                            <TextInput
                                style={styles.input}
                                placeholder='Qual horário'
                            />
                        </View>
                    </View>
                </View>
            </PageHeader>

            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16
                }}
            >
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </ScrollView>
        </View>

    )
}

export default TeacherList