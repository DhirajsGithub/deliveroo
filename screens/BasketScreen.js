import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useMemo, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectResturant } from "../features/resturantSlice";
import {
  selectBasketItems,
  removeFromBasket,
  selectBasketTotal,
} from "../features/basketSlice";
import { XCircleIcon } from "react-native-heroicons/solid";
import Currency from "react-currency-formatter";

const BasketScreen = () => {
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
  const navigation = useNavigation();
  const resturant = useSelector(selectResturant);
  const items = useSelector(selectBasketItems);
  const dispatch = useDispatch();

  const basketTotal = useSelector(selectBasketTotal);

  useMemo(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});
    setGroupedItemsInBasket(groupedItems);
  }, [items]);

  const handleRemoveItem = (key) => {
    dispatch(removeFromBasket({ id: key }));
  };

  return (
    <SafeAreaView className="flex-1 bg-white" style={styles.container}>
      <View className="flex-1 bg-gray-100">
        <View className="p-5 border-b border-[#00ccbb] bg-white shadow-xs">
          <View>
            <Text className="text-lg font-bold text-center">Basket</Text>
            <Text className="text-center text-gray-400">{resturant.title}</Text>
          </View>
          <TouchableOpacity
            onPress={navigation.goBack}
            className="rounded-full bg-gray-100 absolute top-3 right-5"
          >
            <XCircleIcon color="#00ccbb" height={50} width={50} />
          </TouchableOpacity>
        </View>
        <View className="flex-row px-4 py-4 items-center space-x-4 bg-white my-5">
          <Image
            source={{ uri: "https://links.papareact.com/wru" }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <Text className="flex">Deliver in 15-75 min</Text>
          <TouchableOpacity>
            <Text className="text-[#00ccbb]">Change</Text>
          </TouchableOpacity>
        </View>

        {/* tailwind has a divide border between the children  */}
        <ScrollView className="divide-y divide-gray-200">
          {/* The Object.entries() static method returns an array of a given object's own enumerable string-keyed property key-value pairs. */}
          {/* Object.entries --> [{key1: ["item1", "item2", "item3"]}, {key1: ["item1", "item2", "item3"]}] */}
          {Object.entries(groupedItemsInBasket).map(([key, items], index) => (
            <View
              key={key}
              className="flex-row items-center space-x-3 bg-white py-2 px-5"
            >
              <Text className="text-[#00ccbb]">{items.length} x</Text>
              <Image
                source={{ uri: items[0]?.image }}
                className="h-12 w-12 rounded-full"
              />
              <Text className="flex-1">{items[0]?.name}</Text>
              <Text className="text-gray-600">
                <Currency quantity={items[0].price} currency="GBP" />
              </Text>
              {/* key will be as a string hence need to convert into number  */}
              <TouchableOpacity onPress={() => handleRemoveItem(+key)}>
                <Text className="text-[#00ccbb] text-xs">Remove</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        <View className="bg-white mt-5 space-y-4 p-5">
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Subtotal</Text>
            <Text className="text-gray-400">
              <Currency quantity={basketTotal} currency="GBP" />
            </Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Delivery Fee</Text>
            <Text className="text-gray-400">
              <Currency quantity={599} currency="GBP" />
            </Text>
          </View>
          <View className="flex-row justify-between">
            <Text>Order Total</Text>
            <Text className="font-extrabold">
              <Currency quantity={599 + basketTotal} currency="GBP" />
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("preparingOrderScreen")}
            className="rounded-lg bg-[#00ccbb] p-4"
          >
            <Text className="text-center text-white text-lg font-bold">
              Place order
            </Text>
          </TouchableOpacity>
        </View>
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

export default BasketScreen;
