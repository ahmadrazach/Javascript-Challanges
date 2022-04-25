function palindrome(str) {
    //1- ignore the punctuation,case and spacing
    str=str.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/ /g,'')
    // 2- Check if remains is a palindrome
    let middle=Math.round(str.length/2)
    let last_index=str.length-1
    let first_index=0
    // console.log(middle,last_index)
    while(first_index<middle)
    {
        // console.log(str[first_index]) 
        // console.log(str[last_index])
        if(str[first_index]!==str[last_index])
        return false
        first_index++;
        last_index--;
    }
    //return true if strings a palindrome
    return true;
  }
  
  console.log(palindrome("eye"));