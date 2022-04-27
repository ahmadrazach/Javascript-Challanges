function checkCashRegister(price, cash, cid) {
    
    const currencyUnit={
      "PENNY" : 1 , 
      "NICKEL" : 5 ,
      "DIME" : 10 ,
      "QUARTER" : 25 ,
      "ONE" : 100 ,
      "FIVE" : 500 ,
      "TEN" : 1000, 
      "TWENTY" : 2000 , 
      "ONE HUNDRED" : 10000 
    }


    let change=[]
    let status='';
    // converting it into the whole number for easy working
    let changeSum=cash*100-price*100
    console.log(changeSum)
    let changeSumCheck=changeSum

    let cidSum=0;
    //filtering values from cid which'sn't ==0 and reversing it
    let filteredCid=cid.filter(elem=>elem[1]!==0).reverse();

    //loop on each element of filteredCid
    filteredCid.forEach(element => {
      let curr=element[0]
      let currSum=element[1]*100;
      cidSum+=currSum;
      let amount=0
      console.log(curr,currSum,cidSum,amount)
      while(changeSum>=currencyUnit[curr] && currSum > 0)
      {
        amount+=currencyUnit[curr];
        changeSum-=currencyUnit[curr];
        currSum-=currencyUnit[curr];
        console.log(amount,changeSum,currSum)
      }
      (amount!==0?change.push([curr,amount/100]):null)
    });
    //returning the answer as per changeSum value
    if(changeSum>0){
      status='INSUFFICIENT_FUNDS',
      change=[]
    }else if(changeSum===0 && changeSumCheck==cidSum){
      status='CLOSED',
      change=cid
    }else{
      status='OPEN'
    }
    return {'status':status,'change':change};
  }
  
  console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))