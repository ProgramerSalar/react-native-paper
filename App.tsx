import { View, Text, ScrollView, Button } from 'react-native'
import React, { useState } from 'react'



const Categories = [
  {class:"9", _id:"1"},
  {class:"10", _id:"2"},
  {class:"11", _id:"3"},
  {class:"12", _id:"4"}
]


const App = () => {






  return (
    <View>
      

      <ScrollView horizontal style={{

      }}>
        {
          Categories.map((item, index) => (
            <View>
             
            </View>
          ))
        }
      </ScrollView>
    </View>
  )
}

export default App