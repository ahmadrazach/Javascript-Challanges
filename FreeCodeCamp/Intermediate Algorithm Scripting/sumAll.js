// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

function sumAll(arr) {
    let sum=0;
    let lowest_num=arr[0]
    let highest_num=arr[1]
  
    if(lowest_num>highest_num)
    {
      let temp=highest_num
      highest_num=lowest_num
      lowest_num=temp
    }
    for(let i=lowest_num;i<=highest_num;i++)
      sum+=i
    return sum;
  
  }
  
  console.log(sumAll([1, 4]));