import { StyleSheet, Text, TouchableHighlight, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native'
import React, { useEffect } from 'react'

const API = 'https://jsonplaceholder.typicode.com/photos';

const HomeScreen = ({navigation}) => {

    useEffect(()=>{
        const callAPI = async() => {
          await fetch(API)
          .then((response) => response.json())
          .then((response) => console.log(response))
          .catch((error) => console.log('error: ', error));
        }
        callAPI();
      },[]);
    
      const handlePress = () => {
    
      };
    
      return (
        <View style={styles.container}>
          <Text>This is Home Screen</Text>
          <TouchableHighlight
            style={styles.button}
            onPress={handlePress}
            underlayColor="lightgray"
          >
            <Text>TouchableHighlight</Text>
          </TouchableHighlight>
          <TouchableNativeFeedback onPress={handlePress}>
            <View style={styles.button}>
              <Text>TouchableNativeFeedback</Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableWithoutFeedback onPress={() => navigation.navigate('About')}>
            <View style={styles.button}>
              <Text>TouchableWithoutFeedback</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      backgroundColor: 'lightblue',
      padding: 10,
      margin: 10,
      borderRadius: 5,
    },
  })