require('./instantHello');
var question = require('./talk/question');
var goodbye = require('./talk/goodbye');
var talk = require('./talk');
talk.intro();
talk.hello('sai');

var answer = question.ask('What is your Fav color?');
console.log(answer);
goodbye();