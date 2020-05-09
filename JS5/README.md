#JS5 Lesson Doc Abridged 



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
- Client side rendering as a coding practice

__Session__

__Cross Site Request__
