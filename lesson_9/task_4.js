let str = 'https://www.mail.ru/index.html'
let flag = false
// let reg = /.html$/g
// flag = reg.test(str)
let result = str.substring(str.length - 5)
if (result == '.html') {
    flag = true
}
alert(flag)