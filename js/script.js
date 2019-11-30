//helper Functions 


// screen sunction
function Screen(width, height){
    this.canvas = document.createElement("canvas");
    this.canvas.width = this.width = width;
    this.canvas.height = this.height = height;
    this.ctx = this.canvas.getContext("2d");

    document.body.appendChild(this.canvas);
};

Screen.prototype.drawSprite = function(sp, x, y){
    this.ctx.drawImage(sp.img, sp.x, sp.y, sp.w, sp.h, x, y, sp.w, sp.h);
};


// Sprite class
function Sprite(img, x, y, w, h){
    this.img = img;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

};


//InoutHandeler Class

function InputHandeler(){
    this.down = {};
    this.pressed = {};

    var _this = this; // keep refrencing to input handeler
    
    // events listeners
    document.addEventListener("keydown", function(e){
        _this.down[e.keyCode] = true;

    });

    document.addEventListener("keyup", function(e){
        delete _this.down[e.keyCode];
        delete _this.pressed[e.keyCode];
    });

};

InputHandeler.prototype.isDown = function(code){
    return this.down[code];
};

InputHandeler.prototype.isPressed = function(code){
    if(this.pressed[code]){
        return false;
    }else if(this.down[code]){
        return this.pressed[code] = true;
    }
    return false;
};

