let str = 'var_text_hello'
let reg = /_[a-z]/g
let result = str.replace(reg, function (val) {
    return val.toUpperCase()
}).split('_').join('')

alert(result)