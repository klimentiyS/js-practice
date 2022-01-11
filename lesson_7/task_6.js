let str = prompt('Введите строковые данные')
let n = prompt('Введите количество символов, которое должно отоброажаться')
if (n < str.length) {
    document.write(`${str.slice(0, n)}...`)
}
else {
    document.write(str)
}