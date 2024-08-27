export async function getPokemons() {
    const POKEMONS = "https://pokeapi.co/api/v2/pokemon/?limit=150";
    const rawData = await fetch(POKEMONS);
    const json = await rawData.json();

    const  { results } = json;


    return Promise.all(results.map(async (item) => {
        const { name, url} = item;
        const id = url.split("/").filter(Boolean).pop(); // número de Pokémon
        const typesPoke = await getPokemonsbyId(id);
        const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
        return { id, name, url, image, types: typesPoke };
      }));
}



export async function getPokemonsbyId(id) {
    const POKEMONS = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    const rawData = await fetch(POKEMONS);
    const json = await rawData.json();

    const typePokemon = [];

    json.types.forEach((item) => {
        typePokemon.push(item.type.name);
    });

    const  { name, height, weight, stats } = json;
    
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

    return {name, typePokemon, image, height, weight, stats};
}




