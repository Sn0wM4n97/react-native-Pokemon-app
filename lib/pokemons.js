export async function getPokemons() {
    const POKEMONS = "https://pokeapi.co/api/v2/pokemon/?limit=50";
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