var displayTimeEL = document.querySelector(".lead");

//display time at top of the screen
function displayTime() {
    var currentTime = moment().format('MMM, DD, YYY');
    displayTimeEL.textContent(currentTime);
}