$(document).ready(function () {
  // jquery code goes here
  console.log("everything is ready, let's go!")

  $('#addHome').removeClass('btn-danger').addClass('btn-success');

// $('h1').addClass('text-center');

// var isStyled = $('p').toggleClass('left-aligned big');
// console.log(isStyled);

var $newLink = $( '<br><br><a id="zillowLink" href="http://www.zillow.com">Visit Zillow.com</a>' );
$('body').append($newLink)

$('#zillowLink').attr( "target", "_blank" );

// $('#addHome').on('click', function(event) {
//     console.log(event)
$('#addHome').click(function(evt){
  console.log(evt, this); //shorthand version of line above
  });

  $('#homes tbody').on('click', 'button', function() {
    console.log(evt, this);
  });

});
