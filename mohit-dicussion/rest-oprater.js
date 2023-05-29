//rest oprater pass argument like that
//way 1
function sum(...arg){
  let total = 0;
  for(const val of arg){
    total += val;
  }
  return total
}

const add = sum(1,1,3)
console.log(add)

//way 2
function names(one, two, ...all){
    console.log("one :", one);
    console.log("two :", two);
    console.log("all :", all);
}
names("a", "b", "c", "d");

//worng way to define
function wrong1(...one, ...wrong) {}
function wrong2(...wrong, arg2, arg3) {}



