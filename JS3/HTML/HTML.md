HTML


In this lesson we will learn how to work with arrays in the browser.


ELEMENTS

<select> allows you to build dropdown menus.
The choices go inside <option> which are the children
of <select> element:

<select>
  <option>Mild</option>
  <option>Medium</option>
  <option>Spicy</option>
</select>


BROWSERS FUNCTIONS

JSON.stringify

When websites send information to each other, the data is 
always sent and recieved as strings.

If you want to send an array across the Internet, you convert
it into a string first!

When data is converted into a string, the string is called 
JSON (JavaScript Object Notaion).

Databases also store data as strings, so if you want to store
an array of names into the databse sometimes you must convert 
your data to a string first.

You can turn any JavaScript data into a string 
with JSON.stringify.

JSON.parse

If you want to convert a string back into an array use JSON.parse



LOCALSTORAGE

LocalStorage lets you store data, like a database in the browser.

localStorage.setItem
Takes in 2 strings.
- The first string is a title
- The second string is the data to be stored

localStorage.getItem
- takes in the title of the data to retrieve and returns the data.

document.querySelectorAll
- Returns an array of all the elements that match the query.

