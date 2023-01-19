import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity>
      <Image
        className="h-20 w-20 rounded"
        source={{
          uri: imgUrl,
        }}
      />
      <Text className="absolute bottom-1 left-1 text-white font-bold">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;

/*
position by default is relative 
absolute postioing means it will move relative to it's parent
*/
