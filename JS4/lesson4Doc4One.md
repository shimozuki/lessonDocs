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


VIDEO
Video works very similarily to the audio element.
video.play() doesn't work on newer versions of Chrome.

drawImage takes in 3 arguments:
1. (Object) element to draw (videoElement)
2. (Number) x position to start drawing
3. (Number) y position to start drawing


EXTERNAL LIBRARIES

You can import JavaScript Libraries that other people have written to your HTML. You just need a script tag and src with the URL.

ChanceJS: Helps generate random data!


WRITING YOUR OWN LIBRARY

You can create your own library for your other HTML files to use so you don't have to write the same code over and over again.

Software engineers almost never write JavaScript into the script tag directly. They usually write their Javascritp into a file. This file then gets compressed by a minifier (all the spaces in the code are removed, variable names are shortened) and saved into another file.

When providing a library, you will find yourself updating and changing your code over time. If 1000 people are depending on your library, you should not simply updated the existing library.

Otherwise, if you introduce bugs or change features, 1000 people will have your bug or changed feature.

For this reason, when we name libraries we usually put a version decimal in the file name and (very rarely) change the file after that (e.g. lib.v2.0.1.js)


HTML Theory

Fundamentals of web design that you should know as a software engineer.

--- Inline vs. Block ---

Every HTML element that the browser display is either an inline element or a block element.

(There are also two other types, inline-block and flex, which can only be specified using CSS. These will be covered in the CSS section.)

Inline: only take up the width of their contents.
(input, a, img, button amd select)

Block: Takes up 100% of the width available to them.
(div, h1, h2, p)

Inline

Inline elements only take up the width of their inner contents. 
Examples of inline elements are input, a, img, button and select.

The a (link) tag is a link
"a stands for anchor"

meaning this tag can be used as a link to go somewhere else or as an anchor point that other pages can use to link to that specific place on the page. The href attribute stands for "hypertext reference", and tells the browser where to go when teh link is clicked. The test inside the tags is what gets displayed.

Block

Block elements take up 100% of the width available to them. 
This is the width of their container, or if the page (body) if they don't have a container.
Block elements will stack up on top of each other vertically.


MULTIPLE CLASSES

The HTML class attribute allows you to specify multiple class
