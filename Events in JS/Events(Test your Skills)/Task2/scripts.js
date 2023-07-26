const buttonBar = document.querySelector('.button-bar');

  // Add your code here
buttonBar.addEventListener('click', (event) => {
  const color = event.target.getAttribute('data-color');
  buttonBar.style.backgroundColor = color; 
});