/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(s){
  let hrs = s[0] + s[1]
  let hr = parseInt(hrs);
  if (hr < 12) {
    return "Good Morning";
  }
  if (hr >= 12 && hr < 17) {
    return "Good Afternoon";
  }
  return "Good Evening";
  
}
/* Write your implementation of displayMessage() */
function displayMessage(s){
  const greeting = document.getElementById('greeting').innerText = s;
}