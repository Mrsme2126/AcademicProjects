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
	StatusBar
} from "react-native";
import React, { useState } from "react";
import { Icon } from "react-native-elements";
import CountDown from "react-native-countdown-component";
import HomeHeader from "../components/HomeHeader";
import { colors, parameters } from "../global/styles";
import { filterData, restaurantsData } from "../global/Data";
import FoodCard from "../components/FoodCard";

const SCREEN_WIDTH = Dimensions.get("window").width;
const HomeScreen = ({navigation}) => {
	const [delivery, setDelivery] = useState(true);
	const [indexCheck, setindexCheck] = useState(true);
	return (
		<View style={styles.container}>
                <StatusBar
				    translucent
					barStyle="light-content"
					backgroundColor="rgba(255, 140, 82,1)"
				/>

			<HomeHeader navigation={navigation} />
			<ScrollView
				stickyHeaderIndices={[0]}
				showsVerticalScrollIndicator={true}
			>
				<View
					style={{
						backgroundColor: colors.cardbackground,
						paddingBottom: 5,
					}}
				>
					<View
						style={{
							marginTop: 10,
							flexDirection: "row",
							justifyContent: "space-evenly",
						}}
					>
						<TouchableOpacity
							onPress={() => {
								setDelivery(true);
							}}
						>
							<View
								style={{
									...styles.deliveryButton,
									backgroundColor: delivery
										? colors.buttons
										: colors.grey5,
								}}
							>
								<Text style={styles.deliveryText}>
									Delivery
								</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => {
								setDelivery(false);
								navigation.navigate('RestaurantsMapScreen')
							}}
						>
							<View
								style={{
									...styles.deliveryButton,
									backgroundColor: delivery
										? colors.grey5
										: colors.buttons,
								}}
							>
								<Text style={styles.deliveryText}>Pickup</Text>
							</View>
						</TouchableOpacity>
					</View>
				</View>
				<View
					style={{
						...styles.filterView,
					}}
				>
					<View
						style={{
							...styles.addressView,
						}}
					>
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
								paddingLeft: 10,
							}}
						>
							<Icon
								type="material-community"
								name="map-marker"
								color={colors.grey1}
								size={26}
							/>
							<Text>0727 Sovengaa</Text>
						</View>

						<View
							style={{
								...styles.clockView,
							}}
						>
							<Icon
								type="material-community"
								name="clock-time-three"
								color={colors.grey1}
								size={26}
							/>
							<Text>Now</Text>
						</View>
					</View>

					<View></View>
					<Icon
						type="material-community"
						name="tune"
						color={colors.grey1}
						size={26}
					/>
				</View>
				<View style={styles.headerTextView}>
					<Text style={styles.headerText}>Categories</Text>
				</View>

				<View>
					<FlatList
						horizontal={true}
						showsHorizontalScrollIndicator={false}
						data={filterData}
						keyExtractor={(item) => item.id}
						extraData={indexCheck}
						renderItem={({ item, index }) => (
							<Pressable
								onPress={() => {
									setindexCheck(item.id);
								}}
							>
								<View
									style={
										indexCheck === item.id
											? { ...styles.smallCardSelected }
											: { ...styles.smallCard }
									}
								>
									<Image
										style={{
											height: 60,
											width: 60,
											borderRadius: 30,
										}}
										source={item.image}
									/>
									<View>
										<Text
											style={
												indexCheck == item.id
													? {
															...styles.smallCardTextSelected,
													  }
													: {
															...styles.smallCardText,
													  }
											}
										>
											{item.name}
										</Text>
									</View>
								</View>
							</Pressable>
						)}
					/>
				</View>
				<View style={styles.headerTextView}>
					<Text style={styles.headerText}>Free Delivery Now</Text>
				</View>

				<View>
					<View
						style={{ flexDirection: "row", alignItems: "center" }}
					>
						<Text
							style={{
								marginLeft: 15,
								fontSize: 16,
								marginTop: -10,
								marginRight: 5,
							}}
						>
							Options changing in
						</Text>
						<CountDown
							until={3600}
							size={14}
							digitStyle={{ backgroundColor: colors.lightgreen }}
							digitTxtStyle={{ color: colors.cardbackground }}
							timeToShow={["M", "S"]}
							timeLabels={{ m: "Min", s: "Sec" }}
							style={{ paddingTop: 5 }}
						/>
					</View>

					<FlatList
						style={{ marginTop: 10, marginBottom: 10 }}
						horizontal={true}
						data={restaurantsData}
						keyExtractor={(item, index) => index.toString()}
						showsHorizontalScrollIndicator={false}
						renderItem={({ item }) => (
							<View style={{ marginRight: 5 }}>
								<FoodCard
									screenWidth={SCREEN_WIDTH * 0.8}
									images={item.images}
									restaurantName={item.restaurantName}
									farAway={item.farAway}
									businessAddress={item.businessAddress}
									averageReview={item.averageReview}
									numberOfReview={item.numberOfReview}
								/>
							</View>
						)}
					/>
				</View>

				<View style={styles.headerTextView}>
					<Text style={styles.headerText}>Promotions Available</Text>
				</View>

				<View>
					<FlatList
						style={{ marginTop: 10, marginBottom: 10 }}
						horizontal={true}
						data={restaurantsData}
						keyExtractor={(item, index) => index.toString()}
						showsHorizontalScrollIndicator={false}
						renderItem={({ item }) => (
							<View style={{ marginRight: 5 }}>
								<FoodCard
									screenWidth={SCREEN_WIDTH * 0.8}
									images={item.images}
									restaurantName={item.restaurantName}
									farAway={item.farAway}
									businessAddress={item.businessAddress}
									averageReview={item.averageReview}
									numberOfReview={item.numberOfReview}
								/>
							</View>
						)}
					/>
				</View>

				<View style={styles.headerTextView}>
					<Text style={styles.headerText}>
						Restaurants Available in your area
					</Text>
				</View>

				<View style={{ width: SCREEN_WIDTH, paddingTop: 10 }}>
						
					{
						 
						restaurantsData.map((item) => (
						<View key={item.id} style={{ paddingBottom: 20 }}>
							<FoodCard
								screenWidth={SCREEN_WIDTH * 0.95}
								images={item.images}
								restaurantName={item.restaurantName}
								farAway={item.farAway}
								businessAddress={item.businessAddress}
								averageReview={item.averageReview}
								numberOfReview={item.numberOfReview}
							/>
						</View>
					))}
				</View>
			</ScrollView>
			{
				delivery &&
			
			<View style ={styles.floatButton}>
				<TouchableOpacity 
					 onPress={()=>{navigation.navigate("RestaurantsMapScreen")}}
					>
					<Icon
						name="place"
						type="material"
						size={32}
						color={colors.buttons}
					/>
					<Text style ={{color:colors.grey2}}>Map</Text>
				</TouchableOpacity>
			</View>
			}
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop:20
		
	},
	deliveryButton: {
		paddingHorizontal: 20,
		borderRadius: 15,
		paddingVertical: 5,
	},
	deliveryText: {
		marginLeft: 5,
		fontSize: 16,
	},
	filterView: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-evenly",
		marginHorizontal: 10,
		marginVertical: 10,
	},
	clockView: {
		flexDirection: "row",
		alignItems: "center",
		marginLeft: 20,
		backgroundColor: colors.cardbackground,
		borderRadius: 15,
		paddingHorizontal: 5,
		marginRight: 20,
	},
	addressView: {
		flexDirection: "row",
		backgroundColor: colors.grey5,
		borderRadius: 15,
		paddingVertical: 3,
		justifyContent: "space-between",
		paddingHorizontal: 20,
	},
	headerText: {
		color: colors.grey2,
		fontSize: 24,
		fontWeight: "bold",
		paddingLeft: 10,
	},
	headerTextView: {
		backgroundColor: colors.grey5,
		paddingVertical: 3,
	},
	smallCard: {
		borderRadius: 13,
		backgroundColor: colors.grey5,
		justifyContent: "center",
		alignItems: "center",
		padding: 5,
		width: 80,
		margin: 10,
		height: 100,
	},
	smallCardSelected: {
		borderRadius: 13,
		backgroundColor: colors.buttons,
		justifyContent: "center",
		alignItems: "center",
		padding: 5,
		width: 80,
		margin: 10,
		height: 100,
	},
	smallCardTextSelected: {
		fontWeight: "bold",
		color: colors.cardbackground,
	},
	smallCardText: {
		fontWeight: "bold",
		color: colors.grey2,
	},
	floatButton: {
		
		position: "absolute",
		bottom: 10,
		right: 15,
		backgroundColor: "white",
		elevation: 10,
		width: 60,
		height: 60,
		borderRadius: 30,
		alignItems: "center",
		
	},
});
