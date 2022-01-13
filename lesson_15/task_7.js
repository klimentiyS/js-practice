const getDivisors = num => {
    let result = []
    for (let i = 1; i <= num; i++){
        if (num % i === 0) {
            result.push(i)
        }
    }
    return result
}

alert(getDivisors(23541657))