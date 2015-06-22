function browse_elements(start, output_id) {
    //get the element to browse
    var elements = start.children;
    var output = document.getElementById(output_id);    
    for (var i = 0; i < elements.length; i++) {
        output.innerHTML += "Found element:" + elements[i].tagName + " with id: " + elements[i].id + "<br />"
        browse_elements(elements[i], output_id);
    }
}

function add_elements(start, output_list) {
    //get the element to browse
    var elements = start.children;
    //iterates through children
    for (var i = 0; i < elements.length; i++) {

        //create list item element
        var li_element = document.createElement('li');

        // create a text node
        var text_element = document.createTextNode("Found element:" + elements[i].tagName +
              " with id: " + elements[i].id);

        // appedn text to li
        li_element.appendChild(text_element);

        // append li to output list
        output_list.appendChild(li_element);

        // go for recurency
        add_elements(elements[i], output_list);
    }
}