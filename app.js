
function addTodo() {
	const inputElement = document.querySelector('input');
	const value = inputElement.value;
	if (value === '') {
		return; // Stop here.
	}

	const todoContainer = document.createElement('div');
	todoContainer.className = 'flex justify-between items-center';

	const todoTitle = document.createElement('h4');
	todoTitle.textContent = value;

	const doneButton = document.createElement('button');
	doneButton.className = 'bg-green-500 p-2 rounded-lg';
	doneButton.textContent = 'Done';
	doneButton.onclick = markAsDone;

	todoContainer.appendChild(todoTitle);
	todoContainer.appendChild(doneButton);

	const allTodosContainer = document.querySelector('#todosContainer');
	allTodosContainer.appendChild(todoContainer);

	inputElement.value = '';
}

function markAsDone(event) {
	const clickedButton = event.target;
	clickedButton.classList.add('hidden');

	const todoItem = clickedButton.previousElementSibling;
	todoItem.classList.add('line-through');
}
//Maybe there is some bug , because i can't debugg it i'm in the sky remember 😁
//Instead of onclick event , see the magic of addEventListener
const allDoneButtons =document.querySelector('.alldone_parent');

allDoneButtons.addEventListener('click',function(e){
	const individualButton = e.target.closest('.bg-green-500');

	individualButton.className = 'hidden'

	const findingchildH4 = individualButton.previousElementSibling;
	findingchildH2.className = "line-through";

	//Removing the div container of the buttons
	// const removeParentOfTheButtons = individualButton.parentElement.remove();
})