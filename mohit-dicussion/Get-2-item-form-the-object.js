//Get 2 item form the object 
const obj = {
    name:"pramod",
    email:"p1@gmail.com",
    phone:"123"
}
const {phone, ...rest} = obj
console.log(rest)


console.log({...obj})

