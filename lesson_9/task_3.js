let str = 'http://www.mail.ru'
let flag = false
// let reg = /^http:\/\//gi
// flag = reg.test(str)
if (str.substring(0, 7) === 'http://') {
    flag = true
}
alert(flag)