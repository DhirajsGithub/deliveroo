import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";
import data from "../data";

const Categories = () => {
  return (
    // note the properties of scroll view
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
    >
      {/* CategoryCards  */}

      {data?.categories.map((category, index) => {
        return (
          <CategoryCard
            key={index}
            imgUrl={category.imgUrl}
            title={category.title}
          />
        );
      })}
    </ScrollView>
  );
};

export default Categories;

/*
contentContainerStyle : These styles will be applied to the scroll view content container which wraps all of the child views.
showHorizontalScrollIndicator : When true, shows a vertical scroll indicator.
horizontal : When true, the scroll view's children are arranged horizontally in a row instead of vertically in a column.
*/
