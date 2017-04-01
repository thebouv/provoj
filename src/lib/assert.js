function assert (value, msg, done) {
  if (value) {
    return
  }

  const assertError = new Error(msg || `AssertionError: when evaluation ${value}`)
  if (done) {
    done(assertError)
  } else {
    throw assertError
  }
}

assert.equal = function (value1, value2, msg, done) {
  msg = msg || `AssertionError: expected ${value1} to equal ${value2}`
  assert(value1 === value2, msg, done)
}

module.exports = assert
