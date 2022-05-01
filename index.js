function add(a, b){
    return a + b;
}
function subtract(a, b){
    return a - b;
}
function multiply(a, b){
    return a * b;
}
function divide(a, b){
    return a / b;
}
add(2, 4);
subtract(8, 3);
multiply(3, 4);
divide(5, 5);
function increment(n){
    n++;
    return n;
    
}
function decrement(n){
    n--;
    return n;
}
increment(5);
decrement(3);
function makeInt(n){
    return parseInt(n, 10);
}
makeInt("5");
function preserveDecimal(n){
    return parseFloat(n);
}
preserveDecimal("45.7532");