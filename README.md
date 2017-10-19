# bellhouse_keyboard


Change in `index.js` `const NUM_BELLS = 26;` and `const STRIKE_URL = "http://xxxxx.ngrok.io/strike/";` to your required values.

If the machine doesn't have internet access download and change in `index.html`:
```    
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/rxjs/5.4.3/Rx.js"></script>
```
To local libraries.

Serve with your fav web server, maybe:

Python 2:
`python -m SimpleHTTPServer`

Python 3:
`python3 -m http.server`
