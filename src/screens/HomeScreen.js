import { View } from "react-native";
import { Button, Avatar, Card, Text } from "react-native-paper";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const HomeScreen = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Card>
      <Card.Title title="Hello" subtitle="Card Subtitle" left={LeftContent} />
      <Card.Content>
        <Text variant="titleLarge">Card title</Text>
        <Text variant="bodyMedium">Card content</Text>
      </Card.Content>
      <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
      <Card.Actions>
        <Button
          mode="contained"
          onPress={() => alert("Button Pressed")}
          icon={"cancel"}
          labelStyle={{ fontFamily: "Montserrat-Medium" }}
        >
          Cancel
        </Button>
        <Button
          mode="contained"
          onPress={() => alert("Button Pressed")}
          labelStyle={{ fontFamily: "Montserrat-Medium" }}
        >
          Ok
        </Button>
      </Card.Actions>
    </Card>
    {/* <Text
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
    </Button> */}
  </View>
);

export default HomeScreen;
