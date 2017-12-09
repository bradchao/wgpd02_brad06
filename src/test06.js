
var Test06Layer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();

        var label = new cc.LabelTTF("", "Arial", 42,
            cc.size(300,50), cc.TEXT_ALIGNMENT_CENTER);
        label.x = cc.winSize.width/2;
        label.y = cc.winSize.height/2;
        this.addChild(label);

        var lang = cc.sys.language;
        cc.log(lang);
        switch (lang){
            case cc.sys.LANGUAGE_ENGLISH:
                label.setString("Hello, World");
                break;
            case cc.sys.LANGUAGE_CHINESE:
                label.setString("全世界, 您好");
                break;
        }





        return true;
    }
});

var Test06Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Test06Layer();
        this.addChild(layer);
    }
});

