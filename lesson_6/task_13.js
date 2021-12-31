let arr = [12, 15, 20, 25, 59, 79]
let sum = 0
for (let i of arr) {
    sum += i
}
let result = sum / arr.length
document.write(result)