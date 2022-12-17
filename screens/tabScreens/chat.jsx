import { View, Text, FlatList } from 'react-native'
import React from 'react'
import ContactCard from '../../components/contactCard'

const Chat = () => {
  const contacts = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,]
  return (
    <FlatList
    data={contacts}
    renderItem={({item}) =>{
      return   <ContactCard/>
    }}
    />
  
  )
}

export default Chat