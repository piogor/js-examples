//Named function
function hello_world(id) { // Scope definistions by curly brackets
    if (!id) { 
        alert('Hello world!');
    } else {
        document.getElementById(id).innerHTML = "Hello World";
    }
}

/* Function as variable!
*/
var bye_world = function(id) {
    if (!id) {
        alert('Bye world!');
    } else {
        document.getElementById(id).innerHTML = "By World";
    }
}