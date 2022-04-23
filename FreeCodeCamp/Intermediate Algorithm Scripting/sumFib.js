// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
function sumFibs(num) {
    let fibo = [ 0,1]
    let final_result=1
    //finding fibonacci series
    if(num<2)
    return num
    for (var i = 2; i <= num; i++) {

            fibo[i] = fibo[i - 1] + fibo[i - 2];
            //break loop if fibonaaci series sum > num
            if(fibo[i]>num)
            { 
              break
            }
            if(fibo[i]%2===1)
            {
                final_result+=fibo[i]
            }
    }
    return final_result;

  }
  
  console.log(sumFibs(1000));