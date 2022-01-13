let weekday = (num) => {
    switch (num) {
        case 1: return 'Monday'
        case 2: return 'Tuesday'
        case 3: return 'Wednesday'
        case 4: return 'Thursday'
        case 5: return 'Friday'
        case 6: return 'Saturday'
        case 7: return 'Sunday'
        default: return 'Введите число от 1 до 7'
    }
}

let num = Number(prompt('Введите число от 1 до 7'))
alert(`${weekday(num)}`)