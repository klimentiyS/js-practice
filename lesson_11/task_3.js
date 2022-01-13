const hasSameNum = (arr) => {
    let flag = false
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] === arr[i-1]) {
            flag = true            
        }
    }
    return flag
}

let arr = [1, 2, 4, 4, 5, 9]
alert(hasSameNum(arr)? 'Да' : 'Нет')