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
    this.html = `${name}.html`
    this.photoArray = [];
    this.creatingPhotoGallery = function (){
    for(let i = 1; i < 10; i++){
      this.photoArray[i-1] = `./img/${name}/${i}.jpg`
      console.log(this.photoArray);
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

let profileSlider1 = document.getElementById('gallerySlider1');
for(let j=0; j < paul.photoArray.length; j++){
  let profileSlider = document.createElement("img");
  profileSlider.classList.add(`mySlides1`);
  profileSlider.src = `${Photographer.paul.photoArray[j]}`;
  profileSlider1.appendChild(profileSlider);
}


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
