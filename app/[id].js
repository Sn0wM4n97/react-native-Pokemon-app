import { Link, Stack } from "expo-router";
import { Text, View, Image, ScrollView,  StyleSheet  } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState} from "react";
import { getColorPokemonById, getDetailsPokemon, getPokemonsbyId } from "../lib/pokemons";

export default function Details() {
    const[namePokemon,setNamePokemon] = useState(null);
    const { id } = useLocalSearchParams(); // se llama igual que el nombre del archivo, en este caso es id

    useEffect(() => {
        if(id){
            getPokemonsbyId(id).then(setNamePokemon);

        }
    }, [id]);

    const typesPokemonColor = {
        normal: "#a8a878",
        fighting: "#c03028",
        flying: "#a890f0",
        poison: "#a040a0",
        ground: "#e0c068",
        rock: "#b8a038",
        bug: "#a8b820",
        ghost: "#705898",
        steel: "#b8b8d0",
        fire: "#ff5a00",
        water: "#6890f0",
        grass: "#78c850",
        electric: "#f8d030",
        psychic: "#f85888",
        ice: "#98d8d8",
        dragon: "#7038f8",
        dark: "#705848",
        fairy: "#ee99ac",
        unknown: "#68a090",
        stellar: "#b8b8d0",
      };

    return (
        <View className="bg-slate-900 h-full flex justify-center items-center">
            <Stack.Screen 
                options={{ 
                    headerStyle:{
                        backgroundColor: typesPokemonColor[namePokemon?.typePokemon[0]],
                    },
                    headerShadowVisible: false,
                    headerTintColor: "black",
                    headerTitle: "Mas detalles",
                    headerTitleAlign: "center",
                    headerLeft: ()=> {},
                    headerRight: ()=> (
                        <Text className="text-xl">{id}</Text>
                    ),
                }}   
            />
            <ScrollView className="w-full">

                <View  style={{backgroundColor: typesPokemonColor[namePokemon?.typePokemon[0]], borderBottomLeftRadius: 20, borderBottomRightRadius: 20}}>
                    <View className="flex-row justify-center items-center  ">
                        <Image 
                            style={{width: 150, height: 150}} source={{ uri: namePokemon?.image }} 
                        />
                    </View>
                </View>
                <View>
                    <Text className="my-5 text-white text-3xl text-center font-bold"> {namePokemon?.name}</Text>
                </View>
                <View className="flex-row justify-center items-center space-x-2">
                {
                    namePokemon?.typePokemon.map((type, index) => (
                        <View style={{backgroundColor: typesPokemonColor[type]}} className="rounded-3xl px-8 py-1 mx-1 mt-2 mb-4" key={index}>
                            <Text className="text-white text-xl">{type}</Text>
                        </View>
                    ))
                  }
                </View>
                <View className="flex-row justify-center w-auto items-center space-x-1">
                    <View >
                        <View style={{backgroundColor: typesPokemonColor['normal']}} className="rounded-3xl px-8 py-1 mx-1  mb-4">
                            <Text className="text-white text-xl text-center">{namePokemon?.height} </Text>
                        </View>
                        <View style={{backgroundColor: typesPokemonColor['normal']}} className="rounded-3xl px-8 py-1 mx-1  mb-4">
                            <Text className="text-white text-xl text-center">{namePokemon?.weight} </Text>
                        </View>
                    </View>
                    <View>
                        <View  className="rounded-3xl px-4 py-1 mx-1  mb-4">
                            <Text className="text-white text-xl font-light">height </Text>
                        </View>
                        <View  className="rounded-3xl px-4 py-1 mx-1  mb-4">
                            <Text className="text-white text-xl font-light">weight </Text>
                        </View>
                    </View>
                </View>
                <View>
                    <Text className="my-5 text-white text-3xl  text-center font-bold">Base stats</Text>
                </View>
                <View >
                    <View className="flex justify-center items-center  my-2">
                        <Text className="text-white text-center text-xl font-light">HP</Text>
                        <View className="bg-red-500 rounded-3xl w-2/4 px-8   justify-center">
                            <View >
                                <Text className="text-white text-xl text-center font-bold">{namePokemon?.stats[0].base_stat}</Text>
                            </View>
                        </View>
                    </View>
                    <View className="flex justify-center items-center  mb-2">
                        <Text className="text-white text-xl font-light">ATK</Text>
                        <View className="bg-orange-500 w-2/4 rounded-3xl px-8  mx-1">
                            <View >
                                <Text className="text-white text-xl text-center font-bold">{namePokemon?.stats[1].base_stat}</Text>
                            </View>
                        </View>
                    </View>
                    <View className="flex justify-center items-center  mb-2">
                        <Text className="text-white text-xl font-light">DEF</Text>
                        <View className="bg-blue-500 w-2/4 rounded-3xl px-8  mx-1">
                            <View >
                                <Text className="text-white text-xl text-center font-bold">{namePokemon?.stats[2].base_stat}</Text>
                            </View>
                        </View>
                    </View>
                    <View className="flex justify-center items-center mb-2">
                        <Text className="text-white text-xl font-light">SPD</Text>
                        <View className="bg-slate-500 w-2/4 rounded-3xl px-8  mx-1">
                            <View >
                                <Text className="text-white text-xl text-center font-bold">{namePokemon?.stats[3].base_stat}</Text>
                            </View>
                        </View>
                    </View>
                    <View className="flex justify-center items-center mb-2">
                        <Text className="text-white text-xl font-light">EXP</Text>
                        <View className="bg-green-500 w-2/4 rounded-3xl px-8  mx-1">
                            <View >
                                <Text className="text-white text-center text-xl font-bold">{namePokemon?.stats[4].base_stat}</Text>
                            </View>
                        </View>
                    </View>

                </View>

                
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    barra: {
      height: 20,
      width: 100,
      backgroundColor: '#ccc',
      borderRadius: 10,
      justifyContent: 'left',
      alignItems: 'left',
    },
    barraInterior: {
      height: 20,
      backgroundColor: '#666',
      borderRadius: 10,
    },
    texto: {
      fontSize: 15,
      color: '#fff',
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });