const sum = (arr) => {
    let result = 0
    for (let i of arr){
        for (let j of i){
            result += j
        }
    }
    return result
}

alert(sum([[1, 2, 3], [4, 5], [6]]))