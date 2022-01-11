let str = prompt('Введите строковые данные')
let arr = str.split(' ')
for (let i in arr) {
    arr[i] = arr[i].replace(arr[i][0], arr[i][0].toUpperCase())
}
alert(arr.join(' '))