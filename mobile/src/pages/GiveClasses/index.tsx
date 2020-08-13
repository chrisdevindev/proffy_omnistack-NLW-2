import React from 'react' 
import { View, ImageBackground } from 'react-native'
import giveClassesbgImage from '../../assets/images/give-classes-background.png'

import styles from './styles'

function GiveClasses(){
    return (
        <View style={styles.container}>
            <ImageBackground 
                resizeMode="contain" 
                source={giveClassesbgImage} 
                style={styles.content}
            >

            </ImageBackground>
        </View> 
        
        
        )
}

export default GiveClasses