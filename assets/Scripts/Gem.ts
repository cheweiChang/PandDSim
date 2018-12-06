import { GemColor } from "./GemData";
import AppLauncher from "./AppLauncher";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Gem extends cc.Component {

    @property(cc.Sprite)
    sprite: cc.Sprite = null;

    @property([cc.SpriteFrame])
    colorPic: cc.SpriteFrame[] = [];

    static AppLauncher:AppLauncher = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        Gem.AppLauncher = (Gem.AppLauncher)?Gem.AppLauncher:cc.find("Canvas/AppLauncher").getComponent(AppLauncher)

        this.node.on(cc.Node.EventType.TOUCH_START,(event:cc.Event.EventTouch)=>{
            this.sprite.node.opacity = 128;
            Gem.AppLauncher.puzzleNode.touchBegin(this,event.getLocation());
        },this);

        this.node.on(cc.Node.EventType.TOUCH_MOVE,(event:cc.Event.EventTouch)=>{
            Gem.AppLauncher.puzzleNode.touchMove(event.getLocation());
        },this);

        this.node.on(cc.Node.EventType.TOUCH_END,()=>{
            this.sprite.node.opacity = 255;
            Gem.AppLauncher.puzzleNode.touchEnd();
        },this);

        this.node.on(cc.Node.EventType.TOUCH_CANCEL,()=>{
            this.sprite.node.opacity = 255;
            Gem.AppLauncher.puzzleNode.touchEnd();
        },this);
    }

    // update (dt) {}

    setColor(color:GemColor){
        this.sprite.spriteFrame = this.colorPic[color];
    }

    setContentSize(size:cc.Size){
        this.node.setContentSize(size);
        this.sprite.node.setContentSize(size);
    }
}
