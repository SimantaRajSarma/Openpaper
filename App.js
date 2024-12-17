import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Pdf from "react-native-pdf";

export default function App() {
  const pdfSource = {
    uri: "https://youcanlearnassam.com/1732531966_5664.pdf",
    cache: true,
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>PDF Viewer</Text>
      <Pdf
        source={pdfSource}
        onLoadComplete={(numberOfPages) => {
          console.log(`Number of pages: ${numberOfPages}`);
        }}
        onError={(error) => {
          console.error(error);
        }}
        style={styles.pdf}
      />
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
  pdf: {
    flex: 1,
    margin: 10,
  },
});
