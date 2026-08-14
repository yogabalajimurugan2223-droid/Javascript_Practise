let a = Number(prompt("Enter a value"));
// document.write(a>100?"greater then 100":"less then 100<br>")

let a1 = Number(prompt("Enter a1 value"));
let b1 = Number(prompt("Enter b1 value"));
// document.write(a1>b1?"a greater then b":"a less then b"+"<br>")

let a2 = Number(prompt("Enter a2 value"));
// document.write(a2>0?"a2 is positive number":"a2 is negative number"+"<br>")

let age = Number(prompt("Enter age"));
// document.write(age>35?"eligible for account open":"not-eligible for account open"+"<br>")

let score = Number(prompt("enter score"));
// document.write(score>90?"A great":"B great"+"<br>")

let h = Number(prompt("enter height"));
// document.write(h>180?"tall":"shot"+"<br>")


if(a==18){
    document.write("<br>Eligible");
}else{
    document.write("<br>not Eligible");
}

if(a>100){
    document.write("<br>greater than");
}
else{
    document.write("<br>Less than");
}

if(a1>b1){
    document.write("<br>Greater Than");
}
else{
    document.write("<br>less than");
}

if(score>90){
     document.write("<br>Eligible");
}else{
    document.write("<br>not Eligible");
}

if(h>180){
    document.write("<br>Tall");
}
else{
    document.write("<br>short");
}