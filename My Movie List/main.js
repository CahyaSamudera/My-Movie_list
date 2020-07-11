var form = document.querySelector('.addForm');
var itemList = document.querySelector('.movies-title');
var filter = document.querySelector('.input');

// form submit event
form.addEventListener('submit', addItem);
// delete event
itemList.addEventListener('click', removeItem);
// filter event

filter.addEventListener('keyup', filterItems);

function addItem(e) {
  e.preventDefault();

  // get input value
  var newItem = document.querySelector('.item').value;

  // create new li element
  var li = document.createElement('li');
  //   add class
  li.className = 'movies-title-list';
  // add text node with input value
  li.appendChild(document.createTextNode(newItem));

  //   create delete button element
  var deleteBtn = document.createElement('button');

  //   add classes to span element
  deleteBtn.className = 'delete';

  // append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // append button to li
  li.appendChild(deleteBtn);

  // append li to list
  itemList.appendChild(li);
}

// Remove item

function removeItem(e) {
  if (e.target.classList.contains('delete')) {
    if (confirm('Are you sure?')) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e) {
  // convert to lowecase
  var text = e.target.value.toLowerCase();
  // get list
  var items = itemList.getElementsByTagName('li');
  // convert to an array
  Array.from(items).forEach(function (item) {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
