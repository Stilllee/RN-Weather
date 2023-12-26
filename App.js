import { StyleSheet, View, Text, ScrollView, Dimensions } from "react-native";

const App = () => {
  const { width: SCREEN_WIDTH } = Dimensions.get("window");
  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>서울</Text>
      </View>
      <ScrollView
        pagingEnabled
        horizontal
        contentContainerStyle={styles.weather}
      >
        <View style={{ width: SCREEN_WIDTH, alignItems: "center" }}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.desc}>Sunny</Text>
        </View>
        <View style={(styles.day, { width: SCREEN_WIDTH })}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.desc}>Sunny</Text>
        </View>
        <View style={(styles.day, { width: SCREEN_WIDTH })}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.desc}>Sunny</Text>
        </View>
        <View style={(styles.day, { width: SCREEN_WIDTH })}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.desc}>Sunny</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6d38c",
  },
  city: {
    flex: 1.2,
    justifyContent: "center",
    alignItems: "center",
  },
  cityName: {
    fontSize: 68,
    fontWeight: 600,
  },
  weather: {},
  day: {
    alignItems: "center",
  },
  temp: {
    fontSize: 178,
    marginTop: 50,
  },
  desc: {
    fontSize: 60,
    marginTop: -30,
  },
});

export default App;
