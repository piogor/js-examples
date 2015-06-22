var Drink = function (_name, _volume) {
    // name of the drink
    this.name = _name;
    // home much of drink we do have
    if (_volume || _volume === 0 ) this.volume = _volume;

    // let's drink the drink
    this.drink = function (how_much) {
        if (this.volume >= how_much) {
            console.log('Sliiiiiii.')
            this.volume -= how_much;            
        } else {
            console.log('You still need to find ' + (how_much-this.volume) + ' of ' + this.name + ' to drink.');
            this.volume = 0;
        }
    }

    
}


glassOfTea = new Drink('Black tea', 0.25);

glassOfTea.withSugar = true;


var Tea = function Tea(_name, _volume, _sugared) {
    // name of the drink
    this.name = _name || 'tea';
    // home much of drink we do have
    this.volume = _volume;
    // and sugar
    this.withSugar = _sugared;
}

glassOfGreenTea = new Tea('Green tea', 0.25, false);

var Tea = function Tea(_volume, _sugared) {  
    this.volume = _volume;
    // and sugar
    this.withSugar = _sugared;
}

Tea.prototype = new Drink('tea');

console.log('We are creating a cup of Tea. Remeber, the Tea has defined prototype as a Drink object.');
cupOfTea = new Tea(0.15, false);
console.log('Can we drink it?');
cupOfTea.drink(0.1);
cupOfTea.drink(0.1);

console.log('What about glass of tea?');
glassOfTea = new Tea(0.25, true)
glassOfTea.drink(0.1);
glassOfTea.drink(0.1);

console.log("Let's add a possibility to refill a tea.");
Tea.prototype.refill = function (_volume) {
    this.volume += _volume;
}

console.log("Did it modified already existed objects?");
glassOfTea.refill(0.2);


glassOfTea.drink(0.3);


// oh, what a pity we spoil out the drink
Drink.prototype.spoil = function (how_much) {
    if (this.volume >= how_much) {
        this.volume -= how_much;
        return new Drink(this.name, how_much)
    } else {
        var old_volume = this.volume
        this.volume = 0;
        return new Drink(this.name, old_volume)
    }
}

/*

var Juice = function (_volume,_fruits) {
    this.volume = _volume;
    this.fruits = _fruits;
    this.name = _fruits.join('with') + ' juice';
    this.mixWith = function (_juice) {

    }
}

Juice.prototype = new Drink('juice');

orangeJuice = new Juice(0.2, [orange])

orangeJuice

*/