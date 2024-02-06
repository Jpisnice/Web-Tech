// script.js

// Create a link element to include the CSS file
const cssFile = document.createElement('link');
cssFile.rel = 'stylesheet';
cssFile.href = '../styles/navbar.css'; // Replace 'styles.css' with the path to your CSS file

// Append the link element to the head of the document
document.head.appendChild(cssFile);

// Create navbar elements dynamically with the 'navbar' class
const navbar = document.createElement('nav');
navbar.classList.add('navbar'); // Add the 'navbar' class
navbar.innerHTML = `
  <a href="../public/index.html">Home</a>
  <a href="../public/about.html">About</a>
  <a href="../public/sales.html">Sales</a>
  <a href="#contact">Contact</a>
  <a class="pfp" href="#profile">Profile</a>
`;

// Append the navbar to the body or another container element
document.body.appendChild(navbar);

// Add click event listeners to the links
const links = document.querySelectorAll('.navbar a');

links.forEach(link => {
  link.addEventListener('click', (event) => {
    // Prevent the default behavior of the anchor tag
    

    // Remove 'active' class from all links
    links.forEach(l => l.classList.remove('active'));

    // Add 'active' class to the clicked link
    link.classList.add('active');

    // Add any additional actions you want for the clicked link
  });
});

// Set initial active link based on the current page
function setActiveLink() {
  const currentPath = window.location.hash; // Get hash part of the URL
  links.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    }
  });
}

// Call the function to set the initial active link
setActiveLink();
