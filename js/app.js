<<<<<<< HEAD
'use strict';

// Functionality for clicks

$('#home').click(function () {
  window.location.href = 'index.html'
})

$('#photographer').click(function () {
  window.location.href = 'photographers.html'
})

$('#aboutUs').click(function () {
  window.location.href = 'aboutus.html'
})

$('#profile1').click(function () {
  window.location.href = 'profile1.html'
})

$('#profile2').click(function () {
  window.location.href = 'profile2.html'
})

$('#profile3').click(function () {
  window.location.href = 'profile3.html'
})


$('.placeholder').click(function () {
  $('.placeholder p').show();
  new Info('placeholder');
  total += 9
  localStorage.setItem('profileInfo', JSON.stringify(formData));
  setTimeout(function () {
    $('.placeholder p').hide()
  }, 1500);
})


//localstorage


//nav bar function concept. don't know if we need this.

const mainListDiv = document.getElementById('mainListDiv'),
  mediaButton = document.getElementById('mediaButton');

mediaButton.onclick = function () {


  mainListDiv.classList.toggle('show_list');
  mediaButton.classList.toggle('active');

};


=======
'use strict';

// Functionality for clicks

$('#home').click(function () {
  window.location.href = 'index.html'
})

$('#profiles').click(function () {
  window.location.href = '---.html'
})

$('#aboutUs').click(function () {
  window.location.href = '---.html'
})

$('#PLACEHOLDER').click(function () {
  window.location.href = '---.html'
})


$('.placeholder').click(function () {
  $('.placeholder p').show();
  new Info('placeholder');
  total += 9
  localStorage.setItem('profileInfo', JSON.stringify(formData));
  setTimeout(function () {
    $('.placeholder p').hide()
  }, 1500);
})


//nav bar function concept don't know if we need this.

const mainListDiv = document.getElementById('mainListDiv'),
  mediaButton = document.getElementById('mediaButton');

mediaButton.onclick = function () {


  mainListDiv.classList.toggle('show_list');
  mediaButton.classList.toggle('active');

};

>>>>>>> 36174dfeeffc394a60ebda774ea7edece958b0ca
