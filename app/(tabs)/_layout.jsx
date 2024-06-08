import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import {Colors} from './../../constants/Colors.ts'
import { MaterialIcons } from '@expo/vector-icons';


const TabLayout = () => {
  return (
    <Tabs screenOptions={{headerShown:false,tabBarActiveTintColor:Colors.PRIMARY}}>
      <Tabs.Screen name='home'
        options={{
          tabBarLabel:'Home',
          tabBarIcon:({color})=><Ionicons name="home" size={24} color={color} />
        }}
      />
      <Tabs.Screen name='explore'
        options={{
          tabBarLabel:'Explore',
          tabBarIcon:({color})=><MaterialIcons name="explore" size={24} color={color}/>
        }}
      />
      <Tabs.Screen name='profile'
        options={{
          tabBarLabel:'Profile',
          tabBarIcon:({color})=><FontAwesome5 name="user-alt" size={24} color={color}/>
        }}
      />
    </Tabs>
  )
}

export default TabLayout