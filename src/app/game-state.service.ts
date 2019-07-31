import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { StoreService } from "./store.service";
import * as PIXISound from "pixi-sound";
import { PickaxeService } from "./pickaxe.service";
import { map } from 'rxjs/operators';

export interface IUpgradePurchase {
  success: boolean;
  message: string;
  upgrade: string;
}

export interface IPickaxePurchase {
  success: boolean;
  message: string;
  pickaxeId?: number;
  stars: boolean;
}

export interface GameState {
  clicks?: number;
  darkMatter?: number;
  stars?: number;
  iron?: number;
  emerald?: number;
  saphire?: number;
  gold?: number;
  ruby?: number;
  diamond?: number;
  stage?: number;
  pickaxeId?: number;
  lastStateDate?: number;
  lastSavedState?: GameState;
  asteroidCurrentHP: number;
  pickaxes?: Array<number>;
  xp?: number;
  upgrades?: Upgrade
}

export interface Upgrade {
  attack: number;
  speed: number;
  dropChance: number;
  dmRate: number;
}

export interface IPickaxe {
  id?: number;
  name?: string;
  image?: string;
  sound?: string;
  dmg?: number;
  constantDmg?: number;
  price: IPickaxePrice;
  clickSpeed?: number;
  chance?: IPickaxeChance;
  owned?: boolean;
}

export interface IPickaxePrice {
  stars: number;
  darkMatter?: number;
  iron?: number;
  gold?: number;
  ruby?: number;
  emerald?: number;
  saphire?: number;
  diamond?: number;
}

export interface IPickaxeChance {
  iron: number;
  gold: number;
  ruby: number;
  emerald: number;
  saphire: number;
  diamond: number;
}

@Injectable({
  providedIn: "root"
})
export class GameStateService {
  private breakSound: PIXISound.default.Sound;
  private hitSound: PIXISound.default.Sound;

  private gameState = new BehaviorSubject<GameState>({ asteroidCurrentHP: 0 });

  private pickaxes = new BehaviorSubject<Array<IPickaxe>>([]);

  private currentAsteroidHP = new BehaviorSubject<number>(0);
  private maxAsteroidHP = new BehaviorSubject<number>(0);

  private currentPickaxe: IPickaxe;

  constructor(
    private pickaxeService: PickaxeService,
    private store: StoreService
  ) {
    this.breakSound = PIXISound.default.Sound.from("../assets/rock_break.wav");
    this.hitSound = PIXISound.default.Sound.from("../assets/asteroid_hit.mp3");

    this.getPickaxesFromServer();

    this.pickaxeService.getCurrentPickaxe().subscribe(newPickaxe => {
      if (newPickaxe) {
        this.currentPickaxe = newPickaxe;
        const newState = this.gameState.getValue();

        newState.pickaxeId = newPickaxe.id;

        if (newState.lastSavedState) {
          newState.lastSavedState.pickaxeId = newPickaxe.id;
        }

        this.gameState.next(newState);
      }
    });

    window.onbeforeunload = event => {
      const currentState = this.gameState.getValue();
      currentState.asteroidCurrentHP = this.currentAsteroidHP.getValue();

      this.gameState.next(currentState);

      // Cancel the event
      event.preventDefault();
      // Chrome requires returnValue to be set
      event.returnValue = "";

      this.saveCurrentState().subscribe(x => {});
    };
  }

  public getStateFromServer() {
    return this.store.getState().pipe(map((state: GameState) => {

      if (state.pickaxeId) {
        this.pickaxeService.setCurrentPickaxe(
          this.getPickaxeById(state.pickaxeId)
        );
      } else {
        this.pickaxeService.setCurrentPickaxe(this.getPickaxeById(1));
      }

      if (state.lastSavedState) {
        state.lastSavedState.stars = state.stars;
        this.gameState.next(state.lastSavedState);
        this.currentAsteroidHP.next(state.lastSavedState.asteroidCurrentHP);

        if (state.lastSavedState.pickaxeId) {
          this.pickaxeService.setCurrentPickaxe(
            this.getPickaxeById(state.pickaxeId)
          );
        } else {
          this.pickaxeService.setCurrentPickaxe(this.getPickaxeById(1));
        }
      } else {
        this.gameState.next(state);
        this.currentAsteroidHP.next(100 * state.stage * 2);
      }

      this.maxAsteroidHP.next(100 * state.stage * 2);

      this.handleUpdatePickaxes(this.pickaxes.getValue());
    }));
  }

  private getPickaxesFromServer() {
    this.store.getPickaxes().subscribe((pickaxes: Object) => {

      const pickaxesArray = this.objectToArray(pickaxes);

      this.handleUpdatePickaxes(pickaxesArray);

    });
  }

  public getPickaxes() {
    return this.pickaxes.asObservable();
  }

  public getPickaxeById(id: number) {
    const pickaxes = this.pickaxes.getValue();

    for (var i = 0, n = pickaxes.length; i < n; i++) {
      if (pickaxes[i].id == id) {
        return pickaxes[i];
      }
    }

    return null;
  }

  public getMaxAsteroidHP() {
    return this.maxAsteroidHP.asObservable();
  }

  public getCurrentAsteroidHP() {
    return this.currentAsteroidHP.asObservable();
  }

  public updateState(state: GameState) {
    this.gameState.next(state);
  }

  public getState() {
    return this.gameState.asObservable();
  }

  public getStateValue() {
    return this.gameState.getValue();
  }

  public incrementClick() {
    if (!this.currentPickaxe) {
      return;
    }

    const currentGameState = this.gameState.getValue();

    currentGameState.clicks++;

    const newAsteroidHPValue =
      this.currentAsteroidHP.getValue() -
      (Math.floor(Math.random() * this.currentPickaxe.dmg) +
        this.currentPickaxe.constantDmg);

    if (newAsteroidHPValue <= 0) {
      currentGameState.stage++;

      this.currentAsteroidHP.next(100 * currentGameState.stage * 2);
      this.maxAsteroidHP.next(100 * currentGameState.stage * 2);

      const xp =
        2 * currentGameState.stage * Math.floor(Math.random() * 15) + 5;
      currentGameState.xp += xp;

      currentGameState.lastStateDate = Date.now();
      this.breakSound.play();

      this.store
        .updateState(JSON.stringify(currentGameState))
        .subscribe(minerals => {
          Object.entries(minerals).forEach(([key, value]) => {
            const state = this.getStateValue();

            state[key] += value;

            this.gameState.next(state);
          });
        });
    } else {
      this.hitSound.play();
      this.currentAsteroidHP.next(newAsteroidHPValue);
    }

    this.gameState.next(currentGameState);
  }

  public handlePurchase(result: IPickaxePurchase) {
    if (result.success) {
      const state = this.gameState.getValue();

      const pickaxe = this.getPickaxeById(result.pickaxeId);

      state.pickaxes.push(pickaxe.id);

      if (state.lastSavedState) {
        state.lastSavedState.pickaxes.push(pickaxe.id);
      }

      if (result.stars) {
        state.stars -= pickaxe.price.stars;
      } else {
        Object.entries(pickaxe.price).forEach(([key, value]) => {
          if (key === "stars") return;

          if (state[key]) {
            state[key] -= value;
          }

          if (state.lastSavedState) {
            if (state.lastSavedState[key]) {
              state.lastSavedState[key] -= value;
            }
          }
        });
      }

      this.pickaxeService.setCurrentPickaxe(pickaxe);

      this.gameState.next(state);

      this.handleUpdatePickaxes(this.pickaxes.getValue());

      alert(result.message);
    } else {
      alert(result.message);
    }
  }

  public handleUpgradePurchase(result: IUpgradePurchase) {
    if (result.success) {
      const state = this.gameState.getValue();

      let upgradeNumber = 0;

      switch (result.upgrade) {
        case 'attack': {
          state.upgrades.attack++;
          upgradeNumber = state.upgrades.attack;
          break;
        }
    
        case 'speed': {
          state.upgrades.speed++;
          upgradeNumber = state.upgrades.speed;
          break;
        }
    
        case 'dropChance': {
          state.upgrades.dropChance += 0.25;
          upgradeNumber = state.upgrades.dropChance * 4;
          break;
        }
    
        case 'dmRate': {
          state.upgrades.dmRate += 5;
          upgradeNumber = state.upgrades.dmRate / 5;
          break;
        }
    
        default: {
          state.upgrades.speed++;
          upgradeNumber = state.upgrades.speed;
          break;
        }
      }

      state.stars -= 500 + (250 * upgradeNumber);
      state.stars -= 500 + (250 * upgradeNumber);

      if (state.lastSavedState) {
        state.lastSavedState.upgrades = state.upgrades;
        state.lastSavedState.stars -= state.stars;
      }

      this.gameState.next(state);   
    } 

    alert(result.message);
  }

  public resetState() {
    this.store.reset().subscribe(state => {
      this.getStateFromServer().subscribe();
    });
  }

  private saveCurrentState() {
    return this.store.updateCurentState(this.gameState.getValue());
  }

  private objectToArray(object: Object) {
    const array = [];

    Object.entries(object).forEach(([key, val]) => {
      array.push(val);
    });

    return array;
  }

  private handleUpdatePickaxes(pickaxes: Array<IPickaxe>) {

    const state = this.gameState.getValue();

    if (state.pickaxes) {
      pickaxes.forEach(pickaxe => {
        
        for (var i = 0, n = state.pickaxes.length; i < n; i++) {
          if (state.pickaxes[i] === pickaxe.id) {
            pickaxe.owned = true;
          }
        }

      })
    } else {
      pickaxes.forEach(pickaxe => {
        pickaxe.owned = false;
      });
    }

    this.pickaxes.next(pickaxes);
  }
}
