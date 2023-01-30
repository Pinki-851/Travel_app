import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useLayoutEffect, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Container } from "../../components/Container";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { MenuContainer } from "../../components/MenuContainer";
import { MenuContainerData } from "../../Data/MenuContainerData";
import { BottomSection } from "./BottomSection";

export const Discover = () => {
  const navigation = useNavigation();

  const [type, setType] = useState("restaurants");
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  useEffect(() => {
    fetchData();
  }, [type]);

  async function fetchData() {
    setIsLoading(true);
    await fetch(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary?bl_latitude=25.15543993776612&tr_latitude=25.41257834546226&bl_longitude=51.39587210719369&tr_longitude=51.62812119686502&${type}_tagcategory_standalone=10591&${type}_tagcategory=10591&limit=30&currency=USD&open_now=false&lunit=km&lang=en_US`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "2b929f8b04msh5fca17048f9a490p1c1072jsna57bd9ec27d2",
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }

  return (
    <Container style={styles.container_style}>
      <View style={{ paddingHorizontal: 20 }}>
        <Text style={styles.hero_text}>Discover</Text>
        <Text style={styles.tilte}>the beauty today</Text>
      </View>
      {/* <View style={styles.search}>
        <GooglePlacesAutocomplete
          GooglePlacesDetailsQuery={{ fields: "geometry" }}
          placeholder="Search"
          fetchDetails={true}
          onPress={(data, details = null) => {
            console.log(details?.geometry?.viewport, "search");
            // 'details' is provided when fetchDetails - true
          }}
          query={{
            key: "AIzaSyDWpuWw2apN-XgX3garzsHrZgr1AG4sCxQ",
            language: "en",
          }}
        />
      </View> */}
      {isLoading ? (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="#086468" />
        </View>
      ) : (
        <ScrollView>
          <View style={styles.MenuContainer}>
            {MenuContainerData.map(({ title, img, id }) => {
              return (
                <MenuContainer
                  key={id}
                  title={title}
                  imgsrc={img}
                  type={type}
                  setType={setType}
                />
              );
            })}
          </View>
          <BottomSection data={data} />
        </ScrollView>
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  container_style: {
    flex: 1,
    // paddingHorizontal: 24,
    backgroundColor: "#fff",
  },
  hero_text: { color: "#0b6468", fontSize: 48, fontWeight: "500" },
  tilte: { fontSize: 36, color: "#527873" },
  loading: { flex: 1, justifyContent: "center", alignItems: "center" },
  MenuContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 32,
    marginBottom: 66,
    paddingHorizontal: 20,
  },
  search: {
    width: "100%",
    height: 40,
    paddingHorizontal: 16,
    marginTop: 16,
    shadowColor: "#171717",
    elevation: 15,
    shadowOpacity: 1,
    // shadowOffset: { width: 1, height: -2 },
  },
});
