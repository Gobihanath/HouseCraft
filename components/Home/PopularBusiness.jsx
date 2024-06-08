import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { Colors } from '../../constants/Colors'
import { collection, getDocs, limit, query } from 'firebase/firestore'
import { db } from '../../Configs/FirebaseConfig'
import { useState } from 'react'
import { FlatList } from 'react-native'
import { ScrollView } from 'react-native'
import PopularBusinessCard from './PopularBusinessCard'

export default function PopularBusiness() {

        const[businessList,setBusinessList] = useState([]);

        useEffect(()=>{
            GetBusinessList();
        },[])
        
        const GetBusinessList=async()=>{
            setBusinessList([]);
            const q=query(collection(db,'BusinessList'),limit(10));
            const querySnapshot=await getDocs(q);

            querySnapshot.forEach((doc)=>{
                console.log(doc.data());
                setBusinessList(prev=>[...prev,doc.data()])
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
            }}>Popular Designs   
            </Text>

            <Text style={{
               color :Colors.PRIMARY,
               fontFamily:"outfit-medium",
            }}>View All</Text>
        </View>

        {/* <FlatList
            data={businessList}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item,index})=>(
                <PopularBusinessCard
                key={index}
                    business={item}
                />
            )}
        /> */}

    <ScrollView
      horizontal={false}
      showsHorizontalScrollIndicator={false}
      style={{gap:30}}
    >
      {businessList.map((item, index) => (
        <PopularBusinessCard
          key={index}
          business={item}
        />
      ))}
    </ScrollView> 

    </View>
  )
}