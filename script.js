
var timeDisplayEL = $("#time-display");
var timeBlock = $(".time-block")
var timeArea = document.querySelector(".time-block > textarea")

console.log("hi"); 



// //display time
 $("#today").text(moment().format('MMM Do, YYYY; h:mm a'));

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

        //localStorage.getItem(storage).text(storage)
        //console.log("localstorage")
        //console.log(localStorage.getItem(storage))

        // //gets time out of local storage so it can display on screen
        // $("#" + time).val(localStorage.getItem("" + time));
    }
}

presentTime()


//var test = localStorage.setItem("textarea", 1);

//console.log(test);

console.log("hi");

//save inputs to local storage

var storage = $(".textarea9")

function saveData() {
    debugger; 
    window.localStorage.setItem(storage, $(".textarea9"))
    
    console.log(storage)
}













