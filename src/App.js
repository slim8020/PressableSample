/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Text,
  View,
  Pressable,
} from 'react-native';
import { Header, Contents, Footer } from './components/Layout';

const Button = (props) =>{
  return (
    <Pressable
    style={{padding: 10, backgroundColor:'#1abc9c'}}
    onPressIn={()=>console.log('Press In')}
    onPressOut={()=>console.log('Press Out')}
    onPress={()=>console.log('Press')}
    onLongPress={()=>console.log('Long Press')}
    delayLongPress={3000}
    hitSlop={10}>
      <Text style={{}}>{props.title}</Text>
    </Pressable>
  );
};

const App = () => {
  return (
        <View
        style={{
          flex: 1,
          justifyContent: 'center',
          backgroundColor: '#fff',
          alignItems: 'center',
        }}>
          <Header></Header>
          <Contents>
             <Button title="Pressable"/>
          </Contents>
          <Footer></Footer>
         
        </View>
  );
};

export default App;
