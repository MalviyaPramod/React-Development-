//pending - resolve - reject
//call back hell ko relosve krne ke liye promiss krte hai
// 2 way to use - promiss object or promiss constructer

//executor- tow function use hote hai reslove and reject
const pobj1 = new Promise((resolve, reject) => {
    setTimout(() => {
        let roll_no = [1, 2, 3, 4, 5];
        resolve(roll_no);
        // reject('Error!')
    }, 2000)
});


//promise counsume
pobj1.then((roll_no)=>{
  console.log(roll_no) 
}).catch((error)=>{
  console.log(error)
})
