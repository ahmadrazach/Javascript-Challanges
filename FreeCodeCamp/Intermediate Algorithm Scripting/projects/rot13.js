function rot13(str) {

    //save all the uppercaseaplhabets in a string
    //make an accumulator
    let accumulator=""
    const alphabet=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    
    //loop to the str
    for(var value_index in str)
    {
        //checking if it gets alphabet or space
        const isALetter=alphabet.includes(str[value_index])
        if(isALetter===false){
            accumulator+=str[value_index]
        }
        
               // if it's a upper case letter ? check if +13's char code >90 gets you to the number or subtract the number to take the result 
        else{
            const charIndex=alphabet.findIndex((c)=>c===str[value_index]);
            
            accumulator+= alphabet[charIndex+13] || alphabet[charIndex-13]
        }

    }
    return accumulator;
  }
  
  console.log(rot13("SERR PBQR PNZC"));