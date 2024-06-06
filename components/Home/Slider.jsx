import { View, Text ,Image} from 'react-native'
import React, { useEffect, useState } from 'react'
import { collection, getDocs, query } from 'firebase/firestore'
import {db} from  '../../Configs/FirebaseConfig'
import { FlatList } from 'react-native'




const Slider = () => {


 
  const [sliderList,setSliderList] = useState([]);

 useEffect(()=>{
   GetSliderList();
 },[]);
 
 const GetSliderList = async ()=>{
    setSliderList([]);
    const q= query(collection(db,'Sliders'));
    const querySnapshots=await getDocs(q)

    querySnapshots.forEach((doc)=>{
        console.log(doc.data());
        setSliderList(prev=>[...prev,doc.data()]);
    })
 }
  return (
    <View>
        <Text style={{
            fontFamily:'outfit-medium',
            fontSize:20,
            paddingLeft:20,
            paddingTop:15,
            marginBottom:5


        }}>
            > Special For You
        </Text>

        <FlatList
            data={sliderList}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            style={{
                paddingLeft:20,

            }}
            renderItem={({item,index})=>(
                <Image source={{uri:item.imageURL}}
                    style={{
                        width:300,
                        height:150,
                        borderRadius:15,
                        marginRight:15
                    }}
                />
                
            )}
        />
        

      
    </View>
  )
}

export default Slider
