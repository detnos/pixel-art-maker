window.addEventListener('DOMContentLoaded', (event) => {
    //loop to create individual items
    for (let i = 0; i < 40; i++) {
        for (let j = 0; j < 108; j++) {
        newItem = document.createElement('div')
        newItem.setAttribute('class', 'item' + i + '-' + j)

        document.querySelector("body > div > div.container").appendChild(newItem)
        }
    }

    //event listener for where the user clicks
    document.querySelector("body > div > div.container").addEventListener('click', event => {
        c = event.target;
        c.setAttribute('style', 'background-color: green');
    })
})

