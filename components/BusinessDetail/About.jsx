import { View, Text } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'

const About = ({business}) => {
  return (
    <View style={{
        padding:20,
        backgroundColor:"#fff",
        
    }}>
      <Text
      style={{
        fontFamily:'outfit-medium',
        fontSize:20,
        color:Colors.PRIMARY
      }}>About</Text>
      <Text
      style={{
        fontFamily:'outfit',
        lineHeight:20,
        textAlign:"justify",
        paddingTop:20
      }}>{business?.about}</Text>
    </View>
  )
}

export default About
