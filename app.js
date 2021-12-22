
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});
// local reviews data
const reviews = [{
  id: 1,
  name: "Killua Zoldyck",
  job: "Human Resources",
  img: "https://i.pinimg.com/originals/ec/00/fe/ec00feb1814759be4c81dd31448e4afa.jpg",
  text: "I love working at Air Canada! It allows me to travel with my crew all over the world! I love going to places such as Whale Island and Yorknew City!",
},
{
  id: 2,
  name: "Kyojuro Rengoku",
  job: "Hashira",
  img: "https://cdn.realsport101.com/images/ncavvykf/epicstream/5de4dde1e39a25c8405551ed4ba903f1c6f04717-2300x1348.jpg?rect=0,26,2300,1294&w=686&h=386&auto=format",
  text: "Being able to travel to places! I can use my power to protect even more people! I love this job!",
},
{
  id: 3,
  name: "peter jones",
  job: "intern",
  img: "https://www.indiewire.com/wp-content/uploads/2020/02/spider_man_far_from_home_peter_parker_1562394390.0.jpg",
  text: "I'm so glad I am able to work in the Stark Internship! For a high school kid like me, it is such a great opportunity to learn more about the world!"
},
{
  id: 4,
  name: "Batman",
  job: "The Boss",
  img: "https://www.indiewire.com/wp-content/uploads/2021/08/Robert-Pattinson-Batman.jpeg?w=780",
  text: "We provide you with a great work space, as well as a friendly crew. Join us today and see what it's all about!",
},
];

// select items
const img = document.getElementById('person-img')
const author = document.getElementById('author')
const job = document.getElementById('job')
const info = document.getElementById('info')

const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")
const randomBtn = document.querySelector(".random-btn")

//set starting item
let currentItem = 0;

//load initial item
window.addEventListener('DOMContentLoaded', function () {
showPerson(currentItem);

});

// show person based on item

function showPerson(person) {
const item = reviews[person];
img.src = item.img;
author.textContent = item.name;
job.textContent = item.job;
info.textContent = item.text;
}

//show next person 

nextBtn.addEventListener('click', function () {
currentItem++;
if (currentItem > reviews.length - 1) {
  currentItem = 0;
}
showPerson(currentItem);
});
// show prev person 
prevBtn.addEventListener('click', function () {
currentItem--;
if (currentItem < 0) {
  currentItem = reviews.length - 1;
}
showPerson(currentItem);
});

// show random person
randomBtn.addEventListener('click', function(){
currentItem = Math.floor(Math.random() * reviews.length);
showPerson(currentItem);
});



