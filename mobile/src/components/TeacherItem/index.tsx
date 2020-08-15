import React from 'react'
import { View, Image, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import heartOutLineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

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

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora{'  '}
                    <Text style={styles.priceValue}>R$ 100,00</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton style={styles.favoriteButton}>
                        <Image source={heartOutLineIcon}/>
                    </RectButton>

                    <RectButton style={styles.contactButton}>
                        <Image source={whatsappIcon}/>
                        <Text style={styles.contactButtonText}>Entrar em contato</Text> 
                    </RectButton>
                </View>
            </View>
        </View>
    )
}
export default TeacherItem