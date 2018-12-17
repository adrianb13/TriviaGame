$(document).ready(function() {
// Q1 : C
var q1 = {
    question: "What year did man first land on the moon?",
    a: "1967",
    b: "1968",
    c: "1969",
    d: "1970"
    }
// Q2 : D
var q2 = {
    question: "What is the estimated age of the universe?",
    a: "12.3 Billion Years Old",
    b: "12.8 Billion Years Old",
    c: "13.3 Billion Years Old",
    d: "13.8 Billion Years Old"
    }
// Q3 : B
var q3 = {
    question: "About how many miles is Earth away from the sun?",
    a: "92 million",
    b: "93 million",
    c: "94 million",
    d: "95 million"
}
// Q4 : D
var q4 = {
    question: "What is the brightest star in the known universe?",
    a: "Alpha Centauri",
    b: "Arcturus",
    c: "Pleiadis",
    d: "Sirius"
}
// Q5 : A
var q5 = {
    question: "What is the closest galaxy to Earth (not including our own)?",
    a: "Andromeda Galaxy",
    b: "Pinwheel Galaxy",
    c: "Tadpole Galaxy",
    d: "Whirlpool Galaxy"
}

var qList = [q1, q2, q3, q4, q5];
var right = 0;
var wrong = 0;
var number = 20;
var wait = 5;
var intervalId;
var a = false;
var b = false;
var c = false;
var d = false;
var i = 0;

$("#start").on("click", function start() {
    run();
    $("#start").empty();
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
    $("#timer").html(number).attr("class", "clear");
    intervalId = setInterval(decrement, 1000);
    $("#questions").text(qList[i].question);
    $("#answerA").text(qList[i].a).attr("class", "answer");
    $("#answerB").text(qList[i].b).attr("class", "answer");
    $("#answerC").text(qList[i].c).attr("class", "answer"); 
    $("#answerD").text(qList[i].d).attr("class", "answer");
    if (i === 5){
        clearInterval(intervalId);
        stop();
    }
}

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
        number = 20;
    }
}

function waitTime() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement2, 1000);
    }

function decrement2() {
    wait --;
    $("#timer").html(wait).attr("class", "clear");
    if (wait === 0) {
        run();
        wait = 5;
    }
}
function stop() {
    clearInterval(intervalId);
    number = 20;
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
    if (i === 5) {
        $("#questions").text("Results!!!")
        $("#answerA").text("Correct: " + right);
        $("#answerB").text(" ");
        $("#answerC").text("Wrong: " + wrong);
        $("#answerD").text(" ");
        clearInterval(intervalId);
        i = 0;
        right = 0;
        wrong = 0;
        $("#start").text("Press START To Play Again").attr("class", "#start")
    }
}
function rightWrong() {
    console.log("hello" + i)
    clearInterval(intervalId);
    waitTime()
    if (i === 0 && c === true) {
        console.log(c)
        correct();
    } else if (i === 0 && c=== false) {
        $("#questions").text("You are wrong!");
        $("#answerA").text("Correct answer was: " + qList[0].c).attr("class", "clear");
        $("#answerB").text(" ").attr("class", "clear");
        $("#answerC").text(" ").attr("class", "clear");
        $("#answerD").text("Get Ready For The Next Question").attr("class", "clear");
        wrong++;
    }
    if (i === 1 && d === true) {
        console.log(d)
        correct();
    } else if (i === 1 && d === false) {
        $("#questions").text("You are wrong!");
        $("#answerA").text("Correct answer was: " + qList[1].d).attr("class", "clear");
        $("#answerB").text(" ").attr("class", "clear");
        $("#answerC").text(" ").attr("class", "clear");
        $("#answerD").text("Get Ready For The Next Question").attr("class", "clear");
        wrong++;
    }
    if (i === 2 && b === true) {
        console.log(b)
        correct();
    } else if (i === 2 && b === false) {
        $("#questions").text("You are wrong!");
        $("#answerA").text("Correct answer was: " + qList[2].b).attr("class", "clear");
        $("#answerB").text(" ").attr("class", "clear");
        $("#answerC").text(" ").attr("class", "clear");
        $("#answerD").text("Get Ready For The Next Question").attr("class", "clear");
        wrong++;
    }
    if (i === 3 && d === true) {
        console.log(d)
        correct();
    } else if (i === 3 && d === false) {
        $("#questions").text("You are wrong!");
        $("#answerA").text("Correct answer was: " + qList[3].d).attr("class", "clear");
        $("#answerB").text(" ").attr("class", "clear");
        $("#answerC").text(" ").attr("class", "clear");
        $("#answerD").text("Get Ready For The Next Question").attr("class", "clear");
        wrong++;
    }
    if (i === 4 && a === true) {
        console.log(a)
        correct();
    } else if (i === 4 && a === false) {
        $("#questions").text("You are wrong!");
        $("#answerA").text("Correct answer was: " + qList[4].a).attr("class", "clear");
        $("#answerB").text(" ").attr("class", "clear");
        $("#answerC").text(" ").attr("class", "clear");
        $("#answerD").text("Get Ready For The Next Question").attr("class", "clear");
        wrong++;
    }
}

function correct () {
    $("#questions").text("You are correct!");
    $("#answerA").text(" ").attr("class", "clear");
    $("#answerB").text(" ").attr("class", "clear");
    $("#answerC").text(" ").attr("class", "clear");
    $("#answerD").text("Get Ready For The Next Question").attr("class", "clear");
    right++;
}
});