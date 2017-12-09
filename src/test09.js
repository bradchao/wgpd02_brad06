

var Test09Layer = cc.Layer.extend({
    sprite:null,
    bg:null,
    ctor:function () {
        this._super();

        this.bg = new cc.Sprite(res.bg);
        this.bg.x = cc.winSize.width/2 + (this.bg.width - cc.winSize.width)/2;
        this.bg.y = cc.winSize.height/2;
        this.addChild(this.bg);

        this.bg.scaleY = 2;

        this.myKeyListener(this);




        return true;
    },

    myKeyListener: function (layer) {
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed: function (keyCode, event) {
                cc.log(keyCode);
                switch(keyCode){
                    case 37:
                        layer.goBack();
                        break;
                    case 39:
                        layer.goForward();
                        break;
                }
            }
        }, this);
    },

    goForward: function () {
        if (this.bg.x + this.bg.width/2 - 10 > cc.winSize.width){
            this.bg.x -= 10;
        }
    },

    goBack: function () {
        if (this.bg.x - this.bg.width/2 + 10 <0 ){
            this.bg.x += 10;
        }
    }



});

var Test09Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Test09Layer();
        this.addChild(layer);
    }
});

