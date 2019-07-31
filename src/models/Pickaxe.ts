import { Entity } from "./Entity";
import { Emitter } from 'pixi-particles';
import { Sprite, Loader, Texture } from 'pixi.js';
import { IPickaxe, GameStateService, GameState } from 'src/app/game-state.service';

export class Pickaxe extends Entity {

    private listenersSet = false;

    private elapsed = 0.0;
    private lastTime = 0.0;
    private rotation = -0.8;
    private clicked = false;

    private scaledTimes = 0;

    private emitter: Emitter;

    private soundName = '';

    private loader: Loader;

    private gameState: GameStateService;

    private cooldown = 0.0;
    private passedCooldown = 0.0;
    private clickCdStart = false;
    private lastOneSecondTick = 0.0;

    constructor() {
        super();
        this.textureName = 'Iron Pickaxe';
    }

    public setGameState(state: GameStateService) {
        this.gameState = state;

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

    public changePickaxe(pickaxe: IPickaxe) {
        this.textureName = pickaxe.name;
        this.soundName = pickaxe.sound;

        this.listenersSet = false;
        this.sprite = new Sprite(this.loader.resources[this.textureName].texture);
    }

    public loadTexture(loader: Loader): void {
        this.loader = loader;
        this.sprite = new Sprite(loader.resources[this.textureName].texture);
        this.createEmitter(loader.resources['particle'].texture);
        this.sprite.zIndex = 10;
    }

    public tick(delta: number): void {

        if (!this.sprite) {
            return;
        }

        this.emitter.update(delta / 60.0);

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

        if (this.elapsed >= 3 && this.clicked) {


            if (this.rotation <= -2 || this.scaledTimes === 2) {
                this.rotation += 1;
                this.sprite.rotation = this.rotation;
                this.elapsed = 0;
                this.scaledTimes++;
            } else if (this.rotation > -2 || this.scaledTimes < 2) {
                this.rotation -= 0.4;
                this.sprite.rotation = this.rotation;
                this.elapsed = 0;
                this.scaledTimes++;
            }

            if (this.scaledTimes >= 4) {

                this.rotation = -0.8;
                this.sprite.rotation = this.rotation;
                this.elapsed = 0;
                this.clicked = false;
                this.scaledTimes = 0;
                this.emitter.emit = false;
                // this.sprite.anchor.x = 0.7;
                // this.sprite.anchor.y = 0.3;
            }
        }

        if (!this.listenersSet) {

            this.sprite.rotation = this.rotation;

            // Default rotation
            // this.sprite.anchor.x = 0.7;
            // this.sprite.anchor.y = 0.3;

            this.sprite.anchor.x = 0.2;
            this.sprite.anchor.y = 0.8;

            window.onmousedown = null;

            window.onmousedown = (event: MouseEvent) => {
                if (this.clickCdStart) return;

                this.clickCdStart = true;
                this.clicked = true;
                this.emitter.emit = true;
            };

            this.listenersSet = true;
        }

        this.lastTime = delta;
    }

    public setPosition(x: number, y: number) {
        if (this.sprite) {
            this.sprite.x = x + 5;
            this.sprite.y = y + 110;
        }
    }

    private createEmitter(texture: Texture) {
        this.emitter = new Emitter(
            this.sprite,
            [texture],
            {
                "alpha": {
                    "start": 1,
                    "end": 0
                },
                "scale": {
                    "start": 0.1,
                    "end": 0.01,
                    "minimumScaleMultiplier": 1
                },
                "color": {
                    "start": "#e4f9ff",
                    "end": "#3fcbff"
                },
                "speed": {
                    "start": 100,
                    "end": 50,
                    "minimumSpeedMultiplier": 1
                },
                "acceleration": {
                    "x": 0,
                    "y": 0
                },
                "maxSpeed": 0,
                "startRotation": {
                    "min": 0,
                    "max": 360
                },
                "noRotation": false,
                "rotationSpeed": {
                    "min": 0,
                    "max": 0
                },
                "lifetime": {
                    "min": 0.2,
                    "max": 0.8
                },
                "blendMode": "normal",
                "frequency": 0.001,
                "emitterLifetime": -1,
                "maxParticles": 500,
                "pos": {
                    "x": 70,
                    "y": -70
                },
                "addAtBack": false,
                "spawnType": "circle",
                "spawnCircle": {
                    "x": 0,
                    "y": 0,
                    "r": 0
                }
            }
        );

        this.emitter.emit = false;
    }
}