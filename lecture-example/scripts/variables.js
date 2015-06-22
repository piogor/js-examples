var tmp = "some temporary object";

function scope_test1(a) {
    var tmp;
    tmp = a;
   
}

scope_test1("scope test")
console.log(tmp);

function scope_test2(a) {    
    tmp = a;
}

scope_test2("scope test")
console.log(tmp);

function scope_test3(a) {
    tmp = a;
    var tmp;
}

scope_test3("scope test 3")
console.log(tmp);

var text = "Some primitive string";
var pi = 3.14; //this is number

var brush = { color: "green", pattern: "dots" };
var shopping_list = ["apples", "milk", "matches"];

var brush2 = brush;
brush2.color = "red";

console.log(brush.color);

var text2 = text;
text2 = "changed text";
console.log(text);

function this_is_variable_too() {
    console.log("function is a variable");
}

this_is_variable_too();

this_is_variable_too = function () {
    console.log("one can change its value");
};

this_is_variable_too();

(function () {
    var text = "I will not overwrite global variable";
    var pi = "Pi is firend of Sigma."
    console.log(text);
    console.log("Text from the outside scope:" + this.text);    
})();

