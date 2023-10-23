let parentList = document.getElementById('parent-list');

parentList.addEventListener('click', function(event) {
  // Checking if the clicked element is an <li> element
  if (event.target && event.target.nodeName === 'LI') {
    // Handling the event for the clicked <li> element
    console.log('Clicked on: ', event.target.textContent);
  }
});

document.querySelector("#form").addEventListener('keyup', (e) => {
  if (e.target.hasAttribute('data-uppercase')) {
    e.target.value = e.target.value.toUpperCase();
  }
});