// Create the element
const li = document.createElement('li');

// Add class
li.className = 'collection-item';

// Add id
li.id = 'new-item';

// Add attribiute
li.setAttribute('title', 'New Item');

/*
<a href="#" class="delete-item secondary-content">
  <i class="fa fa-remove"></i>
</a>
*/

// create link element
let link = document.createElement('a');
link.className = 'delete-item secondary-content';
link.setAttribute('href', '#');

// Add icon html element
link.innerHTML = '<i class="fa fa-remove"></i>';

// Append link into li
li.appendChild(link);

// create text node and append
let text = document.createTextNode('Hello world');
li.appendChild(text);

// Append li as child to ul
document.querySelector('ul.collection').appendChild(li);


console.log(li);