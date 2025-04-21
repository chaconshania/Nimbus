import { View, Text, StyleSheet, ImageBackground } from "react-native";
import TempHour from "../../components/Temp/TempHour";
const app = () => {
  return (
    <View style={styles.container}>
      {/* Home text */}
      <View style={styles.locationContainer}>
        <Text style={styles.headingOneText}>Boston</Text>
      </View>
      <View style={styles.weatherContainer}>
        <Text style={styles.headingOneText}>
          It is <span style={styles.blueTemp}>60°</span> today.
        </Text>
        <Text style={styles.headingOneText}>
          It feels <span style={styles.italizeText}>very</span>{" "}
          <span style={styles.blueText}>cold</span>!
        </Text>
        <Text style={styles.headingTwoText}>You should wear a coat...</Text>
      </View>
      {/* Temperature Slider */}
      <View style={styles.sliderContainer}>
        <TempHour />
        <TempHour />
        <TempHour />
        <TempHour />
        <TempHour />
        <TempHour />
        <TempHour />
      </View>
    </View>
  );
};
export default app;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
    justifyContent: "center",
    paddingLeft: "5%",
  },
  locationContainer: {},
  weatherContainer: { paddingTop: "8%" },
  headingOneText: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "left",
  },
  sliderContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 3,
    paddingTop: 20,
  },
  headingTwoText: {
    fontSize: 32,
    fontWeight: "regular",
    color: "#666666",
  },
  blueTemp: {
    fontSize: 40,
    fontWeight: "black",
    color: "#2B9CD9",
  },
  italizeText: {
    fontStyle: "italic",
  },
  blueText: {
    color: "#2B9CD9",
  },
});
