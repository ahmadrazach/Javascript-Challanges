//finding if a num is prime
function isPrime(num) {
    if(num < 2) return false;
  
    for (let k = 2; k < num; k++){
      if( num % k == 0){
        return false;
      }
    }
    return true;
  }

function sumPrimes(num) {
    // if num % 3 === 0 ? not a prime number
    //  if num %2 ===
    let sum=0
    for(let i=0;i<=num;i++)
    {
        if(isPrime(i))
        {  
            sum+=i
        }
    }
    return sum;
  }
  
  console.log(sumPrimes(977));