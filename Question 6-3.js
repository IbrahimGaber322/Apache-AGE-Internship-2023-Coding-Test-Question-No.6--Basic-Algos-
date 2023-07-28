function myDigitalClock() {
  var d1 = new Date();
  var hours = d1.getHours(); // 0 - 23
  var minutes = d1.getMinutes(); // 0 - 59
  var seconds = d1.getSeconds(); // 0 - 59
  var zone = "AM";

  // Convert to 12-hour format and set the zone
  if (hours >= 12) {
    zone = "PM";
    hours = hours - 12;
  }
  if (hours == 0) {
    hours = 12;
  }

  // Add leading zeros to the minutes and seconds
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  // Display the time in the format hh:mm:ss AM/PM
  var time = hours + ":" + minutes + ":" + seconds + " " + zone;
  console.log(time);

  // Update the clock every second
  setTimeout(myDigitalClock, 1000);
}

// Call the function to start the clock
myDigitalClock();
//
