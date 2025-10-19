//01. ASYNC FUNCTIONS: they always returns a promise...
    //a)
        async function fn1()
        {
                // console.log("Not running unless the fn is called");
            return "Hello World"; //value wrapped in an already resolved promise...
        }
    //b)
        async function fn2()
        {
            throw new Error("Something went wrong"); //an already rejected promise...
        }

//some basics:
console.log(fn1);
console.log(fn1()); //an already resolved promise...
console.log(fn1().then);
console.log(fn1().then()); //we're talking about the promise supposed to be returned by .then() method...






//02. AWAIT KEYWORD: Must be used inside an async function. However, there are some exceptions to this rule in modern JS.
//a)
handleFn1();
async function handleFn1()
{
    console.log('The Promise:', fn1());
    console.log('The Value:', await fn1());
}
//b)
handleFn2();
async function handleFn2()
{
    try {console.log(await str3());} //won't run bcz await only handles resolved promises...
    catch(err) {console.log('Error: something went wrong');}
}



//03. ASYNC INSIDE IIFE: used to run async code at the top level...
(async function()
{
    console.log('The Value from IIFE:', await fn1());
})();




//04. HANDLING MULTIPLE AWAITS:
    //Defining some variables & functions to be used in examples:
    let pikachuAPI = 'https://pokeapi.co/api/v2/pokemon/pikachu';
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

//a) Using multiple awaits in a single async function:
handleMultipleAwaits();
//fn definition:
    async function handleMultipleAwaits()
    {
        try
        {
            let results = Promise.all([promisedPokemon1, promisedPokemon2, promisedPokemon3]);
            console.log('Base Experiences:', results); //also demonstrates that await doesn't make JS synchronous...
            console.log('Base Experiences:', await results);
        }
        catch(err) {console.log('Error: something went wrong');}
    }