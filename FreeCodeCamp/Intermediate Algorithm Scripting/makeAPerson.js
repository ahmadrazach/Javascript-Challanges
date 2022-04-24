const Person = function(firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    let fullname=firstAndLast;
    this.getFirstName=function(){
        return fullname.split(' ')[0]
    }
    this.getLastName=function(){
        return fullname.split(' ')[1]
    }
    this.getFullName = function() {
      return fullname;
    };
    this.setFirstName = function(first) {

      fullname=first+" "+fullname.split(' ')[1];
    };
    this.setLastName = function(last) {
      fullname=fullname.split(' ')[0]+" "+last;
    };
    this.setFullName = function(name) {
        fullname=name;
        
    };
  };
  
  const bob = new Person('Bob Ross');
  console.log(bob.setFullName("Haskell Curry"));
//   console.log(bob.getLastName());