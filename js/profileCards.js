'use strict';

// This is for the slider on the galleries. I learned it from https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_slideshow_self
//Creating Index for Slide 1

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
    this.creatingPhotoGallery = function (){
    for(let i = 1; i < 11; i++){
      this.photoArray[i-1] = `img/${name}/${i}.jpg`
    }
    }
    this.creatingPhotoGallery();
    Photographer.allPhotographerObjects.push(this);
  }
}

let sara = new Photographer('Sara', 'Seattle, Wa', '25 year old photographer living my best life', 'Family', 'Very professional. We were very happy with our results');
let victor = new Photographer('Victor', 'Paris, France', 'I take pictures', 'Portaits', 'Really happy with the photo that he took. It was a great present for my husband.')
let paul = new Photographer('Paul', 'Madrid, Spain', 'I live in Madrid and have 10 years of experience', 'Wedding','He did Great');
let sean = new Photographer('Sean', 'Denver, Co', 'Always trying to capture the moment and heart with my photography', 'Candid', 'He has a magical way of capturing beautiful moments');
let rachel = new Photographer('Rachel', 'Ney York, NY','I was raised with a camera in my hand!', 'Event', 'Excellent photos and great personality. Very easy to work with');
function selectRandomPhotographer() {
  return Math.floor(Math.random() * Photographer.allPhotographerObjects.length);
}

//Renders 3 images on the screen for the viewer to vote on
function randomPhotographerArray() {
  while (Photographer.photographersQue.length < Photographer.allPhotographerObjects.length) {
    let randomNumber = selectRandomPhotographer();
    if (!Photographer.photographersQue.includes(Photographer.allPhotographerObjects[randomNumber])) {
      Photographer.photographersQue.push(Photographer.allPhotographerObjects[randomNumber]);
    }
  }

}
randomPhotographerArray();
console.log(Photographer.allPhotographerObjects[0].photoArray.length);
// let profileSlider1 = document.getElementsByClassName("profileSlider1");
function renderPhotographers(){
for(let i =1; i <4; i++ ){

  let profileSlider1 = document.getElementById(`gallerySlider${i}`);
let profilePicture1 = document.getElementById(`profilePicture${i}`);
let profileName1 = document.getElementById(`profileName${i}`);
let profileLocation1 = document.getElementById(`profileLocation${i}`);
let profileAboutMe1 = document.getElementById(`profileAboutMe${i}`);

  let profileImg = document.createElement("img");
  profileImg.src = `${Photographer.photographersQue[i].profilePic}`;
  profilePicture1.appendChild(profileImg);
  let profileName = document.createElement("h2");
  profileName.textContent = `${Photographer.photographersQue[i].name}`;
  profileName1.appendChild(profileName);
  let profileLocation = document.createElement("h2")
  profileLocation1.textContent = `${Photographer.photographersQue[i].location}`
  profileLocation1.appendChild(profileLocation);
  let profileAboutMe = document.createElement("p")
  profileAboutMe1.textContent = `${Photographer.photographersQue[i].aboutMe}`
  profileAboutMe1.appendChild(profileAboutMe);

  for(let j=0; j < Photographer.photographersQue[i].photoArray.length; j++){
    let profileSlider = document.createElement("img");
    profileSlider.classList.add(`mySlides${i}`);
    profileSlider.src = `${Photographer.photographersQue[i].photoArray[j]}`;
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
