import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map, catchError } from 'rxjs/operators'
import { Observable, BehaviorSubject, from, of } from 'rxjs';
import { Router } from '@angular/router';

export interface DiscordInfo {
  username?: string;
  locale?: string;
  mfa_enabled?: false;
  flags?: number;
  avatar?: string;
  discriminator?: string;
  id?: string;
  verified?: true;
  email?: string;
  sessionId?: string;
}

@Injectable({
  providedIn: 'root'
})
export class DiscordOAuth2Service {

  private userInfo: DiscordInfo;
  private userAvatarURL = new BehaviorSubject<string>('');

  private userInfoSubject = new BehaviorSubject<DiscordInfo>({});
  
  constructor(private http: HttpClient, private router: Router) { }

  public getUserInfoLocal() {
    return this.userInfoSubject.asObservable();
  }

  public getUserInfo(): Observable<DiscordInfo> {
    
    if (this.userInfo) {
      return Observable.create(this.userInfo);
    }

    const token = localStorage.getItem('discord-token');

    return this.http.get('http://localhost:3000/me?token=' + token, {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    }).pipe(
      map((info, index) => {
        
        if ((info as any).fail) {
          window.location.href = "https://discord.gg/3vCWttq";
        }

        this.userInfo = info as DiscordInfo;
        this.userInfoSubject.next(info);
        this.userAvatarURL.next(this.constructAvatarURL());

        return info as DiscordInfo;
      }),
    );
  }

  public getUserAvatar() {
    return this.userAvatarURL.asObservable();
  }

  public revokeToken() {
    const token = localStorage.getItem('discord-token');

    return this.http.get('http://localhost:3000/revoke?token=' + token, {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        // 'Authorization': 'Bearer ' + localStorage.getItem('discord-token')
      })
    }).subscribe(response => {
      localStorage.clear();
      this.router.navigateByUrl('');
    });
  }

  private constructAvatarURL() {
    return `https://cdn.discordapp.com/avatars/${this.userInfo.id}/${this.userInfo.avatar}.png`;
  }
}
