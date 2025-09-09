// class Car{   // class in js
//     color(){  // methods in js
//         console.log("I am Method");
//     }
//     price(){
//         console.log("Car price ");
//     }


// };
//  var c = new Car();
// c.color();
// c.price();




// USING CONSTRUCTOR
class Car{                       // class in js
    constructor(name){           // constructor method
        this. name = name ;


    }  
    color(){  // methods in js
        console.log("car name : "  + this.name);

    }


};
var obj = new Car("BMW");
obj.color();


