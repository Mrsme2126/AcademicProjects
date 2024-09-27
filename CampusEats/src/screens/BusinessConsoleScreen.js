import React from 'react'
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	ScrollView,
	FlatList,
	Pressable,
	Image,
	SafeAreaView,
	Dimensions,
} from "react-native";

const BusinessConsoleScreen = () => {
  return (
    <View style={styles.container}>
      <Text>BusinessConsoleScreen</Text>
    </View>
  )
}

export default BusinessConsoleScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})