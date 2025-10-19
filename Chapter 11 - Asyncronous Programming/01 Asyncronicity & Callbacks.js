//01. JS is a synchronous and a single-threaded language. Even when we use WEB APIs like setTimeout(), such functions merely outsource certain non-JS work to the environment (browser, etc.).

//02. Callback: a fn passed as an argument to another fn is called a callback:
//a)
    setTimeout(() => {console.log('01 seconds')}, 1000);
    setTimeout(console.log, 1000, '01 seconds', 'again');
//b)
    function elections(major, minor)
    {
        try
        {
            let age = 10; //suppose we get the age from some API, instead;
            if(age < 18)
                // minor();
            ;
            else
                // major();
            ;
        }
        catch(error) //if the age could not be fetched, for instance:
        {
            console.log('the age could not be fetched');
        }
    }