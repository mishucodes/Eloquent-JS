//Inheritance: The ability of a class to derive its shape from others. For instance:
    class Animal
    {
        constructor(species)
        {
            this.species = species;
        }
        eat() {console.log(this?.name + ' eats')};
        sleep() {console.log(this?.name + ' sleeps')};
    }
    class Dog extends Animal
    {
        constructor(breed)
        {
            super('Dog');
            this.breed = breed;
        }
        run() {console.log(this?.name + ' runs')};
        bark() {console.log(this?.name + ' barks')};
    }
    class GermanShepherd extends Dog
    {
        constructor(name)
        {
            super('German Shepherd');
            this.name = name;
        }
        play() {console.log(this.name + ' plays')};
    }

    //Creating an Instance:
    let scooby = new GermanShepherd('Scooby');
    console.log(scooby.name);
    console.log(scooby.breed);
    console.log(scooby.species);
    scooby.play();
    scooby.run();
    scooby.bark();
    scooby.eat();
    scooby.sleep();
    //Using the 'instanceof' Operator:
    console.log(scooby instanceof GermanShepherd); //true
    console.log(scooby instanceof Dog); //true
    console.log(scooby instanceof Animal); //true
    console.log(scooby instanceof Object); //true