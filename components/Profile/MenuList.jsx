import { View, Text, FlatList, Image, TouchableOpacity, Share } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
import { useRouter } from 'expo-router'
import { SignedOut, useAuth } from '@clerk/clerk-expo'

const MenuList = () => {

   const {signOut} =useAuth();

    const menuList=[
        {
            id:1,
            name:"Add Business",
            icon:require('../../assets/images/add.png'),
            path:'/business/add-business'

        },

        {
            id:2,
            name:"My Business",
            icon:require("../../assets/images/briefcase.png"),
            path:'/business/my-business'

        },

        {
            id:3,
            name:"Share App",
            icon:require("../../assets/images/share1.png"),
            path:'share'

        },

        {
            id:4,
            name:"Log Out",
            icon:require("../../assets/images/round.png"),
            path:'logout'

        },
    ]

    const router=useRouter();

    const onMenuClick=(item)=>{
        if(item.path=='logout'){
            signOut();
            return;
        }
        if(item.path=='share'){
            Share.share(
                {
                message:"Download My HouseCraft App on Google Playstore- GobiKisho "
                }
            )
            return;
        }
        router.push(item.path)
    }

  return (
    <View style={{
          marginTop:50,
    }}>
      <FlatList
        data={menuList}
        numColumns={2}
        renderItem={({item,index})=>(
            <TouchableOpacity 
            onPress={()=>onMenuClick(item)}
            style={{
                display:"flex",
                flexDirection: "row",
                alignItems:"center",
                gap:10,
                flex:1,
                padding:10,
                borderRadius:15,
                borderWidth:1,
                margin:10,
                backgroundColor:Colors.PRIMARY,
                borderColor:"#000"
            }}>
                <Image source={item.icon}
                    style={{
                        width:50,
                        height:50
                    }}
                />
                <Text style={{
                    fontFamily:"outfit-medium",
                    flex:1
                }}>{item.name}</Text>
            </TouchableOpacity>
    )}
      />

      <Text style={{
        fontFamily:"outfit",
        textAlign:"center",
        marginTop:50,
        color:Colors.GRAY
      }}>Developed by Gobi </Text>
    </View>
  )
}

export default MenuList