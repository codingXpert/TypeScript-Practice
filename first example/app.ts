// export{}; // export is used to solve duplicate identifier issue
namespace userUtils{
    export class User{
        getName(){
            return "anil sidhu";
        }
    }
}

let u1 = new userUtils.User();
console.log(u1.getName)