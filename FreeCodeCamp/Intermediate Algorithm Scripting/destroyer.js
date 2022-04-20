
function checkValue(arr,num){

    
    return arr.filter((item)=>item!=num)
    
}
function destroyer(...args) {
    // console.log(arguments))
    console.log(args)
    let arr=args[0]

    for(let i=1;i<args.length;i++)
    {
        arr=checkValue(arr,args[i])
    }
    // console.log(arguments.call[i])
    return arr
}
  
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));