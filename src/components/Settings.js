import { View, Text } from "react-native";
import { Button } from "react-native-paper";

const Settings = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Button mode="contained" onPress={() => alert("Button Pressed")}>
      Press me
    </Button>
    <Text>Settings Screen</Text>
  </View>
);

export default Settings;
