import { View, Text, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';


const Intro = ({business}) => {

  const router=useRouter();

  

  return (
    <View>
      <View style={{
        position: 'absolute',
        zIndex: 10,
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'space-between',
        width:"100%",
        paddingTop:30,
        paddingHorizontal:20
      }}>
      <TouchableOpacity onPress={()=>router.back()}>
      <Ionicons name="arrow-back-circle" size={40} color="black" />
      </TouchableOpacity>
      
      <Ionicons name="heart-outline" size={40} color="black" />
      </View>
      <Image source={{uri:business?.imageURL}}
        style={{
          width:"100%",
          height:340
        }}
      />
      <View style={{
        padding:20,
        marginTop:-20,
        backgroundColor:"#fff",
        borderTopLeftRadius:25,
        borderTopRightRadius:25
      }}>
        <Text style={{
          fontSize:20,
          fontFamily:'outfit-medium',
        }}>{business?.name}</Text>


        <Text style={{
          fontFamily:"outfit",
          fontSize:18
        }}>{business?.land}</Text>
      </View>
    </View>
  )
}

export default Intro