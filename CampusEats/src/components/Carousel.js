import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SliderBox } from 'react-native-image-slider-box'

const Carousel = () => {
    const images =[
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.functionfoods.co.za%2Fshop%2Fpap-chicken-and-wors%2F&psig=AOvVaw0nLnjpVSTB_1rgxcO6_-la&ust=1726195384857000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIDt5qyxvIgDFQAAAAAdAAAAABAE",
        "https://cookpad.com/za/recipe/images/a4f917eb133d35e9?image_region_id=60",
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.instagram.com%2Fdinewithneo%2Fp%2FB9rGZ1sjitP%2F&psig=AOvVaw37EDkf3fJmHOrcLiIKpKNA&ust=1726195480270000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCICKwsOxvIgDFQAAAAAdAAAAABAE",
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FClub26eatery%2Fposts%2Fpork-trotters-pap%2F137409601108753%2F&psig=AOvVaw3ip4WfzyjSUGBil55qySkx&ust=1726195505961000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJD5jdGxvIgDFQAAAAAdAAAAABAE"

    ];

  return (
    <View>
      <SliderBox images={images} autoPlay cicleLoop dotColor={'#13274F'} inactiveDotColor={'#90A4AE'} ImageComponentStyle={{
        borderRadius:6,
        width:"94%"

      }} />
    </View>
  )
}

export default Carousel

const styles = StyleSheet.create({})