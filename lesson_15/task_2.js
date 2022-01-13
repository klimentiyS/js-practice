const isNumberInRange = (num) => num > 0 && num < 10

let arr = [1, 2, 3, 4, 5, 11, 12]
let resArr = []
for (i of arr) {
    if (isNumberInRange(i)) {
        resArr.push(i)
        
    }
}

alert(resArr)