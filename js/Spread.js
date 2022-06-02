let inputs = [1,2,5]

// const sum = (x,y,z)=>{
//     return x+y+z
// }

// console.log(sum(...inputs))

//exp2

// console.log(Math.max(...[-5,3,100,1200,-100]))// 1200

// console.log(Math.min(...[-5,3,100,1200,-100]))// -100


// //exp 3

// let arr = [1,2,3];
// console.log("sp",[...arr])
// // let copiedArr = arr
// let copiedArr = [...arr]

// copiedArr.push(4)

// console.log("arr",arr)
// console.log("copiedArr",copiedArr)

//exp4

let cities = ["nabeul","tunis"];
let places = ["hamamet","menzah",...cities]
// places.push(...cities)
console.log(places)