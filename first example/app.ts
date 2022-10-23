export{}; // export is used to solve duplicate identifier issue
class Parent{
    name:String;
    setName(name):void
    {
        this.name=name;
    }
}

class Child extends Parent{
    getName():String
    {
        return this.name;
    }
}

let c1 = new Child();
c1.setName("Petter");
console.log(c1.getName());