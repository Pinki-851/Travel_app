import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { ItemCard } from "./ItemCardContainer";
import { NotFound } from "../../assets";

export function BottomSection({ data }) {
  // console.log("cgange");
  return (
    <View>
      <View style={styles.head_container}>
        <Text style={styles.head_text}>Top Trips</Text>
        <TouchableOpacity style={styles.head_btn}>
          <Text style={styles.head_btn_text}> Explore</Text>
          <FontAwesome
            name="long-arrow-right"
            size={24}
            color="#a0c4c7"
            style={styles.arrow}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.card_Section}>
        {data?.data?.length > 0 ? (
          <>
            {data?.data?.map((val, index) => {
              return (
                <View key={index}>
                  <ItemCard
                    heading={val?.name}
                    imgsrc={
                      val?.photo?.images?.medium?.url
                        ? val?.photo?.images?.medium?.url
                        : "https://cdn.pixabay.com/photo/2017/11/08/22/18/spaghetti-2931846_1280.jpg"
                    }
                    location={val?.location_string}
                    data={val}
                  />
                </View>
              );
            })}
          </>
        ) : (
          <View style={styles.not_found_container}>
            <Image source={NotFound} style={styles.img} />
            <Text style={styles.not_found_text}>Opps...No Data Found</Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  head_container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    overflow: "scroll",
  },
  head_text: {
    fontSize: 28,
    fontWeight: "500",
    color: "#2c7379",
  },
  head_btn: { display: "flex", flexDirection: "row", alignItems: "center" },
  head_btn_text: { fontSize: 20, color: "#a0c4c7", fontWeight: "500" },
  arrow: { marginLeft: 5 },
  card_Section: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 5,
    justifyContent: "flex-start",
    alignItems: "center",
    // flex: 1,
    // width: "100%", //new
  },
  not_found_container: {
    width: "100%",
    height: 300,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  img: { width: 100, height: 100 },
  not_found_text: {
    fontSize: 18,
    fontWeight: "600",
    color: "#2c7379",
    marginTop: 8,
  },
});
