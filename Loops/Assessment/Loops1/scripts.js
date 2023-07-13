const myArray = ['tomatoes', 'chick peas', 'onions', 'rice', 'black beans'];
    const list = document.createElement('ul');

    // Add your code here
    for(const elem of myArray){
      const listItem = document.createElement('li');
      listItem.append(elem);
      list.appendChild(listItem);
    }
    const section = document.querySelector('section');
    section.appendChild(list);
