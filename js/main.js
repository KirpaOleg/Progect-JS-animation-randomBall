// Получаем доступ к узлам
const canvas = document.querySelector('canvas');
const ball = document.querySelector('.ball');
const content = document.querySelector('.content');

//Глобальные переменные
let contentPosition = content.getBoundingClientRect();
let radius = 10;
let maxRadius = 20;
let mouse = {
    x: undefined,
    y: undefined
}
let color = [
  'red', 'pink', 'plum', 'purple', 'powderblue'
];

// Фиксируем граници екрана
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Функция движение мышки по екрану
window.addEventListener('mousemove', (event) => {  
  mouse.x = event.x;
  mouse.y = event.y;
});
let paint = canvas.getContext('2d');
const circle = (x, y, dx, dy, radius) => {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.minRadius = Math.floor(Math.random() * 10 + 1);
  this.fillColour = colour[Math.floor(Math.random() * colour.length )];

  const drow = () => {
    paint.beginPath();
    paint.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    paint.fillStyle = this.fillColour;
    paint.fill();
    paint.closePath();
  }

  const update = () => {
    if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
        this.dx =- this.dx;
    }
    if(this.y + this.radius >= innerHeight || this.y - this.radius < 0){
       this.dy =- this.dy;
    }
    if(this.x + this.radius > contentPosition.left && this.x - this.radius < contentPosition.right  && this.y + this.radius > contentPosition.top && this.y - this.radius < contentPosition.bottom){
       this.dx =- this.dx;
    }
    if(this.x - mouse.x < 50 && (this.x - mouse.x) > -50
       && this.y - mouse.y < 50 && this.y - mouse.y > -50){
      if(this.radius < maxRadius){
          this.radius +=2;
      }
    } else if (this.radius > this.minRadius){
      this.radius -= 2;
    }

    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  }
}
circleArray = [];
    
const getDistance = (x1, y1, x2, y2) => {
  let xDistance = x2 - x1;
  let yDistance = y2 - y1;
  return Math.sqrt( Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
}
    
const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
    
const init = () => {
  for(i = 0; i < 100; i++){
    x = randomIntFromInterval(radius, innerWidth - radius);
    y = randomIntFromInterval(radius, innerHeight - radius);
    dx = (Math.random() - 0.5) * 2;
    dy = (Math.random() - 0.5) * 2;
    circleArray.push(new circle(x, y, dx, dy, radius));
  }
}
    
const animate = () => { 
  requestAnimationFrame(animate);
  paint.clearRect(0, 0, innerWidth, innerHeight);  
  for(i = 0; i < circleArray.length; i++){
    circleArray[i].update();
  }
}    
init();
animate();
