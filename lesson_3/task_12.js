<<<<<<< HEAD
let lang = prompt('Введите язык "ru" или "en"')
let day = prompt('Введите день недели от 1 до 7')
let obj = { ru: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'], en: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }
=======
let lang = prompt('Введите язык "ru" или "en"')
let day = prompt('Введите день недели от 1 до 7')
let obj = { ru: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'], en: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }
>>>>>>> cfbcb330fa67f0692b6ce5a84e8a6aadcbe9fe11
alert(obj[lang][day-1])