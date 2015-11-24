var totalImages = IMAGE_URLS.length;
var images = new Array();
for(var i = 0; i < totalImages; i++) {
    var img = new Image;
    img.src = IMAGE_URLS[i];
    images.push(img);
}


var currentLocation = 0;
var canv;
var context;
$(document).ready(function(){
  canv = document.getElementById('background');
  context = canv.getContext('2d');

  var distanceToCanvas = $('.full_screen_second').offset().top,
    $window = $(window);

  var indicator;
  $window.scroll(function() {
    if ( $window.scrollTop() <= distanceToCanvas ) {
        console.log("Inside scroll")
      if (!!window.mouseWheel){
        removeMouseWheel();
      }
    }
    else {
      console.log("Calling mousewheel")
      addMouseWheel();
    }
  })
});

var removeMouseWheel = function() {
  window.removeEventListener('mousewheel', function(e) {
    console.log("mouseWheel in background.js")
    e.preventDefault(); // No scroll

    // The following equation will return either a 1 for scroll down
    // or -1 for a scroll up
    var delta = Math.max(-1, Math.min(1, e.wheelDelta));

    // This code mostly keeps us from going too far in either direction
    if(delta == -1) currentLocation += 1;
    if(delta == 1) currentLocation -= 1;
    if(currentLocation < 0) currentLocation = 0;
    if(currentLocation > images.length)
      currentLocation = images.length;

    // See below for the details of this function
    setImage(currentLocation);
  });
}

var addMouseWheel = function() {
  window.addEventListener('mousewheel', function(e) {
    console.log("mouseWheel in background.js")
    e.preventDefault(); // No scroll

    // The following equation will return either a 1 for scroll down
    // or -1 for a scroll up
    var delta = Math.max(-1, Math.min(1, e.wheelDelta));

    // This code mostly keeps us from going too far in either direction
    if(delta == -1) currentLocation += 1;
    if(delta == 1) currentLocation -= 1;
    if(currentLocation < 0) currentLocation = 0;
    if(currentLocation > images.length)
      currentLocation = images.length;

    // See below for the details of this function
    setImage(currentLocation);
  });
}

var setImage = function(newLocation) {
    // drawImage takes 5 arguments: image, x, y, width, height
    context.drawImage(images[newLocation], 0, 0, 1280, 720);
}
