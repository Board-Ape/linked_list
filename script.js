// var $readButton = $('.read-button');
// var $boxContainer = $('.all-boxes');

document.querySelector(".enter-button").addEventListener('click', function(event) {
  event.preventDefault()
    var websiteTitle = document.getElementById("website-title").value;
    var websiteURL = document.querySelector("#website-url").value;
    $(".all-boxes").prepend(`<article class='single-box'>
       <h2>${websiteTitle}</h2>
       <hr>
       <a href='${websiteURL}' class='site-urls'>${websiteURL}</a>
       <hr>
       <button type='button' name='read' class='read-button'>Read</button>
       <button type='button' name='delete' class='delete-button'>Delete</button>
       </article>`);
});

  $('.all-boxes').on('click', '.read-button', function() {
  console.log('clicked');
  $(this).parents('.single-box').toggleClass('read')
});

$('.all-boxes').on('click', '.delete-button', function() {
  $(this).parents('.single-box').remove()
});
