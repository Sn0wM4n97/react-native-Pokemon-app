import { Link, Stack } from "expo-router";
import { Text, View, Image, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { getDetailsPokemon, getPokemonsbyId } from "../lib/pokemons";

export default function Details() {
    const[gameInfo, setGameInfo] = useState(null);
    const[namePokemon,setNamePokemon] = useState("");
    const { id } = useLocalSearchParams(); // se llama igual que el nombre del archivo, en este caso es id

    useEffect(() => {
        if(id){
            getDetailsPokemon(id).then(setGameInfo);
            getPokemonsbyId(id).then(setNamePokemon);
        }
    }, [id]);


    return (
        <View className="bg-slate-900 h-full flex justify-center items-center">
            <Stack.Screen 
                options={{ 
                    headerStyle:{
                        backgroundColor: "#FDE047",
                    },
                    headerTintColor: "black",
                    headerTitle: "Mas detalles",
                    headerTitleAlign: "center",
                    headerLeft: ()=> {},
                    headerRight: ()=> {},
                }}   
            />
            <ScrollView className="w-full">


                <Text className="my-5 text-white text-3xl text-center font-bold">{id} - {namePokemon}</Text>
                <View className="flex-row justify-center items-center  ">
                    <Image 
                        style={{width: 150, height: 150}} source={{ uri: gameInfo?.[0].imgFront }} 
                    />
                    <Image
                        style={{width: 150, height: 150}} source={{ uri: gameInfo?.[0].imgBack }}
                    />
                </View>

                <Text className="text-white">{gameInfo?.[0].short_effect}</Text>
                <Text className="text-white">{gameInfo?.[0].effect}</Text>
                <Text className="text-white">Contenido</Text>
            </ScrollView>
        </View>
    );
}