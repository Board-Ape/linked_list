// var $readButton = $('.read-button');
// var $boxContainer = $('.all-boxes');
function addCards() {
  var websiteTitle = document.getElementById("website-title").value;
  var websiteURL = document.querySelector("#website-url").value;
  $(".all-boxes").prepend(`<article class='single-box'>
     <h2>${websiteTitle}</h2>
     <hr>
     <a href='http://${websiteURL}' class='site-urls' target='_blank'>${websiteURL}</a>
     <hr>
     <button type='button' name='read' class='read-button'>Read</button>
     <button type='button' name='delete' class='delete-button'>Delete</button>
     </article>`);
};

function evalInputs() {
  var websiteTitle = document.getElementById("website-title").value;
  var websiteURL = document.querySelector("#website-url").value;
  var 

  if (websiteTitle === "") {
    alert("Please Enter A Website Title");
    if (_stop) return;
  } else if (websiteURL === ""){
    alert("Please Enter A Website URL");
    if (_stop) return;
  };
};

document.querySelector(".enter-button").addEventListener('click', function(event) {
  event.preventDefault()

  evalInputs()
  addCards()
});

  $('.all-boxes').on('click', '.read-button', function() {
  console.log('clicked');
  $(this).parents('.single-box').toggleClass('read')
});

$('.all-boxes').on('click', '.delete-button', function() {
  $(this).parents('.single-box').remove()
});
