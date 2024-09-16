import { View, Text, Pressable } from "react-native";
import { Screen } from "expo-router/build/views/Screen";
import { Stack, Slot, Tabs, Link } from "expo-router";
import LogoPokemonSvg from "../components/LogoPokemon";
import { InfoIcon } from "../components/Icons";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#111827" },
        gestureDirection: "vertical",
        headerTintColor: "#fff",
        headerShown: true,
        headerTitle: "",
        headerLeft: () => <LogoPokemonSvg />,
        headerRight: () => (
          <Link asChild href="/about">
            <Pressable>
              <View>
                <InfoIcon />
              </View>
            </Pressable>
          </Link>
        ),
      }}
    />
  );
}
