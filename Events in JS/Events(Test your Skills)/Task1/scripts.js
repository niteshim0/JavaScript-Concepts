const btn = document.querySelector('.off');

// Add your code here
btn.addEventListener('click', ()=> {
  const btnState = btn.getAttribute('class');
  if (btnState === 'off') {
    btn.setAttribute('class', 'on')
    btn.textContent = `Machine is ${btn.getAttribute('class')}`;
  } else{
    btn.setAttribute('class', 'off')
    btn.textContent = `Machine is ${btn.getAttribute('class')}`;
  }
})