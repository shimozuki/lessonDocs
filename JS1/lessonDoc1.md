HTML

This section will teach you how to build a web page using HTML,
which is simply text written a certain way so your browser (Firefox, Chrome, Safari) can read it as a set of instructions.


In HTML, we call each instrcution a HTML tag.

Tags consist of the tage name surrounded by angle brackets, namely the < and > characters.

Some Tags do not require a closing tag or content:
<input type="text"/>
<br/>

<input type="text"/>

HTML element is everything from the opening tag to the closing tag:
<tagname>Content</tagname>

When you open an HTML file with a browser, the browser
reads and intreprets the HTML instructions (elements) 
and then displays the resulting web page.


ATTRIBUTES

In <input type="text" > the type="text" is an attribute.
- Attributes provide more information about the tag to the browser.

Tags can have multiple attributes and they are written in this format:
<tagName attr1="attr1 value" attr2="att2 value"...>Content</tagName>

<input class="clinput1" type="text" />
The input has 2 attributes, class and type:
- type tells the browser what type of input box to display
- class lets us target the element


BROWSER JAVASCRIPT

Javascript is used to manipulate the HTML elements on a page after the page rendered.
What it does depends on what the user does, how much time has gone by, or even information the page recieves from other websites.

This is considered dynamic behavior.
<script></script> Tells the browser to treat the text inside as Javascript and run the code.

2 ways to run Javascript:
- In the browser
- on your computer using node


GETTING HTML ELEMENTS

document.querySelector is another common javascript method supported by most browsers.

This methods searches through all the elements on the page and returns the first element that matches the specified selectors

If there are multiples of the same elements it makes sense to give them a class. 

When we run document.querySelector we pass in . followed by the element's class name as a string argument.

This argument tells the function to look up elements by their class name.


ELEMENT PROPERTIES

Every HTML element has properties.

This is sort of like attributes in HTML, but properties are a JavaScript concept, and they tell the browser whay dynamic behavior to give the elements.

onclick

Whenever you click on an element, the browser will try to run the element's onclick event function.

Therefore, by assigning a function to an element's onclick event property, we can do something whenever the element is clicked.



Steps:
1. 3 Examples
2. Function shape
3. Explanation
4. Explanation
5. Test


CLOSURE 
Closure is a function inside of another function

DEFAULT PARAMS
When you call a function that passes in paramters 
without parameters.

To avoid that you can define default values to your
paramters.


RECURSION
A function that calls itself.

A recursion functions needs
1. Paramters: 
2. Base case:
3. Recursive case:

STRINGS AND LETTERS
1. Paramters
2. Base case
3. Recursive case


ASYNC 
If you are baking pizza and put the pizza into the oven,
do you wait until the oven is done before doing something else?

Probably not.

You will probably do other things and come back to it after
the oven finishes cooking the pizza.

Usually the oven finishes cooking the pizza and lets you know
when it's done (like a beeop)

Javascript works the same way.

