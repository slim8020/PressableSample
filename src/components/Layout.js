import React from 'react';
import { StyleSheet, View, Text, Pressable, Platform } from 'react-native';

export const Button = (props) =>{
    return (
      <Pressable
      style={styles.shadow}
      onPressIn={()=>console.log('Press In')}
      onPressOut={()=>console.log('Press Out')}
      onPress={()=>console.log('Press')}
      onLongPress={()=>console.log('Long Press')}
      delayLongPress={3000}
      hitSlop={10}>
        <Text style={{textAlign:'center'}}>{props.title}</Text>
      </Pressable>
    );
  };


export const Header = () =>{
    return(
        <View style={[styles.container, styles.header]}>
            <Text style={styles.text}>Header</Text>
        </View>
    );
};

export const Contents = () => {
    return(
    <View style={[styles.container, styles.contents]}>
        <Button title="Pressable"/>
    </View>
    );
};

export const Footer = () => {
    return(
    <View style={[styles.container, styles.footer]}>
        <Text style={styles.text}>Footer</Text>
    </View>
    );
};


const styles = StyleSheet.create({
    container:{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 80,
    },
    header:{
        backgroundColor: '#f1c40f',
        height: 80,
    },
    contents:{
        flex: 1,
        backgroundColor: '#1abc9c',
        height: 640,
    },
    footer: {
        backgroundColor: '#3498db',
        height: 80,
    },
    text: {
        fontSize: 26,
    },
    shadow:{
        backgroundColor: '#1abc9c',
        width: 200,
        height: 200,

        ...Platform.select({
            ios:{
                shadowColor: '#000',
                shadowOffset:{
                    width: 10,
                    height: 10,
                },
                shadowOpacity: 0.5,
                shadowRadius: 10,
            },
            android:{
                elevation: 10,
            },
        }),
    },
});