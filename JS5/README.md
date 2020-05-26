# JS5 Lesson Doc Abridged 

## Overview

Protocol
- Specifies how data is transferred and how to interpret the request.

http
- Unsecure request / response headers

https
- Encrypts all of your request / response headers

Path & query parameters
-  sends data to the server in the request url
-  & seperates different pieces of data

Security risk
- All URL data is exposed
- avoid sensitive data like usernames or passwords in the query params

Data List
- The URL can only hold small amounts of data
- Only about 2KB of data


SMTPM, POP3, IMAP 
- email protocols used for sending emails.

SSH
- Protocol for accessing remote machines.
- Manage git repositories.

FTP
- Protocol for sending files.

DNS
- Protocol for getting an __IP Address__ using a hostname.
- __IP Address__ is the address of a computer in the internet.


## IP Addresses

Every machine on the internet will have an IP Address.


## Request & Response

1. The server sends a request to a server.
2. When the server recieves a request, it sends back a response.
3. The browser


## Request

Every request has at most 3 parts.

1. __Request__ Line (Request method and path)
- request tells the server what request it is.
- path is extracted from URL

2. __Header__ (Provide information about the request)
- Type of browser / terminal
- What type of data is contained
- User information etc...

3. __Body__ (Blob of data in the request)
- The request shows of data should be handled
- Ex. (strings, JSON, files, videos etc.)


## Request Methods

__GET__
- Used for getting data

__HEAD__
- response headers

__POST__
- Used to tell the server to create data 

__DELETE__
- Used to tell the server to delete data

__PATCH__
- Used to tell the server to edit a particular attribute in 
the data

__PUT__
- Used to tell the server to replace existing or create
new data

__OPTIONS__
- Sent by the browser for security reasons
- Will send options before cross-domain requests
- pre-flight requests


## Request Headers

There are only two headers you would set manually when
sending a request:

Content-Type and Authorization

__Content-Type__
When a request has a body (PUT, POST, PATCH)
you must provide a __content-type__ header
to specify what kind of data is in the body.

Most of the time it would be `application/json`
in the request when writing code.

- `application/json` - JSON data
- `text/html` - HTML text
- `image/gif` - A gif image
- `video/mpeg` - MPEG videos

__Authorization__
This is used by the server to identify the user.

__Cookie__
Used by the server to identify who the user is.

__User-Agent__
Information about the browser and/or mobile 
device sending the request.

__Origin__
Which hostname a fetch comes from

__ETag__ (aka hash)
String representing the data that the browser
already has from a previous GET request.

__X-Forwarded-For__
When your server application is behind a proxy
that receives the request, this header gives
you the ip address of the client

Sample POST request

```
fetch('https://songz.c0d3.com/api/todos', {
  method: 'POST',
  headers: {
    'content-type': 'application/json'
    },
  body: JSON.stringify({
    task: 'learn request headers',
    status: 'starting'
  })
}).then(res => res.json()).then(console.log)
```

Sample PATCH request

```
fetch('https://songz.c0d3.com/api/todos/0e750eff-f872-4ac4-a1b0-ec7a877b1d6e', {
  method: 'PATCH',
  headers: {
    'content-type': 'application/json'
    },
    body: JSON.stringify({
      status: 'completed'
  })
}).then(r => r.json()).then(console.log)
```


## Response

3 parts

1. __Status Code__
A number that describes what happened

2. __Headers__
Provide information about the response

3. __Body__ (Optional)
Blob of data in the response.


## Status Codes

The only status code that affects browser behavior is in the 300 range.

302
- When the server wants the request to go to another URL

`ETag`
- a string representing the data that the browser already
has from a previous GET request. 

If the server notices that
the data it is about to send back matches the `ETag` in
the request, the server will not send back with the 
response body, resulting in saved bandwidth!

304
- The server sends back a 304 status code when it realizes
that the response body matches the request `ETag` headers
so instead of sending back the response body the server
will send back a 304 status code with no body to save
bandwidth.

When the browser recieves this code, it will automatically
use its own data saved from the previous requests.

200
- Everything is good

201
- Everything is good and something was created in the server

400 
- bad request

403
- trying to access a page without proper permission

404
- the url is not supported by the browser

418
- wrong server request

500
- internal error and could not process the request


## Headers

__Cache-Control__
Tells the browser to save the response body for a period of time

__ETag__
A hash string that represent the content of the response body

__Server__
A name for the server that processed the request

__Set-Cookie__
This header tells the browser set a cookie

__Content-Type__
Tells the browser how to read the response body

__Location__
This header contains a url, which tells the requestor the
new URL to resend the request to

When the browser needs to make cross domain request, it first
sends and OPTIONS request for very specific headers in the
response to determine if it should proceed to send the request

__OPTIONS__
An OPTIONS request is sent by the browser for security reasons
You will never need to send an OPTIONS request yourself. 

The browser will send an OPTIONS request before sending out some
`cross-domain` requests

__Access-Control-Allow-Origin__
Contains the host name that is allowed to send the 
cross domain request

__Access-Control-Allow-Credentials__
If this is true in the response header, then the cross
domain request will include a cookie header

__Access-Control-Allow-Methods__
This is a commoa seperated string that tells the browser
what request methods are allowed in the cross domain request


## TAKEAWAYS

__Client Side Rendering__
- Client side rendering as a coding practice as a coding
practice where you change the page changing the HTML
directly using JavaScript.

__Session__
A session is the duration in which a user is logged in.

__Cross Site Request__
A cross site request is a request that the browser sends
that goes to a different hostname than the site that is 
currently on.


## REST

REST METHODS

- POST
- GET
- PATCH
- DELETE

It has becomen an industry best practice to use rest.

__REST__ stands for representational state transfer.


## SETTING UP A PROJECT

Setting up a project in `node` in terminal.

1. `mkdir` Create a folder or make directory.
2. `cd` change directory into the folder.
3. `npm init` inside the folder.

__Package.json__

This is a big string (not a javascript object) 

__Scripts__
    
`scripts` section allows you to define commands.
You can run your file by typing `npm run start`

__Adding libraries__

`npm i --save [library]`

This lets your use other libraries that other people
have written.

They probably ran into the same problems that you had
and wrote a library to help work around that problem.


## Server

First create a project and add a library called `express`.
Express is the most popular JavaScript server as of 2020.

`app.listen` keeps your application running so you can
listen to incoming requests.

Usually it is afe to pick a number 3000 and higher

__Only one application may list to any post at a given time__


__Request Handler__

The request handler function runs when a request comes into the 
function

The only request methods your can experiment with are
request without a body: `GET` and `DELETE`

Sample code to send back 'ok' when you recieve a 
`DELETE` request at the '/hello'
and sends back HTML when we recieve a `GET` request

The first argument specifies a url path string common patterns: 
- `/hello`
- `['/hello', '/world'] run request when either path matches
- `/*`(Run for all paths) */


## Request & Response Headers

To set a response heder, we run the set function in the response
object before sending back a response.

`set` takes in an object we want to set.

To read a request header, we can run the `get` function
in the request object and pass in the string of the 
header we want.


### Cookies

One path that can be sent is a `set-cookie` response header
to the browser to set a header.

The second path tells the user what cookie they have


### Cache-Control

If you want to tell the browser to save the response for a 
period of time so it does not send a request to you, you can
send back a `Cache-Control` header with a value of `max-age=120`

This tells the browser to save the response for 120 seconds.

Setting `cache-control` headers in your response can help you
reduce the number of request you receive.

If you open a new tab to the same url with a cache, you will notice
that the page loads instantly, nmeaning the browser did not send
the request.

You can also `fetch` the url and see that the network request gets
the response instantly.


## Request & Response Objects 

### Request

https://www.yoursite.com/05/22/2012/index.html?source=brilliantcampaign

Protocol - [https]
Hostname - [www.yoursite.com]
Path - [05/22/2012/index.html?]
Parameters - [source=brilliantcampaign]

Sometimes you can specify for the path itself to be a variable
by adding a `:` in front of the variable name

#### Properties

__params__
- An object with key / value pair based on the variables in URL

__query__
- An object with key / value pairs based on the url __query parameters__

__hostname__
- The url's hostname

__ip__
- The address of the machine that sent the request
- Typically the address of a load balancer's proxy not device
- To get the original id use `x-forwarded-for` request headers

__headers__
- Request headers, typically accessed using `get`

__body__
- The body of the incoming request

#### Functions

__get__
- Allows you to retrieve the request header

__req.get('authorization')__
returns the authorization value in the Authorization header

__req.get('x-forwarded-for')__
returns the ip address of the originla machine that sent
the request if the request went through a proxy.

### Response

__send__
Takes in a string and sets the response body and sends the response

__res.send('<h1>hello</h1>')__
Sends back a response with the string in the body

__status__
Takes in a number and sets the status of the response

`res.status(400).send(`wrong input`)`
- sends back a response with a status code 400 and a
string in the response body

__redirect__
Takes in a url string and set the response status code to 302.
When the browser recieves the response, it will send a new request
to the url you specified

`res.redirect('https://google.com')
Redirects to google.com

__set__ 
- Sets a response header. Two ways to do this:

__json__
- Sets the response header `content-type` to JSON and sends
back a JSON string. Usually for APIs to send back data.

__sendFile__
- Takes in a file path and sends back a file
`res.sendFile('./funny/png')`
Sends back an image

__hearbeat is a concept where you send a request to the server
constantly to get data or simply let the server know you are 
still connected.


## Middleware

You can pass in a third argument to request handlers.

__Middleware__ is a concept where a request goes through 
a function and before reaching the main function. The 
function in the middle is called middleware.

__Middleware__ is simply a concept. It is not a special
function or anything. It is simply a label.

Sometimes you may want to run middleware on different paths
and different request methods.

Your middleware can also set a property on the request. 

All the following request handlers will be able to use the 
request property.

At many companies, a common practice is to have a middleware
to set a user object into the request object so all request
handlers can access user info (username, name, location, etc.)


### Helper Middlewars

There are a few middlewares use frequently.

__Express.static__

Creates a path for every file in your folder

__Express.json__

This will be able to get the request body
from request methods that has a request body: POST, PUT

__Multer__

This middleware helps process file uploads and puts a `files`
property in the request object when a user uploads a file.


## Authentication

Industry standards for building authentication

1. When the user inputs their information on their browser, make sure 
the password input field has the correct type.
- This way the password is never revealed on the screen.

(optional) 
2. When the user hits the submit button, make sure the encrpyt their
password. Many companies don't do this.

3. When sending a newtwork request to the server, make sure to send the
data via a POST request so the data is in the body.

4. When you recieve a user's password on the server, you should not 
store the user's password into your database. Instead, you need
to do a __one way encryption__.
- This means that the developer will not be able to see the password
without running one way encryption on the password in the database.
- The higher the salt level, the slower the encryption.

5. When you send back the user data as a response or console.log the
user information, make sure to remove the password field from the
user before logging.


# Challenges


## Testing

In the previous lessons you test functions.
Those tests are called __unit tests__.

You treat each function lik a unit of code you are 
testing each function (aka unit) of code.

__Integration Test__ is when you write tests that
start a server, send a request, and expect response
to be a certian way.

When you send a request, the server request handler
could be running many many different functions before 
sending back a response.

Integration tests are appropriately named because it is
making sure all your functions are properly integrated 
with each other.

To write your code in a way that can be tested well,
you must provide two functions: 

`startServer` and `closeServer`

that could be run in the beginning and end of your test.

`startServer` will take in a port, but the port may be
unavailable.

Close the connection and try with the next port number
until you are able to successfully connect to a port.


### Start Server

`app.listen` takes in an optional second argument, a
function, that runs when the connection is done.

Our startServer function will use this to return a
promise that resolves.

Since starting and stopping a server takes time,
you need to make sure your test doesn't start until
the server is completely started by using `beforeAll()`

Also you need to make sure you don't stop the server
until your tests are done by using `afterAll()`


### Production Systems

If you website is going to have 1000s of requests every
minute, you will need to have more than one server.

1 server will simply not be able to handle that many
request.

To solve this problem, you need a proxy that forwards the 
requests to multiple servers.

__A Load Balancer__ is a proxy that forwards requests to
different servers to divide the load for each server.

When the server receives the request from the proxy,
`request.ip` will be the address of the proxy.

The actualy request of the originla sender will be 
in the `X-Forwarded-For` request header.

```
graph LR
  A[Browser] -->|send request| C{Proxy}
  C -->|first request| D[Server1]
  C -->|2nd request| E[Server2]
  C -->|3rd request| F[Server3]
```

Proxy servers can be used for:
- HTTPS Certificates
- Load balancing
- Securing servers so the real servers
cannot be directly accessible


### HTTPS
`http` is insecure.

Broswers will wonly allow `https` requests to go through.
To enable `https` you must provide a certificate to prove
that you own the domain name.

This certificate comes in two parts: Key and Cert.

### Containers

Conatains are used so each application runs as its own
virtual machine. This way, a malicious application will
not be able to affect other applications running on the
server.

Docker is a wll known company that helps manage containers.

When you create a container, you may want to specify which
applications your application may need to run.

#### Kubernetes

Containers are not only good for sercurity, with containers,
you can deploy your application to multiple servers and 
make sure every server has the same code and system setup.

If you have 1000 severs it's a pain to manually update 
all of your servers manually.

Kubernetes helps deploy changes across all servers.

### Caching

Storing previously computed results for faster lookup
the second time you compute it.

### The Internet

### Router (Intranet)

The router provides WIFI / ethernet ports that your 
computer and other electronic gadgets can connect to.

Whenever a device connects to a router, the router gives
the device an IP Address. An IP Address specifies the 
devices address. Since the router keeps track of all 
devices connected to it via the IP address, the router
helps faciliate communication between all devices.

## System Design

1. __User Experience__
It's important to 100% understand how the user will
be using your app. You are not the user if you're 
reading this less than 5% of people on the planet
can or do program computers.

2. __APIs__
You need to design APIs to power the user experience
in step 1. Think about making it fast for the user.

3. __Scaling__
Time &  Space O(n)
