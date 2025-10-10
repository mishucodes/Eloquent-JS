//Polymorphism: It means the ability of a function to accept different kinds of inputs. It could be achieved in many ways:
    //a) A function that is written so well that it can handle multiple kinds of data (like a hybrid car that may run on petrol, gas, & electricity).
    //b) We use the Eclipse Technique (Overriding Derived Properties). For Example:
        class Animal
        {
            speak() {return "Some generic animal sound";}
        }
        class Dog extends Animal
        {
            speak() {return "Woof!";}
        }
        class Cat extends Animal
        {
            speak() {return "Meow!";}
        }
        let animals = [new Animal(), new Dog(), new Cat()];
        
        for (let animal of animals)
            console.log(animal.speak());