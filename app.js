// DOM Selector For Single Elements
// Get element by id
// document.getElementById()
// *********************************************************
console.log(document.getElementById('task-title'));

// Get things from the element
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

// Change styling
document.getElementById('task-title').style.background = '#333';
document.getElementById('task-title').style.color = '#fff';
document.getElementById('task-title').style.padding = '5px';
// document.getElementById('task-title').style.display = 'none';

// Change content
document.getElementById('task-title').textContent = 'Task list';
document.getElementById('task-title').innerText = 'New Tasks';
document.getElementById('task-title').innerHTML = '<span style="color: red">Taskmaster</span>';

const title = document.getElementById('task-title');
title.textContent = 'Task list';
title.innerText = 'New Tasks';
title.innerHTML = '<span style="color: red">Tasks</span>';

// Query selector
// document.querySelector();
// *********************************************************
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('.collection-item'));
console.log(document.querySelector('h5'));

// targeting list element
document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';
// select last item
document.querySelector('li:last-child').style.color = 'red';
// select third item
document.querySelector('li:nth-child(3)').style.color = 'yellow';
// select odd item
document.querySelector('li:nth-child(even').style.background = 'purple';
document.querySelector('li:nth-child(even').textContent = 'Hello World';