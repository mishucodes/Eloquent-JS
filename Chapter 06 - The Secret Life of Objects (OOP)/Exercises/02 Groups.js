//Set: A collection of unique values. Refer to "Set Theory" in Maths.

//My Version:
class CreateSet
{
    constructor()
    {
        this.set = [];
    }
    add(value)
    {
        if(this.set.indexOf(value) === -1)
        {
            this.set.push(value);
            console.log(value + ' added');
        }
        else
            console.log(value + ' already exists');
    }
    delete(value)
    {
        this.set.pop(this.set.indexOf(value));
        console.log('deleted ' + value);
    }
    has(value)
    {
        if(this.set.indexOf(value) === -1)
            return false;
        else
            return true;
    }
    static from(iterableObject)
    {
        let mySet = new CreateSet();
        for(let value of iterableObject) //Ideally, I should've put it inside a "try-catch" block...
            mySet.add(value);
        return mySet;
    }
}

let mySet = new CreateSet();
mySet.add('1'); //done
mySet.add('2'); //done
mySet.add('3'); //done
mySet.add('1'); //error
console.log(mySet);
mySet.delete('3'); //deleted 3
console.log(mySet);
console.log(mySet.has(1)); //false since 'indexOf' does not perform Automatic Type Conversions...
console.log(mySet.has('1')); //true
console.log(mySet.has('3')); //false

let myNewSet = CreateSet.from(['x','y','z']);
console.log(myNewSet);







//Author's Version (4th Edition Available RN):
class Group {
  #members = [];

  add(value) {
    if (!this.has(value)) {
      this.#members.push(value);
    }
  }

  delete(value) {
    this.#members = this.#members.filter(v => v !== value);
  }

  has(value) {
    return this.#members.includes(value);
  }

  static from(collection) {
    let group = new Group;
    for (let value of collection) {
      group.add(value);
    }
    return group;
  }
}

let group = Group.from([10, 20]);
console.log(group.has(10)); // → true
console.log(group.has(30)); // → false
group.add(10);
group.delete(10);
console.log(group.has(10)); // → false