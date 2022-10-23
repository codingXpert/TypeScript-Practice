export{}; // export is used to solve duplicate identifier issue
class App{
    name;
    getName(){
        console.log(this.name);
    }
    constructor(name){
        this.name=name;
    }
}
 let a1 = new App("anil");
 a1.getName();