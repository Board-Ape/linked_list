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
      var websiteTitle = document.querySelector("#website-title").value;
      var websiteURL = document.querySelector("#website-url").value;
      if (websiteTitle === "") {
        return alert("Please enter a website title.");
      } else if (websiteURL === "") {
        return alert ("Pease enter a website URL.");
      } else {
        addCards();
      }
    };

document.querySelector(".enter-button").addEventListener('click', function(event) {
  event.preventDefault()
  evalInputs()
});

$('.all-boxes').on('click', '.read-button', function() {
  $(this).parents('.single-box').toggleClass('read');
});

$('.all-boxes').on('click', '.delete-button', function() {
  $(this).parents('.single-box').remove()
});
