

var timeDisplayEL = $("#time-display");
var timeBlock = $(".time-block")
var timeArea = document.querySelector(".time-block > textarea")

console.log("hi"); 



// //display time
 $("#today").text(moment().format('MMM Do, YYYY'));

//color gets changed depending on time, this accesses the time 
var date = new Date();
var hour = date.getHours();
function presentTime() {
    // time might need to point to your time blocks - (done)
    var time = $(".textarea")
    //var hour = 13;
    console.log(hour);
    for (time = 9; time < 18; time ++) {
        // debugger;
        // for each of your time block
        // I want to see if the time is pas t, present etc
        // use the id in each time-block

        //different classes get applied to the time blocks depending on the time
   
        if(time === hour) {
            $(".textarea" + time).addClass("present") 
            console.log("present");
            console.log(time);
        } else if (time < hour) {
            $(".textarea" + time).addClass("past")
            console.log("past");
            console.log(time);  
        } else {
            $(".textarea" + time).addClass("future")
            console.log("future");
            console.log(time);
        }

        var taskRead = localStorage.getItem("textarea" + time);
        var TaskDiv = document.querySelector(".textarea" + time)
        console.log(taskRead);
        TaskDiv.textContent = taskRead;
        
        //localStorage.getItem(storage).text(storage)
        //console.log("localstorage")
        //console.log(localStorage.getItem(storage))

        // //gets time out of local storage so it can display on screen
        // $("#" + time).val(localStorage.getItem("" + time));
    }
}

presentTime()

//GIVE IT A KEY OF SOME SOrt, the slot iteself
//give it the value of the element, just not the jquery of the element,
//find out how to store them uniquley
//ability to get history, by key, set up a function where history can be saved
//build something arounf your history as if we have objects
//get history, set a key
//once getHistory and setHistory is figured out

//array that grabs all of the inputs

// $(".saveBtn").on("click", storeFunction());


// var taskRead = localStorage.getItem("textarea9");
// var TaskDiv = document.querySelector(".textarea9")
// console.log(taskRead);
// TaskDiv.textContent = taskRead;

//functions to store answers

function storeFunction() {
    console.log("saveBtnCalled");
    var taskWrite = document.querySelector(".textarea9").value;
    console.log(taskWrite);
    localStorage.setItem("textarea9", taskWrite );


}

function storeFunction1() {
    console.log("saveBtnCalled");
    var taskWrite = document.querySelector(".textarea10").value;
    console.log(taskWrite);
    localStorage.setItem("textarea10", taskWrite );


}

function storeFunction2() {
    console.log("saveBtnCalled");
    var taskWrite = document.querySelector(".textarea11").value;
    console.log(taskWrite);
    localStorage.setItem("textarea11", taskWrite );


}

function storeFunction3() {
    console.log("saveBtnCalled");
    var taskWrite = document.querySelector(".textarea12").value;
    console.log(taskWrite);
    localStorage.setItem("textarea12", taskWrite );


}

function storeFunction4() {
    console.log("saveBtnCalled");
    var taskWrite = document.querySelector(".textarea13").value;
    console.log(taskWrite);
    localStorage.setItem("textarea13", taskWrite );


}

function storeFunction5() {
    console.log("saveBtnCalled");
    var taskWrite = document.querySelector(".textarea14").value;
    console.log(taskWrite);
    localStorage.setItem("textarea14", taskWrite );


}

function storeFunction6() {
    console.log("saveBtnCalled");
    var taskWrite = document.querySelector(".textarea15").value;
    console.log(taskWrite);
    localStorage.setItem("textarea15", taskWrite );


}

function storeFunction7() {
    console.log("saveBtnCalled");
    var taskWrite = document.querySelector(".textarea16").value;
    console.log(taskWrite);
    localStorage.setItem("textarea16", taskWrite );


}

function storeFunction8() {
    console.log("saveBtnCalled");
    var taskWrite = document.querySelector(".textarea17").value;
    console.log(taskWrite);
    localStorage.setItem("textarea17", taskWrite );


}





















