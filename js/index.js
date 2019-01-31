const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
document.querySelector('nav').id ='navi';
let anchors = document.getElementsByTagName('a');



let ctaDiv = document.getElementsByClassName('cta-text');


let headingOne = document.querySelector('h1');
document.querySelector('button').id = "startedBtn";

let ctaImg = document.getElementById('cta-img');

let textContent = document.getElementsByClassName('text-content');
let headingFour = document.getElementsByTagName('h4');
let para = document.getElementsByTagName('p');
let midImg = document.getElementById('middle-img');

//Images src
logo.src = "img/logo.png";
ctaImg.src = "img/header-img.png";
midImg.src = "img/mid-page-accent.jpg";

//Navigation
anchors[0].textContent = "Services";
anchors[0].style.color = "green";

anchors[1].textContent = "Product";
anchors[1].style.color = "green";

anchors[2].textContent = "Vision";
anchors[2].style.color = "green";

anchors[3].textContent = "Features";
anchors[3].style.color = "green";

anchors[4].textContent = "About";
anchors[4].style.color = "green";

anchors[5].textContent = "Contact";
anchors[5].style.color = "green";

let anchorOne = document.createElement('A');
anchorOne.textContent ='Reviews';
anchorOne.setAttribute('href', '#');
anchorOne.style.color = 'green';

let anchorTwo = document.createElement('A');
anchorTwo.textContent = 'Blog';
anchorTwo.href = "#";
anchorTwo.style.color = 'green';

navi.prepend(anchorTwo);
navi.appendChild(anchorOne);




//CTA
headingOne.style = 'white-space: pre';
headingOne.textContent = "Dom \r \n";
headingOne.textContent += 'Is \r\n';
headingOne.textContent += 'Awesome';


startedBtn.textContent = 'Get Started';

//Main Content
headingFour[0].textContent = 'Features';
para[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

headingFour[1].textContent = 'About';
para[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

headingFour[2].textContent = 'Services';
para[2].textContent =
  "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

headingFour[3].textContent = 'Product';
para[3].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

headingFour[4].textContent = 'Vision';
para[4].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et.Suspendisse vel tempus odio, in interdutm nisi.Suspendisse eu ornare nisl.Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

headingFour[5].textContent = 'Contact';
para[5].style = 'white-space: pre'
para[5].textContent = "123 Way 456 Street \r\n";
para[5].textContent += "Somewhere, USA";
para[6].textContent = '1 (888) 888-8888';
para[7].textContent = 'sales@greatidea.io';

para[8].textContent = 'Copyright Great Idea! 2018';
