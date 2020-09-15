console.log("hello, world!", "how's it going?");
let firstName = "Kweku";
let lastName = "Andoh"
console.log(firstName + " " + lastName); //concatenation

`${firstName} ${lastName}`; // equivalent interpolation

"1" == 1; //returns true
"1" === 1; //returns false, this is called strict equality

/*Control Flow*/
let password = "foo";
if (password.length < 6){
    "Password is too short.";
}
else {
    "Password is long enough.";
}

let x = "foo";
let y = "";
if (x.length === 0 && y.length === 0) {
    "Both strings are empty!";
} 
else {
    "At least one of the strings is nonempty.";
}

//ARRAYS IN JS
"ant bat cat".split(" "); //Split a string to a 3-element array