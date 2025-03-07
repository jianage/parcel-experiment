// 设置画布

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth; //浏览器的宽、高
const height = canvas.height = window.innerHeight;

// 生成随机数的函数

function random(min,max) {
  const num = Math.floor(Math.random() * (max - min)) + min;
  return num;
}

function randomColor() {
  return (`rgb(${random(0,255)},${random(0,255)},${random(0,255)})`);
}

//建立小球模型
function Ball(x,y,velX,velY,color,size) {
  this.x = x;         //x、y坐标
  this.y = y;
  this.velX = velX;   //水平、竖直速度
  this.velY = velY;
  this.color = color; //小球颜色
  this.size = size;   //小球大小
}
  //给小球原型加上draw()方法
Ball.prototype.draw = function () {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x,this.y,this.size,0,2*Math.PI);
  ctx.fill(); //也就是声明我们结束了以 beginPath() 开始的绘画，并且使用我们之前设置的颜色进行填充。
}
  //给小球原型加上update()方法
Ball.prototype.update = function () {
  if (this.x + this.size >= width || this.x - this.size <= 0) {
    this.velX = -this.velX;
  }
  if (this.y + this.size >= height || this.y - this.size <= 0) {
    this.velY = -this.velY;
  }

  this.x += this.velX;
  this.y += this.velY;
}
  //给小球加上碰撞检测collisionDetect()
Ball.prototype.collisionDetect = function () {
  for (let j = 0; j < balls.length; j++) {
    if (this != balls[j]) {
      const dx = this.x - balls[j].x;
      const dy = this.y - balls[j].y;
      const distance = Math.sqrt(dx*dx + dy*dy);

      if (distance < this.size + balls[j].size) {
        balls[j].color = this.color = randomColor();
      }
    }
  }
}

//建立Shape

//让球动起来
let balls = []; //储存小球
while (balls.length < 8) {
  let size = random(10,20);
  let ball = new Ball(
    random(0+size,width-size),
    random(0+size,height-size),
    random(-8,8),
    random(-8,8),
    randomColor(),
    size
  );
  balls.push(ball);
}


function loop() {
  /*这是在下一个视图画出来时用来遮住之前的视图的。如果不这样做得话，
  你就会在屏幕上看到一条蛇的形状而不是小球的运动了。用来填充的颜色设
  置成半透明的rgba(0,0,0,0.25)，也就是让之前的视图留下来一点点，从
  而你可以看到小球运动时的轨迹。*/
  //每次更新图层都会覆盖上一个图层，且每次更新，小球都画在新图层上。
  ctx.fillStyle = "rgba(0,0,0,0.25)"; 
  ctx.fillRect(0,0,width,height);
  for (let i = 0; i< balls.length; i++) {
    balls[i].draw();
    balls[i].update();
    balls[i].collisionDetect();
  }
  requestAnimationFrame(loop);
}

loop();
