import { View, Text,StyleSheet,FlatList, Dimensions } from 'react-native'
import React from 'react'
import StatusCard from '../../components/statusCard'
import StatusHelperComponent from '../../components/statushelperComponent'

const Status = () => {
  return (
      <FlatList
      data={[1]}
      keyExtractor={item =>item}
      renderItem={()=>{
        return <>
        <StatusHelperComponent title="" data={['']} showTitle={false} time="Tap to add status update"/>    
        <StatusHelperComponent title="Recent updates" data={['23','d']} time="18 minutes ago"/>
        <StatusHelperComponent title="Viewed updates" data={[1,2,3,4,5,6,8,7,22,24,56,47]} time="18 minutes ago"/>
        </>
      }}


      />

      

      
  )
}

export default Status
