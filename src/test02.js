
var Test02Layer = cc.Layer.extend({
    sprite:null,
    moveToRight: null,
    moveToDown: null,
    moveToUp: null,
    moveToLeft: null,
    actionArray:null,
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
        var actionFinish =
            new cc.CallFunc(this.actionFinish ,this);
        var delay = new cc.DelayTime(1);

        actionArray = [];
        actionArray.push(this.moveToDown);
        actionArray.push(actionFunction);
        actionArray.push(delay);
        actionArray.push(this.moveToLeft);
        actionArray.push(actionFunction);
        actionArray.push(this.moveToUp);
        actionArray.push(actionFunction);
        actionArray.push(delay);
        actionArray.push(this.moveToRight);
        actionArray.push(actionFinish);

        var seq = new cc.Sequence(actionArray); //

        this.sprite.runAction(cc.repeat(seq,1));

        return true;
    },
    actionCallbackFunc: function () {
        cc.log("Callback");
    },
    actionFinish: function () {

        var act = cc.moveTo(1, cc.p(cc.winSize.width/2,
            cc.winSize.height/2));
        actionArray[2] = act;
        var seq = new cc.Sequence(actionArray); //
        this.sprite.stopAction();
        this.sprite.runAction(cc.repeat(seq,1));

    }
});

var Test02Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Test02Layer();
        this.addChild(layer);
    }
});

