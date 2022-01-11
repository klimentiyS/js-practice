let str = prompt('Введите строку')
let fs = str.split('')
let result = fs[0].toUpperCase() + fs.join('').slice(1)
alert(result)
 
let result1 = str.replace(str[0], str[0].toUpperCase())
alert(result1 + ' short form')