//------------------------------

console.log(document.querySelector('.message').textContent); // text content of class message.

//------------------------------

//we can set textContent of a class by:

document.querySelector('.message').textContent = "--text--";

// setting a value to the field:

document.querySelector('.guess').value = "--text--";
console.log(document.querySelector('.guess').value);

//------------------------------

// addEventListener [first argument: when that happens, second: do the following]

document.querySelector('.check').addEventListener('click', function(){
    console.log(document.querySelector('.guess').value);
});

//------------------------------

if(!guess){
    document.querySelector('.message').textContent = '⛔ No Number';
}

// here guess in a falsy type variable, so in if condition it always gives as ' 0 "Number" ' if it does not initialised.
// 0 is falsy si using !.

//------------------------------

const number = Math.trunc(Math.random() * 20) + 1 ;

// Math.random() --> gives value between 0-1 (fraction)
// * 20 --> makes it from 0-20
// Math.trunc --> it makes it fraction less from 0-19
// +1 to make it 1-20

//------------------------------

document.querySelector('body').style.backgroundColor='#60b347';
document.querySelector('.number').style.width = '30rem';

// manipulating CSS here property name use camel case.

//------------------------------

