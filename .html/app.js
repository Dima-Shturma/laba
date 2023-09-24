let a=parseFloat(prompt("Введіть зміну a"))
let b=parseFloat(prompt("Введіть зміну b"))
var num= {
   C1: Math.pow(a - b, 4),
   C2: Math.pow(a, 4) - (4 * Math.pow(a, 3) * b),
   C3: 6 * (Math.pow(a, 2) * Math.pow(b, 2) - 4 * a * Math.pow(b, 4))

};
alert((num.C1-num.C2)/num.C3);