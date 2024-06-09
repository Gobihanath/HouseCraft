import { View, Text } from 'react-native'
import React from 'react'
import UserInfo from '../../components/Profile/UserInfo'
import MenuList from '../../components/Profile/MenuList'

const profile = () => {
  return (
    <View style={{
      padding:20
    }}>
      <Text style={{
        fontFamily:'outfit-medium',
        fontSize:35
      }}>Profile</Text>

      {/* user info */}

      <UserInfo/>

      {/* menu list */}

      <MenuList/>
    </View>
  )
}

export default profile