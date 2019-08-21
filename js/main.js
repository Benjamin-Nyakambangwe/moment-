// DOM Elements
const time = document.getElementById('time'),
  greeting = document.getElementById('greeting'),
  name = document.getElementById('name'),
  focus = document.getElementById('focus');

//Show time
 function showTime() {
   let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

//Set AM or PM
const amPm = hour >= 12 ? 'PM' : 'AM';

//12 Hour formart
hour = hour % 12 || 12;

//Output time
time.innerHTML =`${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

setTimeout(showTime, 1000);
 }

//Add Zero
function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

//Set Bg and Greeting
function setBgGreet() {
  let today = new Date(),
  hour = today.getHours();

  if (hour < 12) {
    //Mornung
   document.body.style.backgroundImage = "url('../img/morning.png')";
   document.body.style.backgroundColor = 'yellow';
    greeting.textContent = 'Good Morning,';
  }else if (hour < 18) {
    //Afternoon
    document.body.style.backgroundImage = "url('../img/afternoon.png')";
    greeting.textContent = 'Good Afternoon';
  }else{
    //Evening
    document.body.style.backgroundImage = "url('../img/evening.png')";
    greeting.textContent = 'Good Evening';
    //document.body.style.color = 'white';
  }
}

 //Run
showTime();
setBgGreet();
