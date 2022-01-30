let content = document.querySelector('.js-generated.content')

let header = document.createElement('h1') // scripts the dog name
header.setAttribute('class', 'dog-name')
header.append('Rizzo')
content.append(header)

let dogContent = document.createElement('div') // this creates a element in the div called dog content
header.setAttribute('class', 'dog-content')

let dogImage = document.createElement('img') //this is the image of the dog
dogImage.setAttribute('class','dog-image')
dogImage.setAttribute('class', './assets/rizzo.jpg')