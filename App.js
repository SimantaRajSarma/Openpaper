import React, { useState } from "react";
import {
  BottomNavigation,
  Provider as PaperProvider,
} from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Home from "./src/components/Home";
import Settings from "./src/components/Settings";

export default function App() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "home", title: "Home", icon: "home" },
    { key: "settings", title: "Settings", icon: "cog" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    settings: Settings,
  });

  return (
    <SafeAreaProvider>
      <PaperProvider>
        <BottomNavigation
          navigationState={{ index, routes }}
          onIndexChange={setIndex}
          renderScene={renderScene}
        />
      </PaperProvider>
    </SafeAreaProvider>
  );
}
