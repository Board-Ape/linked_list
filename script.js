var websiteTitle = document.getElementById("website-title");
var websiteURL = document.querySelector("#website-url");

function addCards() {
  var websiteTitleValue = websiteTitle.value;
  var websiteURLValue = websiteURL.value;

  $(".all-boxes").prepend(`<article class='single-box'>
     <h2>${websiteTitleValue}</h2>
     <hr>
     <a href='http://${websiteURLValue}' class='site-urls' target='_blank'>${websiteURLValue}</a>
     <hr>
     <button type='button' name='read' class='read-button'>Read</button>
     <button type='button' name='delete' class='delete-button'>Delete</button>
     </article>`);
};

function evalInputs() {
  if (websiteTitle === "") {
    alert("Please Enter A Website Title");
    // if (_stop) return;
  } else if (websiteURL === ""){
    alert("Please Enter A Website URL");
    // if (_stop) return;
  };
};

  $('header').on('keyup', '.website-title, .website-url', function() {
    var websiteTitleValue = websiteTitle.value;
    var websiteURLValue = websiteURL.value;
    if( websiteURLValue === "" || websiteTitleValue === ""){
      $('.enter-button').attr('disabled', true).css("background-color", "#DDD");
    } else {
      $('.enter-button').p('disabled', false).css("background-color", "#FFC107");
    }
 });

document.querySelector(".enter-button").addEventListener('click', function(event) {
  event.preventDefault()
  evalInputs()
  addCards()
});

$('.all-boxes').on('click', '.read-button', function() {
  $(this).parents('.single-box').toggleClass('read');
});

$('.all-boxes').on('click', '.delete-button', function() {
  $(this).parents('.single-box').remove()
});

