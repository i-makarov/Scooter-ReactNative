import { StyleSheet } from "react-native"
import { colors } from "./colors"
import { fonts } from "./fonts"

export const appScreen = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
    },
    //LOGIN
    Emailinput: {
      height:40,
      marginLeft: 35,
      marginRight:35,
      backgroundColor:'#F2F4F5',
      borderRadius:4,
      fontSize: 13,
      //fontFamily: fonts.body
    },
    Passinput: {
      marginTop: 16, 
      marginLeft: 35,
      marginRight:35,
      height: 40, 
      backgroundColor:'#F2F4F5', 
      fontSize: 13, 
      borderRadius:4
      //fontFamily: fonts.body
    },
    Loginbutton:{
      marginTop:28,
      height: 40,
      marginLeft: 35,
      marginRight: 35,
      backgroundColor: 'black',
      borderRadius: 10,
    },
    ViewArrowBack:{
      backgroundColor: 'black',
      height: 31,
      width: 31,
      marginRight: 254,
      marginLeft: 35,
      borderRadius: 10,
      shadowColor:'#000',
      shadowOpacity: 0.25,
      shadowOffset: {width: 2, height:6},
    },
    Arrowback:{
      marginTop: 9,
      marginBottom: 10,
      marginLeft:11,
      marginRight: 13,
    },
    Logintext:{
      marginBottom: 42,
      fontSize: 24,
    },
    //REGISTER

    Signbutton:{
      marginTop:37,
      height: 40,
      marginLeft: 35,
      marginRight: 35,
      backgroundColor: 'black',
      borderRadius: 10,
      
    },
    Signtext:{
      marginBottom:37,
      fontSize: 24,
    },
    UserinputSign: {
      height:40,
      marginLeft:35,
      marginRight:35,
      backgroundColor:'#F2F4F5',
      borderRadius:4,
      fontSize: 13,
      //fontFamily: fonts.body
    },
    EmailinputSign: {
      marginTop:13,
      height:40,
      marginLeft:35,
      marginRight:35,
      backgroundColor:'#F2F4F5',
      borderRadius:4,
      fontSize: 13,
      //fontFamily: fonts.body
    },
    PassinputSign: {
      marginTop: 13, 
      marginLeft:35,
      marginRight:35,
      height: 40, 
      backgroundColor:'#F2F4F5', 
      fontSize: 13, 
      borderRadius:4
      //fontFamily: fonts.body
    },
    Signtext2:{
      marginTop: 17,
      fontSize:13,
    },
    GoogleButton:{
      height: 40,
      marginTop: 17,
      marginLeft: 35,
      marginRight: 35,
      borderWidth: 1,
      borderRadius: 10,
      borderColor: '#E5E5E5',      
    }
})

