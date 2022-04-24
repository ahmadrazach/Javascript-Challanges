function truthCheck(collection, pre) {
    //loop to all collection
    //if collection[pre]===false
    let boolean = false

    for(var collec_index in collection)
    {
        console.log(collection[collec_index][pre],collection[collec_index])
        if(!collection[collec_index][pre])
        {
            return false 
        }
    }
    
    return true
    
  }
  
  console.log(truthCheck([{name: "Quincy", role: "Founder", isBot: false}, 
  {name: "Naomi", role: "", isBot: false}, 
  {name: "Camperbot", role: "Bot", isBot: true}],
   "role"));