let tamil = Number(prompt("Enter Your Tamil Mark"));
let englsih = Number(prompt("Enter Your English Mark"));
let maths = Number(prompt("Enter your maths mark"));
let physics = Number(prompt("Enter Your Physics Mark"));
let chemistry = Number(prompt("Enter Your Chemistry Mark"))
let computer = Number(prompt("Enter Your Computer Mark"))
let cut_off = maths + chemistry + physics + computer /4;

document.write("<br>Tamil mark:" + tamil)
document.write("<br>english mark:" + englsih)
document.write("<br>maths mark:" + maths)
document.write("<br>physics mark:" + physics)
document.write("<br>chemistry mark:" + chemistry)
document.write("<br>computer mark:" + computer)
document.write("<br>cut_off:" +cut_off)
