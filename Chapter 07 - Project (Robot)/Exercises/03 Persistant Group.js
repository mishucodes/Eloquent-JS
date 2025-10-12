//My Version:
class CreatePersistentSet
{
    constructor()
    {
        this.set = [];
    }
    add(value)
    {
        if(this.set.indexOf(value) !== -1)
        {
            console.log('value: ' + value + ' already exists');
            return this;
        }
        //else:
        let newSet = new CreatePersistentSet();
        for(let member of this.set)
            newSet.set.push(member);
        newSet.set.push(value);
        return newSet;
    }
    delete(value)
    {
        if(this.set.indexOf(value) === -1)
        {
            console.log('value: ' + value + ' does not exist');
            return this;
        }
        //else:
        let newSet = this.set.filter(v => v !== value);
        console.log('value: ' + value + ' deleted');
        return newSet;
    }
    has(value)
    {
        if(this.set.indexOf(value) === -1)
            return false;
        else
            return true;
    }
}

let mySet01 = new CreatePersistentSet();
let mySet02 = mySet01.add(1);
console.log(mySet01);
console.log(mySet02);
let mySet03 = mySet02.delete(1);
console.log(mySet03);





//Author's Version:
class PGroup
{
    #members;
    constructor(members)
    {
        this.#members = members;
    }

    add(value)
    {
        if (this.has(value))
            return this;
        return new PGroup(this.#members.concat([value]));
    }

    delete(value)
    {
        if (!this.has(value))
            return this;
        return new PGroup(this.#members.filter(m => m !== value));
    }

    has(value)
    {
        return this.#members.includes(value);
    }

    static empty = new PGroup([]);
}

let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b")); //true
console.log(a.has("b")); //false
console.log(b.has("a")); //false