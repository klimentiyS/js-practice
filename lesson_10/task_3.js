const e = (a, b, c) => (a - b) / c

let a = Number(prompt('Введите число а'))
let b = Number(prompt('Введите число b'))
let c = Number(prompt('Введите число с'))
alert(`(a - b) / c = ${e(a, b, c)}`)