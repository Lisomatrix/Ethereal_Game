import { Texture, Sprite, Loader } from 'pixi.js';

export abstract class Entity {

    public sprite: Sprite;
    public textureName: string;

    constructor() {

    }

    public resize(width, height) {
        
    }

    public loadTexture(loader: Loader): void {
        this.sprite = new Sprite(loader.resources[this.textureName].texture);
    }

    public tick(delta: number): void {

    }

    public getSprite(): Sprite {
        return this.sprite;
    }

    public destroy(): void {
        this.sprite.destroy();
    }
}