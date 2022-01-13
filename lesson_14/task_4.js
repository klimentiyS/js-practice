const func = (arr) => {
    let result = 0
    for (let i in arr) {
        result += arr[i]
        if (result > 10) {
            return i
        }
    }
}

alert(func([1, 2, 3, 4, 5]))