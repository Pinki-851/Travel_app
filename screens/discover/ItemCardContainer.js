import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export function ItemCard(props) {
  const navigation = useNavigation();
  const { imgsrc, heading, location, data } = props;
  return (
    <TouchableOpacity
      style={styles.card_container}
      onPress={() => {
        navigation.navigate("Explore", { param: data });
      }}
    >
      <View style={styles.img_container}>
        <Image source={{ uri: imgsrc }} style={styles.img} />
      </View>
      <Text style={styles.heading}>
        {heading?.length > 14 ? `${heading.slice(1, 14)}...` : heading}
      </Text>
      {location && (
        <View style={styles.location_container}>
          <Ionicons name="location-sharp" size={20} color="#8597a2" />
          <Text style={styles.title}>
            {location?.length > 18 ? `${location.slice(1, 18)}...` : location}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card_container: {
    // width: 185,
    maxWidth: 190,
    minWidth: "46%",
    height: 240,
    backgroundColor: "red",
    borderWidth: 1,
    borderColor: "transparent",
    // borderColor: "#D1D5Da",
    borderStyle: "solid",
    paddingHorizontal: 10,
    paddingVertical: 10,
    // boxShadow: "0 4 6 -1px #0000001a, 0 2px 4px -2px #0000001a",
    backgroundColor: "#fff",
    borderRadius: 15,
    elevation: 10,
    shadowColor: "#171717",
    shadowOffset: { width: -1, height: -4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    marginVertical: "3%",
    marginHorizontal: "2%",
  },
  img_container: {
    width: "100%",
    height: 160,
    display: "flex",
    alignItems: "center",
    marginBottom: 8,
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    borderRadius: 10,
  },
  heading: { color: "#428288", fontSize: 18, fontWeight: "500" },
  location_container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 4,
  },
  title: { color: "#428288", fontSize: 14, fontWeight: "500" },
});
