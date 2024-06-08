import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
import {  useRouter } from 'expo-router'


const BusinessListCard = ({business}) => {

  const router = useRouter();
  return (
    <TouchableOpacity style={{
        padding:10,
        margin:10,
        borderRadius:15,
        backgroundColor:"#fff",
        display:'flex',
        flexDirection:'row',
        gap:20,
    

    }}
    onPress={()=>router.push('/businessdetail/'+business.id)}
    >
      <Image source={{uri:business.imageURL}}
        style={{
            width:150,
            height:120,
            borderRadius:15
        }}
      />
      <View style={{
        flex:1,
        gap:7
      }}>
        <Text style={{
            fontFamily:'outfit',
            fontSize:20
        }}>{business.name}</Text>

        <Text style={{
            fontFamily:"outfit",
            color:Colors.GRAY,
            fontSize:15
            


        }}>{business.land}</Text>
        
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
      </View>
    </TouchableOpacity>
  )
}

export default BusinessListCard