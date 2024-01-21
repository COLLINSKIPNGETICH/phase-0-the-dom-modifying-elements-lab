// Create a new div element
const element = document.createElement("div");
document.body.append(element);

// Create and append an unordered list with list items
const ul = document.createElement("ul");
for (let i = 0; i < 3; i++) {
  const li = document.createElement("li");
  li.textContent = (i + 1).toString();
  ul.append(li);
}
element.append(ul);

// Add Elements to the DOM via innerHTML
const main = document.getElementById("main");
main.innerHTML = "<h1>Poodles!</h1><h3>...</h3><p><em>By: Byron Q. Poodle, Esq., BA.</em></p>";

// Change Properties on DOM Nodes
element.style.height = "300px";
element.style.backgroundColor = "#27647B";
element.textContent = "You've changed what's on the screen!";
element.style.fontSize = "24px";
element.style.marginLeft = "30px";
element.style.lineHeight = 2;

// Change class name using className
element.className = "pet-listing dog";

// Alternatively, change class using classList
element.classList.remove("dog");
element.classList.add("cat", "sale");

// Remove Elements from the DOM
const secondChild = ul.querySelector("li:nth-child(2)");
ul.removeChild(secondChild);

// Remove the whole unordered list
ul.remove();

// Remove the 'main' element with id 'main'
const mainElement = document.getElementById("main");
mainElement.remove();

// Create a new h1 element with id 'victory'
const newHeader = document.createElement("h1");
newHeader.id = "victory";

// Set the content of the new header
newHeader.textContent = "victory is the champion"; // Replace 'YOUR-NAME' with the actual name

// Append the new header to the body or another appropriate parent element
document.body.append(newHeader);

// Export newHeader for testing purposes (optional)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = newHeader;
}
