exports.openCvTest =  function testOpenCv(){
var cv = require('/home/maxime/node_modules/opencv/lib/opencv.js');
console.log(new Date());
cv.readImage("./testResou;rces/popin_2016.jpg", function(err, im){
  im.detectObject(cv.FACE_CASCADE, {}, function(err, faces){
    for (var i=0;i<faces.length; i++){
      var x = faces[i];
      im.ellipse(x.x + x.width/2, x.y + x.height/2, x.width/2, x.height/2);
    }
    console.log(new Date());
    im.save('./out.jpg');
  });
});};