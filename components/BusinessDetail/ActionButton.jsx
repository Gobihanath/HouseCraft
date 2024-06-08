import { View, Text, FlatList, Image, TouchableOpacity, Linking, Share } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'

const ActionButton = ({business}) => {

    const actionButtonMenu=[
        {
            id:1,
            name:'Call',
            icon:require('../../assets/images/phone.png'),
            url:'tel:'+business?.contact
        },
        {
            id:2,
            name:'Location',
            icon:require('../../assets/images/location.png'),
            url:"https://maps.app.goo.gl/pnqFJaWfayNVHRcf7",
        },
        {
            id:3,
            name:'Web',
            icon:require('../../assets/images/web.png'),
            url:business?.website
        },
        {
            id:4,
            name:'Share',
            icon:require('../../assets/images/share.png'),
            url:business?.website
        }
    ]

    const OnPressHandle=(item)=>{
        if(item.name=='Share'){

            Share.share({
                message:business?.name+"\n Land:"+business?.land+"\n Find More Details on Our Web!"
            })
            return;
        }
        Linking.openURL(item.url);
    }
  return (


    <View style={{
        backgroundColor:"#fff",
        padding:20,

    }}>
      <FlatList
        data={actionButtonMenu}
        style={{marginHorizontal:10}}
        numColumns={4}
        columnWrapperStyle={{justifyContent:"space-between"}}
        renderItem={({item,index})=>(
            <TouchableOpacity key={index}
            onPress={()=>OnPressHandle(item)}>
                <Image source={item?.icon}
                    style={{
                        width:40,
                        height:40,
                    }}
                />
                <Text style={{
                    fontFamily:'outfit',
                    fontSize:12,
                    textAlign:'center',
                    marginTop:3
                }}>{item?.name}</Text>
            </TouchableOpacity>

        )}
      />
    </View>
  )
}

export default ActionButton