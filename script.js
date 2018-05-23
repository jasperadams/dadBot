
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
        $("#output").html('<h1> i guess ' + input + ' memes are cool ... i like Albinson memes</h1>');
        $('#input').val("");
        question = '<h1>how many times have you played slither.io this week?</h1>';
        setTimeout(timedQuestion, 4000);
    }

    else if (qNum === 3) {
        $("#output").html('<h1>only ' + input + ' times? jasper has played way more than that!</h1>');
        $('#input').val("");
        question = '<h1>have you seen otis recently?</h1>';
        setTimeout(timedQuestion, 3000);
    }

    else if (qNum === 4) {
        console.log(input);
        if(input == "yes"){
            $("#output").html('<h1>really? then you must have been JUULing with him in the bathroom</h1>');
        }
        else if(input == "no"){
            $("#output").html('<h1>same, he is probably JUULing in the bathroom</h1>');
        } else {
            $("#output").html('<h1>he is defintely vaping</h1>');
        }
        $('#input').val("");
        question = '<h1>who is the worst teacher at berkeley high?</h1>';
        setTimeout(timedQuestion, 4000);
    }

    else if (qNum === 5) {
        if (input == "holston" || input == "mr holston" || input == "ira holston") {
            $("#output").html('<h1>yes, mr holston is terrible</h1>');
        } else {
            $("#output").html('<h1>you think ' + input + ' is the worst? nah mr holston is</h1>');
        }
        $('#input').val("");
        question = '<h1>what is your favorite game?</h1>';
        setTimeout(timedQuestion, 3500);
    }

    else if (qNum === 6) {
        $("#output").html('<h1></h1>');
        $('#input').val("");
        question = '<h1></h1>';
        setTimeout(timedQuestion, 3000);
    }

    else if (qNum === 7) {
        $("#output").html('<h1></h1>');
        $('#input').val("");
        question = '<h1>click enter for a random albinson meme</h1>';
        setTimeout(timedQuestion, 1000);
    }

    else if (qNum === 8) {
        var num = Math.floor(Math.random() * 26) + 14;
        var img = '<img src="meme/ALBY%20(' + num + ').jpg">';
        console.log(img);
        $("#output").html(img);
        $('#input').val("");
        qNum = 7;
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
