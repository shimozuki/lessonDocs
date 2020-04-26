JS4 HTML - Lesson Doc

NEVER Inspect the code

K.I.S.S. - Keep it simple stupid

Treat it like an Interview question

- List out every step the HTML does
- Code it up without testing it and have zero mistakes.
- When you run it If you have a mistake, either fix it or ask questions.

Javascript Functions

1.	Examples
2.	Function Shape: solution = (a) =>  return () => {}
3.	Talk about what is going on
4.	Time/Space O(n)
5.	Write the code
6.	Test

[JS4 Front End Engineering]
(https://www.notion.so/garagescript/JS-4-Front-End-Engineering-c59fbdd58dcc4214956f7856e0892b52)


# Extra Resources
-

[A Complete Guide to Grid]
(https://css-tricks.com/snippets/css/complete-guide-grid/)

[Grid by example]
(https://gridbyexample.com/)

[Vanilla JS and HTML](https://htmldom.dev/allow-to-enter-particular-characters-only)


# HTML: Interactive Elements
-

### 1. Create a mouse recorder

Steps: 

__HTML__

1. Create a `div` container. Select it by giving it a class. 

__JavaScript__

2. Add a click event listener to the document that passes in an event.

- When the page is clicked add to the container’s innerHTML a string containing the event’s clientX and clientY.

### 2. [Display mouse position only on hover](https://songz.c0d3.com/js4/examples/mouse.html)

Steps:

__HTML__

1. Create a `div` container that holds a `h1` tag which displays HELLO WORLD inside of the `h1`. Select the container by giving it a class.

__JavaScript__

2. Add a mouse move event listener to the container that passes in an event.

- Set the innerText of the container to a h1 tag with the event's clientX and clientY.

3. Add a mouse leave event listener to the container.

- Set the h1 tag to HELLO WORLD.

### 3. [Build a typewriter](https://songz.c0d3.com/js4/examples/typewriter.html)

**HTML**

1. Create an `input`, typeDisplay `div` and display `div`. Select them.

**JavaScript**

2. Create a logs array to hold the input value.

3. Create a renderLogs function

- set the innerHTML of the display to every element inside the logs array wrapped around h1 tags.

4. Create a type event listener keyup that passes in an event.

- If the event's key in enter
- Grab the value of the input
- unshift it into the logs array
- call renderLogs function
- set the typeInput's value to an empty string
- set the innerText of the typeDisplay to typeInput's value. (Outside if statement)


### 4. [Build a text hiding tool](https://songz.c0d3.com/js4/examples/encode.html)


Hint: HTMLElement.focus()

Targets a specific HTML element for events by default.

__HTML__

1. Create an type `input`, type display `div` and display `div`.

__JavaScript__

2. Create a logs array.
3. Create a getXStr function that takes in a number and returns a string containing that number X's.

```
getXStr(2) // returns 'XX'
getXStr(5) // returns 'XXXXX'
getXStr(7) // returns 'XXXXXXX'
```

4. Create a display all keys function that grabs every element with a message class.
- iterate over that array and set the innerText if your h1 elements to the fakeText

5. Add a typeInput event listener that checks keyup and passes in an event.
- if the event's key is enter grab the input's value.
- unshift fakeText (Math.random()) and realText (input value) as an object to the logs array.
- set the innerHTML of the display with all of the elements in between opening and closing h1 tags with a message class.


5. Grab all of the elements with a message class.
- Iterate over that array and add mouse enter event listener's to the elements.
- call displayAllKeys function
- set the innerText of the logs index real text.
- set the input.value to an empty string after iterating.
- set the innerText of the type display div to getXStr with the input value's length.

6. call typeInput focus.





# Creating Elements
-

### 1. [Create a click recorder](https://songz.c0d3.com/js4/exercises/clickRecord.html)

__HTML__

a. Create a `div` container. Select it.

__JavaScript__

b. Add a click event listener to the document that passes in an event.

- Add to the innerHTML the event’s clientX and clientY.

### 2. [Counter clicker](https://songz.c0d3.com/js4/examples/counter.html)

__HTML__

a. Create an add `button`, and a `div` container. Select them.

__JavaScript__

b. Add a click event listener to the add button.

- Create a div and initialize a counter to zero.
- Set the innerHTML div to an h1 tag with 0 clicks.
- Add a click event listener to the div that increases the counter and sets the innerHTML of the div to the current counter.
- Append the div to the container.

### 3. [Build this experience](https://songz.c0d3.com/js4/examples/register.html)

__HTML__

1. Create an add person `button`, container `div`, `hr` or horizontal line, `h3` registered title and a registered container `div`. Select them.

__JavaScript__

2. Create a guestList array.

3. Create an addToList function that passes in a new guest parameter.
- push new guest into guest list array.
- set the innerText to a string of every element inside the guestList array.

4. Create a click event listener to the add button.

- Create a div element
- Set the innerHTML of the div to firstName input tag, lastName input tag and a register button. Select them.
- Add a click event listener to the register button that takes in a firstName, lastName and adds the registered div container firstName and lastName values.
- Remove the div.
- Append the div to the names container.

# Media Elements 
-

### 1. [Build an audio hover player](https://songz.c0d3.com/js4/examples/audio.html)

__HTML__

1. Create an `input`, `h1` tag and a `video` tag. Select them.

__JavaScript__

2. Create a isStarted variable and set it to false.

3. Create a keyup event listener to the `input` tag that passes in an event.
- If the event's key is Enter set the source of the audio.
- play the audio and set the innerText of the h1 to 'Playing'.
- set isStarted to true.


4. Add a mouseenter event listener to the `h1` element.
- If isStarted is false return.
- Otherwise set the innerText of `h1` to 'Playing' and play the audio.

5. Add a mouseleave event listener to the `h1` element.
- If isStarted is false return.

3. Create a mouseenter event listener to the `h1` tag.

- Set the h1 tag innerText to playing.
- Play the video.

4. Create a mouse leave event listener to the `h1` tag.

- Set the innerText to pause.
- Pause the video.


### 2. [Change the above display](https://songz.c0d3.com/js4/examples/audio2.html)

__HTML__

1. Create an `input` tag, `h1` tag and an `audio` tag. Select them.

__JavaScript__

2. call HTMLElement.focus() on the input element.

3. create a timeupdate event listener to the `audio` element that passes in an event.

- use `Math.floor()` to create a seconds variable that is the audio element's current time.
- use `Math.floor()` to create a min variable that is the seconds divided by 60.
- set the seconds variable to modulo 60.
- set the seconds variable to a template string of seconds.
- if second's length is less than two, assign seconds to a template string of zero and seconds.
- set the innerText of the h1 element to a template string of min and seconds.

4. Create an isStarted variable that is set to false.

5. Add a keyup event listener to the `input` tag that passes in an event.

- if the event's key is enter set the audio's source to the input's value.
- play the audio element.
- set the inner text to four zeros.
- set isStarted to true.

6. Add a mouse enter event listener to the `h1` element.

- if the isStarted variable is false return.
- otherwise play the `audio` element.

7. Add a mouse leave event listener to the `h1` element.

- if the isStarted variable is false return.
- otherwise pause the `audio` element.


### 3. [Build a hover-to-play video](https://songz.c0d3.com/js4/examples/video.html)

__HTML__

1. Create an app `div` and inside of that add a start app `button`. Select them.

__JavaScript__

2. Create a get minutes and seconds function that passes in an element.

- use `Math.floor()` to create a seconds variable that is the element's current time.
- use `Math.floor()` to create a min variable that is the seconds divided by 60.
- set the seconds variable to modulo 60.
- set the seconds variable to a template string of seconds.
- if second's length is less than two, assign seconds to a template string of zero and seconds.
- return a template string of min and seconds.

3. Create a start app function.

- set the innerHTML of the app element to a string a `h1` element with a class of display and a video element. Select them.

4. create a timeupdate event listener for the video element.
- set the innerText of the display element to your get minutes and seconds function with your video element from step 3.

5. create a mouse enter event listener for the video element.
- play the video element.

6. create a mouse leave event listener for the video element.
- pause the video element.


### 4. [Build a meme image generator](https://songz.c0d3.com/js4/examples/meme.html)



### 5. [Exploding text](https://songz.c0d3.com/js4/examples/explode.html)

__HTML__

1. Create a `input` tag and a `canvas` tag, get the context of canvas. Select them and get the context of `canvas`.

__JavaScript__

2. Focus on the HTML input element.

3. Set the font of context and fill the style of context to yellow and fill the context with a rectangle.

4. Create an explode function that passes in a string.

- Fill the style of context to yellow and fill the context with a rectangle.
- Split the string and iterate over that array.
- fill the context with each character then call `Math.floor()` and `Math.random()` twice on the width and height.

5. Create a keyup event listener to the input tag. That grabs the input tag’s value and splits it into an array.

- if the event's key is enter call the explode function on the input's value.
- then clear the input value by setting it to an empty string.

# External JS Libraries 
-

### 1. [Markdown to HTML](https://songz.c0d3.com/js4/examples/md.html)

Hint: It helps to look at the [MarkedJS](https://github.com/markedjs/marked)

- Under the __Browser__ section 

__HTML__

a. Create a `textarea` and `div` container. Select them.

__JavaScript__

b. Add a keyup event listener to  the input tag that grabs the input value

- Set the innerHTML to a function call of the input tag’s value: marked(value)

### 2. [Build an accent reader using the ResponsiveVoice library](https://songz.c0d3.com/js4/exercises/accent.html)

Hint: You have to link your email to get a unique key accessing the API

__HTML__

a. Create a `textarea` and `select` tag. Select them. 

__JavaScript__

b. Create a voicelist variable that gets voices from responsiveVoice.

- Iterate through the list and create an option for each element, set the innerText to the element’s name.
- Add a click event listener to the option that sets the responsiveVoice default voice to the element’s name.
- Append the option to the select tag.


c. Add a keyup event listener to the input tag that grabs the value from the input tag.

- Call the `responsiveVoice.speak()` Function on the input tag’s value.


# CSS
-

```
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
```
[Web Specifity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)


### 1. [Create this todo list layout](https://songz.c0d3.com/js4/exercises/todo.html) - Without JavaScript

__HTML__

a. Create a `div` container, inside of the container add:

- `h1` tag for the title
- `input` tag
- `div` with with a class of todo, div tag and two `buttons` for edit and delete. (Do this six times)
- Some of the divs have `strike` tags, add them.

__CSS__

b. Set the container’s css border, margin and width properties

c. Set the todo’s height, margin-top, background, position and padding.

d. Set a right class to float right

e. Set a left class to float left

f. Set the input’s width to 90%

### 2. [Create this layout header](https://songz.c0d3.com/js4/exercises/profile.html) - Without Javascript

##### Version 1.0 Use image tags:

__HTML__

a. Create a `div` container, background `image` tag, profile `div`, profile `image`, a header `div` containing 6 `h2` tags. Select them.

__CSS__

b. Set the profile image's left, top, width, height, position, border radius and border properties

c. Set the background image's width and height properties

d. Set the container class's width, height, margin, position and border properties

e. Set header's the width, left, top, display, margin, text-align and position properties

f. Target all of your h1 tags and set the top, left, color and position properties

g. Target all your h2 tags and set the margin and padding.


##### Version 2.0 Use css background-image on divs:

__HTML__

a. Create a div container, background image `div`, profile `div`, `h1` tag for the title, a header `div` contains 6 `h2` tags. Select them.

__CSS__

b. Set a profile image class's top, left, width, height, position, border-radius, background-size, border and background image.

c. Set a background image class for the profile's width, height, background-size and background image.

d. Set a container class's width, height, margin and border properties.

e. Set a header profile class's top, width, position and padding-left properties.

f. Target all the h1 tags and set the top, left, color, display and position.

g. Target all the h2 tags and set the margin, padding and display.


### 3. [Create a 20x20 grid](https://songz.c0d3.com/js4/exercises/20grid.html) (Without Javascript)


__CSS__

a. Create a class for square `divs` that has a display of inline-block, border, height and width of 20px. 

- Create a row class that has a display of flex.

__HTML__


b. Create a row `div` that has holds 20 square `div`s. 

- Copy and paste it 20 times.

# Javascript and CSS 
-

### 1. [Caption maker for video player](https://songz.c0d3.com/js4/exercises/vidCaption2.html)

Couldn't get it to functionally work even after copy and paste.......

A few other things you'll need to know:

- `confirm()` which is similar to `alert()` but returns a boolean depending on the user's choice.
- `Number.isInteger()` checks whether a value is a number or not.
- `videoElement.currentTime` gives you where the position is (in seconds).
- Timeupdate video event listener to keep track of the time in the video.

```
<video
  class="videoElement"
  src="https://songz.c0d3.com/js4/exercises/pubDomainRemix.mp4"
  controls
	style="height:400px;width:400px;"
></video>

<script>
  const video = document.querySelector('.videoElement');

  setTimeout(() => {
    video.addEventListener('timeupdate', evt => {
      console.log('The current attribute has been updated: ', evt);
      console.log(video.currentTime * 1000, 'current time');
    });
  }, 1000);
</script>

```

Play it for 5 seconds, pause it and then open the console while scrolling through different points in the video.

Overview:
**HTML**

1. Create two `div`s: one to contain the video, one to contain the caption editor. Create a save `button` and caption list `div`. Select them.

2.  In the video container `div` add:

    - A `video` element and set its `src` to the video URL
    - A `div` for the captions

3. In the caption editor `div` add:

    - A header with the text "Add Caption"
    - Three `input:text` elements for the caption text, start time, and end time
    - A `button` with text "Save"
    - A `hr` element to provide a visual space between the caption "form" and the list of captions
    - A `div` to contain the list of captions

**CSS**

4. The upper (video) container needs to be center aligned, it needs a background color and the width needs to take up the entire page. 

5. Use display: flex so that caption, start and end stay on the same line but have even spacing.

**JavaScript**


6. Create a an array to store the captions
    - Add some dummy captions (each caption is an object with text, start, and end properties).

7. Create a `render` function that:
  - Adds the captions to the caption list `div`.
  - Adds click event listeners to each caption in the list that allow a caption to be deleted.

8. Add a click event listener to the save `button` that:

  - Adds a new caption to the `captions` array using the values from the text `input`s.
  - Clears the values from the text `input`s.
  - Calls `render`.

9. Add a timeupdate event listener to the `video` element that:
      - Gets the current video progress time from the `video` element.
      - Finds the first caption in the `captions` array that is valid for the current video time.
      - Sets the `textContent` of the video caption `div` to the text of the caption.

Code:

```

<div class="inputContainer">
  <h3>Add Caption</h3>
  <input class="captionInput" type="text" placeholder="Caption">
  <input class="startInput" type="text" placeholder="Start (ms)">
  <input class="endInput" type="text" placeholder="End (ms)">
  <button class="submit">Save</button>
  <hr>
  <div class="captionList"></div>
</div>

<script>
  const videoElement = document.querySelector('.vPlayer')
  const videoCaption = document.querySelector('.videoCaption')
  videoElement.addEventListener('timeupdate', (evt) => { // e confuses students
  // Because we didn't go over timeupdate event listener
    const curMS = videoElement.currentTime * 1000
    const captionsAfterCurrent = captions.filter( (e) => {
      return e.start <= curMS
    })
    const validCaptions = captionsAfterCurrent.filter( (e) => {
      return e.end > curMS
    })

    let captionText = ''
    if (validCaptions.length) {
      captionText = validCaptions[0].txt
    }

    videoCaption.innerText = captionText
  })

```




### 2. [Mouse magnifier](https://songz.c0d3.com/js4/exercises/magnify.html)

[Small image (300x225)] (https://songz.c0d3.com/js4/exercises/300x225.jpeg)

[Large image (800x600)] (https://songz.c0d3.com/js4/exercises/800x600.jpeg)

[Mouse image (40x43)] (https://songz.c0d3.com/js4/exercises/arrow.png)

Steps: 

__HTML__

1. Create a small `image`, container `div`, `img` for the mouse, and a large `img` tag.

__CSS__

2. Set the large's image position, right, bottom. The large image should have a negative z-index and the mouse should have a positive z-index and position property.

__JavaScript__

3. Select the small image and mouse and then add a mousemove event listener that passes in an event parameter to the callback function. 

- Grab the event's clientX and multiply it by (800/30)
- Grab the event's clientY and multiply it by (800/30)
- Set the top of the mouse to the yCoordinate.
- Set the left of the mouse to the xCoordinate.
- Set the innerText of the circle `div` to your number variable then append your circle `div` to your screen.
 




# Class Objects 
-


### 1. [Modify the previous video caption](https://songz.c0d3.com/js4/exercises/circleLife.html)

Couldn't get the previous exercise to work.

### 2. [Create circles that starts with 10 lives](https://songz.c0d3.com/js4/exercises/circleLife.html)

Steps:

__HTML__

a. Create a screen `div`. Select it.

__CSS__

b. Create a class for your screen and circle.

- The css should be the example same as the example but the position of the circle should absolute.

__JavaScript__

c. Create a Circle class that passes in x and y coordinates.

- Create a `number` variable and set it to 10.
- Assign y to y minus 50.
- Assign x to x minus 50.
- Create and `div` element and add a circle class.
- Assign the `div`'s style top to the y coordinate + px (for pixels) coordinate and the left to the x coordinate + px.


### 3. [Create an nxn box creator](https://songz.c0d3.com/js4/exercises/rowGen.html)

Hint:

How would we modify steps from the previous 20x20 grid exercise?

Steps:

__HTML__

b. Create a container `div` and an number `input` tag.

__CSS__

a. Create a class for square `divs` that has a display of inline-block, border, height and width of 50px. 

- Create a row class that has a display of flex.

__JavaScript__

b. Select the container `div` and an number `input` number.

c. Create a function called `generateRows(row, rowDiv, i=0)` that passes in rows and a DOM element to append to.

- When it is run, it creates a `div` and gives it the CSS class of square.
- Append it to the DOM element.
- Keep iterating for as long as the rows variable.

d. Create a function called `grid(rows, cols, j=0)` that passes in rows and columns.

- When it is run, create a `div` and give it the CSS class of row.
- Run `generateRows(rows, rowDiv)`.
- Append rowDiv to your container element and keep iterating until index is cols.

e. Create a keyup event listener for the `input` number.

- If the event is a number less than 900, set the container's innerHTML to an empty string.
- Then run `grid(+num.value, +num.value)`.


#### Part 2: [click to reveal rows and columns](https://songz.c0d3.com/js4/exercises/rowGen2.html)

f. Modify your `generateRows()` function to also pass in your index from `grid()` function.

- add a click event listener to the `div` you created inside `generateRows()` function. When clicked set the innerHTML of the div to both indexes from your functions.

### 4. [Display characters and all configurations](https://songz.c0d3.com/js4/exercises/warMap.html)

Hint:

```
<link rel="stylesheet" href="https://songz.c0d3.com/js4/exercises/war.css">
<div class="character"></div>
```


Import the [War CSS](https://songz.c0d3.com/js4/exercises/war.css) library the same way you would an external stylesheet and then select divs based on their class.

Overview:

__Version 1.0 Brute Force__

__CSS__

a. Create a row class 

- width: 100%
- display: flex
- position: relative
- justify-content: space-evenly

and a square class.

- position: relative
- padding-bottom: 0px;

Select all `p` paragraph elements and set the color to maroon.

__HTML__

b. Create a title `h1` for Class Name.

A `h3` title for warrior
The first row should four `div` elements:
- One `div` with a square, character and up class
- One `div` with a square, character and down
- One `div` with a square, character and left
- One `div` with a square, character and right

The second row should have four paragraph elements with a lower class:
- One `p`'s innerText should be .character.warrior.up
- One `p`'s innerText shoud be .character.warrior.down
- One `p`'s innerText should be .character.warrior.left
- One `p`'s innerText should be .character.warrior.right

A `h3` title for the peasant
The third row should have four `div` elements:
- One `div` should have a square, character and up class
- One `div` should have a square, character and down
- One `div` should have a square, character and left
- One `div` should have a square, charcter and right

The fourth row should have four paragraph elements:
- One `p`'s innerText should be .character.up
- One `p`'s innerText shoud be .character.down
- One `p`'s innerText should be .character.left
- One `p`'s innerText should be .character.right

__JavaScript__


Create a function called solution that querySelects all warrior and lower classes.

Create a setTimeout function that iterates over the warrior classes
- if the element contains attack class then remove it
- else add an attack class

Iterate over the lower classes
- if the element contains attack class
- grab the result of the element's innerText and split it at '.'
- pop off the result array
- set the InnerText to the result array joined at '.'
- remove attack class

else
- add an attack string to the element's innerText
- add an attack class

call solution and set the timeout to 1000

initialize solution()


__Version 2.0 with Class__


__CSS__

1. Use the previous CSS. Then create a warrior and peasant containers that are exactly like the row.

__HTML__

2. Create a warrior container `div` and a peasant container `div` and reuse the same paragraph tags HTML for the second and fourth rows.

__JavaScript__

3. Select the warrior and peasant containers.
4. Create a Character class that passes in a direction and whether it is or isn't a warrior.
- Create a div and it it's a warrior add a square, character, the direction and warrior classes to the div. - Then append it to the warrior container.
- Otherwise add a square, character and direction to the div.
- Then append it to the peasant container.

5. Reuse the same helper function solution.
6. Create eight new characters with unique directions for warriors and peasants.


### 5. [Create a character on click](https://songz.c0d3.com/js4/exercises/war.html)

__CSS__

1. Create a square class with a position of absolute.
2. Create a container class and set the position, z-index, top, left, right, and bottom attributes.

__HTML__

3. Create a header `h1` and a container `div`. Select them.

__JavaScript__
4. Select the container div and create an index set to zero.

5. Create a Character class that passes in x, y, direction and whether it is a warrior.
- Create a div element, set its top to y and left to x
- If it is a warrior, add a square, character, direction and warrior class.
- Append it to the container.
- Otherwise add a square, character and direction class to the div.
- Append it to the container.

6. Add a click event listener to the container that passes in an event.
- if the index is zero, incrment the index and create a new character with the event's x and y, down direction and warrior 
- Otherwise create a new character with the event's x and y, and down.


### 6. [Functional TodoList](https://songz.c0d3.com/js4/exercises/todo1.html) 

Hint:

Combine the JavaScript from the JS3 todo list and some of the CSS from the earlier todo list. Otherwise start from scratch if you feel confident! 


Overview:

If you got stuck stop and think. Look at your previous solutions from the JS3 and CSS todo list exercises.



# Promises: resolve and reject
-


### 1. Write a function called readFile that reads a file

### 2. Write a function called readFiles that takes in an array of paths and returns a promise

### 3. Write a fetchData function that takes in a string (URL) and returns a promise that resolves with the data directly, saving the user the step of parsing the response from JSON




# Machine Learning
-

If you've never heard of Machine Learning before this section check out [this article](https://leetcode.com/explore/featured/card/machine-learning-101/287/what_is_ml/1617/) before doing exercises.



Note:

If you don't have Microsoft Excel on your computer you can download [provision.xls](https://www.notion.so/signed/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F88068bf6-f27b-4d84-b6ce-67cb28654d01%2Fprovision.xls?table=block&id=477a8f7d-dd3b-4475-b326-211eb283ff99&name=provision.xls&cache=v2) and upload it to: 

[Google Sheets](https://docs.google.com/spreadsheets) If you have a google account or
[iCloud Numbers](https://www.icloud.com/numbers/) or if you have an iCloud account.



__Exercise 1:__ [Sentiment Analysis](https://songz.c0d3.com/js4/ml/sentiment.html)

Hint: 

Text Sentiment [Documentation](https://learn.ml5js.org/docs/#/reference/sentiment)

To get [Emojis](https://emojipedia.org/pile-of-poo/) for the alert. (Put them inside of a string)

Overview: 


__CSS__

1. Set the height and width of your textarea elements.

__HTML__

2. Create an `h5` for your title, `textarea` for your input text and a `button` to analyze text. Select them by their class.

__JavaScript__

3. Create a click event listener for your analyze button.

- Grab the value of your textarea element.
- Create a result variable that holds `sentiment.predict(inputElement)` on the textarea's value.
- If the result's score is over 0.8 alert the thumbs up emoji
- Otherwise alert the poo emoji.

__Exercise 2:__
[Magic Oracle](https://songz.c0d3.com/js4/ml/oracle.html)

Hint:

CharRNN [documentation](https://learn.ml5js.org/docs/#/reference/charrnn)

Overview:





__Exercise 3:__
[Object Detection](https://songz.c0d3.com/js4/exercises/videoDetect.html)

Hint:

YOLO [documentation](https://learn.ml5js.org/docs/#/reference/yolo)

[Video Link](https://songz.c0d3.com/js4/exercises/cars.mp4)