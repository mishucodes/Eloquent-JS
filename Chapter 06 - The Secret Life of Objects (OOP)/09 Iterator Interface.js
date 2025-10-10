//Iterable Values such as arrays/strings have a "Symbol.iterator()" method.
//This method returns an object that has, inter-alia, a "next()" method.
//This 'next' method returns another object: {value: x, done: boolean};
//For example:
    let okIterator = "OK"[Symbol.iterator]();
    console.log(okIterator.next()); // -> {value: "O", done: false}
    console.log(okIterator.next()); // -> {value: "K", done: false}
    console.log(okIterator.next()); // -> {value: undefined, done: true}


//Defining our own iterator interface:
//a) Defining a class:
    class Matrix
    {
        constructor(width, height, element = (x, y) => undefined)
        {
            this.width = width;
            this.height = height;
            this.content = [];
            for (let y = 0; y < height; y++)
                for (let x = 0; x < width; x++)
                    this.content[y * width + x] = element(x, y);
        }
        get(x, y) {return this.content[y * this.width + x];}
        set(x, y, value) {this.content[y * this.width + x] = value;}
        //we could also add an iterator interface within the class like this:
            //[Symbol.iterator] = function() {return new MatrixIterator(this);};
    }
//b) Defining a custom iterator for ibid:
    class MatrixIterator
    {
        constructor(matrix)
        {
            this.x = 0;
            this.y = 0;
            this.matrix = matrix;
        }
        next()
        {
            if (this.y == this.matrix.height)
                return {done: true};
            let value =
            {
                x: this.x,
                y: this.y,
                value: this.matrix.get(this.x, this.y)
            };
            this.x++;
            if (this.x == this.matrix.width)
            {
                this.x = 0;
                this.y++;
            }
            return {value, done: false};
        }
    }
//c) Setting this custom iterator to become the default of Matrix class:
    Matrix.prototype[Symbol.iterator] = function()
        {
            return new MatrixIterator(this);
        };


//We can now loop over a matrix with for/of.
    let matrix = new Matrix(2, 2, (x, y) => `value ${x},${y}`);
    for (let {x, y, value} of matrix)
        console.log(x, y, value);
        // -> 0 0 value 0,0
        // -> 1 0 value 1,0
        // -> 0 1 value 0,1
        // -> 1 1 value 1,1