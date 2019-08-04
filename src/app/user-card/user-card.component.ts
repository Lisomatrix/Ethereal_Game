import { Component, OnInit } from '@angular/core';
import { DiscordOAuth2Service } from '../discord-oauth2.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  avatar: string;
  name: string;

  constructor(private discordService: DiscordOAuth2Service) { }

  ngOnInit() {
    this.discordService.getUserAvatar().subscribe(uri => {
      this.avatar = uri;
    });

    this.discordService.getUserInfoLocal().subscribe(user => {
      this.name = user.username;
    });
    // this.discordService.getUserInfo().subscribe(user => {
    //   this.name = user.username;
    // });
  }

  logout() {
    this.discordService.revokeToken();
  }
}
