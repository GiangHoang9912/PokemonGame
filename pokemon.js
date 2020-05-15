let user;
const apiPokemonLink = "https://pokeapi.co/api/v2/pokemon/";

class Player {
  constructor(pack, packPokeId, userName, pass) {
    this.packPokeId = packPokeId;
    this.userName = userName;
    this.pass = pass;
    this.pack = pack;
  }
  async getPokemonById(id) {
    const res = await fetch(apiPokemonLink + id + "/");
    const pokemonJson = await res.json();

    return pokemonJson;
  }

  getPokemonInPack() {
    this.packPokeId.forEach((element) => {
      const poke = this.getPokemonById(element);
      poke.then((pokemon) => {
        this.pack.push(pokemon);
      });
    });
  }
}

const login = () => {
  const userName = document.getElementById("userName").value;
  const pass = document.getElementById("pass").value;

  user = new Player([], [1, 2], userName, pass);

  user.getPokemonInPack();

  console.log(user.pack);

  for (const poke of user.pack) {
    console.log(poke);
  }
};

document.getElementById("submit").addEventListener("click", (e) => {
  login();
});
