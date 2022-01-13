const hasMore = (a, b) => a + b > 10

let a = Number(prompt('Введите первое число'))
let b = Number(prompt('Введите второе число'))
alert(`Сумма чисел больше 10-ти: ${hasMore(a, b)? 'Да!' : 'Нет!'}`)