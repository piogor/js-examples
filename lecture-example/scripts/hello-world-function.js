//Named function
function hello_world(id) { // Scope definistions by curly brackets
    if (!id) { //if statement similar to C/C++
        alert('Hello world!');
    } else {
        document.getElementById(id).innerHTML = "Hello World";
    }
}

/* anonymous function assigned 
   to a variable
*/
var bye_world = function(id) {
    if (!id) {
        alert('Bye world!');
    } else {
        document.getElementById(id).innerHTML = "Bye World";
    }
}

//yes, functions are objects
var hw = hello_world //hw is  variable of type function which value is hellow world function object