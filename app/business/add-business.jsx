import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from 'expo-router'
import { useEffect } from 'react';
import { Colors } from '../../constants/Colors';
import * as ImagePicker from 'expo-image-picker';
import RNPickerSelect from 'react-native-picker-select';
import { query } from 'firebase/database';
import { collection } from 'firebase/firestore';
import {db} from "../../Configs/FirebaseConfig.js"
import { getDocs } from 'firebase/firestore';

const AddBusiness= () => {

  const navigation=useNavigation();
  const [image,setImage]=useState(null);
  const [categoryList,setCategoryList]=useState([]);

  // Get inputs
  
  const [name,setName]=useState();
  const [land,setLand]=useState();
  const [contact,setContact]=useState();
  const [website,setWebsite]=useState();
  const [about,setAbout]=useState();
  const [category,setCategory]=useState();
  
  useEffect(()=>{
      navigation.setOptions({
        headerTitle:"Add New",
        headerShown:true
      })
      GetCategoryList();
  },[])

  const onImagePick=async ()=>{

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });
    setImage(result?.assets[0].uri);
    console.log(result);
  }


   const GetCategoryList=async()=>{
    setCategoryList([])
     const q=query(collection(db,'Category'));
     const snapShot=await getDocs(q);


     snapShot.forEach((doc)=>{
      console.log(doc.data());
      setCategoryList(prev=>[...prev,{
        label:(doc.data()).name,
        value:(doc.data()).name
      }])
     })
   }


  return (
    <View style={{
      padding:20
    }}>
      <Text style={{
        fontFamily:"outfit-medium",
        fontSize:25,

      }}>Add New Design</Text>
      <Text style={{
        fontFamily:"outfit",
        color:Colors.GRAY
      }}>Fill all details in order to add new project</Text>

      <TouchableOpacity style={{
           marginTop:20,
      }}
      onPress={()=>onImagePick()}>
      {!image? <Image source={require('../../assets/images/imgpick.png')} 
      style={{
           width:100,
           height:100
      }}

      /> 
      :
      <Image source={{uri:image}} 
      style={{
           width:100,
           height:100,
           borderRadius:15
      }}

      />}
      </TouchableOpacity>



        <View>
          <TextInput placeholder='Name' 
            onChangeText={(v)=>setName(v)}
            style={{
              padding:10,
              borderWidth:1,
              borderRadius:10,
              fontSize:16,
              backgroundColor:"#fff",
              marginTop:10,
              fontFamily:"outfit"
            }}
          />

          <TextInput placeholder='Land Area'
            onChangeText={(v)=>setLand(v)} 
            style={{
              padding:10,
              borderWidth:1,
              borderRadius:10,
              fontSize:16,
              backgroundColor:"#fff",
              marginTop:10,
              fontFamily:"outfit"
            }}
          />

          <TextInput placeholder='Contact' 
            onChangeText={(v)=>setContact(v)}
            style={{
              padding:10,
              borderWidth:1,
              borderRadius:10,
              fontSize:16,
              backgroundColor:"#fff",
              marginTop:10,
              fontFamily:"outfit"
            }}
          />

          <TextInput placeholder='Website'
            onChangeText={(v)=>setWebsite(v)} 
            style={{
              padding:10,
              borderWidth:1,
              borderRadius:10,
              fontSize:16,
              backgroundColor:"#fff",
              marginTop:10,
              fontFamily:"outfit"
            }}
          />

           <TextInput placeholder='About'
            onChangeText={(v)=>setAbout(v)} 
            multiline
            numberOfLines={5}
            style={{
              padding:10,
              borderWidth:1,
              borderRadius:10,
              fontSize:16,
              backgroundColor:"#fff",
              marginTop:10,
              fontFamily:"outfit",
              height:100
            }}
          />
        
            <View style={{
              borderWidth:1,
              borderRadius:10,
              fontSize:16,
              backgroundColor:"#fff",
              marginTop:10,
              fontFamily:"outfit"
            }}>
            <RNPickerSelect
            onValueChange={(value) => setCategory(value)}
            items={categoryList}
          />
          </View>

        </View>
    <TouchableOpacity style={{
      padding:15,
      backgroundColor:Colors.PRIMARY,
      borderRadius:15,
      marginTop:10

    }}>
      <Text style={{
        fontFamily:"outfit-medium",
        fontSize:15,
        textAlign:"center",
        color:"#fff"
      }}>Add Now</Text>
    </TouchableOpacity>
    </View>
  )
}

export default AddBusiness
