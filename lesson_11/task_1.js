const hasNum = (num, arr) => {
    let flag = false
    for (let i of arr) {
        if (i === num) {
            flag = true
        }
    }
    return flag
}

let arr = [1, 3, 5, 6, 5]
alert(hasNum(7, [1, 3, 5, 6, 5]))
