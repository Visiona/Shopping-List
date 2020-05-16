var button = document.querySelector('button#enter');
var ul = document.querySelector('ul');
var input = document.querySelector('input#userinput');
var lis = document.querySelectorAll('li');

function checkInputLength() {
	return input.value.length;
}

function addDeletButton(li) {
	addStrokeListenersToListItems(li)
	var deleteButton = document.createElement('button');
	deleteButton.className = 'btn btn-danger delete';
	deleteButton.addEventListener("click", function() {
		ul.removeChild(li);
	})
	deleteButton.appendChild(document.createTextNode('x'))
	li.prepend(deleteButton);
}

function addDeleteButtonToExisting() {
	lis.forEach(function(item) {
		if (!Boolean(item.childNode)) {
			addDeletButton(item);
		};
	});
}

function transferItemToList() {
		var li = document.createElement('li');
		var text = document.createTextNode(input.value);
		addDeletButton(li);
		li.appendChild(text);
		ul.appendChild(li);
		input.value = '';
}

function addListItemAfterClick() {
	if (checkInputLength() > 0) {
		transferItemToList();
	}
}

function addListItemAfterEnter(e) {
	if (e.key === 'Enter' && checkInputLength() > 0) {
		transferItemToList();
	}
}


function addStrokeListenersToListItems(item) {
	item.addEventListener("click", function() {
		item.classList.toggle('done');
	})
}

addDeleteButtonToExisting();

button.addEventListener("click", addListItemAfterClick);

input.addEventListener("keypress", addListItemAfterEnter);

