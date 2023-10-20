
function Greet(para:string  ,  para2:number):any{
    return para +  para2
}

console.log(`This is a Template Literals Greet: ${Greet("Hello World!" , + 56 )}`);


function people(para:string,para2:string){
    return para+ para2;
}

console.log(`Hi people World like to learn some funtion today! ${people("Function:" , "Arrowfunctions")}`);

function hello(para:number,para2:number):any{
    return para-para2;
}

console.log(`I subtracts the para is 4 and para2 is 5 & Answer is: ${hello(4,5)}`);




