console.log("hello variables ");

// Var

function testVar(){
    var x = 10 ;
console.log("first",x);
x = 15 ;
console.log("second",x)

if (true){
    var x =20
    console.log("in Block", x)
}
console.log("last x",x)
x=30
}

// testVar()

// Let

function testLet(){
    let y = 2;
console.log("first y =",y)

y = 10 ; 
console.log("second y = ",y);

if(true){
    let y = 15;
    console.log("in Block",y)
}
console.log("last",y)
} 
// testLet()

//Constant

function testConst(){
    const z =3;
console.log("first",z);

z=4;//err
console.log("second",z)

//err
// if(true) {
//     const z = 5;
//     console.log(z)
// }
// console.log("last",z)
}


const obj = {};
//err
// obj = {name:"aziz"};
obj.name = "aziz"
console.log("first",obj)

const tab = [];
//err
// tab=[1,2,3,10]
tab.push(1)
console.log("first",tab)