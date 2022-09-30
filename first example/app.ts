
export{}  //using modular approach to overcome the problem of duplicate identifier issue

class App{
    test(){
        console.log("Test function working");
    }
}

let a1 = new App();
a1.test();




//to run this app.ts file we need to type the following command in the terminal
//tsc .\app.ts