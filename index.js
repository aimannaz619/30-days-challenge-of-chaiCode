// Activity 1 Selecting and manipulating elements

// TASK 1 Select an element by its ID and change its text content

function changeContent() {
  const el = document.getElementById("para");
  el.innerText = "New Change";
}

//  TASK 2 Select an element by its class and change its background color

function changeColor() {
  const el = document.querySelector(".para");
  el.style.backgroundColor = "blue";
}

// TASK 3 Create a new div element with some text and append it to the body

function changeText() {
  const el = document.createElement("div");
  const elementText = document.createTextNode("New Element");

  const newElement = el.appendChild(elementText);
  document.body.appendChild(newElement);
}

// TASK 4 Create a new li element and add it to an exisiting ul list

function insertNewElement() {
  const li = document.createElement("li");

  const ul = document.querySelector("ul");
  li.innerText = "Company";

  ul.appendChild(li);
}

// TASK 5 Select an html element and remove it from the DOM

function removeElement() {
  const removedItem = document.getElementById("removed");
  removedItem.remove();
}

// TASK 6 Remove the last child of a specific html element

function removeLastChildElement() {
  const element = document.getElementById("list");

  element.lastElementChild.remove();
}

// TASK 7 Select an html element and change one of it's attributes (e.g src of an img tag)

function viewItem() {
  const element = document.querySelector("img");
  console.log(
    element.setAttribute(
      "src",
      "data:image/jpeg;base64,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"
    )
  );
}

// TASK 8 Add and remove a css class to and from an html element

function updateClass() {
  const el = document.querySelector("img");
  console.log(el.hasAttribute("class", "img-class"), "el");

  if (el.hasAttribute("class", "img-class")) {
    el.removeAttribute("class", "img-class");
  } else {
    el.setAttribute("class", "img-class");
  }
}

// Activity 5 Event Handling

//  TASK 9 Add a click event listener to a button that changes the text content of a paragraph

// Already done

// TASK 10 Add a mouseover event listener to an element that changes its border color

const el = document.querySelector("img");

console.log(el, "el")

el.addEventListener("mouseover", () => {
  el.style.borderColor = "red"
})


el.addEventListener("mouseout", () => {
  el.style.borderColor = ""
})

