// var canv = document.getElementById('background');
// $(canv)
//   .width($(window).width())
//   .height($(window).height());

// var address = 'http://localhost:3000/../images/nav_adjust/'
// var totalImages = 8;
// var images = new Array();
// for(var i = 1; i < totalImages; i+= 3) {
//     var filename = address + 'scene' + i + '.jpg'; // Filename of each image
//     var img = new Image;
//     img.src = filename;
//     images.push(img);
// }

// var totalImages = 234;
// var images = new Array();
// for(var i = 1; i < totalImages; i++) {
//     var filename = 'scene' + i + '.jpg'; // Filename of each image
//     var img = new Image;
//     img.src = <%= get_frame %>;
//     images.push(img);
// }


// var highestFrameNumber = 187;
// var frameFileNames = []
// for (var i=4; i <= highestFrameNumber; i+=3){
//   frameFileNames.push("scene" + i + ".jpg");
// }

// $.get("/background_frames", {"frameFileNames": JSON.stringify(frameFileNames)})
//   .done(function(data) {
//     // alert("Data returned:" data)
//     // var fingerprintedFileNames = data;
//   });
