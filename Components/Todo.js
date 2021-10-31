import React, { useState } from "react";
import { StyleSheet,StatusBar, Text, View, Button } from 'react-native';
import { TextInput } from "react-native-gesture-handler";
import Unorderedlist from 'react-native-unordered-list';
import { onChange } from "react-native-reanimated";
function Todo(){
  const [inputList, setInputList] = useState('')
  const [items, setItems] = useState([])
  function itemEvent(event){
    setInputList(event.target.value)
  }
  function listOfItem(){
      setItems((oldItems)=>{
      console.log('old', oldItems)
        return  [...oldItems, inputList]
      })
  }
    return (
        <View style={styles.container}>
          <Text style={styles.font}>Todo</Text>
          <StatusBar style="auto" />
          <View style = {styles.secondContainer}>
              <TextInput 
              style={styles.inputText}
              onChange={itemEvent}
              placeholder='enter text'
                />
              <Button
              onPress={listOfItem}
              title="Add Todo"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
              />
               <Button
              onPress={'DELETE'}
              title="Delete Todo"
              color="#841584"
              accessibilityLabel="Delete" 
              />
          </View>
              <View>
              { items.map( (itemval)=>{
            return<Unorderedlist bulletUnicode={0x0} style={styles.listStyle} ><Text style={styles.font}>{itemval}</Text></Unorderedlist>
          })}
        </View>
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 0.4,
        backgroundColor: '#800080',
        // alignItems: 'center',
        justifyContent: 'center',
    
      },
      font:{
        fontSize:30,
        fontWeight:'bold',
        color:'#ffff',
        marginLeft:20
      },
      inputText:{
        height:40,
        margin:12,
        borderWidth:1,
        padding:10,
        width:'60%',
      },
    secondContainer:{
        
        backgroundColor: '#ffff',
        flex:0.3,
        flexDirection:"row",
        alignItems: 'center',
        justifyContent: 'center',
        width:'80%',
        marginLeft:'10%',        
    },
    listStyle:{
      flex:0.2,
      alignItems:'center',
      justifyContent:'center',
    },
    });

export default Todo;