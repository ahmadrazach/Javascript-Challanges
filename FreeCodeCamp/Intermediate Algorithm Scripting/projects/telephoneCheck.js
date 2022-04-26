function telephoneCheck(str) {
    
    //make valid patterns array
    const validPattern=[
        /^\d{3}-\d{3}-\d{4}$/,
        /^1 \d{3} \d{3} \d{4}$/,
        /^1 \d{3}-\d{3}-\d{4}$/,
        /^1 \(\d{3}\) \d{3}-\d{4}$/,
        /^\d{10}$/,
        /^\(\d{3}\)\d{3}-\d{4}$/,
        /^1\(\d{3}\)\d{3}-\d{4}$/,
        /^1\(\d{3}\)\d{3}-\d{4}$/,

    ]
    //return some vaid array

    return validPattern.some((pattern)=>pattern.test(str));
  }
  
  console.log(telephoneCheck("27576227382"));