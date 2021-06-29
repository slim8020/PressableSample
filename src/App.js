import React from 'react';
import { View } from 'react-native';
import { Header, Contents, Footer } from './components/Layout';



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
          </Contents>
          <Footer></Footer>
         
        </View>
  );
};

export default App;
