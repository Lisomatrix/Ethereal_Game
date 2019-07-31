import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GameStateService, IPickaxe, IUpgradePurchase } from '../game-state.service';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.scss']
})
export class ShopPageComponent implements OnInit {

  @ViewChild('pickaxe', { static: true })
  private pickaxeList: ElementRef<HTMLDivElement>;

  @ViewChild('stats', { static: true })
  private statsList: ElementRef<HTMLDivElement>;

  private pickaxes = new Array<IPickaxe>();

  private isTab1Open = true;
  private shopOpen = false;

  private attackPrice = 500;
  private speedPrice = 500;
  private dropChancePrice = 500;
  private dmRatePrice = 500;

  private canReset = false;

  private showPopup = false;

  constructor(private storeService: StoreService, private gameStateService: GameStateService) {
    this.gameStateService.getPickaxes().subscribe(newPickaxes => {
      this.pickaxes = newPickaxes;
    });

    this.gameStateService.getState().subscribe(state => {
      if (state && state.upgrades) {
        this.attackPrice = 500 + (state.upgrades.attack * 250);
        this.dmRatePrice = 500 + ((state.upgrades.dmRate / 5) * 250);
        this.dropChancePrice = 500 + ((state.upgrades.dropChance * 4) * 250);
        this.speedPrice = 500 + (state.upgrades.speed * 250);

        this.canReset = state.stage >= 20;
      }
    });
  }

  ngOnInit() {
    this.changeTab();
  }

  private showPop() {
    this.showPopup = !this.showPopup;
  }

  private shopClicked() {
    this.shopOpen = !this.shopOpen;
  }

  private reset() {
    this.gameStateService.resetState();
    this.showPopup = !this.showPopup;
  }

  private changeTab() {
    this.isTab1Open = !this.isTab1Open;

    if (this.isTab1Open) {
      this.pickaxeList.nativeElement.style.display = 'flex';
      this.statsList.nativeElement.style.display = 'none';
    } else {
      this.pickaxeList.nativeElement.style.display = 'none';
      this.statsList.nativeElement.style.display = 'flex';
    }
  }

  private upgradeStat(upgrade: string) {

    const state = this.gameStateService.getStateValue();

    let stars = state.stars;

    if (state.lastSavedState) {
      stars = state.lastSavedState.stars;
    }

    let cost = 500;

    switch (upgrade) {
      case 'attack': {
        state.upgrades.attack++;
        cost += state.upgrades.attack * 250;
        break;
      }

      case 'speed': {
        state.upgrades.speed++;
        cost += state.upgrades.speed * 250;
        break;
      }

      case 'dropChance': {
        state.upgrades.dropChance += 0.25;
        cost = (state.upgrades.dropChance * 4) * 250;
        break;
      }

      case 'dmRate': {
        state.upgrades.dmRate += 5;
        cost = (state.upgrades.dmRate / 5) * 250;
        break;
      }

      default: {
        state.upgrades.speed++;
        cost = state.upgrades.speed * 250;
        break;
      }
    }

    if (stars > cost) {
      this.storeService.buyUpgrade(upgrade).subscribe((result) => this.gameStateService.handleUpgradePurchase(result as IUpgradePurchase));
    } else {
      alert('Not enough stars');
    }
  }
}
