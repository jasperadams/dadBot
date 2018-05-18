
var questionNum = 0;
var question = '<h1>what is your name?</h1>';

var output = document.getElementById('output');

$(document).ready(function() {
    console.log(output);
    output.innerHTML = question;
});

function bot() {
    var input = document.getElementById("input").value;
    console.log(input);

    if (questionNum == 0) {
        output.innerHTML = '<h1>hello ' + input + '</h1>';
        document.getElementById("input").value = "";
        question = '<h1>how old are you?</h1>';
        setTimeout(timedQuestion, 2000);
    }

    else if (questionNum == 1) {
        output.innerHTML = '<h1>That means you were born in ' + (2016 - input) + '</h1>';
        document.getElementById("input").value = "";
        question = '<h1>where are you from?</h1>';
        setTimeout(timedQuestion, 2000);
    }
}

function timedQuestion() {
    output.innerHTML = question;
}

$(document).keypress(function(e) {
    if (e.which == 13) {
        bot();
        questionNum++;
    }
});
