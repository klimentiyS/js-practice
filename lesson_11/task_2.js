const hasSimpleNum = (num) => {
    let flag = false
    for (let i = 2; i < num; i++){
        if (num % i === 0) {
            flag = true
        }
    }
    return flag
}

let num = Number(prompt('Введите число'))
alert(hasSimpleNum(num) ? 'Делится!' : 'Не делится!')