import React from 'react'
import { View, Image, ImageBackground, Text } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'

import backIcon from '../../assets/images/icons/back.png'
import logoImage from '../../assets/images/logo.png'

import styles from './styles'
import { useNavigation } from '@react-navigation/native'


interface PageHeaderProps{
    title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ( {title} ) =>{

    const { navigate } = useNavigation()


    function handleGoBack(){
        navigate('Landing')
    }


    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                
                <BorderlessButton onPress={handleGoBack}>
                    <Image source={backIcon} style={styles.arrow} resizeMode='contain'/>
                </BorderlessButton>

                <Image source={logoImage} style={styles.logo} resizeMode='contain' />
            </View>

            <Text style={styles.title}>
                {title}
            </Text>
        </View>
        
    )
}
export default PageHeader