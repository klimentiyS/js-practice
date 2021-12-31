<<<<<<< HEAD
let arr = [
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресение'
]

let day = 'Пятница'
for (let i = 0; i < arr.length; i++){
    let italic = '<i>' + arr[i] + '</i>'
    if (arr[i] === day && i < 5) {
        document.write(italic + '<br>')
    }
    else if (i < 5) {
        document.write(arr[i] + '<br>')
    }
    else if (i >= 5 && arr[i] === day) {
        document.write('<b>' + italic + '</b>' + '<br>')
    }
    else if (i >= 5 && i < 7) {
        document.write('<b>' + arr[i] + '</b>' + '<br>')
    }

=======
let arr = [
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресение'
]

let day = 'Пятница'
for (let i = 0; i < arr.length; i++){
    let italic = '<i>' + arr[i] + '</i>'
    if (arr[i] === day && i < 5) {
        document.write(italic + '<br>')
    }
    else if (i < 5) {
        document.write(arr[i] + '<br>')
    }
    else if (i >= 5 && arr[i] === day) {
        document.write('<b>' + italic + '</b>' + '<br>')
    }
    else if (i >= 5 && i < 7) {
        document.write('<b>' + arr[i] + '</b>' + '<br>')
    }

>>>>>>> cfbcb330fa67f0692b6ce5a84e8a6aadcbe9fe11
}