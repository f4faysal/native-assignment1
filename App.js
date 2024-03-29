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
                letterSpacing: 1.7,
              }}
            >
              Faysal Hossain
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "bold",
                color: "#96AECE",
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
        {/* about */}
        <View>
          <Text style={{ fontSize: 15, lineHeight: 21 }}>
            Hi 👋, I'm a Full-stack developer. Works with most modern
            frameworks/React JS. Fav languages : JavaScript & Node.js, HTML,
            CSS, Python, and Go.
          </Text>
        </View>
        {/* following */}
        <View
          style={{
            backgroundColor: "#F7F9FF",
            height: 80,
         
            borderRadius: 10,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <View style={styles.folloBox}>
            <Text style={{ fontSize: 16, color: "gray", fontWeight: "500" }}>
              Repos
            </Text>
            <Text style={{ fontSize: 22, fontWeight: "900" }}>18</Text>
          </View>
          <View style={styles.folloBox}>
            <Text style={{ fontSize: 16, color: "gray", fontWeight: "500" }}>
              Followers
            </Text>
            <Text style={{ fontSize: 22, fontWeight: "900" }}>1818</Text>
          </View>
          <View style={styles.folloBox}>
            <Text style={{ fontSize: 16, color: "gray", fontWeight: "500" }}>
              Following
            </Text>
            <Text style={{ fontSize: 22, fontWeight: "900" }}>18</Text>
          </View>
        </View>
        {/* location */}

        <View
          style={{
            
            display: "flex",
            gap: 10,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 15,
            }}
          >
            <Image
              style={{ height: 30, width: 30 }}
              source={require("./assets/icons8-location-50.png")}
            />
            <Text style={{ fontSize: 15, color: "gray", letterSpacing: 1.5 }}>
              Dhaka Bangladesh
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 15,
            }}
          >
            <Image
              style={{ height: 30, width: 30 }}
              source={require("./assets/icons8-git-50.png")}
            />
            <Text style={{ fontSize: 15, color: "gray", letterSpacing: 1.5 }}>
              github.com/f4faysal
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 15,
            }}
          >
            <Image
              style={{ height: 30, width: 30 }}
              source={require("./assets/icons8-linkedin-50.png")}
            />
            <Text style={{ fontSize: 15, color: "gray", letterSpacing: 1.5 }}>
              in/f4faysal
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 15,
            }}
          >
            <Image
              style={{ height: 30, width: 30 }}
              source={require("./assets/icons8-repository-50.png")}
            />
            <Text style={{ fontSize: 15, color: "gray", letterSpacing: 1.5 }}>
              @github
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.box]}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9FF",
  },
  box: {
    flex: 1,
  },
  cardBody: {
    margin: 20,
    height: 100,
    backgroundColor: "#fff",
    flex: 4,
    padding: 20,
    borderRadius: 20,
    justifyContent: "space-between",
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
  folloBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
