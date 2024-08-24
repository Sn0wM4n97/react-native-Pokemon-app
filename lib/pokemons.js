export async function getPokemons() {
    const POKEMONS = "https://pokeapi.co/api/v2/pokemon/?limit=150";
    const rawData = await fetch(POKEMONS);
    const json = await rawData.json();

    const  { results } = json;



    return results.map((item) =>{
        const { name, url } = item;
        const id = url.split("/").filter(Boolean).pop();//numero de pokemon
        
        const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
        
        return { id, name, url, image };
    })
}

export async function getDetailsPokemon(id) {
    const POKEMONS = `https://pokeapi.co/api/v2/ability/${id}`;
    const rawData = await fetch(POKEMONS);
    const json = await rawData.json();

    let effect_entries = [];

    const imgFront = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    const imgBack = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`;
    const idioma = 'en';

    if(json.effect_entries){
        effect_entries = json.effect_entries.filter((item) => item.language.name === idioma);
    }

    return effect_entries.map((item) => {
        const {effect, short_effect, language} = item;
        return {effect, short_effect, language, imgFront, imgBack};
    });
}

export async function getPokemonsbyId(id) {
    const POKEMONS = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    const rawData = await fetch(POKEMONS);
    const json = await rawData.json();

    const  { name } = json;

    return name ;
}

export async function getColorPokemonById(id){
    const POKEMONS = "https://pokeapi.co/api/v2/pokemon-color/${id}/";
    const rawData = await fetch(POKEMONS);
    const json = await rawData.json();
    const  { name } = json;
    return name;
}
