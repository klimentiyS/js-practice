let arr = [4, 2, 5, 19, 13, 0, 10]
let sum = 0
for (let i of arr) {
    sum += Math.pow(i, 3)
}
document.write(`Квадратный корень суммы кубов массива [${arr}] равен: ${Math.sqrt(sum).toFixed(2)}`)