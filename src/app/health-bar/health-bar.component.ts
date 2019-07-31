import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { GameStateService } from '../game-state.service';

@Component({
  selector: 'app-health-bar',
  templateUrl: './health-bar.component.html',
  styleUrls: ['./health-bar.component.scss']
})
export class HealthBarComponent implements OnInit {

  private sidebarIsOpen = true;
  private leftDistance = this.sanitizer.bypassSecurityTrustStyle('left: calc(50% + 50px);');
  private redPercentage = this.sanitizer.bypassSecurityTrustStyle('width: 100%');

  private maxHP = 0;
  private currentHP = 0;

  constructor(private sanitizer: DomSanitizer, private gameStateService: GameStateService) { }

  ngOnInit() {
    window.addEventListener('sidebar', (event: CustomEvent<any>) => {
      
      this.sidebarIsOpen = event.detail;

      if (this.sidebarIsOpen) {
        this.leftDistance = this.sanitizer.bypassSecurityTrustStyle('left: calc(50% + 50px);');
      } else {
        this.leftDistance = this.sanitizer.bypassSecurityTrustStyle('left: calc(50% - 120px);');
      }
    });

    this.gameStateService.getCurrentAsteroidHP().subscribe(currentHP => {
      this.currentHP = currentHP;
      this.updateHPBar();
    });

    this.gameStateService.getMaxAsteroidHP().subscribe(maxHP => {
      this.maxHP = maxHP;
      this.updateHPBar();
    });
  }

  private updateHPBar() {
    const redValue = (this.currentHP * 100) / this.maxHP;

    this.redPercentage = this.sanitizer.bypassSecurityTrustStyle('width: ' + redValue + '%');
  }
}
