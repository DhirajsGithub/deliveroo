import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from "react-native-heroicons/outline";
import DishRow from "../Components/DishRow";
import BasketIcon from "../Components/BasketIcon";
import { useDispatch } from "react-redux";
import { setResturant } from "../features/resturantSlice";

const RestaurantScreen = () => {
  const route = useRoute();
  console.log(route.params);
  // params contians all the data passed through the navigation
  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
    },
  } = useRoute();
  // useRoute() hook contains all the parameters, id, data pass, etc
  console.log(dishes);
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  // sending resturant to BasketIcon component
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setResturant({
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes,
        long,
        lat,
      })
    );
  }, [dispatch]);
  return (
    <>
      <BasketIcon />
      <ScrollView>
        <View className="relative">
          <Image
            source={{ uri: imgUrl }}
            className="w-full h-56 bg-gray-300 p-4"
          />
          <TouchableOpacity
            onPress={navigation.goBack}
            className="absolute top-14 left-5 bg-gray-100 p-2 rounded-full"
          >
            <ArrowLeftIcon size={20} color="#00ccbb" />
          </TouchableOpacity>
        </View>
        <View className="bg-white">
          <View className="px-4 pt-4">
            <Text className="text-3xl font-bold">{title}</Text>
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <StarIcon color="green" opacity={0.5} size={22} />
                <Text className="text-xs text-gray-500">
                  <Text className="text-green-500">{rating}</Text> . {genre}
                </Text>
              </View>
              <View className="flex-row items-center space-x-1">
                <MapPinIcon color="gray" opacity={0.4} size={22} />
                <Text className="text-xs text-gray-500">
                  Nearby . {address}
                </Text>
              </View>
            </View>
            <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
          </View>

          <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
            <QuestionMarkCircleIcon size={20} opacity={0.6} color="gray" />
            <Text className="pl-2 flex-1 text-md font-bold">
              Have a food allergy
            </Text>
            <ChevronRightIcon color="#00ccbb" />
          </TouchableOpacity>
        </View>

        <View className="pb-36">
          <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>
          {/* {dishes} */}
          {dishes.map((dish) => (
            <DishRow
              id={dish.id}
              key={dish.key}
              name={dish.name}
              description={dish.description}
              image={dish.image}
              price={dish.price}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default RestaurantScreen;
