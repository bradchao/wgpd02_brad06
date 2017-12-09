// 粒子系統
var Test05Layer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();

        var test1 = new cc.ParticleFireworks();

        test1.setTexture(cc.textureCache.addImage(res.HelloWorld_png));
        test1.setPosition(
            cc.p(cc.winSize.width/2, cc.winSize.height/2));
        this.addChild(test1);


        return true;
    }
});

var Test05Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Test05Layer();
        this.addChild(layer);
    }
});

