let people = [
    {name:"aziz",age:32},
    {name:"slh",age:32},
    {name:"amani",age:19},
    {name:"mostfa",age:14},
    {name:"Haj malek",age:69},

]


//function Declaration 

// function square(x){
//     return x*x
// }

// console.log(square(5))

//Function Expression

// let ageSum = people.filter(function(person){
//     return person.age > 30 && person.age < 50
// }).filter(function(person){
//     return  person.name =="aziz"
// }).map(function(person){
//     return person.age
// })
// console.log(ageSum)

// const minus = function(aadadSahihTabi3i){
//     return aadadSahihTabi3i - 2
// }

// console.log(minus(5))



// // Arrow Function

// const add = (z,y)=>{
//     return z+y
// }

// console.log(add(5,10))

// const multi = x => {
//     return x*x
// }

// console.log(multi(10))

// const add1 = x => x+x

// console.log(add1(2))

let ageCollect = people
    .filter((person)=> person.age > 10 && person.age < 20 )
    .filter(person => person.name ==="mostfa")
    .map((person)=> person.name)
    console.log(ageCollect)

    let getMalek =people.filter((person)=> person.age > 60 && person.name ==="Haj malek" )
    .map((person)=> person.name)
console.log(getMalek )

