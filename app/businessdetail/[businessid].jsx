import { View, Text, ActivityIndicator, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { doc, getDoc} from 'firebase/firestore'
import { db } from '../../Configs/FirebaseConfig'
import { Colors } from '../../constants/Colors'
import Intro from '../../components/BusinessDetail/Intro'
import ActionButton from '../../components/BusinessDetail/ActionButton'
import About from '../../components/BusinessDetail/About'
import Reviews from '../../components/BusinessDetail/Reviews'

const  BusinessDetail = () => {

    const {businessid}=useLocalSearchParams();
    const [business,setBusiness]=useState();
    const[loading,setLoading]=useState(false);

    useEffect(()=>{
      GetBusinessDetailById();
    },[])

    const GetBusinessDetailById=async()=>{
        setLoading(true);
        const docRef=doc(db,'BusinessList',businessid)
        const docSnap=await getDoc(docRef);
        if(docSnap.exists()){        
            setBusiness({id:docSnap.id, ...docSnap.data()});
            setLoading(false);
        }
        else{
            console.log("No Such Document");
        }

    }
  return (
    <ScrollView>
      {loading?
      <ActivityIndicator
      style={{
        marginTop:"70%"
      }}
        size={"large"}
        color={Colors.PRIMARY}
      />:
      <View>
        {/* Intro */}

        <Intro business={business}/>

        {/* Action Buttons */}

        <ActionButton business={business}/>

        {/* About Section */}

        <About business={business}/>

        {/* Reviews Section */}

        <Reviews business={business}/>

      </View>
      }
      
    </ScrollView>
  )
}

export default BusinessDetail;