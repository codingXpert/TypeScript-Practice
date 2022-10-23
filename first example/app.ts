export{}; // export is used to solve duplicate identifier issue
// function call(a):number{
//     return a;
// }

// console.log(call("vivek"));

//as the type of function is number and we are passing string to it 
//Although this will not generate any error because the number is type of function not for the argument




//if we define type as number for the argument , then the above code will produce an error
function call(a:number):number{
    return a;
}

console.log(call("vivek"));