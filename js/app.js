
// PAGE LOAD POP UP CODE START

function loadpopup(){
  document.getElementById('loadpopup').style.visibility = 'visible';
}
function closepopup(){
    document.getElementById('loadpopup').style.visibility = 'hidden';
    document.body.style.overflowY = 'scroll';
}

// PAGE LOAD POP UP CODE END

var switchmode = document.querySelector('.theme');
var body = document.querySelector('body');

switchmode.onclick = function(){
  this.classList.toggle('themechange');
  body.classList.toggle('dark');
}



$('document').ready(function(){

// slider
$('.responsive').slick({
  dots: true,
  infinite: true,
  arrow:true,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


// Drop down menu
$('.nav-element .dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});


//Mute and Unmute Video code
$(".sound").click(function(){
  $('img',this).toggle();

  if( $("#bgvid").prop('muted') ) {
          $("#bgvid").prop('muted', false);
    } else {
      $("#bgvid").prop('muted', true);
    }
});


// Video play and pause button
$('.moreinfo').click(function(){
  $('#bgvid').trigger('pause');
  
})
$('.btn-close').click(function(){
  $('#bgvid').trigger('play');
})


})



