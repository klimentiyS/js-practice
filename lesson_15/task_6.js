const isEven = num => num > 0

let arr = [-1, 1, -2, 2]
let result = []
for (i of arr) {
    if (isEven(i)) {
        result.push(i)
    }
}

alert(result)