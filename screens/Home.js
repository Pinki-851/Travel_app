import {
  Button,
  Image,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { HeroImage } from "../assets";

export const Home = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View style={styles.logo_container}>
        <View style={styles.small_div}>
          <Text style={styles.small_div_text}>Go</Text>
        </View>
        <Text style={styles.text}>Travel</Text>
      </View>
      <View style={styles.text_container}>
        <Text style={styles.text_first}>Enjoy the trip with</Text>
        <Text style={styles.text_second}>Good moment</Text>
        <Text style={styles.des}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Text>
      </View>
      <View style={styles.first_circle}></View>
      <View style={styles.second_circle}></View>
      <View style={styles.imgcontainer}>
        <Image source={HeroImage} style={styles.imgstyle} />

        <TouchableOpacity
          onPress={() => navigation.navigate("Discover")}
          style={styles.btn_border}
        >
          <View style={styles.btn}>
            <Text style={styles.btn_text}>Go</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    position: "relative",
  },
  logo_container: {
    marginTop: 32,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  small_div: {
    width: 60,
    height: 60,
    backgroundColor: "#000",
    textAlign: "center",
    borderRadius: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  small_div_text: {
    color: "#00bcc9",
    fontSize: 26,
    fontWeight: "600",
  },
  text: {
    color: "#2a2b4b",
    fontSize: 20,
    fontWeight: "600",
  },
  text_container: {
    paddingHorizontal: 24,
    marginTop: 17,
  },
  text_first: { fontSize: 42, color: "#3c6072" },
  text_second: { fontSize: 38, fontWeight: "700", color: "#00bcc9" },
  des: { fontSize: 16, color: "#3c6072" },
  first_circle: {
    width: 350,
    height: 350,
    borderRadius: 350,
    position: "absolute",
    bottom: 36,
    right: -140,
    backgroundColor: "#00bcc9",
    zIndex: -1,
  },
  second_circle: {
    width: 350,
    height: 350,
    borderRadius: 350,
    position: "absolute",
    bottom: -120,
    left: -120,
    backgroundColor: "#e99265",
  },
  imgcontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    position: "relative",
  },
  imgstyle: {
    objectFit: "contain",
    width: "80%",
    height: "110%",
    marginTop: 64,
  },
  btn_border: {
    width: 120,
    height: 120,
    position: "absolute",
    borderRadius: 120,
    bottom: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#00bcc9",
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 4,
  },
  btn: {
    width: 100,
    height: 100,
    // position: "absolute",
    borderRadius: 100,
    // bottom: 30,
    backgroundColor: "#00bcc9",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  btn_text: { fontSize: 35, color: "#fff", fontWeight: "500" },
});
