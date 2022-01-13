const getDigitsSum = (num) => {
    let str = String(num).split('')
    let result = 0
    for (i of str) {
        result += Number(i)
    }
    return result
}
let arr = []
for (let i = 1; i <= 2021; i++){
    if (getDigitsSum(i) === 13) {
        arr.push(i)
    }
}

alert(arr)