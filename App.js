import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import PDFExample from "./PDFExample";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>PDF Viewer</Text>
      <PDFExample />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
  },
});
