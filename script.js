
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
        setTimeout(timedQuestion, 2000);
    }

    else if (qNum === 1) {
        $("#output").html('<h1>' + input + '? glad to hear it! </h1>');
        $('#input').val("");
        question = '<h1>QUESTION: what kind of bear is best?</h1>';
        setTimeout(timedQuestion, 2000);
    }

    else if (qNum === 2) {
        $("#output").html('<h1>' + input + '? FACT: bears eat beets. bears, beets, Battlestar Galactica.</h1>');
        $('#input').val("");
        question = '<h1>?</h1>';
        setTimeout(timedQuestion, 4000);
    }

    else if (qNum === 3) {
        if(input == "0" || input == "none") {
            $("#output").html('<h1>you are defintely lying. even I play slither</h1>');
        } else if(isNaN(input) == false) {
            $("#output").html('<h1>only ' + input + ' times? jasper has played way more than that!</h1>');
        } else {
            $("#output").html('<h1>' + input + '? jasper has played way more than that!</h1>');
        }
        $('#input').val("");
        question = '<h1>have you seen otis recently?</h1>';
        setTimeout(timedQuestion, 3000);
    }

    else if (qNum === 4) {
        console.log(input);
        if(input.toLowerCase().includes("yes")){
            $("#output").html('<h1>really? then you must have been JUULing with him in the bathroom</h1>');
        }
        else if(input.toLowerCase().includes("no")){
            $("#output").html('<h1>me neither - he is probably JUULing in the bathroom</h1>');
        } else {
            $("#output").html('<h1>well he is defintely vaping</h1>');
        }
        $('#input').val("");
        question = '<h1>who is the worst teacher at berkeley high?</h1>';
        setTimeout(timedQuestion, 4000);
    }

    else if (qNum === 5) {
        if (input.toLowerCase().includes("holston")) {
            $("#output").html('<h1>yes, mr holston is terrible</h1>');
        } else if(input.toLowerCase().includes("you")) {
            $("#output").html('<h1>no, mr holston is definetly worse than me</h1>');
        } else {
            $("#output").html('<h1>you think ' + input + ' is the worst? nah mr holston is</h1>');
        }
        $('#input').val("");
        question = '<h1>what is your favorite website?</h1>';
        setTimeout(timedQuestion, 3500);
    }

    else if (qNum === 6) {
        if(input.toLowerCase() == "cornhub") {
            $("#output").html('<h1>ok here you go: </h1><iframe src="https://cornhubpremium.blog/" height="500" width="500"></iframe>');
        } else {
            $("#output").html('<h1>' + input + '? really? I like this: </h1><iframe src="https://cornhubpremium.blog/" height="500" width="500"></iframe>');
        }
        $('#input').val("");
        question = '<h1>want to see my backend?</h1>';
        setTimeout(timedQuestion, 5000);
    }

    else if (qNum === 7) {
        if(input.toLowerCase() == "yes"){
            $("#output").html('<h1>here you go lol</h1>');
            $('#img').attr('src', 'img/back.png');
        }
        else if(input.toLowerCase() == "no"){
            $("#output").html('<h1>here you go anyway lol</h1>');
            $('#img').attr('src', 'img/back.png');

        } else {
            $("#output").html('<h1>well here you go</h1>');
            $('#img').attr('src', 'img/back.png');
        }
        $('#input').val("");
        question = '<h1>want to see some memes?</h1>';
        setTimeout(timedImage, 3000);
        setTimeout(timedQuestion, 3000);
    }

    else if (qNum === 8) {
        if(input.toLowerCase() == "yes"){
            $("#output").html('<h1>ok, then press enter</h1>');
        }
        else if(input.toLowerCase() == "no"){
            $("#output").html('<h1>really? i think you do ... press enter</h1>');
        } else {
            $("#output").html('<h1>press enter</h1>');
        }        
        $('#input').val("");
    }

    else if (qNum === 9) {
        var num = Math.floor(Math.random() * 26) + 14;
        var img = '<img src="meme/ALBY%20(' + num + ').jpg" width=428 height="240">';
        console.log(img);
        $("#output").html(img);
        $('#input').val("");
        qNum = 8;
    }

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
