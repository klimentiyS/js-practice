let num = prompt('Введите число факториал которого желаете узнать')
let i = 1
let j = 1
while (i < num) {
    i++
    j *= i
}
document.write(`Факториал числа равен: ${j}`)