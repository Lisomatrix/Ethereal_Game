import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private http: HttpClient) { }

  public getPickaxes() {
    return this.http.get(URL + '/pickaxe');
  }

  public getState() {
    const sessionId = localStorage.getItem('session');

    return this.http.get(URL + '/session/' + sessionId + '/state');
  }

  public reset() {
    const sessionId = localStorage.getItem('session');

    return this.http.post(URL + '/session/' + sessionId + '/reset', null);
  }

  public updateState(state) {
    const sessionId = localStorage.getItem('session');

    return this.http.post(URL + '/session/' + sessionId + '/update', state, { headers: new HttpHeaders({"content-type": "application/json"})});
  }

  public updateCurentState(state) {
    const sessionId = localStorage.getItem('session');

    return this.http.post(URL + '/session/' + sessionId + '/update/close', state, { headers: new HttpHeaders({"content-type": "application/json"})});
  }

  public buyPickaxe(id) {
    const sessionId = localStorage.getItem('session');

    return this.http.post(URL + '/session/' + sessionId + '/pickaxe/' + id, null);
  }

  public buyPickaxeWithResources(id) {
    const sessionId = localStorage.getItem('session');

    return this.http.post(URL + '/session/' + sessionId + '/pickaxe/materials/' + id, null);
  }

  public buyUpgrade(upgrade: string) {
    const sessionId = localStorage.getItem('session');

    return this.http.post(URL + '/session/' + sessionId + '/upgrade/' + upgrade, null);
  }

  public close() {
    const sessionId = localStorage.getItem('session');

    return this.http.post(URL + '/session/' + sessionId + '/close', null);
  }
}
