import { View, Text, StyleSheet } from "react-native";

const app = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.hourText}>Now</Text>
      <Text style={styles.tempText}>65°</Text>
    </View>
  );
};

export default app;

const styles = StyleSheet.create({
  container: {
    width: 74,
    height: 125,
    backgroundColor: "#A8E1FF",
    borderRadius: 40,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  hourText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  tempText: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
  },
});
