
var Test03Layer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();

        this.sprite = new cc.Sprite(res.HelloWorld_png);
        this.sprite.x = cc.winSize.width/2;
        this.sprite.y = cc.winSize.height/2;
        this.addChild(this.sprite);

        var actMove = cc.moveTo(1, cc.p(100,100));
        var actFadeOut = cc.fadeOut(2);
        var actScale = cc.scaleTo(2, 0.5, 0.5);
        //var actRotate = cc.rotateBy(2,720,720);
        var actSkew = cc.skewTo(2, 90, 0);
        var acts = [actMove, actFadeOut, actScale, actSkew];
        var spawn = new cc.Spawn(acts);

        var nact = cc.Spawn.create(
            cc.jumpBy(2, cc.p(300,0), 50, 4),
            cc.rotateBy(2, 720)
        )

        this.sprite.runAction(nact);


        return true;
    }
});

var Test03Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Test03Layer();
        this.addChild(layer);
    }
});

