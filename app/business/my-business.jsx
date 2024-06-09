import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useUser } from '@clerk/clerk-expo'
import { collection, getDocs, query, where } from 'firebase/firestore';
import {db} from "../../Configs/FirebaseConfig.js"
import BusinessListCard from '../../components/BusinessList/BusinessListCard'
import { useNavigation } from 'expo-router';
import { Colors } from '../../constants/Colors';



const MyBusiness = () => {
    
    const {user}=useUser();

    const [businessList,setBusinessList]=useState([]);
    const [loading,setLoading]=useState(false);
    const navigation=useNavigation();

    useEffect(()=>{
        navigation.setOptions({
            headerShown: true,
            headerTitle:"My Business",
            headerStyle:{
                backgroundColor:Colors.PRIMARY
            }
        })
        user&&GetUserBusiness();
    },[user])
    

    // Get business list by user email
    const GetUserBusiness=async()=>{
        setLoading(true);
        setBusinessList([]);
        const q=query(collection(db,'BusinessList'),where('userEmail','==',user?.primaryEmailAddress?.emailAddress));

        const querySnapshot=await getDocs(q);

        querySnapshot.forEach((doc)=>{
            console.log(doc.data());
            setBusinessList(prev=>[...prev,{id:doc.id,...doc.data()}])
        })
        setLoading(false);
    }



  return (
    <View style={{
        padding:30
    }}>
      <Text style={{
        fontFamily:"outfit-medium",
        fontSize:30,
      }}>My Listings</Text>

      <FlatList
        data={businessList}
        onRefresh={GetUserBusiness}
        refreshing={loading}
        renderItem={({item,index})=>(
            <BusinessListCard business={item}
                key={index}
            />
        )}
      />
    </View>
  )
}

export default MyBusiness