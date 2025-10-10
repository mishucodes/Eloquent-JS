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
    [Symbol.iterator] = function() {return new SetIterator(this)};
}

class SetIterator
{
    constructor(mySet)
    {
        this.i = 0;
        this.set = mySet.set;
    }

    next() //Very Makeshift approach, but I did not want to use methods like ".length", etc.
    {
        if(this.set[this.i] !== undefined)
        {
            this.i++;
            return {value: this.set[this.i-1], done: false};
        }
        else
        {
            if(this.set.indexOf(undefined) === -1)
                return {done: true};
            else
            {
                this.set.splice(this.i, 1);
                return {value: undefined, done: false};
            }
        }
    }
}

let mySet = new CreateSet();
mySet.add('1'); //done
mySet.add(undefined); //done
mySet.add('2'); //done
mySet.add('3'); //done
for(let x of mySet)
    console.log(x);











//Author's Version:
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

  [Symbol.iterator]() {
    return new GroupIterator(this.#members);
  }
}

class GroupIterator {
  #members;
  #position;

  constructor(members) {
    this.#members = members;
    this.#position = 0;
  }

  next() {
    if (this.#position >= this.#members.length) {
      return {done: true};
    } else {
      let result = {value: this.#members[this.#position],
                    done: false};
      this.#position++;
      return result;
    }
  }
}

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c