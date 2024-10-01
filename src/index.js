// 👉 1- Finding an element on the page and saving a reference to it
//  Older: getElementById, getElementsByTagName, getElementsByClassName
//  Newer: querySelector, querySelectorAll
//  Select the following single elements from the div.card

// A- finding across the entire DOM
const header = document.querySelector('header');
const logoTitle = document.getElementById('logoTitle');
const firstCard = document.querySelector('.card');
// B- finding within one particular element
const imageFirstCard = firstCard.querySelector('img');
const titleFirstCard = firstCard.querySelector('h2');
const subtitleFirstCard = firstCard.querySelector('h3');
const textFirstCard = firstCard.querySelector('p');
// C- traversing with dot notation
const link1FirstCard = textFirstCard.nextElementSibling
const link2FirstCard = link1FirstCard.nextElementSibling


// 👉 2- Finding collections of elements in the DOM
// A- Find all the anchor tags inside the nav element
const links = document.querySelectorAll("nav a");
// B- Loop over the links and console.log their text content
links.forEach((link) => {console.log(link.textContent)});
// C- Turn the collection of links into a real array
const linksArray = Array.from(links);
// D- Use .filter to find the anchor tag with the textContent of "Home"
const homeLink = linksArray.filter(link =>  link.textContent === 'Home')


// 👉 3- Changing an element's text content
//  A- Change the cat-related content into dog-related content
//  B- Have the students research online the difference between textContent and innerText
logoTitle.textContent = 'Bloomtech Dog';
titleFirstCard.textContent = 'About Dogs';
subtitleFirstCard.textContent = 'A Little Story';
textFirstCard.textContent = 'Dogs are loyal, intelligent, and affectionate animals that have been human companions for thousands of years.'
link2FirstCard.textContent = 'Dog Ipsum';

// 👉 4- Changing any property
//  A- Using dot notation to change a few attributes
link2FirstCard.href = 'https://doggoipsum.com/';
link1FirstCard.href = 'https://unsplash.com/s/photos/dogs';
imageFirstCard.setAttribute('src', 'https://media.istockphoto.com/id/2050721742/photo/border-collie-holding-a-golden-maple-leaf-in-autumn-splendor.webp?s=2048x2048&w=is&k=20&c=wNKbdN8FMRb3Yva06jBsxr-luzB2kR8tcjxJTAyJtwM=')
//  B- Using .setAttribute to change a few attributes
imageFirstCard.setAttribute('alt', 'Dog image')

// 👉 5- Changing the styling of an element
//  A- By changing the class names on the element with the classList API
logoTitle.classList = 'h1-Element';
logoTitle.classList.add('logo-title')
//  B- By manipulating inline styles on the element
logoTitle.style.color = 'yellow'
titleFirstCard.style.color = 'blue';
textFirstCard.style.textAlign = 'justify'

// 👉 6- Creating new elements from scratch and appending them
// Create a new link inside the nav for "Blog"
const blogLink = document.createElement('a');
blogLink.textContent = 'Blog';
blogLink.href = '#';
document.querySelector('#mainNav').appendChild(blogLink);


// 👉 7- Making a copy of the card and appending it to the card group
// DOM nodes can only exist in one spot in the DOM
// We cannot append the same copy multiple times
const copyDom = firstCard.cloneNode(true);
document.querySelector('.card-group').appendChild(copyDom)


// 👉 8- Removing an existing element and putting it back [STRETCH if time allows]
header.remove()
document.body.prepend(header)

// 👉 9- Show to students the insertAdjacentHTML method [STRETCH if time allows]
