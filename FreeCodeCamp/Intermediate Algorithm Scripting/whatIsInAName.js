// Make a function that looks through an array 
// of objects (first argument) and returns an array
// of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

function whatIsInAName(collection, source) {
    const arr = [];
    // Only change code below this line
    // 1- taking the next argument that are next to the array in the Souce keys
    const souceKeys = Object.keys(source);
    
    
    // 2- using filter on array to return which matches the ans
    return collection.filter(item=>{
        //3 - traversing all the loop of souce keys
        for(let i=0;i<souceKeys.length;i++)
        {
            console.log(souceKeys[i])
            if(item[souceKeys[i]]!==source[souceKeys[i]]|| !item.hasOwnProperty(souceKeys[i]))
                return false
            else
                return true
        }

    })
  }
  
  console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }));