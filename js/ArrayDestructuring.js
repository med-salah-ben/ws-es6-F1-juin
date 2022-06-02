const arr = [123,"second",true]
console.log(arr)
//assigning array item to var
const [a,b,c] =[123,"second",true]
console.log(c)

// Skipping Items

const [, ,z] = [100,"hello",false]
console.log(z)


//assigning the first value , storing the rest
const [f,year,...rest] = [365,"year",true,"world", 24]
console.log(f,year)
console.log("rest : ",rest)

//swapping var change it

let x= true ;
let y =false;

[x,y] = [y,x]
console.log("X : ",x,"Y : ",y)