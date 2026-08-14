let salary = Number(prompt("Enter your salary"))
let wd = 10;
let td = 26;
let givesalary = salary/26;
let gainsalary = givesalary*wd;
document.write("<br>salary="+salary +"<br>wd="+wd + "<br>td=" +td + "<br>gainsalary:"+gainsalary)

let watchprice = Number (prompt("enter the watchprice"));
let buy = Number(prompt("how many watch"));
let total = watchprice*buy;
let gst = total*(18/100);   
let final=gst+total;
let discount=5/total*100;
let discountfinal = total - discount;



document.write("<br><br>watchprice:"+watchprice +"<br>buy:" +buy +"<br>total:"+total)
document.write("<br><br>gst:"+gst+"<br>finalvalue:" +final)
document.write("<br><br>discountfinal:"+discountfinal)

