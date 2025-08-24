setTimeout(function () {
let posNum = +prompt("Enter any positive Number with Floating point(decimal num)")
document.writeln(`Num : ${posNum}<br>`)
document.writeln(`round off value : ${Math.round(posNum)}<br>`)
document.writeln(`floor Value : ${Math.floor(posNum)}<br>`)
document.writeln(`ceil Value : ${Math.ceil(posNum)}<br><br>`)
} ,200 )



// setTimeout(function () {
// let negNum = Number(prompt("Enter any negative Number with Floating point(decimal num)"))
// document.writeln(`Num : ${negNum}<br>`)
// document.writeln(`round off value : ${Math.round(negNum)}<br>`)
// document.writeln(`floor Value : ${Math.floor(negNum)}<br>`)
// document.writeln(`ceil Value : ${Math.ceil(negNum)}<br><br>`)
// } ,400 )



// setTimeout(function () {
// let absNum = parseFloat (prompt("Enter any negative Number"))
// document.writeln(`The absolute value of ${absNum} is ${Math.abs(absNum)}<br><br>`)
//  },600)


 
setTimeout(function () {
        let dice = Math.round(Math.random() * 10);
        if (dice > 6) {
            document.writeln(`random dice value : 6 <br><br>`);
        } else if (dice < 1) {
            document.writeln(`random dice value : 1 <br><br>`);
        } else {
            document.writeln(`random dice value : ${dice} <br><br>`);
        }
}, 1000)




setTimeout(function () {
        let coin = Math.round(Math.random() * 10);
        if (coin > 5) {
            document.writeln(`random coin value : Heads <br><br>`);
        } else if (coin < 5) {
            document.writeln(`random coin value : Tails <br><br>`);
        }
}, 1400)



setTimeout(function () {
let ranNum = Math.round(Math.random() * 100);
document.writeln(`The Number between 1 to 100 is : ${ranNum}<br><br>`)
 },1600)


 // setTimeout(function () {
// let userkg = parseFloat (prompt("Tell me your weight in kgs"))
// document.writeln(`The weight of user is :  ${userkg}`)
//  },1800)