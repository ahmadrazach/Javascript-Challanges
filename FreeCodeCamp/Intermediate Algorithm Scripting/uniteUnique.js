function uniteUnique(...arr) {
    //intitalizing an array final_array
    let final_array=[]
    //take a loop of length arr
    for(var i in arr)
    {
        //2nd loop should goto arr[i].length
       for(var j in arr[i])
        {
            //if element is not included in final_array, push it into array    
            if(!final_array.includes(arr[i][j]))
            {
                final_array.push(arr[i][j])
                
            }
        }
    }
    return final_array;
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);