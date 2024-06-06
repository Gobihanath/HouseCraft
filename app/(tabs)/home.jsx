import { View, Text,SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../../components/Home/Header'
import Slider from '../../components/Home/Slider'

const home = () => {
  return (
    <View style={{
      backgroundColor:"#fff"
    }}>
      <Header/>
      <Slider/>
    </View>
  )
}

export default home