const {ccclass, property} = cc._decorator;

@ccclass
export default class Gem extends cc.Component {

    @property(cc.Sprite)
    sprite: cc.Sprite = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    // update (dt) {}
}
