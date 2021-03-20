let human = new blockLike.Sprite({
    width: 100,
    height: 100,
    color: 'transparent',
    image: 'human (1).png'
});
human.addTo(stage);
human.setRotationStyle('left-right');
human.pointInDirection(-90);

human.whenKeyPressed('d', function () {// d
    if(this.x < stage.width/2-100){
        this.changeX(100);
    this.pointInDirection(-90);
    this.switchCostumeTo(humanright.png);
    }
});

human.whenKeyPressed('a', function () {// a
    if(this.x > (stage.width / 2 * -1) +100){
      this.changeX (-100)
    this.pointInDirection(90);
    }
});

human.whenKeyPressed('w', function () {// w
    if(this.y < stage.height /2-100){
       this.changeY (100)
    }
});

human.whenKeyPressed('s', function () {// s
    if(this.y > (stage.height / 2 * -1) +100){
       this.changeY (-100)
    }
});
