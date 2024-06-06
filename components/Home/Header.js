import { View, Text ,Image} from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import { Colors } from '../../constants/Colors'
import { Ionicons } from '@expo/vector-icons';
import { TextInput } from 'react-native';

const Header = () => {
  
  const {user}=useUser();

  return (
    <View style={{
        padding:20,
        paddingTop:40,
        backgroundColor:Colors.PRIMARY,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20
    }}>
      <View style={{
        display: 'flex',
        flexDirection:'row',
        alignItems:'center',
        gap:10
      }}>
                <Image source={{uri:user?.imageUrl}}
                    style={{
                        width:45,
                        height:45,
                        borderRadius:50,
                        borderColor:'black',
                        borderWidth:1
                    }}

                />
                <View>
                    <Text>Welcome,</Text>
                    <Text style={{fontSize:20, fontFamily:"outfit-medium"}}>{user.fullName}</Text>
                </View>


      </View>
      <View style={{
        display: 'flex',
        flexDirection:'row',
        marginTop:15,
        marginVertical:10,
        gap:10,
        alignItems:'center',
        backgroundColor:"#fff",
        borderRadius:40,
        padding:10
        
      }}>
        <Ionicons name="search" size={24} color={Colors.PRIMARY} />
        <TextInput maxLength={40} placeholder='Search here' style={{fontFamily:'outfit',fontSize:15}}/>
      </View>
    </View>
  )
}

export default Header