let num = prompt('Введите число, корень которого желаете узнать')
let s = Math.sqrt(num)
document.write(`Квадратный корень из ${num} равен: ${s}
<br>`)
document.write(`С округлением до целых: ${Math.round(s)} <br>`)
document.write(`С округлением до десятых: ${s.toFixed(1)} <br>`)
document.write(`С округлением до сотых: ${s.toFixed(2)} <br>`)
