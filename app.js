// Events 
// document.querySelector('.clear-tasks').addEventListener('click', function (e) {
//   console.log('Hello World');
//   //e.preventDefault();

// });

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e) {
  //console.log('Clicked');

  let val;

  val = e;

  // Event target element
  val = e.target;
  val = e.target.className;
  val = e.target.classList;

  e.target.innerText = 'Hello';
  e.target.style.color = 'red';

  // Event type
  val = e.type;

  // Time stamp
  val = e.timeStamp;

  // Coordinates events relative to the window 
  val = e.clientY;
  val = e.clientX;

  // Coordinates events relative to element itself
  val = e.offsetY;
  val = e.offsetX;

  console.log(val);
}