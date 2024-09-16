import { Link } from "expo-router";
import { useEffect, useRef } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Animated,
  Pressable,
} from "react-native";
import { styled } from "nativewind";

const StylePressable = styled(Pressable);
export function GameCard({ game }) {
  return (
    <View style={styles.TextContainer} key={game.slug}>
      <Text style={styles.textContentScore}>{game.score}</Text>
      <Image
        source={{
          uri: game.image,
        }}
        style={styles.imageGame}
      />
      <Text style={styles.text}>{game.title}</Text>
      <Text style={styles.textContent}>{game.description}</Text>
      <Text style={styles.textContent}>Release Date: {game.releaseDate}</Text>
    </View>
  );
}

export function AnimatedGameCard({ game, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      delay: index * 500,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <GameCard game={game} />
    </Animated.View>
  );
}

export function PokemonCard({ pokemon }) {
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
    <View className="bg-slate-900 w-1/3">
      <Link href={`/${pokemon.id}`} asChild>
        <StylePressable
          className={`active:opacity-70 active:bg-amber-300 rounded-3xl active:scale-75`}
        >
          <View
            className=" py-3  rounded-2xl  my-1 bg-slate-700"
            style={styles.contentPokemon}
            key={pokemon.id}
          >
            <Image
              className="bg-slate-600"
              source={{ uri: pokemon.image }}
              style={styles.imageGame}
            />
            <View className="px-2">
              <Text className="font-bold text-lg my-1 text-white">
                {pokemon.name}
              </Text>
            </View>
            <View className="flex-row space-x-2">
              {Object.keys(pokemon.types.typePokemon).map((key, index) => (
                <View
                  style={{
                    backgroundColor:
                      typesPokemonColor[pokemon.types.typePokemon[key]],
                  }}
                  className="rounded-3xl px-2 py-1"
                  key={index}
                >
                  <Text className="text-white">
                    {pokemon.types.typePokemon[key]}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </StylePressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#546",
    alignItems: "center",
    justifyContent: "space-between",
  },

  contentPokemon: {
    marginHorizontal: 5,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "space-between",
  },

  textPokemon: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    flex: 1,
    fontFamily: "serif",
    alignItems: "left",
  },

  imageGame: {
    marginTop: 2,
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  scrollView: {
    flexGrow: 1,
    marginHorizontal: 10,
  },

  text: {
    textAlign: "justify",
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
    fontFamily: "serif",
  },

  textContent: {
    textAlign: "justify",
    color: "white",
    padding: 2,
  },

  textContentScore: {
    color: "green",
    fontSize: 35,
    fontWeight: "bold",
    padding: 10,
    fontFamily: "serif",
  },

  ToggleDown: {
    backgroundColor: "#546",
    flex: 0.2,
  },

  TextContainer: {
    padding: 10,
    alignContent: "center",
    justifyContent: "center",
  },

  ButtonPressable: {
    backgroundColor: "#546",
    padding: 10,
    height: 50,
    width: 150,
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 10,
    alignItems: "center",
  },
});
