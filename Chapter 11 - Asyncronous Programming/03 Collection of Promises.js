//Defining some variables & functions to be used in examples:
let pikachuAPI = 'https://pokeapi.co/api/v2/pokemon/pikachuu'; //wrong URL to demonstrate error handling...
let bulbasaurAPI = 'https://pokeapi.co/api/v2/pokemon/bulbasaur';
let charizardAPI = 'https://pokeapi.co/api/v2/pokemon/charizard';
function getPokemonBaseExperience(url)
{
    return fetch(url).then(response =>
        {
            if (!response.ok)
                throw new Error(`HTTP error! Status: ${response.status}`);
            return response.json();
        })
        .then(data => data.base_experience)
        .catch(error => {throw error;});
}
let promisedPokemon1 = getPokemonBaseExperience(pikachuAPI);
let promisedPokemon2 = getPokemonBaseExperience(bulbasaurAPI);
let promisedPokemon3 = getPokemonBaseExperience(charizardAPI);




// 03. HANDLING MULTIPLE PROMISES: We'll be using some static methods of Promise to handle multiple promises.

//a) promise.all(): like an AND logical gate.
    // takes an array of promises & waits for all of them to be resolved or any to be rejected:
    Promise.all([promisedPokemon1, promisedPokemon2, promisedPokemon3])
        .then((experiences) =>
        {
            console.log('Individual Experiences:', experiences);
            let totalExperience = experiences.reduce((a, b) => a + b);
            console.log('Total Base Experience:', totalExperience);
        })
        .catch(() => console.error('Error in fetching experiences'));

//b) promise.any(): like an OR logical gate.
    // takes an array of promises & waits for the any one to be resolved:
    Promise.any([promisedPokemon1, promisedPokemon2, promisedPokemon3])
        .then((firstExperience) => console.log('First Resolved Experience:', firstExperience))
        .catch(() => console.error('All promises were rejected'));

//c) promise.allSettled(): waits for all promises to be settled (either resolved or rejected):
    Promise.allSettled([promisedPokemon1, promisedPokemon2, promisedPokemon3])
        .then((results) => console.log('All Settled Results:', results))
        .catch(() => console.error('Error in settling promises')); //this is meaningless, since .allSettled() never rejects...

//d) promise.race(): handles the first settled promise (either resolved or rejected):
    Promise.race([promisedPokemon1, promisedPokemon2, promisedPokemon3])
        .then((firstResult) => console.log('First Settled Result:', firstResult))
        .catch(() => console.error('First settled promise was rejected'));

//e) promise.resolve(): creates a promise that is resolved with a given value:
    console.log(new Promise((resolve) => 'This is a resolved promise')); //value IS *pending* here...
    console.log(Promise.resolve('This is a resolved promise')); //value is NOT *pending* here...

//f) promise.reject(): creates a promise that is rejected with a given reason:
    console.log(Promise.reject('This is a rejected promise')); //value is NOT *pending* here...
        //NOTE: this will cause an annoying error message, bcz this error is not handled!