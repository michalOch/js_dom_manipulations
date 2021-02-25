// LOCAL & SESSION STORAGE

// set local storage item
// localStorage.setItem('name', 'John');
// localStorage.setItem('age', '30');
// localStorage.setItem('job', 'programmer');

// set session storage item
// sessionStorage.setItem('name', 'Beth');

// remove from storage
// localStorage.removeItem('name');

// get from storage
// let name = localStorage.getItem('name');
// let age = localStorage.getItem('age');
// let job = localStorage.getItem('job');

// console.log(`User: ${name} is ${age} and work as a ${job}.`);

// // clear local storage
// localStorage.clear;

document.querySelector('form').addEventListener('submit', function (e) {
  const task = document.getElementById('task').value;

  let tasks;

  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
  alert('Task saved');

  e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function (task) {
  console.log(task);
});