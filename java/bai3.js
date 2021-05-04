
function isFibonnaci(num) {
    let flag = false
    let num1 = 0;
    let num2 = 1;
    for (let i = 1; i <= num; i++) {
        if (num === num1) {
            flag = true;
            break;
        }
        let total = num1 + num2
        num1 = num2;
        num2 = total
    }
    if (flag) {
        console.log(num + " nằm trong dãy")
    } else {
        console.log(num + " không nằm trong dãy")
    }
}

isFibonnaci(10946)


