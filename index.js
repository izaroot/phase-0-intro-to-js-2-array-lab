// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(){
    cats.push("Ralph");
}
function destructivelyPrependCat(){
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(name){
    name = [...cats];
    name.push("Broom");
    return name;
}
function prependCat(name){
    name = [...cats];
    name.unshift("Arnold");
    return name;
}
function removeLastCat(name){
    name = [...cats];
    name.pop();
    return name;
}
function removeFirstCat(name){
    name = [...cats];
    name.shift();
    return name;
}

