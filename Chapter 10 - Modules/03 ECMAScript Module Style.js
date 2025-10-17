//CommonJS modules work quite well. But they remain a bit of a duct-tape hack.
//This is why the ECMA introduced its own, different module system. It is usually called "ES modules", where ES stands for 'ECMAScript'. The main concepts of dependencies and interfaces remain the same, but the details differ.

//01. Import: Instead of calling a function to access a dependency, you use a special "import" keyword:
    import ordinal from "ordinal";
    import {days, months} from "date-names";
    

//02. Export: Similarly, the "export" keyword is used to export things. It may appear in front of a function, class, or binding definition (let, const, or var).
    export function formatDate(date, format) {/* function definition */}

//NOTE: When you import from another module, you import the binding, not the value, which means an exporting module may change the value of the binding at any time, and the modules that import it will see its new value.


//03. Default: When there is a binding named "default", it is treated as the module’s main exported value. If you import a module like 'ordinal' in the example above, without braces around the binding name, you get its default binding.
//NOTE: Such modules can still export other bindings under different names alongside their default export.
//To create a default export, you write export default before an expression, a function declaration, or a class declaration:
    export default ["Winter", "Spring", "Summer", "Autumn"];
//It is also possible to rename imported bindings using the word as:
    import {days as dayNames} from "date-names";



//CAUTION: Another important difference is that ES module imports happen before a module’s script starts running. That means import declarations may not appear inside functions or blocks, and the names of dependencies must be quoted strings, not arbitrary expressions.
//Also, JS Community is quite divided on CommonJS v. ES Modules. So, it's best to learn both.