'use strict';

let profileSlider1 = document.getElementById('gallerySlider1');
let profilePicture1 = document.getElementById('profilePicture1');
let profileName1 = document.getElementById('profileName1');
let profileLocation1 = document.getElementById('profileLocation1');
let profileAboutMe1 = document.getElementById('profileAboutMe1');
let profileSlider2 = document.getElementById('gallerySlider2');
let profilePicture2 = document.getElementById('profilePicture2');
let profileName2 = document.getElementById('profileName2');
let profileLocation2 = document.getElementById('profileLocation2');
let profileAboutMe2 = document.getElementById('profileAboutMe2');
// This is for the slider on the galleries. I learned it from https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_slideshow_self
//Creating Index for Slide 1
let slideIndex1 = 1;
showDivs1(slideIndex1);
function plusDivs1(n) {
  showDivs1(slideIndex1 += n);
}
function showDivs1(n) {
  let i;
  let x = document.getElementsByClassName('mySlides1');
  if (n > x.length) {slideIndex1 = 1;}
  if (n < 1) {slideIndex1 = x.length;}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }
  x[slideIndex1-1].style.display = 'block';
}
let slideIndex2 = 1;
showDivs2(slideIndex2);
function plusDivs2(n) {
  showDivs2(slideIndex2 += n);
}
function showDivs2(n) {
  let j;
  let x = document.getElementsByClassName('mySlides2');
  if (n > x.length) {slideIndex2 = 1;}
  if (n < 1) {slideIndex2 = x.length;}
  for (j = 0; j < x.length; j++) {
    x[j].style.display = 'none';
  }
  x[slideIndex2-1].style.display = 'block';
}
let slideIndex3 = 1;
showDivs3(slideIndex3);
function plusDivs3(n) {
  showDivs3(slideIndex3 += n);
}
function showDivs3(n) {
  let k;
  let x = document.getElementsByClassName('mySlides3');
  if (n > x.length) {slideIndex3 = 1;}
  if (n < 1) {slideIndex3 = x.length;}
  for (k = 0; k < x.length; k++) {
    x[k].style.display = 'none';
  }
  x[slideIndex3-1].style.display = 'block';
}

// Contructor to build my items and add them to the array allProductArray
class Photographer {
  static allPhotographerObjects = [];
  static photographersQue = [];
  constructor(name, location, aboutMe, category, reviews) {
    this.name = name;
    this.profilePic = `img/${name}/${name}.jpg`;
    this.location = location;
    this.aboutMe = aboutMe;
    this.category = category;
    this.reviews = reviews;
    this.photoArray = [];
    for(let i = 1; i < 11; i++){
      this.photoArray[i-1] = `img/${name}/${i}.jpg`
    }
    Photographer.allPhotographerObjects.push(this);
  }
}


let sara = new Photographer('Sara', 'Seattle, Wa', '25 year old photographer living my best life', 'Family', 'Very professional. We were very happy with our results');
let paul = new Photographer('Paul', 'Madrid, Spain', 'I live in Madrid and have 10 years of experience', 'Wedding','He did Great');
console.log(Photographer.allPhotographerObjects[0].photoArray.length);
// let profileSlider1 = document.getElementsByClassName("profileSlider1");
function renderPhotographers(){
for(let i =0; i < 1; i++ ){
  let profileImg = document.createElement("img");
  profileImg.src = `${Photographer.allPhotographerObjects[i].profilePic}`;
  profilePicture1.appendChild(profileImg);
  let profileName = document.createElement("h2");
  profileName.textContent = `${Photographer.allPhotographerObjects[i].name}`;
  profileName1.appendChild(profileName);
  let profileLocation = document.createElement("h2")
  profileLocation1.textContent = `${Photographer.allPhotographerObjects[i].location}`
  profileLocation1.appendChild(profileLocation);
  let profileAboutMe = document.createElement("p")
  profileAboutMe1.textContent = `${Photographer.allPhotographerObjects[i].aboutMe}`
  profileAboutMe1.appendChild(profileAboutMe);

  for(let j=0; j < Photographer.allPhotographerObjects[i].photoArray.length; j++){
    let profileSlider = document.createElement("img");
    profileSlider.classList.add(`mySlides${i+1}`);
    profileSlider.src = `${Photographer.allPhotographerObjects[i].photoArray[j]}`;
    profileSlider1.appendChild(profileSlider);
  }
}
}
renderPhotographers();
// let profileSlider1 = document.getElementById('gallerySlider1');
// let profilePicture1 = document.getElementById('profilePicture1');
// let profileName1 = document.getElementById('profileName1');
// let profileLocation1 = document.getElementById('profileLocation1');
// let profileAboutMe1 = document.getElementById('profileAboutMe1');
