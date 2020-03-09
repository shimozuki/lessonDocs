Introduction to Testing

As our functions get more complex, we need to specify 
in more detail what right and wrong behavior for each
function looks like.

One good way to do this is by writing test cases.

Testing is an extremely important part of sofware engineering.

Testing also gives you a permanent record of what correct
behavior for you code looks like.

In the future, if someone changes your code and breaks it,
your tests will reject their changes.

This way, tests can help ensure that your code will keep
working forever.


HTML/JS

div/innerHTML/innerText

<div></div> is one the most important tags in modern web design.
Creates a box to group other elements together.

<div>
  <input type="text" class="username" />
  <input type="password" class="password" />
  <button>Log in</button>
</div>

<input> and <button> are children of the div element.
They are also siblings of each other.

innerHTML

<div class="container">
</div>
<script>
  const box = document.querySelector('.container')
  box.innerHTML = `<input type="text" class="username"/>`
</script>

Above we are using JavaScript to create the HTML tags inside the div tag.

Be careful when setting innerHTML.
Elements lose their properties when they're replaced by other elemtns.

InnerText

<div class="heading"></div>
<script>
  const h1Element = document.querySelector('.heading')
  h1Element.innerText = "The hardest choics require the strongest wills."
</script>

If you do not wish to create new HTML elements and simply wisht ot change the text inside and element, you can use innerText.


ARRAYS 
For storing multiple things inside a variable.
An array is like a locker room. 
Each locker has a number, starting with 0. 

You can put anything into a locker.
The locker number is called an index and the thing inside
is called an element.


NON-PRIMITIVE

All primitive data types:
Strings
Numbers and 
Booleans 

Arrays are non-primitive data types.

- (primitive) - When someone gives you cash, you get the money
itself.

- (non-primitive) - When someone sells you their house, you get a deed with the address on it instead of the actual house.


VARIABLE DECLARATIONS

For all non-primitive data, you should always declare them
with a const because their address does not change.


VARIABLE ASSIGNMENTS

Software engineers introduct bugs into their codebase because
they did not pay attention to the nature of non-primitive data
types.


ARRAY FUNCTIONS: ADD AND REMOVE


Push:
function that takes an argument and adds it to the end of the 
array. Returns the new array length.

Pop:
function that removes the last element of the array and returns
the removed element.

Shift:
Removes the first element of the array and returns the 
removed element.

Unshift:
Takes an argrument and adds it to the beginning of the array,
returns the new array length.

Splice:
Splice is a function that takes an unlimited number of arguments.

When spice runs, the 2nd parameter number of elements are 
removed starting at the 1st paramter index.

Then, the rest of the paramters are added in at the same location.
If there are no more arguments passed in, nothing is added.


ARRAY FUNCTIONS: HELPERS

Map:
takes in a function, applies the function to every element in the
array, and returns a new array of the same length.

forEach:
runs its input function on each elements and returns undefined
rather than a new array.

Filter:
runs a function on each element in the original array to decide
whether to include it in the returned array.

Find:
takes in an input function, and returns the first element which
the function returns a truthy value for.

Reduce:
takes in a function and a starting value, reduces the array 
into the starting value.

4 paramters:
- the return value from the previous input funciton call
- current element
- current index
- the array itself


PROTOTYPE INHERITANCE
- Functions inheret protoypes


ASYNC
