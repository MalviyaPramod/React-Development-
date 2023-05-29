const arr1 = ["a",'b','c']
const arr2 = ['d','e','f']

const collect = [...arr1, ...arr2]
console.log(collect)

//overwrite kar rha hai value
const mohit = {
    edu : "mca",
    add : 'rachi'
}

const pramod = {
    edu : "bca",
    add : "betul",
}
const mareg = {...mohit, ...pramod}
console.log(mareg)


//function 
function sum(n1, n2, n3){
  return n1+n2+n3;
}
//array elemen pass
let nums = [20,30,20]
let result = sum(...nums)
console.log(result)

let numss = [20,30,20]
let obj = {...numss}
console.log(obj);

//सिर्फ Iterable Object जैसे Array को ही आप किसी Array या function parameters में spread कर सकते हैं , Object को नहीं।

let numsss = {num1:12, num2:23};
//object ke item ko ayse pass ni kar skte
sum(...numsss);

// Error : Uncaught TypeError: nums is not iterable