function myFunction(t); {
  if ($(t).prev().val()) {
    alert('Adding Succesful!');
    return true;
  } else {
    return false;
  }
}
