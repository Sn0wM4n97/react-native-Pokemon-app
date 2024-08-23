import { useEffect, useRef } from "react";
import { View, Text, Image, StyleSheet, Animated } from "react-native";
export function GameCard({ game }) {
    return (
        <View style={styles.TextContainer} key={game.slug}>
          <Text style={styles.textContentScore}>{game.score}</Text>
          <Image
            source={{
              uri: game.image,
            }}
            style={styles.imageGame} />
          <Text style={styles.text}>{game.title}</Text>
          <Text style={styles.textContent}>{game.description}</Text>
          <Text style={styles.textContent}>Release Date: {game.releaseDate}</Text>
        </View>
    )
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
    )
}

export function PokemonCard({ pokemon }) {
    return (
        <View className="  mx-2 py-2  rounded-2xl  my-2 " style={styles.contentPokemon}>
            <Image 
              source={{ uri: pokemon.image }} 
              style={styles.imageGame}
            />
            <View  className="flex-1 px-2" key={pokemon.id}>
                <Text className="font-bold text-lg my-3 text-black">{pokemon.name}</Text>                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#546',
      alignItems: "center",
      justifyContent: "space-between",
    },
    
    contentPokemon:{
      backgroundColor: '#ffff',
      marginHorizontal: 5,
      width: 120,
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
      width: 100, 
      height: 100,
      borderRadius: 10,
      backgroundColor: "#ffdbd0",
  
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