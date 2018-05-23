
var qNum = 0;
var question = '<h1>what is your name?</h1>';

var output = document.getElementById('output');

$(document).ready(function() {
    $("#output").html(question);
});

function chat() {
    var input = $("#input ").val();
    console.log(input);

    if (qNum === 0) {
        $("#output").html('<h1>hello ' + input + '</h1>');
        $('#input').val("");
        question = '<h1>how much of your last assignment did you do?</h1>';
        setTimeout(timedQuestion, 2000);
    }

    else if (qNum === 1) {
        $("#output").html('<h1>' + input + '? ok that is a 14/15 </h1>');
        $('#input').val("");
        question = '<h1>what is your favorite type of meme?</h1>';
        setTimeout(timedQuestion, 2000);
    }

    else if (qNum === 2) {
        $("#output").html('<h1> i guess ' + input + ' are cool .. but i like Albinson memes</h1>');
        $('#input').val("");
        question = '<h1></h1>';
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
