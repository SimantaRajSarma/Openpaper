import { View, Text } from "react-native";
import { Button } from "react-native-paper";

const Home = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text
      style={{
        fontFamily: "Montserrat-Regular",
        fontSize: 24,
        color: "#ffffff",
      }}
    >
      Home Screen
    </Text>
    <Button
      mode="contained"
      onPress={() => alert("Button Pressed")}
      icon={"camera"}
      labelStyle={{ fontFamily: "Montserrat-Medium" }}
    >
      Press Me
    </Button>
  </View>
);

export default Home;
