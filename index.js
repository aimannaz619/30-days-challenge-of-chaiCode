// Activity 1 Basic Event Handling

// TASK 1 Add a click event listener to a button that changes the text content of a paragraph

document.getElementById("changeContent").addEventListener("click", function () {
  document.getElementById("para").innerText = "After Changing";
});

// TASK 2 Add a double click event listener to an image that toggles its visibility
document
  .getElementById("toggleImage")
  .addEventListener("dblclick", function () {
    document.getElementById("toggleImage").src =
      "https://images.unsplash.com/photo-1596619333466-296d705c4007?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  });

//   Activity 2 Mouse Events

// TASK 3 Add a mouseOver Event listener to an element that changes its background color

document
  .getElementById("imgContainer")
  .addEventListener("mouseover", function () {
    const el = document.getElementById("imgContainer");

    el.style.backgroundColor = "rgb(96, 193, 208)";
  });

//  TASK 4 Add a mouseout event listener to an element that resets its background color
document
  .getElementById("imgContainer")
  .addEventListener("mouseout", function () {
    const el = document.getElementById("imgContainer");

    el.style.backgroundColor = "beige";
  });

// Activity 3

// Keyboard Events

// TASK 5 Add a keydown event listener to an input field that logs the key passed to the console

document.getElementById("name").addEventListener("keydown", function (val) {
  console.log("?");
  console.log(val.key, "key down value");
});

// TASK 6 Add a keyup event listener to an input field that displays the current value in a paragraph

const inputField = document.getElementById("name");
inputField.addEventListener("keyup", function (val) {
  console.log("?");
  console.log(val, "val");
  const el = document.getElementById("yourname");
  el.innerText = inputField.value;
});

// Activity 4 Form Events

// TASK 7 Add a submit event listener to a form that prevents the default submission and logs the form data to the console
const form = document.getElementById("myForm");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevents default form submission

  const formData = new FormData(form); // Creates a FormData object

  console.log(formData.forEach, "formData");

  formData.forEach((value, key) => {
    console.log(`${key}: ${value}`); // Logs each key-value pair
  });
});

// TASK 8 Add a change event listener to a select drop down that displays the selected value in a paragraph

const selectedEl = document.getElementById("nationality");
console.log(selectedEl.value, "selected El");
selectedEl.addEventListener("change", function (e) {
  console.log(selectedEl.value, "selectedElement Value");
  console.log(selectedEl.selectedIndex, "selectedEl");

  console.log(selectedEl.options[selectedEl.selectedIndex].text);

  const el = document.getElementById("nationalityVal");
  el.innerText = selectedEl.value;
  console.log(el, "el");
});

// Activity 5 Event Delegation

// TASK 9 Add a click event listener to a list that logs the text content of the clicked list item using event delegation

const desginationList = document.getElementById("desginationList");

desginationList.addEventListener("click", function (e) {
  console.log(desginationList, "desginationList");
  console.log(e.target.innerText);
});

// TASK 10 Add an event listener to a parent element that listens for events from dynamically added child elements

const button = document.getElementById("addmore");

button.addEventListener("click", function () {
  console.log("add more");
  const newElement = document.createElement("li");
  newElement.innerText = "Add more"
  desginationList.appendChild(newElement);

  console.log(desginationList)
});
