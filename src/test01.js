
var Test01Layer = cc.Layer.extend({
    sprite:null,
    moveToRight: null,
    moveToDown: null,
    moveToUp: null,
    moveToLeft: null,
    dir: 0,     // 1:right; 2:down; 3:left; 4:up
    ctor:function () {
        this._super();

        this.sprite = new cc.Sprite(res.HelloWorld_png);
        this.sprite.x = cc.winSize.width/2;
        this.sprite.y = cc.winSize.height/2;
        this.addChild(this.sprite);

        this.moveToRight = cc.moveTo(1,
            cc.p(
                cc.winSize.width-this.sprite.width/2,
                this.sprite.y));
        this.sprite.runAction(this.moveToRight);
        this.dir = 1;

        this.moveToRight = cc.moveTo(1,
            cc.p(cc.winSize.width - this.sprite.width/2,
                cc.winSize.height - this.sprite.height/2));
        this.moveToDown = cc.moveTo(1,
            cc.p(cc.winSize.width-this.sprite.width/2,
                this.sprite.height/2));
        this.moveToLeft = cc.moveTo(1,
            cc.p(this.sprite.width/2,
                this.sprite.height/2));
        this.moveToUp = cc.moveTo(1,
            cc.p(this.sprite.width/2,
                cc.winSize.height - this.sprite.height/2));

        this.sprite.schedule(
            this.spriteTask,1,cc.REPEAT_FOREVER,1);

        return true;
    },

    spriteTask: function () {
        var layer = this.getParent();
        switch (layer.dir){
            case 1:
                this.runAction(layer.moveToDown);
                layer.dir = 2;
                break;
            case 2:
                this.runAction(layer.moveToLeft);
                layer.dir = 3;
                break;
            case 3:
                this.runAction(layer.moveToUp);
                layer.dir = 4;
                break;
            case 4:
                this.runAction(layer.moveToRight);
                layer.dir = 1;
                break;
        }


    }


});

var Test01Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Test01Layer();
        this.addChild(layer);
    }
});

