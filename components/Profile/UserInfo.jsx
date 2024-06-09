import { View, Text, Image } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import { Colors } from '../../constants/Colors'

const UserInfo = () => {


const {user}=useUser();

  return (
    <View style={{
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center',
        marginTop:30,

    }}>
      <Image source={{uri:user?.imageUrl}}
        style={{
            width:100,
            height:100,
            borderRadius:50
        }}
      />

      <Text style={{
        fontFamily:"outfit-medium",
        fontSize:20
      }}>{user?.fullName}</Text>
      <Text style={{
        fontFamily:"outfit",
        fontSize:16,
        color:Colors.PRIMARY
      }}>{user?.primaryEmailAddress?.emailAddress}</Text>
    </View>
  )
}

export default UserInfo