import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {
  public currentSettings = new BehaviorSubject(this.initialState());

  public set(setting: any) {
    this.currentSettings.next(setting);
  }

  public initialState() {
    return {
      header: false
    }
  }

  public refreshHeader(state) {
    let current = this.currentSettings.getValue();
    current[state] = true;
    this.currentSettings.next(current)
  }
}
