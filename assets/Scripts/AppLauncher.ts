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
        let example:GemData[][]=[];
        for(let i=0;i<this.puzzleNode.height;i++){
            example[i]=[];
            for(let j=0;j<this.puzzleNode.width;j++){
                example[i][j]=new GemData(Math.floor(Math.random()*6));
            }
        }
        this.puzzleNode.init(example);
    }

    // update (dt) {}
}
