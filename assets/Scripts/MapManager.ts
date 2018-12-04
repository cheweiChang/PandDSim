const {ccclass, property} = cc._decorator;

@ccclass
export default class MapManager extends cc.Component {

    /** 底圖 */
    @property([cc.SpriteFrame])
    picture: cc.SpriteFrame[] = [];

    @property
    readonly width: number = 6;

    @property
    readonly height: number = 5;

    private readonly unit = 60;
    private readonly area = this.width * this.height;
    private bgpools:Array<Array<cc.Node>> = [];

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.node.setContentSize(this.width*this.unit,this.height*this.unit);
        for(let i=0;i<this.width*this.height;i++){
            let row=Math.floor(i/this.width);
            let col=i%this.width;

            let node = new cc.Node();
            node.setContentSize(this.unit,this.unit);
            node.setPosition(col*60-this.width*this.unit/2+30,row*60-this.height*this.unit/2+30);
            node.addComponent(cc.Sprite);
            node.getComponent(cc.Sprite).spriteFrame=this.picture[(row+col)%2];
            this.node.addChild(node);
            if (!this.bgpools[row]){
                this.bgpools[row] = [];
            }
            this.bgpools[row][col] = node;
        }
        cc.log(this.bgpools)
    }

    start () {

    }

    // update (dt) {}
}
