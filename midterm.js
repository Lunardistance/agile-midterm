//Challenge 1

var array = ['dog', 'jack', 'rufus', 'skippy']

function transformFirstAndLast(array){
    var obj = {}
    for(var i = 0; i<array.length; i++){
        obj[array[0]] = array[array.length-1]
    }
    return obj;
}

var newObj = transformFirstAndLast(array)

console.log(newObj)

//Challenge 2

var keysToGrab = {'dog' : 'Skippy', number : 27, happy : true, lamps : 10}

function getAllKeys(keysToGrab, keysToPlace){
    var keysToPlace = [];
    for(var key in keysToGrab){
        keysToPlace.push(key)
    }

    return keysToPlace;
}

var testRun = getAllKeys(keysToGrab)
console.log(testRun)

//Challenge 3

var obj = {
    key: [1, 3, 5, 7, 11, 14, 17, 19]
}

function getElementsGreaterThan10AtProperty(obj, key){
    var arr = []
        for(let i = 0; i<obj.key.length; i++){
            if(obj.key[i]>10){
                arr.push(obj.key[i])
            }
        }
        return arr
    }
    
var testing = getElementsGreaterThan10AtProperty(obj)
console.log(testing)
//Returns array with elements over 10, empty array for anything else.

//Challenge 4

//You can create a private counter by creating the a counter function wrapped in another function.  The counter would work by having other functions for incrementing and decrementing within the wrapper function, but sitting aside of the initial counter function.  If you want to get really fancy, you can add a third function that returns the value so you can check your work and make sure that the private counter is returning the correct result as you call the incremeent and decrement functions. It needs to be set up in this manner, by way of closure, because of the counter is to be private, it should not be getting changed by extraneous functions or variables outside of the lexical scope of the function in question. If we were to not wrap the counter in a function, then other calls would influence the count in the counter, making it not so private.//


//Challenge 5

//The result of running the code below is the name John Doe printed Twice an the name Aurelio De Rosa printed once.
//Explanation:  Let's skip to the console.logs...  The first console log is going into the object named obj, 
//and then going further into the object nested within that object, prop.  What is in prop?  a function
//which returns the original full name outside of the function using this. to access the var, fullname, outside 
//of the function.  What is that equal to? John Doe.  
//The next console log returns the same thing. Since we set the function of the first console log to test, and
//then we console log the test variable, naturally, it is going to return the same thing as the first.
//the third console log is printing out Aurelio De Rosa because the variable fullname is called within the console,
//without grabbing the function getFullName, which directs it to the fullname variable outside the object using this.
//since fullname is called in 3rd console log alone, it is reverting to the fullname within the scope of the object.

var fullname = 'John Doe';
var obj = {
   fullname: 'Colin Ihrig',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test());
console.log(fullname);
