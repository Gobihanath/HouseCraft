import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '../../constants/Colors'
import { query } from 'firebase/database'
import { collection,getDocs} from 'firebase/firestore'
import {db} from "../../Configs/FirebaseConfig.js"
import CategoryItem from './CategoryItem.jsx'
import { useRouter } from 'expo-router'



const Category = () => {
  
  
  const[categoryList,setCategoryList] = useState([]);
  const router=useRouter();


  useEffect(()=>{
    GetCategoryList();

  },[])


  const GetCategoryList=async()=>{
    setCategoryList([]);
    const q=query(collection(db,'Category'));
    const querySnapshot=await getDocs(q);

    querySnapshot.forEach((doc)=>{
      console.log(doc.data())
      setCategoryList(prev=>[...prev,doc.data()])
    })

  }


  return (
    <View>
        <View style={{
            padding:20,
            display:'flex',
            flexDirection: 'row',
            justifyContent: "space-between",
            marginTop:10,
        }}>
            <Text style={{   
                fontSize:20,
                fontFamily:"outfit-medium",
            }}>Category   
            </Text>

            <Text style={{
               color :Colors.PRIMARY,
               fontFamily:"outfit-medium",
            }}>View All</Text>
        </View>

        <FlatList

          data={categoryList}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{
            marginLeft:20
          }}
          renderItem={({item,index})=>(
            <CategoryItem 
             category={item}
             key={index}
             onCategoryPress={(category)=>router.push('/businesslist/'+item.name)}

             />
          )}
        />
    </View>
  )
}

export default Category