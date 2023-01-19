import data from "../data";
import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import {
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
  UserIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import Categories from "../Components/Categories";
import FeaturedRow from "../Components/FeaturedRow";

// rnfe
const HomeScreen = () => {
  const navigation = useNavigation();
  // useNavigation() returns the navigation prop of the screen it's inside.

  console.log(navigation);

  // useLayoutEffect is a version of useEffect that fires before the browser repaints the screen.
  // when component basically paints once while starting the app this will be run
  useLayoutEffect(() => {
    navigation.setOptions({
      // headerTitle: "Testing",
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5" style={styles.container}>
      <Text className="text-red-400"></Text>

      {/* Header  */}
      <View className="flex-row pb-3 items-center mx-3 space-x-2">
        <Image
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          source={{ uri: "https://links.papareact.com/wru" }}
        />
        <View className="flex-grow">
          {/* with flex-grow similar to flex will take the entire space available  */}
          <Text className="font-bold text-gray-400 text-xs">Deliver Now</Text>
          <Text className="font-bold text-xl">
            Current Location <ChevronDownIcon size={20} color="#00CCBB" />{" "}
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>

      {/* search  */}
      <View className="flex-row items-center space-x-2 pb-2 px-3">
        <View className="flex-row flex-grow bg-gray-200 space-x-2 p-3 items-center">
          <MagnifyingGlassIcon color="gray" size={20} />
          <TextInput placeholder="Resturants and cuisines" />
        </View>
        <AdjustmentsVerticalIcon color="#00CCBB" />
      </View>

      {/* body  */}
      <ScrollView
        vertical
        showsHorizontalScrollIndicator={false}
        className="bg-green-100"
      >
        {/* Categories  */}
        <Categories />

        {/* features row  */}
        {/* featured  */}
        {data?.featuredCategory.map((item) => {
          return (
            <FeaturedRow
              id={item.id}
              key={item.key}
              title={item.title}
              description={item.description}
            />
          );
        })}
        {data?.featuredCategory.map((item) => {
          return (
            <FeaturedRow
              id={item.id}
              key={item.key}
              title={item.title}
              description={item.description}
            />
          );
        })}
      </ScrollView>
      <View className="flex">
        <Text>dfjk</Text>
      </View>
      <View>
        <Text>dfjk</Text>
      </View>
      <View>
        <Text>dfjk</Text>
      </View>
      <View>
        <Text>dfjk</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // SafeArea component not works in android
    paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
  },
});

export default HomeScreen;
