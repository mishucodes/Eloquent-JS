//They are those operators that are applied to boolean values. They're "logical gates":

//a) AND:
console.log(true && true);
console.log(true && false);
console.log(false && false);
//b) OR:
console.log(true || true);
console.log(true || false);
console.log(false || false);
//c) NOT:
console.log(!true);
console.log(!false);

    //some tricks to get more logical gates:
    //i) NAND:
    console.log(!(true && true));
    //ii) NOR:
    console.log(!(true || true));
    //iii) XOR:
    console.log(true != true);
    console.log(true != false);
    console.log(false != true);
    console.log(false != false);

//IMPORTANT NOTE: Make sure you consult the rules regarding the "Operator Precedence & Associativity" for these operators.



//d) Ternary/Conditional Logical Operator:
console.log(true? 1 : 2);
console.log(false? 1 : 2);
console.log((1 < 2)? 1 : 2);
console.log((1 > 2)? 1 : 2);