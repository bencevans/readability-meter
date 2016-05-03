# readability-meter

> Measure a text's readability ease and grade using [Flesch–Kincaid readability tests](https://en.wikipedia.org/wiki/Flesch%E2%80%93Kincaid_readability_tests)

## Requirements

* Node.js 6+

## Usage

```js
const readability = require('readability-meter')

console.log(readability.ease('Keep it simple stupid.'))
// { score: 78.58166666666669,
//   schoolLevel: '7th grade',
//   notes: 'Fairly easy to read.' }

console.log(readability.grade('This is the future.'))
// -0.3200000000000003
```

## Related

* [Wikipedia - Flesch–Kincaid readability tests](https://en.wikipedia.org/wiki/Flesch%E2%80%93Kincaid_readability_tests)

## Licence

MIT © [Ben Evans](http://bensbit.co.uk)
