import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../constants/Colors'
import { Ionicons } from '@expo/vector-icons';
import { TextInput } from 'react-native';
import Category from '../../components/Home/Category'
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../Configs/FirebaseConfig';
import ExploreBusinessList from '../../components/Explore/ExploreBusinessList';

const explore = () => {


  const [businessList,setBusinessList]=useState([]);


  const GetBusinessByCategory= async (category)=>{
    setBusinessList([]);
    const q=query(collection(db,'BusinessList'),where('category','==', category))
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc)=>{
      console.log(doc.data())
      setBusinessList(prev=>[...prev,{id:doc.id,...doc.data()}])
    })
  }


  return (
    <View style={{
      paddingHorizontal:10,
      paddingTop:30
    }}>

    <Text style={{
      fontFamily:"outfit-medium",
      fontSize:25
    }}>Explore More</Text>
      
      {/* Searchbar */}

      <View style={{
        display: 'flex',
        flexDirection:'row',
        marginTop:15,
        marginVertical:10,
        gap:10,
        alignItems:'center',
        backgroundColor:"#fff",
        borderRadius:40,
        padding:10,
        borderWidth:1,
        borderColor:Colors.PRIMARY
        
      }}>
        <Ionicons name="search" size={24} color={Colors.PRIMARY} />
        <TextInput maxLength={40} placeholder='Search here' style={{fontFamily:'outfit',fontSize:15}}/>
      </View>


      {/* category */}
      
      <Category
        explore={true}
        onCategorySelect={(category)=>GetBusinessByCategory(category)}
      />

      {/* business list */}
      <ExploreBusinessList businessList={businessList}/>

    </View>
  )
}

export default explore

const styles = StyleSheet.create({})