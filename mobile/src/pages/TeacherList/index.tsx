import React from 'react'
import { View } from 'react-native'

import TeacherItem from '../../components/TeacherItem'
import PageHeader from '../../components/PageHeader'

import styles from './styles'
import { ScrollView } from 'react-native-gesture-handler'

function TeacherList(){
    return (
        <View style={styles.container}>
            <PageHeader title="Proffys Disponíveis"/> 

            <ScrollView>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </ScrollView>
        </View>
        
    )
}

export default TeacherList