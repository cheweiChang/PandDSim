import { GemData } from "./GemData";
import Gem from "./Gem";

const {ccclass, property} = cc._decorator;

@ccclass
export default class MapManager extends cc.Component {

    /** 底圖 */
    @property([cc.SpriteFrame])
    picture: cc.SpriteFrame[] = [];

    @property(cc.Prefab)
    gem:cc.Prefab = null;

    @property
    readonly width: number = 6;

    @property
    readonly height: number = 5;

    private readonly unit = 60;
    private readonly area = this.width * this.height;
    private bgpools:cc.Node[][] = [];
    private gemPools:GemData[][] = [];
    private posTable:cc.Vec2[][] = [];

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.node.setContentSize(this.width*this.unit,this.height*this.unit);
        for(let row=0;row<this.height;row++){
            for(let col=0;col<this.width;col++){
                let node = new cc.Node();

                let pos=new cc.Vec2((col-this.width*0.5+0.5)*this.unit,(row-this.height*0.5+0.5)*this.unit);
                if (!this.posTable[row]){
                    this.posTable[row] = [];
                }
                this.posTable[row][col] = pos;
                node.setPosition(pos);

                node.addComponent(cc.Sprite);
                node.getComponent(cc.Sprite).sizeMode=cc.Sprite.SizeMode.CUSTOM;
                node.getComponent(cc.Sprite).spriteFrame=this.picture[(row+col)%2];

                node.setContentSize(this.unit,this.unit);
                this.node.addChild(node);

                if (!this.bgpools[row]){
                    this.bgpools[row] = [];
                }
                this.bgpools[row][col] = node;
            }
            this.gemPools[row]=[];
        }
        // cc.log(this.bgpools)
        // cc.log(this.posTable)
    }

    start () {

    }

    init(puzzle:GemData[][]){
        if (puzzle.length != this.width || puzzle[0].length != this.height){
            cc.log("error puzzle size")
        }
        for(let row=0;row<puzzle.length;row++){
            for(let col=0;col<puzzle[row].length;col++){
                puzzle[row][col]=this.gemPools[row][col];

                let data=this.gemPools[row][col];
                let gem = cc.instantiate(this.gem).getComponent(Gem);
                data.gem=gem;
            }
        }
    }

    // update (dt) {}
}
