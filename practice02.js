function getFee(isMember) {
    return(isMember? "$2.00" : "$100.00");
}

console.log(getFee(-1));

let gymFee = 1300;
gymFee? `Fee is ${gymFee}` : `not subscribed`;

let fee = 100;
fee? console.log(`fee is ${fee}`) : console.log(`not available`);

let age = 20;
if(age > 18) {
    console.log("eligible for voting");
}

if("raman") { // 0, null, undefined pr bas false hoga
    console.log("cond. is true");
}





let a = 5;
switch (a) {
    case 1: document.write("Sunday");
    break;
    case 2: document.write("Monday");
    break;
    case 3: document.write("Tuesday");
    break;
    case 4: document.write("wednesday");
    break;
    case 5: document.write("Thursday");
    break;
    case 6: document.write("Friday");
    break;
    case 7: document.write("Saturday");
    break;
    default: document.write("Invalid input");
    break;

}

let n = 4;
for (let i = 0; i < n; i++) {
    console.log(i);
}

let obj = {
    name : "raman",
    roll : 21,
    fees : 7000
}
console.log(obj.name);

for(it in obj) {  // it is key
    console.log(it, "->", obj[it]); // obj[it] for val. inside it
}
