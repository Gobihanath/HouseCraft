import { View, Text, Image } from 'react-native'
import React from 'react'
import img1 from './../assets/images/login.png';
import img2 from './../assets/images/login1.png'
import img3 from './../assets/images/login3.png'
import { Colors } from '../constants/Colors.ts';
import { StyleSheet, TouchableOpacity } from 'react-native';
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from "../hooks/useWarmUpBrowser.tsx";
import { useOAuth } from "@clerk/clerk-expo";


WebBrowser.maybeCompleteAuthSession();
const LoginScreen = () => {

    useWarmUpBrowser();

    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);


  return (
    <View style={{
      backgroundColor:Colors.PRIMARY
    }}>

        <View style={{
            display:'flex',
            alignItems: 'center',
            marginTop:150,

        }}>
      
        <Image source={img3}
        style={{
            width:230,
            height:230,
            borderRadius:20,
            borderWidth:2,
            borderColor:'black',
            
        }}
        />

       </View>

       <View style={styles.subContainer}>
          <View style={{
            marginHorizontal:10
          }}>
            <Text style={{
                fontSize:30,
                fontFamily:'outfit-medium',
                textAlign:'center',
                marginTop:30

            }}>Welcome to our new
            <Text style={{
                color:Colors.PRIMARY
            }}> Building  Design Craft</Text> App</Text>

       </View>
        <Text style={{
            fontSize:15,
            fontFamily:'outfit',
            textAlign:"center",
            marginVertical:15,
            paddingHorizontal:10,
            color:Colors.GRAY
        
        }}>Find Your Favorite building and home designs by expert architects and share your Designs.</Text>
        <TouchableOpacity style={styles.btn} onPress={onPress}>
            <Text style={{
                textAlign:'center',
                color:"#fff",
                fontFamily:"outfit"
            }}>Let's Get Started</Text>
        </TouchableOpacity>
       
       </View>


    </View>
  )
}

const styles = StyleSheet.create({
    subContainer: {
        backgroundColor:"#fff",
        padding: 0,
        height:350,
        width:"100%",
        marginTop:100,
        borderTopRightRadius:30,
        borderTopLeftRadius:30
       },
    btn:{
        backgroundColor:"black",
        padding:16,
        borderRadius:50,
        marginHorizontal:10,
        marginTop:20

    }
})

export default LoginScreen