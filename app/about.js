import { Pressable, ScrollView, Text, View } from "react-native";
import { Link } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { HomeIcon } from "../components/Icons";

export default function About() {
    const insets = useSafeAreaInsets();
    return(
        
        <View style={{paddingTop: insets.top, paddingBottom: insets.bottom}}>
            <ScrollView>
                <Link asChild  href="/">
                    <Pressable>
                        <View className="mx-2 my-2 ">
                           <HomeIcon/>   
                        </View>   
                    </Pressable>
                </Link>
                <Text className="text-white font-bold text-2xl px-2 text-center my-2">Sobre nosotros</Text>
                <Text className="text-white text-justify px-2 my-2">  
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis 
                    neque a tempor mollis. Morbi ultrices lectus nec congue aliquam. 
                    Ut consectetur vestibulum lorem, non maximus enim pulvinar vel. 
                    Quisque vitae velit at dui faucibus ullamcorper. Etiam vel urna massa. 
                    Nam lacinia iaculis ultrices. Nunc tincidunt varius purus, 
                    ut tempor mauris dapibus in.
                </Text>
                <Text className="text-white text-justify px-2 my-2">  
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis 
                    neque a tempor mollis. Morbi ultrices lectus nec congue aliquam. 
                    Ut consectetur vestibulum lorem, non maximus enim pulvinar vel. 
                    Quisque vitae velit at dui faucibus ullamcorper. Etiam vel urna massa. 
                    Nam lacinia iaculis ultrices. Nunc tincidunt varius purus, 
                    ut tempor mauris dapibus in.
                </Text>
                <Text className="text-white text-justify px-2 my-2">  
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis 
                    neque a tempor mollis. Morbi ultrices lectus nec congue aliquam. 
                    Ut consectetur vestibulum lorem, non maximus enim pulvinar vel. 
                    Quisque vitae velit at dui faucibus ullamcorper. Etiam vel urna massa. 
                    Nam lacinia iaculis ultrices. Nunc tincidunt varius purus, 
                    ut tempor mauris dapibus in.
                </Text>
                <Text className="text-white text-justify px-2 my-2">  
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis 
                    neque a tempor mollis. Morbi ultrices lectus nec congue aliquam. 
                    Ut consectetur vestibulum lorem, non maximus enim pulvinar vel. 
                    Quisque vitae velit at dui faucibus ullamcorper. Etiam vel urna massa. 
                    Nam lacinia iaculis ultrices. Nunc tincidunt varius purus, 
                    ut tempor mauris dapibus in.
                </Text>
                <Text className="text-white text-justify px-2 my-2">  
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis 
                    neque a tempor mollis. Morbi ultrices lectus nec congue aliquam. 
                    Ut consectetur vestibulum lorem, non maximus enim pulvinar vel. 
                    Quisque vitae velit at dui faucibus ullamcorper. Etiam vel urna massa. 
                    Nam lacinia iaculis ultrices. Nunc tincidunt varius purus, 
                    ut tempor mauris dapibus in.
                </Text>
                <Text className="text-white text-justify px-2 my-2">  
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis 
                    neque a tempor mollis. Morbi ultrices lectus nec congue aliquam. 
                    Ut consectetur vestibulum lorem, non maximus enim pulvinar vel. 
                    Quisque vitae velit at dui faucibus ullamcorper. Etiam vel urna massa. 
                    Nam lacinia iaculis ultrices. Nunc tincidunt varius purus, 
                    ut tempor mauris dapibus in.
                </Text>
                <Text className="text-white text-justify px-2 my-2">  
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis 
                    neque a tempor mollis. Morbi ultrices lectus nec congue aliquam. 
                    Ut consectetur vestibulum lorem, non maximus enim pulvinar vel. 
                    Quisque vitae velit at dui faucibus ullamcorper. Etiam vel urna massa. 
                    Nam lacinia iaculis ultrices. Nunc tincidunt varius purus, 
                    ut tempor mauris dapibus in.
                </Text>
                <Text className="text-white text-justify px-2 my-2">  
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis 
                    neque a tempor mollis. Morbi ultrices lectus nec congue aliquam. 
                    Ut consectetur vestibulum lorem, non maximus enim pulvinar vel. 
                    Quisque vitae velit at dui faucibus ullamcorper. Etiam vel urna massa. 
                    Nam lacinia iaculis ultrices. Nunc tincidunt varius purus, 
                    ut tempor mauris dapibus in.
                </Text>
            </ScrollView>
        </View>
    );
}