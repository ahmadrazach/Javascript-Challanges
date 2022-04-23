function fearNotLetter(str) {
    let starter_char_value=str.charCodeAt(0)
    let count_comparison=starter_char_value;
    //console.log(starter_char_value)
    //take string in a loop
    for(var word_index in str)
    {
        // start a counter from 97 as a's ascii is 97
        // compare each value's ASCII with conuter value adding with every iteration
        // if a char doesn't match ? return the char on which the counter is 

        if(count_comparison!=str.charCodeAt(word_index))
            return (String.fromCharCode(count_comparison))
        else
        count_comparison++;

    }
  }
  
  console.log(fearNotLetter("abcdefghjklmno"));