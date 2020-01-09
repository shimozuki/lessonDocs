Why Learn JS?

Javascript is the only language that lets you do every aspcect of technology. You can use Javascript to:

1. Build immersive web apps
2. build mobile apps for IOS and Android
3. Build apps for desktop
4. Machine Learning, APIs, Games and more

No other language is as versitile as JavaScript.


Overview

This lesson is about the fundamental building blocks of coding:

- First cover variables, which is how computers store information
- Then cover some primitive data (primitive data types) that computers can store into variables
- Armed with some knowledge about data, we will talk about data's truthy and falsey properties and when it matters.
- Last, dive into complex data types like functions.

Make sure to solve each problem by yourself first before looking at the answer! If these concepts are new, GO THROUGH THIS LESSON OVER AND OVER AGAIN until you are confident before continuing.


How to Follow along
- Setup Instructions


VARIABLES

If you imaging doing inventory work and have to count 20,000 items, you will need to take a break at some point and write down where you stopped. The act of storing information into you notes is equivalent to storing data into a variable in the computer world. To do this javascript requires the = assignment operator which assigns a value to the variable.

= means the left side takes the value of the right side.

Note: it is optional to terminate each statement with a semicolon. 


BEST PRACTICE

Good practice means practicing good habits to become a good software engineer. Bad practice means practicing bad habits that will negatively impact you as a software engineer. Bad practice means practicing bad habits that will negatively impact you as a software engineer. Best practice means that you should ALWAYS practice this habit because all good software engineers have this habit.

In the above example, we are creating variables like: marvin = 0. Even though it works, it is considered bad practice because the variable overwrites the global scope (you will naturally understand why after you start coding, so don't worry if the reason does not make sense). Instead, you should use const or let.

const
const stands for constant. Use const to declare a variable that you never plan to change its value, e.x.:

If you try to use const to declare a variable and then try to change its value, you will get an error.

let
If you need to declare a variable that you might need to change its value later, you should use let.

As a rule of thumb, always use const until you can't!





PRIMITIVE DATA
Variables can store all kinds of data. In this section we will be exploring 3 types of primitive data: Number, String, and Boolean. If you are wondering why they are called primitive data, it will make complete sense when you learn about non-primitive data (in lesson 2 about Arrays). For now just know that Number, String and Boolean are primitive data.

Number
Number allows you to work with numbers and can be manipulated using operators such as add, multiply, divide, subtract.

One commonly used operator is modulus which gives you the remainder when you divide 2 numbers.

14 modulo 7 is 0
13 modulo 7 is 6

If it has been a long time since you did division, there is an easy way to get the correct result. When you see moduluo keep subtracting until you get a result smaller than the numbers.


STRINGS
A string can be words, sentences or a bunch of characters. To make a string, you can use double quotes ", or single quotes ' or backtick `. It does not matter which of these 3 symbols you use to create a string, but you cannot mix the symbols.

String without quotes are variables!

For now, you only need to know one operator for strings, which is +, used to join strings together. If you encounter a variable, make sure you don't treat it like a string.

Sometimes, you might find yourself adding many variables together with strings.


TEMPLATE LITERALS (backticks)
Try typing the variable message out like the example above and you realize how painful it is. Therefore, using + with strings is not common.

We can use backticks and ${expression} (placeholder) instead, which allows us to put the variables directly into the string:



BOOLEAN
Booleans can be either of 2 values: true or false. Operators like === (is equal to), !== (is not equal to), > (is greater than), and < (is smaller than) are used to compare the left side with the right side.

When you compare values with the comparizon operators, you will get a boolean value of true or false.


