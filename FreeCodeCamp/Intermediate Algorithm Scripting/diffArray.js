// Compare two arrays and return a new array with any items only
//  found in one of the two given arrays, but not both. In other 
//  words, return the symmetric difference of the two arrays.


function diffArray(arr1, arr2) {
    const newArr = [];
    //compare all values of each array

    function OnlyInFirst(first,second){
        //comparing both array values
        for (let i=0;i<first.length;i++){
                if(second.indexOf(first[i])===-1){
                    newArr.push(first[i])
                }
        }
    }
    
    OnlyInFirst(arr1,arr2)
    OnlyInFirst(arr2,arr1)
    return newArr;
 
  }
  
  console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));