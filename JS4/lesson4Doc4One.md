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


CSS
So far, we have learned that HTML is a collection of tags, which are instructions for the browser. <script> tells the browser to run everything inside that tag as Javascript.

<style> tells the browser to run everything inside that tag as CSS, a language that helps us make websites beautiful by changing the color, position, and other properties of browser elements. 

CSS is a simple language. You only need to know 3 things.

1. Selector: ALL elements that match your selector will have the properties inside the {} applied to them.

2. Properties: Each property is seperated by ;

3. Values: Values are going to be different depending on what preperties you use.

rgba - red, green, blue and alpha (opacity 1 to 0)


SELECTION

Selecting By:
- Element - All h1 elements will have the color property.
- Attribute - All elements with the attribute type="text" will have the color property.
- Class - All elemens with the class of title2 will have the color property.
- Children - All h1 elements that are children of a div will have the color property.

Combining Selectors:
- All h1 elements with the class title2 will have the font-size property.
- All h1 elements and all elements with the class title2 will have the color property.


Selection States:
You can tweak CSS properties that get applied based on the state of the element.

These types of selectors are called pseudo-classes.
Others include :visited, :active, :focus and more.

Pseudo-Classes:
A CSS pseudo-class is a keyword added to a selector that specifies a special state of the selected elements. E.x. :hover can be used to change a button's color when the user's pointer hovers over it.

Selection Collisions:
When an element matches multiple selectors that are setting the same property.

If multiple selectors have the exact same specifity, precedence applies to the last one.

CSS Specifity:
The set of rules applied to CSS selectors in order to determine which style is applied to an element. The more specific a CSS style is, the higher point value it accrues, and the likelier it is to be present on the element's style.

Three buckets:
1. Type selectors & pseudo-elements
// Type selectors
h1 { ... }

// Pseudo elements
::before { ... }

2. Class selectors, attribute selectors, and pseudo classes
// Class selectors
.cat { ... }

// Attribute selectors
[type="radio"] { ... }

// Pseudo classes
:hover { ... }

3. ID Selectors
// ID selectors
#cat { ... }

Highest <--- lowest specifity
StyleAttribute <- ID <- Class, pseudo-class, attribute <- Elements

Inline style attribute overried all other elements
ID second
Classes third
Elements fourth


Simple CSS Properties:
In addition to the CSS properties abover(color, font-size, etc.),
below are a few more common properties that can add cool effects
to your pages.

Position:
Top, left, right and bottom to precisely adjust elements' placements and create all kinds of interesting layouts.

Relative:
Puts an element relative to where it was supposed to be.

Fixed:

Doesn't occupy its default position.
