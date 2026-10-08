const a = ["foo", "bar"][Math.random() < 0.5 ? 0 : 1]
const b = [1, 2][Math.random() < 0.5 ? 0 : 1]
const c = [["foo"], ["bar"]][Math.random() < 0.5 ? 0 : 1]

function Choose_random(array) {
    return array[Math.floor(Math.random() * array.length)];
}

const a2 = Choose_random(["foo","bar"])
const b2 = Choose_random([1,2])
const c2 = Choose_random([["foo"],["bar"]]) 

console.log("a =",a2)
console.log("b =",b2)
console.log("c =",c2)
