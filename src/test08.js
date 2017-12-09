
var Test08Layer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();

        var play = new cc.MenuItemImage(res.HelloWorld_png,
            res.HelloWorld_png, res.HelloWorld_png,
            this.onClick, this);
        play.x = 0;
        play.y = 0;

        var play1 = new cc.MenuItemImage(res.HelloWorld_png,
            res.HelloWorld_png, res.HelloWorld_png,
            this.onClick1, this);
        play1.x = 200;
        play1.y = 0;

        var menu = new cc.Menu(play, play1);
        this.addChild(menu);

        cc.audioEngine.playMusic(res.Chop, true);


        return true;
    },
    onClick: function () {
        cc.audioEngine.playEffect(res.Click);
        cc.audioEngine.stopMusic(true);

    },
    onClick1: function () {
        cc.audioEngine.playEffect("res/r_jump.ogg");
        //cc.audioEngine.stopMusic(true);

        //cc.audioEngine.stopAllEffects();
        //cc.audioEngine.end();


    },
});

var Test08Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Test08Layer();
        this.addChild(layer);
    }
});

