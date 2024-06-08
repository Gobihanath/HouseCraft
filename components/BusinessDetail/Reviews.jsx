import { View, Text, TextInput, TouchableOpacity, ToastAndroid,Image } from 'react-native'
import React from 'react'
import { Rating } from 'react-native-ratings'
import { Colors } from '../../constants/Colors'
import { useState } from 'react'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'
import { useUser } from '@clerk/clerk-expo'
import { db } from '../../Configs/FirebaseConfig'
import { FlatList } from 'react-native-gesture-handler'

const Reviews = ({business}) => {

    const [rating,setRating]=useState(4);
    const [userInput,setUserInput]=useState()
    const {user}=useUser();

    const onSubmit=async()=>{
       const docRef=doc(db,'BusinessList',business?.id)
       await updateDoc(docRef,{
        reviews:arrayUnion({
            rating:rating,
            comment:userInput,
            userName:user?.fullName,
            userImage:user?.imageUrl,
            userEmail:user?.primaryEmailAddress?.emailAddress

        })
       })

       ToastAndroid.show("Comment Added Successfully!",ToastAndroid.BOTTOM)
    }


  return (
    <View style={{
        padding:20,
        backgroundColor:"#fff"
      }}>
      <Text style={{
        fontFamily:"outfit-medium",
        fontSize:20,
        color:Colors.PRIMARY
      }}>Reviews</Text>

      <View>
        <Rating
        showRating={false}
        imageSize={30}
        onFinishRating={(rating)=>setRating(rating)}
        style={{ paddingVertical: 10 }}
        />

        <TextInput 
            placeholder='Write Comment'
            numberOfLines={4}
            onChangeText={(value)=>setUserInput(value)}
            style={{
                borderWidth:1,
                padding:10,
                borderRadius:10,
                borderColor:Colors.PRIMARY,
                textAlignVertical:"top"
            }}
        />

        <TouchableOpacity
        disabled={!userInput}
        onPress={()=>onSubmit()}
         style={{
            
            padding:10,
            backgroundColor:Colors.PRIMARY,
            borderRadius:10,
            marginTop:10,

         }}>
            <Text style={{
                fontFamily:"outfit",
                color:"#fff",
                textAlign:"center"
            }}>Submit</Text>
        </TouchableOpacity>
      </View>


      {/* Display Previous Reviews */}

      <View>
        {business?.reviews?.map((item,index)=>(
          <View style={{
            display:"flex",
            flexDirection:"row",
            gap:10,
            alignItems:"center",
            padding:10,
            borderWidth:1,
            borderColor:Colors.GRAY,
            borderRadius:10,
            marginTop:20

          }}>
            <Image source={{uri:item.userImage}}
                style={{
                    width:40,
                    height:40,
                    borderRadius:50
                }}
            />
            <View style={{
                display: 'flex',
                gap:5
            }}>
            <Text style={{
                fontFamily:"outfit-medium",

            }}>{item.userName}</Text>
            <Rating
                imageSize={20}
                ratingCount={item.rating}
                style={{
                    alignItems:"flex-start"
                }}
            />
            <Text>{item.comment}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  )
}

export default Reviews