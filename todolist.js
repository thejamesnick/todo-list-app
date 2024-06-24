// Add an event listener to the form to handle submission.

document.getElementById('task-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the value of the input field
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value;

    if (taskText === '') return; // If the input field is empty, do nothing

    const li = document.createElement('li');
    li.textContent = taskText;

    // Creating the complete button
    const completeIcon = document.createElement('span');
    completeIcon.textContent = '✅';
    completeIcon.className = 'icon';
    completeIcon.addEventListener('click', function() {
        li.style.textDecoration = 'line-through'; // Add a line-through style to the list item
        document.getElementById('completed-list').appendChild(li); // Move the list item to the completed tasks list
        completeIcon.remove(); // Remove the complete button
    });

    // Creating the delete button
    const deleteIcon = document.createElement('span');
    deleteIcon.textContent = '❌';
    deleteIcon.className = 'icon';
    deleteIcon.addEventListener('click', function() {
        li.remove(); // Remove the list item
    });

    // Append the complete and delete buttons to the list item

    li.appendChild(completeIcon);
    li.appendChild(deleteIcon);

    // Append the list item to the tasks list
    document.getElementById('task-list').appendChild(li);

    // Reset the input field
    taskInput.value = '';
});