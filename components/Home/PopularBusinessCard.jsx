import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
import { useRouter } from 'expo-router'

export default function PopularBusinessCard({business}) {

  const router =useRouter();
  return (
    <TouchableOpacity 
    onPress={()=>router.push("/businessdetail/"+business?.id)}
    style={{
        marginLeft:10,
        padding:10,
        marginTop:10,
        marginRight:10,
        backgroundColor:"#EBEEEE",
        borderRadius:15

    }}>
      <Image source={{uri:business?.imageURL}}
        style={{
            width:340,
            height:180,
            borderRadius:10
        }}
      />
      <View style={{marginTop:7,gap:5}}>
        <Text style={{
            fontFamily:"outfit-bold",
            fontSize:17,
        }}>{business.name}</Text>

        <Text style={{
            fontFamily:"outfit",
            fontSize:13,
            color:Colors.GRAY
        }}>{business.land}</Text>
        <View style={{
          display:'flex',
          flexDirection:'row',
          justifyContent: 'space-between',
        }}>
        <View style={{
          display:'flex',
          flexDirection:'row',
          gap:5


        }}>
          <Image source={require('../../assets/images/rating.png')}
            style={{
              width:15,
              height:15
            }}
          />
          <Text style={{fontFamily:"outfit"}}>4.5</Text>
        </View>
        <Text
        style={{
          fontFamily:"outfit",
          backgroundColor:Colors.PRIMARY,
          color:"#fff",
          padding:4,
          fontSize:12,
          borderRadius:5
        }}>{business.category}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}