/*local storage for form */

window.onload = function () {

  // Check for LocalStorage support.
  if (localStorage) {

    document.getElementById('submit').addEventListener('submit', function () {
      let name = document.getElementById('Username').value;
      localStorage.setItem('Username', name);
    });
  }
};

/*Listener for Submit button*/

document.getElementById("submit").addEventListener("click", function () {
  alert('Your request has been sent! We will contact you shortly with details!');
});
