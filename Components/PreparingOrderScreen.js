import { View, Text, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";

const PreparingOrderScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 4000);
  }, []);
  return (
    <SafeAreaView className="bg-[#00ccbb] flex-1 justify-center items-center">
      <Animatable.Image
        source={require("../assets/delivery.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-full w-full"
      />
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-lg my-10 text-white font-bold text-center absolute bottom-10 px-10"
      >
        waiting for resturant to accept your order
      </Animatable.Text>

      <Progress.Circle
        className="absolute top-16 right-16"
        size={60}
        indeterminate={true}
        color="white"
      />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
