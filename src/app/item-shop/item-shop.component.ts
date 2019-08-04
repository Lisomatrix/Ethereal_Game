import { Component, OnInit, Input } from "@angular/core";
import { StoreService } from "../store.service";
import { PickaxeService } from "../pickaxe.service";
import {
  GameStateService,
  IPickaxe,
  IPickaxePurchase,
  IPickaxePrice
} from "../game-state.service";
import { Pickaxe } from "src/models/Pickaxe";

@Component({
  selector: "app-item-shop",
  inputs: ["price"],
  templateUrl: "./item-shop.component.html",
  styleUrls: ["./item-shop.component.scss"]
})
export class ItemShopComponent implements OnInit {
  price: number;
  image: string;
  id: number;
  owned: boolean;

  @Input()
  pickaxe: IPickaxe;

  constructor(
    private storeService: StoreService,
    private pickaxeService: PickaxeService,
    private stateService: GameStateService
  ) { }

  ngOnInit() {
    if (!this.pickaxe) {
      this.pickaxe = {
        price: {
          stars: 0
        },
        owned: false
      };
    } else {
      this.price = this.pickaxe.price.stars || 0;
      this.image = this.pickaxe.image || "";
      this.id = this.pickaxe.id || 0;
      this.owned = this.pickaxe.owned || false;
    }
  }

  buy(isStars: boolean) {
    if (!this.pickaxe) {
      return;
    }

    if (this.pickaxe.owned) {
      if (this.pickaxe) {
        this.pickaxeService.setCurrentPickaxe(this.pickaxe);
      }
    } else {
      if (this.canBuyWithMaterials() && !isStars) {
        this.storeService.buyPickaxeWithResources(this.id).subscribe(result => {
          this.stateService.handlePurchase(result as IPickaxePurchase);
        });
      } else if (this.canBuyWithStars() && isStars) {
        this.storeService.buyPickaxe(this.id).subscribe(result => {
          this.stateService.handlePurchase(result as IPickaxePurchase);
        });
      } else {
        alert("You don't have enough stars nor resources!");
      }
    }
  }

  private canBuyWithMaterials() {
    const state = this.stateService.getStateValue();

    let canBuy = true;

    Object.entries(this.pickaxe.price).forEach(([key, value]) => {

      if (key === 'stars') {
        return;
      }

      if (state[key] < value) {
        canBuy = false;
      }
    });

    return canBuy;
  }

  private canBuyWithStars() {
    const state = this.stateService.getStateValue();

    if (this.pickaxe.price.stars > state.stars) {
      return false;
    }

    return true;
  }
}
