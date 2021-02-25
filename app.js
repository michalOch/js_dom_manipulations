// MOUSE EVENTS
const clearButton = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Click
// clearButton.addEventListener('click', runEvent);

// Double Click
// clearButton.addEventListener('dblclick', runEvent);

// Mousedown - click and hold 
//clearButton.addEventListener('mousedown', runEvent);

// Mouseup - fire after let go of hold (click and hold)
//clearButton.addEventListener('mouseup', runEvent);

// Mouseenter - drag into the button
// card.addEventListener('mouseenter', runEvent);

// Mouseleave
// card.addEventListener('mouseleave', runEvent);

// Mouseover 
// card.addEventListener('mouseover', runEvent);

// Mouseout
// card.addEventListener('mouseout', runEvent);

// Mousemove
card.addEventListener('mousemove', runEvent);

// Event Handler
function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);

  heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
};