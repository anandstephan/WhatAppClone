import { View, Text, FlatList } from 'react-native'
import React from 'react'
import CallCard from '../../components/callCard'

const Calls = () => {
  return (
    <FlatList
    data={[1,2,3,4,5,6,7,8,9,10,11,12]}
    renderItem={() => <CallCard/>}
    />
  )
}

export default Calls