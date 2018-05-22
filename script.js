
var qNum = 0;
var question = '<h1>what is your name?</h1>';

var output = document.getElementById('output');

$(document).ready(function() {
    console.log(output);
    $("#output").html(question);
});

function chat() {
    var input = $("#input").val();
    console.log(input);

    if (qNum === 0) {
        $("#output").html('<h1>hello ' + input + '</h1>');
        $('#input').val("");
        question = '<h1>how old are you?</h1>';
        setTimeout(timedQuestion, 2000);
    }

    else if (qNum === 1) {
        $("#output").html('<h1>so you were born in ' + (2018 - input) + '</h1>');
        $('#input').val("");
        question = '<h1>where are you from?</h1>';
        setTimeout(timedQuestion, 2000);
    }

    else if (qNum === 2) {
        $("#output").html('<h1>so you were born in ' + (2018 - input) + '</h1>');
        $('#input').val("");
        question = '<h1>where are you from?</h1>';
        setTimeout(timedQuestion, 2000);
    }
}

function timedQuestion() {
    $("#output").html(question);
}

$(document).keypress(function(e) {
    if (e.which === 13) {
        chat();
        qNum++;
    }
});
