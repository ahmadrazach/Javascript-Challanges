function binaryAgent(str) {

    //splitting all the strings in array with spaces
    var string_bin=str.split(" ")
    let str_result=[]
    for(var array_index in string_bin)
    {
      //pushing them in the array after converting them first into decimal and then finding their charctercode
      str_result.push(String.fromCharCode(parseInt(string_bin[array_index],2)))
    }
    //joiing them
    return str_result.join('');
  }
  
  binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");