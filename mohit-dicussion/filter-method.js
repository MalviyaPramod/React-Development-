const arr = [
    {id: 1, country: 'Austria'},
    {id: 2, country: 'Germany'},
    {id: 3, country: 'Austria'},
  ];

  /*
  find()
  1. Only retrun first items of the obj that matched! 
  (find() returns the element itself that satisfies the condition.)
  2. if condition is wrong its retrun undefined/ if matched return true 
  */
const resultfind = arr.find(function(currElement, index){
    if(currElement.country ==="Austria"){
        return currElement;
    }
})
console.log(resultfind)

  /*
  filter()
  1. filter() returns an array containing the element that satisfies the condition 
  2. filter() returns an array containing the element that satisfies the condition  
  */
  const resultFilter = arr.filter(function(currElement, index){
    if(currElement.country ==="Austria"){
        return currElement;
    }
})
console.log(resultFilter)