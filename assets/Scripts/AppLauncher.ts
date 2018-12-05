import MapManager from "./MapManager";
import { GemData, GemColor } from "./GemData";

const {ccclass, property} = cc._decorator;

@ccclass
export default class AppLauncher extends cc.Component {
    @property(cc.Canvas)
    canvas : cc.Canvas = null;

    @property(MapManager)
    puzzleNode : MapManager = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        let scale = this.canvas.designResolution.width / this.puzzleNode.node.getContentSize().width
        this.puzzleNode.node.setScale(scale);
        this.puzzleNode.node.setPosition(0,(this.puzzleNode.node.getContentSize().height * scale - this.canvas.designResolution.height)/2)

        let example:GemData[][]=[];
        for(let i=0;i<6;i++){
            example[i]=[];
            for(let j=0;j<5;j++){
                example[i][j]=new GemData(Math.floor(Math.random()*6));
            }
        }
        this.puzzleNode.init(example);
    }

    // update (dt) {}
}
