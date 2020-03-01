// Open and connect input socket
let socket = io('/input');

function setup() {
  createCanvas(windowWidth, windowHeight)
  background(255)
  
  if (typeof DeviceOrientationEvent.requestPermission === 'function') {
    document.body.addEventListener('click', function () {
      DeviceOrientationEvent.requestPermission();
      DeviceMotionEvent.requestPermission();
    })
  }
  // Listen for confirmation of connection
  socket.on('connect', () => {
    console.log('connected')
  })
}

function draw() {
  
  background(255)
  textAlign(CENTER)
  textSize(20);
  text("your game has ended?", width/2, height/2 - 40);
}