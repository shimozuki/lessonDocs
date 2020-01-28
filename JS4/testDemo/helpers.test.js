const helpers = require('./helpers')
/*
 When we run our file with the jest framework, jest provides us
    with a few functions. The function our tests will go inside
    is describe, which takes in 2 arguments (string and function).
*/
// First argument describes the function you are testing;
//   second argument is a function that contains all the tests.
describe('sumAll function', () => {
	// For each test, you need to run the `it` function,
  //    which takes in 2 arguments (string and function).
  
	// First argument describes the test;
  //    second argument is a function that runs the test.
	it('should add numbers', () => {
    // Run the function we want to test
		const result = helpers.sumAll([9,8,7])

		// Pass the result from the function into expect
    // expect returns an object with a toEqual key;
    //    pass what you expect into the `toEqual` function.
    expect(result).toEqual(24)
  })
  it ('should add negative numbers', () => {
    const result = helpers.sumAll([-1, -2, -5])
    expect(result).toEqual(-8)
  })
  it ('should add positive and negative numbers', () => {
    const result = helpers.sumAll([-1, 5, -5, 1])
    expect(result).toEqual(0)
  })

  it ('should add zeros', () => {
    const result = helpers.sumAll([0, 0, 0, 0])
    expect(result).toEqual(0)
  })
  it ('should return number', () => {
    const arr = [2]
    const result = helpers.sumAll([2])
    expect(result).toEqual(2)
  })
  it('should not add anything', () => {
    const arr = []
    const result = helpers.sumAll(arr)
    expect(result).toEqual(arr)
  })
  // Only started writing test
  it('should should skip falsey values', () => {
    const arr = [null, 5, undefined, 5, false, 5, {}, []]
    const result = helpers.sumAll(arr) 
    expect(result).toEqual(15) 
  })
})
