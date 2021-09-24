let randomNum = Math.floor(Math.random() * 2 + 1);
console.log(randomNum);

if (randomNum >= 4) {
    console.log("Greater than or equal to 4");
} else if (randomNum ===2 || randomNum === 3) {
console.log("Equal to 2 or 3");
} else {
    console.log("Equal to 1");
}
if (randomNum !=3) {
    console.log("not equal to 3");
}
if (randomNum !=3 !=5) {
    console.log("not equal to 3 or 5");
}
if (randomNum ===2 ===4) {
    console.log( "Equal to 2 or Equal to 4");
}