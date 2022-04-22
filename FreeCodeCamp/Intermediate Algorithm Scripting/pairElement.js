function pairElement(str) {
    //we have to make pairs
    //if string's char is A->save array ['A','T']
    //if string's char is T->save array ['T','A']
    //if string's char is C->save array ['C','G']
    //if string's char is G->save array ['G','C']
    //
    //saving it in 2d array
    // length of 2d array is string.length
    let result=[]
    for(var char in str)
    {
        if(str[char]==='G')
         result.push(['G','C'])
        else if(str[char]==='C')
         result.push(['C','G'])
        else if(str[char]==='A')
         result.push(['A','T'])
         if(str[char]==='T')
         result.push(['T','A'])

    }

    return result;
  }
  
  console.log(pairElement("GCG"));