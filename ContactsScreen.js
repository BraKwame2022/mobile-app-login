import React from 'react'
import { View, FlatList, Text} from 'react-native'
import Contact from './Components/Contact'

export default function ContactsScreen() {
  const Contacts = [
            {name:"Hassan", Number:"024-232-2345", Image:require("./assets/profile.jpg")},
            {name:"Nicholas", Number:"054-272-2345"},
            {name:"Emmanuel", Number:"027-232-5754"},
            {name:"Richard", Number:"023-324-0989"},
            {name:"Turkson", Number:"056-112-2222"},
            {name:"Elizabeth", Number:"020-323-1111"},
            {name:"Eric", Number:"024-308-3228"},
            {name:"Richel Alomenu", Number:"050-222-2222"},
            {name:"Mary Akakpo", Number:"026-009-0000"},
            {name:"Mavis Akapo", Number:"053-000-9999"},
  ]
 return (
    <View>
          <FlatList 
            data={Contacts}
            renderItem={({item})=>{
              return <Contact name={item.name} phone={item.Number}/>
            }}

            keyExtractor={(item)=>item.Number}

          />
    </View>
  )
}
