/**
 * Created by sai on 17/1/17.
 */

var hello = function (name) {
    console.log('hello ' + name);
};

var intro = function () {
    console.log('this text is coming inside talk intro file');
};

module.exports = {
    intro : intro,
    hello : hello
};
