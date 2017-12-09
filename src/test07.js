
var Test07Layer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();

        // var label = new cc.LabelTTF("", "Arial", 42,
        //     cc.size(300,50), cc.TEXT_ALIGNMENT_CENTER);
        // label.x = cc.winSize.width/2;
        // label.y = cc.winSize.height/2;
        // this.addChild(label);

        this.sprite = new cc.Sprite(res.HelloWorld_png);
        //this.sprite.x = cc.winSize.width/2 ;
        //this.sprite.y = cc.winSize.height/2 ;
        this.addChild(this.sprite);


        var baseData = cc.sys.localStorage.getItem("gameData4");
        baseData = JSON.parse(baseData);
        if (baseData){
            // 有資料
            cc.log('OK');
            //label.setString("Got Data");

            // fetch data
            //this.sprite.x = baseData.sprite.x;
            //this.sprite.y = baseData.sprite.y;

            cc.log(baseData.datas[1].x);

            //cc.sys.localStorage.removeItem("baseData");

        }else{
            // 沒資料
            cc.log('xx');
            //label.setString("No Data");

            this.sprite.x = this.sprite.width/2 + Math.random()*800;
            this.sprite.y = this.sprite.height/2 + Math.random()*400;

            var newData = {
                datas: [1,{"x":12,"y":13},3,4],
                //obj: this.sprite
            };

            var data = JSON.stringify(newData);

            cc.log(data);
            cc.sys.localStorage.setItem("gameData4", data);


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

