const INPUT = document.getElementById("new-item");
const MY_LIST = document.getElementById("to-do-list");

//images to prepend to the list items
const UNCHECKED_ICON = '<svg onclick="checkItem(this)" viewBox="0 0 448 512" width="1em" title="empty-square"><path d="M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-40,-40 c21.49 0 48-26.51 48 -48 v-272 c0 -21.49 -26.51 -48 -48 -48 h-272 c-21.49 0 -48 26.51 -48 48 v272 c0 21.49 26.51 48 48 48 z" /></svg>';
const CHECKED_ICON = '<svg onclick="uncheckItem(this)" viewBox="0 0 448 512" width="1em" style="fill:gray;" title="check-square"><path d="M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z" /></svg>';


INPUT.focus();

/**
*   Add new list item when "Add Item" button is clicked
**/
function addNewItem() {
  let newItem;
  let newItemText;
  
  if (INPUT.value != "") {
    newItem = document.createElement("li");
    newItemText = INPUT.value;
    newItem.innerHTML = UNCHECKED_ICON + " " + newItemText;
    INPUT.value = "";
    
    MY_LIST.appendChild(newItem);
  }
  
  INPUT.focus();
}

/**
* Remove every list item when the "Clear List" button is clicked
**/
function clearList() {
  let allListItems = document.querySelectorAll("#to-do-list li");
  
  for (let _i = 0; _i < allListItems.length; _i++) {
    allListItems[_i].remove();
  }
  
  // allListItems.forEach((_li) => _li.remove());
  INPUT.focus();
}

/**
* When user checks the box in front of an item, strike through the item
**/
function checkItem(_icon) {
  let thisItem = _icon.parentElement;
  let thisText = thisItem.innerText;
  
  thisItem.style.color = "gray";
  thisItem.style.textDecoration = "solid gray line-through 0.1em";
  
  thisItem.innerHTML = CHECKED_ICON + " " + thisText;
}

/**
* When user unchecks the box in front of an item, return the item style to normal
**/
function uncheckItem(_icon) {
  let thisItem = _icon.parentElement;
  let thisText = thisItem.innerText;
  
  thisItem.style.color = "black";
  thisItem.style.textDecoration = "none";
  
  thisItem.innerHTML = UNCHECKED_ICON + " " + thisText;
}

/**
* When user presses Enter key, call the function to add a new list item
**/
window.addEventListener("keydown", (_key) => {
  if (_key.code == "Enter") addNewItem();
});

/**
* Prevent the page from reloading so list entries aren't lost
**/
window.addEventListener("beforeunload", function(event) {
  event.preventDefault();
  event.returnValue = 'Are you sure you want to leave?';
  return 'Are you sure you want to leave?'; // for legacy browsers
});
