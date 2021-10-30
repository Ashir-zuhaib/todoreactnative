import React, { useState } from "react";
import { StyleSheet,StatusBar, Text, View } from 'react-native';
import { TextInput } from "react-native-gesture-handler";
import { onChange } from "react-native-reanimated";
function Todo(){
    const [text, onChangeText]=useState(null)

    return (
        <View style={styles.container}>
          <Text style={styles.font}>Todo</Text>
          <StatusBar style="auto" />
          <View style = {styles.secondContainer}>
              <TextInput 
              style={styles.inputText}
              onChange={onChangeText}
              placeholder='enter text'
              value={text}
                />
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
        alignItems: 'center',
        justifyContent: 'center',
    }
    });
export default Todo;