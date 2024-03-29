import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.box]}></View>
      <View style={[styles.cardBody]}>
        {/* profile */}
        <View style={styles.profile}>
          <Image
            style={{ height: 90, width: 90, borderRadius: 500 }}
            source={require("./assets/101200085.png")}
          />
          <View>
            <Text
              style={{
                fontSize: 22,
                fontWeight: "bold",
              }}
            >
              Faysal Hossain
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "bold",
                color: "indigo",
              }}
            >
              @f4faysal
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "bold",
                color: "gray",
                paddingTop: 10,
              }}
            >
              Joined 18 Ags 2021
            </Text>
          </View>
        </View>
        <View>
          <Text style={{ fontSize: 15, lineHeight: 21 }}>
            Hi 👋, I'm a Full-stack developer. Works with most modern
            frameworks/React JS. Fav languages : JavaScript & Node.js, HTML,
            CSS, Python, and Go.
          </Text>
        </View>
      </View>
      <View style={[styles.box]}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F8FD",
  },
  box: {
    flex: 1,
  },
  cardBody: {
    margin: 20,
    height: 100,
    backgroundColor: "#fff",
    flex: 2,
    padding: 20,
    borderRadius: 20,
  },
  profile: {
    height: 120,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 14,
    // flex : 1
  },
});
