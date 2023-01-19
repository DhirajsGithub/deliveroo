import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectResturant } from "../features/resturantSlice";
import { XCircleIcon } from "react-native-heroicons/solid";
import * as Progress from "react-native-progress";
import MapView, { Marker } from "react-native-maps";

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const resturant = useSelector(selectResturant);
  return (
    <View style={styles.container} className="bg-[#00ccbb] flex-1">
      <SafeAreaView className="z-50">
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <XCircleIcon size={30} color="white" />
          </TouchableOpacity>
          <Text className="font-light text-white text-lg ">Order Help</Text>
        </View>
        <View className="bg-white mx-5 my-2 rounded-md p-4 z-50 shadow-md">
          <View className="flex-row justify-between">
            <View>
              <Text className="text-lg text-gray-400">Estimated Arrival</Text>
              <Text className="text-3xl font-bold ">45-55 Muinute</Text>
            </View>
            <Image
              source={{ uri: "https://links.papareact.com/fls" }}
              className="h-20 w-20"
            />
          </View>

          <Progress.Bar size={30} color="#00ccbb" indeterminate={true} />
          <Text className="mt-3 text-gray-500">
            Your Order at {resturant.title} is being prepared
          </Text>
        </View>
      </SafeAreaView>

      {/* react-native maps */}
      <MapView
        initialRegion={{
          latitude: 15.5188,
          longitude: 74.926,
          latitudeDelta: 0.005,
          longitudeDelta: 0.05,
        }}
        className="flex-1 z-0 -mt-10"
        mapType="mutedStandard"
      >
        <Marker
          coordinate={{
            latitude: 15.4777,
            longitude: 74.9451,
          }}
          title={resturant.title}
          description={resturant.description}
          identifier="origin"
          pinColor="#00ccbb"
        />
      </MapView>

      <SafeAreaView className="bg-white flex-row items-center space-x-5 h-28">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="h-12 w-12 bg-gray-300 p-4 rounded-full ml-5"
        />
        <View className="flex-1">
          <Text className="text-lg ">Sunny Sangha</Text>
          <Text className="text-lg text-gray-400">Your Rider</Text>
        </View>
        <Text className="text-[#00ccbb] text-lg mr-5 font-bold">Call</Text>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default DeliveryScreen;
