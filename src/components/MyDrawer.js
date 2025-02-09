import React, { useState } from "react";
import { Drawer } from "react-native-paper";

const MyDrawer = () => {
  const [active, setActive] = useState("");

  return (
    <Drawer.Section title="Menu">
      <Drawer.Item
        label="Home"
        icon="home" // Set icon for the first item
        active={active === "first"}
        onPress={() => setActive("first")}
      />
      <Drawer.Item
        label="Settings"
        icon="cog" // Set icon for the second item
        active={active === "second"}
        onPress={() => setActive("second")}
      />
    </Drawer.Section>
  );
};

export default MyDrawer;
