const inArray = (str, arr) => {
    let flag = false
    for (let i of arr) {
        if (i === str) {
            flag = true
        }
    }
    return flag
}

let str = 'Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет. Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск. Функция должна возвращать true или false.'
let arr = str.replace(/[,.-]/g, '').split(' ')
alert(arr)
alert(inArray('определяет', arr))