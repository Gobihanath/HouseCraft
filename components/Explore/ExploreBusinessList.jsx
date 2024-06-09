import { View, Text, FlatList, ScrollView } from 'react-native'
import React from 'react'
import BusinessListCard from './BusinessListCard'

const ExploreBusinessList = ({businessList}) => {
  return (
    <ScrollView>
       <FlatList
        data={businessList}
        scrollEnabled
        showsVerticalScrollIndicator={false}
        renderItem={({ item,index }) => (
          <BusinessListCard
            key={index}
            business={item}
          />
        )}
      />
      <View style={{
        height:300
      }}>

      </View>
    </ScrollView>
  )
}

export default ExploreBusinessList