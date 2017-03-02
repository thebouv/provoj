let provoj = require('./index')
let runner = provoj.runner
let assert = provoj.assert

runner.test('assert(true) should not fail', () => {
  assert(true)
})

runner.test('assert.equal(true, true) should not fail', () => {
  assert.equal(true, true)
})
