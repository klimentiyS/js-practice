let str = prompt('Введите строку, в которой нужно осуществить поиск')
let search = prompt('Введите искомое слово, которые нужно найти')
let result = str.indexOf(search)
if (result >= 0) {
    document.write(`Искомое слово найдено! <br><br> ${str.replace(search, '<b>' + search + '</b>')}`)
}
else {
    document.write('Искомое слово не найдено!')
}