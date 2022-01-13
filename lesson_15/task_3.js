const getDigitsSum = (num) => {
    let str = String(num).split('')
    let result = 0
    for (i of str) {
        result += Number(i)
    }
    return result
}

alert(getDigitsSum(36))