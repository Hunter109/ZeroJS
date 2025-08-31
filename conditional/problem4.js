// Ask for marks → if marks ≥ 90 print "A", if ≥ 75 print "B", if ≥ 50 print "C", else "Fail".

let marks = prompt("Enter your mark");
// let marks = 44

if (marks >= 90) {
    console.log("congratulation you got A Grade")
} else if (marks >= 75) {
    console.log("congratulation you got B Grade")
}
else if (marks >= 50) {
    console.log("congratulation you got C Grade")
}
else {
    console.log("you have been fail")
}