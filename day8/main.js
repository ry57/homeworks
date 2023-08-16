// 1
let name$ = prompt("ادخل اسمك");
let age$ = prompt("ادخل عمرك");

if (age$ >= 18) {
    alert("ارحب "+ name$)
}else{
    alert("للأسف "+name$+" عمرك اقل من 18")
}


// 2
name_1="احمد";
let name_2 = prompt("ادخل اسمك");

let massage = name_1 != name_2 ? "الاسمان غير متطابقان" : "الاسمان متطابقان";
alert (massage)