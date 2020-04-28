# JS5 Lesson Doc Abriged 



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
