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
  it('should 2 add numbers', () => {
    const result = helpers.sumAll([2, 2])
    expect(result).toEqual(4)
  })
  it('should add zeros', () => {
    const result = helpers.sumAll([0, 0, 0, 0,])
    expect(result).toEqual(0)
  })
  it('should add negative numbers', () => {
    const result = helpers.sumAll([-10, -5, -4])
    expect(result).toEqual(-19)
  })
  it(`shouldn't add anything`, () => {
    const result = helpers.sumAll([])
    expect(result).toEqual(0)
  })
})

describe('findLargest number', () => {
  it ('find the largest number in array with negatives', () => {
    const result = helpers.findLargest([-10, -1, -19])
    expect(result).toEqual(-1)
  })

  it ('find the largest number in array with positives', () => {
    const result = helpers.findLargest([1, 2, 3, 30])
    expect(result).toEqual(30)
  })
  it ('find the largest number in array', () => {
    const result = helpers.findLargest([true, false, 10, undefined, null, -20, "string", [], {}, new Map(), new Set()])
    expect(result).toEqual(10)
  })
  it ('return empty array', () => {
    const result = helpers.findLargest([])
    expect(result).toEqual([])
  })
})
