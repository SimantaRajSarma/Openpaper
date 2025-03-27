import React, { useState } from "react";
import {
  Provider as PaperProvider,
  BottomNavigation,
  Appbar,
} from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import useAppTheme from "./src/hooks/useAppTheme";
import HomeScreen from "./src/screens/HomeScreen";
import SettingsScreen from "./src/screens/SettingsScreen";

const App = () => {
  const theme = useAppTheme();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: "home",
      title: "Home",
      focusedIcon: "home",
      unfocusedIcon: "home-outline",
    },
    { key: "explore", title: "Explore", focusedIcon: "apps" },
    {
      key: "cart",
      title: "Cart",
      focusedIcon: "cart",
      unfocusedIcon: "cart-outline",
    },
    { key: "profile", title: "Profile", focusedIcon: "face-man" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeScreen,
    explore: SettingsScreen,
    cart: HomeScreen,
    profile: SettingsScreen,
  });

  const _goBack = () => console.log("Went back");

  const _handleSearch = () => console.log("Searching");

  const _handleMore = () => console.log("Shown more");

  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
        <Appbar.Header>
          {/* <Appbar.BackAction onPress={_goBack} /> */}
          <Appbar.Content title="Title" />
          <Appbar.Action icon="magnify" onPress={_handleSearch} />
          <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
        </Appbar.Header>
        <BottomNavigation
          navigationState={{ index, routes }}
          onIndexChange={setIndex}
          renderScene={renderScene}
        />
      </PaperProvider>
    </SafeAreaProvider>
  );
};

export default App;
