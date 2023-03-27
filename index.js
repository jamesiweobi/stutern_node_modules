const {numberValidator} = require('./utils/validateNumber')
const fs = require('fs')

// fs.writeFile('./docs/message.pdf', "Hello world", (error) => {
//   if (error) {
//     // console.error(err)
//     throw error;
//   }
//   console.log('The file has been saved!');
//   // other code logic takes place from this point
//   fs.readFile('./docs/message.pdf',{encoding: "utf-8"}, (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   });
// });

//libuv c++
console.log('App running')

process.on('message', (dataObj) => {
  console.log('message', dataObj);
  //Any logic you takes places here
});

process.on('exit', (code) => {
  console.log(`exit event with code: ${code}`);
});

process.emit('message', {data :90})
process.exit(1)












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
// console.log(process.argv)

// const args = [process.argv[2], process.argv[3], process.argv[4] ]
// let total = 0;
// for (let  arg of args){
//   total += Number(arg)
// }




// console.log(total)
