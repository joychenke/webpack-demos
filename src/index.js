import './info.js'
const myName = require('./name.js')
require('./index.css')
require('./index.less')
const map = new Map([[1,2], ['a','b']])
new Promise((res) => {
    res(16)
}).then(val => {
    console.log(val)
})
const fn1 = async () => {
    const val = await new Promise((resolve) => {
        resolve('en en 1112')
    })
    const val2 = await new Promise((resolve) => {
        resolve('en en 11124')
    })
    console.log(val, val2)
}

const obj = {a: 1, b: 2}

console.log(Object.assign({}, {...obj}))
console.log(map)
console.log(myName)
console.log(fn1())