## GET STARTED

### Requirements
node >= 8.4.0

### Generate ssl certificate

1. Run: ```openssl req -x509 -sha256 -nodes -days 365 -newkey rsa:2048 -keyout server.key -out server.crt ```

### HTTP1.1

1. Run: ```node http1.js```
2. Goto: ``` http://localhost:4000/home ```

[HTTP1.1 RESPONSE](https://github.com/sohamdodia/server-push-express/blob/master/Screenshots/http1.png)

### HTTP2

 1. Run: ```node http2.js ```
 2. Goto: ``` https://127.0.0.1:4000/home ```

[HTTP2 RESPONSE](https://github.com/sohamdodia/server-push-express/blob/master/Screenshots/http2.png)
