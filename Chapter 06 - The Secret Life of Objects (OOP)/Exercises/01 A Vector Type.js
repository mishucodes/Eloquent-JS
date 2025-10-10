//My Version:
class Vector
{
    constructor(x,y)
    {
        this.x = x;
        this.y = y;
    }
    plus(vectorValue)
    {
        return new Vector(this.x + vectorValue.x, this.y + vectorValue.y);
    }
    minus(vectorValue)
    {
        return new Vector(this.x - vectorValue.x, this.y - vectorValue.y);
    }
    get length()
    {
        return Math.sqrt((this.x * this.x) + (this.y * this.y))
        //formula to get the diagonal of a rectangle...
    }
}
console.log(new Vector(1, 2).plus(new Vector(1, 2))); //Vector{x: 2, y: 4}
console.log(new Vector(10, 20).minus(new Vector(5, 10))); //Vector{x: 5, y: 10}
console.log(new Vector(3, 4).length); //5



//Author's Version:
class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(other) {
    return new Vec(this.x + other.x, this.y + other.y);
  }

  minus(other) {
    return new Vec(this.x - other.x, this.y - other.y);
  }

  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}
console.log(new Vec(1, 2).plus(new Vec(2, 3))); // → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3))); // → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length); // → 5