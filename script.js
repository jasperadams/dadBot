
var qNum = 0;
var question = '<h1>hello! what is your name?</h1>';

var output = document.getElementById('output');

$(document).ready(function() {
    $("#output").html(question);
});

function chat() {
    var input = $("#input ").val();
    console.log(input);

    if (qNum === 0) {
        if(input.toLowerCase().includes("brad")){
            $("#output").html('<h1>hello brad! i am the dad-bot, your computer alter-ego</h1>');
        } else {
            $("#output").html('<h1>hello ' + input + '. i am the dad-bot</h1>');
        }
        $('#input').val("");
        question = '<h1>how are you doin?</h1>';
        setTimeout(timedQuestion, 3000);
    }

    else if (qNum === 1) {
        $("#output").html('<h1>' + input + '? glad to hear it! </h1>');
        $('#input').val("");
        question = '<h1>QUESTION: what kind of bear is best?</h1>';
        setTimeout(timedQuestion, 2500);
    }

    else if (qNum === 2) {
        $("#output").html('<h1>' + input + '? FACT: bears eat beets. bears, beets, Battlestar Galactica.</h1>');
        $('#img').attr('src', 'https://i1.sndcdn.com/artworks-000001104797-rgzcts-t500x500.jpg');
        $('#input').val("");
        question = '<h1>anyway... i heard today is a special day - is that right?</h1>';
        setTimeout(timedImage, 5000);
        setTimeout(timedQuestion, 5000);
    }

    else if (qNum === 3) {
        if(input.toLowerCase().includes("yes")){
            $("#output").html('<h1>youre right! today is the day I was born - literally!</h1>');
        }
        else if(input.toLowerCase().includes("no")){
            $("#output").html('<h1>i think youre wrong - today is the day I was born - literally!</h1>');
        } else {
            $("#output").html('<h1>' + input + '? well today is the day I was born - literally!</h1>');
        }
        $('#input').val("");
        question = '<h1>but I think its also special for a different reason ... whats the date today?</h1>';
        setTimeout(timedQuestion, 3000);
    }

    else if (qNum === 4) {
        if(input.toLowerCase().includes("may") && input.toLowerCase().includes("30") ){
            $("#output").html('<h1>' + input + '? well then ... </h1>');
        } else {
            $("#output").html('<h1> oh well I guess I was wrong ... nevermind</h1>');
        }
        $('#input').val("");
        question = '<h1>press enter!</h1>';
        setTimeout(timedQuestion, 2000);
    }

    else if (qNum === 5) {
        $("#output").html('<h1></h1>');
        $('#img').attr('src', 'img/birthay.png');
        $('#input').val("");
    } 

function timedQuestion() {
    $("#output").html(question);
}

function timedImage() {
    $('#img').attr('src', 'img/dad.gif');
}

$(document).keypress(function(e) {
    $("#output").html(question);
});

$(document).keypress(function(e) {
    if (e.which === 13) {
        chat();
        qNum++;
    }
});
