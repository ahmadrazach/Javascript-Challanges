function smallestCommons(arr) {
    //sort the arr
    arr.sort((a,b)=>a-b)
    const min_num=arr[0]
    const max_num=arr[1]
    console.log(arr)
    //let array
    // create an array having all the range elements
    let array=[]
    //loop start from arr[0] and ends at arr[1]
    for(let i=min_num;i<=max_num;i++)
    {
        array.push(i)
    }
    //Creating the function that .every will operate on
    let n = max_num* (max_num-1)
    const lowestCommon = (currentValue) => n % currentValue === 0;
    let common = false
    
    // Checking whether the first value for n is the lowestCommon Multiple
    while (common === false){
        n++
        // console.log(n)
        common =  array.every(lowestCommon)
    }
        return n;
    }
  
  console.log(smallestCommons([1,13]));