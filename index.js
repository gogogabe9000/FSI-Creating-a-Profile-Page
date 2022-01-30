let content = document.querySelector('.js-generated.content')
let header = document.createElement('h1')
header.setAttribute('class', 'dog-name')
header.append('Rizzo')
content.append(header)

let dogImage = document.createElement('img')
dogImage.setAttribute('class','dog-image')
dogImage.setAttribute('class', './assets/rizzo.jpg')