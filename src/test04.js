// 補間action: ActionEase
/*
1. 最終結果是一樣, 執行時間是一樣
In : ==> fast
Out : ==> slow
InOut ==> fast ==> slow
 */
var Test04Layer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();

        this.sprite = new cc.Sprite(res.HelloWorld_png);
        this.sprite.x = this.sprite.width/2;
        this.sprite.y = cc.winSize.height/2;
        this.addChild(this.sprite);

        var move = cc.MoveTo.create(4,
            cc.p(cc.winSize.width-this.sprite.width/2,
                cc.winSize.height/2));
        var actRotate = cc.rotateBy(2,360,360);

        var easeIn = new cc.EaseInOut(actRotate, 10);

        this.sprite.runAction(easeIn);


        return true;
    }
});

var Test04Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Test04Layer();
        this.addChild(layer);
    }
});

