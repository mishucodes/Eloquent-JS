//01. Object-Oriented Programming: The main idea in OOP is to use certain "Abstract Data Types" (objects) as the unit of program organization. Setting up a program as a number of strictly separated object types provides a way to think clearly about its structure and thus to enforce some kind of discipline, preventing everything from becoming entangled.
//In other words, an ADT is a subprogram that may contain arbitrarily complicated code but exposes a limited set of methods (functions) and properties (bindings/values) that people working with it are supposed to use & access. This is called the "Interface" of these ADTs. An ADT has:
	//a) Properties: Normal values to be accessed.
	//b) Methods: Certain values that are function definitions.
	//For instance:
		let rabbit =
		{
			name: 'bugs bunny',
			speak: (str) => console.log(str)
		};
		rabbit.speak('hello my name is ' + rabbit.name);


//02. There are 05 basic principles of OOP:
	//a) Abstraction – Hiding complex details and exposing only what’s necessary.
	//b) Encapsulation – Restricting direct access to sensitive details of implementation.
	//c) Inheritance – Letting a class derive properties and methods from another class(es).
	//d) Polymorphism – Allowing the same method to behave differently based on context.
	//e) Composition – Building complex ADTs by combining simpler ones instead of relying only on inheritance.
        //NOTE: Abstraction & Encapsulation (as principles) are quite opposite to Inheritance & Composition. The formers help us keep things neat & separate, while the latter may risk complexity for the sake of brevity.