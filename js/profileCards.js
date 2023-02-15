'use strict';

let profileSlider1 = document.getElementsByClassName("profileSlider1");
let profilePicture1 = document.getElementById('profilePicture1');
let profileName1 = document.getElementById('profileName1');
let profileLocation1 = document.getElementById('profileLocation1');
let profileAboutMe1 = document.getElementById('profileAboutMe1');

let image2 = document.getElementById("img2");
let image3 = document.getElementById("img3");
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
class BetaItem {
  static allPhotographerObjects = [];
  static photographersQue = [];
  constructor(name, location, aboutMe, category, gallery, reviews,src = "jpg") {
    this.name = name;
    this.src = `img/${name}/${name}.${src}`;
    this.location = location;
    this.aboutMe = aboutMe;
    this.category = category;
    this.gallery = gallery;
    this.reviews = reviews;

    BetaItem.allPhotographerObjects.push(this);
  }
}

function preloader()
{
     // counter
     var i = 0;
     // create object
     imageObj = new Image();

     // set image list
     images = new Array();
     images[0]="img/paul/pexels-arthur-ogleznev-1439260.jpg"
     images[1]="img/paul/pexels-danielle-reese-2496344.jpg"
     images[2]="img/paul/pexels-emir-kaan-okutan-2403569.jpg"
     images[3]="img/paul/photo-1520854221256-17451cc331bf.jpg"

     // start preloading
     for(i=0; i<=3; i++)
     {
          imageObj.src=images[i];
     }

     let paul = new BetaItem('Paul', 'Madrid, Spain', 'I live in Madrid and have 10 years of experience', 'Wedding', preloader(), 'He did Great')
}

// let profileSlider1 = document.getElementsByClassName("profileSlider1");
// let profilePicture1 = document.getElementById('profilePicture1');
// let profileName1 = document.getElementById('profileName1');
// let profileLocation1 = document.getElementById('profileLocation1');
// let profileAboutMe1 = document.getElementById('profileAboutMe1');
function renderPhotographer(){
  profileName1.src = BetaItem.allPhotographerObjects[0].src;
  
}
renderPhotographer();
