$(document).ready(function() {
// Q1 : C
var q1 = {
    question: "What year did man first land on the moon?",
    a: "1967",
    b: "1968",
    c: "1969",
    d: "1970"
    };
// Q2 : D
var q2 = {
    question: "What is the estimated age of the universe?",
    a: "12.3 Billion Years Old",
    b: "12.8 Billion Years Old",
    c: "13.3 Billion Years Old",
    d: "13.8 Billion Years Old"
    };
// Q3 : B
var q3 = {
    question: "About how many miles is Earth away from the sun?",
    a: "92 million",
    b: "93 million",
    c: "94 million",
    d: "95 million"
    };
// Q4 : D
var q4 = {
    question: "What is the brightest star in the known universe?",
    a: "Alpha Centauri",
    b: "Arcturus",
    c: "Pleiadis",
    d: "Sirius"
    };
// Q5 : A
var q5 = {
    question: "What is the closest galaxy to Earth (not including our own)?",
    a: "Andromeda Galaxy",
    b: "Pinwheel Galaxy",
    c: "Tadpole Galaxy",
    d: "Whirlpool Galaxy"
    };

var qList = [q1, q2, q3, q4, q5];
var right = 0;
var wrong = 0;
var number = 15;
var wait = 5;
var intervalId;
var a = false;
var b = false;
var c = false;
var d = false;
var i = 0;

var pic = $("<img>");
    pic.attr("src","https://media.giphy.com/media/7zQ02nV86XGBce95o5/giphy.gif");
    pic.attr("id", "target");

var picStart = $("<img>");
    picStart.attr("src", "https://media.giphy.com/media/xT9IgusfDcqpPFzjdS/giphy.gif");
    picStart.attr("id", "target");
    $("#target").append(picStart);

var picRight = $("<img>");
    picRight.attr("src", "https://media.giphy.com/media/NDJWGU4n74di0/giphy.gif");
    picRight.attr("id", "target");

var picWrong = $("<img>");
    picWrong.attr("src", "https://media.giphy.com/media/nuIe85WYG7bc4/giphy.gif");
    picWrong.attr("id", "target");

$("#start").on("click", function start() {
    run();
});


$("#answerA").on("click", function () {
    a = true;
    stop();    
});
$("#answerB").on("click", function () {
    b = true;
    stop();    
});
$("#answerC").on("click", function () {
    c = true;
    stop();  
});
$("#answerD").on("click", function () {
    d = true;
    stop();    
});

function run() {
    clearInterval(intervalId);
    clear();
    $("#timer").html(number).attr("class", "clear");
    intervalId = setInterval(decrement, 1000);
    $("#questions").text(qList[i].question).attr("class", "white");
    $("#answerA").text(qList[i].a).attr("class", "answer");
    $("#answerB").text(qList[i].b).attr("class", "answer");
    $("#answerC").text(qList[i].c).attr("class", "answer"); 
    $("#answerD").text(qList[i].d).attr("class", "answer");
    if (i === qList.length){
        clearInterval(intervalId);
        stop();
    }
};

function decrement() {
    number --;
    $("#timer").html(number);
    if (number <= 5){
        $("#timer").html(number).attr("class", "red");
    };
    if (number === 0) {
        clearInterval(intervalId);
        $("#questions").text("Time's Up");
        stop();
        $("#timer").html(number).attr("class", "clear");
        number = 15;
    }
};

function waitTime() {
    clearInterval(intervalId);
    clear();
    intervalId = setInterval(decrement2, 1000);
};

function decrement2() {
    wait --;
    $("#timer").html(wait).attr("class", "clear");
    if (wait === 0) {
        run();
        wait = 5;
    }
};

function stop() {
    clearInterval(intervalId);
    number = 15;
    $("#timer").html(wait);
    if (i < 5) {
    rightWrong();
    console.log(i);
    i++;
    a = false;
    b = false;
    c = false;
    d = false;
    };
    console.log(i);
    if (i === qList.length) {
        clear();
        $("#questions").text("Results!!!").attr("class", "clear")
        $("#answerKey").text("Correct: " + right).attr("class", "correct");
        $("#target").text("Wrong: " + wrong).attr("class", "wrong");
        clearInterval(intervalId);
        i = 0;
        right = 0;
        wrong = 0;
        $("#start").text("Press [START] To Play Again").attr("class", "#start");
        $("#target2").append(pic);
        $("#getReady").text("Miss Universe 2018 Congratulates You!")
    }
};

function rightWrong() {
    clearInterval(intervalId);
    clear();
    waitTime();
    if (i === 0 && c === true) {
        correct();
    } else if (i === 0 && c=== false) {
        clear();
        $("#questions").html("You are wrong!").attr("class", "wrong");
        $("#answerKey").text("Correct answer was: " + qList[0].c).attr("class", "clear");
        $("#getReady").text("Get Ready For The Next Question").attr("class", "clear");
        $("#target").append(picWrong);
        wrong++;
    }
    if (i === 1 && d === true) {
        correct();
    } else if (i === 1 && d === false) {
        clear();
        $("#questions").text("You are wrong!").attr("class", "wrong");
        $("#answerKey").text("Correct answer was: " + qList[1].d).attr("class", "clear");
        $("#getReady").text("Get Ready For The Next Question").attr("class", "clear");
        $("#target").append(picWrong);
        wrong++;
    }
    if (i === 2 && b === true) {
        console.log(b)
        correct();
    } else if (i === 2 && b === false) {
        clear();
        $("#questions").text("You are wrong!").attr("class", "wrong");
        $("#answerKey").text("Correct answer was: " + qList[2].b).attr("class", "clear");
        $("#getReady").text("Get Ready For The Next Question").attr("class", "clear");
        $("#target").append(picWrong);
        wrong++;
    }
    if (i === 3 && d === true) {
        console.log(d)
        correct();
    } else if (i === 3 && d === false) {
        clear();
        $("#questions").text("You are wrong!").attr("class", "wrong");
        $("#answerKey").text("Correct answer was: " + qList[3].d).attr("class", "clear");
        $("#getReady").text("Get Ready For The Next Question").attr("class", "clear");
        $("#target").append(picWrong);
        wrong++;
    }
    if (i === 4 && a === true) {
        console.log(a)
        correct();
    } else if (i === 4 && a === false) {
        clear();
        $("#questions").text("You are wrong!").attr("class", "wrong");
        $("#answerKey").text("Correct answer was: " + qList[4].a).attr("class", "clear");
        $("#getReady").text("Get Ready For The Next Question").attr("class", "clear");
        $("#target").append(picWrong);
        wrong++;
    }
};

function correct () {
    clear();
    $("#questions").text("You are correct!").attr("class", "correct");
    $("#answerKey").empty();
    $("#answerA").text(" ");
    $("#answerB").text(" ");
    $("#answerC").text(" ");
    $("#answerD").text(" ");
    $("#getReady").text("Get Ready For The Next Question").attr("class", "clear");
    right++;
    $("#target").append(picRight);
}
function clear () {
    $("#start").empty();
    $("#target").empty();
    $("#target2").empty();
    $("#answerKey").text(" ").attr("class", "clear");
    $("#answerA").text(" ").attr("class", "clear");
    $("#answerB").text(" ").attr("class", "clear");
    $("#answerC").text(" ").attr("class", "clear");
    $("#answerD").text(" ").attr("class", "clear");
    $("#getReady").text(" ").attr("class", "clear");

}
});