// let arr = ['js', 'css', 'jq']
// let result = arr.shift()
// alert(result)

let arr1 = ['1', '2', '3', '4', '5', '6']
let result = []

while (arr1.length > 0) {
    let first = arr1.shift()
    let second = arr1.pop()
    let join = first + second
    result.push(join)
}

let arr2 = result.join('+')
let num = result.reduce((a, b) => Number(a) + Number(b))

alert(`${arr2}=${num}`)



