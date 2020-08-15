import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container:{ 
        padding: 20,
        backgroundColor: '#8257e5'
    },
    arrow:{
        marginTop:16,
        marginLeft:14
    },  
    logo:{
        marginTop:16,
        marginRight:14
    },
     topBar:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
     },
     title:{
         fontFamily: "Archivo_700Bold",
         color: '#fff',
         fontSize: 28,
         lineHeight: 32,
         maxWidth: 160,
         marginVertical: 40,
         marginLeft:14
     }
})

export default styles
