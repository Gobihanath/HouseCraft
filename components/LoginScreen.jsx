import { View, Text, Image } from 'react-native'
import React from 'react'
import img1 from './../assets/images/login.png';
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
    <View>

        <View style={{
            display:'flex',
            alignItems: 'center',
            marginTop:80,

        }}>
      
        <Image source={img1}
        style={{
            width:230,
            height:450,
            borderRadius:20,
            borderWidth:2,
            borderColor:'black'
        }}
        />

       </View>

       <View style={styles.subContainer}>

            <Text style={{
                fontSize:30,
                fontFamily:'outfit-bold',
                textAlign:'center',

            }}>Your Ultimate 
            <Text style={{
                color:Colors.PRIMARY
            }}> Community Business Directory</Text> App</Text>
        <Text style={{
            fontSize:15,
            fontFamily:'outfit',
            textAlign:"center",
            marginVertical:15,
            paddingHorizontal:20,
            color:Colors.GRAY

        }}>Find Your Favorite business near you aand post your business</Text>
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
        padding: 20,
        margin:-50,
       },
    btn:{
        backgroundColor:"black",
        padding:16,
        borderRadius:50,
        marginHorizontal:40,
        marginTop:20

    }
})

export default LoginScreen