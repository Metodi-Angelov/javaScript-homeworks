function sameNumbers(number) {
    let numString = number.toString()
    let total = 0;
    let isTrue = true;
    for (let i = 0; i < numString.length; i++) {
        total += Number(numString[i])
        if (isTrue) {
            isTrue = numString[0] === numString[i]
        }
    }
    console.log(isTrue)
    console.log(total)
}


sameNumbers(2222222)
sameNumbers(1234)