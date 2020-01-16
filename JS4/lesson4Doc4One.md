/***FIRST READ***/

// Things should click on the second go around

TEST DRIVEN DEVELOPMENT

Because testing your code is so important, it has become common to practice Test Driven Development.

TDD is the concept of writing all your tests first and then writing your code.

writing with tests in mind helps you write code faster, more efficiently, and more cleanly by giving you a clear target of what you're developing towards.

Additionally, it can be easier to write a more complete set of tests before you start coding.

---Components of a testing framework---

- runner to run the tests
- library to give helper functions
- reporter that displays results, like which tests passed or failed

TDD is a process where you write the test first, then write the function.
TDD is very common among developers.

It's best practice to have each function you wnat to test contained in its own code block.



OVERVIEW

The last lesson was about objects.
This lesson will be about front end software engineering

- The browser's more advanced multimedia features
- Types of elements
- CSS (Cascadding Style Sheets)
It's a language that lets you fine-tine your website's appearence


HTML: Interactive Elements

Now we can explore more functions and data the browser provides.

EVENT LISTENERS

onclick attribute assigns a function to run when the user clicks on an element.

Best practice is to add event listeners: 
addEventListener('event', function)

--mouseenter--
Fires when the mouse first moves onto the element

--keyup--
Fires every time the user releases a key.

What is the difference between (clientX/Y), (screenX/Y), and (pageX/Y) properties?

- clientX
- clientY

Relative to the upper left edge of the content area of the browser window.

- screenX
- screenY

Relative to the top left of the physical screen/monitor, this point only moves if you increase or decrease the number of monitors or the monitor resolution.

- pageX
- pageY

Relative to the top left of the fully rendered content area in the browser.


CREATING ELEMENTS

Previously we set the container's innerHTML property. Which means everything had to be cleared out and re-added.

The more efficient way is to use:

document.createElement('tagName')
- Creates and element with the given tag name and returns the created element.

element.append(element)
- After creating an element, you must append it to its new parent element to be displayed in the browser. Prepend puts it in the beginning.



MEDIA ELEMENTS

Interactice elements that let you add new kinds of experiences


AUDIO
Music on the browser or sounds from a website
- src (source) attribute
- controls tells the browser to display audio controls.

The audio tag has a seperate closing tag because it's possible to give it children elements, such as multiple sources or backup content in case the browser doesn't support it.


