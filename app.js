// Manipulation of elements atribiutes, clasess etc

// ***************************************************
// Replace elements
// ***************************************************

// Create Element
const newHeading = document.createElement('h2');
// Add id
newHeading.id = 'task-title';
// Add text
let text = document.createTextNode('Task List')
newHeading.appendChild(text);

// Get the old heading
const oldHeading = document.getElementById('task-title');

// Parrent
const cardAction = document.querySelector('.card-action');

// Replace
cardAction.replaceChild(newHeading, oldHeading);

// ***************************************************
// Remove elements
// ***************************************************
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove list item
lis[0].remove();
// lis[1].remove();
// lis[2].remove();
// lis[3].remove();
// lis[4].remove();

// Remove child element
list.removeChild(lis[3]);

// ***************************************************
// Classes and attribiutes
// ***************************************************
const fistLi = document.querySelector('li:first-child');
const link = fistLi.children[0];

let val;

val = link.className;
val = link.classList;
val = link.classList[0];
val = link.classList[1];

// Classes
// ***************************************************
// Add class to class list
link.classList.add('test');

// Remove class from class list
link.classList.remove('test');
// link.classList.remove('delete-item');
val = link.classList;

// Attributes
// ***************************************************
// set attribute
link.setAttribute('href', 'http://www.google.pl/');
// get attribute
val = link.getAttribute('href');
// check if there is an attribute
val = link.hasAttribute('title');
val = link.hasAttribute('href');
// add a title attribiute
link.setAttribute('title', 'Title');
val = link.hasAttribute('title');
// remove title attribute
link.removeAttribute('title');
val = link.hasAttribute('title');
val = link;

console.log(val);