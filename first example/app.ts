export{}; // export is used to solve duplicate identifier issue
class App{
    name="anil";
    getName(){
        console.log(this.name);
    }
    constructor(){
        console.log("constructor called")
    }
}
 let a1 = new App;
 a1.getName();