import { Texture, Application, Loader, autoDetectRenderer } from 'pixi.js';
import { Player } from './models/Player';
import { KeyboardHelper } from './helpers/keyboardHelper';
import { Entity } from './models/Entity';
import { Asteroid } from './models/Asteroid';
import { Pickaxe } from './models/Pickaxe';
import { GameStateService } from './app/game-state.service';
import { PickaxeService } from './app/pickaxe.service';

export class Game {

    private entities = new Array<any>();
    private app: Application;
    private keybordHelper = new KeyboardHelper();
    private loader: Loader;

    private intialResize = false;

    private player: Player;
    private asteroid: Asteroid;
    private pickaxe: Pickaxe;

    private gameState: GameStateService;
    private pickaxeService: PickaxeService;

    constructor(width: number, height: number, backgroundColor = 0xffffff, fillPage = false) {

        this.app = new Application({
            width,
            height,
            // backgroundColor,
            transparent: true,
            resolution: window.devicePixelRatio || 1
        });

        this.app.stage.width = this.app.view.width;
        this.app.stage.height = this.app.view.height;

        document.body.appendChild(this.app.view);
        this.app.stage.interactive = true;

        this.app.stage.on('mouseover', (x) => {});

        this.app.view.style.display = 'block';
        this.app.renderer.autoResize = true;

        if (fillPage) {
            this.app.renderer.resize(window.innerWidth, window.innerHeight);
        }

        autoDetectRenderer({ width, height });
    }

    public setGameStateService(stateService: GameStateService) {
        this.gameState = stateService;
    }

    public setPickaxeService(pickaxeService: PickaxeService) {
        this.pickaxeService = pickaxeService;
    }

    public resize(width, height) {
        this.app.renderer.resize(width, height);
        this.asteroid.resize(width, height);
    }

    public start() {
        this.loadTextures();
    }

    public destroy() {
        // this.player.destroy();
    }

    public setLoader(loader: Loader) {
        this.loader = loader;
    }

    private loadTextures() {
        var loader = this.loader;
        this.gameState.getPickaxes()
        .subscribe(pickaxes => {

            

            // const pickaxesLoad = [];

            // for (var i = 0, n = pickaxes.length; i < n; i++) {
            //     pickaxesLoad.push([pickaxes[i].name, '../assets/' + pickaxes[i].image]);
            // }

            // pickaxesLoad.push(['asteroid', '../assets/asteroid.png']);
            // pickaxesLoad.push(['particle', '../assets/particle.png']);

            // this.loader.add(pickaxesLoad).load(() => this.loadTexturesEnd);
            // for (var i = 0, n = pickaxes.length; i < n; i++) {
            //     if (!loader.resources[pickaxes[i].name]) {
            //         loader = loader.add(pickaxes[i].name, '../assets/' + pickaxes[i].image);
            //     }
            // }
        });

        

        loader
            .add('asteroid', '../assets/asteroid.png')
            .add('Iron Pickaxe', '../assets/ironpickaxe.png')
            .add('Gold Pickaxe', '../assets/goldPickaxe.png')
            .add('Dark Matter Pickaxe', '../assets/DMPickaxe.png')
            .add('Rainbow Pickaxe', '../assets/rainbowPickaxe.png')
            .add('particle', '../assets/particle.png')
            // .add('asteroid_hit', '../assets/asteroid_hit.mp3')
            .load(() => this.loadTexturesEnd());
    }

    private loadTexturesEnd() {
        // this.player = new Player(this.keybordHelper);
        // this.player.loadTexture(this.loader);
        // this.app.stage.addChild(this.player.getSprite());

        this.asteroid = new Asteroid();
        this.asteroid.setGameState(this.gameState);
        this.asteroid.loadTexture(this.loader);
        this.app.stage.addChild(this.asteroid.getSprite());

        this.pickaxe = new Pickaxe();
        this.pickaxe.setGameState(this.gameState);
        this.pickaxe.loadTexture(this.loader);
        this.app.stage.addChild(this.pickaxe.getSprite());

        this.pickaxeService.getCurrentPickaxe().subscribe(newPickaxe => {
            
            if (newPickaxe) {
            
                this.app.stage.removeChild(this.pickaxe.getSprite());
                this.pickaxe.changePickaxe(newPickaxe);
                this.app.stage.addChild(this.pickaxe.getSprite());
            }
        });

        this.runGame();
    }

    private runGame() {
        this.app.ticker.add((delta) => {

            if (!this.intialResize) {
                this.asteroid.resize(this.app.view.width, this.app.view.height);
            }

            // this.player.tick(delta);
            this.asteroid.tick(delta);

            const position = this.app.renderer.plugins.interaction.mouse.getLocalPosition(this.app.stage);
            this.pickaxe.setPosition(position.x, position.y);

            this.pickaxe.tick(delta);
        });
    }
}