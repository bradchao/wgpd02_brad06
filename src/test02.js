
var Test02Layer = cc.Layer.extend({
    sprite:null,
    moveToRight: null,
    moveToDown: null,
    moveToUp: null,
    moveToLeft: null,
    ctor:function () {
        this._super();

        this.sprite = new cc.Sprite(res.HelloWorld_png);
        this.sprite.x = cc.winSize.width - this.sprite.width/2;
        this.sprite.y = cc.winSize.height - this.sprite.height/2;
        this.addChild(this.sprite);

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

        var actionFunction =
            new cc.CallFunc(this.actionCallbackFunc,this);

        var actionArray = [];
        actionArray.push(this.moveToDown);
        actionArray.push(actionFunction);
        actionArray.push(this.moveToLeft);
        actionArray.push(actionFunction);
        actionArray.push(this.moveToUp);
        actionArray.push(actionFunction);
        actionArray.push(this.moveToRight);
        actionArray.push(actionFunction);

        var seq = new cc.Sequence(actionArray); //

        this.sprite.runAction(cc.repeatForever(seq));

        return true;
    },
    actionCallbackFunc: function () {
        cc.log("Callback");
    }
});

var Test02Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Test02Layer();
        this.addChild(layer);
    }
});

