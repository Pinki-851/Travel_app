import {
  Alert,
  Dimensions,
  FlatList,
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Container } from "../../components/Container";
import {
  FontAwesome5,
  Foundation,
  Ionicons,
  MaterialIcons,
  FontAwesome,
} from "@expo/vector-icons";
import { RatingSubbSection } from "./RatingSubbSection";
import { BottomSectionSubContainer } from "./BottomContainer";

export function Explore({ route }) {
  const navigation = useNavigation();
  const data = route?.params?.param;
  // const width = Dimensions.get("window");
  // console.log(width, "dimention");
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  if (!data?.photo?.images?.medium?.url) {
    return (
      <View style={styles.no_data_container}>
        <Text style={styles.no_data_text}>Information not available...</Text>
      </View>
    );
  }

  return (
    <Container style={styles.container}>
      <ScrollView style={styles.scroll}>
        <View style={{ position: "relative" }}>
          <Image
            source={{
              uri: data?.photo?.images?.medium?.url
                ? data?.photo?.images?.medium?.url
                : "https://cdn.pixabay.com/photo/2017/11/08/22/18/spaghetti-2931846_1280.jpg",
            }}
            style={styles.img}
          />

          <View style={styles.icon_container}>
            <TouchableOpacity
              style={[styles.icon, styles.arrow_icon]}
              onPress={() => {
                navigation.navigate("Discover");
              }}
            >
              <FontAwesome5 name="chevron-left" size={20} color="#06b2be" />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.icon, styles.heart_icon]}>
              <Foundation name="heart" size={28} color="#fff" />
            </TouchableOpacity>
          </View>

          <View style={styles.price_container}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={styles.price}>{data?.price_level}</Text>
              <Text style={styles.price}>{data?.price}</Text>
            </View>

            {data?.open_now_text && (
              <View
                style={{
                  backgroundColor: "#ccfbf1",
                  paddingHorizontal: 8,
                  paddingVertical: 4,
                  borderRadius: 3,
                }}
              >
                <Text>{data?.open_now_text}</Text>
              </View>
            )}
          </View>
        </View>

        {data?.location_string && (
          <View style={{ marginTop: 16 }}>
            <Text style={styles.head}>{data?.name}</Text>
            <View style={styles.location}>
              <Ionicons name="location-sharp" size={25} color="#8c9ea6" />
              <Text style={styles.title}>{data?.location_string}</Text>
            </View>
          </View>
        )}

        <View style={styles.rating_section}>
          {data?.rating && (
            <RatingSubbSection
              icon={<Foundation name="star" size={24} color="#d58574" />}
              head={data?.rating}
              des="Rating"
            />
          )}

          {data?.price_level && (
            <RatingSubbSection
              icon={
                <MaterialIcons name="attach-money" size={24} color="#d58574" />
              }
              head={data?.price_level}
              des="Price Level"
            />
          )}

          {data?.price_level && (
            <RatingSubbSection
              icon={<FontAwesome5 name="map-signs" size={24} color="#d58574" />}
              head={data?.bearing}
              des="Bearing"
            />
          )}
        </View>

        {data?.description && (
          <View style={{ marginTop: 16 }}>
            <Text style={styles.description}>{data?.description}</Text>
          </View>
        )}

        {data?.cuisine && (
          <View style={styles.cuisine_container}>
            {data?.cuisine?.map((val, index) => {
              return (
                <TouchableOpacity style={styles.cuisine} key={index}>
                  <Text>{val?.name}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        )}

        <View style={styles.bottom_section}>
          {data?.phone && (
            <BottomSectionSubContainer
              icon={<FontAwesome name="phone" size={24} color="#428288" />}
              title={data?.phone}
              link={`tel:${data?.phone}`}
            />
          )}
          {data?.email && (
            <BottomSectionSubContainer
              icon={<FontAwesome name="envelope" size={24} color="#428288" />}
              title={data?.email}
              link={`mailto:${data?.email}`}
            />
          )}
          {data?.address && (
            <BottomSectionSubContainer
              icon={<FontAwesome name="map-pin" size={24} color="#428288" />}
              title={data?.address}
            />
          )}

          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              Alert.alert("Confirm booking", "Press Ok for confirmation", [
                {
                  text: "Cancel",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel",
                },
                { text: "OK", onPress: () => console.log("OK Pressed") },
              ]);
            }}
          >
            <Text style={styles.btn_text}>Book now </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 18,
  },
  scroll: {},
  img: {
    width: "100%",
    height: 288,
    borderRadius: 10,
    shadowColor: "#171717",
    elevation: 15,
    shadowOffset: { width: -2, height: -1 },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  icon_container: {
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    top: 16,
    width: "100%",
    paddingHorizontal: 16,
  },
  icon: {
    width: 30,
    height: 30,
    borderRadius: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  arrow_icon: {
    backgroundColor: "#fff",
  },
  heart_icon: {
    backgroundColor: "#06b2be",
  },
  price_container: {
    position: "absolute",
    bottom: 26,
    paddingHorizontal: 16,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  price: { color: "#fff", fontSize: 32 },

  head: { color: "#428288", fontSize: 24, fontWeight: "600" },
  location: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  title: { fontSize: 20, color: "#8c9ea6", fontWeight: "600" },

  rating_section: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16,
  },
  description: {
    fontSize: 16,
    fontWeight: "500",
    color: "#97a6af",
    letterSpacing: 0.02,
  },
  cuisine_container: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    // rowGap: 20,
    flexWrap: "wrap",
    marginTop: 16,
  },
  cuisine: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: "#d1fae5",
    borderRadius: 3,
    margin: 5,
  },
  bottom_section: {
    width: "100%",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 3,
    backgroundColor: "#f3f4f6",
    marginTop: 16,
  },
  btn: {
    width: "100%",
    backgroundColor: "#06b2be",
    // height: 40,
    borderRadius: 5,
    marginTop: 16,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
    paddingVertical: 12,
  },
  btn_text: { color: "#f3f4f6", fontSize: 25, fontWeight: "500" },
  no_data_container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  no_data_text: { fontSize: 20, fontWeight: "500", color: "#06b2be" },
});
