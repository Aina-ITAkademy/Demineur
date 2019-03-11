function testR() {
    recurs(0)
}

function recurs(r) {
    console.log("r = " + r)
    if(r <10) {
        isEven(r)
        r++
        recurs(r)
    }
}

function isEven(r) {
    if (r % 2 == 0) {
        console.log(r + " is Even")
    }
}