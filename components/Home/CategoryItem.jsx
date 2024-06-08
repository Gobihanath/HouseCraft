import { View, Text ,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'

const CategoryItem = ({category,onCategoryPress}) => {
  return (
    <TouchableOpacity onPress={()=>onCategoryPress(category)}>
        <View style={{
            padding:10,
            backgroundColor:Colors.PRIMARY,
            borderRadius:50,
            marginRight:25,
        }}>
        <Image source={{uri:category.icon}}
        style={{
            width: 40,
            height: 40,
        }}
        />
        </View>
        <Text style={{
          fontSize:10,
          fontFamily:"outfit",
          textAlign:"center",
          
          paddingRight:20,

        
        }}>{category.name}</Text>
    </TouchableOpacity>
  )
}

export default CategoryItem