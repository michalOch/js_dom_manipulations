// DOM Selectors for Multiple Elements
// *************************************************

// Get elements by class name
// document.getElementsByClassName()
// *************************************************

// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red';
// items[3].textContent = 'new text';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listItems);

// Get elements by tag name
// document.getElementsByTagName
// *************************************************

// let lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'purple';
// lis[3].textContent = 'Greetings';

// // Convert HTML Collection into array
// lis = Array.from(lis);
// // lis.reverse();
// lis.forEach(function (li, index) {
//   console.log(li.className);
//   li.textContent = `Hello ${index} ...`;
// });

// console.log(lis);

// Query selector all
// document.querySelectorAll
// *************************************************

// let items = document.querySelectorAll('ul.collection li.collection-item');

// items.forEach(function (item, index) {
//   item.textContent = `Item nr. ${index}`;
// });

// console.log(items);

// Changing the style for odd and even items
// *************************************************
let liOdd = document.querySelectorAll('li:nth-child(odd)');
let liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function (item) {
  item.style.background = 'black';
  item.style.color = 'white';
});

liEven.forEach(function (item) {
  item.style.background = 'blue';
  item.style.color = 'red';
})

for (let i = 0; i < liEven.length; i++) {
  liEven[i].style.color = 'green';
}