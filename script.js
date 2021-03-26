var timeDisplayEL = $("#time-display");
var timeBlock = $(".time-block")
var timeArea = document.querySelector(".time-block > textarea")

console.log("hi"); 


//display time
$("#today").text(moment().format('MMM Do, YYYY; h:mm a'));

var currentHour = new Date();
var hour = currentHour.getHours();
if (hour >= 0 &&)

// //color gets changed depending on time, this accesses the time 
// var date = new Date();
// var hour = date.getHours();
// function presentTime() {
//     // time might need to point to your time blocks - (done)
//     var time = $("#t")
//     var myHour = timeBlock.attr('id').split('t')[0]
//     console.log(myHour)
//     for (time = 9; time < 18; time ++) {
//         // for each of your time block
//         // I want to see if the time is pas t, present etc
//         // use the id in each time-block

//         //different classes get applied to the time blocks depending on the time
//         if(time === hour) {
//             timeArea.addClass("present") 
//         } else if (time < hour) {
//             timeArea.addClass("past")
//         } else {
//             timeArea.addClass("future")
//         }

//         //gets time out of local storage so it can display on screen
//         $("#" + time).val(localStorage.getItem("" + time));
//     }
// }

presentTime()

//input gets saved to the list when the save button is pressed

function userInput(event) {
    var taskInput = $(this).siblings("textarea").val().trim();
    var hoursV = $(this).siblings("textarea").attr("id");

    localStorage.setItem(hoursV, taskInput);
}

$(".saveBtn").on("click", userInput)



