import { View, Text, Image, Alert, ToastAndroid } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../../constants/Colors';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../Configs/FirebaseConfig';
import { useUser } from '@clerk/clerk-expo';


const Intro = ({business}) => {

  const router=useRouter();
  const {user}=useUser();


  const onDelete=()=>{
    Alert.alert('Delete','Do you really want to delete this item?',[
      {
        text:'Cancel',
        style:'cancel',

      },
      {
        text:'Delete',
        style:'destructive',
        onPress:()=>deleteBusiness()
      }
    ])
  }

  const deleteBusiness=async()=>{
    console.log('Delete Business');
    await deleteDoc(doc(db,'BusinessList',business?.id))
    router.back();
    ToastAndroid.show("Item Deleted..!",ToastAndroid.LONG)
  }

  return (
    <View>
      <View style={{
        position: 'absolute',
        zIndex: 10,
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'space-between',
        width:"100%",
        paddingTop:30,
        paddingHorizontal:20
      }}>
      <TouchableOpacity onPress={()=>router.back()}>
      <Ionicons name="arrow-back-circle" size={40} color="black" />
      </TouchableOpacity>
      
      <Ionicons name="heart-outline" size={40} color="black" />
      </View>
      <Image source={{uri:business?.imageURL}}
        style={{
          width:"100%",
          height:340
        }}
      />

      <View style={{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        padding:20,
        marginTop:-20,
        backgroundColor:"#fff",
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        alignItems:"center"
      }}>
      <View style={{
        padding:20,
        marginTop:-20,
        backgroundColor:"#fff",
        borderTopLeftRadius:25,
        borderTopRightRadius:25
      }}>
        <Text style={{
          fontSize:20,
          fontFamily:'outfit-medium',
        }}>{business?.name}

        
        </Text>


        <Text style={{
          fontFamily:"outfit",
          fontSize:18
        }}>{business?.land}</Text>
      </View>
      {user?.primaryEmailAddress?.emailAddress==business?.userEmail&&<TouchableOpacity onPress={()=>onDelete()}>
      <Ionicons name="trash-bin-sharp" size={24} color={Colors.PRIMARY} />
      </TouchableOpacity>}
      
      </View>
    </View>
  )
}

export default Intro