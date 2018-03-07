## GET STARTED

### Requirements
node >= 8.4.0

### Generate ssl certificate

1. When you ask to enter: ``` Common Name (e.g. server FQDN or YOUR name) []: ``` Enter localhost
2. Run: ```openssl req -x509 -sha256 -nodes -days 365 -newkey rsa:2048 -keyout server.key -out server.crt ```

### HTTP1.1

1. Run: ```node http1.js```
2. Goto:  [http://localhost:3000/](http://localhost:3000/) Open developer tools and Go to newtork and check initiator

[HTTP1.1 RESPONSE](https://github.com/sohamdodia/server-push-express/blob/master/Screenshots/http-1.png)

### HTTP2

 1. Run: ```node http2.js```
 2. Goto: [https://127.0.0.1:4000/home](https://127.0.0.1:4000/home) Open developer tools and Go to newtork and check initiator

[HTTP2 RESPONSE](https://github.com/sohamdodia/server-push-express/blob/master/Screenshots/http-2.png)
