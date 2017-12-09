
var Test07Layer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();

        var label = new cc.LabelTTF("", "Arial", 42,
            cc.size(300,50), cc.TEXT_ALIGNMENT_CENTER);
        label.x = cc.winSize.width/2;
        label.y = cc.winSize.height/2;
        this.addChild(label);

        var baseData = cc.sys.localStorage.getItem("baseData");
        cc.log("before =>" + baseData);
        baseData = JSON.parse(baseData);
        cc.log("after =>" + baseData);
        if (baseData){
            // 有資料
            cc.log('OK');
            label.setString("Got Data");

            // fetch data
            cc.log(baseData.username);
            cc.log(baseData.sound);
            cc.log(baseData.stage);
            cc.log(baseData.blood);



        }else{
            // 沒資料
            cc.log('xx');
            label.setString("No Data");

            var newData = {
              username: 'Brad',
              sound: true,
              stage: 3,
              blood: 4.7
            };
            var data = JSON.stringify(newData);
            cc.log(data);
            cc.sys.localStorage.setItem("baseData", data);


        }



        return true;
    }
});

var Test07Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Test07Layer();
        this.addChild(layer);
    }
});

