const test = require('tape')
const { grade, ease } = require('./')

test('ease', (t) => {
  t.plan(3)
  let result = ease('Into the future.')
  t.equal(result.score, 64.82000000000002)
  t.equal(result.schoolLevel, '8th & 9th grade')
  t.equal(result.notes, 'Plain English. Easily understood by 13- to 15-year-old students.')
})

test('grade', (t) => {
  t.plan(1)
  let result = grade('Hello world.')
  t.equal(result, 2.3700000000000045)
})
