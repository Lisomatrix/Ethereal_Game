import { Component, OnInit, HostListener } from '@angular/core';
import { Loader } from 'pixi.js';
import { Game } from '../../game';
import { ActivatedRoute, Router } from '@angular/router';
import { DiscordOAuth2Service, DiscordInfo } from '../discord-oauth2.service';
import { StoreService } from '../store.service';
import { GameState, GameStateService } from '../game-state.service';
import { PickaxeService } from '../pickaxe.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {

  private currentState: GameState;

  private avatar: any;
  private userInfo: DiscordInfo;

  private sidebarIsOpen = true;

  private loader = new Loader();
  private game: Game;

  constructor(private gameState: GameStateService, private router: Router, private discordService: DiscordOAuth2Service, private pickaxeService: PickaxeService, private route: ActivatedRoute) {
    
    this.route.queryParamMap.subscribe(querys => {
      if (querys.get('token')) {
        localStorage.setItem('discord-token', querys.get('token'));

        // this.router.navigate([], { queryParams: { token: null }, queryParamsHandling: 'merge' });

        this.discordService.getUserInfo().subscribe(userInfo => this.handleGetUserInfo(userInfo));
      } else {

        const token = localStorage.getItem('discord-token');

        if (token) {
          this.discordService.getUserInfo().subscribe(userInfo => this.handleGetUserInfo(userInfo));
        } else {
          this.router.navigateByUrl('');
        }
      }
    });

    this.game = new Game(window.innerWidth - 300, window.innerHeight, 0xffffff, false);
    this.game.setPickaxeService(this.pickaxeService);
    this.game.setGameStateService(this.gameState);
    this.game.setLoader(this.loader);
    this.game.start();

    window.onresize = (event: UIEvent) => {
      this.game.resize(window.innerWidth - 300, window.innerHeight);
    }

    window.addEventListener('sidebar', (event: CustomEvent<any>) => {
      this.sidebarIsOpen = event.detail;

      if (this.sidebarIsOpen) {
        this.game.resize(window.innerWidth - 300, window.innerHeight);
      } else {
        this.game.resize(window.innerWidth, window.innerHeight);
      }
    });
  }

  private handleGetUserInfo(userInfo: DiscordInfo) {

    if (userInfo.sessionId) {
      localStorage.setItem('session', userInfo.sessionId);
      this.userInfo = userInfo;
    }

    this.gameState.getStateFromServer();
  }

  @HostListener('window:unload', ['$event'])
  unloadHandler(event) {
    // TODO: EXECUTE SAVE STATE
  }
}
