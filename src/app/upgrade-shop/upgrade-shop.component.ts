import { Component, OnInit, Input } from "@angular/core";
import { GameStateService, IUpgradePurchase } from "../game-state.service";
import { StoreService } from "../store.service";

@Component({
  selector: "app-upgrade-shop",
  templateUrl: "./upgrade-shop.component.html",
  styleUrls: ["./upgrade-shop.component.scss"]
})
export class UpgradeShopComponent implements OnInit {
  price: number;

  name: string;

  @Input("upgrade")
  upgradeId: string;

  constructor(
    private storeService: StoreService,
    private gameStateService: GameStateService
  ) {}

  ngOnInit() {
    switch (this.upgradeId) {
      case "attack": {
        this.name = "Attack";
        break;
      }

      case "speed": {
        this.name = "Click Speed";
        break;
      }

      case "dropChance": {
        this.name = "Drop Chance";
        break;
      }

      case "dmRate": {
        this.name = "DM Rate";
        break;
      }
    }

    this.gameStateService.getState().subscribe(state => {
      if (state.upgrades) {
        const val = state.upgrades[this.upgradeId];

        this.price = 250;

        switch (this.upgradeId) {
          case "attack": {
            this.price += (250 * (val / 5));
            break;
          }

          case "speed": {
            this.price += (250 * val);
            break;
          }

          case "dropChance": {
            this.price += (250 * (val * 4));
            break;
          }

          case "dmRate": {
            this.price += (250 * (val / 5));
            break;
          }

          default:
        }
      }
    });
  }

  upgradeStat() {

    const state = this.gameStateService.getStateValue();

    let stars = state.stars;

    if (state.lastSavedState) {
      stars = state.lastSavedState.stars;
    }

    let cost = 250;

    switch (this.upgradeId) {
      case "attack": {
        cost += ((state.upgrades.attack / 5) * 250);
        break;
      }

      case "speed": {
        cost += (state.upgrades.speed * 250);
        break;
      }

      case "dropChance": {
        cost = (state.upgrades.dropChance * 4 * 250);
        break;
      }

      case "dmRate": {
        // state.upgrades.dmRate += 5;
        cost = ((state.upgrades.dmRate / 5) * 250);
        break;
      }

      default:
    }

    if (stars > cost) {
      this.storeService
        .buyUpgrade(this.upgradeId)
        .subscribe(result =>
          this.gameStateService.handleUpgradePurchase(
            result as IUpgradePurchase
          )
        );

    } else {
      alert("Not enough stars");
    }
  }
}
