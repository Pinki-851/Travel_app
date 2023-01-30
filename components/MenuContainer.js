import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

export function MenuContainer(props) {
  const { title, imgsrc, setType, type } = props;

  function handlePress() {
    setType(title.toLowerCase());
  }
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[
        styles.img_container,
        {
          backgroundColor:
            type === title.toLowerCase() ? "#E2E8F0" : "transparent",
        },
      ]}
    >
      <Image source={imgsrc} style={styles.img} />
      <Text style={[styles.title]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  img_container: {
    width: 100,
    height: 100,
    borderRadius: 50,
    display: "flex",
    alignItems: "center",
  },
  img: { width: "100%", height: "100%", objectFit: "contain" },
  title: { color: "#00bcc9", fontWeight: "500", fontSize: 18, marginTop: 5 },
});
