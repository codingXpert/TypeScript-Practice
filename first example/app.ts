export{}; // export is used to solve duplicate identifier issue
class App{
    name:String="anil";
    getName():String{
     return this.name;
    }
    constructor(name:String){
        this.name=name;
    }
}
 let a1 = new App("petter");
 console.log(a1.getName());