import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
import { useRouter } from 'expo-router'

const BusinessListCard = ({business}) => {
  
  const router=useRouter();

  return (
    <TouchableOpacity 
    onPress={()=>router.push("/businessdetail/"+business?.id)}
    style={{
      backgroundColor:Colors.PRIMARY,
      borderRadius:15,
      marginTop:20
    }}>
      <Image source={{uri:business?.imageURL}}
        style={{
            width:"100%",
            height:150,
            borderTopLeftRadius:15,
            borderTopRightRadius:15,

        }}
      />
      <View style={{
        padding:10,

      }}>
        <Text style={{
          fontFamily:"outfit-medium",
          fontSize:20,
        }}>{business?.name}</Text>
        <Text style={{
          fontFamily:"outfit",
          fontSize:13,
          color:"#fff"
        }}>{business?.contact}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default BusinessListCard