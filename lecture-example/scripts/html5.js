function clickCounterPersistent(result_element) {
    if (typeof (Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount) + 1;
        } else {
            localStorage.clickcount = 1;
        }
        result_element.html("You have clicked the persistent counter button " + localStorage.clickcount + " time(s).");
    } else {
        result_element.html("Sorry, your browser does not support web storage...");
    }
}

function clickCounterSessin(result_element) {
    if (typeof (Storage) !== "undefined") {
        if (sessionStorage.clickcount) {
            sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
        } else {
            sessionStorage.clickcount = 1;
        }
        result_element.html("You have clicked the session button " + sessionStorage.clickcount + " time(s).");
    } else {
        result_element.html("Sorry, your browser does not support web storage...");
    }
}

