import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export function BottomSectionSubContainer(props) {
  const { icon, title, link } = props;

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        link && Linking.openURL(link);
      }}
    >
      <View style={styles.icon}>{icon}</View>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  icon: { marginRight: 20 },
  text: { fontSize: 16, fontWeight: "500", color: "#9ca3af" },
});
