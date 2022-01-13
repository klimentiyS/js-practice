const sum1 = (arr) => {
    let result = 0
    for (let i of arr) {
        for (let j of i) {
            for (let k of j) {
                result += k
            }
        }
    }
    return result
}

const sum2 = (arr) => {
    let result = 0
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr[i].length; j++){
            for (let k = 0; k < arr[i][j].length; k++){
                result += arr[i][j][k]
            }
        }
    }
    return result
}


alert('func sum1: ' + sum1([[[1, 2], [3, 4]], [[5, 6], [7, 8]]]))
alert('func sum2: ' + sum2([[[1, 2], [3, 4]], [[5, 6], [7, 8]]]))