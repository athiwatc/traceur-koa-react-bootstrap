import {
    mySecert
}
from './something';

var app = require('koa')()
app.use(require('koa-trie-router')(app))

app.route('/').
get(function * (next) {
    let {
        text: t,
        magicNumber: m
    } = yield ioStuff(mySecert);

    this.body = t + m.toString() + '!';
});

app.listen(3000);

// Stuff that still uses callback
function ioStuff(giveBack) {
    return new Promise((resolve) => {
        // Database operation for example
        setTimeout(() => {
            resolve({
                text: 'How easy was that? ',
                magicNumber: giveBack + 1327
            });
        }, 1000);
    });
}