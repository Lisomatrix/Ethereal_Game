import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IPickaxe } from './game-state.service';

@Injectable({
  providedIn: 'root'
})
export class PickaxeService {

  private ownedPickaxes = new BehaviorSubject<Array<number>>([1]);

  private currentPickaxe = new BehaviorSubject<IPickaxe>(null);

  constructor() { }

  public getCurrentPickaxe() {
    return this.currentPickaxe.asObservable();
  }

  public setCurrentPickaxe(newPickaxe: IPickaxe) {
    this.currentPickaxe.next(newPickaxe);
  }

  public addOwnedPickaxe(newPickaxe: number) {
    const pickaxes = this.ownedPickaxes.getValue();

    pickaxes.push(newPickaxe);

    this.ownedPickaxes.next(pickaxes);
  }
}
