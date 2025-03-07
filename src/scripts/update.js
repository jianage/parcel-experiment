//ball的初始个数
const ballsLength = 18;
//定义ball计数变量
const para = document.querySelector("p");
let count = 0;
//设置画布
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

//生成随机数函数
function random(min,max) {
    return (Math.floor(Math.random()*(max-min+1))+min);
}
//生成随机颜色值函数
function randomColor() {
    return (`rgb(${random(0,255)},${random(0,255)},${random(0,255)})`);
}

//定义shape()构造器
function Shape(x,y,velX,velY,exists) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.exists = exists;
}

//定义Ball()构造器，继承Shape()
function Ball(x,y,velX,velY,exists,color,size) {
    Shape.call(this,x,y,velX,velY,exists);
    this.color = color;
    this.size = size;
}

Ball.prototype = Object.create(Shape.prototype);    //将Shape.prototype作为Ball.prototype的[[Prototype]]
Ball.prototype.constructor = Ball;

  //设置draw(),update(),collisionDetect()
Ball.prototype.draw = function () {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x,this.y,this.size,0,2*Math.PI);
    ctx.fill();
}
Ball.prototype.update = function () {
    if(this.x + this.size >= width || this.x - this.size <= 0) {
        this.velX = -this.velX;
    }
    if (this.y + this.size >= height || this.y - this.size <= 0) {
        this.velY = -this.velY;
    }
    
    this.x += this.velX;
    this.y += this.velY;
}
Ball.prototype.collisionDetect = function () {
    for (let j = 0; j < ballsLength; j++) {
        if (this != balls[j] && balls[j].exists) {
          const dx = this.x - balls[j].x;
          const dy = this.y - balls[j].y;
          const distance = Math.sqrt(dx*dx + dy*dy);
    
          if (distance < this.size + balls[j].size) {
            balls[j].color = this.color = randomColor();
          }
        }
    }
}

//定义恶魔圈EvilCircle()
function EvilCircle(x,y,exists) {
    Shape.call(this,x,y,20,20,exists);
    this.color = 'white';
    this.size = 20;
}

EvilCircle.prototype = Object.create(Shape.prototype);
EvilCircle.prototype.constructor = EvilCircle;

  //恶魔圈draw()
EvilCircle.prototype.draw = function () {
    ctx.beginPath();
    ctx.strokeStyle = this.color;   //圆环
    ctx.arc(this.x,this.y,this.size,0,2*Math.PI);
    ctx.stroke();
}
  //恶魔圈checkBounds()，防止出线
EvilCircle.prototype.checkBounds = function () {
    if (this.x - this.size > width) {
        this.x = -this.size
    }
    if (this.x + this.size < 0) {
        this.x = width + this.size;
    }
    if (this.y - this.size > height) {
        this.y = -this.size
    }
    if (this.y + this.size < 0) {
        this.y = height + this.size;
    }
}
  //恶魔圈，添加键盘控制
EvilCircle.prototype.setControls = function () {
    window.addEventListener("keydown", (event) => {
        switch (event.key) {
            case 'a':
            case 'A':
            case 'ArrowLeft':
                this.x -= this.velX;
                break;
            case 'd':
            case 'D':
            case 'ArrowRight':
                this.x += this.velX;
                break;
            case 's':
            case 'S':
            case 'ArrowDown':
                this.y += this.velY;
                break;
            case 'w':
            case 'W':
            case 'ArrowUp':
                this.y -= this.velY;
                break;
        }
    })
}
  //恶魔圈，碰撞检测
EvilCircle.prototype.collisionDetect = function () {
    for (let i = 0; i < balls.length; i++){
        if (balls[i].exists) {
            const dx = this.x - balls[i].x;
            const dy = this.y - balls[i].y;
            const distance = Math.sqrt(dx*dx + dy*dy);

            if (distance < this.size + balls[i].size) {
                balls[i].exists = false;
                count--;
                para.textContent = "弹球剩余个数: " + count;
            }
        }
    }
}

//创建Ball实例
let balls = [];
while (balls.length < ballsLength) {
    let size = random(8,18);
    balls.push(new Ball(
        random(size,width-size),
        random(size,height-size),
        random(-8,8),
        random(-8,8),
        true,
        randomColor(),
        size
    ));
    count++;
    para.textContent = "弹球剩余个数: " + count;
}

//创建恶魔圈实例
const evilCircle = new EvilCircle(random(0,width),random(0,height),true);
evilCircle.setControls();

//定义一个循环不停刷新
function loop() {
    ctx.fillStyle = 'rgba(0,0,0,0.25)';
    ctx.fillRect(0,0,width,height);

    for (let i = 0; i < ballsLength; i++) {
        if (balls[i].exists) {
            balls[i].draw();
            balls[i].update();
            balls[i].collisionDetect();
        }
    }
    evilCircle.draw();
    evilCircle.checkBounds();
    evilCircle.collisionDetect();

    requestAnimationFrame(loop);
}

loop();
