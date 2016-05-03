'use strict'
const readability = require('./')

console.log(readability.ease('Keep it simple stupid.'))
// { score: 78.58166666666669,
//   schoolLevel: '7th grade',
//   notes: 'Fairly easy to read.' }

console.log(readability.grade('This is the future.'))
// -0.3200000000000003
