
// SMOOTH SCROLL

document.querySelectorAll('.nav-link').forEach(link => {

link.addEventListener('click', function(e){

e.preventDefault()

const target = document.querySelector(this.getAttribute('href'))

target.scrollIntoView({
behavior:'smooth'
})

})

})


// ACTIVE MENU ON SCROLL

const sections = document.querySelectorAll("section")
const navLinks = document.querySelectorAll(".nav-link")

window.addEventListener("scroll", () => {

let current = ""

sections.forEach(section => {

const sectionTop = section.offsetTop - 120

if(pageYOffset >= sectionTop){
current = section.getAttribute("id")
}

})

navLinks.forEach(link => {

link.classList.remove("active")

if(link.getAttribute("href").includes(current)){
link.classList.add("active")
}

})

})



// state
const counters = document.querySelectorAll('.counter');

const speed = 200;

counters.forEach(counter => {

const updateCount = () => {

const target = +counter.getAttribute('data-count');

const count = +counter.innerText;

const inc = target / speed;

if(count < target){

counter.innerText = Math.ceil(count + inc);

setTimeout(updateCount, 20);

}else{

counter.innerText = target;

}

};

updateCount();

});

// gallery

var swiper = new Swiper(".gallerySwiper", {

slidesPerView:4,
spaceBetween:25,
loop:true,

pagination:{
el:".swiper-pagination",
clickable:true,
},

autoplay:{
delay:2500,
disableOnInteraction:false
},

breakpoints:{

320:{
slidesPerView:1
},

576:{
slidesPerView:2
},

768:{
slidesPerView:3
},

1024:{
slidesPerView:4
}

}

});


// brands
var swiper = new Swiper(".brandSwiper", {

slidesPerView:6,
spaceBetween:40,
loop:true,
speed:3000,

autoplay:{
delay:0,
disableOnInteraction:false
},

breakpoints:{

320:{
slidesPerView:2
},

576:{
slidesPerView:3
},

768:{
slidesPerView:4
},

1024:{
slidesPerView:6
}

}

});

// review

var swiper = new Swiper(".feedbackSwiper", {

loop:true,
spaceBetween:20,

pagination:{
el:".swiper-pagination",
clickable:true,
},

autoplay:{
delay:3500,
disableOnInteraction:false
}

});


// faq
document.querySelectorAll(".faq-question").forEach(button => {

button.addEventListener("click", () => {

const item = button.parentElement;

document.querySelectorAll(".faq-item").forEach(i=>{
if(i!==item){
i.classList.remove("active")
i.querySelector(".icon").textContent="+"
}
})

item.classList.toggle("active")

button.querySelector(".icon").textContent =
item.classList.contains("active") ? "−" : "+"

})
})
// SCROLL TO TOP BUTTON

const scrollBtn = document.getElementById("scrollTopBtn")

window.addEventListener("scroll",function(){

if(window.scrollY > 300){

scrollBtn.style.display = "flex"

}else{

scrollBtn.style.display = "none"

}

})

scrollBtn.addEventListener("click",function(){

window.scrollTo({

top:0,
behavior:"smooth"

})

})
// BOOKING MODAL

const bookingModal = document.getElementById("bookingModal")
const openButtons = document.querySelectorAll(".open-booking")
const closeModal = document.getElementById("modalClose")

openButtons.forEach(btn => {

btn.addEventListener("click",function(e){

e.preventDefault()

bookingModal.classList.add("show")

})

})

closeModal.addEventListener("click",function(){

bookingModal.classList.remove("show")

})

document.querySelector(".booking-modal-overlay").addEventListener("click",function(){

bookingModal.classList.remove("show")

})