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
        this.sprite.x = cc.winSize.width/2;
        this.sprite.y = cc.winSize.height/2;
        this.addChild(this.sprite);

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

