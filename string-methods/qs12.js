// . Write a program that converts the variable num to 
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

let num = 35.36;

let dotClear = num.toString().replace('.', '')
alert(`before ${num} after replacing dot ${dotClear}`);

// checking last charactor in string value 
let char = "Pakistani";

let lastChar = char.charAt(char.length - 1)
alert(lastChar)

var text = "One Day Insha Allah I will be a successfull Software Engineer of Pakistan! Insha All that day will be comming soon!";

for (var i = 0; i < text.length; i++) {
     if (text.charAt(i) === "!") {
     alert("Exclamation point found!");
     break;
     }
     }