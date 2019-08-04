import { Component, OnInit } from "@angular/core";
import { GameStateService, Upgrade, IPickaxe } from "../game-state.service";
import { DomSanitizer } from "@angular/platform-browser";
import { PickaxeService } from "../pickaxe.service";
import { StoreService } from "../store.service";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
  isSideBarOpen = true;

  level = 0;
  progressLevel = this.sanitizer.bypassSecurityTrustStyle(
    "width: 100%;"
  );
  darkMatter = 0;
  stars = 0;

  iron = 0;
  gold = 0;
  ruby = 0;

  emerald = 0;
  saphire = 0;
  diamond = 0;

  stage = 0;
  clicks = 0;

  clickSpeed = 0.0;
  dmRate = 0;
  dropChance = 0;

  pickaxeName = "";
  damage = 0;

  private upgrades: Upgrade;
  private currentPickaxe: IPickaxe;

  constructor(
    private pickaxeService: PickaxeService,
    private sanitizer: DomSanitizer,
    private gameState: GameStateService
  ) {}

  ngOnInit() {
    this.pickaxeService.getCurrentPickaxe().subscribe(currentPickaxe => {
      this.currentPickaxe = currentPickaxe;
      if (currentPickaxe) {
        if (this.upgrades) {
          this.damage = currentPickaxe.constantDmg + this.upgrades.attack;
        } else {
          this.damage = currentPickaxe.constantDmg;
        }

        this.pickaxeName = currentPickaxe.name;
      }
    });

    this.gameState.getState().subscribe(state => {
      if (!state.xp) state.xp = 0;

      this.clicks = state.clicks;
      this.darkMatter = state.darkMatter;
      this.diamond = state.diamond;
      this.emerald = state.emerald;
      this.gold = state.gold;
      this.iron = state.iron;
      this.ruby = state.ruby;
      this.saphire = state.saphire;
      this.stage = state.stage;
      this.level = Math.floor(Math.sqrt(state.xp) / 5);
      this.upgrades = state.upgrades;

      if (this.currentPickaxe && this.upgrades) {
        this.damage = this.currentPickaxe.constantDmg + this.upgrades.attack;
        this.clickSpeed = this.currentPickaxe.clickSpeed - (0.10 * state.upgrades.speed);
        this.dmRate = state.upgrades.dmRate;
        this.dropChance = (state.stage * 0.1) + this.upgrades.dropChance;
      } else if (this.upgrades) {
        this.damage = this.upgrades.attack;
        this.clickSpeed = this.currentPickaxe.clickSpeed;
        this.dropChance = (state.stage * 0.1);
      } else {
        this.damage = 0;
      }

      if (state.lastSavedState) {
        this.stars = state.lastSavedState.stars;
      } else {
        this.stars = state.stars;
      }

      const progress = Math.sqrt(state.xp) / 5;
      const percentage = (progress - this.level) * 100;

      this.progressLevel = this.sanitizer.bypassSecurityTrustStyle(
        "width: " + percentage + "%;"
      );
    });
  }

  toggleSidebar() {
    this.isSideBarOpen = !this.isSideBarOpen;

    const newEvent = new CustomEvent<any>("sidebar", {
      detail: this.isSideBarOpen
    });
    newEvent.returnValue = this.isSideBarOpen;
    window.dispatchEvent(newEvent);
  }
}
