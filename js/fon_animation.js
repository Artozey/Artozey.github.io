(function () {
    
    var canvas = $('#ani');
    var cx = canvas[0].getContext("2d");
    var w = canvas[0].width = window.innerWidth;
    var h = canvas[0].height = 500; 
    param = {
        particleAmount: 30,
        fon: "#fff",
        particleColor: "rgba(0,0,0,0.5)",
        
        defaultSpeed: 1,
        addedSpeed: 2,
        
        defaultRadius: 5,
        addedRadius: 150,
        
    }
    //хранятся все обьекты
    particles = [],
    //сами обьекты    
    Particle = function () {
        this.x = Math.random() * w; 
        this.y = Math.random() * h;
        
        this.speed = param.defaultSpeed + Math.random() * param.addedSpeed;
        this.directionAngle = Math.floor(Math.random() * 360);
        param.particleColor = "rgba(" + Math.floor(Math.random()*1000) + "," + Math.floor(Math.random()*1000) + "," +
        Math.floor(Math.random()*1000) + "," + Math.random().toFixed(1) + ")" ;
        this.color = param.particleColor,
        this.radius = param.defaultRadius + Math.random() * param.addedRadius;
        
        this.d = {
            x: Math.cos(this.directionAngle)*this.speed,
            y: Math.sin(this.directionAngle)*this.speed
        };
        
        this.update = function(){
            this.border();
            this.x += this.d.x;
            this.y += this.d.y;
        };
        this.border = function(){
            if(this.x >= w || this.x <= 0){
                this.d.x *= -1;
            }
            if(this.y >= h || this.y <= 0){
                 this.d.y *= -1;
            }
        };
        this.draw = function(){
            cx.beginPath();
            cx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
            cx.closePath();
            cx.fillStyle = this.color;
            cx.fill();
        }
    },
    //расчет дистанции 
    checkDistance = function(x1, y1, x2, y2){
        return Math.sqrt(Math.sqr(x2 - x1,2) + Math.sqr(y2 - y1,2));
    };
    
    function setup(){
        for(var i = 0; i < param.particleAmount; i++){
            particles.push(new Particle());
        }
        console.log(particles);
        window.requestAnimationFrame(loop);
    }
    function loop(){
        window.requestAnimationFrame(loop);
        cx.fillStyle = param.fon;
        cx.fillRect(0,0,w,h);
        for(var i = 0; i < particles.length; i++){
            particles[i].update();
            particles[i].draw();
        }
    }

    setup();
})()

