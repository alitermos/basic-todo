// fetch place-holder field
const taskValueField = document.getElementById("place-holder");


// fetch add-item button
const addTaskButton = document.getElementById('add-item');


// register an event listener to 'add-item' button once clicked
addTaskButton.addEventListener('click', createTask);


// register an event listener to 'enter-key' once clicked
// using an annonymous arrow function
taskValueField.addEventListener('keyup',(e) => {
  if (e.keyCode === 13) {
    createTask();
  }
});


// a function that creates a new task once called
function createTask() {

  // store current value of place-holder field
  let taskValue = taskValueField.value;

  // check if value is null
  if (taskValue.trim() === '') {
    alert('Enter a task first!')
  }else{

    // create new list item
    let newItem = document.createElement('span');
    newItem.innerHTML = taskValue;
    newItem.setAttribute('class','item-content');
    newItem.setAttribute('id','no-strike');
    newItem.addEventListener('click', function(){
      newItem.setAttribute('id', 'on-strike-out')
    });

    // create new button 
    let newButton = document.createElement('button');
    newButton.innerHTML = 'x';
    newButton.setAttribute('class','remove-item');
    newButton.setAttribute('onclick','parentNode.remove()');

    // creat a list item
    let newListItem = document.createElement('li');
    newListItem.setAttribute('class','todo-item-container');
    newListItem.appendChild(newButton);
    newListItem.appendChild(newItem);

    // fetch parent of list items
    const itemList = document.getElementById('todo-list');
    itemList.appendChild(newListItem);
    
    // erase value of place-holder field
    taskValueField.value = '';
  }

}