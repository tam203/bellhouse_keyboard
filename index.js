const NUM_BELLS = 26;
const STRIKE_URL = "http://xxxxx.ngrok.io/strike/";
const CONTAINER = $('#keyboard');
let bells = {};

function strike(letter) {
    let bell = bells[letter];
    if (bell) {
        console.log(bell);
        jQuery.get(STRIKE_URL + bell.i);
        bell.element.fadeOut(100).fadeIn(100);
    }
};

for (var i = 0; i < NUM_BELLS; i++) {
    let key = String.fromCharCode(97 + i)
    let color = Math.floor(0xFFFFFF * Math.random()).toString(16);
    let element = $(`<section class="key" style='background-color:#${color};'>${key}</section>`);
    bells[key] = {
        i: i,
        letter: key,
        element: element
    };
    element.click(() => { strike(key) });
    CONTAINER.append(element);
}


Rx.Observable.fromEvent(document, "keypress").subscribe((e) => {
    strike(e.key);
});