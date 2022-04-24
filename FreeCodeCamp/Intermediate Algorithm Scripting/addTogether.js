// It has to add two numbers passed as parameters and return the sum.
// It has to check if any of the numbers are actual numbers, otherwise return undefined and stop the program right there.
// It has to check if it has one or two arguments passed. More are ignored.
// If it has only one argument then it has to return a function that uses that number and expects another one, to then add it.

function addTogether() {
    var args = [...arguments];
    let first=args[0]
    let second=args[1]
    
    //checking first args type
    if(typeof(first)!=='number')
    return undefined;
    //checking if second argument is undefined , then giving 2nd argument to it 
    if(second==undefined)
    return  (second) => addTogether(first, second);
    //checking 2nd args type
    if(typeof(second)!=='number')
    return undefined

    return first+second
  }

  
  console.log(addTogether(2,3));