import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private isAdminSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isAdmin = this.isAdminSubject.asObservable();
  private isLoggedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLogged = this.isLoggedSubject.asObservable();
  private usernameObs: BehaviorSubject<string> = new BehaviorSubject<string>('');
  username = this.usernameObs.asObservable();
  constructor() { }

  public setAdmin(value: boolean){
    this.isAdminSubject.next(value);
  }
  public setLogged(value: boolean){
    this.isLoggedSubject.next(value);
  }
  public setUsername(value: string){
    this.usernameObs.next(value);
  }
}
