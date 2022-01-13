const arrFill = (value, num) => {
    let arr = []
    for (let i = 0; i < num; i++){
        arr.push(value)
    }
    return arr
}

document.write(arrFill('x', 5))