import { Pressable, ScrollView, Text, View } from "react-native";
import { Link, Stack } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { HomeIcon } from "../components/Icons";

import { styled } from "nativewind";

const StylePressable = styled(Pressable);

export default function About() {
<<<<<<< HEAD
  const insets = useSafeAreaInsets();
  return (
    <View className="bg-slate-900 h-full">
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: "Developer",
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
          headerShadowVisible: false,
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#111827" },
          headerLeft: () => (
            <Link asChild href="/">
              <StylePressable className={`active:opacity-20`}>
                <View className="mx-2 my-2 ">
                  <HomeIcon />
                </View>
              </StylePressable>
            </Link>
          ),
          headerRight: () => {},
        }}
      />
      <View>
        <Text className="text-white font-light text-xl text-center px-2 my-96">
          this app was created by Sn0wM4n97
        </Text>
      </View>
    </View>
  );
}
=======
    const insets = useSafeAreaInsets();
    return(
        
        <View className="bg-slate-900 h-full">
            <Stack.Screen 
                options={{ 
                    headerShown: true, 
                    headerTitle: "Developer",
                    headerTintColor: "#fff", 
                    headerTitleStyle: { fontWeight: "bold" },
                    headerShadowVisible: false,
                    headerTitleAlign: "center",
                    headerStyle: { backgroundColor: "#111827"},
                    headerLeft: ()=> (
                        <Link asChild  href="/">
                        <StylePressable className={`active:opacity-20`}>
                            <View className="mx-2 my-2 ">
                               <HomeIcon/>   
                            </View>   
                        </StylePressable>
                    </Link>
                    ),
                    headerRight: () => {}
                }} 
            
            />
            <View>
                <Text className="text-white font-light text-xl text-center px-2 my-96">  
                    this app was created by Sn0wM4n97 
                </Text>
            </View>
        </View>
    );
}
>>>>>>> f2091941c57267be4e9689c7d7e22fe1ec4ae26a
