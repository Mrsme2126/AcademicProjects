import React from 'react';
import { colors } from './src/global/styles';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import RootNavigator from './src/navigation/RootNavigator';




export default function App() {
  return (
    <View style={styles.container}>
    <View>



    <StatusBar 
      barStyle= "light-content"
      backgroundColor = {colors.statusbar}
    />
    </View>
   <RootNavigator/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
 
  },

});
