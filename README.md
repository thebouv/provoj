## Provoj [![Build Status](https://travis-ci.org/jdinartejesus/provoj.svg?branch=master)](https://travis-ci.org/jdinartejesus/provoj)

Provoj is a minimalistic testing runner using nodejs and with assertions.

### Meaning of "Provoj"

"Provoj" is Esperanto and translated to English means attempts or testing. 

### Why was build?

 Provoj was built with the intention of learning how tests tools works
 also I add the challenge of doing everything on the project called "Guitar Star" 
 without framework. **This isn't production ready only a playground**.

### How to use?

  **Assert**

  * assert -  Check if the value is true or throw an error.
  
  Ex: `assert(value)`

  * equal - Check if both values are true or throw an error.
  
  Ex: `assert.equal(valueA, valueB)`

  **Runner**

  * test - Create a testing environment for each function.
  
  Ex: ```runner.test('Testing message', () => {
    < Testing code />
  })```

### More example with Async:
  **Note:** The tests are currently working in queue, this means the result is only display after all the tests stop running.
  ```
    $ let Provoj = require('provoj');
    $ let runner = Provoj.runner;
    $ let assert = Provoj.assert;

    runner.test('Should be called after 2s', (done) => {
      setTimeout(() => {
          assert.equal(true, true)
          done()
        }, 2000)
    })

    runner.test('Should be called after 1s', (done) => {
      http.get(BASE_URL, (res) => {
        assert.equal(res.statusCode, 200, 'Status should be equal to 200')
        done()
      }).on('error', (err) => {
        done(err)
      })
    })
  ```