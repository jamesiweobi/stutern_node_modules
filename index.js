const {numberValidator} = require('./utils/validateNumber')
const fs = require('fs')
// const numberValidator = importedUtils.numberValidator

// const obj = {
//   name:'James',
//   age: "16",
//   sex: "boy"
// }

// const {name, age, sex } = obj
// console.log(name, age, sex)


// console.log(imported.validateNumber(1001), "THE RETURNED OBJECT")

// const value =  numberValidator(3000) * numberValidator(3000);
// console.log(value)
// console.log(module)

// console.log(__filename)
// console.log(__dirname)
console.log(process.argv)

const args = [process.argv[2], process.argv[3], process.argv[4] ]
let total = 0;
for (let  arg of args){
  total += Number(arg)
}

console.log(total)
