
//loop to create individual items
for (i = 5; i < 101; i++) {
    newItem = document.createElement('div')
    newItem.setAttribute('class', 'item' + i)

    document.querySelector("body > div > div.container").appendChild(newItem)
}

//event listener for where the user clicks
document.querySelector("body > div > div.container").addEventListener('click', event => {
    c = event.target;
    c.setAttribute('style', 'background-color: green');
})