import React from 'react'
import { View, Image, Text } from 'react-native'

import styles from './style'

function TeacherItem() {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    style={styles.avatar}
                    source={{ uri: 'https://github.com/ccastro01.png' }}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Christian Castro</Text>
                    <Text style={styles.subject}>Programação</Text>
                </View>
            </View>

            <Text style={styles.bio}>
                Lover of technology and programming. 
                I’m currently working as Full Stack developer on @TecNorth and 
                I helping young aspirants in the programming world at @DevInDev.br I'm be specializing in 
                ReactJs, React-Native and NodeJS.
            </Text>
        </View>
    )
}
export default TeacherItem