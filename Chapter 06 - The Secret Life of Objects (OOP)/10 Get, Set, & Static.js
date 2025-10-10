//01. Getters: Properties we 'get' that hide a method call behind them. For example:
    let randomObject =
    {
        get randomNumber() {return Math.floor(Math.random() * 100);}
    };
    console.log(randomObject.randomNumber); //accessed like a property, not method...

//02. Setter: Properties we can 'set' that hide a method behind them. For example:
    class Temperature
    {
        constructor(celsius)
        {
            this.celsius = celsius;
        }
        get fahrenheit() {return this.celsius * 1.8 + 32;}
        set fahrenheit(value) {this.celsius = (value - 32) / 1.8;} //setter...
    }
    let temp = new Temperature(22);
    console.log(temp.fahrenheit); // -> 71.6
    temp.fahrenheit = 86;
    console.log(temp.celsius); // -> 30

//03. Static: A method that belongs the class itself, but not to its instances. For example:
    class NewTemperature
    {
        constructor(celsius)
        {
            this.celsius = celsius;
        }
        get fahrenheit() {return this.celsius * 1.8 + 32;}
        set fahrenheit(value) {this.celsius = (value - 32) / 1.8;}
        static fromFahrenheit(value)
        {
            return new NewTemperature((value - 32) / 1.8);
        }
    }
    let hot = NewTemperature.fromFahrenheit(90);
    console.log(hot);
//NOTE: When we say that a static method belongs to the class itself, what we really mean is that this method is being stored inside the constructor function itself. When we write:
    class MyClass
    {
        constructor() {}
        static myStaticMethod(x) {}
    }
//What actually happens under the hood is something like this:
    MyClass.myStaticMethod = function(x) {};
//Hence:
    let myInstance = new MyClass();
    console.log(myInstance.myStaticMethod); //undefined
    console.log(MyClass.myStaticMethod); //works