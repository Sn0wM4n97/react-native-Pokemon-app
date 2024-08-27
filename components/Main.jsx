import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  Pressable
} from "react-native";
import { Link } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimatedGameCard, PokemonCard } from "./GameCard";
import { Dimensions } from "react-native";
import LogoPokemonSvg from "./LogoPokemon";
import { getPokemons } from "../lib/pokemons";
import { InfoIcon } from "./Icons";





export  function Main() {
  const [games, setGames] = useState([]);
  const [pokemon, setPokemon] = useState(null);
  const [numColumns, setNumColumns] = useState(3);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getPokemons().then((pokemon) => setPokemon(pokemon));
  }, []);
  
  const handleLayoutChange = () =>{
    const screenWidth = Dimensions.get('window').width;
    if (screenWidth < 400) {
      setNumColumns(2);
    } else { 
      setNumColumns(3);
    }

    }

  return (
    <View className="bg-slate-900" >


      <FlatList 
        className=" mb-auto"
        data={pokemon}
        keyExtractor={pokemon => pokemon.id}
        numColumns={3}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        maxToRenderPerBatch={4}
        onEndReachedThreshold={0.5}
        onLayout={handleLayoutChange}
        renderItem={({ item, index }) =>
            <PokemonCard pokemon={item} index={index} />
          }
        />
    </View>
          );
        }

const styles = StyleSheet.create({



});
