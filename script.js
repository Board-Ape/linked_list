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

function totalCards() {
  var numWebsites = document.querySelectorAll('.single-box').length
  $('.website-count').text('Number of Websites Saved: ' + numWebsites);
};

function totalReads() {
  var numReads = document.querySelectorAll('.read').length
  $('.read-count').text('Number of Websites Marked Read: ' + numReads);
};

function totalUnreads() {
  var numWebsites = document.querySelectorAll('.single-box').length;
  var numReads = document.querySelectorAll('.read').length;
  var numUnreads = numWebsites - numReads;
  $('.unread-count').text('Number of Websites Marked Unread: ' + numUnreads);
}

function evalInputs() {
  var websiteTitle = document.querySelector("#website-title").value;
  var websiteURL = document.querySelector("#website-url").value;
  if (!websiteTitle) {
    return alert("Please enter a website title.");
  } else if (!websiteURL) {
    return alert ("Pease enter a website URL.");
  } else {
    addCards();
  }
};

$('.enter-button').prop('disabled', true).css("background-color", "#ddd");

$('.left-side').on('keyup', '#website-title, #website-url', function(){
  $('.enter-button').prop('disabled', false).css("background-color", "#FFC107");
})

document.querySelector(".enter-button").addEventListener('click', function(event) {
  event.preventDefault()
  evalInputs()
  totalCards()
  totalUnreads()
});

$('.all-boxes').on('click', '.read-button', toggleReadCard)

function toggleReadCard() {
  $(this).parents('.single-box').toggleClass('read');
  totalReads()
  totalUnreads()
};

$('.all-boxes').on('click', '.delete-button', toggleDeleteCard)

function toggleDeleteCard() {
  $(this).parents('.single-box').remove()
  totalCards()
  totalReads()
  totalUnreads()
};

$('.clear-all-reads').on('click', function(event) {
  event.preventDefault()
  $('.read').remove()
  totalCards()
  totalReads()
  totalUnreads()
});
