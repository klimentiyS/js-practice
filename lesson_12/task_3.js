const hasNeg = (a) => a < 0
let a = Number(prompt('Введите число'))
alert(`Введенное число является отрицательным: ${hasNeg(a) ? 'Да!' : 'Нет!'}`)