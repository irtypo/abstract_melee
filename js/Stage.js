class Stage{
    constructor(name, left_edge, right_edge, x_scaler, y_scaler, x_offset, y_offset, floor_offset, window_scaler){
        this.name = name;
        this.background = new Image();
        this.background.src = `img/stages/${this.name}.png`;
        this.left_edge = left_edge;
        this.right_edge = right_edge;
        this.x_scaler = x_scaler * window_scaler;
        this.y_scaler = y_scaler * window_scaler;
        this.x_offset = x_offset;
        this.y_offset = y_offset;
        this.floor_offset = floor_offset;
    }


    setLeftPlatform(left, right, bottom){
        this.leftPlatformLeft = left;
        this.leftPlatformRight = right;
        this.leftPlatformBottom = bottom;
    }

    setRightPlatform(left, right, bottom){
        this.rightPlatformLeft = left;
        this.rightPlatformRight = right;
        this.rightPlatformBottom = bottom;
    }
    setTopPlatform(left, right, bottom){
        this.topPlatformLeft = left;
        this.topPlatformRight = right;
        this.topPlatformBottom = bottom;
    }

    draw(){
        ctx.drawImage(this.background, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    }
}