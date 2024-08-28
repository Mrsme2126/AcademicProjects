import React from 'react';
import { colors } from './src/global/styles';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import SignInScreen from './src/screens/authScreens/SignInScreen';


export default function App() {
  return (
    <View style={styles.container}>
    <View>



    <StatusBar 
      barStyle= "light-content"
      backgroundColor = {colors.statusbar}
    />
    </View>
    <View>


        <SignInScreen/>
    </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
 
  },
});
