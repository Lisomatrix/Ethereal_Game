import { Subject, Observable } from 'rxjs';
import { Key } from 'protractor';

export interface KeyEvent {
    isDown: boolean;
    isUp: boolean;
    value: string;
}

export interface Key {
    isDown: boolean;
    isUp: boolean;
    value: string;
}

interface IDictionary {
    [index: string]: Key;
}

export class KeyboardHelper {

    
    private keysSubject = new Subject<KeyEvent>();    
    private keys = {} as IDictionary;

    constructor() {
        
        window.addEventListener("keydown", (event) => this.handleKeyDown(event), false);
        window.addEventListener("keyup", (event) => this.handleKeyUp(event), false);

        this.keysSubject.subscribe(keyEvent => {

            if (!this.keys[keyEvent.value]) {
                this.keys[keyEvent.value] = {} as Key;
            }

            if (keyEvent.isDown) {
                this.keys[keyEvent.value].isDown = true;
                this.keys[keyEvent.value].isUp = false;
            } else if (keyEvent.isUp) {
                this.keys[keyEvent.value].isDown = false;
                this.keys[keyEvent.value].isUp = true;
            }
        });
    }

    public isKeyDown(value: string) {
        if (this.keys[value]) {
            return this.keys[value].isDown;
        }

        return false;
    }

    private handleKeyDown(event: KeyboardEvent) {
        this.keysSubject.next({
            value: event.key,
            isDown: true,
            isUp: false
        });
    }

    private handleKeyUp(event: KeyboardEvent) {
        this.keysSubject.next({
            value: event.key,
            isDown: false,
            isUp: true
        });
    }
}