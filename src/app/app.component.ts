import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './app.service';
import { User } from './login/types/types';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  
  private _router: Router;
  private _AppService: AppService;
  public currentUser: User = null;
  subscription: Subscription;

  constructor(Service: AppService, Router: Router) {
    this._AppService = Service;
    this._router = Router;
    // подписываемся на сообщения
    this.subscription = this._AppService.getCurrUser()
      .subscribe(currUserName => { this.currentUser = currUserName; });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    if (this.currentUser !== null) {
      this.goToChat();
    }
    else this.goToLogin();
  }

  goToLogin(){
    this._router.navigate(['login']);
  }

  goToChat(){
    this._router.navigate(['chat']);
  }

  clickHandlerExit(){
    localStorage.removeItem("currentUser");
    this.currentUser = null;
    this._router.navigate(['login']);
  }
}
