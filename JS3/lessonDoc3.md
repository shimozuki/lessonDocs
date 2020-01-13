HTML

in JS2 you learned about:

- The div tag, which we use to group elements on HTML pages
- Element properties: innerHTML and innerText

In this section, you will learn one more element and some very important functions that allow us to work with arrays in the browser.

Elements

Select: 
Allows you to build dropdown menus. The choices go inside option elements, which are children of the select element.

IF you have an array of strings that we want to use for the options, we can use reduce to generate string tags and then set the innerHTML property of select.


Broswer Functions

JSON.stringify: 
When websites send information to each other, the data is always sent and received as strings. So what do you do if you need to send an array across the Internet? You can convert it to a string first!

When data (number, boolean, string, array, objects) is converted into a string, the string is called JSON. JSON stands for JavaScript Object Notation.

Databases also store data as strings, so if you want to store and array of names into the database sometimes you must convert your data to a string first.

You can turn any JavaScript data into a string with JSON.stringify

Although JSON is primarily used for working with browsers, you can also follow along with all the below examples in node.

Except cyclic data


JSON.parse

If you used the previous function JSON.stringify to convert an array into a string, how do you convert the string back into an array? You use the JSON.parse function. This function takes a string and parses, or interprets it as Javascript data.


JSON (Javascript Object Notation)

JSON is the string that gets returned by JSON.stringify and the argument you pass into JSON.parse.

JSON.stringify(data) ---> JSON ---> JSON.parse(JSON) --> data


LocalStorage

LocalStorage lets you store data, like a database in the browser. There are many ways you can make use of LocalStorage when writing a Javascript program.

localStorage.setItem()

localStorage.setItem() is a function that takes in 2 strings.

- The first string tells the browser which title to give that data
- The second string is the data to stor

localStorage.getItem()

localStorage.getItem() take in only 1 string, the title of the dat to retrieve, and returns the data.


UI EXERCISES

Good Engineers spend the majority of their time thinking, not coding. Whether you are working on these exercises, interviewing for a software engineering job, or working on projects, make sure you spend the first half of you allotted time thinking through the problem before actually starting to code.


TODO LIST 

2. Create a todo list:
Click the ADD button to add a todo item. It should show up as an element and it should be removed when clicked.


OBJECTS

Objects are the most important concept in JavaScript. Like arrays, objects can store a wide variety of data.

Just like arrays, imagine a locker room where each locker has a number. When you look into the locker, it can hold almost anything. But with objects, each locker item can have a label. The label is called a key and the locker content is called the value.

To create an object you use {}

console.log() was an object created by an engineer to use
console has a key called log, the value is a function

Other examples include:
console.error()
document.querySelector()
localStorage.getItem()


VARIABLES

You can also access object values using [] notation
- document.querySelector('.button')
- can be written as document['querySelector']('.button')
- console.log('hello')
- can be written as console.log['log']('hello')

To get a value in an object, the code is very similar to getting a value in an array. Pass a string (key) instead of an index number.


Non-Primitive

Like arrays, objects are non-primitive.

promise object has a then() property which returns a promise object so you can keep chaining more then() properties together until what you want accomplised is completed. 


OBJECT HELPERS 

The Object.prototype comes with several "helper" functions

Object.keys()
Object.values()
Object.entries()


PROTOTYPE INHERITANCE

If you want to add functions into every object that you create, just assign them to Object.prototype
1. Define your function
2. Assign to Object.protoype
3. Access Object using this


ARRAYS AS OBJECTS 

In reality, an array is actually an object with special status (you can use numnbers as keys, etc).


FUNCTION VS FAT ARROW

The main difference is the "this" keyword


LIBRARIES

Now that you know how to use "require" we can use it on the "fs" library


APIS

An API (application programming interface) is an interface that other
engineers set up for you to interact with.
- When you send a request to NETFLIX API, you get a list of movies
in NEtFLIX's API
- When you request Google Contacts API, you get a list of you contacts or friend's phone number

Different APIS/Companies will respond with data in different formats or data structures.


PROMISES 

A block of code that is waiting to be executed.

Three States:
-pending
-fulfilled
-rejected

 AXIOS

 axios is like request but instead of a function you get returned a promise.

 Instead of passing a function as a second argument, you pass the next function into the promise's then function.

 

PROMISE ALL

To send more than one request at once. Promise.all, takes in an array of promise objects and returns a promise.

When the then function runs, the argument functions will et an array or responses.


HACKING AND DEBUGGING
