document.addEventListener('DOMContentLoaded', function () {
particleground(document.getElementById('particles'), {
  dotColor: '#fff',
  lineColor: '#fff',
  minSpeedX:0.1,         //default:0.1
  maxSpeedX:0.5,         //default:0.7
  minSpeedY:0.1,         //default:0.1
  maxSpeedY:0.5,         //default:0.7
  directionX:'center',   //center, right, left
  directionY:'center',   //center, right, left
  density: 8000,         //default:10000
  particleRadius: 4,     //default:7
  lineWidth: 0.2,        //default:1
  curvedLines: false,    //default:false
  proximity: 110,        //default:100
  parallax: true,        //default:true
  parallaxMultiplier: 5  //default:5
});
}, false);
