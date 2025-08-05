//your code here!
const list = document.getElementById('list'); // Assuming your UL has id="list"
let counter = 1;

// Function to add list items
function addItems(count) {
  for (let i = 0; i < count; i++) {
    const li = document.createElement('li');
    li.textContent = `Item ${counter++}`;
    list.appendChild(li);
  }
}

// Add initial 10 items
addItems(10);

// Listen for scroll
window.addEventListener('scroll', () => {
  // If user reached the bottom
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    addItems(2); // Add 2 more items
  }
});

