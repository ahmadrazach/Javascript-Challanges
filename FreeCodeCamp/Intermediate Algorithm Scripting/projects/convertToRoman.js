// Convert the given number into a roman numeral.
function convertToRoman(num) {

    //making a table to define values 
    const romanValueTable={
        M:1000,
        CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1
    }
    //MAKING AN string_accumulator
    let string_accumulator=''

    //looping thourght all the Value tables
    for(var key in romanValueTable)
    {
        
        //loop to check if  romaanValueTable[key]< =num ? num-=romaanValueTable[key] ; accumulator+=key:null
  
        while(romanValueTable[key]<=num)
        {
            num-=romanValueTable[key]
            string_accumulator+=key
        }
    }
    return string_accumulator;
   }
   
   console.log(convertToRoman(3999));