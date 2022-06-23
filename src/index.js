// const tripleMe = require('./tripleMe')
// const validator = require('validator')
import tripleMe from './tripleMe'
import isEmail from 'validator/lib/isEmail'

console.log(tripleMe(70))
//console.log(validator.isEmail('john@yahoo.com'))
console.log(isEmail('johnyahoo.com'))