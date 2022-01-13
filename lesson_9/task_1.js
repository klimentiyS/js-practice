let str = 'js'
let str1 = str[0].toUpperCase() + str.slice(1)
let str2 = str.replace(str[0], str[0].toUpperCase())
let str3 = str.split('')
str3[0] = str3[0].toUpperCase()
str3 = str3.join('')
document.write(`${str1}
${str2}
${str3}`)