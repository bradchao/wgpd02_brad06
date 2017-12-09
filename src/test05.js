// 粒子系統
var Test05Layer = cc.Layer.extend({
    sprite:null,
    test1:null,
    ctor:function () {
        this._super();

        test1 = new cc.ParticleFireworks();
        //test1 = new cc.ParticleFire();
        // var test1 = new cc.ParticleFlower();
        //test1 = new cc.ParticleExplosion();
        // var test1 = new cc.ParticleRain();
        // var test1 = new cc.ParticleSnow();
        // var test1 = new cc.ParticleSmoke();
        // var test1 = new cc.ParticleSpiral();
        // var test1 = new cc.ParticleSun();

        test1.setSpeed(100);
        test1.setAngle(270);


        test1.setStartSize(10);
        test1.setEndSize(200);
        test1.setStartColor(cc.color(0,255,0,255));
        test1.setEndColor(cc.color(255,0,0,255));
        test1.setStartRadius(10);
        test1.setEndRadius(100)

        test1.setDuration(3);


        test1.setTexture(cc.textureCache.addImage(res.HelloWorld_png));
        test1.setPosition(
            cc.p(cc.winSize.width/2, 0));
        this.addChild(test1);
        test1.schedule(this.move, 0.1, cc.REPEAT_FOREVER, 1);


        return true;
    },
    move:function () {
        test1.setPosition(cc.p(test1.x, test1.y+4));
    }
});

var Test05Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Test05Layer();
        this.addChild(layer);
    }
});

