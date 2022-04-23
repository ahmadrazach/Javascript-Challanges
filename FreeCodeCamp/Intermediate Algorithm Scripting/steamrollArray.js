function steamrollArray(arr) {
    //find size of array
    // console.log(arr)
    //take for loop till array size
    // use Array.isArray to find out if it's array or it is value
    let flattenedArray=[]
    for(let i =0;i<arr.length;i++)
    {
        if(Array.isArray(arr[i]))
        {
        // Recursively flatten entries that are arrays and push into the flattenedArray
            flattenedArray.push(...steamrollArray(arr[i]));
            // console.log('+',steamrollArray(arr[i]),flattenedArray)
        }
        else
        {
            // console.log('-',flattenedArray)
            flattenedArray.push(arr[i])
        }
    }
    // console.log(arr[4],Array.isArray(arr[6]))
    return flattenedArray;
  }
  
  console.log(steamrollArray([1,
     [2],
      [3,
         [[4]]]]));