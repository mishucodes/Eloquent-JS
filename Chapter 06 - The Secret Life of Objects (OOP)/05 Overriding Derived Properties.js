//If there was already a property with the same name in the prototype, this property will no longer affect the object, as it is now hidden behind the object’s own property. (Imagine an Eclipse):
    class Rabbit
    {
        constructor(type)
        {
            this.type = type;
        }
    }
    Rabbit.prototype.teeth = "small";
    let killerRabbit = new Rabbit('killer');
    let blackRabbit = new Rabbit('black');
    //Behold:
        console.log(killerRabbit.teeth); // -> small
        console.log(blackRabbit.teeth); // -> small
        killerRabbit.teeth = "long, sharp, and bloody";
        console.log(killerRabbit.teeth); // -> long, sharp, and bloody
        console.log(blackRabbit.teeth); // -> small
//NOTE: Such overriding can be used to express exceptional properties in instances of a more generic class of objects, while letting the non-exceptional objects take a standard value from their prototype.