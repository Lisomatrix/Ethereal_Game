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

    constructor() {
        super();

        this.textureName = 'asteroid';
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
        this.sprite.position.x = width / 2;
        this.sprite.position.y = height / 2;
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
                this.sprite.scale.set(this.scale);
                this.elapsed = 0;
                this.scaledTimes++;
            } else if (this.scale < 2) {
                this.scale += 0.02;
                this.sprite.scale.set(this.scale);
                this.elapsed = 0;
                this.scaledTimes++;
            } 

            if (this.scaledTimes >= 4) {
                this.scale = 1;
                this.sprite.scale.set(this.scale);
                this.elapsed = 0;
                this.clicked = false;
                this.scaledTimes = 0;
            }
        }

        if (!this.positionSet) {
            
            this.sprite.position.x = window.innerWidth / 2;
            this.sprite.position.y = window.innerHeight / 2;

            this.sprite.anchor.set(0.5, 0.5);
            this.sprite.interactive = true;
            this.sprite.buttonMode = true;
            this.sprite.on('pointerdown', (e) => {
                if (this.clickCdStart) return;

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
    }
}