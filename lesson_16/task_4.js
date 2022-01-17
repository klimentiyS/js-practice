let str = '123456'

let reg = /(.)(.)/g
let result1 = str.replace(reg, '$2$1')

let result2 = ''
for (let i = 0; i < str.length; i += 2){
    result2 += str[i+1] + str[i]
}

alert(result1 + ' ' + result2)