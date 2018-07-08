$(document).ready(function () {
  $("#thanks").hide();
  var config = {
    apiKey: "AIzaSyBiVQ7IM5jxuj7GBuQCZIuBVW9hAYHBuZo",
    authDomain: "contactdata-f7d36.firebaseapp.com",
    databaseURL: "https://contactdata-f7d36.firebaseio.com",
    projectId: "contactdata-f7d36",
    storageBucket: "contactdata-f7d36.appspot.com",
    messagingSenderId: "673209766584"
  };
  firebase.initializeApp(config)

  var contactData = firebase.database();

  
  var name = "";
  var email = "";
  var message = "";

  $(document).on("click", "#submit", function (event) {
      event.preventDefault();
      var name = $("#name").val().trim();
      var email = $("#email").val().trim();
      var message = $("#message").val().trim();
    
      contactData.ref().push({
        name: name,
        email: email,
        message: message,
      });
     $("#myForm").each(function () {
        this.reset();
     });
     $("#thanks").show();
  });

});//document ready

document.addEventListener('DOMContentLoaded', function () {

  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {

        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});