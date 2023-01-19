import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import ResturantCard from "./ResturantCard";
import data from "../data";

const FeaturedRow = ({ title, description, id }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00ccbb" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        // paddingHorizontal inner padding horizontal
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* Resturant cards  */}
        {data?.resturants?.[id].map((resturant, index) => {
          return (
            <ResturantCard
              key={index}
              id={resturant.id}
              imgUrl={resturant.imgUrl}
              rating={resturant.rating}
              genre={resturant.genre}
              address={resturant.address}
              short_description={resturant.short_description}
              title={resturant.title}
              long={resturant.long}
              lat={resturant.lat}
              dishes={resturant.dishes}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
