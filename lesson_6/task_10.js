let min = prompt(`Введити минимальное число`)
let max = prompt(`Введите максимальное число`)
let i = 0
let arr = []
while (i < 10) {
    arr[i] = Math.floor(Math.random() * (max - min + 1) + min)
    arr[i] = ' ' + arr[i]
    i++
}

document.write(`Массив из 10-ти случайных чисел <b>[${arr} ]</b> от ${min} до ${max}.`)