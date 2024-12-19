import React, { useState } from "react";
import { StyleSheet, Dimensions, View, Text } from "react-native";
import Pdf from "react-native-pdf";

const PDFExample = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const source = {
    uri: "https://youcanlearnassam.com/app/frontend/uploads/merged.pdf",
    cache: true,
  };

  return (
    <View style={styles.container}>
      {/* PDF Viewer */}
      <Pdf
        trustAllCerts={false}
        source={source}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`Number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page) => setCurrentPage(page)}
        onError={(error) => console.log(error)}
        onPressLink={(uri) => console.log(`Link pressed: ${uri}`)}
        style={styles.pdf}
      />

      {/* Page Number Display */}
      <View style={styles.pageNumberContainer}>
        <Text style={styles.pageNumberText}>
          Page {currentPage} of {totalPages}
        </Text>
      </View>
    </View>
  );
};

export default PDFExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  pageNumberContainer: {
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  pageNumberText: {
    color: "#fff",
    fontSize: 14,
  },
});
