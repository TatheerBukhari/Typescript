/*
Variable means anything that can vary.
A TypeScript variable is simply a name of storage location. 
A variable must have a unique name. 
*/

//Three Ways
//let/var/const
//var is the keyword that tells Java
//Script you're declaring a variable.
// The keyword let in Javascript is used to declare
// a variable that is block scoped in JavaScript. 


/*The const declaration declares block-scoped local
variables. The value of a constant can't be changed 
 through reassignment using the assignment operator
 ,but if a constant is an object,its properties can 
  be added, updated, or remove */

  //camel case
  let firstname="Hello I am good , How are you !";

  /*When you declare a variable using const, var, or let, 
  you can optionally add a type annotation to explicitly 
  specify the type of the variable:
  let myName: string = "Alice";
  TypeScript doesn’t use “types on the left”-style  
  declarations like int x = 0; Type annotations will 
  always go after the thing being typed.
  In most cases, though, this isn’t needed.
  Wherever possible, TypeScript tries to automatically infer the 
  types in your code. 
// No type annotation needed -- 
//'myName' inferred as type 'string'
let myName = "Alice";
 */



let firstname2:string="Hello I am string";
var firstname3:string="Hrllo I am Var";
const firstname4:string="Pink Classroom";
console.log(firstname4);



  