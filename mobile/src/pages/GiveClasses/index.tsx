import React from 'react' 
import { View, ImageBackground, Text } from 'react-native'
import giveClassesbgImage from '../../assets/images/give-classes-background.png'
import { RectButton } from 'react-native-gesture-handler'

import styles from './styles'
import { useNavigation } from '@react-navigation/native'

function GiveClasses(){
    const {goBack} = useNavigation()


    function handleNavigateBack(){
        goBack()
    }

    return (
        <View style={styles.container}>
            <ImageBackground 
                resizeMode="contain" 
                source={giveClassesbgImage} 
                style={styles.content}
            >
                <Text style={styles.title}>
                    Quer ser um Proffy?
                </Text>
                
                <Text style={styles.description}>
                    Para começar você precisa se cadastrar como professor na nossa plataforma web.                
                </Text>

            </ImageBackground>

            <RectButton style={styles.okButton} onPress={handleNavigateBack}>
                <Text style={styles.okButtonText}> Tudo jóia</Text>
            </RectButton>
        </View> 
        
        
        )
}

export default GiveClasses