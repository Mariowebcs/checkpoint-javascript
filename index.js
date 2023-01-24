
// “https://pokeapi.co/api/v2/pokemon/{POKEMON_NAME}"

//base_experience
// forms : [name:pokemon]

    let search = document.querySelector('input');
    let button = document.querySelector('button');
    let errorText = document.getElementById('error');
    let showName = document.getElementById('name-text');
    let showAbilities = document.getElementById('abilities')
    let pokemonBaseExperience = document.getElementById('pokemon-experience')
    let pokemonImage = document.querySelector('img'); 


    const findPokemon = async () =>{ 
        try{
            const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${search.value}`);
        let {abilities,base_experience,forms,sprites} = await result.json();
        pokemonAbilities = `${abilities.map((element)=> element.ability.name)}`
        let name = forms.map((element)=> element.name);
        let img = sprites.back_default;
        showAbilities.innerText = 'Abilità : ' + pokemonAbilities;
        showName.innerText = 'Pokemon name : ' + name;
        pokemonBaseExperience.innerText = 'esperienza di base : ' + base_experience;
        pokemonImage.src = img;
        }catch{
            errorText.innerText = 'spiacenti, il pokemon digitato non esiste';
        }     
        
    }  


    

    button.onclick = async() => {
        try{
            findPokemon();
            errorText.innerText = "";
        }catch{
            let result = await findPokemon();
            errorText.innerText = result;
        }
    }
