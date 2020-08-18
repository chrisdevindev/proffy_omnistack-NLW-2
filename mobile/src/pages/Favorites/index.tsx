import React, { useState } from 'react'
import { View } from 'react-native'
import {useFocusEffect} from '@react-navigation/native'

import styles from './styles'
import PageHeader from '../../components/PageHeader'
import { ScrollView } from 'react-native-gesture-handler'
import TeacherItem, { Teacher } from '../../components/TeacherItem'
import AsyncStorage from '@react-native-community/async-storage'

function Favorites(){

    const [favorite, setFavorites] = useState([])


    function loadFavorites(){
        AsyncStorage.getItem('favorites').then(response =>{
            if(response){
                const favoritedTeachers = JSON.parse(response)


                setFavorites(favoritedTeachers)
            }
        })
    }


    useFocusEffect(() => {  //faz executar toda vez que a tela entrar em foco
        loadFavorites()
    })

    return (
        <View style={styles.container}>
        <PageHeader title="Proffys favoritos" headerRight/> 

        <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16
                }}
            >
              {favorite.map((teacher:Teacher) => {
                  return(
                      <TeacherItem 
                        key={teacher.id}
                        teacher={teacher}
                        favorited={true}
                      />
                  )
              })}
            </ScrollView>
    </View>
    )
}

export default Favorites