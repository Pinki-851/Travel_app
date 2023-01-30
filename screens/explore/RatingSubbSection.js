import { StyleSheet, Text, View } from "react-native";
import React from "react";

export function RatingSubbSection(props) {
  const { icon, head, des } = props;
  return (
    <View style={styles.rating_container}>
      <View style={styles.rating_icon}>{icon}</View>
      <View>
        <Text style={{ color: "#515151", fontWeight: "600" }}>{des}</Text>
        <Text style={{ color: "#515151", fontWeight: "500" }}>{head}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rating_container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  rating_icon: {
    width: 48,
    height: 48,
    borderRadius: 5,
    backgroundColor: "#fee2e2",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    shadowColor: "#171717",
    shadowOpacity: 0.3,
    elevation: 10,
    shadowOffset: { width: 2, height: 5 },
    shadowRadius: 4,
  },
});
