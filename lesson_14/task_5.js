const reverse = (arr) => {
    let result = []
    for (let i of arr) {
        result.unshift(i)
    }
    return result
}

alert(reverse([1,2,3,4,5]))