import { Component, OnInit } from '@angular/core';
import { DiscordOAuth2Service } from '../discord-oauth2.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    const token = localStorage.getItem('discord-token');

    if (token) {
      this.router.navigateByUrl('/game');
    }
  }
}
