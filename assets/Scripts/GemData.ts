import Gem from "./Gem";

export enum GemColor{
    Fire,
    Water,
    Wood,
    Light,
    Dark,
    Heal,
    Block,
    Poison,
    PoisonPlus,
    Bomb,
}

export class GemData{
    private _color:GemColor
    private _gem:Gem;

    constructor(color:GemColor){
        this._color = color ;
    }

    set gem(gem:Gem){
        if (!this._gem){
            this._gem=gem;
            this._gem.setColor(this._color);
        }else{
            throw new Error("Gem has been already set!!")
        }
    }

    get gem(){
        return this._gem;
    }
}
