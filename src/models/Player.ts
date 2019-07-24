import { Entity } from './Entity';
import { KeyboardHelper } from 'src/helpers/keyboardHelper';


export class Player extends Entity {

    private speed = 5;

    constructor(private keyboardHelper: KeyboardHelper) {
        super();

        this.textureName = 'player';
    }

    public tick(delta: number): void {
        if (this.keyboardHelper.isKeyDown('ArrowUp')) {
            this.sprite.position.y -= this.speed;
        }

        if (this.keyboardHelper.isKeyDown('ArrowDown')) {
            this.sprite.position.y += this.speed;
        }

        if (this.keyboardHelper.isKeyDown('ArrowLeft')) {
            this.sprite.position.x -= this.speed;
        }

        if (this.keyboardHelper.isKeyDown('ArrowRight')) {
            this.sprite.position.x += this.speed;
        }
    }


}