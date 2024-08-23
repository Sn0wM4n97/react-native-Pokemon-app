import { View, Text } from "react-native";
import { Slot } from "expo-router";

export default function Layout() {
    return(
        <View className ="bg-zinc-600 items-center justify-center flex-1">
            <Slot/>
        </View>
    )
}