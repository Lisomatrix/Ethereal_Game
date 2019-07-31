import { Entity } from './Entity';
import { Texture, Sprite, IPoint, Loader } from 'pixi.js';
// import {  } from 'pixi-sound';
import * as PIXISound from 'pixi-sound';
import { GameStateService } from 'src/app/game-state.service';


export class Asteroid extends Entity {

    private positionSet = false;

    private stage = 1;
    private maxHP = 100 * this.stage * 2;
    private currentHP = 100 * this.stage * 2;

    private elapsed = 0.0;
    private lastTime = 0.0;
    private scale = 1;
    private clicked = false;

    private scaledTimes = 0;

    private gameState: GameStateService;

    private lastOneSecondTick = 0;

    private cooldown = 0.0;
    private passedCooldown = 0.0;
    private clickCdStart = false;

    private textures = new Array<string>();
    private sprites = new Array<Sprite>();

    private textureId = 0;

    constructor() {
        super();

        this.textureName = 'asteroid';

        this.textures.push('asteroid');
        this.textures.push('brokenAsteroid1');
        this.textures.push('brokenAsteroid2');
        this.textures.push('brokenAsteroid5');
        // this.textures.push('brokenAsteroid7');
        // this.textures.push('brokenAsteroid6');
        // this.textures.push('brokenAsteroid4');
        // this.textures.push('brokenAsteroid3');
    }

    public setGameState(state: GameStateService) {
        this.gameState = state;

        this.gameState.getMaxAsteroidHP().subscribe(hp => this.maxHP = hp);
        this.gameState.getCurrentAsteroidHP().subscribe(hp => this.currentHP = hp),

            this.gameState.getState()
                .subscribe((state) => {
                    const pickaxe = this.gameState.getPickaxeById(state.pickaxeId);

                    if (pickaxe) {

                        let speed = pickaxe.clickSpeed;

                        if (state.upgrades) {
                            speed -= state.upgrades.speed;
                        }

                        this.cooldown = speed / 0.05;
                    }
                });
    }

    public resize(width, height) {
        if (this.sprites[this.textureId]) {
            this.sprites[this.textureId].position.x = width / 2;
            this.sprites[this.textureId].position.y = height / 2;
        }
    }

    public tick(delta: number): void {

        this.elapsed += delta;
        this.lastOneSecondTick += delta;

        if (this.clickCdStart) {
            this.passedCooldown += delta;
        }

        if (this.lastTime) {

            if (this.lastOneSecondTick >= 60) {
                this.lastOneSecondTick = 0;
            }

            if (this.passedCooldown >= this.cooldown) {
                this.passedCooldown = 0.0;
                this.clickCdStart = false;
            }
        }

        if (this.elapsed >= 2.2 && this.clicked) {

            if (this.scale >= 2) {
                this.scale -= 0.02;
                this.sprites[this.textureId].scale.set(this.scale);
                this.elapsed = 0;
                this.scaledTimes++;
            } else if (this.scale < 2) {
                this.scale += 0.02;
                this.sprites[this.textureId].scale.set(this.scale);
                this.elapsed = 0;
                this.scaledTimes++;
            }

            if (this.scaledTimes >= 4) {
                this.scale = 1;
                this.sprites[this.textureId].scale.set(this.scale);
                this.elapsed = 0;
                this.clicked = false;
                this.scaledTimes = 0;
            }
        }

        if (!this.positionSet) {

            if (!this.sprites[this.textureId]) {
                return;
            }

            this.sprites[this.textureId].position.x = window.innerWidth / 2;
            this.sprites[this.textureId].position.y = window.innerHeight / 2;

            this.sprites[this.textureId].anchor.set(0.5, 0.5);
            this.sprites[this.textureId].interactive = true;
            this.sprites[this.textureId].buttonMode = true;

            this.sprites[this.textureId].on('pointerdown', (e) => {
                if (this.clickCdStart) {
                    return;
                }

                this.clicked = true;
                this.clickCdStart = true;
                this.gameState.incrementClick();
            });

            this.positionSet = true;
        }

        this.lastTime = delta;
    }

    public loadTexture(loader: Loader): void {
        this.sprite = new Sprite(loader.resources[this.textureName].texture);

        this.textures.forEach(texture => {
            const sprite = new Sprite(loader.resources[texture].texture);
            this.sprites.push(sprite);
        });
    }

    public getTexture() {

        const state = this.gameState.getStateValue();

        const maxHP = 100 * state.stage * 2;

        let textureIndex = Math.round((maxHP - this.currentHP) / (maxHP / this.sprites.length)) - 1;

        if (!textureIndex || textureIndex < 0 || textureIndex > this.sprites.length) {
            textureIndex = 0;
        }

        if (this.textureId !== textureIndex) {
            this.positionSet = false;
            this.textureId = textureIndex;
        }

        if (this.sprites[textureIndex]) {
            this.sprites[textureIndex].zIndex = 0;
        }

        return this.sprites[textureIndex];
    }
}