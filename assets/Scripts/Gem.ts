import { GemColor } from "./GemData";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Gem extends cc.Component {

    @property(cc.Sprite)
    sprite: cc.Sprite = null;

    @property([cc.SpriteFrame])
    colorPic: cc.SpriteFrame[] = [];

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    // update (dt) {}

    setColor(color:GemColor){
        //
    }
}
