
var Test01Layer = cc.Layer.extend({
    sprite:null,
    moveToRight: null,
    moveToDown: null,
    moveToUp: null,
    moveToLeft: null,
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

        this.moveToRight = cc.moveTo(1,
            cc.p(cc.winSize.width/2,
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

    }


});

var Test01Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Test01Layer();
        this.addChild(layer);
    }
});

