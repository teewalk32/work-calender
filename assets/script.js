// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(function () {
  // TODO: HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.


  // saving functon 'btn from class in html
  var saveButton = $(".btn")
  saveButton.on("click", function (e) {
    // stops code from running multipule times
    e.preventDefault()

    // connecting button and text value to get local storage to work
    var buttonId = $(this).attr("id")
    var textValue = $(this).siblings(".description").val()
    localStorage.setItem(buttonId, textValue)
    console.log(buttonId, textValue)


  })

  displayText()

  // for loop to get every box saved to be in local stroage
  function displayText() {
    for (var i = 8; i < 18; i++) {
      var textValue = localStorage.getItem(i)
      $("#" + i + "").text(textValue)
    }
  }
});

// set colors for time

// function setColors() {
//   var setColors = $()
//   if hour - 8 set colors red
//   {
//     else
//   }
// set colors green
// };

var timeDisplayEl = $('#time-display');

// displaying the time and date on the page using dayjs
function displayTime() {
  var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
}
displayTime();

// The speed that the time will update to user
setInterval(displayTime, 1000);