--- TEST DRIVEN DEVELOPMENT (TDD) ---

TDD is the concept of writing all your tests first and then
writing your code. 

Writing with tests in mind helps you write code faster, 
more efficiently, and more clenly by giving you a
clear target of what you're developing towards.

Should be focused on what your program should do, 
not what it can do.


Components of a testing framework
- runner: to run the test (e.g. Jest)
- library: gives helper functions (e.g. expect, describe)
- reporter: displays results


--- OVERVIEW ---

This lesson wil cover some foundations of front end 
software engineering.

- multimedia features
- types of elements
- css - language to fine-tune the site's layout

Finally, back to JavaScript for more complex objects.


--- HTML: Interactive Elements ---

Browsers allow us to interact with audio, video and drawing
functionality in our applications. 

They use the data they provide to interact with them.


--- EVENT LISTENERS ---

Best practice for our purposes is to add event listeners:
addEventLisatener('eventName', function)

<button class="submit1">Click ME</button>
<script>
const button1 = document.querySelector('.submit1')
button1.addEventListener('click', () => {
  console.log("ouch!")
})
</script>

Other elements include:
- mouseenter
- mouseleave
- keyup
- mousemove

mouseenter:
Fires when the mouse cursor first moves onto the element.

<h1 class="mainTitle">Hello World</h1>
<script>
const title = document.querySelector('.mainTitle')
title.addEventListener('mouseenter', (e) => {
  console.log(e)
})
<script/>

keyup:
Responds to typing. Fires when a user releases a key.

<input class="bigInput" type="text"/>
<script>
const input = document.querySelector('.bigInput')
input.addEventListener('keyup', (e) => {
  console.log(e)
})
</script>

--- CREATING ELEMENTS ---

The most efficeint way to add content is:

document.createElement('tagName')
- creates an element with the given tag name and
returns the create element.

element.append(element)
- After creating an element, you must append it to its new 
parent element so it can be displayed by the browser.
(prepend puts the element at the beginning of the parent.)

--- MEDIA ELEMENTS --- 


Audio

Music on the browser or sounds from a website are played
by the audio tag.
- src (source) tells the browser where to get the audio
- controls tells the browser to display the audio controls

Helper functions play() and pause()


Video

Similar to audio 

<video src="" class="vid" controls></video>
<script>
const video = document.querySelector('.vid')
video.src = "https://songz.c0d3.com/js4/examples/ankurBunny.mp4"
video.play()
video.pause()
</script>


Webcam

You can use the video element to display the video from webcam.

(Note that this is just getting the video from your webcam to
your video element. This is not video chat.)

Steps:

1. Use navigator.media.getUserMedia to get system devices.

2. After getting the video stream from the webcam, set the
srcObject attribute of the video element to the video stream.

3. Play the video

<video class="video"></video>

<script>
navigator.mediaDevices.getUserMedia({
  video: true,
  audio: true,
}).then((stream) => {
  videoElement.srcObject = stream
  videoElement.play()
})
</script>


Canvas

The <canvas> tag creates an element that you can draw pictures
and shapes in using JavaScript.

First you must get the <canvas> element, then you get the
context by running the canvas element's getContext function.

The context is what lets you actually draw on the canvas;

Think of context like a paintbrush that you would use to paint
onto a physical canvas.

<canvas class="canvas" width=800 height=500></canvas>

<script>
// get canvas
const canvas = document.querySelector('.canvas')

// use canvas to get context (brush)
const context = canvas.getContext('2d')

// set brush color to yellow
context.fillStyle = "yellow"

// create background by painting rectangle
// that fills the entire canvas.
// start at coordinates (0, 0)
// and give a width of 800 and height of 500
context.fillRect(0, 0, 800, 500)

// start a circle path
context.beginPath()

// start drawing at position (200, 100), raidus 100px
// from 0 degrees to 360 degreees (full circle)
// arc uses radians, so 360 degrees (full circle)
context.arc(200, 100, 100, 0, 2 * Math.PI)

// Paint it with stroke color (black)
context.stroke()

// Set font properties and change color to black
context.font = "30px Comic Sans MS"
contet.fillStyle = "black"

// Fill text at position (10, 50)
context.fillText("Hello World", 10, 50)
</script>

You can also pass a video element into the canvas context to
draw a picture of what is in the video element.

In the following example we will take a picture from the webcam
every 5 seconds and draw it into the canvas.

<video class="video"></video>
<canvas class="canvas"></canvas>

<script>
const canvas = document.querySelector('.canvas')
const context = canvas.getContext('2d')
const videoElement = document.querySelector('.video')

const delayPicture = () => {
  setTimeout(() => {
    canvas.width = videoElement.videoWidth
    canvas.height = videoElement.videoHeight
    context.drawImage(videoElement, 0, 0)
    delayPicture0()
  }, 5000)
}

navigator.mediaDevices.getUserMedia({
  video: true,
  audio: true,
}).then((stream) => {
  videoElement.srcObject = stream
  videoElement.play()
  delayPicture()
})
</script>


drawImage takes in 3 arguments:

1. (Object) element to draw (videoElement)
2. (Number) x position to start drawing
3. (Number) y position to start drawing


External Libraries

You can import Javascript Libraries that other people have
written into your HTML. 

To use someone else's JS file, just give your script tag to a 
src attribute with the URL value so the browser can send a 
request to get the file.


Writing your own library

You can very easily create your own library for your HTML files
to use so you don't have to write the same code over and over
again. To do this, simply create a file in the same folder.

Software engineers almost never write JavaScript into the 
script tag directly.

They usually write their JavaScript into a file. 

This file then gets compressed by a minifie and saved into
another file.

The script tag in the HTML will have a src attribute to the
minified file.


HTML THEORY

Fundamentals of web design that you should know as a software
engineer.


Inline vs Block

Every HTML element that the browser displays is either an
inline element or a block element.


Inline

Inline take up the width of their contents.
<input><a><img><button><select>


Block

Block take up 100% of the width available to them.
<div></div>
<h1></h1>
<h2></h2>
<p></p>


Multiple classes

The HTML class attribute allows you to specify multiple classes
for every element.


--- CSS --- 

<style> tells the browser to run everything inside that tag
as CSS, a language that helps us make websites beautiful by
changing the color, position, and other properties of browser
elements.

CSS stands for Cascading Style Sheets.

CSS is a really simple language and you only need to know 3 things

1. Selector: 
ALL elements that match your selector will have the 
properties inside the {} applied to them.

2. Properties:
Each property is seperated by ;

For a list of available properties and possible values
for each property. 

3. Values:
Values are going to be different depending on what
properties you use.


Selection

There are many ways to select an element in the <style> tag to
apply CSS properties to it.


Selecting By

- Element
All h1 elements will have the color property.

- Attribute
All elements with the attribute [type="text"] will have
the color property.

- Class
All elements with the class title2 will have the color
property.

- Children
All h1 elements that are children of a div will have the color
property.


Combining Selectors

You can combine selectors to more specifically target elements.


Selection States

You can tweak CSS properties that get applied based on the state
of the element.

- :visited
- :active
- :focus
- :hover

These selectors are called psuedo-classes


Selection Collisions

CSS Hierarchy
1. Inline Style 
2. Id
3. Class, Attribute, Pseudo classes
4. HTML elements

<style>
#nice {
  color: blue;
}

.nice {
  color: purple;
}

h1 {
  color: orange;
}
</style>

<h1 id="nice" class="nice" style="color:red">Collions</h1>
<h1 style="color:red">Inline Style</h1>
<h1 id="nice">Id</h1>
<h1 class="nice">Class, Pseudo</h1>
<h1>HTML Elements</h1>


Simple CSS Properties

More common properties that can add cool effects to your
webpage.


background and border-radius

<div class="element"></div>
<style>
.element {
  background: url(https://placebar.com/50/50);
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>

We can set the background of elements to an external image


Position

We can use the CSS position property, along with the properties
top, left, right and bottom to precisely adjust element's
placements and create different layouts.


Relative

Displays the position relative to where it was supposed to be.


Fixed

Elements becomes an inline-block element, so the width it takes
up becomes like inline elements.

Parent becomes the window.


Absolute

Similar to fixed; the only difference is that the top, bottom, 
left and right properties are relative to the element's parent
instead of the window.

Useful for position an element within another element.


Z-Index

An element with a higher z-index will always be drawn above an
element with a lower z-index.


Box Model

Every HTML element displayed on your page follows the box model.

This means that every element has a margin, border and padding.

Margin < Border < Padding < Content (InnerHTML / Text)


Width

When you specify the width of an element, you are setting
the width of the content.

At work, you may be creating many elements from the UI provided
by the designer. Calculating the width of each element can be
time consuming.

To simplify this, you can force the browser to set the width
of each element to include the padding and border by using the
box-sizing: border-box property.


Display

display: inline; // takes up the width of their content 
display: block; // takes up 100% of the width of parents
display: inline-block;
display: flex;


inline-block:

elements try to take up 100% of the width of parents
until there are too many, then they start on a new line.


Flexbox:

Used to maximize the use of space along the axis.

Horizontal or vertical.

display: flex;
You can also use the justify-content

justify-content: space-evenly;
justify-content: space-between;
justify-content: center;


External Libraries

You can import CSS files that other people have written into
your HTML.


--- Javascript & CSS ---

This section gives best practices of how to use JavaScript 
to change the appearance of an element.


BEM (Block, Element, Modifier)
BEM is a component-based approach to web development. 

The idea behind it is to divide the user interface into
independent blocks.

This makes interface development easy and fast event with a
complex UI, and it allows reuse of existing code without 
copying and pasting.


--- Class Objects ---

As out programs get more complex, we'll need a way of making
templates that let us quickly create multiple, similar objects.

These are called classes.

Just like how you follow a blueprint to build a house,
you use a class to create an object.

Using classes helps you organize your code better.

In web design, you should always try to use classes when you
have to create multiple elements with the same functionalities.

When build a complex HTML page your first instinct should be to 
think about what classes you should create to simplify the problem


-- Promises --

When a function (like fetch) returns a promise, 
it is actually returning a new promise object created from a
promise class: new Promise(...)

When you write functions, you can return a promise object too!

Promise takes in one argument, a function: new Promise(fn).

The function should take in two function paramters, 
called resolve and reject respectively.

Running resolve will run the then property of the promise object.

When your input function runs the resolve function, the 
arguments you pass into resolve will be immediately passed
into the then callback in the promise chain.


