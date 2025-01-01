import { View, Text } from "react-native";
import { Button } from "react-native-paper";

const Home = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>Home Screen</Text>
    <Button mode="contained" onPress={() => alert("Button Pressed")}>
      Press Me
    </Button>
  </View>
);

export default Home;
